
import { ReadingModule } from './types';

export const ACADEMIC_MODULES: ReadingModule[] = [
  {
    id: "ynng-mastery",
    category: 'skill-training',
    moduleTitle: "Y/N/NG Mastery Lab",
    vocabSection: [],
    grammarSection: { topic: "Logical Connectives", explanation: "Finding contradictions.", quiz: [] },
    testData: {
      timerSeconds: 2700,
      passages: [
        {
          id: "cosmo",
          title: "Cosmology",
          translations: { ru: "Космология", uz: "Kosmologiya" },
          headline: "The Crisis in Cosmology is Getting Worse",
          content: "The standard model of cosmology, Lambda-CDM, has long been the bedrock of our understanding of the universe. It successfully explains the cosmic microwave background (CMB) and the distribution of galaxies. However, a deepening fissure known as the 'Hubble Tension'—the discrepancy between the expansion rate of the universe measured locally versus that predicted by the CMB—refuses to heal. Recent data from the James Webb Space Telescope has seemingly exacerbated the problem, ruling out measurement error as a convenient scapegoat. While some theorists propose 'Early Dark Energy' as a patch, others argue this is merely adding epicycles to a dying theory. We may be forcing observations to fit a model that is fundamentally broken, suggesting that our grasp of gravity on cosmic scales requires a complete paradigm shift rather than minor tweaks.",
          questions: [
            { id: 1, type: 'YNNG', text: "The Lambda-CDM model has failed to explain the distribution of galaxies.", correctAnswer: "NO" },
            { id: 2, type: 'YNNG', text: "The data from the James Webb Space Telescope has helped resolve the Hubble Tension.", correctAnswer: "NO" },
            { id: 3, type: 'YNNG', text: "Measurement error is no longer considered a likely cause of the discrepancy.", correctAnswer: "YES" },
            { id: 4, type: 'YNNG', text: "'Early Dark Energy' is universally accepted by physicists as the correct solution.", correctAnswer: "NOT GIVEN" },
            { id: 5, type: 'YNNG', text: "The writer suggests that a completely new theory of gravity might be necessary.", correctAnswer: "YES" }
          ]
        },
        {
          id: "ai",
          title: "Artificial Intelligence",
          translations: { ru: "Искусственный интеллект", uz: "Sun'iy intellekt" },
          headline: "The Jevons Paradox of AI Efficiency",
          content: "There is a seductive logic in the tech industry that more efficient AI chips will naturally lead to a lower carbon footprint. This optimism, however, ignores the Jevons Paradox: as technology increases the efficiency with which a resource is used, the total consumption of that resource increases rather than decreases. As neural networks become cheaper to run, they are being integrated into trivial applications—from smart toasters to email auto-completes—where they were previously cost-prohibitive. Consequently, the aggregate energy demand of the sector is skyrocketing. Unless regulatory caps are imposed, efficiency gains will essentially cannibalise themselves, leading to a net increase in global emissions regardless of how 'green' the individual processors become.",
          questions: [
            { id: 6, type: 'YNNG', text: "The tech industry generally believes that efficiency leads to reduced energy consumption.", correctAnswer: "YES" },
            { id: 7, type: 'YNNG', text: "The integration of AI into household appliances like toasters is currently declining.", correctAnswer: "NOT GIVEN" },
            { id: 8, type: 'YNNG', text: "The Jevons Paradox suggests that efficiency gains result in lower overall resource use.", correctAnswer: "NO" },
            { id: 9, type: 'YNNG', text: "Smart toasters use more energy than standard toasters.", correctAnswer: "NOT GIVEN" },
            { id: 10, type: 'YNNG', text: "The writer believes that government regulation is necessary to stop the rise in emissions.", correctAnswer: "YES" }
          ]
        },
        {
          id: "bioethics",
          title: "Bioethics",
          translations: { ru: "Биоэтика", uz: "Bioetika" },
          headline: "Redefining the Human Embryo",
          content: "The creation of 'synthetic embryos' from stem cells—without the use of sperm or eggs—has bypassed the traditional biological definition of conception. While these structures offer an unparalleled window into the 'black box' of early human development, they exist in a legal and ethical vacuum. Current guidelines, such as the 14-day rule which limits how long embryos can be grown in the lab, were written for natural embryos. Proponents argue these synthetic models are not truly 'human' as they lack the potential to develop into a fetus. However, as these models become increasingly sophisticated, mimicking heartbeats and brain precursors, the distinction between 'model' and 'life' is collapsing, necessitating a frantic update to bioethical frameworks that are decades out of date.",
          questions: [
            { id: 11, type: 'YNNG', text: "Synthetic embryos provide insights into early development that were previously inaccessible.", correctAnswer: "YES" },
            { id: 12, type: 'YNNG', text: "The 14-day rule was specifically designed to regulate synthetic embryos.", correctAnswer: "NO" },
            { id: 13, type: 'YNNG', text: "Scientists have successfully grown a synthetic embryo into a full-term fetus.", correctAnswer: "NOT GIVEN" },
            { id: 14, type: 'YNNG', text: "Supporters of synthetic embryos claim they are biologically identical to natural human embryos.", correctAnswer: "NO" },
            { id: 15, type: 'YNNG', text: "The writer feels that current bioethical laws are sufficient to handle these new developments.", correctAnswer: "NO" }
          ]
        },
        {
          id: "plantbio",
          title: "Plant Biology",
          translations: { ru: "Биология растений", uz: "O'simliklar biologiyasi" },
          headline: "The Controversy of 'Plant Intelligence'",
          content: "To describe plants as 'intelligent' is to invite scorn from orthodox biologists, who argue that cognition requires a central nervous system. Yet, recent experiments demonstrate that plants can learn from experience, communicate via fungal networks, and even count. The mimosa plant, for instance, learns to ignore harmless stimuli while retaining defensive reflexes for real threats. The reluctance to label this 'intelligence' stems from an animal-centric bias in our language rather than a lack of biological complexity. If we define intelligence as the ability to process information and solve problems to ensure survival, then plants are not merely passive scenery, but cognitive agents in their own right.",
          questions: [
            { id: 16, type: 'YNNG', text: "Most traditional biologists accept the idea that plants are intelligent.", correctAnswer: "NO" },
            { id: 17, type: 'YNNG', text: "The mimosa plant shows the ability to distinguish between dangerous and safe stimuli.", correctAnswer: "YES" },
            { id: 18, type: 'YNNG', text: "Plants use fungal networks to share nutrients with weaker plants.", correctAnswer: "NOT GIVEN" },
            { id: 19, type: 'YNNG', text: "The writer believes the definition of intelligence should be limited to organisms with brains.", correctAnswer: "NO" },
            { id: 20, type: 'YNNG', text: "The refusal to call plants intelligent is caused by a bias towards animal biology.", correctAnswer: "YES" }
          ]
        },
        {
          id: "geoengineering",
          title: "Geoengineering",
          translations: { ru: "Геоинженерия", uz: "Geoinjeneriya" },
          headline: "The Trap of Termination Shock",
          content: "Solar radiation modification (SRM)—spraying aerosols into the stratosphere to reflect sunlight—is often touted as a cheap, rapid fix for global warming. Technically, it is feasible. Politically and ecologically, however, it is a minefield. The most terrifying risk is 'termination shock.' If a geoengineering program were to be launched and then suddenly stopped—perhaps due to war, terrorism, or economic collapse—the masked warming would rebound with catastrophic speed. The global temperature could spike by several degrees within a decade, shattering ecosystems that cannot adapt that quickly. Thus, starting SRM is not just an engineering decision; it is a commitment to maintain a technological life-support system for centuries, with no easy exit strategy.",
          questions: [
            { id: 21, type: 'YNNG', text: "Solar radiation modification is considered technically impossible to achieve.", correctAnswer: "NO" },
            { id: 22, type: 'YNNG', text: " 'Termination shock' would result in a gradual, manageable rise in temperatures.", correctAnswer: "NO" },
            { id: 23, type: 'YNNG', text: "Political instability could potentially cause the sudden cessation of an SRM program.", correctAnswer: "YES" },
            { id: 24, type: 'YNNG', text: "Ecosystems would be able to adapt to the temperature spike caused by termination shock.", correctAnswer: "NO" },
            { id: 25, type: 'YNNG', text: "The writer views SRM as a temporary solution that is easy to stop once started.", correctAnswer: "NO" }
          ]
        }
      ]
    }
  },
  {
    id: "vol-1",
    category: 'full-test',
    moduleTitle: "Academic Reading Vol. 1",
    vocabSection: [
      {
        word: "Rampart",
        definition: "A defensive wall of a castle or walled city.",
        ru: "Крепостной вал",
        uz: "Mudofaa devori",
        quiz: { question: "The soldiers stood on the ____ to watch for enemies.", answer: "rampart", options: ["rampart", "threshold", "ditch"] }
      }
    ],
    grammarSection: {
      topic: "Nominalization",
      explanation: "Turning verbs into nouns for academic tone.",
      quiz: [{ original: "The population grew rapidly.", transform: "The rapid ____ of the population.", answer: "growth" }]
    },
    testData: {
      timerSeconds: 3600,
      passages: [
        {
          id: "p1",
          title: "The Ancient Empire",
          headline: "The Hittites: The Empire That History Forgot",
          content: `No pillars or high walls mark the ruins of Hattusa today; just stone foundations...`,
          questions: [
            { id: 1, type: "TFNG", text: "The ruins of Hattusa are currently marked by tall pillars...", correctAnswer: "FALSE" }
          ]
        }
      ]
    }
  }
];
