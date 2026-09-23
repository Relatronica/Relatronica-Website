import type { Metadata } from 'next';
import { getLesson, activeCourses } from '@/data/course/index';
import type { Locale } from '@/i18n';
import { absoluteUrl, languageAlternates } from '@/lib/seo';

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
  params: { locale: Locale; courseSlug: string; moduleSlug: string; lessonSlug: string };
}): Metadata {
  const result = getLesson(params.courseSlug, params.moduleSlug, params.lessonSlug);
  if (!result) return {};

  const lang = params.locale === 'en' ? 'en' : 'it';
  const lessonContent = result.lesson.content[lang];
  const courseContent = result.course.content[lang];
  const path = `/learn/${params.courseSlug}/${params.moduleSlug}/${params.lessonSlug}`;
  const title = `${lessonContent.title} - ${courseContent.title}`;
  const description = lessonContent.description;

  return {
    title,
    description,
    openGraph: {
      title: `${lessonContent.title} | Relatronica Academy`,
      description,
      url: absoluteUrl(params.locale, path),
      type: 'article',
      locale: lang === 'en' ? 'en_US' : 'it_IT',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${lessonContent.title} | Relatronica Academy`,
      description,
    },
    alternates: {
      canonical: absoluteUrl(params.locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
