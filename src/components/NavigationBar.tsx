'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationRoutes } from '@/constants/profileConstants';
import ThemeToggle from './ThemeToggle';

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 border-b border-surface/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-prose flex items-center justify-between py-4">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground hover:text-accent transition-colors">
            JT
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-8">
          {navigationRoutes.map((route) => {
            const isActive = pathname === route.route;
            return (
              <Link
                key={route.route}
                href={route.route}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-accent font-medium'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {route.name}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden border-t border-surface/50 bg-surface/30">
        <div className="container-prose flex flex-wrap gap-2 py-3">
          {navigationRoutes.map((route) => {
            const isActive = pathname === route.route;
            return (
              <Link
                key={route.route}
                href={route.route}
                className={`text-xs px-3 py-1 rounded transition-colors ${
                  isActive
                    ? 'bg-accent text-background'
                    : 'bg-surface text-muted hover:text-foreground'
                }`}
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
