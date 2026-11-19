import React from 'react';
import { PAGE_URLS } from '../navigation.js';
import NonprofitDemo from './NonprofitDemo.jsx';
import ReportingDemo from './ReportingDemo.jsx';

export default function CaseStudy({ kind, onDiscussProject }) {
  return (
    <section className="py-12 md:py-20 bg-[#101C32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href={PAGE_URLS.portfolio} className="inline-flex min-h-11 items-center text-sm font-semibold text-[#E3C581] hover:text-[#F3EBD9] hover:underline mb-6">← Back to Portfolio</a>
        {kind === 'nonprofit' ? <NonprofitDemo onDiscussProject={() => onDiscussProject('analysis')} /> : <ReportingDemo onDiscussProject={() => onDiscussProject('analysis')} />}
      </div>
    </section>
  );
}
