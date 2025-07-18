'use client';

import { useState } from 'react';
import { improvGames, ImprovGame } from '@/lib/games';
import { getRandomQuestions, getRandomAnswer, SuggestionQuestion } from '@/lib/suggestions';
import { doesGameFitPlayerCount, getUniquePlayerCounts } from '@/lib/gameHelpers';

export default function BothMode() {
  const [currentGame, setCurrentGame] = useState<ImprovGame | null>(null);
  const [usedGames, setUsedGames] = useState<Set<string>>(new Set());
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  
  const [questions, setQuestions] = useState<SuggestionQuestion[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [showBoth, setShowBoth] = useState(false);

  const getRandomGame = () => {
    let availableGames = improvGames.filter(game => 
      !usedGames.has(game.id) && doesGameFitPlayerCount(game, playerCount)
    );
    
    if (availableGames.length === 0) {
      // Reset used games and try again
      setUsedGames(new Set());
      availableGames = improvGames.filter(game => 
        doesGameFitPlayerCount(game, playerCount)
      );
      
      if (availableGames.length === 0) {
        // No games match the player count
        alert('No games available for the selected player count');
        return;
      }
    }
    
    const randomIndex = Math.floor(Math.random() * availableGames.length);
    const selectedGame = availableGames[randomIndex];
    setCurrentGame(selectedGame);
    setUsedGames(prev => new Set([...prev, selectedGame.id]));
    setShowAllDetails(false);
  };
  
  const availablePlayerCounts = getUniquePlayerCounts(improvGames);

  const generateQuestions = () => {
    setQuestions(getRandomQuestions(3));
    setSelectedQuestion(null);
    setAnswer(null);
  };

  const selectQuestion = (questionId: string) => {
    setSelectedQuestion(questionId);
    setIsLoading(true);
    
    setTimeout(() => {
      setAnswer(getRandomAnswer(questionId));
      setIsLoading(false);
    }, 1500);
  };

  const generateBoth = () => {
    getRandomGame();
    generateQuestions();
    setShowBoth(true);
    setSelectedQuestion(null);
    setAnswer(null);
  };

  const reset = () => {
    setCurrentGame(null);
    setQuestions([]);
    setSelectedQuestion(null);
    setAnswer(null);
    setShowBoth(false);
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

  if (!showBoth) {
    return (
      <div className="text-center py-8 sm:py-12 space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Get both a game AND a suggestion!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">
            Perfect for when you need a complete improv setup
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">
            Number of players:
          </label>
          <select
            value={playerCount || ''}
            onChange={(e) => setPlayerCount(e.target.value ? parseInt(e.target.value) : null)}
            className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          >
            <option value="">Any number</option>
            {availablePlayerCounts.map(count => (
              <option key={count} value={count}>
                {count} {count === 1 ? 'player' : 'players'}
              </option>
            ))}
          </select>
        </div>
        
        <button
          onClick={generateBoth}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg md:text-xl shadow-lg transform transition hover:scale-105"
        >
          Generate Game + Suggestion!
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {currentGame && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">Your Game</h3>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
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

      <div className="border-t-2 border-gray-200 dark:border-gray-600"></div>

      {questions.length > 0 && !selectedQuestion && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wide">Get a Suggestion</h3>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Choose a question to ask the audience:
          </h2>
          {questions.map((question) => (
            <button
              key={question.id}
              onClick={() => selectQuestion(question.id)}
              className="w-full text-left p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
            >
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                "{question.question}"
              </p>
            </button>
          ))}
        </div>
      )}

      {selectedQuestion && (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">You asked:</p>
            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">
              "{questions.find(q => q.id === selectedQuestion)?.question}"
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-6">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-pink-500"></div>
              <p className="mt-3 text-gray-600 dark:text-gray-400 animate-pulse">
                The audience is thinking...
              </p>
            </div>
          )}

          {answer && !isLoading && (
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-6 text-center animate-fadeIn">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">From the audience:</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                "{answer}"
              </p>
            </div>
          )}
        </div>
      )}

      {((answer && !isLoading) || (!selectedQuestion && questions.length > 0)) && (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
          <button
            onClick={generateBoth}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transform transition hover:scale-105 text-sm sm:text-base"
          >
            New Game + Suggestion
          </button>
          <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transform transition hover:scale-105 text-sm sm:text-base"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}