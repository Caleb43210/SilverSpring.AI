import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import ChatbotDemo from './components/ChatbotDemo';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Services />
        <Features />
        <ChatbotDemo />
        <Contact />
      </div>
    </div>
  );
}

export default App;