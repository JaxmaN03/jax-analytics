import React from 'react';

export default function ReportingDemo() {
  return (
    <article className="rounded-2xl bg-[#151C2C] border border-[#00D9FF]/40 p-6 sm:p-8 mb-10">
      <p className="text-sm font-semibold text-[#00D9FF] mb-3">Available demonstration · Python automation</p>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Excel Data Cleanup &amp; Reporting Tool</h3>
      <p className="text-slate-300 leading-relaxed max-w-3xl">Turn an Excel or CSV export into a cleaned master file, complete records grouped into worksheets, yearly comparisons, and a written results summary.</p>
      <p className="text-sm text-[#94A3B8] mt-3">Independent demonstration using fictional sales data. This is a downloadable Python prototype that runs on your computer.</p>
      <div className="grid sm:grid-cols-2 gap-6 my-6">
        <div>
          <h4 className="font-semibold text-white mb-2">What you receive</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
            <li>Cleaned Master.xlsx — retained records, removed duplicates, and data checks</li>
            <li>Grouped Records.xlsx — full records on separate category sheets</li>
            <li>Yearly Comparison.xlsx — annual totals and defined year-over-year changes</li>
            <li>Results Summary.docx — counts, totals, and reporting methods</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Try the included sample</h4>
          <p className="text-sm text-slate-300 leading-relaxed">The fictional sample has 20 records. With duplicate removal enabled, 19 remain and one duplicate is recorded separately. Invalid amounts and dates are flagged for review.</p>
          <p className="text-sm text-[#94A3B8] mt-3 leading-relaxed">Requires Python 3.11+ and the dependencies listed in the README. Choose columns through command-line options. Supports one category grouping and one date/amount pair per run. Reports are static snapshots; rerun to refresh. The sample covers one year, so its annual changes are blank.</p>
        </div>
      </div>
      <a href={`${import.meta.env.BASE_URL}downloads/jax-analytics-report-tool.zip`} download className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#00D9FF] px-5 py-3 font-semibold text-black hover:bg-[#33E0FF]">Download Tool &amp; Sample Data (ZIP)</a>
      <p className="text-xs text-[#94A3B8] mt-3">Includes source code, fictional CSV, dependencies, and setup instructions. Your source files stay on your computer; this website does not upload or process them.</p>
    </article>
  );
}
