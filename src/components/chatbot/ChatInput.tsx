import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ input, setInput, onSubmit }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-4 border-t border-gray-700">
      <div className="flex space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg px-4 py-2 hover:from-blue-600 hover:to-indigo-700 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}