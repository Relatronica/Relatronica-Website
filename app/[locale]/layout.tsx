import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Toolbar } from "@/components/Toolbar";
import { Analytics } from "@/components/Analytics";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { locales, type Locale } from "@/i18n";
import { absoluteUrl, getSiteUrl, languageAlternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";

const siteUrl = getSiteUrl();
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
  const { locale: localeParam } = await Promise.resolve(params);
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "it") as Locale;
  const isEn = locale === "en";

  const title = isEn
    ? "Relatronica - Speculative Design, Civic Tech and Knowledge Mapping"
    : "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping";
  const description = isEn
    ? "We imagine possible futures and build tools that help communities understand, discuss and shape them. A calendar of probabilistic deadlines for humanity."
    : "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli. Calendario delle scadenze probabilistiche per l'umanità.";

  return {
    title: {
      default: title,
      template: "%s | Relatronica",
    },
    description,
    keywords: isEn
      ? [
          "speculative design",
          "civic tech",
          "knowledge mapping",
          "future scenarios",
          "NextHuman",
          "Relatronica",
          "CERN",
          "responsible tech",
        ]
      : [
          "design speculativo",
          "civic tech",
          "knowledge mapping",
          "futuro",
          "scenari futuri",
          "NextHuman",
          "Relatronica",
          "CERN",
          "responsible tech",
        ],
    authors: [{ name: "Relatronica" }],
    creator: "Relatronica",
    publisher: "Relatronica",
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "it_IT",
      alternateLocale: isEn ? ["it_IT"] : ["en_US"],
      url: absoluteUrl(locale, "/"),
      siteName: "Relatronica",
      title,
      description,
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
    ...(googleVerification ? { verification: { google: googleVerification } } : {}),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const { locale: localeParam } = await Promise.resolve(params);

  if (!routing.locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  setRequestLocale(locale);

  const messages = await getMessages();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Relatronica",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: locale === "en"
      ? "We imagine possible futures and build tools that help communities understand, discuss and shape them"
      : "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli",
    sameAs: [
      "https://www.linkedin.com/company/relatronica/",
      "https://www.instagram.com/relatronica",
    ],
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "CERN, Geneva",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Geneva",
        addressCountry: "CH",
      },
    },
    areaServed: [
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Country", name: "Italy" },
      { "@type": "AdministrativeArea", name: "European Union" },
    ],
    knowsAbout: [
      "Speculative Design",
      "Civic Tech",
      "Knowledge Mapping",
      "Data Visualization",
      "Future Scenarios",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Relatronica",
    url: absoluteUrl(locale, "/"),
    description: organizationSchema.description,
    inLanguage: locale === "en" ? "en" : "it-IT",
    publisher: {
      "@type": "Organization",
      name: "Relatronica",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider>
          <I18nProvider initialLocale={locale}>
            <Toolbar />
            {children}
            <Analytics />
          </I18nProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
}
