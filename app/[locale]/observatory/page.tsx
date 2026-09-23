import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n";
import { absoluteUrl, languageAlternates } from "@/lib/seo";
import ObservatoryClient from "./ObservatoryClient";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const isEn = locale === "en";
  const title = "Pulse";
  const description = isEn
    ? "Pulse (Relatronica observatory): real-time news connected to NextHuman future scenarios. The heartbeat of the future, today."
    : "Pulse (osservatorio Relatronica): notizie in tempo reale collegate agli scenari futuri di NextHuman. Il battito del futuro, oggi.";

  return {
    title,
    description,
    keywords: [
      "pulse",
      "osservatorio",
      "scenari futuri",
      "NextHuman",
      "civic tech",
      "future scenarios",
    ],
    openGraph: {
      title: "Pulse | Relatronica",
      description,
      url: absoluteUrl(locale, "/observatory"),
      type: "website",
      locale: isEn ? "en_US" : "it_IT",
    },
    twitter: {
      card: "summary_large_image",
      title: "Pulse | Relatronica",
      description,
    },
    alternates: {
      canonical: absoluteUrl(locale, "/observatory"),
      languages: languageAlternates("/observatory"),
    },
  };
}

export default function ObservatoryPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <ObservatoryClient />;
}
