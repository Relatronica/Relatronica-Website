import type { Metadata } from "next";
import type { Locale } from "@/i18n";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

type Props = { params: { locale: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const isEn = locale === "en";
  const title = "Manifesto - Relatronica";
  const description = isEn
    ? "The future is not a place we arrive at. It is a place we build. Relatronica's manifesto: nine principles to imagine, design and build fairer futures through speculative design, civic tech and knowledge mapping."
    : "Il futuro non è un luogo in cui arriviamo. È un luogo che costruiamo. Il manifesto di Relatronica: nove principi per immaginare, progettare e costruire futuri più giusti attraverso design speculativo, civic tech e knowledge mapping.";

  return {
    title,
    description,
    openGraph: {
      title,
      description: isEn
        ? "The future is not a place we arrive at. It is a place we build. Nine principles for fairer futures."
        : "Il futuro non è un luogo in cui arriviamo. È un luogo che costruiamo. Nove principi per immaginare futuri più giusti.",
      type: "website",
      locale: isEn ? "en_US" : "it_IT",
      url: absoluteUrl(locale, "/manifesto"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: isEn
        ? "The future is not a place we arrive at. It is a place we build."
        : "Il futuro non è un luogo in cui arriviamo. È un luogo che costruiamo.",
    },
    alternates: {
      canonical: absoluteUrl(locale, "/manifesto"),
      languages: languageAlternates("/manifesto"),
    },
  };
}

export default function ManifestoLayout({ children }: Props) {
  return children;
}
