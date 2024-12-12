import React from 'react';
import { ChatMessage } from './ChatMessage';
import type { Message } from './types';

interface ChatWindowProps {
  messages: Message[];
}

export function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="h-96 p-4 overflow-y-auto space-y-4">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          message={message}
          isLast={index === messages.length - 1}
        />
      ))}
    </div>
  );
}