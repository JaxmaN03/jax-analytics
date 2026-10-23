import React from 'react';
import { REPORTING_DEMO } from '../reportingDemo.js';

// Selected source rows from the fictional sample_sales.csv in the download.
const sourcePreview = [
  ['S015', '2026-12-10', 'Consulting', '2000'],
  ['S015', '2026-12-10', 'Consulting', '2000'],
  ['S016', '2026-12-11', '(blank)', '125'],
  ['S017', 'not-a-date', 'Training', '50'],
  ['S018', '2026-12-15', 'Templates', 'unknown'],
];
const dollars = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

export default function ReportingDemo({ onDiscussProject }) {
  return (
    <article id="reporting-case-study" aria-labelledby="reporting-case-study-title" className="rounded-2xl bg-[#151C2C] border border-[#00D9FF]/40 p-6 sm:p-8 mb-10 scroll-mt-24">
      <p className="text-sm font-semibold text-[#00D9FF] mb-3">Featured case study · Fictional data demonstration</p>
      <p className="text-sm text-[#94A3B8] mb-3">From a messy export to reports you can use</p>
      <h3 id="reporting-case-study-title" className="text-2xl sm:text-3xl font-bold text-white mb-3">Excel Data Cleanup &amp; Reporting Tool</h3>
      <p className="text-slate-300 leading-relaxed max-w-3xl">Turn an Excel or CSV export into a cleaned master file, complete records grouped into worksheets, yearly comparisons, and a written results summary.</p>
      <p className="text-sm text-[#94A3B8] mt-3">Independent demonstration using fictional sales data. This is a downloadable Python prototype that runs on your computer.</p>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div>
          <h4 className="font-semibold text-white mb-2">Why I built it</h4>
          <p className="text-sm text-slate-300 leading-relaxed">After years of working through the data analysis process, I wanted to make it simpler and faster while keeping it effective. This tool brings recurring cleanup, grouping, and reporting steps into one repeatable workflow.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">The reporting challenge</h4>
          <p className="text-sm text-slate-300 leading-relaxed">A spreadsheet export can contain useful information alongside duplicate records, missing categories, and values that need review. Before you can interpret the results, you need to know which records and amounts are being counted.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 my-8">
        <div className="min-w-0 rounded-xl bg-[#0B0F19] border border-slate-800 p-4 sm:p-5">
          <h4 className="font-semibold text-white mb-1">Before: the source export</h4>
          <p className="text-xs text-[#94A3B8] mb-4">Five selected rows from the 20-record fictional CSV.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <caption className="sr-only">Selected fictional source records before cleanup</caption>
              <thead className="text-[#94A3B8]"><tr>{['RecordID', 'Date', 'Category', 'Amount'].map((label) => <th key={label} scope="col" className="py-2 pr-3 font-medium">{label}</th>)}</tr></thead>
              <tbody>{sourcePreview.map((row, index) => <tr key={index} className="border-t border-slate-800 text-slate-300">{row.map((value, column) => <td key={column} className={`py-3 pr-3 whitespace-nowrap ${index === 1 || value === '(blank)' || value === 'not-a-date' || value === 'unknown' ? 'text-amber-300' : ''}`}>{value}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed mt-4">The repeated S015 is removed when duplicate removal is enabled. Missing categories are grouped as Uncategorized; invalid amounts and dates remain available for review.</p>
        </div>
        <div className="min-w-0 rounded-xl bg-[#0B0F19] border border-[#00D9FF]/25 p-4 sm:p-5">
          <h4 className="font-semibold text-white mb-1">After: a clear group summary</h4>
          <p className="text-xs text-[#94A3B8] mb-4">Verified totals from all 19 retained sample records.</p>
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Fictional sales category totals after duplicate removal</caption>
            <thead className="text-xs text-[#94A3B8]"><tr><th scope="col" className="py-2 font-medium">Category</th><th scope="col" className="py-2 text-right font-medium">Valid amount (USD)</th></tr></thead>
            <tbody>{REPORTING_DEMO.categories.map((group) => <tr key={group.name} className="border-t border-slate-800 text-slate-300"><th scope="row" className="py-3 font-normal">{group.name}</th><td className="py-3 text-right font-mono">{dollars(group.total)}</td></tr>)}</tbody>
            <tfoot><tr className="border-t border-[#00D9FF]/30 text-[#00D9FF]"><th scope="row" className="py-3">Total valid amounts</th><td className="py-3 text-right font-mono font-semibold">{dollars(REPORTING_DEMO.total)}</td></tr></tfoot>
          </table>
          <p className="text-xs text-[#94A3B8] leading-relaxed mt-4">One invalid amount is excluded. The $50 with an invalid date contributes to its category total, but not the annual total. These are sample results, not client outcomes.</p>
        </div>
      </div>
      <p className="text-xs text-[#94A3B8] leading-relaxed mb-8">These web previews show source values and calculated results from the downloadable sample; they are not screenshots of Excel. The generated workbooks also retain the underlying records and review findings.</p>
      <div className="grid sm:grid-cols-2 gap-6 border-y border-slate-800 py-6 my-6">
        <div><h4 className="font-semibold text-white mb-2">For small businesses</h4><p className="text-sm text-slate-300 leading-relaxed">Organize a sales or expense export, inspect records by category, and prepare a consistent starting point for recurring reports.</p></div>
        <div><h4 className="font-semibold text-white mb-2">For nonprofits</h4><p className="text-sm text-slate-300 leading-relaxed">My specialty is nonprofit data. A similar approach can support organizing giving records and preparing fundraising reports, with duplicate rules and reporting definitions agreed for your data. Donor-specific analysis requires a tailored workflow.</p></div>
      </div>
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
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <button type="button" onClick={onDiscussProject} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#00D9FF] px-5 py-3 font-semibold text-black hover:bg-[#33E0FF]">Have a similar spreadsheet? Let&apos;s talk.</button>
        <a href={`${import.meta.env.BASE_URL}downloads/jax-analytics-report-tool.zip`} download className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-600 px-5 py-3 font-semibold text-[#00D9FF] hover:border-[#00D9FF]">Download Tool &amp; Sample Data (ZIP)</a>
      </div>
      <p className="text-xs text-[#94A3B8] mt-3">Includes source code, fictional CSV, dependencies, and setup instructions. Your source files stay on your computer; this website does not upload or process them.</p>
    </article>
  );
}
