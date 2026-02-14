'use client';

import { useState, useEffect, useCallback } from 'react';
import { QuizResult } from '@/types/course';

const STORAGE_KEY = 'relatronica-course-progress';
const QUIZ_STORAGE_KEY = 'relatronica-quiz-progress';

function getStoredProgress(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setStoredProgress(lessons: string[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lessons));
  } catch {
    // localStorage might be full or unavailable
  }
}

function getStoredQuizResults(): QuizResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setStoredQuizResults(results: QuizResult[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(results));
  } catch {
    // localStorage might be full or unavailable
  }
}

export function useCourseProgress() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    setCompletedLessons(getStoredProgress());
    setQuizResults(getStoredQuizResults());
  }, []);

  const toggleLesson = useCallback((lessonId: string) => {
    setCompletedLessons((prev) => {
      const next = prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId];
      setStoredProgress(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (lessonId: string) => completedLessons.includes(lessonId),
    [completedLessons]
  );

  const saveQuizResult = useCallback((result: QuizResult) => {
    setQuizResults((prev) => {
      // Replace existing result for same module or add new one
      const filtered = prev.filter((r) => r.moduleId !== result.moduleId);
      const next = [...filtered, result];
      setStoredQuizResults(next);
      return next;
    });
  }, []);

  const getQuizResult = useCallback(
    (moduleId: string): QuizResult | undefined =>
      quizResults.find((r) => r.moduleId === moduleId),
    [quizResults]
  );

  const isQuizPassed = useCallback(
    (moduleId: string): boolean =>
      quizResults.some((r) => r.moduleId === moduleId && r.passed),
    [quizResults]
  );

  return {
    completedLessons,
    toggleLesson,
    isCompleted,
    quizResults,
    saveQuizResult,
    getQuizResult,
    isQuizPassed,
  };
}
