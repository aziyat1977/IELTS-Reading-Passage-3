
export type AppMode = 'student' | 'teacher' | 'kahoot';
export type Language = 'en' | 'ru' | 'uz';

export interface VocabularyWord {
  word: string;
  ru: string;
  uz: string;
  definition: string;
}

export interface ParaphraseItem {
  original: string;
  paraphrase: string;
  type: 'vocabulary' | 'grammar';
  explanation: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Question {
  id: number;
  text: string;
  answer: 'YES' | 'NO' | 'NOT GIVEN';
  explanation: string;
}

export interface Passage {
  id: number;
  title: string;
  translations: {
    ru: string;
    uz: string;
  };
  headline: string;
  content: string;
  vocabulary: VocabularyWord[];
  paraphrases: ParaphraseItem[];
  paraphraseQuizzes: QuizQuestion[];
  questions: Question[];
}
