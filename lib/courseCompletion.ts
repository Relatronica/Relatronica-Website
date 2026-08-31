import { Course } from '@/types/course';

export type CompletionItemType = 'lesson' | 'exercise' | 'quiz';

export interface IncompleteCourseItem {
  type: CompletionItemType;
  href: string;
  title: string;
  moduleNumber: string;
}

export interface CourseCompletionProgress {
  completed: number;
  total: number;
  percentage: number;
  lessonsCompleted: number;
  lessonsTotal: number;
  exercisesCompleted: number;
  exercisesTotal: number;
  quizzesPassed: number;
  quizzesTotal: number;
}

export function isModuleComplete(
  course: Course,
  modSlug: string,
  completedLessons: string[],
  isQuizPassed: (moduleId: string) => boolean
): boolean {
  const mod = course.modules.find((m) => m.slug === modSlug);
  if (!mod) return false;

  for (const lesson of mod.lessons) {
    if (!completedLessons.includes(`${course.slug}/${mod.slug}/${lesson.slug}`)) {
      return false;
    }
  }
  if (mod.exercise && !completedLessons.includes(`${course.slug}/${mod.slug}/exercise`)) {
    return false;
  }
  if (mod.quiz && !isQuizPassed(`${course.slug}/${mod.slug}`)) {
    return false;
  }
  return mod.lessons.length > 0 || !!mod.exercise || !!mod.quiz;
}

export function getIncompleteCourseItems(
  course: Course,
  completedLessons: string[],
  isQuizPassed: (moduleId: string) => boolean,
  locale: 'it' | 'en',
  labels: { quiz: string; exercise: string }
): IncompleteCourseItem[] {
  const items: IncompleteCourseItem[] = [];

  for (const mod of course.modules) {
    const modContent = mod.content[locale] || mod.content.it;

    for (const lesson of mod.lessons) {
      const id = `${course.slug}/${mod.slug}/${lesson.slug}`;
      if (!completedLessons.includes(id)) {
        const lessonContent = lesson.content[locale] || lesson.content.it;
        items.push({
          type: 'lesson',
          href: `/learn/${course.slug}/${mod.slug}/${lesson.slug}`,
          title: lessonContent.title,
          moduleNumber: mod.number,
        });
      }
    }

    if (mod.exercise && !completedLessons.includes(`${course.slug}/${mod.slug}/exercise`)) {
      const exerciseContent = mod.exercise.content[locale] || mod.exercise.content.it;
      items.push({
        type: 'exercise',
        href: `/learn/${course.slug}/${mod.slug}/exercise`,
        title: exerciseContent.title,
        moduleNumber: mod.number,
      });
    }

    if (mod.quiz && !isQuizPassed(`${course.slug}/${mod.slug}`)) {
      items.push({
        type: 'quiz',
        href: `/learn/${course.slug}/${mod.slug}/quiz`,
        title: `${labels.quiz} — ${modContent.title}`,
        moduleNumber: mod.number,
      });
    }
  }

  return items;
}

export function getCourseCompletionProgress(
  course: Course,
  completedLessons: string[],
  isQuizPassed: (moduleId: string) => boolean
): CourseCompletionProgress {
  let lessonsCompleted = 0;
  let lessonsTotal = 0;
  let exercisesCompleted = 0;
  let exercisesTotal = 0;
  let quizzesPassed = 0;
  let quizzesTotal = 0;

  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      lessonsTotal++;
      if (completedLessons.includes(`${course.slug}/${mod.slug}/${lesson.slug}`)) {
        lessonsCompleted++;
      }
    }
    if (mod.exercise) {
      exercisesTotal++;
      if (completedLessons.includes(`${course.slug}/${mod.slug}/exercise`)) {
        exercisesCompleted++;
      }
    }
    if (mod.quiz) {
      quizzesTotal++;
      if (isQuizPassed(`${course.slug}/${mod.slug}`)) {
        quizzesPassed++;
      }
    }
  }

  const completed = lessonsCompleted + exercisesCompleted + quizzesPassed;
  const total = lessonsTotal + exercisesTotal + quizzesTotal;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    completed,
    total,
    percentage,
    lessonsCompleted,
    lessonsTotal,
    exercisesCompleted,
    exercisesTotal,
    quizzesPassed,
    quizzesTotal,
  };
}

export function isCourseComplete(
  course: Course,
  completedLessons: string[],
  isQuizPassed: (moduleId: string) => boolean
): boolean {
  if (course.modules.length === 0) return false;
  const progress = getCourseCompletionProgress(course, completedLessons, isQuizPassed);
  return progress.completed === progress.total && progress.total > 0;
}
