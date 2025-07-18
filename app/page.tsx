'use client';

import { useState } from 'react';
import GameGenerator from '@/components/GameGenerator';
import SuggestionGenerator from '@/components/SuggestionGenerator';
import BothMode from '@/components/BothMode';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'games' | 'suggestions' | 'both'>('games');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Improv Comedy Helper
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Random games and audience suggestions for your improv show
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('games')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'games'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Game Generator
              </button>
              <button
                onClick={() => setActiveTab('suggestions')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'suggestions'
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Suggestion Generator
              </button>
              <button
                onClick={() => setActiveTab('both')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'both'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Both Mode
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            {activeTab === 'games' && <GameGenerator />}
            {activeTab === 'suggestions' && <SuggestionGenerator />}
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