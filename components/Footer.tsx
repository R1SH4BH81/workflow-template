import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#040407] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5">
              <circle cx="16" cy="16" r="11" stroke="#0e0f14" strokeWidth="4.5" />
              <path
                d="M13.5 10C13.5 10 17 12 17 16C17 19.5 14 21.5 14 21.5C18.5 21 20 18 20 16C20 13 18 10.5 13.5 10Z"
                fill="#ff461e"
              />
            </svg>
          </div>
          <p className="text-sm text-zinc-500">© 2026 Workflow</p>
        </div>
        <nav className="flex items-center gap-7 text-sm text-zinc-500">
          <a href="#features" className="hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#pricing" className="hover:text-white transition-colors duration-200">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            X
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
