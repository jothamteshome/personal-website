'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationRoutes } from '@/constants/profileConstants';

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 border-b border-surface/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-prose flex items-center justify-center py-4">
        {/* Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-8">
          {navigationRoutes.map((route) => {
            const isActive = pathname === route.route;
            return (
              <Link
                key={route.route}
                href={route.route}
                className={`text-xs sm:text-sm transition-colors duration-200 ${
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
      </div>
    </nav>
  );
}
