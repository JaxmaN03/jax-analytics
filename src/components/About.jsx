import React from 'react';
import { MapPin, User, CheckCircle2, ArrowRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import { ABOUT_INFO, SITE_CONFIG } from '../config.js';

export default function About({ onConnectClick }) {
  const handleConnect = () => {
    if (onConnectClick) {
      onConnectClick('excel');
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0D1B2A] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B263B] border border-[#D4AF37]/20 text-xs font-mono text-[#D4AF37] mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Independent Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {ABOUT_INFO.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#BDB8AE]">
            Practical data solutions engineered with precision, transparency, and personal accountability.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Jackson Miller Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md rounded-2xl bg-[#1B263B] border border-slate-800 p-8 shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/40 transition-all duration-300">
              
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#91A4BC]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Profile Avatar / Monogram Badge */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#0D1B2A] via-[#1B263B] to-[#34465C] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.25)] mb-4">
                  <span className="font-mono text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#91A4BC]">
                    JM
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0D1B2A] rounded-full border border-slate-700 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {ABOUT_INFO.analystName}
                </h3>
                <p className="text-sm font-medium text-[#D4AF37] mb-2 font-mono">
                  {ABOUT_INFO.role}
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1B2A] border border-slate-800 text-xs text-[#BDB8AE]">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{ABOUT_INFO.location}</span>
                </div>
              </div>

              {/* Core Attributes */}
              <div className="space-y-3 pt-6 border-t border-slate-800/80 mb-6 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1B2A]/60">
                  <span className="text-[#BDB8AE]">Practice</span>
                  <span className="font-medium text-white">Jax&apos;s Analytics</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1B2A]/60">
                  <span className="text-[#BDB8AE]">Focus</span>
                  <span className="font-medium text-white">Excel, Python, Business Analytics</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1B2A]/60">
                  <span className="text-[#BDB8AE]">Engagement</span>
                  <span className="font-medium text-emerald-400">Direct 1-on-1 Consulting</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleConnect}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black bg-[#D4AF37] rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:bg-[#E2C568] transition-all duration-200"
              >
                <span>Connect with Jackson</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

            </div>
          </div>

          {/* Right Column: Bio Copy & Verified Skill Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Bio paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#BDB8AE] leading-relaxed mb-8">
              {ABOUT_INFO.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Skill Badges */}
            <div className="mb-10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#D4AF37]" />
                <span>Core Technical Proficiencies</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {ABOUT_INFO.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1B263B] border border-slate-700/80 hover:border-[#D4AF37]/50 text-sm font-medium text-slate-200 transition-colors shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Value Propositions / Why Work with Jax's Analytics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
              {ABOUT_INFO.valueProps.map((vp) => (
                <div key={vp.title} className="p-4 rounded-xl bg-[#1B263B]/50 border border-slate-800">
                  <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{vp.title}</span>
                  </h4>
                  <p className="text-xs text-[#BDB8AE] leading-relaxed">
                    {vp.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
