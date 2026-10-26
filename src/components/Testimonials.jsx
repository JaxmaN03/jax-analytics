import React from 'react';
import { TESTIMONIALS } from '../config.js';

export default function Testimonials() {
  const published = TESTIMONIALS.filter(
    (item) => item.approvedForPublication === true &&
      [item.quote, item.name, item.title, item.organization].every(
        (value) => typeof value === 'string' && value.trim()
      )
  );
  if (published.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-20 md:py-28 bg-[#0D1B2A] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-bold text-white mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {published.map((item, index) => (
            <figure key={index} className="rounded-2xl bg-[#1B263B] border border-slate-800 p-6 sm:p-8">
              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed whitespace-pre-line">{item.quote}</blockquote>
              <figcaption className="mt-6 text-sm text-[#BDB8AE]">
                <span className="block font-semibold text-white">{item.name}</span>
                <span>{item.title}, {item.organization}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
