import type { Metadata } from "next";
import { NextHumanClient } from "./NextHumanClient";

export const metadata: Metadata = {
  title: "NextHuman - Calendario delle Scadenze per l'Umanità",
  description: "Una piattaforma interattiva che visualizza le scadenze probabilistiche che attendono l'umanità, combinando knowledge mapping, scenari speculativi e visualizzazioni temporali.",
  openGraph: {
    title: "NextHuman - Calendario delle Scadenze per l'Umanità",
    description: "Una piattaforma interattiva che visualizza le scadenze probabilistiche che attendono l'umanità.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextHuman - Calendario delle Scadenze per l'Umanità",
    description: "Una piattaforma interattiva che visualizza le scadenze probabilistiche che attendono l'umanità.",
  },
  alternates: {
    canonical: "/nexthuman",
  },
};

export default function NextHumanPage() {
  return <NextHumanClient />;
}

