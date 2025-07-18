'use client';

import { useState } from 'react';
import { getRandomQuestions, getRandomAnswer, SuggestionQuestion } from '@/lib/suggestions';

export default function SuggestionGenerator() {
  const [questions, setQuestions] = useState<SuggestionQuestion[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateQuestions = () => {
    setQuestions(getRandomQuestions(3));
    setSelectedQuestion(null);
    setAnswer(null);
  };

  const selectQuestion = (questionId: string) => {
    setSelectedQuestion(questionId);
    setIsLoading(true);
    
    // Simulate audience thinking
    setTimeout(() => {
      setAnswer(getRandomAnswer(questionId));
      setIsLoading(false);
    }, 1500);
  };

  const reset = () => {
    setQuestions([]);
    setSelectedQuestion(null);
    setAnswer(null);
  };

  return (
    <div className="space-y-6">
      {questions.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Need an audience suggestion?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 px-4">
            Generate random questions to ask your virtual audience!
          </p>
          <button
            onClick={generateQuestions}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg md:text-xl shadow-lg transform transition hover:scale-105"
          >
            Get Suggestion Questions!
          </button>
        </div>
      )}

      {questions.length > 0 && !selectedQuestion && (
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white text-center mb-4 sm:mb-6">
            Choose a question to ask the audience:
          </h2>
          {questions.map((question) => (
            <button
              key={question.id}
              onClick={() => selectQuestion(question.id)}
              className="w-full text-left p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
            >
              <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                "{question.question}"
              </p>
            </button>
          ))}
          <div className="text-center mt-6">
            <button
              onClick={generateQuestions}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Get different questions
            </button>
          </div>
        </div>
      )}

      {selectedQuestion && (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">You asked:</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              "{questions.find(q => q.id === selectedQuestion)?.question}"
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 animate-pulse">
                The audience is thinking...
              </p>
            </div>
          )}

          {answer && !isLoading && (
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-8 text-center animate-fadeIn">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">From the audience:</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                "{answer}"
              </p>
            </div>
          )}

          {answer && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={reset}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transform transition hover:scale-105 text-sm sm:text-base"
              >
                New Suggestion Round
              </button>
              <button
                onClick={() => {
                  setAnswer(null);
                  selectQuestion(selectedQuestion);
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transform transition hover:scale-105 text-sm sm:text-base"
              >
                Same Question, Different Answer
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}