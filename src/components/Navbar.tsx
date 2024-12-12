import React from 'react';
import { Bot, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">SilverSpring.AI</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-blue-400 transition-colors">Demo</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Services</a>
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Features</a>
            <a href="#demo" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Demo</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}