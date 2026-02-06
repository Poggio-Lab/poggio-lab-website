"use client"

import { useRef, useState, useEffect } from "react"
import { cn, getBasePath } from "@/lib/utils"

interface BlogIconProps {
    slug: string
    className?: string
}

export function BlogIcon({ slug, className }: BlogIconProps) {
    const [svgContent, setSvgContent] = useState<string | null>(null)
    const [error, setError] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<Animation | null>(null)

    useEffect(() => {
        // Add cache buster to force reload
        fetch(`${getBasePath()}/blog/${slug}/icon?v=${Date.now()}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch")
                return res.text()
            })
            .then((text) => setSvgContent(text))
            .catch((err) => {
                console.error("Failed to fetch icon", err)
                setError(true)
            })
    }, [slug])

    const handleMouseEnter = () => {
        if (!containerRef.current) return
        const group = containerRef.current.querySelector('.js-orbit-group')
        if (!group) return

        // If there is an existing return animation, cancel it
        if (animationRef.current) {
            animationRef.current.cancel()
        }

        // Create new infinite rotation from current state (which is 0 or whatever cancel left it at?)
        // Actually, if we just cancel, it snaps back. We need to handle continuity if we re-enter quickly.
        // For simplicity first:
        // Set up keyframes 0->360.
        // If we want smooth re-entry, we might need to read computed style?
        // Let's rely on the fact that if we create a new animation,
        // it starts from the underlying value.
        // BUT, we want it to ROTATE.
        // Let's just start a standard infinite rotation.

        // Keyframes
        const keyframes = [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ]

        // However, if we simply start 0->360, it might jump if we were "in the middle" of a reverse.
        // WAAPI is smart. If we don't specify the start, it uses current.
        // But for rotation, "current" might be 0 if no animation is applying.
        // Let's try specifying just the destination, but WAAPI needs 2 frames usually for rotation to know direction?
        // Actually, 'rotate(360deg)' is ambiguous without a start.

        // CORRECT APPROACH:
        // 1. Get current computed rotation.
        // 2. Animate from current to current + 360.
        // This ensures smoothness.

        const computedStyle = window.getComputedStyle(group)
        // Transform is a matrix. Need to parse.
        // Parsing matrix to degrees is annoying.

        // SIMPLER APPROACH:
        // Always start fresh?
        // When we hover, we want it to spin.
        // When we leave, we reverse.

        // Let's stick to the user request: "finish rotation or go back to original state by moving backwards".
        // "Moving backwards" = Reverse.

        // 1. Start or Resume infinite rotation.
        // If we effectively use `playbackRate`, we can just reverse it!

        if (!animationRef.current) {
            const keyframes = [
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
            ]

            const anim = group.animate(keyframes, {
                duration: 20000,
                iterations: Infinity
            })
            animationRef.current = anim
        } else {
            // If it exists, ensure it is playing forward
            animationRef.current.playbackRate = 1
            animationRef.current.play()
        }
    }

    const handleMouseLeave = () => {
        if (!containerRef.current || !animationRef.current) return

        const group = containerRef.current.querySelector('.js-orbit-group')
        if (!group) return

        const anim = animationRef.current
        anim.pause()

        const DURATION = 20000
        const currentTime = (anim.currentTime as number) || 0
        const progress = (currentTime % DURATION) / DURATION
        const currentAngle = progress * 360

        // Calculate target and duration based on progress
        const isReversing = progress < 0.5
        const targetAngle = isReversing ? 0 : 360

        // Distance to cover (in degrees)
        const distance = Math.abs(targetAngle - currentAngle)

        // Normal time to cover this distance
        const normalTime = (distance / 360) * DURATION

        // 4x faster
        const fastTime = normalTime / 4

        // Create exit animation
        const keyframes = [
            { transform: `rotate(${currentAngle}deg)` },
            { transform: `rotate(${targetAngle}deg)` }
        ]

        // Cancel the infinite one
        anim.cancel()

        const exitAnim = group.animate(keyframes, {
            duration: fastTime,
            fill: 'forwards'
        })

        animationRef.current = exitAnim

        exitAnim.onfinish = () => {
            exitAnim.cancel()
            animationRef.current = null
        }
    }


    if (error || !svgContent) {
        return (
            <div className={cn("w-full h-full bg-muted animate-pulse", className)} />
        )
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:object-cover",
                className
            )}
            dangerouslySetInnerHTML={{ __html: svgContent }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    )
}
