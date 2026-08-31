'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn } from '@/components/motion';
import { ACADEMY_SECTIONS, CourseCatalogCard } from '@/components/learn/CourseCatalogCard';
import { useI18n } from '@/lib/i18n';
import { activeCourses, comingSoonCourses, getAcademyTotalLessons, getCourse } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';

export default function AcademyPage() {
  const { t, locale } = useI18n();
  const { completedLessons, isQuizPassed } = useCourseProgress();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  const totalLessons = getAcademyTotalLessons();
  const completedCount = completedLessons.length;

  const catalogLabels = {
    lessons: t('learn.stats.lessons'),
    quiz: t('learn.catalog.quiz'),
    quizzes: t('learn.catalog.quizzes'),
    exercise: t('learn.catalog.exercise'),
    exercises: t('learn.catalog.exercises'),
    certificate: t('learn.catalog.certificate'),
    completed: t('learn.catalog.completedBadge'),
    comingSoon: t('common.comingSoon'),
  };

  const academySchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Relatronica Academy',
    description: t('learn.subtitle'),
    url: `${siteUrl}/learn`,
    parentOrganization: { '@type': 'Organization', name: 'Relatronica', url: siteUrl },
  };

  return (
    <>
      <StructuredData data={academySchema} />
      <DotBoard>
        <div className="min-h-screen pt-28 pb-24 px-6">
          <div className="max-w-5xl mx-auto">

            <FadeIn className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                {t('learn.badge')}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                {t('learn.title')}
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {t('learn.subtitle')}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-sm text-slate-500 dark:text-slate-400">
                <span>{activeCourses.length} {t('learn.stats.courses')}</span>
                <span aria-hidden="true">·</span>
                <span>{totalLessons} {t('learn.stats.lessons')}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">{t('learn.free')}</span>
                {completedCount > 0 && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                      {completedCount}/{totalLessons} {t('learn.stats.completed')}
                    </span>
                  </>
                )}
              </div>
            </FadeIn>

            <div className="space-y-12">
              {ACADEMY_SECTIONS.map((section, index) => {
                const courses = section.slugs
                  .map((slug) => getCourse(slug))
                  .filter((c): c is NonNullable<typeof c> => !!c && c.status === 'active');

                if (courses.length === 0) return null;

                return (
                  <FadeIn key={section.id} delay={index * 0.05}>
                    <section>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                        {t(`learn.sections.${section.id}`)}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {courses.map((course) => (
                          <CourseCatalogCard
                            key={course.slug}
                            course={course}
                            locale={locale as 'it' | 'en'}
                            completedLessons={completedLessons}
                            isQuizPassed={isQuizPassed}
                            labels={catalogLabels}
                          />
                        ))}
                      </div>
                    </section>
                  </FadeIn>
                );
              })}

              {comingSoonCourses.length > 0 && (
                <FadeIn delay={0.15}>
                  <section>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      {t('learn.sections.comingSoon')}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {comingSoonCourses.map((course) => (
                        <CourseCatalogCard
                          key={course.slug}
                          course={course}
                          locale={locale as 'it' | 'en'}
                          completedLessons={completedLessons}
                          isQuizPassed={isQuizPassed}
                          labels={catalogLabels}
                        />
                      ))}
                    </div>
                  </section>
                </FadeIn>
              )}
            </div>

            <FadeIn delay={0.2} className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                    {t('learn.cta.title')}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                    {t('learn.cta.description')}
                  </p>
                </div>
                <Link
                  href="/manifesto"
                  className="inline-flex items-center gap-2 px-5 py-2.5 shrink-0 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
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
