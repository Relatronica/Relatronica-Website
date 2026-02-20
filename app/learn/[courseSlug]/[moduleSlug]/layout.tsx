import type { Metadata } from 'next';
import { getModule, activeCourses } from '@/data/course/index';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

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
  params: { courseSlug: string; moduleSlug: string };
}): Metadata {
  const result = getModule(params.courseSlug, params.moduleSlug);
  if (!result) return {};

  const modContent = result.module.content.it;
  const courseContent = result.course.content.it;
  const title = `${modContent.title} - ${courseContent.title}`;
  const description = modContent.description;

  return {
    title,
    description,
    openGraph: {
      title: `${modContent.title} | ${courseContent.title} | Relatronica Academy`,
      description,
      url: `${siteUrl}/learn/${params.courseSlug}/${params.moduleSlug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${modContent.title} | Relatronica Academy`,
      description,
    },
    alternates: {
      canonical: `/learn/${params.courseSlug}/${params.moduleSlug}`,
    },
  };
}

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
