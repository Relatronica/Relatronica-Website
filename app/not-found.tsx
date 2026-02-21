import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-gray-200 dark:text-gray-800 mb-4">404</p>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          Pagina non trovata
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          Torna alla home
        </Link>
      </div>
    </main>
  );
}
