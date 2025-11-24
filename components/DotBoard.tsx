'use client';

import { ReactNode } from 'react';

interface DotBoardProps {
  children: ReactNode;
  className?: string;
}

export function DotBoard({ children, className = '' }: DotBoardProps) {
  return (
    <div 
      className={`relative min-h-screen ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(148, 163, 184, 0.15) 1.5px, transparent 0)
        `,
        backgroundSize: '24px 24px',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

