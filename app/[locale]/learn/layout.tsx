import type { Metadata } from "next";
import type { Locale } from "@/i18n";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

type Props = { params: { locale: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const isEn = locale === "en";
  const title = "Academy - Relatronica";
  const description = isEn
    ? "Relatronica Academy: free open courses on speculative design, civic tech, knowledge mapping and responsible technologies. Learn to imagine and build better futures."
    : "Relatronica Academy: corsi gratuiti e aperti su design speculativo, civic tech, knowledge mapping e tecnologie responsabili. Impara a immaginare e costruire futuri migliori.";

  return {
    title,
    description,
    openGraph: {
      title: "Relatronica Academy",
      description: isEn
        ? "Free open courses on speculative design, civic tech, knowledge mapping and responsible technologies."
        : "Corsi gratuiti e aperti su design speculativo, civic tech, knowledge mapping e tecnologie responsabili.",
      type: "website",
      locale: isEn ? "en_US" : "it_IT",
      url: absoluteUrl(locale, "/learn"),
    },
    twitter: {
      card: "summary_large_image",
      title: "Relatronica Academy",
      description: isEn
        ? "Free open courses on speculative design, civic tech and responsible technologies."
        : "Corsi gratuiti e aperti su design speculativo, civic tech e tecnologie responsabili.",
    },
    alternates: {
      canonical: absoluteUrl(locale, "/learn"),
      languages: languageAlternates("/learn"),
    },
  };
}

export default function LearnLayout({ children }: Props) {
  return children;
}
