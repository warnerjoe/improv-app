'use client';

import { useState } from 'react';
import GameGenerator from '@/components/GameGenerator';
import SuggestionGenerator from '@/components/SuggestionGenerator';
import BothMode from '@/components/BothMode';
import WarmupGenerator from '@/components/WarmupGenerator';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'games' | 'suggestions' | 'both' | 'warmups'>('games');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-4">
            🎭 Improv Toolkit
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-4">
            Random games and audience suggestions for your improv show
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg flex flex-col sm:flex-row gap-1">
              <button
                onClick={() => setActiveTab('games')}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-sm md:text-base ${
                  activeTab === 'games'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Games
              </button>
              <button
                onClick={() => setActiveTab('suggestions')}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-sm md:text-base ${
                  activeTab === 'suggestions'
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Suggestions
              </button>
              <button
                onClick={() => setActiveTab('warmups')}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-sm md:text-base ${
                  activeTab === 'warmups'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Warm-ups
              </button>
              <button
                onClick={() => setActiveTab('both')}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-sm md:text-base ${
                  activeTab === 'both'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Both
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
            {activeTab === 'games' && <GameGenerator />}
            {activeTab === 'suggestions' && <SuggestionGenerator />}
            {activeTab === 'warmups' && <WarmupGenerator />}
            {activeTab === 'both' && <BothMode />}
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-600 dark:text-gray-400">
          <p>Made for improvisers, by improvisers</p>
        </footer>
      </div>
    </div>
  );
}