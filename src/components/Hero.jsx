import React from 'react';
import { ArrowRight, Sparkles, Database, FileSpreadsheet, Cpu, ChevronRight } from 'lucide-react';
import { navigate, PAGE_URLS } from '../navigation.js';
import { SITE_CONFIG } from '../config.js';
import DashboardIllustration from './DashboardIllustration.jsx';

export default function Hero({ onStartProject }) {
  const handleScrollTo = () => navigate(PAGE_URLS.services);

  const handleStartProjectClick = () => {
    if (onStartProject) {
      onStartProject('excel');
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden tech-grid-bg">
      {/* Background radial glow */}
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151C2C] border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.15)] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span className="font-semibold">{SITE_CONFIG.tagline}</span>
              <span className="text-slate-600">|</span>
              <span className="text-[#94A3B8]">{SITE_CONFIG.location}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Turn Complex Data Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#38bdf8] to-[#8B5CF6]">
                Clear Decisions.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl font-normal">
              {SITE_CONFIG.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={handleStartProjectClick}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-black bg-[#00D9FF] rounded-xl shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:bg-[#33E0FF] hover:shadow-[0_0_30px_rgba(0,217,255,0.7)] active:scale-95 transition-all duration-200 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('#services')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-[#F1F5F9] bg-[#151C2C] hover:bg-[#1A2338] border border-slate-700 hover:border-[#00D9FF]/50 rounded-xl transition-all duration-200"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Target Audience Bar */}
            <div className="pt-6 border-t border-slate-800/80 w-full max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                Tailored Solutions For
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Small Businesses',
                  'Accounting Firms',
                  'Property Management',
                  'Insurance Agencies',
                  'Independent Operators',
                ].map((aud) => (
                  <span
                    key={aud}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#151C2C]/80 border border-slate-800 text-xs text-slate-300 font-medium"
                  >
                    {aud}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Illustration */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <DashboardIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
