'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Network, Sparkles, Brain, Scale } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';

export default function ProgettiPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  
  const progetti = [
    {
      id: 'nexthuman',
      title: 'NextHuman',
      subtitle: 'Calendario delle Scadenze per l\'Umanità',
      description: 'Una piattaforma interattiva che visualizza le scadenze probabilistiche che attendono l\'umanità, combinando knowledge mapping, scenari speculativi e visualizzazioni temporali.',
      tags: ['Speculative Design', 'Knowledge Mapping', 'Civic Tech', 'Data Visualization'],
      href: '/nexthuman',
      icon: Calendar,
      color: 'blue',
    },
    {
      id: 'segno',
      title: 'SEGNO',
      subtitle: 'Costruisci il tuo scenario AI',
      description: 'Una piattaforma interattiva che permette di costruire scenari personalizzati sull\'uso dell\'IA e scoprire l\'impatto. Aiuta persone e imprese a comprendere rischi e opportunità attraverso note educative con riferimenti normativi e best practices.',
      tags: ['Civic Tech', 'AI Ethics', 'Speculative Design', 'Education'],
      href: 'https://segno.app/',
      icon: Brain,
      color: 'purple',
    },
    {
      id: 'civica',
      title: 'Civica',
      subtitle: 'Configuratore di sistemi politici',
      description: 'Una piattaforma interattiva per esplorare, confrontare e configurare diversi sistemi politici. Permette di comprendere le implicazioni delle scelte istituzionali attraverso visualizzazioni e scenari comparativi.',
      tags: ['Civic Tech', 'Speculative Design', 'Education', 'In Sviluppo'],
      href: null,
      icon: Scale,
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      purple: 'bg-purple-50 text-purple-600',
      green: 'bg-green-50 text-green-600',
      orange: 'bg-orange-50 text-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const progettiPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Progetti - Relatronica",
    "description": "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping.",
    "url": `${siteUrl}/progetti`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": progetti.map((progetto, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": progetto.title,
          "description": progetto.description,
          "url": progetto.href ? (progetto.href.startsWith('http') ? progetto.href : `${siteUrl}${progetto.href}`) : undefined,
        }
      }))
    }
  };

  return (
    <>
      <StructuredData data={progettiPageSchema} />
      <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-6xl font-bold mb-6 text-slate-900">Progetti</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {progetti.map((progetto) => {
            const Icon = progetto.icon;
            const isComingSoon = !progetto.href;
            
            const CardContent = (
              <div className={`
                rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 h-full
                transition-all duration-300 shadow-sm
                ${isComingSoon ? 'opacity-60' : 'hover:shadow-md hover:-translate-y-1 cursor-pointer'}
              `}>
                <div className={`p-3 rounded-xl w-fit mb-4 ${getColorClasses(progetto.color)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{progetto.title}</h3>
                <p className="text-sm text-slate-500 mb-3 font-medium">{progetto.subtitle}</p>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">{progetto.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {progetto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {!isComingSoon && (
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>Esplora progetto</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
                {isComingSoon && (
                  <div className="text-slate-400 text-sm italic">
                    Prossimamente
                  </div>
                )}
              </div>
            );

            if (isComingSoon) {
              return <div key={progetto.id}>{CardContent}</div>;
            }

            return (
              <Link key={progetto.id} href={progetto.href!}>
                {CardContent}
              </Link>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Hai un progetto in mente?</h2>
            <p className="text-slate-600 mb-6 text-[15px] leading-relaxed">
              Siamo sempre interessati a collaborare su progetti che esplorano il futuro 
              attraverso design speculativo, civic tech e knowledge mapping.
            </p>
            <p className="text-sm text-slate-500">
              Contattaci per discutere delle possibilità
            </p>
          </div>
        </div>
        </div>
      </div>
    </DotBoard>
    </>
  );
}

