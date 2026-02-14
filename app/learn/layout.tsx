import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy - Relatronica",
  description: "Relatronica Academy: corsi gratuiti e aperti su design speculativo, civic tech, knowledge mapping e tecnologie responsabili. Impara a immaginare e costruire futuri migliori.",
  openGraph: {
    title: "Relatronica Academy",
    description: "Corsi gratuiti e aperti su design speculativo, civic tech, knowledge mapping e tecnologie responsabili.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relatronica Academy",
    description: "Corsi gratuiti e aperti su design speculativo, civic tech, knowledge mapping e tecnologie responsabili.",
  },
  alternates: {
    canonical: "/learn",
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
