import React from 'react';
import { ArrowUp, MapPin, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config.js';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B0F19] border-t border-slate-800 text-[#94A3B8] text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#151C2C] border border-[#00D9FF]/40 text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] font-mono font-bold text-sm">
                JA
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {SITE_CONFIG.businessName}
              </span>
            </div>
            
            <p className="text-sm font-mono text-[#00D9FF]">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Independent Data Analytics Services &bull; Excel Consulting, Business Intelligence &amp; Python Automation.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-[#94A3B8] hover:text-[#00D9FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Technical Source */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Connect &amp; Verification
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Operated by {SITE_CONFIG.ownerName}. Direct project engagement without enterprise consulting overhead.
            </p>

            {/* GitHub Profile link - rendered only when configured */}
            {SITE_CONFIG.githubUrl && (
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151C2C] border border-slate-700 hover:border-[#00D9FF]/50 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#00D9FF]" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Copyright &copy; {SITE_CONFIG.copyrightYear} {SITE_CONFIG.businessName}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#00D9FF] transition-colors p-1"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
