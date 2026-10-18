import React from 'react';
import { Check } from 'lucide-react';
import SectionHeader from './SectionHeader';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    tagline: 'For first-time founders getting organized.',
    features: ['1 active round', 'Investor CRM — 100 contacts', 'Basic data room', 'Email support'],
    cta: 'Start for free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$99',
    tagline: 'For teams actively raising.',
    features: [
      'Unlimited rounds',
      'Investor CRM — unlimited contacts',
      'Data room with view analytics',
      'Outreach automation',
      'Priority support',
    ],
    cta: 'Start raising',
    featured: true,
  },
  {
    name: 'Scale',
    price: '$249',
    tagline: 'For funds and serial raisers.',
    features: [
      'Everything in Pro',
      'Multiple workspaces',
      'Custom domains',
      'API access',
      'Dedicated manager',
    ],
    cta: 'Talk to sales',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#040407] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-28">
        <SectionHeader
          eyebrow="Pricing"
          title="Priced like a tool, not a toll booth."
          sub="One closed investor pays for a decade of Pro. Annual billing saves 20% — cancel anytime."
        />
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                p.featured
                  ? 'border border-[#ff4d29]/70 bg-[#ff4d29]/[0.04]'
                  : 'border border-white/10 bg-white/[0.02]'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-[#ff4d29] px-3.5 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-base font-medium text-white">{p.name}</h3>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl font-medium tracking-[-0.02em] text-white">
                  {p.price}
                </span>
                <span className="text-sm text-zinc-500">/mo</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">{p.tagline}</p>
              <ul className="mt-7 space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        p.featured ? 'text-[#ff4d29]' : 'text-zinc-500'
                      }`}
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#faq"
                className={`mt-8 block text-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
                  p.featured
                    ? 'bg-[#ff4d29] text-white hover:bg-[#ff461e]'
                    : 'border border-white/15 text-white hover:border-white/40 hover:bg-white/[0.06]'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
