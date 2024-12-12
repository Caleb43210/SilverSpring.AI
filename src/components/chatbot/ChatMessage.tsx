import React from 'react';
import { Bot } from 'lucide-react';
import type { ChatMessage } from './types';

export function ChatMessage({ message, isLast }: ChatMessage) {
  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {message.type === 'bot' && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
        )}
        <div 
          className={`rounded-lg p-3 ${
            message.type === 'user'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-200'
          }`}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
}