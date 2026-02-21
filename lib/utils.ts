import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProbabilityColor(probability: string): string {
  switch (probability) {
    case 'low':
      return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-500/20 dark:text-blue-200 dark:border-blue-500/40';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-500/40';
    case 'high':
      return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-500/20 dark:text-orange-200 dark:border-orange-500/40';
    case 'very-high':
      return 'bg-red-100 text-red-800 border-red-300 dark:bg-red-500/20 dark:text-red-200 dark:border-red-500/40';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-500/20 dark:text-gray-200 dark:border-gray-500/40';
  }
}

export function getThemeColor(theme: string): string {
  const colors: Record<string, string> = {
    clima: 'bg-cyan-500',
    tecnologia: 'bg-purple-500',
    demografia: 'bg-pink-500',
    geopolitica: 'bg-red-500',
    economia: 'bg-green-500',
    società: 'bg-blue-500',
    scienza: 'bg-indigo-500',
    ambiente: 'bg-emerald-500',
    energia: 'bg-amber-500',
    salute: 'bg-rose-500',
  };
  return colors[theme] || 'bg-gray-500';
}

export function getThemeColorHex(theme: string): string {
  const colors: Record<string, string> = {
    clima: '#06b6d4',
    tecnologia: '#a855f7',
    demografia: '#ec4899',
    geopolitica: '#ef4444',
    economia: '#22c55e',
    società: '#3b82f6',
    scienza: '#6366f1',
    ambiente: '#10b981',
    energia: '#f59e0b',
    salute: '#f43f5e',
  };
  return colors[theme] || '#6b7280';
}

