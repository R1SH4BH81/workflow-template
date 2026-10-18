import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="bg-[#040407] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-20 md:py-28 text-center">
        <div className="mx-auto w-11 h-11 rounded-full bg-[#ff4d29]/10 text-[#ff4d29] flex items-center justify-center">
          <Quote className="w-5 h-5" strokeWidth={2} />
        </div>
        <blockquote className="mt-8 text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-white leading-[1.3]">
          “We closed our $3M seed in five weeks. The data room alone saved us a
          month of back-and-forth on diligence.”
        </blockquote>
        <p className="mt-6 text-sm text-zinc-500">
          Maya Chen <span className="text-zinc-700">·</span> Co-founder, Northloop
        </p>
      </div>
    </section>
  );
}
