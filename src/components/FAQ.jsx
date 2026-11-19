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
    <section id="faq" aria-labelledby="faq-heading" className="py-20 md:py-28 bg-[#101C32] border-t border-[#E3C581]/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-12 border-l-2 border-[#E3C581] pl-6">
          <h2 id="faq-heading" className="space-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#F3EBD9] tracking-tight mb-4">A few things you might be wondering</h2>
          <p className="text-base sm:text-lg text-[#B9C8D8] leading-relaxed">Here is what to expect when we work together.</p>
        </div>
        <div className="max-w-4xl space-y-3">
          {questions.map(([question, answer]) => (
            <details key={question} className="rounded-sm border border-[#E3C581]/25 bg-[#243E60] open:border-[#E3C581]/50">
              <summary className="min-h-11 cursor-pointer px-5 py-4 font-semibold text-[#F3EBD9] marker:text-[#E3C581] hover:text-[#E3C581] focus-visible:outline-2 focus-visible:outline-[#E3C581] sm:px-6">
                {question}
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[#B9C8D8] sm:px-6 sm:text-base">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
