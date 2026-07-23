'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import { ChevronDown, Globe, Menu, X, Sun, Moon, Pizza } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORK_HREFS = ['/nexthuman', '/observatory', '/progetti'] as const;

export function Toolbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false);
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const workMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const hasAnimated = useRef(false);

  const workItems = [
    {
      href: '/nexthuman',
      label: t('common.nexthuman'),
      description: t('common.navWorkNextHumanDesc'),
    },
    {
      href: '/observatory',
      label: t('common.observatory'),
      description: t('common.navWorkPulseDesc'),
    },
    {
      href: '/progetti',
      label: t('common.projects'),
      description: t('common.navWorkProjectsDesc'),
    },
  ];

  const navItems = [
    { href: '/learn', label: t('common.learn') },
    { href: '/manifesto', label: t('common.manifesto') },
    { href: '/about', label: t('common.about') },
  ];

  const isNavItemActive = useCallback((href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  }, [pathname]);

  const isWorkActive = WORK_HREFS.some(
    (href) => pathname === href || pathname.startsWith(href + '/')
  );

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsWorkMenuOpen(false);
    setIsMobileWorkOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen && isWorkActive) {
      setIsMobileWorkOpen(true);
    }
  }, [isMobileMenuOpen, isWorkActive]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
      if (workMenuRef.current && !workMenuRef.current.contains(event.target as Node)) {
        setIsWorkMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsWorkMenuOpen(false);
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
    setIsWorkMenuOpen(false);
  }, []);

  const toggleWorkMenu = useCallback(() => {
    setIsWorkMenuOpen((prev) => !prev);
    setIsLanguageMenuOpen(false);
  }, []);

  const toggleLanguageMenu = useCallback(() => {
    setIsLanguageMenuOpen((prev) => !prev);
    setIsWorkMenuOpen(false);
  }, []);

  return (
    <>
      {/* ===== DESKTOP NAVBAR (lg+) ===== */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block max-w-[calc(100vw-2rem)]">
        <div className="apple-card rounded-full px-6 py-2.5 shadow-lg">
          <div className="flex items-center justify-center gap-4 xl:gap-5">
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

            <div className="w-px h-5 bg-foreground/10 shrink-0" />

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

              <div className="relative" ref={workMenuRef}>
                <button
                  type="button"
                  onClick={toggleWorkMenu}
                  data-active={isWorkActive}
                  aria-expanded={isWorkMenuOpen}
                  aria-haspopup="true"
                  className={cn(
                    'text-sm font-medium relative z-10 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors duration-200 inline-flex items-center gap-1',
                    isWorkActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                  )}
                >
                  {t('common.work')}
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      isWorkMenuOpen && 'rotate-180'
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isWorkMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-72 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden z-50"
                    >
                      <div className="py-1.5">
                        {workItems.map((item) => {
                          const isActive = isNavItemActive(item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsWorkMenuOpen(false)}
                              className={cn(
                                'block px-4 py-2.5 transition-colors',
                                isActive
                                  ? 'bg-blue-50 dark:bg-blue-950/50'
                                  : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                              )}
                            >
                              <span
                                className={cn(
                                  'block text-sm font-medium',
                                  isActive
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-slate-800 dark:text-slate-100'
                                )}
                              >
                                {item.label}
                              </span>
                              <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                                {item.description}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => {
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

            <div className="w-px h-5 bg-foreground/10 shrink-0" />

            <div className="flex items-center gap-1 shrink-0">
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
                        onClick={() => {
                          setLocale('it');
                          setIsLanguageMenuOpen(false);
                        }}
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
                        onClick={() => {
                          setLocale('en');
                          setIsLanguageMenuOpen(false);
                        }}
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

              {/* Donation / Support Button */}
              <a
                href="https://buymeacoffee.com/relatronica"
                target="_blank"
                rel="noopener noreferrer"
                title={t('common.supportTooltip')}
                className="flex items-center gap-1.5 px-3 py-1.5 ml-1 rounded-full text-xs font-medium bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/25 dark:border-amber-400/25 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow group shrink-0"
                aria-label={t('common.supportTooltip')}
              >
                <Pizza className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 group-hover:text-white transition-colors" />
                <span className="whitespace-nowrap">{t('common.donateShort')}</span>
              </a>
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
              {/* Pizza mobile quick button */}
              <a
                href="https://buymeacoffee.com/relatronica"
                target="_blank"
                rel="noopener noreferrer"
                title={t('common.supportTooltip')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-500 hover:text-white transition-all duration-200 shrink-0"
                aria-label={t('common.supportTooltip')}
              >
                <Pizza className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span className="text-[11px] font-medium">{t('common.donateShort')}</span>
              </a>

              {/* Theme Toggle (mobile) */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => {
                  setLocale(locale === 'it' ? 'en' : 'it');
                }}
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
              <button
                type="button"
                onClick={() => setIsMobileWorkOpen((prev) => !prev)}
                aria-expanded={isMobileWorkOpen}
                className={cn(
                  'flex items-center justify-between text-sm font-medium transition-all px-4 py-2.5 rounded-xl',
                  isWorkActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                )}
              >
                {t('common.work')}
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    isMobileWorkOpen && 'rotate-180'
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-200 ease-in-out',
                  isMobileWorkOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="flex flex-col gap-0.5 pl-3 pb-1">
                  {workItems.map((item) => {
                    const isActive = isNavItemActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'text-sm font-medium transition-all px-4 py-2 rounded-xl',
                          isActive
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
                            : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

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
                <a
                  href="https://buymeacoffee.com/relatronica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-200 bg-amber-500/15 dark:bg-amber-500/25 border border-amber-500/30 rounded-xl px-4 py-2.5 hover:bg-amber-500 hover:text-white transition-all duration-200 shadow-sm"
                >
                  <Pizza className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400" />
                  <span>{t('common.supportTooltip')}</span>
                </a>
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
    </>
  );
}
