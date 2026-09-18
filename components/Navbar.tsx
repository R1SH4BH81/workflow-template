'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="relative z-30 w-full px-6 sm:px-10 md:px-16 py-6 md:py-8 flex items-center justify-between pointer-events-auto">
      {/* Left: Brand Logo */}
      <div className="flex items-center">
        <div
          id="brand-logo"
          className="group w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300"
          >
            {/* Outer dark ring */}
            <circle cx="16" cy="16" r="11" stroke="#0e0f14" strokeWidth="4.5" />
            {/* Orange/Red inner flame accent */}
            <path
              d="M13.5 10C13.5 10 17 12 17 16C17 19.5 14 21.5 14 21.5C18.5 21 20 18 20 16C20 13 18 10.5 13.5 10Z"
              fill="#ff461e"
            />
          </svg>
        </div>
      </div>

      {/* Right: Navigation Links & Connect Wallet CTA */}
      <nav className="flex items-center gap-6 md:gap-10">
        <div className="hidden sm:flex items-center gap-7 md:gap-9 text-sm text-zinc-300 font-normal">
          <a
            href="#solutions"
            className="hover:text-white transition-colors duration-200 tracking-wide"
          >
            Solutions
          </a>
          <a
            href="#product"
            className="hover:text-white transition-colors duration-200 tracking-wide"
          >
            Product
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200 tracking-wide"
          >
            About
          </a>
          <a
            href="#resources"
            className="hover:text-white transition-colors duration-200 tracking-wide"
          >
            Resources
          </a>
        </div>

        <button
          id="connect-wallet-btn"
          className="px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs sm:text-sm font-medium text-white border border-white/20 bg-white/[0.05] hover:bg-white/[0.12] hover:border-white/40 active:scale-95 transition-all duration-200 backdrop-blur-md shadow-sm cursor-pointer"
        >
          Connect Wallet
        </button>
      </nav>
    </header>
  );
}
