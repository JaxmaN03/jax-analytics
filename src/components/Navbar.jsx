import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BarChart3 } from 'lucide-react';
import { NAV_LINKS, PAGE_URLS } from '../navigation.js';
import { SITE_CONFIG } from '../config.js';

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

export default function Navbar({ onSelectService, currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = NAV_LINKS;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleGetQuote = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService('excel');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101C32]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-[#101C32]/80 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href={PAGE_URLS.home}
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#E3C581] rounded-sm p-1"
            aria-label="Jax's Analytics Home"
          >
            <RocketMark className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#E3C581] transition-colors">
                JAX&apos;S ANALYTICS
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B9C8D8]">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={currentPage === link.id ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${currentPage === link.id ? 'text-[#E3C581]' : 'text-[#B9C8D8] hover:text-[#E3C581]'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PAGE_URLS.contact}
              onClick={handleGetQuote}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#101C32] bg-[#E3C581] rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:bg-[#F3EBD9] transition-all duration-200 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#B9C8D8] hover:text-[#E3C581] hover:bg-[#1B263B] rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#E3C581]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-b border-slate-800 bg-[#101C32]/98 px-4 pt-2 pb-6 space-y-3"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
                aria-current={currentPage === link.id ? 'page' : undefined}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-2.5 rounded-sm text-base transition-colors border-l-2 ${currentPage === link.id ? 'font-semibold text-[#E3C581] bg-[#E3C581]/10 border-[#E3C581]' : 'font-medium text-[#B9C8D8] border-transparent hover:text-white hover:bg-[#1B263B]'}`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PAGE_URLS.contact}
              onClick={handleGetQuote}
              className="w-full flex items-center justify-center px-5 py-3 text-base font-semibold text-[#101C32] bg-[#E3C581] rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:bg-[#F3EBD9] transition-all duration-200"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
