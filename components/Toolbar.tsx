'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Toolbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/progetti', label: 'Progetti' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="apple-card rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center justify-center gap-8">
          {/* Logo e Brand */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Relatronica"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-lg font-bold text-foreground">Relatronica</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all relative px-3 py-1.5 rounded-full',
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
