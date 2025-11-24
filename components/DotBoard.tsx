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
          radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0'
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

