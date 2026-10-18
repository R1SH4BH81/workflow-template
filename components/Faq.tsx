import React from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';

const faqs = [
  {
    q: 'How is this different from a spreadsheet and DocSend?',
    a: 'Those track files. Workflow tracks the round: who opened what, who went quiet, and what to do next — all wired into one pipeline instead of three disconnected tools.',
  },
  {
    q: 'Do investors need an account?',
    a: 'No. They open your link, browse the data room, and get updates by email. Nothing to install, nothing to sign up for.',
  },
  {
    q: 'What can I put in the data room?',
    a: 'Decks, financial models, legal documents, product videos. You decide who sees what, and you can revoke access at any time.',
  },
  {
    q: 'Can I run SAFEs and priced rounds?',
    a: 'Yes. Set terms per round, track commitments against your target, and export a clean cap table when you close.',
  },
  {
    q: 'Who sees my data?',
    a: 'Only the people you invite. Everything is encrypted in transit and at rest, and access is controlled per document.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-[#040407] border-t border-white/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-28">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions founders ask."
        />
        <div className="mt-10 md:mt-12 border-t border-white/10">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-white/10 py-6"
            >
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base sm:text-lg font-medium text-white tracking-[-0.01em]">
                  {f.q}
                </span>
                <ChevronDown className="w-5 h-5 shrink-0 text-zinc-500 group-open:rotate-180 group-open:text-[#ff4d29] transition-all duration-200" />
              </summary>
              <p className="mt-3.5 pr-10 text-sm sm:text-base text-zinc-400 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
