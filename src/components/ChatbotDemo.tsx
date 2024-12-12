import React, { useState } from 'react';
import { Container } from './layout/Container';
import { SectionHeading } from './ui/SectionHeading';
import { ChatWindow } from './chatbot/ChatWindow';
import { ChatInput } from './chatbot/ChatInput';
import type { Message } from './chatbot/types';

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'Thank you for your message! This is a demo of our AI chatbot capabilities. Check out the Chatbot on our website for further information.'
      }]);
    }, 1000);
  };

  return (
    <div id="demo" className="py-24 bg-gray-900">
      <Container>
        <SectionHeading
          title="Interactive Chatbot Demo"
          description="Experience our AI-powered customer support solution in action"
        />
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <ChatWindow messages={messages} />
            <ChatInput
              input={input}
              setInput={setInput}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}