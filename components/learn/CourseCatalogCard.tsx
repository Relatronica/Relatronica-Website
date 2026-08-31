import Link from 'next/link';
import { Award } from 'lucide-react';
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
    return `${minutes} min`;
  }
  const hours = Math.round((minutes / 60) * 10) / 10;
  const formatted = locale === 'it' ? hours.toString().replace('.', ',') : hours.toString();
  return locale === 'it' ? `${formatted} h` : `${formatted} hr`;
}

export const COURSE_CATEGORY: Record<string, 'start' | 'design' | 'ai'> = {
  fondamenti: 'start',
  'design-fiction-lab': 'design',
  'ai-e-societa': 'ai',
  'ai-etica-per-designer': 'ai',
};

interface CourseCatalogCardProps {
  course: Course;
  locale: 'it' | 'en';
  completedLessons: string[];
  isQuizPassed: (moduleId: string) => boolean;
  categoryLabel?: string;
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
  categoryLabel,
  isComplete,
  hasProgress,
  metaLine,
  progress,
  labels,
}: {
  content: { title: string; description: string };
  categoryLabel?: string;
  isComplete: boolean;
  hasProgress: boolean;
  metaLine: string;
  progress: { completed: number; total: number; percentage: number };
  labels: CourseCatalogCardProps['labels'];
}) {
  return (
    <div className="flex flex-1 flex-col p-3">
      {categoryLabel && (
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
          {categoryLabel}
        </p>
      )}

      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug line-clamp-2">
          {content.title}
        </h3>
        {isComplete && (
          <span className="shrink-0 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-[9px] font-semibold uppercase tracking-wide">
            <Award className="w-2.5 h-2.5" />
            {labels.completed}
          </span>
        )}
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-2 line-clamp-2">
        {content.description}
      </p>

      <div className="mt-auto space-y-2">
        <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-snug">
          {metaLine}
        </p>

        {hasProgress && (
          <div>
            <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
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
  categoryLabel,
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
      categoryLabel={categoryLabel}
      isComplete={isComplete}
      hasProgress={hasProgress}
      metaLine={metaLine}
      progress={progress}
      labels={labels}
    />
  );

  if (course.status === 'coming-soon') {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30">
        <CourseCoverArt slug={course.slug} muted />
        <div className="opacity-90 flex-1">{body}</div>
        <div className="px-3 pb-3 -mt-0.5">
          <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-medium">
            {labels.comingSoon}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/learn/${course.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm"
    >
      <CourseCoverArt slug={course.slug} />
      <div className="group-hover:[&_h3]:text-emerald-700 dark:group-hover:[&_h3]:text-emerald-400 transition-colors">
        {body}
      </div>
    </Link>
  );
}

export const ACADEMY_HOME_SECTIONS = [
  {
    id: 'foundations',
    titleKey: 'learn.home.sectionFoundations',
    descriptionKey: 'learn.home.sectionFoundationsDesc',
    linkHref: '/manifesto',
    linkKey: 'learn.home.moreAboutManifesto',
    slugs: ['fondamenti', 'design-fiction-lab'],
  },
  {
    id: 'ai',
    titleKey: 'learn.home.sectionAi',
    descriptionKey: 'learn.home.sectionAiDesc',
    linkHref: '/learn/ai-e-societa',
    linkKey: 'learn.home.exploreAi',
    slugs: ['ai-e-societa', 'ai-etica-per-designer'],
  },
] as const;

export const ACADEMY_SECTIONS = [
  { id: 'start', slugs: ['fondamenti'] },
  { id: 'design', slugs: ['design-fiction-lab'] },
  { id: 'ai', slugs: ['ai-e-societa', 'ai-etica-per-designer'] },
] as const;

export function getActiveCoursesOrdered() {
  return ACADEMY_SECTIONS.flatMap((section) => section.slugs);
}
