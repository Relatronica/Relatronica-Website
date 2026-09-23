export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-gray-200 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
        <p className="text-sm text-gray-400 dark:text-gray-500">Caricamento...</p>
      </div>
    </main>
  );
}
