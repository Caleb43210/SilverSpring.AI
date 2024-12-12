import React from 'react';

export function AIBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural Network Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" className="text-blue-500" />
              <path d="M25 25 L50 50 M25 25 L50 0 M25 25 L0 50 M25 25 L0 0" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                className="text-blue-500/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95" />
    </div>
  );
}