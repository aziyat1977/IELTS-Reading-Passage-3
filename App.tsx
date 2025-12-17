
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Sun, Moon, GraduationCap, Users, Play, ChevronRight, ChevronDown,
  Eye, EyeOff, BookOpen, Globe, Award, Info, CheckCircle, ArrowLeft, ArrowRight,
  Search, MessageSquare, Quote, Layers, Zap, Trophy, Brain
} from 'lucide-react';
import { PASSAGES } from './data';
import { AppMode, Language, Passage, VocabularyWord, ParaphraseItem, QuizQuestion } from './types';

// --- Shared Components ---

const ThemeToggle = ({ theme, setTheme }: { theme: 'dark' | 'light', setTheme: (t: 'dark' | 'light') => void }) => (
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 group"
  >
    {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" /> : <Moon className="w-5 h-5 text-slate-600 group-hover:-rotate-12 transition-transform" />}
  </button>
);

const Sidebar = ({ 
  isOpen, 
  setIsOpen, 
  mode, 
  setMode 
}: { 
  isOpen: boolean; 
  setIsOpen: (o: boolean) => void;
  mode: AppMode;
  setMode: (m: AppMode) => void;
}) => {
  const [isYNNGExpanded, setIsYNNGExpanded] = useState(true);
  const { id: activeId } = useParams();
  const [searchParams] = useSearchParams();
  const activeStep = parseInt(searchParams.get('step') || '0');

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', opacity: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  const steps = [
    { label: 'Strategy', icon: <Info className="w-3 h-3" /> },
    { label: 'Vocabulary', icon: <BookOpen className="w-3 h-3" /> },
    { label: 'Practice', icon: <GraduationCap className="w-3 h-3" /> },
    { label: 'Logic', icon: <Layers className="w-3 h-3" /> },
    { label: 'Quiz', icon: <Play className="w-3 h-3" /> },
    { label: 'Reading', icon: <Globe className="w-3 h-3" /> },
    { label: 'Analysis', icon: <Search className="w-3 h-3" /> },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl z-50 p-6 flex flex-col overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-black tracking-tighter dark:text-white flex items-center gap-2">
            <Award className="text-indigo-600" /> IELTS MASTER
          </Link>
          <button onClick={() => setIsOpen(false)} className="dark:text-white p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-6">
          {/* Section: Y/N/NG */}
          <div className="space-y-2">
            <button 
              onClick={() => setIsYNNGExpanded(!isYNNGExpanded)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-indigo-500" />
                <span className="font-black text-xs uppercase tracking-widest dark:text-white">Y / N / NG</span>
              </div>
              {isYNNGExpanded ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
            </button>

            <AnimatePresence initial={false}>
              {isYNNGExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden space-y-1 pl-2"
                >
                  {PASSAGES.map((p) => {
                    const isActive = activeId === p.id.toString();
                    return (
                      <div key={p.id} className="space-y-1">
                        <Link
                          to={`/module/${p.id}?step=0`}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all ${
                            isActive 
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-slate-300 dark:bg-slate-700'}`} />
                          {p.title}
                        </Link>
                        
                        {isActive && (
                          <div className="pl-6 space-y-1 py-1 border-l-2 border-indigo-100 dark:border-slate-800 ml-4">
                            {steps.map((s, idx) => (
                              <Link
                                key={idx}
                                to={`/module/${p.id}?step=${idx}`}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-2 py-2 px-3 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all ${
                                  activeStep === idx 
                                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' 
                                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                                }`}
                              >
                                {s.icon}
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3">System Modes</p>
             <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'student', icon: <GraduationCap className="w-4 h-4" />, label: 'Student' },
                  { id: 'teacher', icon: <Users className="w-4 h-4" />, label: 'Teacher' },
                  { id: 'kahoot', icon: <Play className="w-4 h-4" />, label: 'Kahoot' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id as AppMode)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                      mode === m.id 
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' 
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {m.icon} {m.label}
                  </button>
                ))}
             </div>
          </div>
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
          <p className="text-[10px] text-slate-400 text-center font-bold">IELTS ACADEMIC V2.5.0</p>
        </div>
      </motion.aside>
    </>
  );
};

// --- Wizard Pages ---

const StrategyPage = ({ onNext }: { onNext: () => void }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
    <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
      <h2 className="serif text-4xl font-bold dark:text-white mb-6">How to Solve: YES / NO / NOT GIVEN</h2>
      <div className="space-y-6 text-lg leading-relaxed dark:text-slate-300">
        <div className="flex gap-4">
          <div className="shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center rounded-xl font-bold">YES</div>
          <div>
            <p className="font-bold dark:text-white">Agrees with the writer's views</p>
            <p className="text-sm opacity-80">The statement matches what is in the text. Look for synonyms and paraphrasing.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/30 text-rose-600 flex items-center justify-center rounded-xl font-bold">NO</div>
          <div>
            <p className="font-bold dark:text-white">Contradicts the writer's views</p>
            <p className="text-sm opacity-80">The statement says the opposite of the text. It's a direct conflict.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center rounded-xl font-bold">NG</div>
          <div>
            <p className="font-bold dark:text-white">Not Given</p>
            <p className="text-sm opacity-80">The text doesn't mention the information, or doesn't mention the writer's opinion on that specific detail.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <button onClick={onNext} className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
        Start Pre-Teaching <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </motion.div>
);

const VocabularyPrePage = ({ words, onNext }: { words: VocabularyWord[], onNext: () => void }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl mx-auto space-y-8">
    <div className="text-center mb-10">
      <h2 className="serif text-4xl font-bold dark:text-white">Pre-taught Vocabulary</h2>
      <p className="text-slate-500 mt-2">Essential terms for the upcoming passage.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {words.map((w, idx) => (
        <motion.div 
          key={w.word}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col"
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-indigo-600">{w.word}</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">{w.definition}</p>
          <div className="flex gap-4 border-t border-slate-50 dark:border-slate-800 pt-3 mt-auto">
            <div className="flex-1">
              <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Русский</p>
              <p className="dark:text-white text-sm font-semibold">{w.ru}</p>
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">O'zbekcha</p>
              <p className="dark:text-white text-sm font-semibold">{w.uz}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="flex justify-end">
      <button onClick={onNext} className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
        Practice Vocabulary <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </motion.div>
);

const VocabularyPracticePage = ({ words, onNext }: { words: VocabularyWord[], onNext: () => void }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, boolean>>({});
  const shuffledDefs = useMemo(() => [...words].sort(() => Math.random() - 0.5), [words]);

  const handleMatch = (defWord: string) => {
    if (!selectedWord) return;
    if (selectedWord === defWord) {
      setMatches(prev => ({ ...prev, [defWord]: true }));
      setSelectedWord(null);
    } else {
      setSelectedWord(null);
    }
  };

  const isComplete = Object.keys(matches).length === words.length;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="serif text-4xl font-bold dark:text-white mb-2">Word Association</h2>
        <p className="text-slate-500">Match the word to its definition to proceed.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Words</p>
          {words.map(w => (
            <button
              key={w.word}
              disabled={matches[w.word]}
              onClick={() => setSelectedWord(w.word)}
              className={`w-full text-left p-4 rounded-xl font-bold transition-all border-2 ${
                matches[w.word] ? 'bg-emerald-50 border-emerald-500 text-emerald-700 opacity-60' :
                selectedWord === w.word ? 'bg-indigo-600 border-indigo-600 text-white scale-105 shadow-lg' :
                'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 dark:text-white hover:border-indigo-400'
              }`}
            >
              {w.word}
              {matches[w.word] && <CheckCircle className="w-4 h-4 float-right" />}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Definitions</p>
          {shuffledDefs.map(w => (
            <button
              key={w.word}
              disabled={matches[w.word]}
              onClick={() => handleMatch(w.word)}
              className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                matches[w.word] ? 'bg-emerald-50 border-emerald-500 text-emerald-700 opacity-60' :
                'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 dark:text-slate-400 hover:border-indigo-400'
              }`}
            >
              {w.definition}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button disabled={!isComplete} onClick={onNext} className={`px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all ${isComplete ? 'bg-indigo-600 text-white hover:scale-105 shadow-lg' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}>
          Go to Paraphrasing <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const ParaphraseTeachPage = ({ items, onNext }: { items: ParaphraseItem[], onNext: () => void }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-12">
    <div className="text-center">
      <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6">
        <Layers className="w-10 h-10 text-amber-600" />
      </div>
      <h2 className="serif text-4xl font-bold dark:text-white mb-2">The Art of Paraphrasing</h2>
      <p className="text-slate-500">Learn how the passage text maps to the actual questions.</p>
    </div>

    <div className="grid gap-6">
      {items.map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col md:flex-row gap-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-bl-xl text-[10px] font-black uppercase tracking-widest text-slate-400">
            {item.type}
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">In the Passage</p>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl italic font-serif text-xl border-l-4 border-indigo-500">
              "{item.original}"
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Zap className="w-6 h-6 text-amber-500 animate-pulse" />
          </div>
          <div className="flex-1 space-y-4 text-right md:text-left">
            <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">In the Question</p>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl italic font-serif text-xl border-l-4 border-emerald-500">
              "{item.paraphrase}"
            </div>
          </div>
          <div className="md:col-span-3 pt-4 border-t border-slate-50 dark:border-slate-800">
             <p className="text-sm text-slate-500 leading-relaxed"><span className="font-bold text-slate-700 dark:text-slate-300">Strategy:</span> {item.explanation}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="flex justify-end">
      <button onClick={onNext} className="bg-indigo-600 text-white px-10 py-5 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-indigo-500/20">
        Launch Kahoot Quiz <Play className="w-5 h-5 fill-current" />
      </button>
    </div>
  </motion.div>
);

const KahootQuizPage = ({ quizzes, onNext }: { quizzes: QuizQuestion[], onNext: () => void }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    if (option === quizzes[currentIdx].correctAnswer) setScore(s => s + 100);
  };

  const nextQuestion = () => {
    if (currentIdx < quizzes.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
    } else {
      onNext();
    }
  };

  const quiz = quizzes[currentIdx];
  const colors = ["bg-rose-500", "bg-indigo-500", "bg-amber-500", "bg-emerald-500"];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto space-y-12 pb-20">
       <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black">
                {currentIdx + 1}
             </div>
             <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Question</p>
                <p className="font-bold dark:text-white">Paraphrase Check</p>
             </div>
          </div>
          <div className="text-right">
             <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Points</p>
             <p className="font-black text-2xl text-amber-500">{score}</p>
          </div>
       </div>

       <div className="text-center py-12">
          <h2 className="serif text-4xl md:text-5xl font-bold dark:text-white mb-8">{quiz.question}</h2>
          <div className="grid md:grid-cols-2 gap-4">
             {quiz.options.map((opt, i) => (
               <button
                key={i}
                disabled={!!selectedOption}
                onClick={() => handleOptionClick(opt)}
                className={`p-10 rounded-3xl text-white font-black text-2xl transition-all active:scale-95 flex items-center justify-center text-center shadow-lg relative overflow-hidden ${
                  selectedOption ? (opt === quiz.correctAnswer ? "bg-emerald-500 scale-105" : (opt === selectedOption ? "bg-rose-500 opacity-50" : "bg-slate-300 opacity-20")) : colors[i % 4]
                }`}
               >
                 {opt}
                 {selectedOption && opt === quiz.correctAnswer && <CheckCircle className="w-8 h-8 absolute right-4 bottom-4" />}
               </button>
             ))}
          </div>
       </div>

       <AnimatePresence>
          {selectedOption && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
               <button onClick={nextQuestion} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-5 rounded-full font-black flex items-center gap-3 hover:scale-110 transition-all shadow-2xl">
                  {currentIdx < quizzes.length - 1 ? "Next Question" : "Start Reading"} <ArrowRight className="w-6 h-6" />
               </button>
            </motion.div>
          )}
       </AnimatePresence>
    </motion.div>
  );
};

const ReadingPage = ({ passage, mode, onNext }: { passage: Passage, mode: AppMode, onNext: () => void }) => {
  const [showAnswers, setShowAnswers] = useState(mode === 'teacher');
  useEffect(() => setShowAnswers(mode === 'teacher'), [mode]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12 pb-20">
      <div className={`p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 ${mode === 'kahoot' ? 'text-2xl font-medium' : ''}`}>
        <div className="flex justify-between items-start mb-6">
          <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase">{passage.title}</span>
          <button onClick={() => setShowAnswers(!showAnswers)} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-bold dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {showAnswers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAnswers ? 'Hide Answers' : 'Show Answers'}
          </button>
        </div>
        <h2 className="serif text-3xl md:text-5xl font-bold dark:text-white mb-8 leading-tight">{passage.headline}</h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="leading-relaxed text-slate-700 dark:text-slate-300 text-lg md:text-xl">{passage.content}</p>
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-bold dark:text-white flex items-center gap-3"><span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">?</span>Assessment</h3>
        <div className="grid gap-6">
          {passage.questions.map((q, idx) => (
            <div key={q.id} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1"><span className="text-indigo-600 font-bold mr-3 text-lg">{q.id}.</span><span className="dark:text-white font-medium text-lg">{q.text}</span></div>
              <AnimatePresence>
                {showAnswers && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-end gap-2 shrink-0">
                    <span className={`px-5 py-2 rounded-xl font-black text-sm tracking-widest shadow-sm ${q.answer === 'YES' ? 'bg-emerald-100 text-emerald-700' : q.answer === 'NO' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>{q.answer}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end pt-10"><button onClick={onNext} className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">Analyze Answers <ArrowRight className="w-5 h-5" /></button></div>
    </motion.div>
  );
};

const ExplanationPage = ({ passage }: { passage: Passage }) => (
  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto space-y-12 pb-20">
    <div className="text-center mb-10">
      <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6"><Search className="w-8 h-8 text-indigo-600" /></div>
      <h2 className="serif text-4xl font-bold dark:text-white mb-2">Answer Breakdown</h2>
      <p className="text-slate-500">The most effective, ultra-detailed logical proof for every answer.</p>
    </div>
    <div className="space-y-16">
      {passage.questions.map((q, idx) => (
        <motion.div key={q.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl font-black text-xs tracking-widest bg-indigo-600 text-white shadow-lg">{q.answer}</div>
          <div className="space-y-8">
            <div className="flex gap-5"><span className="shrink-0 w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-500/30">{q.id}</span><h4 className="text-xl md:text-2xl font-bold dark:text-white leading-tight">{q.text}</h4></div>
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Step-by-Step Proof</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4"><span className={`px-4 py-1 rounded-lg text-xs font-black tracking-widest ${q.answer === 'YES' ? 'bg-emerald-100 text-emerald-700' : q.answer === 'NO' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>{q.answer}</span><div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" /></div>
                <div className="bg-slate-50 dark:bg-slate-800/30 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative group"><Quote className="absolute -top-3 -left-3 w-8 h-8 text-indigo-500/20" /><p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{q.explanation}</p></div>
                <div className="flex items-center gap-4 pt-2"><div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" /><span className={`px-8 py-3 rounded-2xl text-lg font-black tracking-widest shadow-xl ring-4 ring-white dark:ring-slate-900 ${q.answer === 'YES' ? 'bg-emerald-600 text-white' : q.answer === 'NO' ? 'bg-rose-600 text-white' : 'bg-amber-600 text-white'}`}>{q.answer}</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// --- Main Module Flow Wrapper ---

const ModuleFlow = ({ mode }: { mode: AppMode }) => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const step = parseInt(searchParams.get('step') || '0');
  
  const passage = useMemo(() => PASSAGES.find(p => p.id === parseInt(id || '1')), [id]);

  if (!passage) return <div>Passage not found</div>;

  const setStep = (s: number) => {
    setSearchParams({ step: s.toString() });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        {step === 0 && <StrategyPage onNext={() => setStep(1)} />}
        {step === 1 && <VocabularyPrePage words={passage.vocabulary} onNext={() => setStep(2)} />}
        {step === 2 && <VocabularyPracticePage words={passage.vocabulary} onNext={() => setStep(3)} />}
        {step === 3 && <ParaphraseTeachPage items={passage.paraphrases} onNext={() => setStep(4)} />}
        {step === 4 && <KahootQuizPage quizzes={passage.paraphraseQuizzes} onNext={() => setStep(5)} />}
        {step === 5 && <ReadingPage passage={passage} mode={mode} onNext={() => setStep(6)} />}
        {step === 6 && <ExplanationPage passage={passage} />}
      </AnimatePresence>
    </div>
  );
};

// --- Page Views ---

const LandingPage = () => (
  <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
    <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full text-indigo-600 dark:text-indigo-400 text-xs font-black tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800"><Award className="w-4 h-4" /> THE ACADEMIC EDGE</div>
      <h1 className="serif text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">High Performance <br/> Reading Mastery.</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">A premium ecosystem designed to bridge the gap between intermediate learning and academic excellence. Open the menu to explore the modules.</p>
    </motion.div>
  </div >
);

const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mode, setMode] = useState<AppMode>('student');

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button onClick={() => setIsSidebarOpen(true)} className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all active:scale-90 group">
                <Menu className="w-6 h-6 dark:text-white group-hover:rotate-90 transition-transform" />
              </button>
              <Link to="/" className="hidden md:flex items-center gap-2 group"><div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold group-hover:rotate-6 transition-transform shadow-lg shadow-indigo-500/30">IM</div><span className="font-black text-xl tracking-tighter dark:text-white">IELTS MASTER</span></Link>
            </div>
            <div className="flex items-center gap-3"><span className="hidden md:block text-[10px] font-black text-indigo-500 uppercase tracking-widest">{mode}</span><ThemeToggle theme={theme} setTheme={setTheme} /></div>
          </div>
        </header>

        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          mode={mode} 
          setMode={setMode} 
        />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/module/:id" element={<ModuleFlow mode={mode} />} />
          </Routes>
        </main>

        <footer className="mt-20 py-16 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <div className="flex justify-center gap-12 mb-8 opacity-20">
                <BookOpen className="w-6 h-6 text-slate-400" />
                <Globe className="w-6 h-6 text-slate-400" />
                <GraduationCap className="w-6 h-6 text-slate-400" />
             </div>
             <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Premium Academic Training Ecosystem</p>
             <p className="text-slate-300 dark:text-slate-600 text-[10px] mt-4">© 2025 IELTS MASTER. Built for excellence.</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
