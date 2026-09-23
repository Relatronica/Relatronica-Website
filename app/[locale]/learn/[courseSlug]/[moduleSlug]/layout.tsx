import type { Metadata } from 'next';
import { getModule, activeCourses } from '@/data/course/index';
import type { Locale } from '@/i18n';
import { absoluteUrl, languageAlternates } from '@/lib/seo';

export function generateStaticParams() {
  return activeCourses.flatMap((course) =>
    course.modules.map((mod) => ({
      courseSlug: course.slug,
      moduleSlug: mod.slug,
    }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: Locale; courseSlug: string; moduleSlug: string };
}): Metadata {
  const result = getModule(params.courseSlug, params.moduleSlug);
  if (!result) return {};

  const lang = params.locale === 'en' ? 'en' : 'it';
  const modContent = result.module.content[lang];
  const courseContent = result.course.content[lang];
  const path = `/learn/${params.courseSlug}/${params.moduleSlug}`;
  const title = `${modContent.title} - ${courseContent.title}`;
  const description = modContent.description;

  return {
    title,
    description,
    openGraph: {
      title: `${modContent.title} | ${courseContent.title} | Relatronica Academy`,
      description,
      url: absoluteUrl(params.locale, path),
      type: 'website',
      locale: lang === 'en' ? 'en_US' : 'it_IT',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${modContent.title} | Relatronica Academy`,
      description,
    },
    alternates: {
      canonical: absoluteUrl(params.locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
