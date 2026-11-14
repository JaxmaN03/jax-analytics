import React from 'react';
import { ArrowUp, ArrowUpRight, MapPin } from 'lucide-react';
import { NAV_LINKS, PAGE_URLS } from '../navigation.js';
import { SITE_CONFIG } from '../config.js';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function RocketMark({ className = 'w-12 h-12' }) {
  return <svg viewBox="0 0 120 132" className={className} role="img" aria-label="JA rocket emblem" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#E3C581" strokeWidth="2.5"><path d="M49 8 A52 52 0 0 0 12 88 M71 8 A52 52 0 0 1 108 88 M14 96 A52 52 0 0 0 39 112 M106 96 A52 52 0 0 1 81 112"/></g>
    <path d="M60 1 L63 9 L71 12 L63 15 L60 23 L57 15 L49 12 L57 9Z M22 50 L24 55 L29 57 L24 59 L22 64 L20 59 L15 57 L20 55Z M98 50 L100 55 L105 57 L100 59 L98 64 L96 59 L91 57 L96 55Z" fill="#E3C581"/>
    <path d="M60 18 L46 48 L34 64 L19 98 L42 80 L52 80 L60 71Z M60 18 L74 48 L86 64 L101 98 L78 80 L68 80 L60 71Z" fill="#F3EBD9"/>
    <path d="M54 39 L54 70 Q54 82 41 85 L18 98 L45 92 Q62 88 62 72 L62 28Z M66 28 L66 92 L73 92 L73 69 L83 69 L90 76 L96 85 L105 98 L94 73 L86 61 L73 61 L73 39Z" fill="#F3EBD9"/>
    <path d="M45 44 L22 86 L45 69Z M75 44 L98 86 L75 69Z M56 94 L49 112 L55 106 M64 94 L71 112 L65 106" fill="#E66C37"/>
    <g fontFamily="monospace" fontWeight="bold" fontSize="10" textAnchor="middle"><text x="60" y="102" fill="#E3C581">1</text><text x="60" y="113" fill="#E66C37">0</text><text x="60" y="124" fill="#E3C581">1</text><text x="44" y="116" fill="#E3C581">0</text><text x="76" y="116" fill="#E3C581">0</text><text x="43" y="129" fill="#E66C37">1</text><text x="77" y="129" fill="#E66C37">1</text></g>
  </svg>;
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-[#101C32] text-[#B9C8D8] border-t border-[#E66C37]/60">
      {/* The orange is a navigational signal, not a second brand color. */}
      <div className="h-1 w-full bg-gradient-to-r from-[#E66C37] via-[#E66C37] to-[#E3C581]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-12 w-72 h-72 border border-[#E66C37]/15 rounded-full" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-12 top-24 w-56 h-56 border border-[#E3C581]/15 rounded-full" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-8">
        <div className="flex items-center justify-between gap-4 mb-12 pb-5 border-b border-[#E3C581]/25">
          <span className="font-mono text-[10px] sm:text-xs tracking-[.19em] text-[#E3C581]">JAX'S ANALYTICS / GROUND CONTROL</span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[.12em] text-[#E66C37]">SIGNAL // 001</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <RocketMark className="w-16 h-16 shrink-0" />
              <span className="space-heading text-2xl sm:text-3xl text-[#F3EBD9] tracking-tight">{SITE_CONFIG.businessName}</span>
            </div>
            <p className="font-mono text-sm tracking-[.08em] text-[#E3C581] mb-5">{SITE_CONFIG.tagline}</p>
            <p className="text-sm leading-7 max-w-md mb-6">Independent data analytics, Excel consulting, business intelligence, and Python automation. Clear answers. Practical solutions.</p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B9C8D8]">
              <MapPin size={16} className="text-[#E66C37]" aria-hidden="true" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h2 className="font-mono text-xs tracking-[.18em] text-[#E66C37] mb-6">01 / NAVIGATION</h2>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="group inline-flex items-center gap-2 text-sm text-[#F3EBD9] hover:text-[#E3C581] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#E66C37] opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-mono text-xs tracking-[.18em] text-[#E66C37] mb-6">02 / OPEN A CHANNEL</h2>
            <p className="text-sm leading-7 mb-6">Work directly with {SITE_CONFIG.ownerName}. No unnecessary layers—just a conversation about what your data can do.</p>
            <a href={PAGE_URLS.contact} className="inline-flex items-center justify-between gap-5 w-full sm:w-auto px-5 py-4 bg-[#E66C37] text-[#101C32] font-bold text-xs tracking-[.1em] hover:bg-[#F3EBD9] transition-colors">
              START A PROJECT <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            {SITE_CONFIG.githubUrl && (
              <a href={SITE_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-2 w-fit text-xs text-[#B9C8D8] hover:text-[#E3C581] transition-colors">
                <GithubIcon className="w-4 h-4 text-[#E3C581]" />
                GitHub Profile <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-[#E3C581]/25 pt-7 text-xs">
          <p className="text-[#B9C8D8]">&copy; {SITE_CONFIG.copyrightYear} {SITE_CONFIG.businessName}. All rights reserved.</p>
          <button type="button" onClick={scrollToTop} className="inline-flex items-center gap-2 w-fit text-[#E3C581] hover:text-[#E66C37] transition-colors font-mono tracking-wider" aria-label="Back to top of page">
            RETURN TO TOP <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
