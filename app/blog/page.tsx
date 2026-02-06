import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { blogs as staticBlogs } from "@/app/data/blogs"
import { ArrowRight, ExternalLink, Youtube, FileText } from "lucide-react"
import { getAllPostSlugs, getPostData } from "@/lib/blogs"
import { BlogIcon } from "@/components/blog-icon"
import { PdfIcon } from "@/components/pdf-icon"

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?]+)/,
    /(?:youtube\.com\/embed\/)([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnail(url: string): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// Helper function to determine link type
function getLinkType(link: string | undefined): 'youtube' | 'pdf' | 'other' | 'none' {
  if (!link) return 'none';
  if (link.includes('youtube.com') || link.includes('youtu.be')) return 'youtube';
  if (link.endsWith('.pdf')) return 'pdf';
  return 'other';
}

export default async function BlogPage() {
  // Fetch dynamic blogs from markdown files
  const slugs = getAllPostSlugs();
  const dynamicPosts = await Promise.all(
    slugs.map(slug => getPostData(slug))
  );

  // Combine and normalize posts
  const allPosts = [
    // Dynamic posts (Markdown)
    ...dynamicPosts
      .filter((p): p is NonNullable<typeof p> => p !== null)
      .map(p => ({
        ...p,
        link: undefined, // ensure no link for internal blogs
        isExternal: false
      })),
    // Static posts (Tidbits / Interesting Bits)
    ...staticBlogs
      .filter(b => b.category === 'Interesting Bit')
      .map(b => ({
        ...b,
        isExternal: true
      }))
  ].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Blog & Updates
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Research insights, news, and interesting bits from the Poggio Lab.
            </p>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-4 mb-12">
            Latest Updates
          </h2>
          <div className="space-y-12">
            {allPosts.map((post) => {
              const linkType = getLinkType(post.link);

              return (
                <article key={post.slug} className="group">
                  {post.link ? (
                    // External Link / Tidbit
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="flex gap-6 items-start">
                        {/* Preview Icon */}
                        <div className="flex-shrink-0 w-48 h-32 rounded-xl bg-muted overflow-hidden">
                          {linkType === 'youtube' && getYouTubeThumbnail(post.link) ? (
                            <img
                              src={getYouTubeThumbnail(post.link) || ''}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          ) : linkType === 'pdf' && post.link ? (
                            <div className="w-full h-full">
                              <PdfIcon className="w-full h-full" />
                            </div>
                          ) : linkType === 'youtube' ? (
                            <div className="w-full h-full flex items-center justify-center">
                              <Youtube className="w-16 h-16 text-red-500" strokeWidth={1.5} />
                            </div>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ExternalLink className="w-16 h-16 text-muted-foreground" strokeWidth={1.5} />
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-secondary proportionate-nums text-secondary-foreground text-xs font-medium border border-border">
                              Other
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {post.date}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-muted-foreground transition-colors text-balance flex items-center gap-2">
                            {post.title}
                            <ExternalLink className="w-5 h-5 opacity-50" />
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-dotted underline-offset-4 group-hover:text-muted-foreground transition-colors">
                            View source
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    // Internal Blog Post
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="flex gap-6 items-start">
                        {/* Blog Icon */}
                        <div className="flex-shrink-0 w-48 h-32 rounded-xl bg-muted overflow-hidden">
                          <BlogIcon
                            slug={post.slug}
                            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Blog Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                              Blog
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {post.date}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-muted-foreground transition-colors text-balance">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-dotted underline-offset-4 group-hover:text-muted-foreground transition-colors">
                            Read article
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
