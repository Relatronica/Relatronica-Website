'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-gray-200 mb-4">!</p>
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Qualcosa è andato storto
        </h1>
        <p className="text-gray-500 mb-8">
          Si è verificato un errore imprevisto. Riprova oppure torna alla home.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Riprova
          </button>
          <a
            href="/"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Torna alla home
          </a>
        </div>
      </div>
    </main>
  );
}
