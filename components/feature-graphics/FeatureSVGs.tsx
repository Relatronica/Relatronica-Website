'use client';

import { motion } from 'framer-motion';

export function SpeculativeDesignSVG() {
  return (
    <div className="relative w-full h-36 sm:h-44 md:h-48 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/15 p-4">
      <svg className="w-full h-full max-h-40" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spec-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="spec-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow-spec" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Grid Background Lines */}
        <path d="M 20 20 H 220 M 20 50 H 220 M 20 80 H 220 M 20 110 H 220" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 40 10 V 130 M 90 10 V 130 M 140 10 V 130 M 190 10 V 130" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 3" />

        {/* Branching Probabilistic Curves */}
        <motion.path
          d="M 20 70 C 60 70, 80 30, 140 30 C 180 30, 200 20, 220 20"
          stroke="url(#spec-grad1)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 20 70 C 70 70, 90 70, 140 70 C 180 70, 200 65, 220 65"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeDasharray="4 4"
          fill="none"
          strokeOpacity="0.7"
        />
        <motion.path
          d="M 20 70 C 60 70, 80 110, 140 110 C 180 110, 200 120, 220 120"
          stroke="url(#spec-grad2)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        {/* Glowing Horizon Nodes */}
        <circle cx="20" cy="70" r="5" fill="#10b981" filter="url(#glow-spec)" />
        <circle cx="140" cy="30" r="4.5" fill="#34d399" />
        <circle cx="140" cy="70" r="4" fill="#059669" />
        <circle cx="140" cy="110" r="4.5" fill="#34d399" />

        {/* Future Horizon Pulsing Targets */}
        <motion.circle
          cx="220" cy="20" r="6"
          fill="#34d399"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          filter="url(#glow-spec)"
        />
        <motion.circle
          cx="220" cy="65" r="4"
          fill="#10b981"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="220" cy="120" r="5"
          fill="#059669"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

export function CivicTechSVG() {
  return (
    <div className="relative w-full h-36 sm:h-44 md:h-48 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent border border-green-500/15 p-4">
      <svg className="w-full h-full max-h-40" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="civic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow-civic" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Rings */}
        <circle cx="120" cy="70" r="55" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="5 5" />
        <circle cx="120" cy="70" r="32" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />

        {/* Connecting Mesh Lines */}
        <path d="M 120 70 L 70 40 M 120 70 L 170 40 M 120 70 L 170 100 M 120 70 L 70 100 M 70 40 L 170 40 M 70 100 L 170 100" stroke="url(#civic-grad)" strokeWidth="1.5" strokeOpacity="0.5" />

        {/* Central Core Community Node */}
        <motion.circle
          cx="120" cy="70" r="10"
          fill="#22c55e"
          filter="url(#glow-civic)"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="120" cy="70" r="4" fill="#ffffff" />

        {/* Surrounding Node Colony */}
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: '120px 70px' }}>
          <circle cx="70" cy="40" r="6" fill="#4ade80" />
          <circle cx="170" cy="40" r="6.5" fill="#14b8a6" />
          <circle cx="170" cy="100" r="5.5" fill="#22c55e" />
          <circle cx="70" cy="100" r="6" fill="#86efac" />
          <circle cx="120" cy="15" r="4.5" fill="#10b981" />
          <circle cx="120" cy="125" r="4.5" fill="#14b8a6" />
        </motion.g>
      </svg>
    </div>
  );
}

export function KnowledgeMappingSVG() {
  return (
    <div className="relative w-full h-36 sm:h-44 md:h-48 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/15 p-4">
      <svg className="w-full h-full max-h-40" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="map-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow-map" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Matrix Graph Edges */}
        <motion.path
          d="M 30 40 L 80 80 L 140 30 L 190 75 L 220 45 M 80 80 L 130 110 L 190 75 M 30 40 L 90 25 L 140 30 M 90 25 L 130 110"
          stroke="url(#map-grad)"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Graph Clusters */}
        <polygon points="80,80 140,30 90,25" fill="#f97316" fillOpacity="0.08" />
        <polygon points="80,80 130,110 190,75" fill="#f59e0b" fillOpacity="0.06" />

        {/* Constellation Nodes */}
        <circle cx="30" cy="40" r="5" fill="#fb923c" />
        <circle cx="90" cy="25" r="4" fill="#fbbf24" />
        <motion.circle
          cx="140" cy="30" r="7"
          fill="#f97316"
          filter="url(#glow-map)"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <circle cx="80" cy="80" r="5.5" fill="#f59e0b" />
        <circle cx="130" cy="110" r="5" fill="#fb923c" />
        <motion.circle
          cx="190" cy="75" r="6"
          fill="#f97316"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <circle cx="220" cy="45" r="4.5" fill="#fbbf24" />
      </svg>
    </div>
  );
}

export function ResponsibleTechSVG() {
  return (
    <div className="relative w-full h-36 sm:h-44 md:h-48 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-500/10 via-blue-500/5 to-transparent border border-slate-500/15 p-4">
      <svg className="w-full h-full max-h-40" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow-shield" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric Balance Rings */}
        <circle cx="120" cy="70" r="50" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.5" />
        <circle cx="120" cy="70" r="35" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />

        {/* Shield Vector Outline */}
        <motion.path
          d="M 120 25 C 150 25, 170 35, 170 65 C 170 95, 120 120, 120 120 C 120 120, 70 95, 70 65 C 70 35, 90 25, 120 25 Z"
          stroke="url(#shield-grad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />

        {/* Inner Ethical Balance Core */}
        <motion.circle
          cx="120" cy="65" r="9"
          fill="#3b82f6"
          filter="url(#glow-shield)"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <path d="M 115 65 L 119 69 L 126 61" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
