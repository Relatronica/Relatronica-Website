export type Locale = 'it' | 'en';

export interface CourseResource {
  title: string;
  url: string;
  type: 'article' | 'book' | 'video' | 'tool';
}

export interface LessonContent {
  title: string;
  description: string;
  body: string[];
  keyTakeaways: string[];
  reflection: string;
}

export interface CourseLesson {
  slug: string;
  readingTime: number;
  content: Record<Locale, LessonContent>;
  resources: CourseResource[];
}

export interface ModuleContent {
  title: string;
  description: string;
}

export interface CourseModule {
  slug: string;
  number: string;
  color: string;
  iconName: string;
  content: Record<Locale, ModuleContent>;
  lessons: CourseLesson[];
  quiz?: ModuleQuiz;
}

export interface CourseContent {
  title: string;
  description: string;
  longDescription: string;
}

export interface Course {
  slug: string;
  color: string;
  iconName: string;
  status: 'active' | 'coming-soon';
  content: Record<Locale, CourseContent>;
  modules: CourseModule[];
}

// ── Quiz Types ──────────────────────────────────────────────

export interface QuizQuestionContent {
  question: string;
  options: string[];
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  content: Record<Locale, QuizQuestionContent>;
  correctAnswer: number; // index of correct option
}

export interface ModuleQuiz {
  content: Record<Locale, { title: string; description: string }>;
  questions: QuizQuestion[];
  passingScore: number; // percentage (e.g. 70)
}

// ── Progress Types ──────────────────────────────────────────

export interface QuizResult {
  moduleId: string; // format: "courseSlug/moduleSlug"
  score: number;
  passed: boolean;
  completedAt: string;
}

export interface CourseProgress {
  completedLessons: string[]; // format: "courseSlug/moduleSlug/lessonSlug"
  completedQuizzes: QuizResult[];
  lastAccessed?: string;
}
