
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
      { word: "Paradigm", ru: "Парадигма", uz: "Paradigma", definition: "A typical example or pattern of something; a model." }
    ],
    paraphrases: [
      { original: "Ruling out", paraphrase: "No longer considered a likely cause", type: "vocabulary", explanation: "IELTS often replaces 'exclude' or 'rule out' with phrases indicating low probability." },
      { original: "Exacerbated", paraphrase: "Increased the difficulty", type: "vocabulary", explanation: "Negative words like 'exacerbate' are often contrasted with 'resolve' or 'help' in questions." }
    ],
    paraphraseQuizzes: [
      { question: "Which phrase means 'to eliminate a possibility'?", options: ["Exacerbate", "Rule out", "Paradigm shift", "Heal"], correctAnswer: "Rule out" },
      { question: "If the text says 'exacerbated', did the problem improve?", options: ["Yes", "No", "Not Given"], correctAnswer: "No" }
    ],
    questions: [
      { id: 1, text: "The Lambda-CDM model has failed to explain the distribution of galaxies.", answer: "NO", explanation: "NO - The passage states the model 'successfully explains... the distribution of galaxies.' This is a direct contradiction - NO" },
      { id: 2, text: "The data from the James Webb Space Telescope has helped resolve the Hubble Tension.", answer: "NO", explanation: "NO - The text says data 'exacerbated the problem,' which means to make it worse, not resolve it - NO" },
      { id: 3, text: "Measurement error is no longer considered a likely cause of the discrepancy.", answer: "YES", explanation: "YES - The text says it is 'ruling out measurement error,' meaning it is no longer a valid explanation - YES" },
      { id: 4, text: "'Early Dark Energy' is universally accepted by physicists as the correct solution.", answer: "NOT GIVEN", explanation: "NG - The text says 'some theorists propose' it, but gives no info on 'universal acceptance' by the whole community - NOT GIVEN" },
      { id: 5, text: "The writer suggests that a completely new theory of gravity might be necessary.", answer: "YES", explanation: "YES - The writer suggests we require a 'complete paradigm shift' in our grasp of gravity - YES" }
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
      { word: "Regulatory", ru: "Регулирующий", uz: "Tartibga soluvchi", definition: "Relating to the management of complex systems according to rules." }
    ],
    paraphrases: [
      { original: "Lower carbon footprint", paraphrase: "Reduced energy consumption", type: "vocabulary", explanation: "The environment's impact is often termed as a 'footprint' or 'emissions'." },
      { original: "Increases rather than decreases", paraphrase: "Result in higher overall use", type: "vocabulary", explanation: "If consumption does not go down but goes up, the net result is an increase." }
    ],
    paraphraseQuizzes: [
      { question: "What does Jevons Paradox say about resource consumption?", options: ["It decreases", "It stays the same", "It increases", "It disappears"], correctAnswer: "It increases" },
      { question: "What is a synonym for 'Skyrocketing'?", options: ["Declining", "Stable", "Increasing rapidly", "Fluctuating"], correctAnswer: "Increasing rapidly" }
    ],
    questions: [
      { id: 6, text: "The tech industry generally believes that efficiency leads to reduced energy consumption.", answer: "YES", explanation: "YES - The text mentions the 'seductive logic... that more efficient AI chips will naturally lead to a lower carbon footprint' - YES" },
      { id: 7, text: "The integration of AI into household appliances like toasters is currently declining.", answer: "NOT GIVEN", explanation: "NG - The text mentions they ARE being integrated, but does not say if the trend is 'declining' or 'rising' - NOT GIVEN" },
      { id: 8, text: "The Jevons Paradox suggests that efficiency gains result in lower overall resource use.", answer: "NO", explanation: "NO - The text states the paradox means 'total consumption... increases rather than decreases' - NO" },
      { id: 9, text: "Smart toasters use more energy than standard toasters.", answer: "NOT GIVEN", explanation: "NG - The text discusses aggregate sector demand, but never compares a single smart toaster to a standard one - NOT GIVEN" },
      { id: 10, text: "The writer believes that government regulation is necessary to stop the rise in emissions.", answer: "YES", explanation: "YES - The writer explicitly says 'Unless regulatory caps are imposed...' implying they are necessary - YES" }
    ]
  },
  {
    id: 3,
    title: "Bioethics",
    translations: { ru: "Биоэтика", uz: "Bioetika" },
    headline: "Redefining the Human Embryo",
    content: "The creation of 'synthetic embryos' from stem cells—without the use of sperm or eggs—has bypassed the traditional biological definition of conception. While these structures offer an unparalleled window into the 'black box' of early human development, they exist in a legal and ethical vacuum. Current guidelines, such as the 14-day rule which limits how long embryos can be grown in the lab, were written for natural embryos. Proponents argue these synthetic models are not truly 'human' as they lack the potential to develop into a fetus. However, as these models become increasingly sophisticated, mimicking heartbeats and brain precursors, the distinction between 'model' and 'life' is collapsing, necessitating a frantic update to bioethical frameworks that are decades out of date.",
    vocabulary: [
      { word: "Synthetic", ru: "Синтетический", uz: "Sintetik", definition: "Made by chemical synthesis to imitate a natural product." },
      { word: "Conception", ru: "Зачатие", uz: "Urug'lanish", definition: "The action of conceiving a child." },
      { word: "Vacuum", ru: "Вакуум", uz: "Vakuum", definition: "A space entirely devoid of matter; a void." },
      { word: "Sophisticated", ru: "Сложный", uz: "Murakkab", definition: "Developed to a high degree of complexity." },
      { word: "Mimicking", ru: "Имитация", uz: "Taqlid qilish", definition: "Imitating or copying something." }
    ],
    paraphrases: [
      { original: "Unparalleled window", paraphrase: "Insights previously inaccessible", type: "vocabulary", explanation: "An 'unparalleled window' suggests a view or knowledge that was never available before." },
      { original: "Decades out of date", paraphrase: "Insufficient for new developments", type: "vocabulary", explanation: "If laws are 'out of date', they are naturally 'insufficient' for current technology." }
    ],
    paraphraseQuizzes: [
      { question: "What does 'Mimicking' mean in this context?", options: ["Destroying", "Copying", "Accelerating", "Designing"], correctAnswer: "Copying" },
      { question: "If a rule is 'out of date', is it modern?", options: ["Yes", "No", "Not Given"], correctAnswer: "No" }
    ],
    questions: [
      { id: 11, text: "Synthetic embryos provide insights into early development that were previously inaccessible.", answer: "YES", explanation: "YES - They offer an 'unparalleled window into the black box,' which means these insights were previously closed or hidden - YES" },
      { id: 12, text: "The 14-day rule was specifically designed to regulate synthetic embryos.", answer: "NO", explanation: "NO - The text states the guidelines 'were written for natural embryos,' NOT synthetic ones - NO" },
      { id: 13, text: "Scientists have successfully grown a synthetic embryo into a full-term fetus.", answer: "NOT GIVEN", explanation: "NG - It mentions they mimic heartbeats, but does not state a full-term fetus was ever grown - NOT GIVEN" },
      { id: 14, text: "Supporters of synthetic embryos claim they are biologically identical to natural human embryos.", answer: "NO", explanation: "NO - Proponents argue they 'are not truly human,' which contradicts them being 'identical' - NO" },
      { id: 15, text: "The writer feels that current bioethical laws are sufficient to handle these new developments.", answer: "NO", explanation: "NO - The writer says the frameworks are 'decades out of date' and require a 'frantic update' - NO" }
    ]
  },
  {
    id: 4,
    title: "Plant Biology",
    translations: { ru: "Биология растений", uz: "O'simliklar biologiyasi" },
    headline: "The Controversy of 'Plant Intelligence'",
    content: "To describe plants as 'intelligent' is to invite scorn from orthodox biologists, who argue that cognition requires a central nervous system. Yet, recent experiments demonstrate that plants can learn from experience, communicate via fungal networks, and even count. The mimosa plant, for instance, learns to ignore harmless stimuli while retaining defensive reflexes for real threats. The reluctance to label this 'intelligence' stems from an animal-centric bias in our language rather than a lack of biological complexity. If we define intelligence as the ability to process information and solve problems to ensure survival, then plants are not merely passive scenery, but cognitive agents in their own right.",
    vocabulary: [
      { word: "Scorn", ru: "Презрение", uz: "Nafrat", definition: "The feeling that something is worthless or despicable." },
      { word: "Orthodox", ru: "Ортодоксальный", uz: "Eskicha", definition: "Conforming to traditional or generally accepted rules." },
      { word: "Cognition", ru: "Познание", uz: "Bilish", definition: "The mental action of acquiring knowledge." },
      { word: "Stimuli", ru: "Стимулы", uz: "Rag'batlar", definition: "Events that evoke a specific functional reaction." }
    ],
    paraphrases: [
      { original: "Invite scorn from orthodox biologists", paraphrase: "Traditional scientists reject the idea", type: "vocabulary", explanation: "'Scorn' is a strong form of rejection/disapproval; 'orthodox' means traditional." },
      { original: "Animal-centric bias", paraphrase: "Favouring animal biology", type: "vocabulary", explanation: "A 'bias' means a preference or prejudice for one group (animals) over another." }
    ],
    paraphraseQuizzes: [
      { question: "What is an 'Orthodox' biologist?", options: ["A modern rebel", "A traditionalist", "A gardener", "A chemist"], correctAnswer: "A traditionalist" },
      { question: "Does the mimosa plant react to 'harmless' stimuli after learning?", options: ["Yes", "No", "Not Given"], correctAnswer: "No" }
    ],
    questions: [
      { id: 16, text: "Most traditional biologists accept the idea that plants are intelligent.", answer: "NO", explanation: "NO - It states the idea invites 'scorn from orthodox (traditional) biologists,' which is the opposite of acceptance - NO" },
      { id: 17, text: "The mimosa plant shows the ability to distinguish between dangerous and safe stimuli.", answer: "YES", explanation: "YES - It 'learns to ignore harmless stimuli while retaining defensive reflexes for real threats' - YES" },
      { id: 18, text: "Plants use fungal networks to share nutrients with weaker plants.", answer: "NOT GIVEN", explanation: "NG - The text says they 'communicate via fungal networks,' but nutrient sharing is not mentioned - NOT GIVEN" },
      { id: 19, text: "The writer believes the definition of intelligence should be limited to organisms with brains.", answer: "NO", explanation: "NO - The writer argues that if we redefine intelligence as information processing, plants ARE intelligent agents - NO" },
      { id: 20, text: "The refusal to call plants intelligent is caused by a bias towards animal biology.", answer: "YES", explanation: "YES - The text explicitly attributes the reluctance to an 'animal-centric bias in our language' - YES" }
    ]
  },
  {
    id: 5,
    title: "Geoengineering",
    translations: { ru: "Геоинженерия", uz: "Geoinjeneriya" },
    headline: "The Trap of Termination Shock",
    content: "Solar radiation modification (SRM)—spraying aerosols into the stratosphere to reflect sunlight—is often touted as a cheap, rapid fix for global warming. Technically, it is feasible. Politically and ecologically, however, it is a minefield. The most terrifying risk is 'termination shock.' If a geoengineering program were to be launched and then suddenly stopped—perhaps due to war, terrorism, or economic collapse—the masked warming would rebound with catastrophic speed. The global temperature could spike by several degrees within a decade, shattering ecosystems that cannot adapt that quickly. Thus, starting SRM is not just an engineering decision; it is a commitment to maintain a technological life-support system for centuries, with no easy exit strategy.",
    vocabulary: [
      { word: "Feasible", ru: "Выполнимый", uz: "Amalga oshirib bo'ladigan", definition: "Possible to do easily or conveniently." },
      { word: "Minefield", ru: "Минное поле", uz: "Minalangan maydon", definition: "A situation presenting unseen hazards." },
      { word: "Termination", ru: "Прекращение", uz: "Tugatish", definition: "The action of bringing something to an end." },
      { word: "Spike", ru: "Всплеск", uz: "Keskin ko'tarilish", definition: "A sharp increase in magnitude." }
    ],
    paraphrases: [
      { original: "Catastrophic speed", paraphrase: "Rapid rise in temperatures", type: "vocabulary", explanation: "Something moving with 'catastrophic speed' is naturally 'rapid'." },
      { original: "No easy exit strategy", paraphrase: "Difficult to stop once started", type: "vocabulary", explanation: "A lack of an 'exit strategy' means you cannot easily leave or stop the process." }
    ],
    paraphraseQuizzes: [
      { question: "Is SRM considered 'technically possible'?", options: ["Yes", "No", "Not Given"], correctAnswer: "Yes" },
      { question: "What is 'Termination Shock'?", options: ["Starting a program", "Suddenly stopping a program", "A slow climate change", "An energy source"], correctAnswer: "Suddenly stopping a program" }
    ],
    questions: [
      { id: 21, text: "Solar radiation modification is considered technically impossible to achieve.", answer: "NO", explanation: "NO - The text states 'Technically, it is feasible,' which means possible - NO" },
      { id: 22, text: "'Termination shock' would result in a gradual, manageable rise in temperatures.", answer: "NO", explanation: "NO - It would 'rebound with catastrophic speed' and 'spike... within a decade,' which is the opposite of gradual - NO" },
      { id: 23, text: "Political instability could potentially cause the sudden cessation of an SRM program.", answer: "YES", explanation: "YES - It mentions 'war, terrorism, or economic collapse' as potential reasons for stopping - YES" },
      { id: 24, text: "Ecosystems would be able to adapt to the temperature spike caused by termination shock.", answer: "NO", explanation: "NO - It would 'shatter ecosystems that cannot adapt that quickly' - NO" },
      { id: 25, text: "The writer views SRM as a temporary solution that is easy to stop once started.", answer: "NO", explanation: "NO - The writer says it is a 'commitment... for centuries, with no easy exit strategy' - NO" }
    ]
  },
  {
    id: 6,
    title: "Quantum Physics",
    translations: { ru: "Квантовая физика", uz: "Kvant fizikasi" },
    headline: "The Trouble with Time",
    content: "Theoretical physicists have long struggled to reconcile the smooth, continuous flow of time described by Einstein’s General Relativity with the pixelated, 'chunky' time of Quantum Mechanics. A controversial new theory, 'Thermal Time,' proposes a radical solution: time does not exist at the fundamental level at all. Instead, it is an emergent property, a statistical illusion created by heat and disorder (entropy) in macroscopic systems. If this is true, the 'flow' of time is merely a perspective error of our human brains, which cannot process the universe's full quantum state. While mathematical models support this, experimentalists argue it is currently untestable, leaving 'Thermal Time' in the realm of philosophy rather than hard science.",
    vocabulary: [
      { word: "Reconcile", ru: "Примирить", uz: "Yarashtirmoq", definition: "Restore friendly relations between; cause to coexist in harmony." },
      { word: "Pixelated", ru: "Пикселизированный", uz: "Piksellangan", definition: "Displaying pixels; grainy or chunky rather than smooth." },
      { word: "Emergent", ru: "Эмерджентный", uz: "Paydo bo'ladigan", definition: "In the process of coming into being or becoming prominent." },
      { word: "Entropy", ru: "Энтропия", uz: "Entropiya", definition: "Lack of order or predictability; gradual decline into disorder." },
      { word: "Untestable", ru: "Непроверяемый", uz: "Tekshirib bo'lmaydigan", definition: "Impossible to verify through experiment or observation." }
    ],
    paraphrases: [
      { original: "Struggled to reconcile", paraphrase: "Do not agree on how time functions", type: "vocabulary", explanation: "Struggling to reconcile two theories means they are currently incompatible." },
      { original: "Perspective error of our human brains", paraphrase: "Human brain is incapable of perceiving", type: "grammar", explanation: "A 'brain error' means the brain is making a mistake or has a limitation." }
    ],
    paraphraseQuizzes: [
      { question: "If physicists 'struggle to reconcile' two theories, do the theories match?", options: ["Yes", "No", "Not Given"], correctAnswer: "No" },
      { question: "What is the synonym for 'Grainy' in the text?", options: ["Smooth", "Continuous", "Pixelated", "Thermal"], correctAnswer: "Pixelated" }
    ],
    questions: [
      { id: 1, text: "General Relativity and Quantum Mechanics agree on how time functions.", answer: "NO", explanation: "NO - The text states physicists have 'long struggled to reconcile' the two views, meaning they do NOT agree - NO" },
      { id: 2, text: "The 'Thermal Time' theory suggests that time is a fundamental building block of the universe.", answer: "NO", explanation: "NO - The text says the theory proposes 'time does not exist at the fundamental level at all' - NO" },
      { id: 3, text: "Entropy is responsible for creating the illusion of time flow in the new theory.", answer: "YES", explanation: "YES - It says time is an 'illusion created by heat and disorder (entropy)' - YES" },
      { id: 4, text: "The writer implies that the human brain is capable of perceiving the universe's full quantum state.", answer: "NO", explanation: "NO - The writer says the brain 'cannot process the universe's full quantum state' - NO" },
      { id: 5, text: "Experimentalists have successfully designed a test to prove the existence of Thermal Time.", answer: "NO", explanation: "NO - The passage states experimentalists 'argue it is currently untestable' - NO" }
    ]
  },
  {
    id: 7,
    title: "Environmental Science",
    translations: { ru: "Экология", uz: "Ekologiya" },
    headline: "The Bioplastic Myth",
    content: "The consumer rush towards 'bioplastics'—polymers derived from plants rather than oil—is driven by a desire to reduce pollution. However, this shift may be doing more harm than good. Most bioplastics behave exactly like conventional plastic in the ocean: they do not break down. Even those labelled 'compostable' require industrial incinerators reaching 60°C to degrade, conditions never met in the natural environment. Furthermore, diverting vast tracts of arable land to grow corn for plastic production drives up food prices and encourages deforestation. Thus, switching to plant-based plastic is often a form of 'greenwashing' that allows companies to continue selling disposable culture under a virtuous guise.",
    vocabulary: [
      { word: "Derived", ru: "Производный", uz: "Olingan", definition: "Obtained from a specified source." },
      { word: "Conventional", ru: "Традиционный", uz: "An'anaviy", definition: "Based on or in accordance with what is generally done or believed." },
      { word: "Incinerators", ru: "Печи для сжигания", uz: "Yoqish pechlari", definition: "An apparatus for burning waste material at high temperatures." },
      { word: "Arable", ru: "Пахотный", uz: "Haydaladigan", definition: "(of land) used or suitable for growing crops." },
      { word: "Greenwashing", ru: "Гринвошинг", uz: "Grinvoshing", definition: "Deceptive marketing used to persuade the public that a company's products are environmentally friendly." }
    ],
    paraphrases: [
      { original: "Driven by a desire to reduce pollution", paraphrase: "Primary motivation", type: "vocabulary", explanation: "A 'desire to reduce' is a 'motivation' in IELTS questions." },
      { original: "Never met in the natural environment", paraphrase: "Specific industrial conditions to break down effectively", type: "vocabulary", explanation: "If natural conditions aren't enough, specific artificial (industrial) ones are needed." }
    ],
    paraphraseQuizzes: [
      { question: "What does 'Arable' land refer to?", options: ["Forested", "Crop-suitable", "Polluted", "Deserted"], correctAnswer: "Crop-suitable" },
      { question: "Is 'Greenwashing' a positive or negative term?", options: ["Positive", "Negative", "Neutral"], correctAnswer: "Negative" }
    ],
    questions: [
      { id: 1, text: "The primary motivation for using bioplastics is the desire to lower manufacturing costs.", answer: "NOT GIVEN", explanation: "NG - The text mentions 'pollution reduction' as the driver, but does not mention 'manufacturing costs' at all - NOT GIVEN" },
      { id: 2, text: "Bioplastics degrade rapidly when they enter the ocean.", answer: "NO", explanation: "NO - The text says they 'behave exactly like conventional plastic... they do not break down' in the ocean - NO" },
      { id: 3, text: "\"Compostable\" plastics need specific industrial conditions to break down effectively.", answer: "YES", explanation: "YES - It states they require 'industrial incinerators reaching 60°C' to degrade - YES" },
      { id: 4, text: "The writer believes that producing bioplastics can negatively impact the food supply.", answer: "YES", explanation: "YES - The text says corn for plastic 'drives up food prices' due to using arable land - YES" },
      { id: 5, text: "Companies use bioplastics to genuinely solve the problem of disposable culture.", answer: "NO", explanation: "NO - The writer says it's a 'virtuous guise' to 'continue selling disposable culture,' implying the solution is NOT genuine - NO" }
    ]
  },
  {
    id: 8,
    title: "Neuroscience & Diet",
    translations: { ru: "Нейронаука и диета", uz: "Neyrobiologiya va parhez" },
    headline: "The Oversimplification of the \"Gut-Brain Axis\"",
    content: "The link between gut bacteria and mental health is undeniably real, but the burgeoning 'psychobiotic' supplement industry is outpacing the science. Marketing claims often suggest that taking a specific probiotic can cure depression or anxiety. This is a dangerous oversimplification. The microbiome is an incredibly complex ecosystem where the interaction between thousands of species matters more than the presence of any single 'hero' bacteria. Moreover, a strain that benefits one person may be inert, or even harmful, to another depending on their baseline genetics. Until we can map these individual differences, prescribing bacteria for brain health is akin to throwing darts in the dark.",
    vocabulary: [
      { word: "Undeniably", ru: "Несомненно", uz: "Shubhasiz", definition: "Used to emphasize that something cannot be denied or disputed." },
      { word: "Burgeoning", ru: "Расцветающий", uz: "Rivojlanayotgan", definition: "Beginning to grow or increase rapidly; flourishing." },
      { word: "Outpacing", ru: "Опережающий", uz: "O'zib ketadigan", definition: "Go, move, or grow faster than; exceed." },
      { word: "Microbiome", ru: "Микробиом", uz: "Mikrobiom", definition: "The microorganisms in a particular environment (including the human body)." },
      { word: "Akin", ru: "Сродни", uz: "O'xshash", definition: "Of similar character; related." }
    ],
    paraphrases: [
      { original: "Outpacing the science", paraphrase: "Industry is ahead of evidence", type: "vocabulary", explanation: "If marketing outpaces science, it means claims are made before proof exists." },
      { original: "Akin to throwing darts in the dark", paraphrase: "Prescribing is not precise", type: "vocabulary", explanation: "Throwing darts in the dark is a metaphor for blind, unguided action (lack of precision)." }
    ],
    paraphraseQuizzes: [
      { question: "What does 'Burgeoning' imply about an industry?", options: ["Dying", "Growing fast", "Stable", "Illegal"], correctAnswer: "Growing fast" },
      { question: "If a claim is an 'oversimplification', is it accurate?", options: ["Yes", "No", "Partially"], correctAnswer: "No" }
    ],
    questions: [
      { id: 11, text: "There is no scientific evidence linking gut bacteria to mental health.", answer: "NO", explanation: "NO - The passage starts by saying the link is 'undeniably real' - NO" },
      { id: 12, text: "The writer supports the current marketing claims made by the psychobiotic industry.", answer: "NO", explanation: "NO - The writer calls these claims a 'dangerous oversimplification' - NO" },
      { id: 13, text: "The interaction between bacterial species is more important than individual strains.", answer: "YES", explanation: "YES - The text says 'interaction between thousands of species matters more than any single bacteria' - YES" },
      { id: 14, text: "Genetic differences can influence how a person reacts to probiotic supplements.", answer: "YES", explanation: "YES - The text notes reactions depend on 'baseline genetics' - YES" },
      { id: 15, text: "Doctors are currently able to map individual microbiome differences with high precision.", answer: "NO", explanation: "NO - The writer says prescribing is currently 'akin to throwing darts in the dark' because we CANNOT map these yet - NO" }
    ]
  },
  {
    id: 9,
    title: "Space Law",
    translations: { ru: "Космическое право", uz: "Kosmos huquqi" },
    headline: "Mars Does Not Belong to Us",
    content: "As private companies like SpaceX edge closer to crewed Martian missions, the legal status of the Red Planet is becoming a flashpoint. The 1967 Outer Space Treaty forbids nations from claiming sovereignty over celestial bodies, but it is silent on the rights of private corporations. Some legal scholars argue for a 'finders keepers' approach to resource extraction to encourage investment. This is a perilous path. Allowing corporate ownership of Martian territory would likely replicate the worst excesses of colonial history, creating a fractured planet run by company towns with no democratic oversight. A new, robust international framework is needed before the first boot hits the red dust.",
    vocabulary: [
      { word: "Flashpoint", ru: "Точка вспышки", uz: "Keskinlik nuqtasi", definition: "A place, event, or time at which trouble or violence flares up." },
      { word: "Sovereignty", ru: "Суверенитет", uz: "Suverenitet", definition: "The authority of a state to govern itself or another state." },
      { word: "Extraction", ru: "Извлечение", uz: "Qazib olish", definition: "The action of taking out something, especially using effort or force." },
      { word: "Perilous", ru: "Опасный", uz: "Xavfli", definition: "Full of danger or risk." },
      { word: "Oversight", ru: "Надзор", uz: "Nazorat", definition: "The action of overseeing something; supervision." }
    ],
    paraphrases: [
      { original: "Silent on the rights of private corporations", paraphrase: "Does not explicitly ban", type: "grammar", explanation: "If a treaty is 'silent', it does not mention or forbid specifically." },
      { original: "Encourage investment", paraphrase: "Stimulate financial investment", type: "vocabulary", explanation: "'Encourage' and 'Stimulate' are frequent IELTS synonyms." }
    ],
    paraphraseQuizzes: [
      { question: "What is a 'Celestial body'?", options: ["Star/Planet", "Human body", "Airplane", "Satellite"], correctAnswer: "Star/Planet" },
      { question: "What does 'Perilous' mean?", options: ["Helpful", "Dangerous", "Exciting", "Legal"], correctAnswer: "Dangerous" }
    ],
    questions: [
      { id: 16, text: "The 1967 Outer Space Treaty explicitly bans private companies from owning land in space.", answer: "NO", explanation: "NO - The text says the treaty 'is silent on the rights of private corporations,' meaning it does NOT explicitly ban them - NO" },
      { id: 17, text: "Some experts believe that allowing resource ownership would stimulate financial investment.", answer: "YES", explanation: "YES - Scholars argue for ownership 'to encourage investment' - YES" },
      { id: 18, text: "SpaceX has officially claimed territory on Mars.", answer: "NOT GIVEN", explanation: "NG - SpaceX is mentioned as getting 'closer' to missions, but no 'official claim' is mentioned - NOT GIVEN" },
      { id: 19, text: "The writer believes that corporate ownership of Mars would lead to democratic governance.", answer: "NO", explanation: "NO - The writer says it would create 'company towns with no democratic oversight' - NO" },
      { id: 20, text: "A new legal framework is required before humans land on Mars.", answer: "YES", explanation: "YES - The text concludes: 'A new... framework is needed before the first boot hits the red dust' - YES" }
    ]
  },
  {
    id: 10,
    title: "Paleoanthropology",
    translations: { ru: "Палеоантропология", uz: "Paleoantropologiya" },
    headline: "Rethinking the Hunter-Gatherer",
    content: "The popular image of early humans as strict 'hunter-gatherers'—where men hunted big game and women foraged for plants—is being dismantled by new forensic evidence. Analysis of protein residues on ancient tools suggests that trapping small game and fishing were communal activities involving all gender and age groups. Furthermore, the discovery of female skeletons buried with big-game hunting weapons in the Andes contradicts the rigid division of labour often projected onto the past. It appears our ancestors were far more opportunistic and fluid in their roles than modern gender stereotypes suggest. The 'Man the Hunter' narrative tells us more about the 20th-century archaeologists who wrote it than the people who actually lived it.",
    vocabulary: [
      { word: "Dismantled", ru: "Демонтированный", uz: "Buzilgan", definition: "Take (a structure or machine) to pieces; pull down or take apart." },
      { word: "Forensic", ru: "Судебно-медицинский", uz: "Sud-ekspertiza", definition: "Relating to the application of scientific methods and techniques to the investigation of crime or the past." },
      { word: "Residues", ru: "Остатки", uz: "Qoldiqlar", definition: "A small amount of something that remains after the main part has gone or been taken." },
      { word: "Communal", ru: "Коммунальный", uz: "Umumiy", definition: "Shared by all members of a community; for common use." },
      { word: "Stereotypes", ru: "Стереотипы", uz: "Sizningcha", definition: "A widely held but fixed and oversimplified image or idea of a particular type of person or thing." }
    ],
    paraphrases: [
      { original: "Is being dismantled", paraphrase: "New evidence contradicts the old idea", type: "vocabulary", explanation: "To dismantle a theory is to prove it wrong using evidence." },
      { original: "Involving all gender and age groups", paraphrase: "Not restricted to males", type: "grammar", explanation: "If 'all' are involved, it is by definition not 'restricted' to one group." }
    ],
    paraphraseQuizzes: [
      { question: "What is 'Big game'?", options: ["Sports", "Large animals", "Ancient toys", "Tall trees"], correctAnswer: "Large animals" },
      { question: "What does 'Communal' mean?", options: ["Private", "Secret", "Shared", "Dangerous"], correctAnswer: "Shared" }
    ],
    questions: [
      { id: 21, text: "New evidence supports the idea that men and women had strictly separated roles in early human societies.", answer: "NO", explanation: "NO - The text says the strict hunter-gatherer image is 'being dismantled' and ancestors were 'fluid in their roles' - NO" },
      { id: 22, text: "Fishing was likely an activity restricted to adult males.", answer: "NO", explanation: "NO - It states fishing was a 'communal activity involving all gender and age groups' - NO" },
      { id: 23, text: "Female skeletons have been found buried with weapons used for hunting large animals.", answer: "YES", explanation: "YES - It mentions 'female skeletons buried with big-game hunting weapons' - YES" },
      { id: 24, text: "The writer implies that 20th-century archaeologists were biased by their own modern stereotypes.", answer: "YES", explanation: "YES - The text says the old narrative 'tells us more about the 20th-century archaeologists who wrote it' - YES" },
      { id: 25, text: "Protein analysis on tools is the only method used to determine ancient diets.", answer: "NOT GIVEN", explanation: "NG - It mentions protein analysis and skeleton discovery, but never says protein analysis is the 'only' method - NOT GIVEN" }
    ]
  }
];
