import { Course, CourseModule, CourseLesson } from '@/types/course';
import { module01 } from './module-01';
import { module02 } from './module-02';
import { module03 } from './module-03';
import { module04 } from './module-04';
import { module05 } from './module-05';
import { module06 } from './module-06';
import { aiModule01 } from './ai-module-01';
import { aiModule02 } from './ai-module-02';
import { aiModule03 } from './ai-module-03';
import { aiModule04 } from './ai-module-04';
import { aiModule05 } from './ai-module-05';
import { aiModule06 } from './ai-module-06';

// ── Active Courses ──────────────────────────────────────────

export const fondamentiCourse: Course = {
  slug: 'fondamenti',
  color: 'blue',
  iconName: 'BookOpen',
  status: 'active',
  content: {
    it: {
      title: 'Fondamenti',
      description: 'Design speculativo, civic tech, knowledge mapping e tecnologie responsabili.',
      longDescription: 'Un percorso in 6 moduli e 18 lezioni per esplorare i pilastri di Relatronica: dal pensiero sul futuro allo speculative design, dalla civic tech al knowledge mapping, fino alle tecnologie responsabili e all\'azione concreta. Gratuito, aperto e bilingue.',
    },
    en: {
      title: 'Foundations',
      description: 'Speculative design, civic tech, knowledge mapping and responsible technologies.',
      longDescription: 'A path in 6 modules and 18 lessons to explore Relatronica\'s pillars: from futures thinking to speculative design, from civic tech to knowledge mapping, to responsible technologies and concrete action. Free, open and bilingual.',
    },
  },
  modules: [module01, module02, module03, module04, module05, module06],
};

// ── Coming Soon Courses ─────────────────────────────────────

export const aiSocietaCourse: Course = {
  slug: 'ai-e-societa',
  color: 'purple',
  iconName: 'Brain',
  status: 'active',
  content: {
    it: {
      title: 'AI & Società',
      description: 'Intelligenza artificiale, etica algoritmica e impatto sociale.',
      longDescription: 'Un percorso in 6 moduli e 18 lezioni per esplorare l\'intelligenza artificiale oltre l\'hype: come funziona davvero, il bias algoritmico e la giustizia, la sorveglianza e il potere, l\'impatto sul lavoro, la regolamentazione e come usare l\'AI per il bene comune. Gratuito, aperto e bilingue.',
    },
    en: {
      title: 'AI & Society',
      description: 'Artificial intelligence, algorithmic ethics and social impact.',
      longDescription: 'A path in 6 modules and 18 lessons to explore artificial intelligence beyond the hype: how it really works, algorithmic bias and justice, surveillance and power, impact on work, regulation, and how to use AI for the common good. Free, open and bilingual.',
    },
  },
  modules: [aiModule01, aiModule02, aiModule03, aiModule04, aiModule05, aiModule06],
};

export const privacyToolkitCourse: Course = {
  slug: 'privacy-toolkit',
  color: 'emerald',
  iconName: 'Lock',
  status: 'coming-soon',
  content: {
    it: {
      title: 'Privacy Toolkit',
      description: 'Guida pratica alla sovranità digitale e alla protezione dei dati.',
      longDescription: 'Strumenti concreti per riprendere il controllo della tua vita digitale: dalla crittografia alla scelta di servizi etici, dalla navigazione sicura alla protezione della tua identità online.',
    },
    en: {
      title: 'Privacy Toolkit',
      description: 'A practical guide to digital sovereignty and data protection.',
      longDescription: 'Concrete tools to take back control of your digital life: from encryption to choosing ethical services, from secure browsing to protecting your online identity.',
    },
  },
  modules: [],
};

export const designFictionLabCourse: Course = {
  slug: 'design-fiction-lab',
  color: 'orange',
  iconName: 'Wand2',
  status: 'coming-soon',
  content: {
    it: {
      title: 'Design Fiction Lab',
      description: 'Creare artefatti dal futuro: un laboratorio pratico di speculative design.',
      longDescription: 'Un corso pratico e creativo: impara a costruire prototipi diegetici, cataloghi del futuro e narrative speculative. Dal concept al prototipo, con esercizi guidati e casi studio.',
    },
    en: {
      title: 'Design Fiction Lab',
      description: 'Creating artefacts from the future: a hands-on speculative design lab.',
      longDescription: 'A practical and creative course: learn to build diegetic prototypes, future catalogues and speculative narratives. From concept to prototype, with guided exercises and case studies.',
    },
  },
  modules: [],
};

export const dataLiteracyCourse: Course = {
  slug: 'data-literacy',
  color: 'cyan',
  iconName: 'BarChart3',
  status: 'coming-soon',
  content: {
    it: {
      title: 'Data Literacy',
      description: 'Alfabetizzazione ai dati: leggere grafici, riconoscere manipolazioni e pensare criticamente con i numeri.',
      longDescription: 'Un corso per imparare a leggere e interpretare i dati nel quotidiano: dai grafici sui giornali ai sondaggi elettorali, dalle statistiche sanitarie ai report aziendali. Impara a distinguere correlazione da causalità, a riconoscere le manipolazioni visive e a prendere decisioni informate.',
    },
    en: {
      title: 'Data Literacy',
      description: 'Data literacy: reading charts, recognising manipulations and thinking critically with numbers.',
      longDescription: 'A course to learn how to read and interpret data in everyday life: from newspaper charts to election polls, from health statistics to business reports. Learn to distinguish correlation from causation, recognise visual manipulations and make informed decisions.',
    },
  },
  modules: [],
};

