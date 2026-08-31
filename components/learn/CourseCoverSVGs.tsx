'use client';

const coverShell =
  'relative w-full h-28 sm:h-32 overflow-hidden rounded-t-xl border-b flex items-center justify-center p-3';

type CoverProps = { muted?: boolean };

function CoverFrame({
  muted,
  className,
  children,
}: {
  muted?: boolean;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${coverShell} ${className} ${muted ? 'opacity-55 saturate-50' : ''}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function FondamentiCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent border-blue-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <path d="M20 70 H220" stroke="currentColor" strokeOpacity="0.07" strokeDasharray="4 4" />
        <path d="M20 40 H220 M20 100 H220" stroke="currentColor" strokeOpacity="0.05" strokeDasharray="3 3" />
        <path
          d="M30 90 C70 90, 90 45, 130 45 C170 45, 190 35, 210 35"
          stroke="#3b82f6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M30 70 C80 70, 100 70, 140 70 C180 70, 200 68, 210 68"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="5 4"
          strokeOpacity="0.75"
        />
        <path
          d="M30 55 C65 55, 85 105, 130 105 C175 105, 195 115, 210 115"
          stroke="#60a5fa"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.85"
        />
        <circle cx="30" cy="70" r="5" fill="#3b82f6" />
        <circle cx="130" cy="45" r="4.5" fill="#6366f1" />
        <circle cx="130" cy="105" r="4.5" fill="#60a5fa" />
        <circle cx="210" cy="35" r="5.5" fill="#818cf8" />
        <path
          d="M155 22 L165 38 L182 40 L169 52 L173 69 L155 60 L137 69 L141 52 L128 40 L145 38 Z"
          fill="#3b82f6"
          fillOpacity="0.2"
          stroke="#6366f1"
          strokeWidth="1.5"
        />
      </svg>
    </CoverFrame>
  );
}

export function AiSocietaCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent border-purple-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <circle cx="120" cy="70" r="48" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="4 4" />
        <path
          d="M120 70 L75 42 M120 70 L165 42 M120 70 L165 98 M120 70 L75 98 M75 42 L165 42 M75 98 L165 98"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        <circle cx="120" cy="70" r="9" fill="#a855f7" fillOpacity="0.9" />
        <circle cx="120" cy="70" r="3.5" fill="white" fillOpacity="0.9" />
        <circle cx="75" cy="42" r="5.5" fill="#c084fc" />
        <circle cx="165" cy="42" r="5.5" fill="#8b5cf6" />
        <circle cx="165" cy="98" r="5" fill="#a855f7" />
        <circle cx="75" cy="98" r="5" fill="#d8b4fe" />
        <path
          d="M108 28 C118 18, 132 18, 142 28 C152 38, 152 52, 142 62 C132 72, 118 72, 108 62 C98 52, 98 38, 108 28 Z"
          stroke="#8b5cf6"
          strokeWidth="1.8"
          fill="#a855f7"
          fillOpacity="0.12"
        />
        <circle cx="125" cy="45" r="3" fill="#8b5cf6" />
      </svg>
    </CoverFrame>
  );
}

export function AiEticaDesignerCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-transparent border-rose-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <rect x="58" y="28" width="124" height="84" rx="10" stroke="#f43f5e" strokeWidth="2" fill="#f43f5e" fillOpacity="0.06" />
        <rect x="58" y="28" width="124" height="18" rx="10" fill="#f43f5e" fillOpacity="0.15" />
        <circle cx="70" cy="37" r="3" fill="#fb7185" />
        <circle cx="80" cy="37" r="3" fill="#fda4af" />
        <rect x="72" y="58" width="52" height="8" rx="4" fill="#fb7185" fillOpacity="0.35" />
        <rect x="72" y="72" width="76" height="6" rx="3" fill="#fda4af" fillOpacity="0.3" />
        <rect x="72" y="84" width="64" height="6" rx="3" fill="#fda4af" fillOpacity="0.2" />
        <path
          d="M178 88 C188 78, 204 78, 204 92 C204 106, 188 112, 178 102 C168 92, 168 98, 178 88 Z"
          fill="#f43f5e"
          fillOpacity="0.25"
          stroke="#f43f5e"
          strokeWidth="1.5"
        />
        <path d="M188 58 L196 74 L212 76 L200 88 L203 104 L188 96 L173 104 L176 88 L164 76 L180 74 Z" fill="#fb7185" fillOpacity="0.35" stroke="#f43f5e" strokeWidth="1.2" />
      </svg>
    </CoverFrame>
  );
}

export function DesignFictionLabCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border-orange-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <rect x="42" y="32" width="48" height="56" rx="6" stroke="#f97316" strokeWidth="1.5" fill="#f97316" fillOpacity="0.08" />
        <rect x="96" y="32" width="48" height="56" rx="6" stroke="#fb923c" strokeWidth="1.5" fill="#fb923c" fillOpacity="0.08" />
        <rect x="150" y="32" width="48" height="56" rx="6" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" fillOpacity="0.08" />
        <rect x="50" y="42" width="32" height="20" rx="3" fill="#f97316" fillOpacity="0.2" />
        <rect x="104" y="42" width="32" height="20" rx="3" fill="#fb923c" fillOpacity="0.2" />
        <rect x="158" y="42" width="32" height="20" rx="3" fill="#fbbf24" fillOpacity="0.2" />
        <path
          d="M118 98 L128 78 L138 88 L152 72 L168 98 Z"
          fill="#f97316"
          fillOpacity="0.2"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M186 24 L190 34 L200 36 L192 44 L194 54 L186 49 L178 54 L180 44 L172 36 L182 34 Z" fill="#fbbf24" stroke="#f97316" strokeWidth="1.2" />
      </svg>
    </CoverFrame>
  );
}

