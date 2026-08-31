import { activeCourses } from '@/data/course/index';

export function generateStaticParams() {
  return activeCourses.flatMap((course) =>
    course.modules
      .filter((mod) => mod.exercise)
      .map((mod) => ({
        courseSlug: course.slug,
        moduleSlug: mod.slug,
      }))
  );
}

export default function ExerciseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
