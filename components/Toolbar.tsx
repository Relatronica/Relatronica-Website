'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Toolbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: '/', label: t('common.home') },
    { href: '/nexthuman', label: t('common.nexthuman') },
    { href: '/progetti', label: t('common.projects') },
    { href: '/about', label: t('common.about') },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

          {/* Language Switch */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
              aria-label={t('common.language')}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs">{locale}</span>
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 rounded-lg bg-white border border-slate-200 shadow-lg overflow-hidden z-50">
                <button
                  onClick={() => {
                    setLocale('it');
                    setIsLanguageMenuOpen(false);
                  }}
                  className={cn(
                    'w-full text-left px-4 py-2 text-sm transition-colors',
                    locale === 'it'
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {t('common.italian')}
                </button>
                <button
                  onClick={() => {
                    setLocale('en');
                    setIsLanguageMenuOpen(false);
                  }}
                  className={cn(
                    'w-full text-left px-4 py-2 text-sm transition-colors',
                    locale === 'en'
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {t('common.english')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
