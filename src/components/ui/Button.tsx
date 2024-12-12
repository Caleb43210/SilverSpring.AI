import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  icon?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className = '',
  icon = false 
}: ButtonProps) {
  const baseStyles = "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition-all duration-300";
  const variants = {
    primary: "text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-indigo-500/25",
    secondary: "text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-700"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}