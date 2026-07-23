'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle2, Compass, Sparkles, Users, Network, Shield, Rocket, HelpCircle, Trophy, Package, Brain, Scale, Eye, Briefcase, Heart } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { useI18n } from '@/lib/i18n';
import { getCourse, getCourseTotalLessons, getCourseReadingTime } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass, Sparkles, Users, Network, Shield, Rocket, BookOpen, Package, Brain, Scale, Eye, Briefcase, Heart,
};

const COLOR_MAP: Record<string, { icon: string; bg: string; border: string }> = {
  blue: { icon: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/50', border: 'border-blue-200 dark:border-blue-800' },
  purple: { icon: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-950/50', border: 'border-purple-200 dark:border-purple-800' },
  green: { icon: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-950/50', border: 'border-green-200 dark:border-green-800' },
  orange: { icon: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-950/50', border: 'border-orange-200 dark:border-orange-800' },
  rose: { icon: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-950/50', border: 'border-rose-200 dark:border-rose-800' },
  indigo: { icon: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-950/50', border: 'border-indigo-200 dark:border-indigo-800' },
};

export default function CoursePage() {
  const params = useParams();
  const { t, locale } = useI18n();
  const { completedLessons, isQuizPassed } = useCourseProgress();
  const courseSlug = params.courseSlug as string;
  const course = getCourse(courseSlug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  if (!course || course.status === 'coming-soon') {
    return (
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('learn.notFound')}</h1>
          <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">{t('learn.backToAcademy')}</Link>
        </div>
      </DotBoard>
    );
  }

  const content = course.content[locale as 'it' | 'en'] || course.content.it;
  const totalLessons = getCourseTotalLessons(course);
  const totalTime = getCourseReadingTime(course);
  const completedCount = course.modules.reduce(
    (acc, mod) => acc + mod.lessons.filter((l) => completedLessons.includes(`${course.slug}/${mod.slug}/${l.slug}`)).length,
    0
  );

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": content.title,
    "description": content.longDescription,
    "url": `${siteUrl}/learn/${course.slug}`,
    "provider": { "@type": "Organization", "name": "Relatronica", "url": siteUrl },
    "isAccessibleForFree": true,
  };

  return (
    <>
      <StructuredData data={courseSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">

            {/* Back */}
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('learn.backToAcademy')}
            </Link>

            {/* Course Header */}
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                {t('learn.course')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                {content.title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {content.longDescription}
              </p>
              <div className="flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {totalLessons} {t('learn.stats.lessons')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  ~{totalTime} min
                </span>
                <span>{course.modules.length} {t('learn.stats.modules')}</span>
                {completedCount > 0 && (
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    {completedCount}/{totalLessons} {t('learn.stats.completed')}
                  </span>
                )}
              </div>
            </div>

            {/* Modules */}
            <div className="space-y-6 mb-16">
              {course.modules.map((mod) => {
                const Icon = ICON_MAP[mod.iconName] || BookOpen;
                const colors = COLOR_MAP[mod.color] || COLOR_MAP.blue;
                const modContent = mod.content[locale as 'it' | 'en'] || mod.content.it;
                const moduleCompletedCount = mod.lessons.filter(
                  (l) => completedLessons.includes(`${course.slug}/${mod.slug}/${l.slug}`)
                ).length;

                return (
                  <div key={mod.slug} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm overflow-hidden">
                    {/* Module Header */}
                    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${colors.icon}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              {t('learn.module')} {mod.number}
                            </span>
                            {moduleCompletedCount === mod.lessons.length && mod.lessons.length > 0 && (
                              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400">
                                {t('learn.completed')}
                              </span>
                            )}
                          </div>
                          <h2 className="text-lg font-bold text-slate-900 dark:text-white">{modContent.title}</h2>
                        </div>
                        {moduleCompletedCount > 0 && moduleCompletedCount < mod.lessons.length && (
                          <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium flex-shrink-0">
                            {moduleCompletedCount}/{mod.lessons.length}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Lessons */}
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {mod.lessons.map((lesson, i) => {
                        const lessonContent = lesson.content[locale as 'it' | 'en'] || lesson.content.it;
                        const lessonId = `${course.slug}/${mod.slug}/${lesson.slug}`;
                        const isLessonCompleted = completedLessons.includes(lessonId);

                        return (
                          <Link
                            key={lesson.slug}
                            href={`/learn/${course.slug}/${mod.slug}/${lesson.slug}`}
                            className="group flex items-center gap-4 p-4 md:px-8 md:py-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                              {isLessonCompleted ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                              ) : (
                                <span className="text-xs font-bold text-slate-400">
                                  {String(i + 1).padStart(2, '0')}
                                </span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                                {lessonContent.title}
                              </h3>
                              <span className="text-xs text-slate-400">{lesson.readingTime} min</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                          </Link>
                        );
                      })}

                      {/* Quiz link */}
                      {mod.quiz && (() => {
                        const quizModuleId = `${course.slug}/${mod.slug}`;
                        const quizPassed = isQuizPassed(quizModuleId);

                        return (
                          <Link
                            href={`/learn/${course.slug}/${mod.slug}/quiz`}
                            className={`group flex items-center gap-4 p-4 md:px-8 md:py-5 transition-colors ${
                              quizPassed
                                ? 'bg-emerald-50/50 dark:bg-emerald-950/20 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                                : 'bg-blue-50/30 dark:bg-blue-950/20 hover:bg-blue-50/60 dark:hover:bg-blue-950/40'
                            }`}
                          >
                            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                              quizPassed ? 'bg-emerald-100 dark:bg-emerald-950/50' : 'bg-blue-100 dark:bg-blue-950/50'
                            }`}>
                              {quizPassed ? (
                                <Trophy className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className={`text-sm font-semibold transition-colors truncate ${
                                quizPassed
                                  ? 'text-emerald-700 dark:text-emerald-400'
                                  : 'text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300'
                              }`}>
                                {t('learn.quiz.title')}
                              </h3>
                              <span className="text-xs text-slate-400">
                                {mod.quiz!.questions.length} {t('learn.quiz.question').toLowerCase()}{mod.quiz!.questions.length > 1 ? (locale === 'it' ? 'e' : 's') : (locale === 'it' ? 'a' : '')}
                              </span>
                            </div>
                            <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 ${
                              quizPassed ? 'text-emerald-400' : 'text-blue-400'
                            }`} />
                          </Link>
                        );
                      })()}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Back to Academy */}
            <div className="text-center">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t('learn.backToAcademy')}
              </Link>
            </div>

          </div>
        </div>
      </DotBoard>
    </>
  );
}
