import { MetadataRoute } from 'next';
import { activeCourses } from '@/data/course/index';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  const currentDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/observatory`,
      lastModified: currentDate,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/nexthuman`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/learn`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/manifesto`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/progetti`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const coursePages: MetadataRoute.Sitemap = activeCourses.flatMap((course) => {
    const courseEntry: MetadataRoute.Sitemap = [
      {
        url: `${siteUrl}/learn/${course.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ];

    const moduleAndLessonEntries: MetadataRoute.Sitemap = course.modules.flatMap((mod) => {
      const moduleEntry = {
        url: `${siteUrl}/learn/${course.slug}/${mod.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };

      const lessonEntries = mod.lessons.map((lesson) => ({
        url: `${siteUrl}/learn/${course.slug}/${mod.slug}/${lesson.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));

      return [moduleEntry, ...lessonEntries];
    });

    return [...courseEntry, ...moduleAndLessonEntries];
  });

  return [...staticPages, ...coursePages];
}
