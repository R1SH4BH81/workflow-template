import React from 'react';

type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
};

export default function SectionHeader({ eyebrow, title, sub }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#ff4d29]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-[-0.02em] text-white leading-[1.12]">
        {title}
      </h2>
      {sub ? (
        <p className="mt-4 text-base text-zinc-400 leading-relaxed">{sub}</p>
      ) : null}
    </div>
  );
}
