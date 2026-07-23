'use client';

import dynamic from 'next/dynamic';

const Hero3DCanvas = dynamic(
  () => import('./Hero3DCanvas').then((mod) => mod.Hero3DCanvas),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Hero3DWrapper() {
  return <Hero3DCanvas />;
}
