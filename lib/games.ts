export interface ImprovGame {
  id: string;
  name: string;
  description: string;
  playerCount: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  category: 'warmup' | 'scene' | 'musical' | 'physical' | 'verbal';
}

export const improvGames: ImprovGame[] = [
  {
    id: '1',
    name: 'Freeze Tag',
    description: 'Two actors start a scene. At any point, someone can yell "freeze!" The actors freeze in position, and the person who called freeze taps one actor out and takes their physical position, starting a completely new scene inspired by the poses.',
    playerCount: '3+',
    difficulty: 'beginner',
    duration: '5-10 min',
    category: 'scene'
  },
  {
    id: '2',
    name: 'Word at a Time Story',
    description: 'Players stand in a circle and tell a story one word at a time. Each person contributes exactly one word, going around the circle. The goal is to create a coherent narrative despite the limitations.',
    playerCount: '3-8',
    difficulty: 'beginner',
    duration: '5-10 min',
    category: 'verbal'
  },
  {
    id: '3',
    name: 'Gibberish Expert',
    description: 'One player is an expert who only speaks in gibberish. Another player acts as their translator. The audience asks questions, the expert responds in gibberish with conviction, and the translator "interprets" their meaning.',
    playerCount: '2-3',
    difficulty: 'intermediate',
    duration: '5-7 min',
    category: 'verbal'
  },
  {
    id: '4',
    name: 'Emotion Replay',
    description: 'A short scene is performed normally. Then it\'s replayed multiple times with different emotional styles suggested by the audience (angry, romantic, terrified, etc.). The dialogue stays the same but the delivery changes.',
    playerCount: '2-4',
    difficulty: 'intermediate',
    duration: '7-10 min',
    category: 'scene'
  },
  {
    id: '5',
    name: 'Character Swap',
    description: 'During a scene, the host calls "swap!" and actors must instantly switch characters with each other while maintaining the scene\'s continuity. Each actor adopts the other\'s character traits, voice, and physicality.',
    playerCount: '2-3',
    difficulty: 'advanced',
    duration: '5-8 min',
    category: 'scene'
  },
  {
    id: '6',
    name: 'Zip Zap Zoop',
    description: 'A high-energy warm-up game. Players pass energy around a circle by pointing and saying "Zip," "Zap," or "Zoop." Each word has specific rules about direction. Great for focus and group connection.',
    playerCount: '5+',
    difficulty: 'beginner',
    duration: '3-5 min',
    category: 'warmup'
  },
  {
    id: '7',
    name: 'Props',
    description: 'Players are given an ordinary object and must use it as anything except what it actually is. They take turns demonstrating different creative uses, and others can join to build mini-scenes around each interpretation.',
    playerCount: '3-6',
    difficulty: 'beginner',
    duration: '5-10 min',
    category: 'physical'
  },
  {
    id: '8',
    name: 'Hitchhiker',
    description: 'One player is driving a car. Other players are hitchhikers with strong character traits. As each hitchhiker enters the car, everyone adopts their character traits. When the car is full, the driver leaves and the cycle continues.',
    playerCount: '4-5',
    difficulty: 'intermediate',
    duration: '8-12 min',
    category: 'scene'
  },
  {
    id: '9',
    name: 'Sound Effects',
    description: 'Two actors perform a scene while two offstage players provide all sound effects vocally. The actors must justify and react to whatever sounds are created, no matter how unexpected.',
    playerCount: '4',
    difficulty: 'intermediate',
    duration: '5-8 min',
    category: 'scene'
  },
  {
    id: '10',
    name: 'Slideshow',
    description: 'One player narrates a vacation or presentation while others create frozen "slides" behind them. The narrator must justify whatever bizarre tableau the actors create, weaving it into their story.',
    playerCount: '3-5',
    difficulty: 'intermediate',
    duration: '5-8 min',
    category: 'scene'
  },
  {
    id: '11',
    name: 'Machine',
    description: 'Players create a human machine one person at a time. Each person adds a repetitive sound and movement that connects to the existing parts. The result is a synchronized, rhythmic group creation.',
    playerCount: '5+',
    difficulty: 'beginner',
    duration: '3-5 min',
    category: 'physical'
  },
  {
    id: '12',
    name: 'Yes, And',
    description: 'The fundamental improv exercise. In pairs, players have a conversation where every response must start with "Yes, and..." This builds agreement and advances ideas rather than blocking them.',
    playerCount: '2',
    difficulty: 'beginner',
    duration: '3-5 min',
    category: 'verbal'
  },
  {
    id: '13',
    name: 'Fortunately/Unfortunately',
    description: 'Players alternate telling a story, with each contribution starting with either "Fortunately..." or "Unfortunately..." creating a rollercoaster narrative of good and bad events.',
    playerCount: '2-8',
    difficulty: 'beginner',
    duration: '5-8 min',
    category: 'verbal'
  },
  {
    id: '14',
    name: 'Blind Line',
    description: 'Actors perform a scene while occasionally pulling random pre-written lines from a bucket. They must incorporate these lines naturally into the scene, no matter how absurd they might be.',
    playerCount: '2-4',
    difficulty: 'advanced',
    duration: '5-10 min',
    category: 'scene'
  },
  {
    id: '15',
    name: 'Space Jump',
    description: 'Scenes build progressively. One actor starts alone, then freezes when a second enters with a new scene. This continues with more actors. Then scenes rewind, returning to each previous scene in reverse order.',
    playerCount: '4-5',
    difficulty: 'advanced',
    duration: '8-12 min',
    category: 'scene'
  },
  {
    id: '16',
    name: 'Questions Only',
    description: 'Players can only speak in questions. If someone makes a statement, hesitates too long, or repeats a question type, they\'re out and replaced. Creates quick-thinking, witty exchanges.',
    playerCount: '4-8',
    difficulty: 'intermediate',
    duration: '5-10 min',
    category: 'verbal'
  },
  {
    id: '17',
    name: 'Alphabet Game',
    description: 'A scene where each line of dialogue must start with the next letter of the alphabet. Starting with any letter, players work through all 26 letters while maintaining a coherent scene.',
    playerCount: '2-3',
    difficulty: 'advanced',
    duration: '5-8 min',
    category: 'verbal'
  },
  {
    id: '18',
    name: 'Dubbing',
    description: 'Two actors perform a scene but cannot speak. Two offstage players provide their voices. The physical actors must match the dubbing, and the voice actors must justify the movements.',
    playerCount: '4',
    difficulty: 'intermediate',
    duration: '5-8 min',
    category: 'scene'
  },
  {
    id: '19',
    name: 'One Word Scene',
    description: 'A full scene where each actor can only say one specific word assigned to them. They must vary tone, emotion, and delivery to communicate different meanings with their single word.',
    playerCount: '2-3',
    difficulty: 'advanced',
    duration: '3-5 min',
    category: 'verbal'
  },
  {
    id: '20',
    name: 'Emotional Rollercoaster',
    description: 'Actors perform a simple scene (like making breakfast) while cycling through extreme emotions called out by the host. They must justify each emotional shift within the scene\'s logic.',
    playerCount: '1-3',
    difficulty: 'intermediate',
    duration: '5-7 min',
    category: 'scene'
  },
  {
    id: '21',
    name: 'Beastie Boys',
    description: 'Three players form a hip-hop group. They perform a rap one line at a time, with each line rhyming with the previous one. The fourth line must always end with a group shout of the same word.',
    playerCount: '3',
    difficulty: 'intermediate',
    duration: '3-5 min',
    category: 'musical'
  },
  {
    id: '22',
    name: 'Irish Drinking Song',
    description: 'Players stand in a line and sing an improvised Irish drinking song about an audience suggestion. Each person sings one line at a time, with the last word of every fourth line repeated by all.',
    playerCount: '4-6',
    difficulty: 'intermediate',
    duration: '3-5 min',
    category: 'musical'
  },
  {
    id: '23',
    name: 'Moving Bodies',
    description: 'Two actors perform a scene but cannot move themselves. Two audience members or other players physically move them like puppets. Actors must justify all movements in the scene.',
    playerCount: '4',
    difficulty: 'intermediate',
    duration: '5-8 min',
    category: 'physical'
  },
  {
    id: '24',
    name: 'Genre Replay',
    description: 'A neutral scene is performed, then replayed in different genres (film noir, western, sci-fi, etc.). The basic plot remains but style, dialogue, and character choices change to match each genre.',
    playerCount: '2-4',
    difficulty: 'intermediate',
    duration: '8-12 min',
    category: 'scene'
  },
  {
    id: '25',
    name: 'Half-Life',
    description: 'A scene is performed in one minute. Then it\'s repeated in 30 seconds with all the same beats. Then 15 seconds, then 7.5 seconds. Actors must hit all plot points increasingly frantically.',
    playerCount: '2-4',
    difficulty: 'advanced',
    duration: '3-5 min',
    category: 'scene'
  }
];