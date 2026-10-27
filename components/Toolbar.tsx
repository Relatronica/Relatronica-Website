'use client';

import { Link, usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import type { Locale } from '@/i18n';
import { Globe, Menu, X, Sun, Moon, HeartHandshake } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SupportModal } from '@/components/SupportModal';

export function Toolbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const hasAnimated = useRef(false);

  const primaryNavItems = [
    { href: '/progetti', label: t('common.projects') },
    { href: '/learn', label: t('common.learn') },
    { href: '/observatory', label: t('common.observatory') },
  ];

  const secondaryNavItems = [
    { href: '/manifesto', label: t('common.manifesto') },
    { href: '/about', label: t('common.about') },
  ];

  const navItems = [...primaryNavItems, ...secondaryNavItems];

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
  }, []);

  useEffect(() => {
    updateIndicator();

    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) {
        requestAnimationFrame(updateIndicator);
      }
    });

    return () => { cancelled = true; };
  }, [updateIndicator, pathname, locale]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsLanguageMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

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

  const toggleLanguageMenu = useCallback(() => {
    setIsLanguageMenuOpen((prev) => !prev);
  }, []);

  const switchLocale = useCallback(
    (next: Locale) => {
      router.replace(pathname, { locale: next });
      setIsLanguageMenuOpen(false);
    },
    [router, pathname]
  );

  return (
    <>
      {/* ===== DESKTOP NAVBAR (lg+) ===== */}
      <nav className="fixed top-6 left-0 right-0 z-50 hidden lg:block px-6">
        <div className="max-w-7xl mx-auto">
          <div className="apple-card rounded-full px-6 py-2.5 shadow-lg">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              {/* Sinistra: navigazione */}
              <div className="flex items-center min-w-0">
                <div className="relative flex items-center gap-1" ref={navContainerRef}>
                  {indicatorStyle && (
                    <div
                      className={cn(
                        'absolute top-0 bottom-0 rounded-full bg-blue-50 dark:bg-blue-950/50',
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

                  {primaryNavItems.map((item) => {
                    const isActive = isNavItemActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        data-active={isActive}
                        className={cn(
                          'text-sm font-medium relative z-10 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors duration-200',
                          isActive
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Centro: logo */}
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Relatronica"
                  width={26}
                  height={26}
                  className="object-contain"
                />
                <span className="text-base font-bold text-foreground">Relatronica</span>
              </Link>

              {/* Destra: identità + utility */}
              <div className="flex items-center justify-end gap-1 min-w-0">
                {secondaryNavItems.map((item) => {
                  const isActive = isNavItemActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'text-sm font-medium px-3 py-1.5 rounded-full whitespace-nowrap border transition-colors duration-200',
                        isActive
                          ? 'text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50'
                          : 'text-foreground/70 border-foreground/10 hover:text-foreground hover:bg-foreground/5'
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="w-px h-5 bg-foreground/10 shrink-0 mx-1" />

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </motion.div>
                  </AnimatePresence>
                </button>

                {/* Language Switch */}
                <div className="relative shrink-0" ref={menuRef}>
                  <button
                    onClick={toggleLanguageMenu}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                    aria-label={t('common.language')}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span className="uppercase text-xs">{locale}</span>
                  </button>
                  <AnimatePresence>
                    {isLanguageMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-2 w-40 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden z-50"
                      >
                        <button
                          onClick={() => switchLocale('it')}
                          className={cn(
                            'w-full text-left px-4 py-2 text-sm transition-colors',
                            locale === 'it'
                              ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-medium'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                          )}
                        >
                          {t('common.italian')}
                        </button>
                        <button
                          onClick={() => switchLocale('en')}
                          className={cn(
                            'w-full text-left px-4 py-2 text-sm transition-colors',
                            locale === 'en'
                              ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-medium'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                          )}
                        >
                          {t('common.english')}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Support Button */}
                <button
                  onClick={() => setIsSupportModalOpen(true)}
                  title={t('common.supportTooltip')}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 ml-1 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 dark:border-emerald-400/25 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow group shrink-0"
                  aria-label={t('common.supportTooltip')}
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                  <span className="whitespace-nowrap">{t('common.donateShort')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE / TABLET NAVBAR (< lg) ===== */}
      <nav className="fixed top-4 left-4 right-4 z-50 lg:hidden" ref={mobileMenuRef}>
        <div className="apple-card rounded-2xl px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between gap-2">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/logo.png"
                alt="Relatronica"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-base font-bold text-foreground truncate">Relatronica</span>
            </Link>

            <div className="flex items-center gap-1.5 shrink-0">
              {/* Support mobile quick button */}
              <button
                onClick={() => setIsSupportModalOpen(true)}
                title={t('common.supportTooltip')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all duration-200 shrink-0"
                aria-label={t('common.supportTooltip')}
              >
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[11px] font-medium">{t('common.donateShort')}</span>
              </button>

              {/* Theme Toggle (mobile) */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => switchLocale(locale === 'it' ? 'en' : 'it')}
                className="p-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                aria-label={t('common.language')}
              >
                <Globe className="w-4 h-4" />
              </button>

              <button
                onClick={toggleMobileMenu}
                className="p-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
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

          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              isMobileMenuOpen ? 'max-h-[38rem] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
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
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSupportModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-500/15 dark:bg-emerald-500/25 border border-emerald-500/30 rounded-xl px-4 py-2.5 hover:bg-emerald-600 hover:text-white transition-all duration-200 shadow-sm"
                >
                  <HeartHandshake className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t('common.supportTooltip')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Support / Donation Modal */}
      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </>
  );
}
