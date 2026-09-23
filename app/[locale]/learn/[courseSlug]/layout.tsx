import type { Metadata } from 'next';
import { getCourse, activeCourses } from '@/data/course/index';
import type { Locale } from '@/i18n';
import { absoluteUrl, languageAlternates } from '@/lib/seo';

export function generateStaticParams() {
  return activeCourses.map((course) => ({
    courseSlug: course.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: Locale; courseSlug: string };
}): Metadata {
  const course = getCourse(params.courseSlug);
  if (!course) return {};

  const lang = params.locale === 'en' ? 'en' : 'it';
  const content = course.content[lang];
  const path = `/learn/${course.slug}`;
  const title = `${content.title} - Academy`;
  const description = content.longDescription;

  return {
    title,
    description,
    openGraph: {
      title: `${content.title} | Relatronica Academy`,
      description,
      url: absoluteUrl(params.locale, path),
      type: 'website',
      locale: lang === 'en' ? 'en_US' : 'it_IT',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.title} | Relatronica Academy`,
      description,
    },
    alternates: {
      canonical: absoluteUrl(params.locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
