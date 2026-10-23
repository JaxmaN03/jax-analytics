import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NonprofitDemo from './NonprofitDemo.jsx';
import demo from '../nonprofitDemo.json';
import source from '../../public/downloads/nonprofit-fictional-data.json';

describe('Nonprofit portfolio demonstration', () => {
  it('reconciles every public summary to the fictional donor source', () => {
    const total = source.donors.reduce((sum, donor) => sum + donor.giving['2025'], 0);
    expect(demo.total).toBe(total);
    expect(demo.donors).toBe(source.donors.length);
    for (const [groups, field] of [[demo.cohorts, 'cohort'], [demo.cities, 'city'], [demo.channels, 'acquisitionChannel']]) {
      for (const group of groups) {
        const donors = source.donors.filter((donor) => donor[field] === group.name);
        expect(group.donors).toBe(donors.length);
        expect(group.total).toBe(donors.reduce((sum, donor) => sum + donor.giving['2025'], 0));
      }
    }
    for (const year of demo.years) expect(year.total).toBe(source.donors.reduce((sum, donor) => sum + donor.giving[year.year], 0));
    const ranked = [...source.donors].sort((a, b) => b.giving['2025'] - a.giving['2025']).slice(0, 5);
    expect(demo.topDonors).toEqual(ranked.map((donor) => ({ id: donor.id, total: donor.giving['2025'] })));
    expect(demo.topFiveTotal).toBe(ranked.reduce((sum, donor) => sum + donor.giving['2025'], 0));
    expect(demo.topFiveShare).toBe(demo.topFiveTotal / total);
    expect(demo.growth).toBe(demo.years[2].total / demo.years[0].total - 1);
  });
  it('switches views and lets a visitor discuss their nonprofit data', () => {
    const discuss = vi.fn();
    render(<NonprofitDemo onDiscussProject={discuss} />);
    for (const label of ['Donor locations', 'Outreach sources', 'Giving over time', 'Donor generations']) {
      fireEvent.click(screen.getByRole('button', { name: label }));
      expect(screen.getByRole('button', { name: label })).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByRole('table', { name: `${label}: fictional giving totals` })).toBeInTheDocument();
    }
    expect(screen.getByRole('link', { name: 'Download Sample PowerPoint' })).toHaveAttribute('href', expect.stringContaining('nonprofit-supporter-analysis.pptx'));
    fireEvent.click(screen.getByRole('button', { name: 'Discuss your nonprofit data' }));
    expect(discuss).toHaveBeenCalledOnce();
  });
});
