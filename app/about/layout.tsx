import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Relatronica",
  description: "Relatronica è uno studio di progettazione che unisce speculative design, civic tech e knowledge mapping per esplorare scenari futuri e creare strumenti che aiutano le comunità.",
  openGraph: {
    title: "About - Relatronica",
    description: "Relatronica è uno studio di progettazione che unisce speculative design, civic tech e knowledge mapping.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About - Relatronica",
    description: "Relatronica è uno studio di progettazione che unisce speculative design, civic tech e knowledge mapping.",
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

