import type { Metadata } from "next";
import type { Locale } from "@/i18n";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

type Props = { params: { locale: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const isEn = locale === "en";
  const title = isEn ? "Projects - Relatronica" : "Progetti - Relatronica";
  const description = isEn
    ? "Explorations at the edge of speculative design, civic tech and knowledge mapping. Discover NextHuman, Segno, Substrato and more."
    : "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping. Scopri NextHuman, Segno, Substrato e altri progetti.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: isEn ? "en_US" : "it_IT",
      url: absoluteUrl(locale, "/progetti"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: absoluteUrl(locale, "/progetti"),
      languages: languageAlternates("/progetti"),
    },
  };
}

export default function ProgettiLayout({ children }: Props) {
  return children;
}
