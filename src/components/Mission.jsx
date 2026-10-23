import React from 'react';

export default function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-heading" className="py-16 md:py-20 bg-[#0F1523] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="mission-heading" className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-[#00D9FF] mb-6">
            Our Mission
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed tracking-tight">
            Making data <span className="text-[#00D9FF]">simple</span>, accessible, and actionable for everyone.
          </p>
          <div aria-hidden="true" className="w-16 h-1 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
