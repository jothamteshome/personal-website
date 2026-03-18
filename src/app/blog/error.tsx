'use client';

import Link from 'next/link';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold text-foreground mb-4">Something went wrong</h1>
      <p className="text-muted mb-6">
        There was an error loading the blog.{' '}
        <button
          onClick={reset}
          className="text-accent underline underline-offset-2 hover:no-underline"
        >
          Try again
        </button>
        , or head back{' '}
        <Link href="/" className="text-accent underline underline-offset-2 hover:no-underline">
          home
        </Link>
        .
      </p>
    </div>
  );
}
