import React from 'react';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';
import { ABOUT_INFO } from '../config.js';

export default function About({ onConnectClick }) {
  return (
    <section id="about" className="nasapunk-grid relative bg-[#F3EBD9] text-[#101C32] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="flex flex-wrap justify-between gap-3 pb-5 mb-14 border-b border-[#243E60]/35">
          <span className="archive-label !text-[#243E60]">PERSONNEL ARCHIVE / 001</span>
          <span className="archive-label !text-[#243E60]">INDEPENDENT DATA PRACTICE · TULSA, OK</span>
        </div>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative border border-[#E3C581]/45 bg-[#243E60] p-6 sm:p-8">
              <div className="flex justify-between archive-label mb-9"><span>IDENTIFICATION / JM-01</span><span>ACTIVE</span></div>
              <div className="relative aspect-[4/3] bg-[#101C32] border border-[#E3C581]/25 flex items-center justify-center overflow-hidden mb-7" aria-hidden="true">
                <svg viewBox="0 0 320 240" className="w-full h-full">
                  <circle cx="160" cy="120" r="89" fill="none" stroke="#E3C581" strokeOpacity=".5"/>
                  <circle cx="160" cy="120" r="65" fill="none" stroke="#E3C581" strokeOpacity=".25" strokeDasharray="3 7"/>
                  <ellipse cx="160" cy="120" rx="133" ry="42" transform="rotate(-28 160 120)" fill="none" stroke="#83B8D4" strokeWidth="2"/>
                  <circle cx="160" cy="120" r="38" fill="#E3C581"/>
                  <text x="160" y="134" textAnchor="middle" fontSize="39" fontWeight="bold" fill="#101C32">JM</text>
                  <path d="M20 18h25M20 18v25M300 222h-25M300 222v-25" stroke="#E66C37" strokeWidth="2"/>
                </svg>
              </div>
              <div className="archive-label mb-2">LEAD ANALYST / FOUNDER</div>
              <h3 className="space-heading text-3xl sm:text-4xl text-[#F3EBD9] mb-2">{ABOUT_INFO.analystName}</h3>
              <p className="text-[#E3C581] text-sm mb-5">{ABOUT_INFO.role}</p>
              <div className="flex items-center gap-2 text-sm text-[#B9C8D8] border-t border-[#E3C581]/25 pt-5"><MapPin size={16}/>{ABOUT_INFO.location}</div>
              <button type="button" onClick={() => onConnectClick?.('excel')} className="mt-7 w-full inline-flex items-center justify-center gap-3 bg-[#E3C581] hover:bg-[#F3EBD9] text-[#101C32] font-bold text-sm tracking-wider px-6 py-4 transition-colors">CONNECT WITH JACKSON <ArrowUpRight size={18}/></button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="archive-label !text-[#243E60] mb-5">THE PERSON BEHIND THE NUMBERS</p>
            <h2 className="space-heading text-[clamp(2.8rem,5.5vw,5.6rem)] leading-[1.03] tracking-[-.04em] mb-8 text-[#101C32]">{ABOUT_INFO.heading}</h2>
            <p className="text-lg text-[#285B80] mb-7">Practical data solutions. Clear communication. Personal accountability.</p>
            <div className="space-y-5 text-[#243E60] leading-relaxed mb-10">{ABOUT_INFO.paragraphs.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div>
            <div className="border-t border-[#243E60]/35 pt-7">
              <h3 className="archive-label !text-[#243E60] mb-5">TECHNICAL CAPABILITIES / INDEX</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{ABOUT_INFO.skills.map((skill,index)=><div key={skill} className="border border-[#E3C581]/25 bg-[#243E60]/50 px-3 py-4 min-h-16 flex flex-col justify-between gap-2"><span className="text-[10px] font-mono text-[#E3C581]">{String(index+1).padStart(2,'0')}</span><span className="text-sm text-[#F3EBD9]">{skill}</span></div>)}</div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">{ABOUT_INFO.valueProps.map(vp=><div key={vp.title} className="border-l-2 border-[#E66C37] pl-4 py-2"><h4 className="flex gap-2 items-center text-[#101C32] font-semibold mb-2"><CheckCircle2 size={16} className="text-[#E3C581]"/>{vp.title}</h4><p className="text-sm leading-relaxed text-[#243E60]">{vp.description}</p></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
