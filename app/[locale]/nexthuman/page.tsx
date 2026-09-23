import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { StructuredData } from "@/components/StructuredData";
import type { Locale } from "@/i18n";
import { absoluteUrl, getSiteUrl, languageAlternates } from "@/lib/seo";
import { NextHumanClient } from "./NextHumanClient";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const isEn = locale === "en";
  const title = isEn
    ? "NextHuman - Calendar of Deadlines for Humanity"
    : "NextHuman - Calendario delle Scadenze per l'Umanità";
  const description = isEn
    ? "An interactive platform visualising the probabilistic deadlines awaiting humanity, combining knowledge mapping, speculative scenarios and temporal visualisations."
    : "Una piattaforma interattiva che visualizza le scadenze probabilistiche che attendono l'umanità, combinando knowledge mapping, scenari speculativi e visualizzazioni temporali.";

  return {
    title,
    description,
    openGraph: {
      title,
      description: isEn
        ? "An interactive platform visualising the probabilistic deadlines awaiting humanity."
        : "Una piattaforma interattiva che visualizza le scadenze probabilistiche che attendono l'umanità.",
      type: "website",
      locale: isEn ? "en_US" : "it_IT",
      url: absoluteUrl(locale, "/nexthuman"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: absoluteUrl(locale, "/nexthuman"),
      languages: languageAlternates("/nexthuman"),
    },
  };
}

export default function NextHumanPage({ params }: Props) {
  setRequestLocale(params.locale);
  const locale = params.locale;
  const siteUrl = getSiteUrl();
  const isEn = locale === "en";

  const nextHumanSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: isEn
      ? "NextHuman - Calendar of Deadlines for Humanity"
      : "NextHuman - Calendario delle Scadenze per l'Umanità",
    description: isEn
      ? "An interactive platform visualising the probabilistic deadlines awaiting humanity, combining knowledge mapping, speculative scenarios and temporal visualisations."
      : "Una piattaforma interattiva che visualizza le scadenze probabilistiche che attendono l'umanità, combinando knowledge mapping, scenari speculativi e visualizzazioni temporali.",
    url: absoluteUrl(locale, "/nexthuman"),
    applicationCategory: "DataVisualization",
    operatingSystem: "Web",
    inLanguage: isEn ? "en" : "it-IT",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    creator: {
      "@type": "Organization",
      name: "Relatronica",
      url: siteUrl,
    },
  };

  return (
    <>
      <StructuredData data={nextHumanSchema} />
      <NextHumanClient />
    </>
  );
}
