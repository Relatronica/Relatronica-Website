'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle2, HelpCircle, Trophy } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { useI18n } from '@/lib/i18n';
import { getModule, getCourse } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';

export default function ModulePage() {
  const params = useParams();
  const { t, locale } = useI18n();
  const { completedLessons, isQuizPassed, getQuizResult } = useCourseProgress();
  const courseSlug = params.courseSlug as string;
  const moduleSlug = params.moduleSlug as string;

  const result = getModule(courseSlug, moduleSlug);
  const course = getCourse(courseSlug);

  if (!result || !course) {
    return (
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t('learn.notFound')}</h1>
          <Link href="/learn" className="text-blue-600 hover:underline">{t('learn.backToAcademy')}</Link>
        </div>
      </DotBoard>
    );
  }

  const { module: mod } = result;
  const content = mod.content[locale as 'it' | 'en'] || mod.content.it;
  const courseContent = course.content[locale as 'it' | 'en'] || course.content.it;
  const moduleIndex = course.modules.findIndex((m) => m.slug === mod.slug);
  const prevModule = moduleIndex > 0 ? course.modules[moduleIndex - 1] : null;
  const nextModule = moduleIndex < course.modules.length - 1 ? course.modules[moduleIndex + 1] : null;

  return (
    <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-10 flex-wrap">
            <Link href="/learn" className="hover:text-slate-900 transition-colors">
              Academy
            </Link>
            <span>/</span>
            <Link href={`/learn/${course.slug}`} className="hover:text-slate-900 transition-colors">
              {courseContent.title}
            </Link>
          </div>

          {/* Module Header */}
          <div className="mb-12">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('learn.module')} {mod.number}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mt-2 mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Lessons List */}
          <div className="space-y-4 mb-8">
            {mod.lessons.map((lesson, i) => {
              const lessonContent = lesson.content[locale as 'it' | 'en'] || lesson.content.it;
              const lessonId = `${courseSlug}/${mod.slug}/${lesson.slug}`;
              const isCompleted = completedLessons.includes(lessonId);

              return (
                <Link
                  key={lesson.slug}
                  href={`/learn/${courseSlug}/${mod.slug}/${lesson.slug}`}
                  className="group block rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <span className="text-sm font-bold text-slate-400">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {lessonContent.title}
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">
                        {lessonContent.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {lesson.readingTime} min
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {lesson.resources.length} {t('learn.resources')}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quiz Card */}
          {mod.quiz && (() => {
            const quizModuleId = `${courseSlug}/${mod.slug}`;
            const quizPassed = isQuizPassed(quizModuleId);
            const quizResult = getQuizResult(quizModuleId);
            const quizContent = mod.quiz!.content[locale as 'it' | 'en'] || mod.quiz!.content.it;

            return (
              <Link
                href={`/learn/${courseSlug}/${mod.slug}/quiz`}
                className={`group block rounded-2xl border-2 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 mb-16 ${
                  quizPassed
                    ? 'border-emerald-200 bg-emerald-50/50'
                    : 'border-blue-200 bg-blue-50/50 hover:border-blue-300'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                    quizPassed ? 'bg-emerald-100' : 'bg-blue-100'
                  }`}>
                    {quizPassed ? (
                      <Trophy className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className={`text-lg font-bold mb-1 transition-colors ${
                      quizPassed
                        ? 'text-emerald-900'
                        : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {quizContent.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                      {quizContent.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className={`flex items-center gap-1 font-medium ${
                        quizPassed ? 'text-emerald-600' : 'text-blue-600'
                      }`}>
                        <HelpCircle className="w-3 h-3" />
                        {mod.quiz!.questions.length} {t('learn.quiz.question').toLowerCase()}{mod.quiz!.questions.length > 1 ? (locale === 'it' ? 'e' : 's') : (locale === 'it' ? 'a' : '')}
                      </span>
                      {quizResult && (
                        <span className={`flex items-center gap-1 font-medium ${
                          quizPassed ? 'text-emerald-600' : 'text-amber-600'
                        }`}>
                          {quizPassed ? <CheckCircle2 className="w-3 h-3" /> : null}
                          {t('learn.quiz.score')}: {quizResult.score}%
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1 ${
                    quizPassed ? 'text-emerald-400' : 'text-blue-400 group-hover:text-blue-600'
                  }`} />
                </div>
              </Link>
            );
          })()}

          {/* Module Navigation */}
          <div className="flex justify-between items-center">
            {prevModule ? (
              <Link
                href={`/learn/${courseSlug}/${prevModule.slug}`}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {(prevModule.content[locale as 'it' | 'en'] || prevModule.content.it).title}
                </span>
                <span className="sm:hidden">{t('learn.prev')}</span>
              </Link>
            ) : <div />}
            {nextModule ? (
              <Link
                href={`/learn/${courseSlug}/${nextModule.slug}`}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                <span className="hidden sm:inline">
                  {(nextModule.content[locale as 'it' | 'en'] || nextModule.content.it).title}
                </span>
                <span className="sm:hidden">{t('learn.next')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>

        </div>
      </div>
    </DotBoard>
  );
}
