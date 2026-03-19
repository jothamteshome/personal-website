import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-20">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-muted leading-relaxed">
          Writing about software, systems, and things I'm learning along the way.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-surface pb-8 last:border-b-0">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>

                <div className="flex gap-3 items-center mb-3">
                  <time className="text-sm text-muted">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      timeZone: 'UTC',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  {post.tags.length > 0 && (
                    <>
                      <span className="text-muted">·</span>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-xs text-muted">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <p className="text-muted leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
