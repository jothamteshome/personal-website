import type { Metadata } from 'next';
import NavigationBar from '@/components/NavigationBar';
import '@/globals.css';

export const metadata: Metadata = {
  title: 'Jotham Teshome',
  description:
    'Welcome to Jotham\'s Portfolio Website. Here you can find a variety of projects I have worked on, as well as the different skills and technologies I know. Please feel free to reach out to discuss more!',
  keywords: ['next.js', 'portfolio', 'react', 'typescript', 'tailwind', 'blog'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-(--color-background) text-(--color-foreground) min-h-screen antialiased">
          <NavigationBar />
          <main className="container-prose py-0">
            {children}
          </main>
      </body>
    </html>
  );
}
