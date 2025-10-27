'use client'; 

import React, { useState } from 'react';

/**
 * The main component for the application's home page.
 * This file is automatically routed to the root URL (/).
 * * Uses Tailwind CSS classes for responsive styling.
 */
export default function HomePage() {
  // State to manage the click counter
  const [count, setCount] = useState(0);

  return (
    // Responsive container for the whole page
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 md:p-12 font-sans">
      
      {/* Title */}
      <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-4 tracking-tight">
        Raymond Next.js App Starter
      </h1>

      {/* Description */}
      <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl text-center">
        Ray's application is running successfully on a development server.
      </p>

      {/* Interactive Component Card */}
      <div className="flex flex-col items-center space-y-5 p-8 w-full max-w-sm bg-white border border-gray-200 shadow-2xl rounded-2xl transition-all duration-300 hover:shadow-indigo-300/50">
        
        <p className="text-3xl font-bold text-gray-900">
          Clicks: <span className="text-indigo-600">{count}</span>
        </p>
        
        <button
          onClick={() => setCount(prev => prev + 1)}
          // Button styling with modern effects
          className="w-full px-8 py-3 text-lg bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:bg-indigo-600 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Click Me to increase above number Code!
        </button>

      </div>
      
    </div>
  );
}
