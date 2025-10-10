'use client'; // needed for client-side checks

import React from 'react';

const BreakpointIndicator = () => {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-2 right-2 z-50 p-2 text-white text-sm font-mono bg-black/70 rounded shadow-lg">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
};

export default BreakpointIndicator;
