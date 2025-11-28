import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
  description: "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli. Attivismo per tecnologie responsabili.",
  openGraph: {
    title: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
    description: "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relatronica - Design Speculativo, Civic Tech e Knowledge Mapping",
    description: "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
