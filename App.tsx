
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Sun, Moon, GraduationCap, Play, ChevronRight, BookOpen, 
  Award, Info, CheckCircle, ArrowLeft, ArrowRight, Search, Quote, 
  Layers, Clock, Eye, Send, BarChart3, Settings
} from 'lucide-react';
import { ACADEMIC_MODULES } from './data';
import { AppMode, VocabularyItem, Question, Passage, ReadingModule } from './types';

// --- Components ---

const ThemeToggle = ({ theme, setTheme }: { theme: 'dark' | 'light', setTheme: (t: 'dark' | 'light') => void }) => (
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
  >
    {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
  </button>
);

const Sidebar = ({ isOpen, setIsOpen, mode, setMode }: { isOpen: boolean; setIsOpen: (o: boolean) => void; mode: AppMode; setMode: (m: AppMode) => void; }) => (
  <>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
      )}
    </AnimatePresence>
    <motion.aside initial={{ x: '-100%' }} animate={{ x: isOpen ? 0 : '-100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl z-50 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-black tracking-tighter dark:text-white flex items-center gap-2">
          <Award className="text-indigo-600" /> IELTS MASTER
        </Link>
        <button onClick={() => setIsOpen(false)} className="dark:text-white"><X /></button>
      </div>
      <nav className="flex-1 space-y-2">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-4">Reading Library</p>
        {ACADEMIC_MODULES.map(module => (
          <Link key={module.id} to={`/module/${module.id}/dashboard`} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-4 rounded-xl text-sm font-bold bg-slate-50 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-slate-700 dark:text-slate-200 transition-all border border-transparent hover:border-indigo-200">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            {module.moduleTitle}
          </Link>
        ))}
      </nav>
      <div className="pt-6 border-t dark:border-slate-800 space-y-4">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3">Settings</p>
        <div className="grid grid-cols-3 gap-2">
          {['student', 'teacher', 'kahoot'].map(m => (
            <button key={m} onClick={() => setMode(m as AppMode)} className={`p-2 rounded-lg text-[10px] font-bold uppercase ${mode === m ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
              {m}
            </button>
          ))}
        </div>
      </div>
    </motion.aside>
  </>
);

// --- Module View Layers ---

const ReadingDashboard = ({ module }: { module: ReadingModule }) => {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto py-10 px-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-xl border border-slate-100 dark:border-slate-800 mb-10">
        <h1 className="serif text-5xl font-bold dark:text-white mb-4">{module.moduleTitle}</h1>
        <p className="text-slate-500 text-lg mb-8">Comprehensive training for IELTS Academic Reading. Complete all sections to unlock the Mock Test.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: 'vocab', label: 'Academic Vocab', icon: <Quote />, desc: `${module.vocabSection.length} Target Words`, color: 'bg-indigo-500' },
            { id: 'grammar', label: 'Grammar Focus', icon: <Layers />, desc: module.grammarSection.topic, color: 'bg-emerald-500' },
            { id: 'test', label: 'Full Mock Test', icon: <Clock />, desc: '3 Passages, 40 Qs', color: 'bg-rose-500' }
          ].map(section => (
            <button key={section.id} onClick={() => navigate(`/module/${module.id}/${section.id}`)} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 text-left hover:scale-[1.02] transition-all group border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900">
              <div className={`w-12 h-12 ${section.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg`}>{section.icon}</div>
              <h3 className="font-bold text-xl dark:text-white group-hover:text-indigo-600">{section.label}</h3>
              <p className="text-slate-400 text-sm mt-1">{section.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const LessonMode = ({ module, type }: { module: ReadingModule, type: 'vocab' | 'grammar' }) => {
  const [step, setStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<null | boolean>(null);

  const data = type === 'vocab' ? module.vocabSection : module.grammarSection.quiz;
  const current = data[step];

  const handleCheck = () => {
    const isCorrect = userAnswer.toLowerCase().trim() === (type === 'vocab' ? (current as VocabularyItem).quiz.answer : (current as any).answer).toLowerCase().trim();
    setFeedback(isCorrect);
  };

  const next = () => {
    if (step < data.length - 1) {
      setStep(step + 1);
      setUserAnswer('');
      setFeedback(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-2xl">
          <div className="flex justify-between items-center mb-10">
            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{type} Lesson • Step {step + 1} of {data.length}</span>
            <div className="w-40 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${((step + 1) / data.length) * 100}%` }} />
            </div>
          </div>

          {type === 'vocab' ? (
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-slate-800 dark:text-white">{(current as VocabularyItem).word}</h2>
                <p className="text-xl text-slate-500 italic mt-2">{(current as VocabularyItem).definition}</p>
              </div>
              <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border-l-4 border-indigo-500">
                <p className="text-lg font-bold dark:text-slate-200">{(current as VocabularyItem).quiz.question}</p>
                <input 
                  type="text" 
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer..."
                  className="w-full mt-6 bg-transparent border-b-2 border-indigo-200 dark:border-indigo-800 py-3 text-2xl font-bold dark:text-white outline-none focus:border-indigo-500 transition-all" 
                />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold dark:text-white">{module.grammarSection.topic}</h2>
                <p className="text-slate-500 mt-2">{module.grammarSection.explanation}</p>
              </div>
              <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border-l-4 border-emerald-500">
                <p className="text-sm text-slate-400 uppercase font-black tracking-widest mb-2">Original</p>
                <p className="text-lg mb-6 dark:text-slate-200">{(current as any).original}</p>
                <p className="text-sm text-slate-400 uppercase font-black tracking-widest mb-2">Academic Transform</p>
                <p className="text-2xl font-bold dark:text-white">{(current as any).transform.replace('____', '______')}</p>
                <input 
                  type="text" 
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="The missing word..."
                  className="w-full mt-6 bg-transparent border-b-2 border-emerald-200 dark:border-emerald-800 py-3 text-2xl font-bold dark:text-white outline-none focus:border-emerald-500 transition-all" 
                />
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-10">
            {feedback !== null && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`font-black uppercase tracking-widest ${feedback ? 'text-emerald-500' : 'text-rose-500'}`}>
                {feedback ? 'Excellent!' : 'Try Again'}
              </motion.span>
            )}
            <div className="ml-auto flex gap-4">
              {feedback === null ? (
                <button onClick={handleCheck} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">Check Answer</button>
              ) : (
                <button onClick={next} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-xl font-bold flex items-center gap-2">Next <ArrowRight className="w-4 h-4" /></button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- Official CD IELTS Test Player ---

const IELTSCDTestPlayer = ({ module }: { module: ReadingModule }) => {
  const [activePassage, setActivePassage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(module.testData.timerSeconds);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const leftPaneRef = useRef<HTMLDivElement>(null);
  const rightPaneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentPassage = module.testData.passages[activePassage];

  return (
    <div className="fixed inset-0 bg-[#F5F5F5] dark:bg-slate-950 flex flex-col z-[60] overflow-hidden text-slate-800 dark:text-slate-200">
      {/* CD Header */}
      <header className="h-14 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <Award className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-sm tracking-tight">IELTS Academic Reading - {module.moduleTitle}</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-rose-600 font-mono font-bold bg-rose-50 dark:bg-rose-900/20 px-4 py-1.5 rounded-lg">
            <Clock className="w-4 h-4" /> {formatTime(timeLeft)}
          </div>
          <button onClick={() => setShowExitConfirm(true)} className="text-slate-400 hover:text-slate-600"><X /></button>
        </div>
      </header>

      {/* Main Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: Passage (Independent Scroll) */}
        <div ref={leftPaneRef} className="w-1/2 overflow-y-auto p-12 border-r dark:border-slate-800 bg-white dark:bg-slate-900">
          <h2 className="serif text-4xl font-bold mb-8 leading-tight">{currentPassage.title}</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {currentPassage.content.split('\n\n').map((para, i) => (
              <p key={i} className="mb-6 leading-relaxed text-slate-700 dark:text-slate-300">{para}</p>
            ))}
          </div>
        </div>

        {/* Right Pane: Questions (Independent Scroll) */}
        <div ref={rightPaneRef} className="w-1/2 overflow-y-auto p-12 bg-[#F9FAFB] dark:bg-slate-950">
          <div className="space-y-12">
            {currentPassage.questions.map((q, idx) => (
              <div key={q.id} className="space-y-4">
                <div className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">{q.id}</span>
                  <p className="text-lg font-medium leading-snug">{q.text}</p>
                </div>
                
                {q.type === 'MCQ' && (
                  <div className="grid grid-cols-1 gap-2 pl-14">
                    {q.options?.map((opt, i) => (
                      <button 
                        key={i} 
                        onClick={() => setAnswers({...answers, [q.id]: String.fromCharCode(65+i)})}
                        className={`p-4 rounded-xl border text-left flex items-center gap-4 transition-all ${answers[q.id] === String.fromCharCode(65+i) ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 dark:text-white hover:border-indigo-400'}`}
                      >
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${answers[q.id] === String.fromCharCode(65+i) ? 'bg-indigo-500' : 'bg-slate-100 dark:bg-slate-800'}`}>{String.fromCharCode(65+i)}</span>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {(q.type === 'GAP_FILL' || q.type === 'SHORT_ANSWER') && (
                  <div className="pl-14">
                    <input 
                      type="text" 
                      value={answers[q.id] || ''}
                      onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                      placeholder="Type your answer..."
                    />
                    {q.limit && <p className="text-[10px] text-slate-400 mt-2 font-black uppercase tracking-widest">{q.limit.replace('_', ' ')}</p>}
                  </div>
                )}

                {q.type === 'TFNG' && (
                  <div className="flex flex-wrap gap-2 pl-14">
                    {['TRUE', 'FALSE', 'NOT GIVEN'].map(val => (
                      <button 
                        key={val} 
                        onClick={() => setAnswers({...answers, [q.id]: val})}
                        className={`px-6 py-3 rounded-xl border font-bold transition-all ${answers[q.id] === val ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 dark:text-white hover:border-indigo-400'}`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Footer (Question boxes 1-40) */}
      <footer className="h-20 bg-white dark:bg-slate-900 border-t dark:border-slate-800 flex items-center px-6 gap-6 shrink-0">
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {Array.from({length: 40}, (_, i) => i + 1).map(num => {
            const isAnswered = answers[num] !== undefined;
            return (
              <button 
                key={num} 
                className={`shrink-0 w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold border transition-all ${isAnswered ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'}`}
              >
                {num}
              </button>
            );
          })}
        </div>
        <div className="flex gap-4 shrink-0">
          <div className="flex gap-2">
            {module.testData.passages.map((_, i) => (
              <button key={i} onClick={() => setActivePassage(i)} className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activePassage === i ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>Passage {i+1}</button>
            ))}
          </div>
          <button onClick={() => setShowExitConfirm(true)} className="bg-indigo-600 text-white px-8 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all">Submit Test</button>
        </div>
      </footer>

      {/* Exit Modal */}
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white dark:bg-slate-900 rounded-3xl p-10 max-w-md w-full text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6"><Settings className="w-8 h-8 text-indigo-600" /></div>
              <h2 className="text-2xl font-black dark:text-white mb-4">Finish Section?</h2>
              <p className="text-slate-500 mb-8">You have answered {Object.keys(answers).length} out of 40 questions. Once you submit, you cannot return.</p>
              <div className="flex gap-4">
                <button onClick={() => setShowExitConfirm(false)} className="flex-1 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 font-bold dark:text-white">Review Work</button>
                <button onClick={() => window.location.href = '/'} className="flex-1 p-4 rounded-2xl bg-indigo-600 text-white font-bold">Submit Now</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- App Structure ---

const LandingPage = () => (
  <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 relative">
    <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full text-indigo-600 dark:text-indigo-400 text-xs font-black tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800">ACADEMIC EXCELLENCE</div>
      <h1 className="serif text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">Master Academic <br/> Reading with Ease.</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">Surgical training for high-performance students. Explore our vocabulary labs, grammar frameworks, and official CD-style mock tests.</p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/module/vol-1/dashboard" className="bg-indigo-600 text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-indigo-500/30 flex items-center gap-2">Start Vol. 1 <Play className="w-5 h-5 fill-current" /></Link>
      </div>
    </motion.div>
  </div>
);

const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mode, setMode] = useState<AppMode>('student');

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  const ModuleRouteHandler = () => {
    const { id, section } = useParams();
    const module = ACADEMIC_MODULES.find(m => m.id === id);
    if (!module) return <div>Module not found</div>;

    switch (section) {
      case 'dashboard': return <ReadingDashboard module={module} />;
      case 'vocab': return <LessonMode module={module} type="vocab" />;
      case 'grammar': return <LessonMode module={module} type="grammar" />;
      case 'test': return <IELTSCDTestPlayer module={module} />;
      default: return <ReadingDashboard module={module} />;
    }
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            <button onClick={() => setIsSidebarOpen(true)} className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all group">
              <Menu className="w-6 h-6 dark:text-white group-hover:rotate-90 transition-transform" />
            </button>
            <Link to="/" className="hidden md:flex items-center gap-2"><div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">IM</div><span className="font-black text-xl tracking-tighter dark:text-white">IELTS MASTER</span></Link>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </header>

        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} mode={mode} setMode={setMode} />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/module/:id/:section" element={<ModuleRouteHandler />} />
          </Routes>
        </main>

        <footer className="py-20 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-t dark:border-slate-900">
          © 2025 IELTS MASTER ACADEMIC ECOSYSTEM
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
