'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Hero3DCanvas = dynamic(
  () => import('./Hero3DCanvas').then((mod) => mod.Hero3DCanvas),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Hero3DWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Rinvia l'inizializzazione del 3D Canvas al primo momento di inattività
    if ('requestIdleCallback' in window) {
      const handle = requestIdleCallback(() => setShouldRender(true), { timeout: 1500 });
      return () => cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setShouldRender(true), 200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;

  return <Hero3DCanvas />;
}

