import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progetti - Relatronica",
  description: "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping. Scopri NextHuman, SEGNO e altri progetti in sviluppo.",
  openGraph: {
    title: "Progetti - Relatronica",
    description: "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Progetti - Relatronica",
    description: "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping.",
  },
  alternates: {
    canonical: "/progetti",
  },
};

export default function ProgettiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

