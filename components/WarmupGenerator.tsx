'use client';

import { useState } from 'react';
import { warmupExercises, WarmupExercise } from '@/lib/warmups';
import { doesGameFitPlayerCount, getUniquePlayerCounts } from '@/lib/gameHelpers';

export default function WarmupGenerator() {
  const [currentWarmup, setCurrentWarmup] = useState<WarmupExercise | null>(null);
  const [usedWarmups, setUsedWarmups] = useState<Set<string>>(new Set());
  const [showInstructions, setShowInstructions] = useState(false);
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const getRandomWarmup = () => {
    let availableWarmups = warmupExercises.filter(warmup => 
      !usedWarmups.has(warmup.id) && 
      doesGameFitPlayerCount(warmup, playerCount) &&
      (selectedCategory === '' || warmup.category === selectedCategory)
    );
    
    if (availableWarmups.length === 0) {
      // Reset used warmups and try again
      setUsedWarmups(new Set());
      availableWarmups = warmupExercises.filter(warmup => 
        doesGameFitPlayerCount(warmup, playerCount) &&
        (selectedCategory === '' || warmup.category === selectedCategory)
      );
      
      if (availableWarmups.length === 0) {
        alert('No warm-ups available for the selected filters');
        return;
      }
    }
    
    const randomIndex = Math.floor(Math.random() * availableWarmups.length);
    const selectedWarmup = availableWarmups[randomIndex];
    setCurrentWarmup(selectedWarmup);
    setUsedWarmups(prev => new Set([...prev, selectedWarmup.id]));
    setShowInstructions(false);
  };
  
  const availablePlayerCounts = getUniquePlayerCounts(warmupExercises);

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
      case 'voice':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'body':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'focus':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'listening':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
      case 'creativity':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'energy':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const categories = ['voice', 'body', 'focus', 'listening', 'creativity', 'energy'];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">
            Number of players:
          </label>
          <select
            value={playerCount || ''}
            onChange={(e) => setPlayerCount(e.target.value ? parseInt(e.target.value) : null)}
            className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          >
            <option value="">Any number</option>
            {availablePlayerCounts.map(count => (
              <option key={count} value={count}>
                {count} {count === 1 ? 'player' : 'players'}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">
            Category:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          >
            <option value="">All categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <button
          onClick={getRandomWarmup}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg md:text-xl shadow-lg transform transition hover:scale-105"
        >
          {currentWarmup ? 'Get Another Warm-up!' : 'Get Random Warm-up!'}
        </button>
        {usedWarmups.size > 0 && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {usedWarmups.size} of {warmupExercises.filter(w => 
              doesGameFitPlayerCount(w, playerCount) &&
              (selectedCategory === '' || w.category === selectedCategory)
            ).length} warm-ups shown
            {(playerCount || selectedCategory) && ` (filtered)`}
          </p>
        )}
      </div>

      {currentWarmup && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4 animate-fadeIn">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            {currentWarmup.name}
          </h2>
          
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(currentWarmup.difficulty)}`}>
              {currentWarmup.difficulty}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(currentWarmup.category)}`}>
              {currentWarmup.category}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
              {currentWarmup.playerCount} players
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
              {currentWarmup.duration}
            </span>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 sm:p-4">
            <p className="text-sm font-semibold text-orange-800 dark:text-orange-200 mb-2">Purpose:</p>
            <p className="text-gray-700 dark:text-gray-300">{currentWarmup.purpose}</p>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {currentWarmup.description}
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-semibold"
            >
              <span>{showInstructions ? 'Hide' : 'Show'} Instructions</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${showInstructions ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {showInstructions && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 animate-fadeIn">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Step-by-step instructions:</h4>
              <ol className="list-decimal list-inside space-y-2">
                {currentWarmup.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {!currentWarmup && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
            Ready to warm up for your improv session?
          </p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">
            Choose your filters and click the button above to get started!
          </p>
        </div>
      )}
    </div>
  );
}