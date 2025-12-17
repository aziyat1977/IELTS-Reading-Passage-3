
export type AppMode = 'student' | 'teacher' | 'kahoot';
export type Language = 'en' | 'ru' | 'uz';

export interface VocabularyItem {
  word: string;
  definition: string;
  ru?: string;
  uz?: string;
  quiz: {
    question: string;
    answer: string;
    options: string[];
  };
}

export interface GrammarQuiz {
  original: string;
  transform: string;
  answer: string;
}

export interface GrammarSection {
  topic: string;
  explanation: string;
  quiz: GrammarQuiz[];
}

export interface Question {
  id: number;
  type: 'TFNG' | 'YNNG' | 'MCQ' | 'GAP_FILL' | 'SHORT_ANSWER' | 'MATCHING_HEADINGS' | 'FLOW_CHART';
  text: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  limit?: string;
}

export interface Passage {
  id: string;
  title: string;
  translations?: { ru: string; uz: string };
  headline: string;
  content: string;
  questions: Question[];
}

export interface ReadingModule {
  id: string;
  category: 'skill-training' | 'full-test';
  moduleTitle: string;
  vocabSection: VocabularyItem[];
  grammarSection: GrammarSection;
  testData: {
    timerSeconds: number;
    passages: Passage[];
  };
}
