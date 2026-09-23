import type { Metadata } from "next";
import type { Locale } from "@/i18n";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

type Props = { params: { locale: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const isEn = locale === "en";
  const title = isEn ? "About - Relatronica" : "About - Relatronica";
  const description = isEn
    ? "Relatronica is a design studio combining speculative design, civic tech and knowledge mapping to explore future scenarios. Activism for responsible, ethical technologies."
    : "Relatronica è uno studio di progettazione che unisce speculative design, civic tech e knowledge mapping per esplorare scenari futuri. Attivismo per tecnologie responsabili, etiche e orientate al benessere collettivo.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: isEn ? "en_US" : "it_IT",
      url: absoluteUrl(locale, "/about"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: absoluteUrl(locale, "/about"),
      languages: languageAlternates("/about"),
    },
  };
}

export default function AboutLayout({ children }: Props) {
  return children;
}
