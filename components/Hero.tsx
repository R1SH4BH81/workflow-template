'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-30 pb-10 sm:pb-14 md:pb-16 px-6 sm:px-10 md:px-16 max-w-4xl pointer-events-auto">
      <div className="flex flex-col items-start gap-6 sm:gap-8">
        {/* Main Headline with Curved Accent Arrow */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.35rem] font-medium tracking-[-0.035em] text-white leading-[1.08] select-none">
          Launch and
          <br />
          Fund Without
          <br />
          <span className="inline-flex items-center gap-3">
            the Friction
            {/* Sleek curved orange/red indicator arrow */}
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff461e] transform translate-y-1 hover:translate-x-1.5 transition-transform inline-block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </h1>


      </div>
    </section>
  );
}
