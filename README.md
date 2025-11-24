# Relatronica 2.0

Un calendario innovativo e moderno per visualizzare le scadenze probabilistiche che attendono l'umanità. Un progetto che combina speculative design, civic tech e knowledge mapping.

## Caratteristiche

- 📅 **Vista Calendario**: Visualizzazione mensile tradizionale con indicazione delle scadenze
- 📊 **Vista Timeline**: Timeline interattiva che mostra le scadenze organizzate per anno
- 🎯 **Filtri Avanzati**: Filtra per temi e probabilità
- 🎨 **Design Moderno**: Interfaccia pulita e moderna con supporto dark mode
- 📱 **Responsive**: Ottimizzato per tutti i dispositivi

## Tecnologie

- **Next.js 14** con App Router
- **TypeScript** per type safety
- **Tailwind CSS** per lo styling
- **date-fns** per la gestione delle date
- **Lucide React** per le icone

## Installazione

```bash
npm install
```

## Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## Struttura del Progetto

```
├── app/              # App Router di Next.js
├── components/       # Componenti React
├── data/            # Dati delle scadenze
├── lib/             # Utility functions
└── types/           # TypeScript types
```

## Aggiungere Nuove Scadenze

Modifica il file `data/deadlines.ts` per aggiungere nuove scadenze. Ogni scadenza deve includere:

- Titolo e descrizione
- Data
- Probabilità (low, medium, high, very-high)
- Temi (clima, tecnologia, demografia, etc.)
- Impatto (locale, regionale, globale)
- Categoria (milestone, threshold, tipping-point, transformation)
- Fonti (opzionale)

## Licenza

MIT

