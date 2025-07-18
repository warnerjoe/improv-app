'use client';

import { useState } from 'react';
import { improvGames, ImprovGame } from '@/lib/games';

export default function GameGenerator() {
  const [currentGame, setCurrentGame] = useState<ImprovGame | null>(null);
  const [usedGames, setUsedGames] = useState<Set<string>>(new Set());
  const [showAllDetails, setShowAllDetails] = useState(false);

  const getRandomGame = () => {
    const availableGames = improvGames.filter(game => !usedGames.has(game.id));
    
    if (availableGames.length === 0) {
      setUsedGames(new Set());
      const randomIndex = Math.floor(Math.random() * improvGames.length);
      setCurrentGame(improvGames[randomIndex]);
      setUsedGames(new Set([improvGames[randomIndex].id]));
    } else {
      const randomIndex = Math.floor(Math.random() * availableGames.length);
      const selectedGame = availableGames[randomIndex];
      setCurrentGame(selectedGame);
      setUsedGames(prev => new Set([...prev, selectedGame.id]));
    }
    setShowAllDetails(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'warmup':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'scene':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'musical':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'physical':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'verbal':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <button
          onClick={getRandomGame}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform transition hover:scale-105"
        >
          {currentGame ? 'Get Another Game!' : 'Get Random Game!'}
        </button>
        {usedGames.size > 0 && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {usedGames.size} of {improvGames.length} games shown
          </p>
        )}
      </div>

      {currentGame && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 space-y-4 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {currentGame.name}
          </h2>
          
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(currentGame.difficulty)}`}>
              {currentGame.difficulty}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(currentGame.category)}`}>
              {currentGame.category}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
              {currentGame.playerCount} players
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
              {currentGame.duration}
            </span>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {showAllDetails ? currentGame.description : currentGame.description.slice(0, 150) + '...'}
            </p>
            {currentGame.description.length > 150 && (
              <button
                onClick={() => setShowAllDetails(!showAllDetails)}
                className="text-purple-500 hover:text-purple-600 font-semibold mt-2"
              >
                {showAllDetails ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        </div>
      )}

      {!currentGame && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Ready to discover your next improv game?
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            Click the button above to get started!
          </p>
        </div>
      )}
    </div>
  );
}