export interface SuggestionQuestion {
  id: string;
  question: string;
  answers: string[];
}

export const suggestionQuestions: SuggestionQuestion[] = [
  {
    id: '1',
    question: 'Can I get a location?',
    answers: [
      'A haunted IKEA after closing time',
      'Inside a giant\'s pocket',
      'The DMV on another planet',
      'A yoga class for cats',
      'The last Blockbuster Video',
      'Inside a fortune cookie factory',
      'A speed dating event at a funeral home',
      'The bathroom at a superhero convention',
      'A Black Friday sale at a meditation retreat',
      'Inside someone\'s anxiety dream',
      'A drive-thru confessional',
      'The lost and found at Hogwarts',
      'A couples therapy session for garden gnomes',
      'Inside a vending machine',
      'The waiting room at a time travel agency'
    ]
  },
  {
    id: '2',
    question: 'Can I get a relationship?',
    answers: [
      'Rival food truck owners',
      'A ghost and their haunted house\'s real estate agent',
      'Two AIs who just became sentient',
      'A mime and someone who won\'t stop talking',
      'Roommates who are both secretly superheroes',
      'A dragon and their hoard organizer',
      'Time travelers who keep meeting in the wrong order',
      'A vampire and their overly enthusiastic life coach',
      'Two aliens pretending to be human coworkers',
      'A pirate and their passive-aggressive parrot',
      'Competitive yard sale enthusiasts',
      'A wizard and their tech support',
      'Two people who only communicate through fortune cookies',
      'A perfectionist and a chaos demon',
      'Sworn enemies who got stuck in an elevator'
    ]
  },
  {
    id: '3',
    question: 'Can I get an object?',
    answers: [
      'A rubber chicken with a law degree',
      'A self-help book written by a cat',
      'A GPS that only gives directions in haikus',
      'A magic 8-ball that\'s too honest',
      'A diary that writes back',
      'A sock that\'s plotting revenge',
      'A toaster that\'s achieved enlightenment',
      'A motivational poster that\'s given up',
      'A smartphone with commitment issues',
      'A house plant with delusions of grandeur',
      'An alarm clock that\'s always running late',
      'A mirror that only shows your potential',
      'A coffee mug with trust issues',
      'A pen that only writes the truth',
      'A doorknob that\'s afraid of commitment'
    ]
  },
  {
    id: '4',
    question: 'Can I get an occupation?',
    answers: [
      'Professional fortune cookie writer having an existential crisis',
      'Zamboni driver for the Olympics',
      'Therapist for fictional characters',
      'Professional apologizer',
      'Dinosaur wrangler at a museum',
      'Social media manager for ghosts',
      'Professional Netflix password sharer',
      'Translator for passive-aggressive comments',
      'Life coach for procrastinators',
      'Professional third wheel',
      'Escape room designer who\'s claustrophobic',
      'Motivational speaker for villains',
      'Professional line-stander',
      'Uber driver for time travelers',
      'Customer service rep for superhero complaints'
    ]
  },
  {
    id: '5',
    question: 'Can I get an emotion?',
    answers: [
      'Aggressively optimistic',
      'Passive-aggressively helpful',
      'Enthusiastically confused',
      'Reluctantly excited',
      'Competitively relaxed',
      'Suspiciously cheerful',
      'Cautiously rebellious',
      'Professionally awkward',
      'Desperately nonchalant',
      'Militantly indecisive',
      'Romantically paranoid',
      'Sarcastically supportive',
      'Nervously confident',
      'Politely furious',
      'Dramatically underwhelmed'
    ]
  },
  {
    id: '6',
    question: 'Can I get a problem to solve?',
    answers: [
      'Your shadow has gone on strike',
      'You can only speak in questions',
      'Everything you touch turns to glitter',
      'You\'re allergic to your own thoughts',
      'Your reflection is living a better life than you',
      'You can only move in slow motion',
      'Your inner monologue is audible to everyone',
      'You\'ve been hired to teach dolphins stand-up comedy',
      'Your dreams are being livestreamed',
      'You can only communicate through interpretive dance',
      'Your furniture has started a union',
      'You\'re stuck in an infomercial',
      'Your autobiography is writing itself and you don\'t like it',
      'You can only speak in rhyming couplets',
      'Your smartphone has become sentient and judgmental'
    ]
  },
  {
    id: '7',
    question: 'Can I get a superpower?',
    answers: [
      'The ability to always know what dogs are thinking (it\'s mostly about food)',
      'Can make anyone yawn on command',
      'Perfect parallel parking every time',
      'Can taste colors but only on Tuesdays',
      'Always knows the exact right amount of pasta to cook',
      'Can communicate with houseplants but they\'re all gossips',
      'Instantly knows everyone\'s middle name',
      'Can summon any condiment at will',
      'Always catches the USB on the right side',
      'Can make anyone feel like they\'re about to sneeze',
      'Knows the location of every missing sock',
      'Can speak fluent baby talk',
      'Always guesses the exact time without looking',
      'Can make elevators arrive immediately',
      'Instantly knows if someone is a cat or dog person'
    ]
  },
  {
    id: '8',
    question: 'Can I get a genre?',
    answers: [
      'Film noir but everyone\'s really cheerful',
      'A cooking show during the apocalypse',
      'Shakespeare but with modern slang',
      'A nature documentary about office life',
      'A superhero story where everyone\'s really tired',
      'A romantic comedy at the DMV',
      'A heist movie but they\'re stealing feelings',
      'A western but it\'s in a shopping mall',
      'A horror movie where the monster just wants friends',
      'A sports movie about competitive napping',
      'A spy thriller at a kindergarten',
      'A musical about doing taxes',
      'A soap opera in space',
      'A buddy cop movie with mimes',
      'A fantasy epic about middle management'
    ]
  },
  {
    id: '9',
    question: 'Can I get a celebrity?',
    answers: [
      'Gordon Ramsay teaching meditation',
      'Bob Ross having road rage',
      'Oprah working at the DMV',
      'The Rock as a librarian',
      'Morgan Freeman who\'s lost his voice',
      'Betty White as a drill sergeant',
      'David Attenborough narrating a frat party',
      'Martha Stewart in prison (again)',
      'Nicolas Cage as a yoga instructor',
      'Samuel L. Jackson at a kids\' birthday party',
      'Dolly Parton as a bouncer',
      'Christopher Walken giving a TED talk',
      'RuPaul as a tax attorney',
      'Keanu Reeves but he\'s really mean',
      'Danny DeVito as a basketball coach'
    ]
  },
  {
    id: '10',
    question: 'Can I get a historical figure?',
    answers: [
      'Napoleon with a height positivity blog',
      'Shakespeare trying to understand Gen Z slang',
      'Cleopatra running a pyramid scheme',
      'Einstein working tech support',
      'Leonardo da Vinci with artist\'s block',
      'Joan of Arc as a life coach',
      'Julius Caesar at a team-building retreat',
      'Marie Antoinette as a budget advisor',
      'Socrates who hates questions',
      'Beethoven as a DJ',
      'Vikings running a customer service hotline',
      'Nostradamus who\'s always wrong',
      'King Arthur at an escape room',
      'Harriet Tubman as an Uber driver',
      'Galileo as a flat-earth conspiracy theorist'
    ]
  }
];

export function getRandomQuestions(count: number = 3): SuggestionQuestion[] {
  const shuffled = [...suggestionQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getRandomAnswer(questionId: string): string {
  const question = suggestionQuestions.find(q => q.id === questionId);
  if (!question) return 'The audience is thinking...';
  
  const randomIndex = Math.floor(Math.random() * question.answers.length);
  return question.answers[randomIndex];
}