export function PrivacyToolkitCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border-emerald-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <path
          d="M120 30 C148 30, 168 40, 168 62 C168 88, 120 112, 120 112 C120 112, 72 88, 72 62 C72 40, 92 30, 120 30 Z"
          stroke="#10b981"
          strokeWidth="2.5"
          fill="#10b981"
          fillOpacity="0.1"
        />
        <rect x="108" y="58" width="24" height="28" rx="5" stroke="#059669" strokeWidth="2" fill="#10b981" fillOpacity="0.2" />
        <path d="M114 58 V52 C114 45, 118 40, 120 40 C122 40, 126 45, 126 52 V58" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        <circle cx="120" cy="72" r="3.5" fill="#059669" />
        <path d="M120 75 V82" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </CoverFrame>
  );
}

export function DataLiteracyCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-transparent border-cyan-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <path d="M40 105 L40 55 L80 55 L80 85 L120 85 L120 45 L160 45 L160 95 L200 95 L200 65" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="52" y="68" width="16" height="37" rx="3" fill="#22d3ee" fillOpacity="0.35" />
        <rect x="92" y="52" width="16" height="53" rx="3" fill="#06b6d4" fillOpacity="0.45" />
        <rect x="132" y="58" width="16" height="47" rx="3" fill="#0891b2" fillOpacity="0.35" />
        <rect x="172" y="72" width="16" height="33" rx="3" fill="#22d3ee" fillOpacity="0.3" />
        <circle cx="200" cy="65" r="5" fill="#06b6d4" />
      </svg>
    </CoverFrame>
  );
}

export function OpenSourceCitizensCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-transparent border-teal-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <circle cx="120" cy="70" r="42" stroke="#14b8a6" strokeWidth="1.5" strokeOpacity="0.35" />
        <ellipse cx="120" cy="70" rx="42" ry="16" stroke="#14b8a6" strokeWidth="1.2" strokeOpacity="0.25" />
        <path d="M120 28 V112 M78 70 H162" stroke="#14b8a6" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="120" cy="70" r="6" fill="#14b8a6" />
        <circle cx="92" cy="58" r="4" fill="#2dd4bf" />
        <circle cx="148" cy="58" r="4" fill="#5eead4" />
        <circle cx="148" cy="82" r="4" fill="#14b8a6" />
        <circle cx="92" cy="82" r="4" fill="#0d9488" />
      </svg>
    </CoverFrame>
  );
}

export function EticaIaGenerativaCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent border-violet-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <circle cx="88" cy="58" r="22" stroke="#8b5cf6" strokeWidth="1.5" fill="#8b5cf6" fillOpacity="0.08" />
        <circle cx="152" cy="58" r="22" stroke="#a78bfa" strokeWidth="1.5" fill="#a78bfa" fillOpacity="0.08" />
        <path d="M110 58 C120 72, 130 72, 140 58" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M70 98 C95 82, 115 108, 140 92 C160 80, 175 98, 190 88" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
        <circle cx="70" cy="98" r="4" fill="#c4b5fd" />
        <circle cx="140" cy="92" r="4.5" fill="#8b5cf6" />
        <circle cx="190" cy="88" r="4" fill="#a78bfa" />
        <path d="M168 34 L172 42 L180 43 L174 49 L176 57 L168 52 L160 57 L162 49 L156 43 L164 42 Z" fill="#c4b5fd" fillOpacity="0.6" />
      </svg>
    </CoverFrame>
  );
}

export function DefaultCourseCover({ muted }: CoverProps) {
  return (
    <CoverFrame
      muted={muted}
      className="bg-gradient-to-br from-slate-500/10 via-slate-400/5 to-transparent border-slate-500/15"
    >
      <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
        <path d="M70 40 H170 V100 H70 Z" stroke="#64748b" strokeWidth="2" fill="#64748b" fillOpacity="0.08" />
        <path d="M82 52 H158 M82 64 H140 M82 76 H150" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="120" cy="70" r="28" stroke="#64748b" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 4" />
      </svg>
    </CoverFrame>
  );
}

const COVER_BY_SLUG: Record<string, React.ComponentType<CoverProps>> = {
  fondamenti: FondamentiCover,
  'ai-e-societa': AiSocietaCover,
  'ai-etica-per-designer': AiEticaDesignerCover,
  'design-fiction-lab': DesignFictionLabCover,
  'privacy-toolkit': PrivacyToolkitCover,
  'data-literacy': DataLiteracyCover,
  'open-source-per-cittadini': OpenSourceCitizensCover,
  'etica-ia-generativa': EticaIaGenerativaCover,
};

export function CourseCoverArt({ slug, muted = false }: { slug: string; muted?: boolean }) {
  const Cover = COVER_BY_SLUG[slug] ?? DefaultCourseCover;
  return <Cover muted={muted} />;
}
