'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Network, Sparkles, Brain, Scale, Users, FileText, Instagram, Linkedin } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { useI18n } from '@/lib/i18n';

export default function ProgettiPage() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  
  const progetti = [
    {
      id: 'nexthuman',
      title: t('projects.nexthuman.title'),
      subtitle: t('projects.nexthuman.subtitle'),
      description: t('projects.nexthuman.description'),
      tags: ['Speculative Design', 'Knowledge Mapping', 'Civic Tech', 'Data Visualization'],
      href: '/nexthuman',
      icon: Calendar,
      color: 'blue',
      status: null,
    },
    {
      id: 'segno',
      title: t('projects.segno.title'),
      subtitle: t('projects.segno.subtitle'),
      description: t('projects.segno.description'),
      tags: ['Civic Tech', 'AI Ethics', 'Speculative Design', 'Education'],
      href: 'https://segno.app/',
      icon: Brain,
      color: 'purple',
      status: null,
    },
    {
      id: 'argo',
      title: t('projects.argo.title'),
      subtitle: t('projects.argo.subtitle'),
      description: t('projects.argo.description'),
      tags: ['End-to-End Encryption', 'Zero Knowledge', 'Privacy by Design', 'Note-taking'],
      href: null,
      icon: FileText,
      color: 'pink',
      status: t('projects.argo.status'),
    },
    {
      id: 'civica',
      title: t('projects.civica.title'),
      subtitle: t('projects.civica.subtitle'),
      description: t('projects.civica.description'),
      tags: ['Civic Tech', 'Speculative Design', 'Education'],
      href: null,
      icon: Scale,
      color: 'orange',
      status: t('projects.civica.status'),
    },
    {
      id: 'neuralforming',
      title: t('projects.neuralforming.title'),
      subtitle: t('projects.neuralforming.subtitle'),
      description: t('projects.neuralforming.description'),
      tags: ['Civic Tech', 'Education', 'AI Ethics', 'Gamification'],
      href: null,
      icon: Users,
      color: 'green',
      status: t('projects.neuralforming.status'),
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      purple: 'bg-purple-50 text-purple-600',
      green: 'bg-green-50 text-green-600',
      orange: 'bg-orange-50 text-orange-600',
      pink: 'bg-pink-50 text-pink-600',
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
            <h1 className="text-6xl font-bold mb-6 text-slate-900">{t('projects.title')}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {progetti.map((progetto) => {
            const Icon = progetto.icon;
            const isComingSoon = !progetto.href;
            const hasStatus = progetto.status !== null;
            
            const CardContent = (
              <div className={`
                rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 h-full
                transition-all duration-300 shadow-sm
                ${isComingSoon ? '' : 'hover:shadow-md hover:-translate-y-1 cursor-pointer'}
              `}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl w-fit ${getColorClasses(progetto.color)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {hasStatus && (
                    <span className={`
                      px-3 py-1 text-xs font-semibold rounded-full border
                      ${progetto.status === t('projects.neuralforming.status') 
                        ? 'bg-amber-100 text-amber-700 border-amber-200' 
                        : 'bg-blue-100 text-blue-700 border-blue-200'
                      }
                    `}>
                      {progetto.status}
                    </span>
                  )}
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
                    <span>{t('projects.exploreProject')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
                {isComingSoon && !hasStatus && (
                  <div className="text-slate-400 text-sm italic">
                    {t('common.comingSoon')}
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
            <h2 className="text-2xl font-bold mb-4 text-slate-900">{t('projects.contact.title')}</h2>
            <p className="text-slate-600 mb-6 text-[15px] leading-relaxed">
              {t('projects.contact.description')}
            </p>
            <p className="text-sm text-slate-500 mb-4">
              {t('projects.contact.cta')}
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.instagram.com/relatronica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-sm"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/relatronica/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-sm"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </DotBoard>
    </>
  );
}

