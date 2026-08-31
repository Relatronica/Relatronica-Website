'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn } from '@/components/motion';
import {
  ACADEMY_HOME_SECTIONS,
  COURSE_CATEGORY,
  CourseCatalogCard,
} from '@/components/learn/CourseCatalogCard';
import { useI18n } from '@/lib/i18n';
import { comingSoonCourses, getCourse } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';
import { getCourseCompletionProgress } from '@/lib/courseCompletion';

const COURSE_GRID =
  'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3';

export default function AcademyPage() {
  const { t, locale } = useI18n();
  const { completedLessons, isQuizPassed } = useCourseProgress();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

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

  const getStartedSlug = (() => {
    for (const slug of ['fondamenti', 'ai-e-societa', 'design-fiction-lab', 'ai-etica-per-designer']) {
      const course = getCourse(slug);
      if (!course || course.status !== 'active') continue;
      const progress = getCourseCompletionProgress(course, completedLessons, isQuizPassed);
      if (progress.completed < progress.total) return slug;
    }
    return 'fondamenti';
  })();

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
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">

            <FadeIn className="text-center mb-16 md:mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold tracking-wider uppercase mb-6">
                {t('learn.badge')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
                {t('learn.home.welcomeTitle')}
              </h1>
              <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                {t('learn.home.welcomeSubtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href={`/learn/${getStartedSlug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
                >
                  {t('learn.home.getStarted')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {t('learn.home.allCourses')}
                </a>
              </div>
            </FadeIn>

            <div className="space-y-10 md:space-y-12">
              {ACADEMY_HOME_SECTIONS.map((section, index) => {
                const courses = section.slugs
                  .map((slug) => getCourse(slug))
                  .filter((c): c is NonNullable<typeof c> => !!c && c.status === 'active');

                if (courses.length === 0) return null;

                return (
                  <FadeIn key={section.id} delay={index * 0.05}>
                    <section id={index === 0 ? 'courses' : undefined}>
                      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
                        <div>
                          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                            {t(section.titleKey)}
                          </h2>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                            {t(section.descriptionKey)}
                          </p>
                        </div>
                        <Link
                          href={section.linkHref}
                          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline shrink-0"
                        >
                          {t(section.linkKey)}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className={COURSE_GRID}>
                        {courses.map((course) => {
                          const categoryId = COURSE_CATEGORY[course.slug];
                          return (
                            <CourseCatalogCard
                              key={course.slug}
                              course={course}
                              locale={locale as 'it' | 'en'}
                              completedLessons={completedLessons}
                              isQuizPassed={isQuizPassed}
                              categoryLabel={categoryId ? t(`learn.sections.${categoryId}`) : undefined}
                              labels={catalogLabels}
                            />
                          );
                        })}
                      </div>
                    </section>
                  </FadeIn>
                );
              })}

              {comingSoonCourses.length > 0 && (
                <FadeIn delay={0.1}>
                  <section id="coming-soon">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                      {t('learn.sections.comingSoon')}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      {t('learn.free')} · {comingSoonCourses.length} {t('learn.stats.courses')}
                    </p>
                    <div className={COURSE_GRID}>
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

          </div>
        </div>
      </DotBoard>
    </>
  );
}
