'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles, Users, Network, Target, Globe, Shield } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';

export function HomeClient() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Relatronica",
    "description": "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli. Attivismo per tecnologie responsabili.",
    "url": siteUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Relatronica",
      "url": siteUrl
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: 'Speculative Design',
      description: 'Progettiamo scenari futuri alternativi per stimolare il pensiero critico e aprire conversazioni su possibili futuri.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Civic Tech',
      description: 'Sviluppiamo tecnologie digitali che potenziano le comunità e migliorano l\'accesso alle informazioni pubbliche.',
      color: 'green'
    },
    {
      icon: Network,
      title: 'Knowledge Mapping',
      description: 'Visualizziamo le relazioni tra concetti, dati e idee per rendere la conoscenza più accessibile e comprensibile.',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Tecnologie Responsabili',
      description: 'Promuoviamo un approccio etico e responsabile alla tecnologia, orientato al benessere collettivo.',
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-50 text-purple-600',
      green: 'bg-green-50 text-green-600',
      orange: 'bg-orange-50 text-orange-600',
      emerald: 'bg-emerald-50 text-emerald-600',
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <>
      <StructuredData data={homePageSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-24">
              <h1 className="text-7xl font-bold mb-6 text-slate-900 leading-tight">
                Relatronica
              </h1>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a{' '}
                <span className="font-semibold text-slate-900">comprenderli</span>,{' '}
                <span className="font-semibold text-slate-900">discuterli</span> e{' '}
                <span className="font-semibold text-slate-900">plasmarli</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/nexthuman"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Esplora NextHuman
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 border border-slate-200 text-slate-900 rounded-full font-semibold hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Scopri di più
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl w-fit mb-4 ${getColorClasses(feature.color)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* NextHuman Highlight */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 mb-24 shadow-sm">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/80 mb-6">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-slate-900">NextHuman</h2>
                <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                  Un calendario delle scadenze probabilistiche per l&apos;umanità. 
                  Esplora scenari futuri attraverso visualizzazioni interattive, knowledge mapping 
                  e design speculativo.
                </p>
                <Link
                  href="/nexthuman"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Inizia l&apos;esplorazione
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/progetti"
                className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100">
                    <Target className="w-6 h-6 text-slate-700" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">I Nostri Progetti</h3>
                <p className="text-slate-600 leading-relaxed">
                  Esplora le nostre esplorazioni al confine tra design speculativo, civic tech e knowledge mapping.
                </p>
              </Link>

              <Link
                href="/about"
                className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100">
                    <Globe className="w-6 h-6 text-slate-700" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Chi Siamo</h3>
                <p className="text-slate-600 leading-relaxed">
                  Scopri la nostra missione, i nostri valori e il nostro impegno per tecnologie responsabili.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </DotBoard>
    </>
  );
}
