import { ImprovGame } from './games';

export function doesGameFitPlayerCount(game: ImprovGame, playerCount: number | null): boolean {
  if (playerCount === null) return true;
  
  const range = game.playerCount;
  
  // Handle exact numbers like "4"
  if (/^\d+$/.test(range)) {
    return parseInt(range) === playerCount;
  }
  
  // Handle ranges like "2-4"
  if (/^\d+-\d+$/.test(range)) {
    const [min, max] = range.split('-').map(n => parseInt(n));
    return playerCount >= min && playerCount <= max;
  }
  
  // Handle "X+" patterns like "5+"
  if (/^\d+\+$/.test(range)) {
    const min = parseInt(range.replace('+', ''));
    return playerCount >= min;
  }
  
  // Handle "X-Y players" patterns
  if (/^\d+-\d+\s+players?$/i.test(range)) {
    const matches = range.match(/^(\d+)-(\d+)/);
    if (matches) {
      const [_, min, max] = matches;
      return playerCount >= parseInt(min) && playerCount <= parseInt(max);
    }
  }
  
  // If we can't parse it, include the game
  return true;
}

export function getUniquePlayerCounts(games: ImprovGame[]): number[] {
  const counts = new Set<number>();
  
  games.forEach(game => {
    const range = game.playerCount;
    
    // Extract numbers from the player count
    if (/^\d+$/.test(range)) {
      counts.add(parseInt(range));
    } else if (/^\d+-\d+$/.test(range)) {
      const [min, max] = range.split('-').map(n => parseInt(n));
      for (let i = min; i <= max && i <= 10; i++) {
        counts.add(i);
      }
    } else if (/^\d+\+$/.test(range)) {
      const min = parseInt(range.replace('+', ''));
      for (let i = min; i <= 10; i++) {
        counts.add(i);
      }
    }
  });
  
  return Array.from(counts).sort((a, b) => a - b);
}