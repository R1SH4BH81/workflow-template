import React from 'react';

const stats = [
  { value: '$2.4B', label: 'raised by founders on the platform' },
  { value: '12,000+', label: 'founders running rounds right now' },
  { value: '300+', label: 'investor firms reviewing deals' },
  { value: '18 days', label: 'median time to first term sheet' },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#040407]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 sm:px-10 py-10 md:py-12 ${
              i > 0 ? 'border-l border-white/10' : ''
            } ${i === 2 ? 'max-md:border-l-0 max-md:border-t max-md:border-white/10' : ''} ${
              i === 3 ? 'max-md:border-t max-md:border-white/10' : ''
            }`}
          >
            <p className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-zinc-500 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
