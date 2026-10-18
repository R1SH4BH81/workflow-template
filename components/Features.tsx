import React from 'react';
import { Users, FolderLock, Send, BarChart3 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const features = [
  {
    icon: Users,
    title: 'Investor CRM',
    desc: 'Every conversation, intro, and follow-up in one pipeline. See exactly where each investor stands, at a glance.',
  },
  {
    icon: FolderLock,
    title: 'Data room',
    desc: 'Share your deck, financials, and legal docs with granular access control and full view analytics.',
  },
  {
    icon: Send,
    title: 'Outreach automation',
    desc: 'Personalized updates and nudges that go out on schedule, so no warm lead ever goes cold.',
  },
  {
    icon: BarChart3,
    title: 'Raise analytics',
    desc: 'Know which slides hold attention and which investors are actually engaging — then act on it.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#040407] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-28">
        <SectionHeader
          eyebrow="The product"
          title="Everything a fundraise needs, in one place."
          sub="Stop stitching together spreadsheets, file shares, and email threads."
        />
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8 hover:border-white/25 transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#ff4d29]/10 text-[#ff4d29] flex items-center justify-center">
                <f.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