export const openSourceCitizensCourse: Course = {
  slug: 'open-source-per-cittadini',
  color: 'teal',
  iconName: 'Globe',
  status: 'coming-soon',
  content: {
    it: {
      title: 'Open Source per Cittadini',
      description: 'Guida pratica per non-tecnici: scegliere alternative etiche e riprendere il controllo della propria vita digitale.',
      longDescription: 'Un percorso pratico per chiunque voglia usare strumenti digitali che rispettano la privacy e la libertà. Dall\'email alla messaggistica, dal cloud allo storage, scopri alternative open source a ogni servizio che usi quotidianamente — senza bisogno di competenze tecniche.',
    },
    en: {
      title: 'Open Source for Citizens',
      description: 'A practical guide for non-techies: choosing ethical alternatives and taking back control of your digital life.',
      longDescription: 'A practical path for anyone who wants to use digital tools that respect privacy and freedom. From email to messaging, from cloud to storage, discover open source alternatives to every service you use daily — no technical skills required.',
    },
  },
  modules: [],
};

export const generativeAiEthicsCourse: Course = {
  slug: 'etica-ia-generativa',
  color: 'violet',
  iconName: 'Sparkles',
  status: 'coming-soon',
  content: {
    it: {
      title: 'Etica dell\'IA Generativa',
      description: 'LLM, deepfake e creatività artificiale: capire, usare e regolamentare l\'IA generativa.',
      longDescription: 'Un deep-dive nell\'intelligenza artificiale generativa: come funzionano i modelli linguistici e le immagini AI, l\'impatto sul lavoro creativo e il copyright, i rischi di disinformazione con i deepfake, e le sfide normative. Per un uso consapevole e critico degli strumenti che stanno ridefinendo la creatività.',
    },
    en: {
      title: 'Generative AI Ethics',
      description: 'LLMs, deepfakes and artificial creativity: understanding, using and regulating generative AI.',
      longDescription: 'A deep-dive into generative artificial intelligence: how language models and AI images work, the impact on creative work and copyright, disinformation risks from deepfakes, and regulatory challenges. For a conscious and critical use of the tools redefining creativity.',
    },
  },
  modules: [],
};

// ── All Courses ─────────────────────────────────────────────

export const allCourses: Course[] = [
  fondamentiCourse,
  aiSocietaCourse,
  privacyToolkitCourse,
  designFictionLabCourse,
  dataLiteracyCourse,
  openSourceCitizensCourse,
  generativeAiEthicsCourse,
];

export const activeCourses: Course[] = allCourses.filter((c) => c.status === 'active');
export const comingSoonCourses: Course[] = allCourses.filter((c) => c.status === 'coming-soon');

// ── Helpers ─────────────────────────────────────────────────

export function getCourse(slug: string): Course | undefined {
  return allCourses.find((c) => c.slug === slug);
}

export function getModule(courseSlug: string, moduleSlug: string): { course: Course; module: CourseModule } | undefined {
  const course = getCourse(courseSlug);
  if (!course) return undefined;
  const mod = course.modules.find((m) => m.slug === moduleSlug);
  if (!mod) return undefined;
  return { course, module: mod };
}

export function getLesson(courseSlug: string, moduleSlug: string, lessonSlug: string): { course: Course; module: CourseModule; lesson: CourseLesson } | undefined {
  const result = getModule(courseSlug, moduleSlug);
  if (!result) return undefined;
  const lesson = result.module.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;
  return { course: result.course, module: result.module, lesson };
}

export function getAdjacentLessons(courseSlug: string, moduleSlug: string, lessonSlug: string): {
  prev: { moduleSlug: string; lessonSlug: string; title: Record<string, string> } | null;
  next: { moduleSlug: string; lessonSlug: string; title: Record<string, string> } | null;
} {
  const course = getCourse(courseSlug);
  if (!course) return { prev: null, next: null };

  const allLessons: { moduleSlug: string; lessonSlug: string; title: Record<string, string> }[] = [];
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      allLessons.push({
        moduleSlug: mod.slug,
        lessonSlug: lesson.slug,
        title: { it: lesson.content.it.title, en: lesson.content.en.title },
      });
    }
  }

  const currentIndex = allLessons.findIndex(
    (l) => l.moduleSlug === moduleSlug && l.lessonSlug === lessonSlug
  );

  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  };
}

export function getCourseTotalLessons(course: Course): number {
  return course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
}

export function getCourseReadingTime(course: Course): number {
  return course.modules.reduce(
    (acc, mod) => acc + mod.lessons.reduce((a, l) => a + l.readingTime, 0),
    0
  );
}

export function getAcademyTotalLessons(): number {
  return activeCourses.reduce((acc, c) => acc + getCourseTotalLessons(c), 0);
}

export function getModuleQuiz(courseSlug: string, moduleSlug: string) {
  const result = getModule(courseSlug, moduleSlug);
  if (!result || !result.module.quiz) return undefined;
  return { course: result.course, module: result.module, quiz: result.module.quiz };
}
