
import { Passage } from './types';

export const PASSAGES: Passage[] = [
  {
    id: 1,
    title: "Cosmology",
    translations: { ru: "Космология", uz: "Kosmologiya" },
    headline: "The Crisis in Cosmology is Getting Worse",
    content: "The standard model of cosmology, Lambda-CDM, has long been the bedrock of our understanding of the universe. It successfully explains the cosmic microwave background (CMB) and the distribution of galaxies. However, a deepening fissure known as the 'Hubble Tension'—the discrepancy between the expansion rate of the universe measured locally versus that predicted by the CMB—refuses to heal. Recent data from the James Webb Space Telescope has seemingly exacerbated the problem, ruling out measurement error as a convenient scapegoat. While some theorists propose 'Early Dark Energy' as a patch, others argue this is merely adding epicycles to a dying theory. We may be forcing observations to fit a model that is fundamentally broken, suggesting that our grasp of gravity on cosmic scales requires a complete paradigm shift rather than minor tweaks.",
    vocabulary: [
      { word: "Bedrock", ru: "Фундамент", uz: "Asos", definition: "A fundamental principle on which something is based." },
      { word: "Fissure", ru: "Раскол", uz: "Yoriq", definition: "A long, narrow opening or line of breakage." },
      { word: "Discrepancy", ru: "Несоответствие", uz: "Tafovut", definition: "A lack of compatibility or similarity between two or more facts." },
      { word: "Exacerbate", ru: "Усугублять", uz: "Yomonlashtirmoq", definition: "Make a problem, bad situation, or negative feeling worse." },
      { word: "Scapegoat", ru: "Козел отпущения", uz: "Aybni birovga ag'darish", definition: "A person or thing who is blamed for the faults of others." },
      { word: "Paradigm", ru: "Парадигма", uz: "Paradigma", definition: "A typical example or pattern of something; a model." },
      { word: "Tension", ru: "Напряжение", uz: "Taranglik", definition: "The state of being stretched tight; mental or emotional strain." }
    ],
    paraphrases: [
      { original: "Ruling out", paraphrase: "No longer considered a likely cause", type: "vocabulary", explanation: "IELTS often replaces 'exclude' or 'rule out' with phrases indicating low probability." },
      { original: "Exacerbated", paraphrase: "Made worse / Increased the difficulty", type: "vocabulary", explanation: "The question might ask if a problem was 'helped' - knowledge of this word proves the opposite." },
      { original: "Complete paradigm shift", paraphrase: "Completely new theory", type: "vocabulary", explanation: "Technical terms like 'paradigm shift' are often simplified to 'new theory' in questions." }
    ],
    paraphraseQuizzes: [
      { question: "Which phrase in the text means 'to eliminate a possibility'?", options: ["Exacerbate", "Rule out", "Paradigm shift", "Deepening fissure"], correctAnswer: "Rule out" },
      { question: "If the text says a problem is 'exacerbated', can we say it is 'resolved'?", options: ["Yes", "No", "Not Given"], correctAnswer: "No" }
    ],
    questions: [
      { id: 1, text: "The Lambda-CDM model has failed to explain the distribution of galaxies.", answer: "NO", explanation: "The passage states that the model 'successfully explains the cosmic microwave background (CMB) and the distribution of galaxies.' This explicitly contradicts the claim of failure." },
      { id: 2, text: "The data from the James Webb Space Telescope has helped resolve the Hubble Tension.", answer: "NO", explanation: "The text says recent data from the James Webb Space Telescope has 'seemingly exacerbated the problem.' Since 'exacerbate' means to make a problem worse, it did not help resolve the tension." },
      { id: 3, text: "Measurement error is no longer considered a likely cause of the discrepancy.", answer: "YES", explanation: "The writer mentions that recent data has been 'ruling out measurement error as a convenient scapegoat,' meaning it is no longer seen as a valid reason for the discrepancy." },
      { id: 4, text: "'Early Dark Energy' is universally accepted by physicists as the correct solution.", answer: "NOT GIVEN", explanation: "While the text mentions that 'some theorists propose Early Dark Energy', it does not provide information about whether it is 'universally accepted' by the wider physics community." },
      { id: 5, text: "The writer suggests that a completely new theory of gravity might be necessary.", answer: "YES", explanation: "The writer concludes by 'suggesting that our grasp of gravity on cosmic scales requires a complete paradigm shift,' which implies that existing theories may need to be replaced by a new one." }
    ]
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    translations: { ru: "Искусственный интеллект", uz: "Sun'iy intellekt" },
    headline: "The Jevons Paradox of AI Efficiency",
    content: "There is a seductive logic in the tech industry that more efficient AI chips will naturally lead to a lower carbon footprint. This optimism, however, ignores the Jevons Paradox: as technology increases the efficiency with which a resource is used, the total consumption of that resource increases rather than decreases. As neural networks become cheaper to run, they are being integrated into trivial applications—from smart toasters to email auto-completes—where they were previously cost-prohibitive. Consequently, the aggregate energy demand of the sector is skyrocketing. Unless regulatory caps are imposed, efficiency gains will essentially cannibalise themselves, leading to a net increase in global emissions regardless of how 'green' the individual processors become.",
    vocabulary: [
      { word: "Seductive", ru: "Соблазнительный", uz: "Maun", definition: "Tempting and attractive; enticing." },
      { word: "Paradox", ru: "Парадокс", uz: "Paradoks", definition: "A seemingly absurd or self-contradictory statement." },
      { word: "Prohibitive", ru: "Непомерно высокий", uz: "Taqiqlovchi yuqori narx", definition: "Forbiddingly high (usually referring to price)." },
      { word: "Skyrocketing", ru: "Стремительно растущий", uz: "Tez ko'tarilayotgan", definition: "Increasing very steeply or rapidly." },
      { word: "Regulatory", ru: "Регулирующий", uz: "Tartibga soluvchi", definition: "Relating to the management of complex systems according to rules." },
      { word: "Cannibalise", ru: "Уничтожать за счет себя", uz: "O'zini o'zi yeyish", definition: "To reduce the sales or value of one product by introducing another." },
      { word: "Aggregate", ru: "Совокупный", uz: "Umumiy", definition: "A whole formed by combining several separate elements." }
    ],
    paraphrases: [
      { original: "Lower carbon footprint", paraphrase: "Reduced energy consumption / lower emissions", type: "vocabulary", explanation: "Carbon footprint is a common environmental synonym for impact or emissions." },
      { original: "Unless regulatory caps are imposed", paraphrase: "If government regulation is not used", type: "grammar", explanation: "IELTS changes 'Unless' (negative condition) to 'If... not' in questions." },
      { original: "Increases rather than decreases", paraphrase: "Result in higher overall use", type: "vocabulary", explanation: "Contrasting pairs are often turned into a single descriptive result." }
    ],
    paraphraseQuizzes: [
      { question: "What is the paraphrase of 'Carbon footprint' used in the lesson?", options: ["Energy bills", "Global emissions", "Seductive logic", "Aggregate demand"], correctAnswer: "Global emissions" },
      { question: "Rewrite 'Unless caps are imposed' using 'If'.", options: ["If caps are imposed", "If caps are not imposed", "If caps were easy", "If caps are cheap"], correctAnswer: "If caps are not imposed" }
    ],
    questions: [
      { id: 6, text: "The tech industry generally believes that efficiency leads to reduced energy consumption.", answer: "YES", explanation: "The writer describes a 'seductive logic in the tech industry that more efficient AI chips will naturally lead to a lower carbon footprint,' confirming this widespread industry belief." },
      { id: 7, text: "The integration of AI into household appliances like toasters is currently declining.", answer: "NOT GIVEN", explanation: "The passage notes that AI is 'being integrated into trivial applications—from smart toasters to email auto-completes,' but it does not specify if this trend is currently declining or rising." },
      { id: 8, text: "The Jevons Paradox suggests that efficiency gains result in lower overall resource use.", answer: "NO", explanation: "The text explains the Jevons Paradox as: 'as technology increases the efficiency... the total consumption of that resource increases rather than decreases,' which is the opposite of the statement." },
      { id: 9, text: "Smart toasters use more energy than standard toasters.", answer: "NOT GIVEN", explanation: "While the text mentions that smart toasters are part of a 'skyrocketing' aggregate demand, it never directly compares the energy consumption of one smart toaster to one standard toaster." },
      { id: 10, text: "The writer believes that government regulation is necessary to stop the rise in emissions.", answer: "YES", explanation: "The author explicitly states, 'Unless regulatory caps are imposed, efficiency gains will essentially cannibalise themselves,' indicating that regulation is the only way to prevent net increases in emissions." }
    ]
  },
  {
    id: 3,
    title: "Bioethics",
    translations: { ru: "Биоэтика", uz: "Bioetika" },
    headline: "Redefining the Human Embryo",
    content: "The creation of 'synthetic embryos' from stem cells—without the use of sperm or eggs—has bypassed the traditional biological definition of conception. While these structures offer an unparalleled window into the 'black box' of early human development, they exist in a legal and ethical vacuum. Current guidelines, such as the 14-day rule which limits how long embryos can be grown in the lab, were written for natural embryos. Proponents argue these synthetic models are not truly 'human' as they lack the potential to develop into a fetus. However, as these models become increasingly sophisticated, mimicking heartbeats and brain precursors, the distinction between 'model' and 'life' is collapsing, necessitating a frantic update to bioethical frameworks that are decades out of date.",
    vocabulary: [
      { word: "Synthetic", ru: "Синтетический", uz: "Sintetik", definition: "Made by chemical synthesis, especially to imitate a natural product." },
      { word: "Conception", ru: "Зачатие", uz: "Urug'lanish", definition: "The action of conceiving a child or of one being conceived." },
      { word: "Vacuum", ru: "Вакуум", uz: "Vakuum", definition: "A space entirely devoid of matter; a void." },
      { word: "Sophisticated", ru: "Сложный / Изысканный", uz: "Murakkab", definition: "Developed to a high degree of complexity." },
      { word: "Mimicking", ru: "Имитация", uz: "Taqlid qilish", definition: "Imitate (someone or their actions or words), especially in order to entertain or ridicule." },
      { word: "Precursor", ru: "Предшественник", uz: "Kashshof", definition: "A person or thing that comes before another of the same kind." },
      { word: "Frantic", ru: "Лихорадочный", uz: "Bezovta", definition: "Wild or distraught with fear, anxiety, or other emotion." }
    ],
    paraphrases: [
      { original: "Unparalleled window", paraphrase: "Insights previously inaccessible", type: "vocabulary", explanation: "IELTS loves metaphors like 'window' or 'bridge' to mean 'means of access' or 'insight'." },
      { original: "Decades out of date", paraphrase: "Insufficient for new developments", type: "vocabulary", explanation: "Temporal phrases are often converted into qualitative assessments (not enough/not good enough)." },
      { original: "Necessitating an update", paraphrase: "Laws are not sufficient", type: "grammar", explanation: "Changing an action (needing update) to a state (not being sufficient)." }
    ],
    paraphraseQuizzes: [
      { question: "If something is 'decades out of date', it is:", options: ["Modern", "Modernizing", "Insufficient", "Unparalleled"], correctAnswer: "Insufficient" },
      { question: "Paraphrase 'Unparalleled window':", options: ["Great view", "Unique insight", "Glass structure", "Closed door"], correctAnswer: "Unique insight" }
    ],
    questions: [
      { id: 11, text: "Synthetic embryos provide insights into early development that were previously inaccessible.", answer: "YES", explanation: "The writer describes synthetic embryos as offering an 'unparalleled window into the black box of early human development,' implying these insights were previously hidden or hard to reach." },
      { id: 12, text: "The 14-day rule was specifically designed to regulate synthetic embryos.", answer: "NO", explanation: "The passage clarifies that guidelines like the 14-day rule 'were written for natural embryos,' which means they were not originally designed for synthetic ones." },
      { id: 13, text: "Scientists have successfully grown a synthetic embryo into a full-term fetus.", answer: "NOT GIVEN", explanation: "The text mentions that models are 'mimicking heartbeats and brain precursors,' but it does not state that any have successfully reached the stage of a 'full-term fetus.'" },
      { id: 14, text: "Supporters of synthetic embryos claim they are biologically identical to natural human embryos.", answer: "NO", explanation: "The text says 'Proponents argue these synthetic models are not truly human,' which contradicts the claim that they are considered biologically identical." },
      { id: 15, text: "The writer feels that current bioethical laws are sufficient to handle these new developments.", answer: "NO", explanation: "The writer argues that the new developments are 'necessitating a frantic update to bioethical frameworks that are decades out of date,' showing they are not sufficient." }
    ]
  },
  {
    id: 4,
    title: "Plant Biology",
    translations: { ru: "Биология растений", uz: "O'simliklar biologiyasi" },
    headline: "The Controversy of 'Plant Intelligence'",
    content: "To describe plants as 'intelligent' is to invite scorn from orthodox biologists, who argue that cognition requires a central nervous system. Yet, recent experiments demonstrate that plants can learn from experience, communicate via fungal networks, and even count. The mimosa plant, for instance, learns to ignore harmless stimuli while retaining defensive reflexes for real threats. The reluctance to label this 'intelligence' stems from an animal-centric bias in our language rather than a lack of biological complexity. If we define intelligence as the ability to process information and solve problems to ensure survival, then plants are not merely passive scenery, but cognitive agents in their own right.",
    vocabulary: [
      { word: "Scorn", ru: "Презрение", uz: "Nafrat", definition: "The feeling or belief that someone or something is worthless or despicable." },
      { word: "Orthodox", ru: "Ортодоксальный", uz: "Pravoslav / Eskicha", definition: "Following or conforming to the traditional or generally accepted rules." },
      { word: "Cognition", ru: "Познание", uz: "Bilish", definition: "The mental action or process of acquiring knowledge." },
      { word: "Stimuli", ru: "Стимулы", uz: "Rag'batlantiruvchi omillar", definition: "A thing or event that evokes a specific functional reaction." },
      { word: "Scenery", ru: "Пейзаж", uz: "Manzara", definition: "The natural features of a landscape considered in terms of their appearance." },
      { word: "Agent", ru: "Агент", uz: "Agent", definition: "A person or thing that takes an active role or produces a specified effect." },
      { word: "Bias", ru: "Предвзятость", uz: "G'arazgo'ylik", definition: "Prejudice in favor of or against one thing, person, or group." }
    ],
    paraphrases: [
      { original: "Invite scorn from orthodox biologists", paraphrase: "Traditional scientists reject the idea", type: "vocabulary", explanation: "'Scorn' implies rejection or strong disagreement; 'orthodox' means traditional/mainstream." },
      { original: "Animal-centric bias", paraphrase: "Favouring animal biology", type: "vocabulary", explanation: "Centric/Bias combined means focusing too much on one side." },
      { original: "Retaining defensive reflexes", paraphrase: "Keep protecting themselves", type: "vocabulary", explanation: "Reflexes are often replaced with simpler verbs like 'protect' or 'react'." }
    ],
    paraphraseQuizzes: [
      { question: "What does 'Orthodox' mean in the context of biologists?", options: ["Young", "Traditional", "Famous", "Creative"], correctAnswer: "Traditional" },
      { question: "If I 'invite scorn', people are:", options: ["Happy", "Angry/Disapproving", "Confused", "Interested"], correctAnswer: "Angry/Disapproving" }
    ],
    questions: [
      { id: 16, text: "Most traditional biologists accept the idea that plants are intelligent.", answer: "NO", explanation: "The writer says that describing plants as intelligent 'invites scorn from orthodox (traditional) biologists,' meaning they generally reject the idea." },
      { id: 17, text: "The mimosa plant shows the ability to distinguish between dangerous and safe stimuli.", answer: "YES", explanation: "The passage notes that the mimosa plant 'learns to ignore harmless stimuli while retaining defensive reflexes for real threats,' confirming it can tell the difference." },
      { id: 18, text: "Plants use fungal networks to share nutrients with weaker plants.", answer: "NOT GIVEN", explanation: "The text confirms that plants 'communicate via fungal networks,' but it does not mention the sharing of nutrients with weaker plants specifically." },
      { id: 19, text: "The writer believes the definition of intelligence should be limited to organisms with brains.", answer: "NO", explanation: "The writer suggests that if we redefine intelligence as 'the ability to process information... then plants are... cognitive agents,' arguing against the brain-only definition." },
      { id: 20, text: "The refusal to call plants intelligent is caused by a bias towards animal biology.", answer: "YES", explanation: "The text explicitly states that the 'reluctance to label this intelligence stems from an animal-centric bias in our language.'" }
    ]
  },
  {
    id: 5,
    title: "Geoengineering",
    translations: { ru: "Геоинженерия", uz: "Geoinjeneriya" },
    headline: "The Trap of Termination Shock",
    content: "Solar radiation modification (SRM)—spraying aerosols into the stratosphere to reflect sunlight—is often touted as a cheap, rapid fix for global warming. Technically, it is feasible. Politically and ecologically, however, it is a minefield. The most terrifying risk is 'termination shock.' If a geoengineering program were to be launched and then suddenly stopped—perhaps due to war, terrorism, or economic collapse—the masked warming would rebound with catastrophic speed. The global temperature could spike by several degrees within a decade, shattering ecosystems that cannot adapt that quickly. Thus, starting SRM is not just an engineering decision; it is a commitment to maintain a technological life-support system for centuries, with no easy exit strategy.",
    vocabulary: [
      { word: "Modification", ru: "Модификация", uz: "O'zgartirish", definition: "The action of modifying something." },
      { word: "Feasible", ru: "Выполнимый", uz: "Amalga oshirib bo'ladigan", definition: "Possible to do easily or conveniently." },
      { word: "Minefield", ru: "Минное поле", uz: "Minalangan maydon", definition: "A subject or situation presenting unseen hazards." },
      { word: "Termination", ru: "Прекращение", uz: "Tugatish", definition: "The action of bringing something or coming to an end." },
      { word: "Catastrophic", ru: "Катастрофический", uz: "Falokatli", definition: "Involving or causing sudden great damage or suffering." },
      { word: "Ecosystem", ru: "Экосистема", uz: "Ekosistema", definition: "A biological community of interacting organisms and their physical environment." },
      { word: "Spike", ru: "Всплеск", uz: "Keskin ко'tarilish", definition: "A sharp increase in the magnitude or concentration of something." }
    ],
    paraphrases: [
      { original: "Feasible", paraphrase: "Technically possible", type: "vocabulary", explanation: "One of the most common IELTS vocabulary mappings: Feasible = Possible / Viable." },
      { original: "Cessation of an SRM program", paraphrase: "If a program were suddenly stopped", type: "grammar", explanation: "Nominalization (Cessation) turned into a verb (stopped) in the question." },
      { original: "No easy exit strategy", paraphrase: "Not easy to stop once started", type: "vocabulary", explanation: "Strategic terms simplified to literal descriptions of stopping/starting." }
    ],
    paraphraseQuizzes: [
      { question: "What is the verb form of 'Cessation'?", options: ["Cessate", "Cease", "Catch", "Choose"], correctAnswer: "Cease" },
      { question: "If something is 'feasible', it is:", options: ["Impossible", "Possible", "Expensive", "Political"], correctAnswer: "Possible" }
    ],
    questions: [
      { id: 21, text: "Solar radiation modification is considered technically impossible to achieve.", answer: "NO", explanation: "The passage states, 'Technically, it is feasible,' which means it is possible, not impossible." },
      { id: 22, text: "'Termination shock' would result in a gradual, manageable rise in temperatures.", answer: "NO", explanation: "The writer warns that warming would 'rebound with catastrophic speed' and temperature would 'spike by several degrees within a decade,' which is the opposite of gradual and manageable." },
      { id: 23, text: "Political instability could potentially cause the sudden cessation of an SRM program.", answer: "YES", explanation: "The text mentions that a program might be suddenly stopped 'due to war, terrorism, or economic collapse,' all of which are forms of political or social instability." },
      { id: 24, text: "Ecosystems would be able to adapt to the temperature spike caused by termination shock.", answer: "NO", explanation: "The author says the spike would be 'shattering ecosystems that cannot adapt that quickly,' showing they would not be able to adapt." },
      { id: 25, text: "The writer views SRM as a temporary solution that is easy to stop once started.", answer: "NO", explanation: "The writer calls it a 'commitment... for centuries, with no easy exit strategy,' contradicting the idea that it is temporary or easy to stop." }
    ]
  }
];
