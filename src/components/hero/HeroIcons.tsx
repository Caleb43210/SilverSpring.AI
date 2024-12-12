import React from 'react';
import { Bot, Sparkles, Code, Zap, Binary } from 'lucide-react';

export function HeroIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      <Bot className="absolute top-1/4 left-1/4 h-12 w-12 text-blue-500/40 animate-float" />
      <Sparkles className="absolute top-1/3 right-1/3 h-8 w-8 text-indigo-500/40 animate-float-delay-1" />
      <Code className="absolute bottom-1/3 left-1/3 h-10 w-10 text-blue-400/40 animate-float-delay-2" />
      <Zap className="absolute bottom-1/4 right-1/4 h-6 w-6 text-indigo-400/40 animate-float-delay-3" />
      <Binary className="absolute top-1/2 right-1/2 h-8 w-8 text-blue-300/40 animate-float-delay-4" />
    </div>
  );
}