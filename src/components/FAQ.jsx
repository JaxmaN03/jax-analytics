import React from 'react';

const questions = [
  ['What kinds of files can you work with?', 'Excel workbooks and CSV exports are a good starting point. Tell me which systems and file formats you use so we can confirm what the project needs before you send files.'],
  ['Can we work together remotely?', 'Yes. I am based in Tulsa, Oklahoma, and work with clients remotely. We can discuss your project by email or arrange a phone call by email.'],
  ['How do I get a quote?', 'Describe the problem, the files or systems involved, and the result you need. I will confirm the scope, deliverables, timing, and price in writing before work begins.'],
  ['How does payment work?', 'For fixed-price projects, payment is 50% upfront to begin and 50% on delivery. Presentation add-ons are included in the written project quote.'],
  ['What is included in a revision?', 'Each service package includes one revision round at no extra charge: one consolidated set of requested changes within the agreed scope. New features or additional analysis receive a separate quote.'],
  ['What do I receive when the project is finished?', 'You receive the agreed files with written instructions. For spreadsheets or automation, the instructions explain how to update the workbook or rerun the workflow, as applicable. Presentation add-ons include editable PowerPoint and PDF files.'],
  ['How should I share my files, and how long are they kept?', 'Start with a project overview rather than sending sensitive files in your first inquiry. We agree on a secure transfer method before you share the data. Working copies of client data are deleted 30 days after project completion unless we agree in writing on a longer retention period for future work.'],
  ['Can I request exclusive rights to code written for my project?', 'Yes. Exclusive rights to newly written project code are available for a separate quoted fee and signed agreement. I will not reuse the code covered by that agreement in other projects. We identify the covered code before work begins. Existing reusable tools and third-party components are identified separately and remain subject to their existing rights and licenses.'],
];

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-20 bg-[#0D1B2A] border-t border-slate-900 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">A few things you might be wondering</h2>
        <p className="text-[#BDB8AE] leading-relaxed mb-8">Here is what to expect when we work together.</p>
        <div className="divide-y divide-slate-800">
          {questions.map(([question, answer]) => <details key={question} className="py-5 group"><summary className="cursor-pointer text-base font-semibold text-slate-200 hover:text-[#D4AF37] py-1">{question}</summary><p className="text-sm text-[#BDB8AE] leading-relaxed mt-4">{answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}
