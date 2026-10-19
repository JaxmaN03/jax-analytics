import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, it, expect, vi } from 'vitest';
const { entries } = vi.hoisted(() => ({ entries: [] }));
vi.mock('../config.js', () => ({ TESTIMONIALS: entries }));
import Testimonials from './Testimonials.jsx';
afterEach(() => { cleanup(); entries.length = 0; });
it('renders nothing when no testimonials are supplied', () => {
  const { container } = render(<Testimonials />);
  expect(container).toBeEmptyDOMElement();
});
it('keeps incomplete or unapproved entries hidden', () => {
  entries.push({ quote: 'Test fixture only', name: 'Example', title: 'Director', organization: 'Example', approvedForPublication: false });
  entries.push({ quote: 'Test fixture only', approvedForPublication: true });
  const { container } = render(<Testimonials />);
  expect(container).toBeEmptyDOMElement();
});
it('renders the exact approved quote and attribution', () => {
  entries.push({ quote: 'Test fixture only', name: 'Example Person', title: 'Director', organization: 'Example Organization', approvedForPublication: true });
  render(<Testimonials />);
  expect(screen.getByText('Test fixture only')).toBeInTheDocument();
  expect(screen.getByText('Example Person')).toBeInTheDocument();
  expect(screen.getByText('Director, Example Organization')).toBeInTheDocument();
});
