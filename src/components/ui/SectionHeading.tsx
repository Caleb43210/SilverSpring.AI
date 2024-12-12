import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}