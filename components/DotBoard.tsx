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
    >
      {/* Light mode dots */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.15) 1.5px, transparent 0)`,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center'
        }}
      />
      {/* Dark mode dots */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.08) 1.5px, transparent 0)`,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
