export interface WarmupExercise {
  id: string;
  name: string;
  description: string;
  purpose: string;
  playerCount: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'voice' | 'body' | 'focus' | 'listening' | 'creativity' | 'energy';
  instructions: string[];
}

export const warmupExercises: WarmupExercise[] = [
  {
    id: '1',
    name: 'Red Ball',
    description: 'A classic circle game that builds focus, eye contact, and group awareness through passing an imaginary ball.',
    purpose: 'Develops focus, eye contact, and group connection',
    playerCount: '6+',
    duration: '5-10 min',
    difficulty: 'beginner',
    category: 'focus',
    instructions: [
      'Stand in a circle',
      'One person starts with an imaginary red ball',
      'Make eye contact with someone across the circle',
      'Say "Red ball [Name]" and mime throwing it',
      'Receiver catches it and passes to someone else',
      'Add more balls with different actions (blue ball bounce, green ball roll, etc.)'
    ]
  },
  {
    id: '2',
    name: 'Yes, And Circle',
    description: 'Practice the fundamental improv principle of agreement and building in a supportive circle format.',
    purpose: 'Reinforces the "Yes, And" principle of acceptance and building',
    playerCount: '4-12',
    duration: '5-8 min',
    difficulty: 'beginner',
    category: 'listening',
    instructions: [
      'Stand in a circle',
      'One person makes a simple statement',
      'Next person says "Yes, and..." then adds to the idea',
      'Continue around the circle building on the story',
      'Keep statements positive and additive',
      'Reset with a new topic when story gets too complex'
    ]
  },
  {
    id: '3',
    name: 'Vocal Warm-up Sequence',
    description: 'A series of vocal exercises to prepare the voice for performance and build vocal range.',
    purpose: 'Warms up vocal cords and expands vocal range',
    playerCount: '1+',
    duration: '8-12 min',
    difficulty: 'beginner',
    category: 'voice',
    instructions: [
      'Start with gentle humming to wake up the voice',
      'Lip trills (motorboat sounds) up and down scales',
      'Tongue twisters: "Red leather, yellow leather"',
      'Vowel sounds: A-E-I-O-U with different emotions',
      'Project voice to back of room: "Good morning!"',
      'End with gentle humming again'
    ]
  },
  {
    id: '4',
    name: 'Mirror Exercise',
    description: 'Two players mirror each other\'s movements to build connection and physical awareness.',
    purpose: 'Builds physical awareness, connection, and presence',
    playerCount: '2+',
    duration: '5-8 min',
    difficulty: 'beginner',
    category: 'body',
    instructions: [
      'Partner A leads, Partner B mirrors exactly',
      'Start with slow, simple movements',
      'Maintain eye contact throughout',
      'Switch roles after 2-3 minutes',
      'Try without designated leader - mutual following',
      'Focus on precision and connection, not speed'
    ]
  },
  {
    id: '5',
    name: 'Energy Ball',
    description: 'Pass different types of energy around a circle using body language and vocalization.',
    purpose: 'Builds energy, physicality, and group dynamics',
    playerCount: '6+',
    duration: '5-10 min',
    difficulty: 'intermediate',
    category: 'energy',
    instructions: [
      'Stand in a circle',
      'Start with a "hot" energy ball - quick, urgent movements',
      'Pass it with appropriate body language and sounds',
      'Try different energies: cold, heavy, light, electric',
      'Let the energy transform as it moves around',
      'End with group releasing all the energy together'
    ]
  },
  {
    id: '6',
    name: 'Word Association Circle',
    description: 'Rapid-fire word association to warm up quick thinking and creative connections.',
    purpose: 'Develops quick thinking and creative associations',
    playerCount: '4-10',
    duration: '3-5 min',
    difficulty: 'beginner',
    category: 'creativity',
    instructions: [
      'Stand in a circle',
      'One person says a word',
      'Next person immediately says the first word that comes to mind',
      'Continue rapidly around the circle',
      'Don\'t think too hard - trust first instincts',
      'If stuck, say "banana" and keep going'
    ]
  },
  {
    id: '7',
    name: 'Emotional Orchestra',
    description: 'Group creates sounds representing different emotions, conducted by a leader.',
    purpose: 'Explores emotional range and group listening',
    playerCount: '5+',
    duration: '8-12 min',
    difficulty: 'intermediate',
    category: 'voice',
    instructions: [
      'Assign each person an emotion (happy, sad, angry, etc.)',
      'Each person creates a sound for their emotion',
      'Conductor brings people in and out',
      'Vary volume, tempo, and combinations',
      'Switch emotions and sounds',
      'End with harmony of all emotions together'
    ]
  },
  {
    id: '8',
    name: 'Gibberish Conversations',
    description: 'Practice communication and emotional expression using only made-up sounds.',
    purpose: 'Develops non-verbal communication and emotional expression',
    playerCount: '2+',
    duration: '5-8 min',
    difficulty: 'intermediate',
    category: 'voice',
    instructions: [
      'Partners face each other',
      'Communicate only in gibberish sounds',
      'Start with simple emotions (happy, sad, excited)',
      'Try to have a real conversation with made-up language',
      'Use tone, pace, and body language to convey meaning',
      'Switch topics every minute or two'
    ]
  },
  {
    id: '9',
    name: 'Space Walk',
    description: 'Walk through space as different characters or in different environments.',
    purpose: 'Develops character physicality and environmental awareness',
    playerCount: '3+',
    duration: '8-15 min',
    difficulty: 'intermediate',
    category: 'body',
    instructions: [
      'Walk normally around the space',
      'Leader calls out environments: underwater, hot sand, ice, etc.',
      'Adjust walking style to match environment',
      'Add character types: robot, elderly person, spy',
      'Combine environment and character',
      'End by finding your neutral walk again'
    ]
  },
  {
    id: '10',
    name: 'Listening Circle',
    description: 'Build listening skills by sharing stories with specific constraints.',
    purpose: 'Develops active listening and storytelling skills',
    playerCount: '4-8',
    duration: '10-15 min',
    difficulty: 'beginner',
    category: 'listening',
    instructions: [
      'Sit in a circle',
      'First person tells a 30-second story',
      'Next person retells the story from a different character\'s perspective',
      'Third person tells it as a different genre',
      'Continue with variations around the circle',
      'Focus on listening carefully to details'
    ]
  },
  {
    id: '11',
    name: 'Compliment Battle',
    description: 'Two players "battle" by giving each other increasingly elaborate compliments.',
    purpose: 'Builds positivity, quick thinking, and performance confidence',
    playerCount: '2+',
    duration: '3-5 min',
    difficulty: 'beginner',
    category: 'creativity',
    instructions: [
      'Two players face off in the center',
      'Take turns giving genuine, creative compliments',
      'Build in intensity and creativity',
      'Others cheer and judge the "winner"',
      'Winner battles the next person',
      'Focus on sincerity and creativity, not meanness'
    ]
  },
  {
    id: '12',
    name: 'Shake Out',
    description: 'Physical warm-up to release tension and build energy.',
    purpose: 'Releases physical tension and builds group energy',
    playerCount: '1+',
    duration: '3-5 min',
    difficulty: 'beginner',
    category: 'body',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Shake right hand 8 times counting out loud',
      'Shake left hand 8 times',
      'Shake right foot 8 times',
      'Shake left foot 8 times',
      'Repeat with 4 times, then 2 times, then 1 time',
      'End with whole body shake and a shout'
    ]
  },
  {
    id: '13',
    name: 'Story Spine Chain',
    description: 'Build a story using the classic story spine structure with multiple contributors.',
    purpose: 'Teaches story structure and collaborative storytelling',
    playerCount: '3-8',
    duration: '8-12 min',
    difficulty: 'intermediate',
    category: 'creativity',
    instructions: [
      'Stand in a line',
      'First person: "Once upon a time..."',
      'Second person: "Every day..."',
      'Third person: "Until one day..."',
      'Continue with: "Because of that..." (repeat 2-3 times)',
      'Second to last: "Until finally..."',
      'Last person: "Ever since then..."'
    ]
  },
  {
    id: '14',
    name: 'Emotion Party',
    description: 'Everyone enters an imaginary party with assigned emotions and interacts.',
    purpose: 'Practices emotional commitment and character interaction',
    playerCount: '6+',
    duration: '8-12 min',
    difficulty: 'intermediate',
    category: 'body',
    instructions: [
      'Assign each person a strong emotion',
      'Everyone enters the "party" space',
      'Stay committed to your emotion throughout',
      'Interact naturally while maintaining emotional state',
      'See how emotions affect and spread to others',
      'Host can call "freeze" to observe and discuss'
    ]
  },
  {
    id: '15',
    name: 'Alphabet Improv',
    description: 'Have a conversation where each line starts with the next letter of the alphabet.',
    purpose: 'Builds quick thinking and conversational flow under constraints',
    playerCount: '2-3',
    duration: '3-5 min',
    difficulty: 'advanced',
    category: 'creativity',
    instructions: [
      'Start with letter A',
      'Each response must start with the next letter',
      'Maintain a coherent conversation/scene',
      'If you mess up the order, start over',
      'Focus on scene reality, not just hitting letters',
      'Try different scenarios and relationships'
    ]
  }
];

export function getRandomWarmups(count: number = 3): WarmupExercise[] {
  const shuffled = [...warmupExercises].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getWarmupsByCategory(category: WarmupExercise['category']): WarmupExercise[] {
  return warmupExercises.filter(warmup => warmup.category === category);
}

export function getWarmupsByDifficulty(difficulty: WarmupExercise['difficulty']): WarmupExercise[] {
  return warmupExercises.filter(warmup => warmup.difficulty === difficulty);
}