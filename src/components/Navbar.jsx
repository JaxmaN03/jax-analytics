import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BarChart3 } from 'lucide-react';
import { NAV_LINKS, PAGE_URLS } from '../navigation.js';
import { SITE_CONFIG } from '../config.js';

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
            <div className="relative flex items-center justify-center w-10 h-10 rounded-sm bg-gradient-to-br from-[#1B263B] to-[#101C32] border border-[#E3C581]/40 group-hover:border-[#E3C581] shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
              <span className="font-mono font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#E3C581] to-[#91A4BC]">
                JA
              </span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#E3C581] rounded-full animate-pulse" />
            </div>
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
