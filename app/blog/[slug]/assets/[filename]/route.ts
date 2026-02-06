import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    context: { params: Promise<{ slug: string; filename: string }> }
) {
    const { slug, filename } = await context.params;

    // Security check: prevent directory traversal
    if (filename.includes('..') || slug.includes('..')) {
        return new NextResponse('Invalid path', { status: 400 });
    }

    const filePath = path.join(
        process.cwd(),
        'content/blogs',
        slug,
        'assets',
        filename
    );

    if (!fs.existsSync(filePath)) {
        return new NextResponse('File not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    // Determine content type
    const ext = path.extname(filename).toLowerCase();
    let contentType = 'application/octet-stream';
    if (ext === '.png') contentType = 'image/png';
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    if (ext === '.gif') contentType = 'image/gif';
    if (ext === '.svg') contentType = 'image/svg+xml';

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
}
