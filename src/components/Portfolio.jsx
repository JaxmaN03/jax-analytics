import React from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { CASE_STUDY_URLS } from '../navigation.js';
import PortfolioDemos from './PortfolioDemos.jsx';

export default function Portfolio({ onDiscussProject }) {
  const handleDiscussClick = () => {
    if (onDiscussProject) {
      onDiscussProject('analysis');
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#101C32] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-4xl mb-16 border-l-2 border-[#E3C581] pl-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#243E60] border border-[#83B8D4]/30 text-xs font-mono text-[#83B8D4] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHIVE / SELECTED WORK</span>
          </div>
          <h2 className="space-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-extrabold text-[#F3EBD9] tracking-tight mb-4">
            The Project Archives
          </h2>
          <p className="text-base sm:text-lg text-[#B9C8D8] leading-relaxed">
            Explore case studies and try interactive dashboards. All demonstrations use fictional data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { id: 'nonprofit', title: 'Understanding Your Nonprofit Supporters', label: 'Nonprofit data analysis', description: 'Explore who supports a fictional nonprofit, where supporters come from, and how their giving changes. Includes interactive results and a sample presentation.', detail: '24 fictional donors · Three years of giving' },
            { id: 'reporting', title: 'Excel Data Cleanup & Reporting Tool', label: 'Spreadsheet reporting & Python automation', description: 'See a messy sales export become organized records and usable reports, with a clear before-and-after example and a downloadable tool.', detail: 'Fictional sales data · Working demonstration' },
          ].map((project) => <article key={project.id} className="rounded-sm bg-[#243E60] border border-slate-700 p-6 sm:p-8 flex flex-col">
            <p className="text-xs font-mono text-[#E3C581] mb-3">{project.label}</p>
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">{project.description}</p>
            <p className="text-xs text-[#B9C8D8] mb-6">{project.detail}</p>
            <a href={CASE_STUDY_URLS[project.id]} aria-label={`View case study: ${project.title}`} className="inline-flex min-h-11 items-center justify-center space-cta bg-[#E3C581] px-4 py-3 text-sm font-semibold text-[#101C32] hover:bg-[#F3EBD9] transition-colors">View Case Study <ArrowUpRight aria-hidden="true" className="w-4 h-4 ml-2" /></a>
          </article>)}
        </div>
        <PortfolioDemos />

        {/* Portfolio CTA */}
        <div className="rounded-sm bg-gradient-to-r from-[#243E60] via-[#26364B] to-[#243E60] border border-slate-800 p-8 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Have a Specific Project or Data Challenge?
          </h3>
          <p className="text-sm text-[#B9C8D8] leading-relaxed mb-6">
            Need help with one spreadsheet, a custom dashboard, or a reporting process you run every week? Tell me what you&apos;re working on and we&apos;ll figure out what would help.
          </p>
          <button
            type="button"
            onClick={handleDiscussClick}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#101C32] bg-[#E3C581] rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-[#F3EBD9] transition-all duration-200 active:scale-95"
          >
            <span>Start a Free Consultation</span>
          </button>
        </div>

      </div>

    </section>
  );
}
