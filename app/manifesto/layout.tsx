import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto - Relatronica",
  description: "Il futuro non è un luogo in cui arriviamo. È un luogo che costruiamo. Il manifesto di Relatronica: nove principi per immaginare, progettare e costruire futuri più giusti attraverso design speculativo, civic tech e knowledge mapping.",
  openGraph: {
    title: "Manifesto - Relatronica",
    description: "Il futuro non è un luogo in cui arriviamo. È un luogo che costruiamo. Nove principi per immaginare futuri più giusti.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifesto - Relatronica",
    description: "Il futuro non è un luogo in cui arriviamo. È un luogo che costruiamo. Nove principi per immaginare futuri più giusti.",
  },
  alternates: {
    canonical: "/manifesto",
  },
};

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
