import React from 'react';

export default function DataHandling() {
  return (
    <section id="data-handling" aria-labelledby="data-handling-heading" className="py-12 md:py-16 bg-[#0D1B2A] border-t border-slate-900 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="data-handling-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6">Your files and project code</h2>
        <div className="space-y-5 text-sm text-[#BDB8AE] leading-relaxed">
          <p><strong className="text-slate-200">Sharing files.</strong> Start with an overview of your project. We agree on a secure transfer method before you send donor records or other sensitive data.</p>
          <p><strong className="text-slate-200">Keeping files for future work.</strong> Working copies of client data are deleted 30 days after project completion by default. If you plan to work with me again, you can request a longer retention period. We agree on that period in writing. Retaining your files does not permit using them in another client&apos;s project.</p>
          <p><strong className="text-slate-200">Exclusive code option.</strong> For a separate quoted fee and signed agreement, newly written project code can be exclusive to you. I will not reuse the code covered by that agreement in other projects. The agreement identifies the covered code, with existing reusable tools and third-party components identified separately under their existing rights and licenses.</p>
        </div>
      </div>
    </section>
  );
}
