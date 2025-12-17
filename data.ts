
import { ReadingModule } from './types';

export const ACADEMIC_MODULES: ReadingModule[] = [
  {
    id: "vol-1",
    moduleTitle: "Academic Reading Vol. 1",
    vocabSection: [
      {
        word: "Rampart",
        definition: "A defensive wall of a castle or walled city.",
        ru: "Крепостной вал",
        uz: "Mudofaa devori",
        quiz: { question: "The soldiers stood on the ____ to watch for enemies.", answer: "rampart", options: ["rampart", "threshold", "ditch"] }
      },
      {
        word: "Inhospitable",
        definition: "(of an environment) harsh and difficult to live in.",
        ru: "Негостеприимный",
        uz: "Noqulay",
        quiz: { question: "The desert is an ____ place for humans.", answer: "inhospitable", options: ["inhospitable", "resilient", "nuanced"] }
      },
      {
        word: "Extinguish",
        definition: "To cause to cease to exist; to wipe out completely.",
        ru: "Истреблять",
        uz: "Yo'q qilmoq",
        quiz: { question: "The ancient tribe was ____ after the great drought.", answer: "extinguished", options: ["extinguished", "descended", "proliferated"] }
      },
      {
        word: "Resilience",
        definition: "The capacity to recover quickly from difficulties; toughness.",
        ru: "Стойкость",
        uz: "Chidamlilik",
        quiz: { question: "The ancient tribe showed amazing ____ by surviving.", answer: "resilience", options: ["resilience", "mitigation", "extraction"] }
      }
    ],
    grammarSection: {
      topic: "Nominalization",
      explanation: "Turning verbs/adjectives into nouns to make text sound objective and academic.",
      quiz: [
        { original: "The population grew rapidly.", transform: "The rapid ____ of the population.", answer: "growth" },
        { original: "The chemical reacted violently.", transform: "The violent ____ of the chemical.", answer: "reaction" },
        { original: "We must analyse the data carefully.", transform: "Careful ____ of the data is required.", answer: "analysis" }
      ]
    },
    testData: {
      timerSeconds: 3600,
      passages: [
        {
          id: "p1",
          title: "The Ancient Empire That Civilization Forgot",
          content: `No pillars or high walls mark the ruins of Hattusa today; just stone foundations and gateways scattered across the central Anatolian plateau. Yet for five centuries, this city was the capital of the Hittite Empire, a superpower that rivaled ancient Egypt and Babylon. The Hittites were the first to record their language in cuneiform script and were among the first to master ironworking. They were known for their military prowess, particularly their use of light, three-person chariots that gave them a tactical advantage in battle.

The most significant event in Hittite history was the Battle of Kadesh in 1274 B.C., a massive chariot battle against the Egyptian forces of Ramses II. While the battle itself ended in a stalemate, it resulted in the world’s first recorded peace treaty, a copy of which is displayed today at the United Nations headquarters. Despite their power, the Hittites were eventually forgotten by history books until digs in the early 1900s finally unearthed their capital, confirming suspicions that a third great power had once existed alongside Egypt and Mesopotamia.

The environment around Hattusa was inhospitable, with scorching summers and frigid winters. The plains were bone-dry for most of the year. To survive, the Hittites built massive granaries and sophisticated water systems. They herded tens of thousands of sheep and goats to ensure food security. However, their empire was fragile. Internal civil wars and constant threats from the Kaska, northern raiders, weakened their grip. Eventually, Hattusa appears to have been emptied out slowly, with valuable items removed before a final fire destroyed the empty structures. Unlike other cities sacked by invaders, Hattusa was simply abandoned by a people who had reached their environmental and political threshold.`,
          questions: [
            { id: 1, type: "TFNG", text: "The ruins of Hattusa are currently marked by tall pillars and high walls that are still standing.", correctAnswer: "FALSE" },
            { id: 2, type: "TFNG", text: "The Hittite Empire was less powerful than the Egyptian and Babylonian empires during its peak.", correctAnswer: "FALSE" },
            { id: 3, type: "TFNG", text: "The Battle of Kadesh led to the creation of the first known peace treaty in history.", correctAnswer: "TRUE" },
            { id: 4, type: "TFNG", text: "Archaeological excavations in the early 1900s confirmed the location of the Hittite capital.", correctAnswer: "TRUE" },
            { id: 5, type: "TFNG", text: "The Hittite capital was located in an area with a mild climate and consistent rainfall.", correctAnswer: "FALSE" },
            { id: 6, type: "GAP_FILL", text: "For centuries, the Hittites were forgotten, unlike the ____ or Assyrians.", limit: "ONE_WORD", correctAnswer: "Egyptians" },
            { id: 7, type: "GAP_FILL", text: "Evidence was first found in carvings on Egyptian ____.", limit: "ONE_WORD", correctAnswer: "temples" },
            { id: 8, type: "GAP_FILL", text: "Confirmation came from the discovery of ____ tablets.", limit: "ONE_WORD", correctAnswer: "clay" },
            { id: 9, type: "GAP_FILL", text: "The nearby plains were ____ for most of the year.", limit: "ONE_WORD", correctAnswer: "bone-dry" },
            { id: 10, type: "SHORT_ANSWER", text: "What animals did the Hittites herd to ensure they had food?", correctAnswer: "sheep and goats" },
            { id: 11, type: "SHORT_ANSWER", text: "Who were the northern raiders that constantly threatened the Empire?", correctAnswer: "the kaska" },
            { id: 12, type: "SHORT_ANSWER", text: "What natural phenomenon frequently damaged the heartland?", correctAnswer: "earthquakes" },
            { id: 13, type: "SHORT_ANSWER", text: "What is the abandonment of Hattusa compared to, given that valuable items were removed?", correctAnswer: "emptied out slowly" }
          ]
        },
        {
          id: "p2",
          title: "The Economics of Attention",
          content: `In the digital age, attention is the new oil. Large technology firms do not primarily sell software; they sell the certainty that a user’s gaze will linger on a specific advertisement or piece of content. This 'attention economy' operates on the principle that in an environment of infinite information, attention is the only scarce resource. As the psychologist Herbert Simon predicted decades ago, a wealth of information creates a poverty of attention.

This economy suffers from significant externalities. Just as a factory might pollute a physical river to lower its production costs, attention-capture algorithms can 'pollute' the cognitive environment. They favor outrage, polarization, and sensationalism because these emotions are most effective at keeping users engaged. The result is a fragmented public sphere and a decline in collective focus.

Digital minimalism has emerged as a response to this commodification. Proponents argue that we must reclaim our sovereign attention by curating our digital environments and prioritizing high-quality, long-form information over addictive social media loops. Some economists suggest a shift in business models is necessary, moving from ad-supported platforms to subscription-based services that align the platform's incentives with the user's well-being.`,
          questions: [
            { id: 14, type: "MCQ", text: "What is the primary product sold by major Silicon Valley companies?", options: ["Free software", "Hardware devices", "User attention", "Data security"], correctAnswer: "C" },
            { id: 15, type: "MCQ", text: "What does 'cognitive pollution' refer to in the text?", options: ["Excessive noise", "Decline in focus", "Bad internet", "Fake news"], correctAnswer: "B" },
            { id: 16, type: "MCQ", text: "Why do algorithms favor outrage and polarization?", options: ["User safety", "Better UI", "Higher engagement", "Legal compliance"], correctAnswer: "C" },
            { id: 17, type: "GAP_FILL", text: "A fundamental change in ____ models might be necessary.", limit: "ONE_WORD", correctAnswer: "business" },
            { id: 18, type: "GAP_FILL", text: "Moving towards ____ services could align incentives.", limit: "ONE_WORD", correctAnswer: "subscription" },
            { id: 19, type: "GAP_FILL", text: "Digital minimalism treats attention as a valuable ____.", limit: "ONE_WORD", correctAnswer: "asset" }
          ]
        },
        {
          id: "p3",
          title: "Climate Tipping Points",
          content: `The concept of 'tipping points' in the climate system refers to critical thresholds where a small change can push a system into a completely new state—often one that is irreversible. Scientists identify several major tipping points that could trigger cascading failures across the globe.

One such point is the Amazon rainforest. If deforestation reaches a certain percentage, the forest will lose its ability to generate its own rainfall, turning it into a dry savanna and releasing massive amounts of stored carbon. Another is the Atlantic Meridional Overturning Circulation (AMOC), the current that regulates the climate of the Northern Hemisphere. A collapse of the AMOC would lead to much harsher winters in Europe and disrupted monsoons in the tropics.

Addressing these risks requires 'frontloaded' mitigation pathways. This means deep decarbonization must happen now rather than later. However, positive tipping points also exist. For example, as renewable energy becomes cheaper and more widespread, it can trigger a rapid mass adoption that displaces fossil fuels much faster than traditional models predict. The challenge for policymakers is to tip the world away from catastrophic outcomes and toward these positive, self-reinforcing loops.`,
          questions: [
            { id: 27, type: "TFNG", text: "The destruction of the Amazon would have a negligible effect on carbon emissions.", correctAnswer: "FALSE" },
            { id: 28, type: "TFNG", text: "The collapse of AMOC would lead to milder winters in Europe.", correctAnswer: "FALSE" },
            { id: 29, type: "TFNG", text: "Solar power is an example of a positive tipping point already crossed.", correctAnswer: "TRUE" },
            { id: 30, type: "GAP_FILL", text: "Amazon is in danger of turning into a ____.", limit: "TWO_WORDS", correctAnswer: "dry savanna" },
            { id: 31, type: "GAP_FILL", text: "The ____ regulates Northern Hemisphere climate.", limit: "ONE_WORD", correctAnswer: "AMOC" },
            { id: 32, type: "FLOW_CHART", text: "Technology becomes ____ and better.", correctAnswer: "cheaper" },
            { id: 33, type: "FLOW_CHART", text: "Rapid mass ____ occurs.", correctAnswer: "adoption" },
            { id: 34, type: "FLOW_CHART", text: "Triggers ____ across other sectors.", correctAnswer: "cascades" }
          ]
        }
      ]
    }
  }
];
