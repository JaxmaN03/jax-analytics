import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PAGE_URLS } from '../navigation.js';

export default function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-heading" className="bg-[#F3EBD9] text-[#101C32] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 text-[#243E60] font-mono text-xs tracking-[.16em]">
              <span className="inline-block w-8 h-px bg-[#243E60]"/> 002 / OUR MISSION
            </div>
            <div aria-hidden="true" className="mt-10 hidden lg:block">
              <svg viewBox="0 0 180 180" className="w-40">
                <circle cx="90" cy="90" r="70" fill="none" stroke="#243E60" strokeWidth="1"/>
                <circle cx="90" cy="90" r="49" fill="none" stroke="#243E60" strokeWidth="1"/>
                <circle cx="90" cy="90" r="23" fill="#E3C581"/>
                <path d="M10 90h160M90 10v160" stroke="#243E60" strokeWidth="1"/>
                <circle cx="140" cy="40" r="8" fill="#E66C37"/>
              </svg>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 id="mission-heading" className="space-heading text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.05] tracking-[-.045em] max-w-4xl">
              There are so many insights hidden in your data. <span className="text-[#285B80]">Let’s find them!</span>
            </h2>
            <div className="mt-9 grid md:grid-cols-2 gap-7 md:gap-12 items-end">
              <p className="text-lg leading-relaxed text-[#243E60]">
                From organizing spreadsheets to building practical tools for reporting, we help you turn messy information into data you can actually use. No unnecessary complexity - just easy decisions that give you more time for what matters.
              </p>
              <a href={PAGE_URLS.about} className="inline-flex items-center gap-3 w-fit border-b border-[#243E60] pb-2 font-semibold tracking-wide hover:text-[#E66C37] transition-colors">
                THE STORY BEHIND JAX'S <ArrowUpRight size={19}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
