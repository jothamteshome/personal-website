import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Jotham Teshome`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        Back to blog
      </Link>

      {/* Post Header */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{post.title}</h1>

        <div className="flex gap-3 items-center">
          <time className="text-sm text-muted">
            {new Date(post.date).toLocaleDateString('en-US', {
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
      </header>

      {/* MDX Content */}
      <div className="prose prose-invert max-w-none text-muted">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
