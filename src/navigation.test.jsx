import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App.jsx';
import { NAV_LINKS, contactUrl, navigate, legacyDestination } from './navigation.js';

vi.mock('./navigation.js', async (importOriginal) => ({ ...(await importOriginal()), navigate: vi.fn() }));

beforeEach(() => {
  vi.clearAllMocks();
  window.history.replaceState({}, '', '/');
  Element.prototype.scrollIntoView = vi.fn();
});

describe('Separate website pages', () => {
  it('keeps home focused on the introduction and mission', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /turn complex data/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Our Mission' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Core Data & Analytics Services' })).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/service needed/i)).not.toBeInTheDocument();
    const nav = screen.getByLabelText('Main Navigation');
    for (const link of NAV_LINKS) expect(within(nav).getByRole('link', { name: link.name })).toHaveAttribute('href', link.href);
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
  });

  it('keeps mobile menu links pointed at real pages and closes the menu after selection', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /toggle navigation menu/i }));
    const menu = screen.getByLabelText('Mobile Navigation');
    const portfolio = within(menu).getByRole('link', { name: 'Portfolio' });
    expect(portfolio).toHaveAttribute('href', '/portfolio.html');
    fireEvent.click(portfolio);
    expect(screen.queryByLabelText('Mobile Navigation')).not.toBeInTheDocument();
  });

  it('routes service quotes and both presentation packages to contact', () => {
    window.history.replaceState({}, '', '/services.html');
    render(<App />);
    expect(screen.getByRole('heading', { name: 'How Working Together Works' })).toBeInTheDocument();
    const buttons = screen.getAllByRole('button', { name: /request a quote/i });
    ['excel', 'analysis', 'python'].forEach((service, i) => {
      fireEvent.click(buttons[i]);
      expect(navigate).toHaveBeenLastCalledWith(contactUrl(service));
    });
    fireEvent.click(screen.getByRole('button', { name: /add template presentation/i }));
    expect(navigate).toHaveBeenLastCalledWith('/contact.html?service=excel&presentation=template');
    fireEvent.click(screen.getByRole('button', { name: /add custom presentation/i }));
    expect(navigate).toHaveBeenLastCalledWith('/contact.html?service=excel&presentation=custom');
    expect(screen.queryByRole('heading', { name: 'Meet the Analyst.' })).not.toBeInTheDocument();
  });

  it('keeps portfolio pricing and sample links usable across pages', () => {
    window.history.replaceState({}, '', '/portfolio.html');
    render(<App />);
    expect(screen.getByRole('link', { name: /see presentation add-on pricing/i })).toHaveAttribute('href', '/services.html#presentation-addon');
    fireEvent.click(screen.getByRole('button', { name: /discuss your nonprofit data/i }));
    expect(navigate).toHaveBeenCalledWith('/contact.html?service=analysis');
    expect(screen.queryByRole('heading', { name: 'Our Mission' })).not.toBeInTheDocument();
  });

  it('preserves the published section links as redirects to the new pages', () => {
    expect(legacyDestination('#nonprofit-case-study')).toBe('/portfolio.html#nonprofit-case-study');
    expect(legacyDestination('#how-it-works')).toBe('/services.html#how-it-works');
    window.history.replaceState({}, '', '/#presentation-addon');
    render(<App />);
    expect(navigate).toHaveBeenCalledWith('/services.html#presentation-addon');
  });

  it('ignores invalid quote options on a direct contact-page visit', () => {
    window.history.replaceState({}, '', '/contact.html?service=invalid&presentation=invalid');
    render(<App />);
    expect(screen.getByLabelText(/service needed/i)).toHaveValue('excel');
    expect(screen.getByLabelText(/optional powerpoint add-on/i)).toHaveValue('');
  });
});
