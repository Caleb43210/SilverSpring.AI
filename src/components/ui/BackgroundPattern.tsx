import React from 'react';

export function BackgroundPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <Path />
      <Defs>
        <Pattern />
      </Defs>
    </svg>
  );
}

function Path() {
  return (
    <path d="M0 0L100 0L100 100L0 100Z" fill="url(#grid)" />
  );
}

function Pattern() {
  return (
    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
    </pattern>
  );
}

function Defs({ children }: { children: React.ReactNode }) {
  return <defs>{children}</defs>;
}