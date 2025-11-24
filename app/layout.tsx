import type { Metadata } from "next";
import "./globals.css";
import { Toolbar } from "@/components/Toolbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
    template: "%s | Relatronica"
  },
  description: "Studio di progettazione che esplora il futuro attraverso design speculativo, civic tech e knowledge mapping. Calendario delle scadenze probabilistiche per l'umanità.",
  keywords: [
    "design speculativo",
    "civic tech",
    "knowledge mapping",
    "futuro",
    "scenari futuri",
    "tecnologia civica",
    "visualizzazione dati",
    "NextHuman",
    "calendario scadenze",
    "futuri probabilistici"
  ],
  authors: [{ name: "Relatronica" }],
  creator: "Relatronica",
  publisher: "Relatronica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Relatronica",
    title: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
    description: "Studio di progettazione che esplora il futuro attraverso design speculativo, civic tech e knowledge mapping.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Relatronica Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
    description: "Studio di progettazione che esplora il futuro attraverso design speculativo, civic tech e knowledge mapping.",
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Relatronica",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Studio di progettazione che esplora il futuro attraverso design speculativo, civic tech e knowledge mapping",
    "sameAs": [],
    "foundingDate": "2024",
    "areaServed": "IT",
    "knowsAbout": [
      "Speculative Design",
      "Civic Tech",
      "Knowledge Mapping",
      "Data Visualization",
      "Future Scenarios"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Relatronica",
    "url": siteUrl,
    "description": "Studio di progettazione che esplora il futuro attraverso design speculativo, civic tech e knowledge mapping",
    "inLanguage": "it-IT",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="it" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased bg-white">
        <Toolbar />
        {children}
      </body>
    </html>
  );
}

