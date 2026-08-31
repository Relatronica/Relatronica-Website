import Link from 'next/link';
import { Award, BookOpen } from 'lucide-react';
import type { Course } from '@/types/course';
import { getCourseReadingTime, getCourseTotalLessons } from '@/data/course';
import { getCourseCompletionProgress } from '@/lib/courseCompletion';
import { CourseCoverArt } from '@/components/learn/CourseCoverSVGs';

function getCourseStats(course: Course) {
  const lessons = getCourseTotalLessons(course);
  const quizzes = course.modules.filter((m) => m.quiz).length;
  const exercises = course.modules.filter((m) => m.exercise).length;
  const minutes = getCourseReadingTime(course);
  return { lessons, quizzes, exercises, minutes };
}

function formatDuration(minutes: number, locale: 'it' | 'en'): string {
  if (minutes < 60) {
    return locale === 'it' ? `${minutes} min` : `${minutes} min`;
  }
  const hours = Math.round((minutes / 60) * 10) / 10;
  const formatted = locale === 'it' ? hours.toString().replace('.', ',') : hours.toString();
  return locale === 'it' ? `${formatted} h` : `${formatted} hr`;
}

interface CourseCatalogCardProps {
  course: Course;
  locale: 'it' | 'en';
  completedLessons: string[];
  isQuizPassed: (moduleId: string) => boolean;
  labels: {
    lessons: string;
    quiz: string;
    quizzes: string;
    exercise: string;
    exercises: string;
    certificate: string;
    completed: string;
    comingSoon: string;
  };
}

function CardBody({
  content,
  isComplete,
  hasProgress,
  metaLine,
  progress,
  labels,
}: {
  content: { title: string; description: string };
  isComplete: boolean;
  hasProgress: boolean;
  metaLine: string;
  progress: { completed: number; total: number; percentage: number };
  labels: CourseCatalogCardProps['labels'];
}) {
  return (
    <div className="flex flex-1 flex-col p-4 pt-3">
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-snug">{content.title}</h3>
        {isComplete && (
          <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold uppercase tracking-wide">
            <Award className="w-3 h-3" />
            {labels.completed}
          </span>
        )}
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2 flex-1">
        {content.description}
      </p>

      <div className="mt-auto space-y-2.5">
        <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 shrink-0 opacity-60" />
          <span>{metaLine}</span>
        </p>

        {hasProgress && (
          <div>
            <div className="flex justify-between text-[10px] text-slate-400 mb-1">
              <span>{progress.completed}/{progress.total}</span>
              <span>{progress.percentage}%</span>
            </div>
            <div className="h-1 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function CourseCatalogCard({
  course,
  locale,
  completedLessons,
  isQuizPassed,
  labels,
}: CourseCatalogCardProps) {
  const content = course.content[locale] || course.content.it;
  const stats = getCourseStats(course);
  const progress = getCourseCompletionProgress(course, completedLessons, isQuizPassed);
  const isComplete = progress.total > 0 && progress.completed === progress.total;
  const hasProgress = progress.completed > 0 && !isComplete;
  const duration = formatDuration(stats.minutes, locale);

  const metaParts: string[] = [`${stats.lessons} ${labels.lessons}`];
  if (stats.exercises > 0) {
    metaParts.push(`${stats.exercises} ${stats.exercises === 1 ? labels.exercise : labels.exercises}`);
  }
  if (stats.quizzes > 0) {
    metaParts.push(`${stats.quizzes} ${stats.quizzes === 1 ? labels.quiz : labels.quizzes}`);
  }
  metaParts.push(`~${duration}`);
  if (course.status === 'active') {
    metaParts.push(labels.certificate);
  }

  const metaLine = metaParts.join(' · ');
  const body = (
    <CardBody
      content={content}
      isComplete={isComplete}
      hasProgress={hasProgress}
      metaLine={metaLine}
      progress={progress}
      labels={labels}
    />
  );

  if (course.status === 'coming-soon') {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30">
        <CourseCoverArt slug={course.slug} muted />
        <div className="opacity-90">{body}</div>
        <div className="px-4 pb-4 -mt-1">
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium">
            {labels.comingSoon}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/learn/${course.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-none"
    >
      <CourseCoverArt slug={course.slug} />
      <div className="group-hover:[&_h3]:text-emerald-700 dark:group-hover:[&_h3]:text-emerald-400 transition-colors">
        {body}
      </div>
    </Link>
  );
}

export const ACADEMY_SECTIONS = [
  {
    id: 'start',
    slugs: ['fondamenti'],
  },
  {
    id: 'design',
    slugs: ['design-fiction-lab'],
  },
  {
    id: 'ai',
    slugs: ['ai-e-societa', 'ai-etica-per-designer'],
  },
] as const;
