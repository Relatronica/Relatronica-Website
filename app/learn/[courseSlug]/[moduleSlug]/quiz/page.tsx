'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  HelpCircle,
} from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { useI18n } from '@/lib/i18n';
import { getModuleQuiz, getCourse } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';

type QuizState = 'intro' | 'in-progress' | 'results';

export default function QuizPage() {
  const params = useParams();
  const { t, locale } = useI18n();
  const { saveQuizResult, getQuizResult } = useCourseProgress();
  const courseSlug = params.courseSlug as string;
  const moduleSlug = params.moduleSlug as string;

  const result = getModuleQuiz(courseSlug, moduleSlug);
  const course = getCourse(courseSlug);

  const [quizState, setQuizState] = useState<QuizState>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const moduleId = `${courseSlug}/${moduleSlug}`;
  const previousResult = getQuizResult(moduleId);

  // Find next module for navigation
  const nextModule = useMemo(() => {
    if (!course) return null;
    const idx = course.modules.findIndex((m) => m.slug === moduleSlug);
    return idx < course.modules.length - 1 ? course.modules[idx + 1] : null;
  }, [course, moduleSlug]);

  if (!result || !course) {
    return (
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {t('learn.notFound')}
          </h1>
          <Link href="/learn" className="text-blue-600 hover:underline">
            {t('learn.backToAcademy')}
          </Link>
        </div>
      </DotBoard>
    );
  }

  const { module: mod, quiz } = result;
  const quizContent = quiz.content[locale as 'it' | 'en'] || quiz.content.it;
  const modContent = mod.content[locale as 'it' | 'en'] || mod.content.it;
  const courseContent = course.content[locale as 'it' | 'en'] || course.content.it;
  const questions = quiz.questions;
  const totalQuestions = questions.length;

  const startQuiz = () => {
    setQuizState('in-progress');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setHasChecked(false);
    setAnswers(new Array(totalQuestions).fill(null));
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    setHasChecked(true);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setHasChecked(false);
    } else {
      // Calculate results
      const correctCount = answers.reduce<number>((acc, answer, idx) => {
        return acc + (answer !== null && answer === questions[idx].correctAnswer ? 1 : 0);
      }, 0);
      const score = Math.round((correctCount / totalQuestions) * 100);
      const passed = score >= quiz.passingScore;

      saveQuizResult({
        moduleId,
        score,
        passed,
        completedAt: new Date().toISOString(),
      });

      setQuizState('results');
    }
  };

  const currentQ = questions[currentQuestion];
  const currentQContent = currentQ
    ? currentQ.content[locale as 'it' | 'en'] || currentQ.content.it
    : null;

  const correctCount = answers.reduce<number>((acc, answer, idx) => {
    return acc + (answer !== null && answer === questions[idx].correctAnswer ? 1 : 0);
  }, 0);
  const finalScore = Math.round((correctCount / totalQuestions) * 100);
  const passed = finalScore >= quiz.passingScore;

  return (
    <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-10 flex-wrap">
            <Link
              href="/learn"
              className="hover:text-slate-900 transition-colors"
            >
              Academy
            </Link>
            <span>/</span>
            <Link
              href={`/learn/${course.slug}`}
              className="hover:text-slate-900 transition-colors"
            >
              {courseContent.title}
            </Link>
            <span>/</span>
            <Link
              href={`/learn/${course.slug}/${mod.slug}`}
              className="hover:text-slate-900 transition-colors"
            >
              {modContent.title}
            </Link>
          </div>

          {/* ── INTRO STATE ────────────────────────────────────── */}
          {quizState === 'intro' && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 mb-8">
                <HelpCircle className="w-10 h-10 text-blue-600" />
              </div>

              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {t('learn.module')} {mod.number}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                {quizContent.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto">
                {quizContent.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="rounded-xl bg-slate-100 px-5 py-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">
                    {totalQuestions}
                  </span>{' '}
                  {t('learn.quiz.question').toLowerCase()}
                  {totalQuestions > 1 ? 'e' : 'a'}
                </div>
                <div className="rounded-xl bg-slate-100 px-5 py-3 text-sm text-slate-600">
                  {t('learn.quiz.score')} minimo:{' '}
                  <span className="font-semibold text-slate-900">
                    {quiz.passingScore}%
                  </span>
                </div>
              </div>

              {previousResult && (
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                    previousResult.passed
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {previousResult.passed ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <XCircle className="w-4 h-4" />
                  )}
                  {t('learn.quiz.score')}: {previousResult.score}%
                </div>
              )}

              <div>
                <button
                  onClick={startQuiz}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
                >
                  <HelpCircle className="w-4 h-4" />
                  {previousResult
                    ? t('learn.quiz.retry')
                    : t('learn.quiz.start')}
                </button>
              </div>
            </div>
          )}

          {/* ── IN-PROGRESS STATE ──────────────────────────────── */}
          {quizState === 'in-progress' && currentQContent && (
            <div>
              {/* Progress bar */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-500">
                    {t('learn.quiz.question')} {currentQuestion + 1}{' '}
                    {t('learn.quiz.of')} {totalQuestions}
                  </span>
                  <span className="text-sm text-slate-400">
                    {Math.round(
                      ((currentQuestion + (hasChecked ? 1 : 0)) /
                        totalQuestions) *
                        100
                    )}
                    %
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${((currentQuestion + (hasChecked ? 1 : 0)) / totalQuestions) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-sm mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-8">
                  {currentQContent.question}
                </h2>

                <div className="space-y-3">
                  {currentQContent.options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === currentQ.correctAnswer;
                    const showCorrect = hasChecked && isCorrect;
                    const showIncorrect =
                      hasChecked && isSelected && !isCorrect;

                    return (
                      <button
                        key={idx}
                        onClick={() => !hasChecked && setSelectedAnswer(idx)}
                        disabled={hasChecked}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                          showCorrect
                            ? 'border-emerald-400 bg-emerald-50 text-slate-900'
                            : showIncorrect
                              ? 'border-red-400 bg-red-50 text-slate-900'
                              : isSelected
                                ? 'border-blue-400 bg-blue-50 text-slate-900'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                        } ${hasChecked ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              showCorrect
                                ? 'bg-emerald-500 text-white'
                                : showIncorrect
                                  ? 'bg-red-500 text-white'
                                  : isSelected
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {showCorrect ? (
                              <CheckCircle2 className="w-4 h-4" />
                            ) : showIncorrect ? (
                              <XCircle className="w-4 h-4" />
                            ) : (
                              String.fromCharCode(65 + idx)
                            )}
                          </div>
                          <span className="text-[15px] leading-relaxed pt-0.5">
                            {option}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation */}
              {hasChecked && (
                <div
                  className={`rounded-2xl border p-6 mb-8 ${
                    selectedAnswer === currentQ.correctAnswer
                      ? 'border-emerald-200 bg-emerald-50/50'
                      : 'border-amber-200 bg-amber-50/50'
                  }`}
                >
                  <p
                    className={`font-semibold text-sm mb-2 ${
                      selectedAnswer === currentQ.correctAnswer
                        ? 'text-emerald-700'
                        : 'text-amber-700'
                    }`}
                  >
                    {selectedAnswer === currentQ.correctAnswer
                      ? t('learn.quiz.correct')
                      : t('learn.quiz.incorrect')}
                  </p>
                  <p className="text-slate-700 text-[15px] leading-relaxed">
                    {currentQContent.explanation}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-between items-center">
                <div />
                {!hasChecked ? (
                  <button
                    onClick={checkAnswer}
                    disabled={selectedAnswer === null}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                      selectedAnswer === null
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {t('learn.quiz.check')}
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
                  >
                    {currentQuestion < totalQuestions - 1
                      ? t('learn.quiz.next')
                      : t('learn.quiz.seeResults')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ── RESULTS STATE ──────────────────────────────────── */}
          {quizState === 'results' && (
            <div className="text-center">
              <div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 ${
                  passed ? 'bg-emerald-50' : 'bg-amber-50'
                }`}
              >
                {passed ? (
                  <Trophy className="w-12 h-12 text-emerald-500" />
                ) : (
                  <RotateCcw className="w-12 h-12 text-amber-500" />
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {passed
                  ? t('learn.quiz.passed')
                  : t('learn.quiz.failed')}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto">
                {passed
                  ? t('learn.quiz.passedDescription')
                  : t('learn.quiz.failedDescription')}
              </p>

              {/* Score display */}
              <div className="inline-flex flex-col items-center rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 mb-10 shadow-sm">
                <div className="relative w-32 h-32 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke={passed ? '#10b981' : '#f59e0b'}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(finalScore / 100) * 327} 327`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-slate-900">
                      {finalScore}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  {correctCount}/{totalQuestions}{' '}
                  {locale === 'it' ? 'risposte corrette' : 'correct answers'}
                </p>
              </div>

              {/* Question breakdown */}
              <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 mb-10 shadow-sm text-left">
                <div className="space-y-3">
                  {questions.map((q, idx) => {
                    const qContent =
                      q.content[locale as 'it' | 'en'] || q.content.it;
                    const isCorrect = answers[idx] === q.correctAnswer;
                    return (
                      <div
                        key={q.id}
                        className="flex items-start gap-3 p-3 rounded-xl"
                      >
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                            isCorrect ? 'bg-emerald-100' : 'bg-red-100'
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5 text-red-500" />
                          )}
                        </div>
                        <span className="text-sm text-slate-700 leading-relaxed">
                          {qContent.question}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {!passed && (
                  <button
                    onClick={startQuiz}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {t('learn.quiz.retry')}
                  </button>
                )}
                <Link
                  href={`/learn/${courseSlug}/${moduleSlug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t('learn.quiz.backToModule')}
                </Link>
                {passed && nextModule && (
                  <Link
                    href={`/learn/${courseSlug}/${nextModule.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
                  >
                    {t('learn.quiz.nextModule')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </DotBoard>
  );
}
