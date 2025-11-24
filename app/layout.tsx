import type { Metadata } from "next";
import "./globals.css";
import { Toolbar } from "@/components/Toolbar";

export const metadata: Metadata = {
  title: "Relatronica 2.0 - Calendario delle Scadenze per l'Umanità",
  description: "Un calendario innovativo per visualizzare le scadenze probabilistiche che attendono l'umanità",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="light">
      <body className="antialiased bg-white">
        <Toolbar />
        {children}
      </body>
    </html>
  );
}

