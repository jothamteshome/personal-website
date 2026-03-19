import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 – Page Not Found | Jotham Teshome',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-20">
      <p className="text-6xl font-bold text-accent mb-4">404</p>
      <h1 className="text-2xl font-semibold text-foreground mb-2">Page not found</h1>
      <p className="text-muted mb-8">The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="text-sm text-accent hover:text-accent-secondary transition-colors font-medium"
      >
        ← Back to home
      </Link>
    </div>
  );
}
