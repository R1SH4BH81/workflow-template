import React from 'react';
import SectionHeader from './SectionHeader';

const steps = [
  {
    n: '01',
    title: 'Set up your round',
    desc: 'Import your deck and cap table, set your terms, and invite your team. Live in an afternoon.',
  },
  {
    n: '02',
    title: 'Launch to investors',
    desc: 'Share a single link. Investors browse the data room and follow updates — no new login for them.',
  },
  {
    n: '03',
    title: 'Get funded',
    desc: 'Follow engagement in real time, answer diligence fast, and collect signatures when terms land.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#040407] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-28">
        <SectionHeader
          eyebrow="How it works"
          title="From deck to signed term sheet."
          sub="Three steps. No consultants, no cold-email guesswork."
        />
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-white/10 pt-6">
              <p className="font-mono text-sm text-[#ff4d29]">{s.n}</p>
              <h3 className="mt-4 text-xl font-medium text-white tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
