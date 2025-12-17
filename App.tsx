
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Sun, Moon, GraduationCap, Play, ChevronRight, BookOpen, 
  Award, Info, CheckCircle, ArrowLeft, ArrowRight, Search, Quote, 
  Layers, Clock, Eye, Send, BarChart3, Settings, FileText, ChevronDown,
  Globe, Languages, EyeOff
} from 'lucide-react';
import { ACADEMIC_MODULES } from './data';
import { AppMode, VocabularyItem, Question, Passage, ReadingModule, Language } from './types';

// --- Components ---

const Sidebar = ({ isOpen, setIsOpen, mode, setMode }: { isOpen: boolean; setIsOpen: (o: boolean) => void; mode: AppMode; setMode: (m: AppMode) => void; }) => {
  const { id: activeModuleId } = useParams();
  
  const skillModules = ACADEMIC_MODULES.filter(m => m.category === 'skill-training');
  const testModules = ACADEMIC_MODULES.filter(m => m.category === 'full-test');

  const NavGroup = ({ title, modules, showPassages = false }: { title: string, modules: ReadingModule[], showPassages?: boolean }) => (
    <div className="space-y-4">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3">{title}</p>
      <div className="space-y-2">
        {modules.map(module => (
          <div key={module.id} className="space-y-1">
            <Link 
              to={`/module/${module.id}/dashboard`} 
              onClick={() => !showPassages && setIsOpen(false)}
              className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-bold transition-all border ${activeModuleId === module.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-slate-700 dark:text-slate-200 border-transparent'}`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4" /> {module.moduleTitle}
              </div>
            </Link>
            
            {showPassages && (
              <div className="pl-4 py-2 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-5 mt-2">
                {module.testData.passages.map((p, idx) => (
                  <Link 
                    key={p.id} 
                    to={`/module/${module.id}/test?p=${idx}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 p-2.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="truncate">{p.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />}</AnimatePresence>
      <motion.aside initial={{ x: '-100%' }} animate={{ x: isOpen ? 0 : '-100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl z-50 p-6 flex flex-col overflow-y-auto no-scrollbar">
        <div className="flex justify-between items-center mb-10">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-black tracking-tighter dark:text-white flex items-center gap-2">
            <Award className="text-indigo-600" /> IELTS MASTER
          </Link>
          <button onClick={() => setIsOpen(false)} className="dark:text-white p-2"><X /></button>
        </div>
        
        <nav className="flex-1 space-y-10">
          <NavGroup title="Question Type Labs" modules={skillModules} showPassages={true} />
          <NavGroup title="Full Mock Tests" modules={testModules} />
        </nav>

        <div className="pt-6 border-t dark:border-slate-800 space-y-4 mt-10">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3">System Mode</p>
          <div className="grid grid-cols-3 gap-2">
            {(['student', 'teacher', 'kahoot'] as AppMode[]).map(m => (
              <button key={m} onClick={() => setMode(m)} className={`p-2 rounded-lg text-[9px] font-black uppercase ${mode === m ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>{m}</button>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
};

// --- Theme Toggle Component ---
const ThemeToggle = ({ theme, setTheme }: { theme: 'dark' | 'light'; setTheme: (t: 'dark' | 'light') => void }) => (
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border dark:border-slate-800"
    aria-label="Toggle Theme"
  >
    {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
  </button>
);

// --- Official CD IELTS Test Player ---

const IELTSCDTestPlayer = ({ module, mode }: { module: ReadingModule, mode: AppMode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePassageIndex = parseInt(searchParams.get('p') || '0');
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(module.testData.timerSeconds);
  const [showAnswers, setShowAnswers] = useState(mode === 'teacher');
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Sync scroll on passage change
  const passageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (passageRef.current) passageRef.current.scrollTop = 0;
  }, [activePassageIndex]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const currentPassage = module.testData.passages[activePassageIndex] || module.testData.passages[0];

  return (
    <div className="fixed inset-0 bg-[#F3F4F6] dark:bg-slate-950 flex flex-col z-[60] overflow-hidden">
      {/* Header */}
      <header className="h-14 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center justify-between px-6 shrink-0 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
             <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center text-white font-black text-xs">R</div>
             <span className="font-bold text-xs text-slate-500 uppercase tracking-tight">{module.moduleTitle}</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />
          <div className="flex gap-1">
            {(['en', 'ru', 'uz'] as Language[]).map(l => (
              <button key={l} onClick={() => setCurrentLang(l)} className={`w-8 h-6 rounded flex items-center justify-center text-[10px] font-black uppercase border transition-all ${currentLang === l ? 'bg-slate-900 text-white border-slate-900' : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          {mode === 'teacher' && (
            <button onClick={() => setShowAnswers(!showAnswers)} className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${showAnswers ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
              {showAnswers ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />} {showAnswers ? 'Answers Visible' : 'Show Answers'}
            </button>
          )}
          <div className="text-rose-600 font-mono font-black text-lg bg-rose-50 dark:bg-rose-900/20 px-3 py-1 rounded-lg">
            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
          </div>
          <Link to="/" className="text-slate-400 hover:text-slate-600"><X /></Link>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: Passage */}
        <div ref={passageRef} className="w-1/2 overflow-y-auto p-12 border-r dark:border-slate-800 bg-white dark:bg-slate-900 no-scrollbar">
          <div className="max-w-2xl mx-auto">
            <h1 className="serif text-4xl font-bold mb-2 dark:text-white leading-tight">
              {currentLang === 'en' ? currentPassage.title : currentPassage.translations?.[currentLang as 'ru'|'uz'] || currentPassage.title}
            </h1>
            <h2 className="text-lg font-bold text-indigo-600 mb-8 uppercase tracking-widest">{currentPassage.headline}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {currentPassage.content.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>

        {/* Right Pane: Questions */}
        <div className="w-1/2 overflow-y-auto p-12 bg-[#F9FAFB] dark:bg-slate-950 no-scrollbar">
          <div className="max-w-2xl mx-auto space-y-16">
            <div className="pb-8 border-b dark:border-slate-800">
               <h3 className="text-xl font-black dark:text-white mb-2">Questions {currentPassage.questions[0].id}–{currentPassage.questions[currentPassage.questions.length-1].id}</h3>
               <p className="text-slate-500 text-sm italic font-medium">Do the following statements agree with the views of the writer in the passage?</p>
            </div>

            {currentPassage.questions.map((q) => (
              <div key={q.id} className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-xs">{q.id}</div>
                  <p className="text-lg font-bold dark:text-white leading-tight">{q.text}</p>
                </div>
                
                {/* YNNG / TFNG Renderer */}
                {(q.type === 'YNNG' || q.type === 'TFNG') && (
                  <div className="flex flex-wrap gap-2 pl-12">
                    {[(q.type === 'YNNG' ? 'YES' : 'TRUE'), (q.type === 'YNNG' ? 'NO' : 'FALSE'), 'NOT GIVEN'].map(val => (
                      <button 
                        key={val} 
                        onClick={() => setAnswers({...answers, [q.id]: val})}
                        className={`px-5 py-2.5 rounded-xl border-2 text-xs font-black transition-all ${answers[q.id] === val ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 dark:text-white hover:border-indigo-400'}`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                )}

                {/* Show Answer for Teacher Mode */}
                {showAnswers && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="pl-12 mt-2">
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-500/10">Correct: {q.correctAnswer}</span>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="h-20 bg-white dark:bg-slate-900 border-t dark:border-slate-800 flex items-center px-6 gap-6 shrink-0 shadow-2xl">
        <div className="flex gap-2 mr-6 border-r pr-6 dark:border-slate-800">
          {module.testData.passages.map((p, i) => (
            <button 
              key={i} 
              onClick={() => setSearchParams({ p: i.toString() })} 
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${activePassageIndex === i ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200'}`}
            >
              {p.title}
            </button>
          ))}
        </div>
        <div className="flex-1 flex gap-1 items-center overflow-x-auto no-scrollbar">
          {Array.from({length: 40}, (_, i) => i + 1).map(num => {
             const isFromCurrent = currentPassage.questions.some(q => q.id === num);
             return (
               <div key={num} className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold border transition-all ${answers[num] ? 'bg-indigo-600 border-indigo-600 text-white' : isFromCurrent ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 text-indigo-500' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-300'}`}>{num}</div>
             );
          })}
        </div>
        <button className="bg-indigo-600 text-white px-10 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-500/20 active:scale-95 transition-all">End Test</button>
      </footer>
    </div>
  );
};

// --- App Structure ---

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
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 flex flex-col">
        <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            <button onClick={() => setIsSidebarOpen(true)} className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all border dark:border-slate-800 group">
              <Menu className="w-6 h-6 dark:text-white group-hover:rotate-90 transition-transform" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/30">IM</div>
              <span className="font-black text-xl tracking-tighter dark:text-white">IELTS MASTER</span>
            </Link>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </header>

        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} mode={mode} setMode={setMode} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/module/:id/dashboard" element={<ModuleRouteWrapper mode={mode} component="dashboard" />} />
            <Route path="/module/:id/vocab" element={<ModuleRouteWrapper mode={mode} component="vocab" />} />
            <Route path="/module/:id/grammar" element={<ModuleRouteWrapper mode={mode} component="grammar" />} />
            <Route path="/module/:id/test" element={<ModuleRouteWrapper mode={mode} component="test" />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

const ModuleRouteWrapper = ({ mode, component }: { mode: AppMode, component: string }) => {
  const { id } = useParams();
  const module = ACADEMIC_MODULES.find(m => m.id === id);
  if (!module) return <div className="p-20 text-center font-bold dark:text-white">ERROR: Module not found</div>;
  if (component === 'test') return <IELTSCDTestPlayer module={module} mode={mode} />;
  if (component === 'vocab') return <LessonMode module={module} type="vocab" />;
  if (component === 'grammar') return <LessonMode module={module} type="grammar" />;
  return <ReadingDashboard module={module} />;
};

const ReadingDashboard = ({ module }: { module: ReadingModule }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 shadow-2xl border dark:border-slate-800">
        <h1 className="serif text-5xl font-black mb-4 dark:text-white">{module.moduleTitle}</h1>
        <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-2xl">Precision-engineered for high-performance candidates. Master individual question types before tackling full simulated exams.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <button onClick={() => navigate(`/module/${module.id}/vocab`)} className="p-10 rounded-3xl bg-indigo-50 dark:bg-indigo-900/20 text-left border border-transparent hover:border-indigo-200 transition-all group">
            <Quote className="w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black dark:text-white">Vocab Lab</h3>
            <p className="text-slate-400 text-sm mt-1">Lexical mastery</p>
          </button>
          <button onClick={() => navigate(`/module/${module.id}/grammar`)} className="p-10 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 text-left border border-transparent hover:border-emerald-200 transition-all group">
            <Layers className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black dark:text-white">Grammar Hub</h3>
            <p className="text-slate-400 text-sm mt-1">Structural logic</p>
          </button>
          <button onClick={() => navigate(`/module/${module.id}/test`)} className="p-10 rounded-3xl bg-rose-50 dark:bg-rose-900/20 text-left border border-transparent hover:border-rose-200 transition-all group">
            <Clock className="w-10 h-10 text-rose-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black dark:text-white">Mock Exam</h3>
            <p className="text-slate-400 text-sm mt-1">CD-IELTS Protocol</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const LandingPage = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-full text-[10px] font-black tracking-widest text-indigo-600 mb-8 border dark:border-slate-800">ACADEMIC ECOSYSTEM</div>
      <h1 className="serif text-7xl md:text-9xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none">IELTS Master.</h1>
      <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">Surgical precision training for elite candidates. Mirror the official British Council interface and master the logic of high-band reading.</p>
      <Link to="/module/ynng-mastery/dashboard" className="bg-indigo-600 text-white px-12 py-6 rounded-3xl font-black text-lg shadow-2xl shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 mx-auto w-fit group">Enter Laboratory <ChevronRight className="group-hover:translate-x-2 transition-transform" /></Link>
    </motion.div>
  </div>
);

const LessonMode = ({ module, type }: { module: ReadingModule, type: 'vocab' | 'grammar' }) => {
  const [step, setStep] = useState(0);
  const data = type === 'vocab' ? module.vocabSection : module.grammarSection.quiz;
  if (!data || data.length === 0) return <div className="p-20 text-center font-bold dark:text-white">Module has no {type} data yet. Check back soon.</div>;
  const current = data[step];

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-slate-900 p-12 rounded-[2.5rem] shadow-2xl border dark:border-slate-800">
        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-4 block">{type} Training • {step + 1}/{data.length}</span>
        {type === 'vocab' ? (
          <div className="space-y-6">
            <h2 className="text-5xl font-black dark:text-white">{(current as VocabularyItem).word}</h2>
            <p className="text-2xl text-slate-500 italic leading-relaxed">{(current as VocabularyItem).definition}</p>
            <div className="pt-8 flex gap-4">
              <button onClick={() => setStep(prev => Math.min(data.length - 1, prev + 1))} className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg">Next Item</button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">{module.grammarSection.topic}</h2>
            <p className="text-xl text-slate-500">{(current as any).original}</p>
            <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border-l-4 border-indigo-500">
              <p className="font-bold text-2xl dark:text-white">{(current as any).transform}</p>
            </div>
            <button onClick={() => setStep(prev => Math.min(data.length - 1, prev + 1))} className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg">Next Rule</button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default App;
