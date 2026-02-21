import type { Metadata } from "next";
import "./globals.css";
import { Toolbar } from "@/components/Toolbar";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
    template: "%s | Relatronica"
  },
  description: "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli. Calendario delle scadenze probabilistiche per l'umanità.",
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
    "futuri probabilistici",
    "Relatronica",
    "CERN",
    "etica tecnologica",
    "responsible tech",
  ],
  authors: [{ name: "Relatronica" }],
  creator: "Relatronica",
  publisher: "Relatronica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Relatronica",
    title: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
    description: "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: "Relatronica Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
    description: "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli.",
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
    "description": "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli",
    "sameAs": [
      "https://www.linkedin.com/company/relatronica/",
      "https://www.instagram.com/relatronica"
    ],
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
    "description": "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli",
    "inLanguage": "it-IT",
  };

  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
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
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          <I18nProvider>
            <Toolbar />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

