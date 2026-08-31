import { activeCourses } from '@/data/course/index';

export function generateStaticParams() {
  return activeCourses.map((course) => ({ courseSlug: course.slug }));
}

export default function CertificatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
