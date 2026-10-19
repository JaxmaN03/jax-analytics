import React, { useState } from 'react';
import { REPORTING_DEMO } from '../reportingDemo.js';

const formatAmount = (value) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0,
}).format(value);

export default function DashboardIllustration() {
  const [activeTab, setActiveTab] = useState('results');
  const demo = REPORTING_DEMO;
  return (
    <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl bg-[#151C2C]/90 border border-slate-700/60 shadow-2xl shadow-cyan-950/40 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <span className="font-semibold text-sm text-white">Reporting Tool Demo</span>
        <span className="px-2.5 py-1 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-xs text-[#00D9FF]">Fictional sales data</span>
      </div>
      <div className="flex gap-2 my-4" role="group" aria-label="Demo views">
        {[['results', 'Sample Results'], ['workflow', 'How It Works']].map(([id, label]) => (
          <button key={id} type="button" aria-pressed={activeTab === id} onClick={() => setActiveTab(id)}
            className={`min-h-11 px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${activeTab === id ? 'bg-[#00D9FF]/15 text-[#00D9FF] border-[#00D9FF]/40' : 'text-slate-300 bg-[#0B0F19]/60 border-slate-800'}`}>{label}</button>
        ))}
      </div>
      <dl className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
        {[
          ['Source records', demo.sourceRecords, 'Before cleanup'],
          ['Retained records', demo.retainedRecords, 'After cleanup'],
          ['Duplicate removed', demo.duplicatesRemoved, 'By record ID'],
        ].map(([label, value, note]) => (
          <div key={label} className="p-2 sm:p-3 rounded-xl bg-[#0B0F19]/70 border border-slate-800">
            <dt className="text-xs text-[#94A3B8]">{label}</dt>
            <dd className="text-xl sm:text-2xl font-bold font-mono text-white my-1">{value}</dd>
            <dd className="text-xs text-[#94A3B8]">{note}</dd>
          </div>
        ))}
      </dl>
      {activeTab === 'results' ? (
        <div className="rounded-xl bg-[#0B0F19]/80 border border-slate-800 p-4 mb-4">
          <h3 className="text-sm font-semibold text-white">Sample sales by category</h3>
          <p className="text-xs text-[#94A3B8] mt-1 mb-4">2026 fictional sample · USD · duplicate removal enabled</p>
          <ul className="space-y-3" aria-label="Sample category totals">
            {demo.categories.map((category) => (
              <li key={category.name}>
                <div className="flex justify-between gap-3 text-sm mb-1">
                  <span className="text-slate-300">{category.name}</span>
                  <span className="font-mono text-white">{formatAmount(category.total)}</span>
                </div>
                <div aria-hidden="true" className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00D9FF] rounded-full" style={{ width: `${category.total / demo.categories[0].total * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between gap-3 mt-4 pt-3 border-t border-slate-800 text-sm font-semibold text-white">
            <span>Total valid amounts</span><span className="font-mono">{formatAmount(demo.total)}</span>
          </div>
          <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed">One invalid amount is excluded. One invalid date is flagged; its valid amount stays in these category totals.</p>
        </div>
      ) : (
        <div className="rounded-xl bg-[#0B0F19]/80 border border-slate-800 p-4 mb-4">
          <h3 className="text-sm font-semibold text-white mb-3">From source file to usable reports</h3>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-300">
            <li>Choose an Excel or CSV file and map the category, amount, date, and optional ID columns.</li>
            <li>Flag invalid amounts and dates. Optionally remove repeated IDs, keeping the first record.</li>
            <li>Generate a cleaned master, grouped record sheets, yearly comparisons, and a Word summary.</li>
          </ol>
          <p className="text-xs text-[#94A3B8] mt-4 leading-relaxed">The Python tool runs on your computer. This preview shows saved sample results, not a live processing service. Reports refresh when you rerun the tool.</p>
        </div>
      )}
      <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">Verified output from the downloadable fictional sample. These figures describe the demonstration, not client outcomes.</p>
      <a href="#portfolio" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#00D9FF] hover:text-white">Explore the tool and sample data →</a>
    </div>
  );
}
