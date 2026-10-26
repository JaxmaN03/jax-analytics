import { PAGE_URLS } from '../navigation.js';
import React from 'react';
import { SITE_CONFIG } from '../config.js';

const steps = [
  { title: 'Start with an email', description: 'Tell me about your data, the problem you want to solve, and the result you need. Prefer a phone conversation? Request a call by email and we will agree on a time together.' },
  { title: 'Agree on scope and price', description: 'You receive a written quote covering deliverables, timing, and any presentation add-on. For fixed-price projects, payment is 50% upfront to begin and 50% on delivery.' },
  { title: 'Build and review', description: 'I work on the agreed solution and share progress. Each service package includes one revision round at no extra charge: one consolidated set of changes within the agreed scope. New features or additional analysis receive a separate quote.' },
  { title: 'Receive your files and instructions', description: 'You receive the agreed files with written instructions explaining how to use them. For spreadsheets or automation, the instructions also explain how to update the workbook or rerun the workflow, as applicable.' },
];

export default function Process() {
  return (
    <section id="how-it-works" aria-labelledby="process-heading" className="py-20 md:py-28 bg-[#112033] border-t border-slate-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-4">A clear process from the first email</p>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">How Working Together Works</h2>
          <p className="text-base sm:text-lg text-[#BDB8AE] leading-relaxed">Know what to expect before your project begins, whether you need a spreadsheet repaired, a report prepared, or a recurring task automated.</p>
        </div>
        <ol className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-slate-700 pt-6">
              <span aria-hidden="true" className="text-sm font-mono text-[#D4AF37]">0{index + 1}</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-3">{step.title}</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a href={PAGE_URLS.contact} className="inline-flex min-h-11 items-center justify-center px-5 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:bg-[#E2C568]">Tell me about your project</a>
          <a href={`mailto:${SITE_CONFIG.contactEmail}?subject=Request%20to%20schedule%20a%20phone%20call&body=Hello%20Jackson%2C%0A%0AI%20would%20like%20to%20schedule%20a%20phone%20call%20about%20my%20project.%0A%0AProject%20overview%3A%0APreferred%20days%20and%20times%3A%0ATime%20zone%3A%0ABest%20phone%20number%3A%0A`} className="inline-flex min-h-11 items-center text-sm font-semibold text-[#D4AF37] hover:underline">Request a phone call by email</a>
        </div>
        <p className="text-xs text-[#BDB8AE] mt-4">Call times are confirmed by email. Sending a request does not book an appointment.</p>
      </div>
    </section>
  );
}
