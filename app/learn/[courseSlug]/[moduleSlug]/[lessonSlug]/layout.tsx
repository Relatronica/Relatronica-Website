import type { Metadata } from 'next';
import { getLesson, activeCourses } from '@/data/course/index';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

export function generateStaticParams() {
  return activeCourses.flatMap((course) =>
    course.modules.flatMap((mod) =>
      mod.lessons.map((lesson) => ({
        courseSlug: course.slug,
        moduleSlug: mod.slug,
        lessonSlug: lesson.slug,
      }))
    )
  );
}

export function generateMetadata({
  params,
}: {
  params: { courseSlug: string; moduleSlug: string; lessonSlug: string };
}): Metadata {
  const result = getLesson(params.courseSlug, params.moduleSlug, params.lessonSlug);
  if (!result) return {};

  const lessonContent = result.lesson.content.it;
  const courseContent = result.course.content.it;
  const title = `${lessonContent.title} - ${courseContent.title}`;
  const description = lessonContent.description;

  return {
    title,
    description,
    openGraph: {
      title: `${lessonContent.title} | Relatronica Academy`,
      description,
      url: `${siteUrl}/learn/${params.courseSlug}/${params.moduleSlug}/${params.lessonSlug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${lessonContent.title} | Relatronica Academy`,
      description,
    },
    alternates: {
      canonical: `/learn/${params.courseSlug}/${params.moduleSlug}/${params.lessonSlug}`,
    },
  };
}

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
