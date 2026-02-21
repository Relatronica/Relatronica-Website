'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, GraduationCap, Brain, Lock, Wand2 } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { useI18n } from '@/lib/i18n';
import { activeCourses, comingSoonCourses, getCourseTotalLessons, getCourseReadingTime, getAcademyTotalLessons } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Brain, Lock, Wand2, GraduationCap,
};

const COLOR_MAP: Record<string, { icon: string; bg: string; border: string; gradient: string }> = {
  blue: { icon: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/50', border: 'border-blue-200 dark:border-blue-800', gradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30' },
  purple: { icon: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-950/50', border: 'border-purple-200 dark:border-purple-800', gradient: 'from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30' },
  emerald: { icon: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/50', border: 'border-emerald-200 dark:border-emerald-800', gradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30' },
  orange: { icon: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-950/50', border: 'border-orange-200 dark:border-orange-800', gradient: 'from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30' },
};

export default function AcademyPage() {
  const { t, locale } = useI18n();
  const { completedLessons } = useCourseProgress();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  const totalLessons = getAcademyTotalLessons();
  const completedCount = completedLessons.length;

  const academySchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Relatronica Academy",
    "description": t('learn.subtitle'),
    "url": `${siteUrl}/learn`,
    "parentOrganization": { "@type": "Organization", "name": "Relatronica", "url": siteUrl },
  };

  return (
    <>
      <StructuredData data={academySchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-6xl mx-auto">

            <FadeIn className="text-center mb-20">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 mb-6">
                <GraduationCap className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                Relatronica <span className="text-blue-600 dark:text-blue-400">Academy</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                {t('learn.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {activeCourses.length + comingSoonCourses.length} {t('learn.stats.courses')}
                </span>
                <span className="flex items-center gap-2">
                  {totalLessons} {t('learn.stats.lessons')}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-200 dark:border-emerald-800">
                  {t('learn.free')}
                </span>
              </div>
              {completedCount > 0 && (
                <div className="mt-6">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    {completedCount}/{totalLessons} {t('learn.stats.completed')}
                  </div>
                </div>
              )}
            </FadeIn>

            <FadeIn delay={0.2} className="mb-16">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                {t('learn.availableCourses')}
              </h2>
              <div className="space-y-6">
                {activeCourses.map((course) => {
                  const Icon = ICON_MAP[course.iconName] || BookOpen;
                  const colors = COLOR_MAP[course.color] || COLOR_MAP.blue;
                  const content = course.content[locale as 'it' | 'en'] || course.content.it;
                  const lessonCount = getCourseTotalLessons(course);
                  const readingTime = getCourseReadingTime(course);
                  const courseCompletedCount = course.modules.reduce(
                    (acc, mod) => acc + mod.lessons.filter(
                      (l) => completedLessons.includes(`${course.slug}/${mod.slug}/${l.slug}`)
                    ).length, 0
                  );

                  return (
                    <Link
                      key={course.slug}
                      href={`/learn/${course.slug}`}
                      className={`group block rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.gradient} p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/80 dark:bg-white/10 flex items-center justify-center shadow-sm">
                          <Icon className={`w-7 h-7 ${colors.icon}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {content.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-[15px]">
                            {content.longDescription}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <BookOpen className="w-4 h-4" />
                              {course.modules.length} {t('learn.stats.modules')} · {lessonCount} {t('learn.stats.lessons')}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              ~{readingTime} min
                            </span>
                            {courseCompletedCount > 0 && (
                              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                                {courseCompletedCount}/{lessonCount} {t('learn.stats.completed')}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0 self-center">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full text-sm font-semibold text-slate-900 dark:text-white group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 group-hover:border-slate-900 dark:group-hover:border-white transition-all duration-200 shadow-sm">
                            {courseCompletedCount > 0 ? t('learn.continue') : t('learn.start')}
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </FadeIn>

            {comingSoonCourses.length > 0 && (
              <StaggerChildren className="mb-16" staggerDelay={0.1}>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                  {t('learn.comingSoon')}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {comingSoonCourses.map((course) => {
                    const Icon = ICON_MAP[course.iconName] || BookOpen;
                    const colors = COLOR_MAP[course.color] || COLOR_MAP.blue;
                    const content = course.content[locale as 'it' | 'en'] || course.content.it;

                    return (
                      <StaggerItem key={course.slug}>
                        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-6 shadow-sm opacity-80">
                          <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                            <Icon className={`w-5 h-5 ${colors.icon}`} />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{content.title}</h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{content.description}</p>
                          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium">
                            {t('common.comingSoon')}
                          </span>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerChildren>
            )}

            <FadeIn className="text-center">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-950/30 p-10 shadow-sm max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t('learn.cta.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-[15px] leading-relaxed">
                  {t('learn.cta.description')}
                </p>
                <Link
                  href="/manifesto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                >
                  {t('learn.cta.button')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </DotBoard>
    </>
  );
}
