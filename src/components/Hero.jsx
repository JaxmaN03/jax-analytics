import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { navigate, PAGE_URLS } from '../navigation.js';
import { SITE_CONFIG } from '../config.js';

function OrbitalArtwork() {
  return (
    <div className="orbital-art relative aspect-square w-full max-w-[540px] mx-auto" aria-hidden="true">
      <svg viewBox="0 0 560 560" className="w-full h-full" role="presentation">
        <defs>
          <radialGradient id="sun" cx="40%" cy="36%" r="70%"><stop stopColor="#F4DEAA"/><stop offset="1" stopColor="#D8B775"/></radialGradient>
          <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#83B8D4"/><stop offset="1" stopColor="#24466D"/></linearGradient>
        </defs>
        <circle cx="300" cy="260" r="177" fill="none" stroke="#E3C581" strokeOpacity=".22" strokeWidth="1"/>
        <circle cx="300" cy="260" r="222" fill="none" stroke="#E3C581" strokeOpacity=".12" strokeWidth="1" strokeDasharray="2 9"/>
        <circle cx="325" cy="240" r="113" fill="url(#sun)"/>
        <circle cx="325" cy="240" r="93" fill="none" stroke="#101C32" strokeOpacity=".35"/>
        <path d="M-80 470 C90 405 115 150 420 128 C520 120 620 150 680 175" fill="none" stroke="#8AB8D1" strokeWidth="29"/>
        <path d="M-80 500 C90 435 115 180 420 158 C520 150 620 180 680 205" fill="none" stroke="#345D83" strokeWidth="27"/>
        <path d="M-80 530 C90 465 115 210 420 188 C520 180 620 210 680 235" fill="none" stroke="#E3C581" strokeWidth="9"/>
        <path d="M-80 552 C90 487 115 232 420 210 C520 202 620 232 680 257" fill="none" stroke="#E66C37" strokeWidth="12"/>
        <ellipse cx="305" cy="260" rx="260" ry="87" transform="rotate(-32 305 260)" fill="none" stroke="#F3EBD9" strokeOpacity=".6" strokeWidth="1.3"/>
        <circle cx="82" cy="366" r="6" fill="#F3EBD9"/>
        <circle cx="492" cy="132" r="5" fill="#E66C37"/>
        {Array.from({length:35},(_,i)=><circle key={i} cx={(i*137+43)%560} cy={(i*83+29)%560} r={i%7===0?2:1} fill="#F3EBD9" opacity={i%4===0?.8:.35}/>)}
        <path d="M300 16v25M287 28h26M496 390v20M486 400h20" stroke="#E3C581" strokeWidth="1.5"/>
        <text x="40" y="52" fill="#E3C581" fontSize="11" letterSpacing="3">FIG. 01 / NEW PERSPECTIVES</text>
        <text x="350" y="535" fill="#E3C581" fontSize="11" letterSpacing="3">ORBITAL STUDIES — 2026</text>
      </svg>
    </div>
  );
}

export default function Hero({ onStartProject }) {
  return (
    <section id="home" className="space-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="flex justify-between items-center border-b border-[#E3C581]/25 py-4 gap-4">
          <span className="archive-label">JAX'S ANALYTICS / EST. 2026</span>
          <span className="archive-label hidden sm:block">TULSA, OKLAHOMA · AVAILABLE NATIONWIDE</span>
          <span className="archive-label sm:hidden">JA — 001</span>
        </div>
        <div className="grid lg:grid-cols-12 items-center gap-8 lg:gap-4 py-12 sm:py-16 lg:py-24">
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-3 mb-7"><span className="w-9 h-px bg-[#E3C581]"/><span className="archive-label">THE FUTURE IS CLEAR / A NEW PERSPECTIVE ON DATA</span></div>
            <h1 className="space-heading text-[clamp(2.8rem,6.1vw,6rem)] leading-[.91] tracking-[-.055em] text-[#F3EBD9] mb-8">
              MAKING DATA<br/><em className="not-italic text-[#E3C581]">SIMPLE,</em><br/>ACCESSIBLE &amp;<br/>ACTIONABLE.
            </h1>
            <p className="text-xl sm:text-2xl text-[#F3EBD9] font-medium mb-4">{SITE_CONFIG.tagline}</p>
            <p className="text-base sm:text-lg text-[#B9C8D8] leading-relaxed max-w-xl mb-9">
              We work to turn complex information into clear insights and practical solutions, helping people and businesses work smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={()=>onStartProject?.('excel')} className="space-cta inline-flex items-center justify-center gap-3 px-7 py-4 font-semibold text-[#101C32] bg-[#E3C581] hover:bg-[#F3EBD9] transition-colors">
                START A PROJECT <ArrowUpRight size={19}/>
              </button>
              <button type="button" onClick={()=>navigate(PAGE_URLS.services)} className="inline-flex items-center justify-center gap-3 px-7 py-4 font-semibold text-[#F3EBD9] border border-[#E3C581]/45 hover:border-[#E3C581] hover:bg-[#E3C581]/10 transition-colors">
                EXPLORE SERVICES <ArrowRight size={19}/>
              </button>
            </div>
          </div>
          <div className="lg:col-span-5"><OrbitalArtwork/></div>
        </div>
        <div className="border-t border-[#E3C581]/25 py-5 flex flex-wrap justify-between gap-3">
          <span className="archive-label">01 / UNDERSTAND</span>
          <span className="archive-label">02 / SIMPLIFY</span>
          <span className="archive-label">03 / MOVE FORWARD</span>
        </div>
      </div>
    </section>
  );
}
