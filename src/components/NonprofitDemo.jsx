import React, { useState } from 'react';
import demo from '../nonprofitDemo.json';

const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
const percent = (value) => `${(value * 100).toFixed(1)}%`;
const views = {
  cohorts: { label: 'Donor generations', heading: 'Who is supporting the organization?', note: 'Six fictional donors in each cohort. Equal donor counts can produce very different giving totals. Cohorts use birth years: Matures through 1945, Baby Boomers 1946–1964, Generation X 1965–1980, and Millennials 1981–1996.' },
  cities: { label: 'Donor locations', heading: 'Which communities contribute?', note: 'Location describes where donors live. It does not identify how they first heard about the organization.' },
  channels: { label: 'Outreach sources', heading: 'How did supporters first connect?', note: 'Each fictional donor has one assigned acquisition source. Compare these patterns with campaign costs before deciding where to invest. Giving totals alone do not establish return on investment.' },
  years: { label: 'Giving over time', heading: 'How is giving changing?', note: 'The same 24 donors appear in all three years. This example shows changes in giving, not donor acquisition or retention. Amounts are annual donor totals in USD.' },
};

export default function NonprofitDemo({ onDiscussProject }) {
  const [view, setView] = useState('cohorts');
  const rows = demo[view].map((row) => ({ ...row, name: row.name ?? String(row.year) }));
  const max = Math.max(...rows.map((row) => row.total));
  return (
    <article id="nonprofit-case-study" aria-labelledby="nonprofit-title" className="rounded-2xl bg-[#151C2C] border border-[#8B5CF6]/40 p-6 sm:p-8 mb-10 scroll-mt-24">
      <p className="text-sm font-semibold text-violet-300 mb-3">Nonprofit specialty · Fictional data demonstration</p>
      <h3 id="nonprofit-title" className="text-2xl sm:text-3xl font-bold text-white mb-3">Understanding Your Nonprofit Supporters</h3>
      <p className="text-slate-300 leading-relaxed max-w-4xl">Who are your biggest supporters, where are they coming from, and how is their giving changing? This example turns donor records into a clear starting point for stewardship and outreach planning.</p>
      <p className="text-sm text-[#94A3B8] mt-3">An original example for a fictional Oklahoma nonprofit. Every donor and amount is synthetic. No client or employer records are included.</p>
      <dl className="grid sm:grid-cols-3 gap-4 my-7">
        {[[`${demo.donors}`, 'Fictional donors'], [money(demo.total), '2025 giving (USD)'], [percent(demo.topFiveShare), '2025 giving from the top five donors']].map(([value, label]) => <div key={label} className="rounded-xl bg-[#0B0F19] p-4 border border-slate-800"><dt className="text-xs text-[#94A3B8] mb-2">{label}</dt><dd className="text-2xl font-bold text-white">{value}</dd></div>)}
      </dl>
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div><h4 className="font-semibold text-white mb-2">The question behind the analysis</h4><p className="text-sm text-slate-300 leading-relaxed">Nonprofits need to understand who is supporting their work so they can focus their efforts thoughtfully. A useful report connects donor groups, giving history, and outreach sources while keeping the underlying records available for review.</p></div>
        <div><h4 className="font-semibold text-white mb-2">What this example reveals</h4><p className="text-sm text-slate-300 leading-relaxed">The five largest donors contribute {money(demo.topFiveTotal)} of the {money(demo.total)} recorded in 2025. Tulsa accounts for {money(demo.cities.find((row) => row.name === 'Tulsa').total)}. Giving across the sample rises {percent(demo.growth)} between 2023 and 2025. These are fictional findings, not actual fundraising results.</p></div>
      </div>
      <div className="rounded-xl bg-[#0B0F19] border border-slate-800 p-4 sm:p-6 mb-8">
        <div role="group" aria-label="Nonprofit analysis views" className="flex flex-wrap gap-2 mb-6">
          {Object.entries(views).map(([id, item]) => <button key={id} type="button" aria-pressed={view === id} aria-controls="nonprofit-results" onClick={() => setView(id)} className={`min-h-11 rounded-lg border px-3 py-2 text-sm font-medium ${view === id ? 'text-[#00D9FF] border-[#00D9FF]/50 bg-[#00D9FF]/10' : 'text-slate-300 border-slate-700 hover:border-slate-500'}`}>{item.label}</button>)}
        </div>
        <div id="nonprofit-results" role="region" aria-labelledby="nonprofit-view-heading">
          <h4 id="nonprofit-view-heading" className="text-lg font-semibold text-white mb-4">{views[view].heading}</h4>
          <p className="text-xs text-[#94A3B8] mb-4">{view === 'years' ? 'Annual giving, 2023–2025' : '2025 giving by group'} · USD · Fictional data</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{views[view].label}: fictional giving totals</caption>
              <thead className="text-xs text-[#94A3B8]"><tr><th scope="col" className="py-2 pr-4">{view === 'years' ? 'Year' : 'Group'}</th>{view !== 'years' && <th scope="col" className="py-2 pr-4 text-right">Donors</th>}<th scope="col" className="py-2 text-right">Giving</th></tr></thead>
              <tbody>{rows.map((row) => <tr key={row.name} className="border-t border-slate-800"><th scope="row" className="py-4 pr-4 font-medium text-slate-200"><span>{row.name}</span><span aria-hidden="true" className="block h-1.5 mt-2 rounded-full bg-[#8B5CF6]" style={{ width: `${row.total / max * 100}%` }} /></th>{view !== 'years' && <td className="py-4 pr-4 text-right text-slate-300">{row.donors}</td>}<td className="py-4 text-right text-[#00D9FF] font-mono whitespace-nowrap">{money(row.total)}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed mt-4">{views[view].note}</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">From findings to a presentation</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">The six-slide sample deck presents the same calculations in a format a nonprofit team can discuss. It includes donor generations, locations and outreach sources, giving trends, the largest supporters, and questions for planning the next steps.</p>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">For your project, we agree on the donor definitions, reporting period, and questions first. The analysis can include a cleaned workbook and written findings. Add a presentation using your template or a new design.</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a download href={`${import.meta.env.BASE_URL}downloads/nonprofit-supporter-analysis.pptx`} className="inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-4 py-3 text-sm font-semibold text-[#00D9FF] hover:border-[#00D9FF]">Download Sample PowerPoint</a>
            <a href={`${import.meta.env.BASE_URL}downloads/nonprofit-supporter-analysis.pdf`} className="inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-4 py-3 text-sm font-semibold text-[#00D9FF] hover:border-[#00D9FF]">View Sample PDF</a>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed mb-5">PowerPoint charts are editable. The PDF is a static preview. <a download href={`${import.meta.env.BASE_URL}downloads/nonprofit-fictional-data.json`} className="text-[#00D9FF] underline">Inspect the fictional source data (JSON)</a>.</p>
          <button type="button" onClick={onDiscussProject} className="inline-flex min-h-11 items-center rounded-lg bg-[#00D9FF] px-5 py-3 text-sm font-semibold text-black hover:bg-[#33E0FF]">Discuss your nonprofit data</button>
          <a href="#presentation-addon" className="block mt-4 text-sm text-[#00D9FF] hover:underline">See presentation add-on pricing</a>
        </div>
        <figure>
          <img loading="lazy" src={`${import.meta.env.BASE_URL}images/nonprofit-presentation-preview.png`} width="1280" height="720" alt="Sample presentation slide with 2025 fictional giving by donor location and acquisition channel." className="w-full h-auto rounded-xl border border-slate-700" />
          <figcaption className="text-xs text-[#94A3B8] mt-3">Slide 3 from the downloadable sample. All amounts are fictional.</figcaption>
        </figure>
      </div>
    </article>
  );
}
