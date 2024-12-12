import React from 'react';
import { Button } from '../ui/Button';

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
        <span className="block mb-2">Revolutionize Your Business with</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Intelligent AI Automation
        </span>
      </h1>
      
      <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
        Empowering growth through smarter customer support, seamless lead generation, and effortless CRM integration.
      </p>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="#contact" variant="primary" icon>
          Start Automating Today
        </Button>
        <Button href="#demo" variant="secondary">
          View Demo
        </Button>
      </div>
    </div>
  );
}