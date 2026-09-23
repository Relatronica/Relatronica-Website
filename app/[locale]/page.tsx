import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n";
import { absoluteUrl, languageAlternates } from "@/lib/seo";
import { HomeClient } from "./HomeClient";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const isEn = locale === "en";
  const title = isEn
    ? "Relatronica - Speculative Design, Civic Tech and Knowledge Mapping"
    : "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping";
  const description = isEn
    ? "We imagine possible futures and build tools that help communities understand, discuss and shape them. Activism for responsible technologies."
    : "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli. Attivismo per tecnologie responsabili.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: isEn ? "en_US" : "it_IT",
      url: absoluteUrl(locale, "/"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: absoluteUrl(locale, "/"),
      languages: languageAlternates("/"),
    },
  };
}

export default function Home({ params }: Props) {
  setRequestLocale(params.locale);
  return <HomeClient />;
}
