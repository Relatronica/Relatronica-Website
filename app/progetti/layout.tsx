import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progetti - Relatronica",
  description: "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping. Scopri NextHuman, Segno, Substrato e altri progetti.",
  openGraph: {
    title: "Progetti - Relatronica",
    description: "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping. NextHuman, Segno, Substrato e altri progetti.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Progetti - Relatronica",
    description: "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping. NextHuman, Segno, Substrato e altri progetti.",
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

