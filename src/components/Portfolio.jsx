import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Building2,
  Terminal,
  Clock,
  Sparkles,
  Layers,
  ArrowUpRight,
  TrendingUp,
  X,
  CheckCircle2,
} from 'lucide-react';
import ReportingDemo from './ReportingDemo.jsx';
import { PORTFOLIO_PROJECTS } from '../config.js';

export default function Portfolio({ onDiscussProject }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDiscussClick = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (onDiscussProject) {
      onDiscussProject('analysis');
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0F1523] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151C2C] border border-[#8B5CF6]/30 text-xs font-mono text-[#8B5CF6] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Demonstration Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tools & Technical Demonstrations
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Explore a working reporting tool and upcoming project concepts. All demonstrations use fictional data.
          </p>
        </div>

        <ReportingDemo onDiscussProject={handleDiscussClick} />
        {/* Upcoming project concepts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PORTFOLIO_PROJECTS.filter((project) => project.id !== 'automated-reporting').map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-[#151C2C] border border-slate-800 hover:border-[#00D9FF]/40 transition-all duration-300 p-6 group hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B0F19] border border-slate-800 text-[11px] font-mono text-[#94A3B8]">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-400 font-semibold">
                    <Clock className="w-3 h-3" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Visual Preview Illustration with clearly labeled fictional data */}
                <div className="rounded-xl bg-[#0B0F19] border border-slate-800 p-4 mb-6">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[10px] font-mono">
                    <span className="text-[#94A3B8]">Visual Prototype Preview</span>
                    <span className="text-[#00D9FF] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
                      Fictional Data
                    </span>
                  </div>

                  {/* Specific preview illustration based on project type */}
                  {project.previewType === 'financial' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded bg-[#151C2C] border border-slate-800">
                          <span className="text-[9px] text-[#94A3B8] block">Revenue</span>
                          <span className="text-xs font-mono font-bold text-white">$142.5K</span>
                        </div>
                        <div className="p-2 rounded bg-[#151C2C] border border-slate-800">
                          <span className="text-[9px] text-[#94A3B8] block">Expenses</span>
                          <span className="text-xs font-mono font-bold text-slate-300">$51.2K</span>
                        </div>
                        <div className="p-2 rounded bg-[#151C2C] border border-slate-800">
                          <span className="text-[9px] text-[#94A3B8] block">Margin</span>
                          <span className="text-xs font-mono font-bold text-emerald-400">64.2%</span>
                        </div>
                      </div>

                      {/* Mini bar graph mockup */}
                      <div className="h-16 flex items-end justify-between gap-1.5 px-2 pt-2">
                        {[40, 55, 65, 80, 95, 110].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className="w-full bg-gradient-to-t from-[#00D9FF]/30 to-[#00D9FF] rounded-t"
                              style={{ height: `${h * 0.45}px` }}
                            />
                            <span className="text-[8px] font-mono text-[#94A3B8]">M{i + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.previewType === 'property' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded bg-[#151C2C] border border-slate-800">
                          <span className="text-[9px] text-[#94A3B8] block">Occupancy</span>
                          <span className="text-xs font-mono font-bold text-emerald-400">96.5%</span>
                        </div>
                        <div className="p-2 rounded bg-[#151C2C] border border-slate-800">
                          <span className="text-[9px] text-[#94A3B8] block">Units</span>
                          <span className="text-xs font-mono font-bold text-white">48 Total</span>
                        </div>
                        <div className="p-2 rounded bg-[#151C2C] border border-slate-800">
                          <span className="text-[9px] text-[#94A3B8] block">Avg Rent</span>
                          <span className="text-xs font-mono font-bold text-white">$1,350</span>
                        </div>
                      </div>

                      {/* Occupancy bar */}
                      <div className="p-2 rounded bg-[#151C2C] border border-slate-800 space-y-1">
                        <div className="flex justify-between text-[10px] text-[#94A3B8]">
                          <span>Portfolio Leasing Status</span>
                          <span className="text-emerald-400 font-mono">46 Leased / 2 Vacant</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                          <div className="bg-[#00D9FF] h-full" style={{ width: '96.5%' }} />
                          <div className="bg-rose-500/80 h-full" style={{ width: '3.5%' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {project.previewType === 'python' && (
                    <div className="space-y-2 font-mono text-[11px]">
                      <div className="p-2 rounded bg-[#151C2C] border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-400">input_raw_data.csv</span>
                        <span className="text-slate-500 text-[10px]">12.4 MB</span>
                      </div>
                      <div className="flex items-center justify-center py-1">
                        <span className="text-xs text-[#8B5CF6] font-mono flex items-center gap-1">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>pipeline_transform.py &bull; 4.2s</span>
                        </span>
                      </div>
                      <div className="p-2 rounded bg-[#151C2C] border border-[#00D9FF]/40 flex items-center justify-between text-[#00D9FF]">
                        <span>executive_summary.xlsx</span>
                        <span className="text-[10px] font-semibold text-emerald-400">Generated</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Technical Highlights */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Planned Architecture
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.capabilities.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#0B0F19] text-[11px] text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Opens Concept Architecture Details (No Fake Download Links!) */}
              <div className="pt-4 border-t border-slate-800/80 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-[#00D9FF] hover:text-white bg-[#00D9FF]/10 hover:bg-[#00D9FF]/20 border border-[#00D9FF]/30 transition-all duration-200"
                >
                  <span>Explore Concept Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-[#151C2C] via-[#1A2338] to-[#151C2C] border border-slate-800 p-8 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Have a Specific Project or Data Challenge?
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
            Whether you need a custom dashboard designed from scratch or an existing reporting workflow automated, let&apos;s build a solution tailored to your operational needs.
          </p>
          <button
            type="button"
            onClick={handleDiscussClick}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-black bg-[#00D9FF] rounded-lg shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:bg-[#33E0FF] transition-all duration-200 active:scale-95"
          >
            <span>Start a Free Consultation</span>
          </button>
        </div>

      </div>

      {/* Concept Preview Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-xl rounded-2xl bg-[#151C2C] border border-[#00D9FF]/40 p-6 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-[#94A3B8] hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close concept preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded bg-[#0B0F19] text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30">
                {selectedProject.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-xs font-mono text-amber-400 border border-amber-500/30">
                {selectedProject.status}
              </span>
            </div>

            <h3 id="modal-title" className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="rounded-xl bg-[#0B0F19] border border-slate-800 p-4 mb-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D9FF]">
                Simulated Demonstration Highlights
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.sampleMetrics.map((metric) => (
                  <div key={metric.label} className="p-2.5 rounded-lg bg-[#151C2C] border border-slate-800 text-center">
                    <span className="text-[10px] text-[#94A3B8] block">{metric.label}</span>
                    <span className="text-sm font-bold font-mono text-white mt-1 block">{metric.value}</span>
                    <span className="text-[9px] font-mono text-slate-500 mt-0.5 block">{metric.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                Core Architectural Capabilities
              </h4>
              <ul className="space-y-2">
                {selectedProject.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 mb-6 font-mono">
              Notice: This demonstration is currently under active development. In accordance with our transparency standards, demonstration files will be made available upon completion without simulated or fabricated client outcomes.
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  handleDiscussClick();
                }}
                className="px-4 py-2 text-xs font-semibold text-black bg-[#00D9FF] hover:bg-[#33E0FF] rounded-lg shadow-md transition-colors"
              >
                Request Similar Solution
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
