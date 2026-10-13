import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App.jsx';
import { SITE_CONFIG, SERVICES, PORTFOLIO_PROJECTS, ABOUT_INFO } from './config.js';

describe('Jax\'s Analytics Website', () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });
  });

  describe('1. Navigation', () => {
    it('renders sticky navbar with brand title and tagline', () => {
      render(<App />);
      expect(screen.getByText("JAX'S ANALYTICS")).toBeInTheDocument();
      const taglines = screen.getAllByText(SITE_CONFIG.tagline);
      expect(taglines.length).toBeGreaterThan(0);
    });

    it('renders all required navigation links', () => {
      render(<App />);
      const nav = screen.getByLabelText('Main Navigation');
      expect(nav).toBeInTheDocument();
      ['Home', 'Services', 'Portfolio', 'About', 'Contact'].forEach((link) => {
        expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument();
      });
    });

    it('renders prominent "Get a Quote" action button', () => {
      render(<App />);
      const quoteButtons = screen.getAllByRole('link', { name: /get a quote/i });
      expect(quoteButtons.length).toBeGreaterThan(0);
    });
  });

  describe('2. Hero Section', () => {
    it('displays required headline and subheadline', () => {
      render(<App />);
      expect(screen.getByText(/Turn Complex Data Into/i)).toBeInTheDocument();
      expect(screen.getByText(/Clear Decisions\./i)).toBeInTheDocument();
      expect(screen.getByText(SITE_CONFIG.subheadline)).toBeInTheDocument();
    });

    it('displays tagline and action buttons', () => {
      render(<App />);
      expect(screen.getByRole('button', { name: /start a project/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /explore services/i })).toBeInTheDocument();
    });

    it('renders animated dashboard illustration clearly marked as illustrative', () => {
      render(<App />);
      const illustrativeBadges = screen.getAllByText(/illustrative demo data/i);
      expect(illustrativeBadges.length).toBeGreaterThan(0);
      expect(screen.getByText(/simulated trajectory/i)).toBeInTheDocument();
      expect(screen.getByText(/\$128\.4K/i)).toBeInTheDocument();
    });
  });

  describe('3. Services Section', () => {
    it('renders 3 primary service cards with descriptions and starting prices', () => {
      render(<App />);
      expect(screen.getByText('Excel & Spreadsheet Solutions')).toBeInTheDocument();
      expect(screen.getByText('Data Analysis & Visualization')).toBeInTheDocument();
      expect(screen.getByText('Python Automation')).toBeInTheDocument();

      expect(screen.getByText('$100')).toBeInTheDocument();
      expect(screen.getByText('$250')).toBeInTheDocument();
      expect(screen.getByText('Custom Quote')).toBeInTheDocument();
    });

    it('renders capabilities for each service', () => {
      render(<App />);
      expect(screen.getByText('Spreadsheet cleanup and formatting')).toBeInTheDocument();
      expect(screen.getByText('Business performance dashboards')).toBeInTheDocument();
      expect(screen.getByText('CSV and Excel processing')).toBeInTheDocument();
    });

    it('renders "Request a Quote" buttons and pricing disclaimer', () => {
      render(<App />);
      const quoteBtns = screen.getAllByRole('button', { name: /request a quote/i });
      expect(quoteBtns.length).toBe(3);
      expect(screen.getByText(/transparent pricing guarantee/i)).toBeInTheDocument();
    });
  });

  describe('4. Portfolio Section', () => {
    it('renders 3 planned demonstration project cards marked "Coming Soon"', () => {
      render(<App />);
      expect(screen.getByText('Business Financial Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Property Management Analytics')).toBeInTheDocument();
      expect(screen.getByText('Automated Data Reporting')).toBeInTheDocument();

      const comingSoonBadges = screen.getAllByText('Coming Soon');
      expect(comingSoonBadges.length).toBeGreaterThanOrEqual(3);
    });

    it('includes attractive preview illustrations with fictional data labels', () => {
      render(<App />);
      const fictionalDataLabels = screen.getAllByText(/fictional data/i);
      expect(fictionalDataLabels.length).toBeGreaterThanOrEqual(3);
    });

    it('allows opening concept architecture modal without fake download links', () => {
      render(<App />);
      const exploreBtns = screen.getAllByRole('button', { name: /explore concept architecture/i });
      expect(exploreBtns.length).toBe(3);

      fireEvent.click(exploreBtns[0]);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText(/core architectural capabilities/i)).toBeInTheDocument();

      const closeBtn = screen.getByRole('button', { name: /close concept preview/i });
      fireEvent.click(closeBtn);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('5. About Section', () => {
    it('introduces Jackson Miller as the analyst behind Jax\'s Analytics', () => {
      render(<App />);
      expect(screen.getByText('Meet the Analyst.')).toBeInTheDocument();
      expect(screen.getByText('Jackson Miller')).toBeInTheDocument();
      const locations = screen.getAllByText(/Tulsa, Oklahoma, USA/i);
      expect(locations.length).toBeGreaterThan(0);
    });

    it('renders required skill badges', () => {
      render(<App />);
      const requiredSkills = [
        'Microsoft Excel',
        'Python',
        'Data Analysis',
        'Financial Reporting',
        'Statistics',
        'Data Visualization',
      ];
      requiredSkills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });
    });

    it('does not include fabricated claims, degrees, or fake client testimonials', () => {
      render(<App />);
      expect(screen.queryByText(/years of experience/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/certified by/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/client reviews/i)).not.toBeInTheDocument();
    });
  });

  describe('6. Contact Section', () => {
    it('renders heading and free consultation note', () => {
      render(<App />);
      expect(screen.getByText("Let's Make Your Data Work for You.")).toBeInTheDocument();
      expect(screen.getByText(/Free initial project consultations available\./i)).toBeInTheDocument();
    });

    it('renders all required form fields', () => {
      render(<App />);
      expect(screen.getByPlaceholderText('Jane Doe')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Company or Practice LLC')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('jane@company.com')).toBeInTheDocument();
      expect(screen.getByLabelText(/service needed/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/desired timeline/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/project description/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /request your project quote/i })).toBeInTheDocument();
    });

    it('displays configuration placeholder email address with transparent notice', () => {
      render(<App />);
      expect(screen.getByText(SITE_CONFIG.contactEmail)).toBeInTheDocument();
      expect(screen.getByText(/config placeholder/i)).toBeInTheDocument();
    });

    it('submits form client-side to compile project brief without breaking static hosting', () => {
      render(<App />);
      
      fireEvent.change(screen.getByPlaceholderText('Jane Doe'), { target: { value: 'Alice Smith' } });
      fireEvent.change(screen.getByPlaceholderText('jane@company.com'), { target: { value: 'alice@example.com' } });
      fireEvent.change(screen.getByLabelText(/project description/i), {
        target: { value: 'Need help automating monthly Excel sales spreadsheets.' },
      });

      fireEvent.click(screen.getByRole('button', { name: /request your project quote/i }));

      expect(screen.getByText('Project Brief Prepared!')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /open in email app/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /copy brief to clipboard/i })).toBeInTheDocument();
    });
  });

  describe('7. Footer', () => {
    it('renders business name, tagline, Tulsa location, and copyright 2026', () => {
      render(<App />);
      expect(screen.getByText(/Copyright © 2026 Jax's Analytics/i)).toBeInTheDocument();
      expect(screen.getByText(/Independent Data Analytics Services/i)).toBeInTheDocument();
      const locationMatches = screen.getAllByText(/Tulsa, Oklahoma/i);
      expect(locationMatches.length).toBeGreaterThan(0);
    });

    it('renders GitHub link if configured', () => {
      render(<App />);
      if (SITE_CONFIG.githubUrl) {
        expect(screen.getByRole('link', { name: /github profile/i })).toBeInTheDocument();
      }
    });
  });
});
