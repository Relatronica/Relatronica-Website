'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

export function Toolbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Sliding indicator state
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const hasAnimated = useRef(false);

  const navItems = [
    { href: '/', label: t('common.home') },
    { href: '/nexthuman', label: t('common.nexthuman') },
    { href: '/observatory', label: t('common.observatory') },
    { href: '/progetti', label: t('common.projects') },
    { href: '/learn', label: t('common.learn') },
    { href: '/manifesto', label: t('common.manifesto') },
    { href: '/about', label: t('common.about') },
  ];

  const isNavItemActive = useCallback((href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  }, [pathname]);

  const updateIndicator = useCallback(() => {
    const container = navContainerRef.current;
    if (!container) return;

    const activeEl = container.querySelector(
      '[data-active="true"]'
    ) as HTMLElement | null;

    if (activeEl) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
      });
      requestAnimationFrame(() => {
        hasAnimated.current = true;
      });
    } else {
      setIndicatorStyle(null);
    }
  }, [pathname, locale]);

  useEffect(() => {
    updateIndicator();

    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) {
        requestAnimationFrame(updateIndicator);
      }
    });

    return () => { cancelled = true; };
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  // Chiudi il menu mobile quando si cambia pagina
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Chiudi i menu al click esterno
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsLanguageMenuOpen(false);
  }, []);

  return (
    <>
      {/* ===== DESKTOP NAVBAR (lg+) ===== */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div className="apple-card rounded-full px-10 py-4 shadow-lg">
          <div className="flex items-center justify-center gap-7">
            {/* Logo e Brand */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/logo.png"
                alt="Relatronica"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-lg font-bold text-foreground">Relatronica</span>
            </Link>

            {/* Separatore */}
            <div className="w-px h-6 bg-foreground/10 shrink-0" />

            {/* Navigation Items */}
            <div className="relative flex items-center gap-1.5" ref={navContainerRef}>
              {/* Sliding pill indicator */}
              {indicatorStyle && (
                <div
                  className={cn(
                    'absolute top-0 bottom-0 rounded-full bg-blue-50',
                    hasAnimated.current
                      ? 'transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]'
                      : ''
                  )}
                  style={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                  }}
                  aria-hidden="true"
                />
              )}
              {navItems.map((item) => {
                const isActive = isNavItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-active={isActive}
                    className={cn(
                      'text-sm font-medium relative z-10 px-3.5 py-2 rounded-full whitespace-nowrap transition-colors duration-200',
                      isActive
                        ? 'text-blue-600'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Separatore */}
            <div className="w-px h-6 bg-foreground/10 shrink-0" />

            {/* Language Switch */}
            <div className="relative shrink-0" ref={menuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
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

      {/* ===== MOBILE / TABLET NAVBAR (< lg) ===== */}
      <nav className="fixed top-4 left-4 right-4 z-50 lg:hidden" ref={mobileMenuRef}>
        <div className="apple-card rounded-2xl px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo e Brand */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Relatronica"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-base font-bold text-foreground">Relatronica</span>
            </Link>

            {/* Hamburger + Language */}
            <div className="flex items-center gap-1">
              {/* Language Switch (compatto) */}
              <button
                onClick={() => {
                  setLocale(locale === 'it' ? 'en' : 'it');
                }}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                aria-label={t('common.language')}
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase text-xs font-medium">{locale}</span>
              </button>

              {/* Hamburger Button */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              isMobileMenuOpen ? 'max-h-[28rem] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
            )}
          >
            <div className="border-t border-foreground/5 pt-3 pb-1 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-all px-4 py-2.5 rounded-xl',
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

      {/* Overlay scuro quando il menu mobile è aperto */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
