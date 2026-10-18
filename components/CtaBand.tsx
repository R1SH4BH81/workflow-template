import React from 'react';

export default function CtaBand() {
  return (
    <section className="bg-[#040407] border-t border-white/10 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(255,77,41,0.14),transparent)]"
      />
      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-24 md:py-32 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.1]">
          Raise your round
          <br />
          without the friction.
        </h2>
        <p className="mt-5 text-base text-zinc-400">
          Join 12,000+ founders already raising on Workflow.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#pricing"
            className="w-full sm:w-auto rounded-full bg-[#ff4d29] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#ff461e] active:scale-[0.98] transition-all duration-200"
          >
            Start raising
          </a>
          <a
            href="#faq"
            className="w-full sm:w-auto rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-white hover:border-white/40 hover:bg-white/[0.06] active:scale-[0.98] transition-all duration-200"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
