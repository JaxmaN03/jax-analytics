import React from 'react';
import { FileSpreadsheet, BarChart3, Cpu, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SERVICES, PRESENTATION_ADDONS } from '../config.js';

export default function Services({ onSelectService, onSelectPresentation }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-7 h-7 text-[#E3C581]" />;
      case 'BarChart3':
        return <BarChart3 className="w-7 h-7 text-[#E3C581]" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7 text-[#83B8D4]" />;
      default:
        return <BarChart3 className="w-7 h-7 text-[#E3C581]" />;
    }
  };

  const handleRequestQuote = (serviceId) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#101C32] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-4xl mb-16 border-l-2 border-[#E3C581] pl-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#243E60] border border-[#E3C581]/20 text-xs font-mono text-[#E3C581] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MISSION CATALOG / 001</span>
          </div>
          <h2 className="space-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#F3EBD9] tracking-tight mb-4">
            Practical Tools. Clearer Horizons.
          </h2>
          <p className="text-base sm:text-lg text-[#B9C8D8] leading-relaxed">
            Fix your spreadsheet, understand your performance, or automate a recurring report. Check out our services below to see what works best for your business.
          </p>
        </div>

        <div className="mb-10 rounded-sm bg-[#243E60] border border-[#E3C581]/25 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white mb-3">Experience with Nonprofit Data</h3>
          <p className="text-base text-slate-300 leading-relaxed max-w-4xl">
            Extensive hands-on experience working with nonprofit organization data, including donor records, data cleanup, segmentation, giving analysis, and reporting.
          </p>
          <p className="text-sm text-[#B9C8D8] leading-relaxed mt-3">
            Practical support for turning complex nonprofit data into organized records and clear, usable reports.
          </p>
        </div>

        {/* 3 Primary Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between rounded-sm bg-[#243E60] p-7 transition-all duration-300 border ${
                service.isPopular
                  ? 'border-[#E3C581]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] ring-1 ring-[#E3C581]/30'
                  : 'border-slate-800 hover:border-slate-700 hover:shadow-xl'
              } group`}
            >

              <div>
                <p className="font-mono text-xs tracking-[.2em] text-[#E3C581] mb-5">SERVICE / {String(index + 1).padStart(2, "0")}</p>
                {/* Icon & Starting Price Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3.5 rounded-sm bg-[#101C32] border border-slate-800 group-hover:border-[#E3C581]/50 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[#B9C8D8] block">
                      Starting Rate
                    </span>
                    <span className="text-xl font-bold font-mono text-white group-hover:text-[#E3C581] transition-colors">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E3C581] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#B9C8D8] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6 rounded-sm bg-[#101C32] p-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Typical deliverable</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{service.deliverable}</p>
                  <p className="text-xs text-[#B9C8D8] mt-3">{service.pricingNote} We agree the exact deliverables before work begins.</p>
                </div>
                {/* Capabilities List */}
                <div className="pt-4 border-t border-slate-800/80 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2.5">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#E3C581] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-800/60 mt-2">
                <button
                  type="button"
                  onClick={() => handleRequestQuote(service.id)}
                  className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 ${
                    service.isPopular
                      ? 'bg-[#E3C581] text-black hover:bg-[#F3EBD9] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                      : 'bg-[#101C32] text-[#F3EFE9] hover:bg-[#26364B] border border-slate-700 hover:border-[#E3C581]/40'
                  }`}
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div id="presentation-addon" className="mb-12 rounded-sm bg-[#243E60] border border-[#E3C581]/30 p-6 sm:p-8 scroll-mt-24">
          <p className="text-xs font-mono uppercase tracking-wider text-[#E3C581] mb-3">Optional add-on for any service</p>
          <h3 className="text-2xl font-bold text-white mb-3">Your data, ready to present</h3>
          <p className="text-slate-300 leading-relaxed mb-6 max-w-3xl">Add a PowerPoint presentation to your spreadsheet, data analysis, or Python automation project. Turn the completed results into a clear deck for your team, board, or clients.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {PRESENTATION_ADDONS.map((addon) => <div key={addon.id} className="rounded-sm bg-[#101C32] border border-slate-700 p-5 flex flex-col">
              <h4 className="text-lg font-semibold text-white">{addon.name}</h4>
              <p className="text-3xl font-bold text-[#E3C581] mt-3">+${addon.price} <span className="text-sm font-normal text-slate-400">USD</span></p>
              <p className="text-sm text-slate-300 mt-3 mb-4 flex-1">{addon.description}</p>
              <p className="text-sm text-white mb-2">Up to 10 slides · One revision round</p>
              <p className="text-xs text-[#B9C8D8] mb-5">Additional slides: ${addon.extraSlidePrice} each, agreed before work begins.</p>
              <button type="button" onClick={() => { onSelectPresentation?.(addon.id); }} className="min-h-11 rounded-sm border border-[#E3C581]/40 px-4 py-3 text-sm font-semibold text-[#E3C581] hover:bg-[#E3C581]/10">Add {addon.id === 'template' ? 'template presentation' : 'custom presentation'} to my quote</button>
            </div>)}
          </div>
          <p className="text-sm text-slate-300 mt-5 leading-relaxed">Both options include editable PowerPoint and PDF files, using the analysis completed in your main project. All created or updated slides count toward the slide limit, including title and closing slides. One revision round covers one consolidated set of changes to the agreed content.</p>
          <p className="text-xs text-[#B9C8D8] mt-3 leading-relaxed">Prices are added to your main service quote. New analysis, major changes to the brief, advanced animation, and live presentation delivery are quoted separately. We confirm your audience, source data, branding, slide count, and total price before work begins.</p>
        </div>

        {/* Pricing Transparency & Scope Notice */}
        <div className="max-w-3xl mx-auto rounded-sm bg-[#243E60]/60 border border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#E3C581]/10 text-[#E3C581] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">
                Transparent Pricing Guarantee
              </p>
              <p className="text-xs text-[#B9C8D8]">
                Final pricing depends on project scope, complexity, and turnaround requirements. All engagements receive a detailed upfront quote before work commences.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleRequestQuote('excel')}
            className="shrink-0 px-4 py-2 text-xs font-semibold text-[#E3C581] hover:text-white bg-[#E3C581]/10 hover:bg-[#E3C581]/20 border border-[#E3C581]/30 rounded-sm transition-colors"
          >
            Ask for Custom Estimate
          </button>
        </div>

      </div>
    </section>
  );
}
