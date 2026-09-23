import { MetadataRoute } from 'next';
import { activeCourses } from '@/data/course/index';
import { locales, type Locale } from '@/i18n';
import { absoluteUrl, getSiteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const siteUrl = getSiteUrl();

  const staticPaths = [
    { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/observatory', changeFrequency: 'hourly' as const, priority: 0.9 },
    { path: '/nexthuman', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/learn', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/manifesto', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/progetti', changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((locale: Locale) => ({
      url: absoluteUrl(locale, path),
      lastModified: currentDate,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          it: absoluteUrl('it', path),
          en: absoluteUrl('en', path),
        },
      },
    }))
  );

  const courseEntries: MetadataRoute.Sitemap = activeCourses.flatMap((course) => {
    const coursePath = `/learn/${course.slug}`;
    const courseSitemap = locales.map((locale: Locale) => ({
      url: absoluteUrl(locale, coursePath),
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          it: absoluteUrl('it', coursePath),
          en: absoluteUrl('en', coursePath),
        },
      },
    }));

    const nested = course.modules.flatMap((mod) => {
      const modulePath = `/learn/${course.slug}/${mod.slug}`;
      const moduleEntries = locales.map((locale: Locale) => ({
        url: absoluteUrl(locale, modulePath),
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            it: absoluteUrl('it', modulePath),
            en: absoluteUrl('en', modulePath),
          },
        },
      }));

      const lessonEntries = mod.lessons.flatMap((lesson) => {
        const lessonPath = `/learn/${course.slug}/${mod.slug}/${lesson.slug}`;
        return locales.map((locale: Locale) => ({
          url: absoluteUrl(locale, lessonPath),
          lastModified: currentDate,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
          alternates: {
            languages: {
              it: absoluteUrl('it', lessonPath),
              en: absoluteUrl('en', lessonPath),
            },
          },
        }));
      });

      return [...moduleEntries, ...lessonEntries];
    });

    return [...courseSitemap, ...nested];
  });

  // Avoid unused import noise if tree-shaken later
  void siteUrl;

  return [...staticEntries, ...courseEntries];
}
