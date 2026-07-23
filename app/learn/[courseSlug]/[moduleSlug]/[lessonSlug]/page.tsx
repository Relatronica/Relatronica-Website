'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, BookOpen, ExternalLink, Lightbulb, CheckCircle2, MessageSquare } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { useI18n } from '@/lib/i18n';
import { getLesson, getAdjacentLessons } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';

const RESOURCE_LABELS: Record<string, string> = {
  article: 'Article',
  book: 'Book',
  video: 'Video',
  tool: 'Tool',
};

export default function LessonPage() {
  const params = useParams();
  const { t, locale } = useI18n();
  const { completedLessons, toggleLesson } = useCourseProgress();
  const courseSlug = params.courseSlug as string;
  const moduleSlug = params.moduleSlug as string;
  const lessonSlug = params.lessonSlug as string;

  const result = getLesson(courseSlug, moduleSlug, lessonSlug);
  const adjacent = getAdjacentLessons(courseSlug, moduleSlug, lessonSlug);

  if (!result) {
    return (
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('learn.notFound')}</h1>
          <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">{t('learn.backToAcademy')}</Link>
        </div>
      </DotBoard>
    );
  }

  const { course, module: mod, lesson } = result;
  const content = lesson.content[locale as 'it' | 'en'] || lesson.content.it;
  const courseContent = course.content[locale as 'it' | 'en'] || course.content.it;
  const modContent = mod.content[locale as 'it' | 'en'] || mod.content.it;
  const lessonId = `${courseSlug}/${moduleSlug}/${lessonSlug}`;
  const isCompleted = completedLessons.includes(lessonId);

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

          {/* Lesson Header */}
          <div className="mb-12">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('learn.module')} {mod.number}
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
                {lesson.readingTime} min
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {lesson.resources.length} {t('learn.resources')}
              </span>
            </div>
          </div>

          {/* Body */}
          <article className="mb-12">
            <div className="space-y-6">
              {content.body.map((paragraph, i) => (
                <p key={i} className="text-slate-700 dark:text-slate-300 leading-[1.8] text-[16px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Key Takeaways */}
          <section className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30 p-8 mb-8">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
              <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              {t('learn.keyTakeaways')}
            </h2>
            <ul className="space-y-3">
              {content.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[15px]">
                  <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Reflection */}
          <section className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30 p-8 mb-8">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-3">
              <MessageSquare className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              {t('learn.reflection')}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed italic">
              {content.reflection}
            </p>
          </section>

          {/* Resources */}
          {lesson.resources.length > 0 && (
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-8 mb-12">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
                <BookOpen className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                {t('learn.furtherReading')}
              </h2>
              <div className="space-y-3">
                {lesson.resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex-shrink-0">
                        {RESOURCE_LABELS[resource.type] || resource.type}
                      </span>
                      <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {resource.title}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Mark as Complete */}
          <div className="text-center mb-12">
            <button
              onClick={() => toggleLesson(lessonId)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm ${
                isCompleted
                  ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/70'
                  : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? t('learn.markedComplete') : t('learn.markComplete')}
            </button>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
            {adjacent.prev ? (
              <Link
                href={`/learn/${courseSlug}/${adjacent.prev.moduleSlug}/${adjacent.prev.lessonSlug}`}
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors max-w-[45%]"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">
                  {adjacent.prev.title[locale] || adjacent.prev.title.it}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {adjacent.next ? (
              <Link
                href={`/learn/${courseSlug}/${adjacent.next.moduleSlug}/${adjacent.next.lessonSlug}`}
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors max-w-[45%] text-right"
              >
                <span className="truncate">
                  {adjacent.next.title[locale] || adjacent.next.title.it}
                </span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
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
