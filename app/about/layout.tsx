import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Relatronica",
  description: "Relatronica è uno studio di progettazione che unisce speculative design, civic tech e knowledge mapping per esplorare scenari futuri. Attivismo per tecnologie responsabili, etiche e orientate al benessere collettivo.",
  openGraph: {
    title: "About - Relatronica",
    description: "Relatronica è uno studio di progettazione che unisce speculative design, civic tech e knowledge mapping. Attivismo per tecnologie responsabili.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About - Relatronica",
    description: "Relatronica è uno studio di progettazione che unisce speculative design, civic tech e knowledge mapping. Attivismo per tecnologie responsabili.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

