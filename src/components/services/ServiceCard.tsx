import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="relative group">
      <div className="relative p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
            <Icon className="h-8 w-8" />
          </div>
        </div>
        <div className="pt-8">
          <h3 className="mt-4 text-xl font-medium text-white text-center">
            {title}
          </h3>
          <p className="mt-4 text-base text-gray-400 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}