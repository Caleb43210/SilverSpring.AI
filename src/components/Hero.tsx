import React from 'react';
import { AIBackground } from './ui/AIBackground';
import { HeroContent } from './hero/HeroContent';
import { HeroIcons } from './hero/HeroIcons';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <AIBackground />
      <HeroIcons />
      <HeroContent />
    </div>
  );
}