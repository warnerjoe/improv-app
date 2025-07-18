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
      'IKEA',
      'The DMV',
      'A submarine',
      'Mount Everest',
      'A food truck',
      'The International Space Station',
      'A library',
      'Venice',
      'A casino',
      'The London Underground',
      'A lighthouse',
      'Antarctica',
      'A vineyard',
      'Times Square',
      'A cave'
    ]
  },
  {
    id: '2',
    question: 'Can I get a relationship?',
    answers: [
      'Siblings',
      'Doctor and patient',
      'Roommates',
      'Parent and child',
      'Best friends',
      'Coworkers',
      'Teacher and student',
      'Neighbors',
      'Ex-lovers',
      'Business partners',
      'Rivals',
      'Mentor and apprentice',
      'Strangers',
      'Married couple',
      'Detective and suspect'
    ]
  },
  {
    id: '3',
    question: 'Can I get an object?',
    answers: [
      'A rubber chicken',
      'A telescope',
      'A diary',
      'A snow globe',
      'A harmonica',
      'A lava lamp',
      'A typewriter',
      'A compass',
      'A disco ball',
      'A cactus',
      'A boomerang',
      'A kaleidoscope',
      'A pocket watch',
      'A ukulele',
      'A crystal ball'
    ]
  },
  {
    id: '4',
    question: 'Can I get an occupation?',
    answers: [
      'Dentist',
      'Firefighter',
      'Wedding planner',
      'Archaeologist',
      'Pilot',
      'Chef',
      'Private investigator',
      'Yoga instructor',
      'Librarian',
      'Park ranger',
      'DJ',
      'Therapist',
      'Mechanic',
      'Marine biologist',
      'Flight attendant'
    ]
  },
  {
    id: '5',
    question: 'Can I get an emotion?',
    answers: [
      'Jealous',
      'Excited',
      'Paranoid',
      'Nostalgic',
      'Frustrated',
      'Confident',
      'Anxious',
      'Curious',
      'Disappointed',
      'Grateful',
      'Suspicious',
      'Hopeful',
      'Embarrassed',
      'Proud',
      'Confused'
    ]
  },
  {
    id: '6',
    question: 'Can I get an activity?',
    answers: [
      'Baking a cake',
      'Moving furniture',
      'Learning to dance',
      'Building a sandcastle',
      'Planning a heist',
      'Training for a marathon',
      'Painting a portrait',
      'Assembling IKEA furniture',
      'Playing chess',
      'Gardening',
      'Writing a song',
      'Packing for vacation',
      'Teaching someone to drive',
      'Hosting a dinner party',
      'Solving a puzzle'
    ]
  },
  {
    id: '7',
    question: 'Can I get a genre or style?',
    answers: [
      'Film noir',
      'Western',
      'Shakespeare',
      'Soap opera',
      'Documentary',
      'Horror',
      'Romantic comedy',
      'Science fiction',
      'Musical theatre',
      'Infomercial',
      'Sports commentary',
      'Nature documentary',
      'Silent film',
      'Superhero',
      'Fairy tale'
    ]
  },
  {
    id: '8',
    question: 'Can I get a celebrity?',
    answers: [
      'Gordon Ramsay',
      'Oprah Winfrey',
      'The Rock',
      'Morgan Freeman',
      'Betty White',
      'David Attenborough',
      'Martha Stewart',
      'Nicolas Cage',
      'Samuel L. Jackson',
      'Dolly Parton',
      'Christopher Walken',
      'RuPaul',
      'Keanu Reeves',
      'Danny DeVito',
      'Meryl Streep'
    ]
  },
  {
    id: '9',
    question: 'Can I get a historical figure?',
    answers: [
      'Napoleon',
      'Cleopatra',
      'Shakespeare',
      'Einstein',
      'Leonardo da Vinci',
      'Joan of Arc',
      'Julius Caesar',
      'Marie Antoinette',
      'Socrates',
      'Beethoven',
      'Abraham Lincoln',
      'Queen Elizabeth I',
      'Galileo',
      'Harriet Tubman',
      'King Arthur'
    ]
  },
  {
    id: '10',
    question: 'Can I get a non-geographical location?',
    answers: [
      'Inside a dream',
      'Heaven',
      'The past',
      'A parallel universe',
      'Inside a video game',
      'The internet',
      'Someone\'s imagination',
      'A memory',
      'The afterlife',
      'Inside a painting',
      'A black hole',
      'The future',
      'Purgatory',
      'Inside a book',
      'Another dimension'
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