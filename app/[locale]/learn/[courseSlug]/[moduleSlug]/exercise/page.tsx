'use client';

import { Link } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, Clock, Package, Target } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { useI18n } from '@/lib/i18n';
import { getModuleExercise, getCourse } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';

export default function ExercisePage() {
  const params = useParams();
  const { t, locale } = useI18n();
  const { completedLessons, toggleLesson } = useCourseProgress();
  const courseSlug = params.courseSlug as string;
  const moduleSlug = params.moduleSlug as string;

  const result = getModuleExercise(courseSlug, moduleSlug);
  const course = getCourse(courseSlug);

  if (!result || !course) {
    return (
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('learn.notFound')}</h1>
          <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">{t('learn.backToAcademy')}</Link>
        </div>
      </DotBoard>
    );
  }

  const { module: mod, exercise } = result;
  const content = exercise.content[locale as 'it' | 'en'] || exercise.content.it;
  const courseContent = course.content[locale as 'it' | 'en'] || course.content.it;
  const modContent = mod.content[locale as 'it' | 'en'] || mod.content.it;
  const exerciseId = `${courseSlug}/${moduleSlug}/exercise`;
  const isCompleted = completedLessons.includes(exerciseId);

  return (
    <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-10 flex-wrap">
            <Link href="/learn" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Academy
            </Link>
            <span>/</span>
            <Link href={`/learn/${course.slug}`} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {courseContent.title}
            </Link>
            <span>/</span>
            <Link href={`/learn/${course.slug}/${mod.slug}`} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {modContent.title}
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800 mb-4">
              <ClipboardList className="w-3.5 h-3.5" />
              {t('learn.exercise.badge')}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mt-2 mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {content.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {content.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Package className="w-4 h-4" />
                {content.materials.length} {t('learn.exercise.materials').toLowerCase()}
              </span>
            </div>
          </div>

          {/* Materials */}
          <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-8 mb-8">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
              <Package className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              {t('learn.exercise.materials')}
            </h2>
            <ul className="space-y-2">
              {content.materials.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[15px]">
                  <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Steps */}
          <section className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30 p-8 mb-8">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-6">
              <ClipboardList className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              {t('learn.exercise.steps')}
            </h2>
            <ol className="space-y-6">
              {content.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-sm font-bold border border-emerald-200 dark:border-emerald-800">
                    {i + 1}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-[1.8] text-[16px] pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Expected Output */}
          <section className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30 p-8 mb-8">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              {t('learn.exercise.output')}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">
              {content.output}
            </p>
          </section>

          {/* Debrief */}
          <section className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30 p-8 mb-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              {t('learn.exercise.debrief')}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed italic">
              {content.debrief}
            </p>
          </section>

          {/* Mark as Complete */}
          <div className="text-center mb-12">
            <button
              onClick={() => toggleLesson(exerciseId)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm ${
                isCompleted
                  ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/70'
                  : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? t('learn.exercise.markedComplete') : t('learn.exercise.markComplete')}
            </button>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link
              href={`/learn/${courseSlug}/${moduleSlug}`}
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('learn.backToModule')}
            </Link>
            {mod.quiz ? (
              <Link
                href={`/learn/${courseSlug}/${moduleSlug}/quiz`}
                className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
              >
                {t('learn.quiz.start')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href={`/learn/${courseSlug}`}
                className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
              >
                {t('learn.backToCourse')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

        </div>
      </div>
    </DotBoard>
  );
}
