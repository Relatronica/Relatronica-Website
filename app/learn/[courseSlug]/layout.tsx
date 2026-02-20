import type { Metadata } from 'next';
import { getCourse, activeCourses } from '@/data/course/index';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

export function generateStaticParams() {
  return activeCourses.map((course) => ({
    courseSlug: course.slug,
  }));
}

export function generateMetadata({ params }: { params: { courseSlug: string } }): Metadata {
  const course = getCourse(params.courseSlug);
  if (!course) return {};

  const content = course.content.it;
  const title = `${content.title} - Academy`;
  const description = content.longDescription;

  return {
    title,
    description,
    openGraph: {
      title: `${content.title} | Relatronica Academy`,
      description,
      url: `${siteUrl}/learn/${course.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${content.title} | Relatronica Academy`,
      description,
    },
    alternates: {
      canonical: `/learn/${course.slug}`,
    },
  };
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
