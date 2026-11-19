import { useState } from 'react';

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const money = (amount) => currency.format(amount);
const percent = (value) => new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 }).format(value);

function FinancialDashboard() {
  const months = [
    { name: 'April', revenue: 36000, supplies: 9500, payroll: 12000, overhead: 5400 },
    { name: 'May', revenue: 38400, supplies: 10100, payroll: 12400, overhead: 5500 },
    { name: 'June', revenue: 40200, supplies: 13500, payroll: 13300, overhead: 5600 },
  ];
  const [month, setMonth] = useState(2);
  const current = months[month];
  const previous = months[month - 1];
  const expenses = ({ supplies, payroll, overhead }) => supplies + payroll + overhead;
  const profit = (record) => record.revenue - expenses(record);

  return (
    <article id="financial-dashboard" className="min-w-0 scroll-mt-24 rounded-sm border border-[#E3C581]/25 bg-[#243E60] p-6 sm:p-8">
      <p className="mb-3 font-mono text-xs text-[#E3C581]">FICTIONAL DATA · EXCEL &amp; FINANCIAL ANALYTICS</p>
      <h3 className="mb-3 text-2xl font-bold text-[#F3EBD9]">Business Financial Dashboard</h3>
      <p className="mb-5 text-sm leading-relaxed text-[#B9C8D8]">Sales went up. Why did profit fall? Compare months for a fictional small business.</p>
      <label className="mb-2 block text-sm font-semibold" htmlFor="financial-month">Reporting month</label>
      <select id="financial-month" value={month} onChange={(event) => setMonth(Number(event.target.value))} className="min-h-11 rounded-sm border border-[#83B8D4]/50 bg-[#101C32] px-3 text-[#F3EBD9]">
        {months.map(({ name }, index) => <option key={name} value={index}>{name}</option>)}
      </select>
      <dl aria-live="polite" className="my-5 grid grid-cols-2 gap-3">
        {[
          ['Revenue', money(current.revenue)],
          ['Operating expenses', money(expenses(current))],
          ['Operating profit', money(profit(current))],
          ['Operating margin', percent(profit(current) / current.revenue)],
        ].map(([label, value]) => <div key={label} className="rounded-sm bg-[#101C32] p-3"><dt className="text-xs text-[#B9C8D8]">{label}</dt><dd className="mt-1 font-semibold">{value}</dd></div>)}
      </dl>
      <table className="w-full text-left text-sm">
        <caption className="pb-2 text-left font-semibold text-[#E3C581]">Expense breakdown</caption>
        <thead className="text-[#B9C8D8]"><tr><th scope="col">Category</th>{previous && <th scope="col" className="text-right">{previous.name}</th>}<th scope="col" className="text-right">{current.name}</th></tr></thead>
        <tbody>
          {[['Supplies', 'supplies'], ['Payroll', 'payroll'], ['Overhead', 'overhead']].map(([label, key]) => (
            <tr key={key} className="border-t border-[#83B8D4]/25">
              <th scope="row" className="py-2 font-medium">{label}</th>
              {previous && <td className="text-right">{money(previous[key])}</td>}
              <td className="text-right">{money(current[key])}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm leading-relaxed text-[#B9C8D8]">{[
        'April is the starting point for this comparison.',
        'Revenue grew by $2,400 from April to May. Expenses increased by $1,100, so profit rose by $1,300.',
        'June revenue rose by $1,800, but supplies alone cost $3,400 more. Profit fell by $2,600 from May.',
      ][month]}</p>
    </article>
  );
}

function PropertyDashboard() {
  const properties = [
    { name: 'Oak Court', units: 20, occupied: 19, rent: 22800, maintenance: 1450, expenses: 6200, renewals: 3 },
    { name: 'Maple Row', units: 16, occupied: 13, rent: 15600, maintenance: 3300, expenses: 7400, renewals: 2 },
    { name: 'Cedar Flats', units: 12, occupied: 11, rent: 14850, maintenance: 970, expenses: 4600, renewals: 5 },
  ];
  const [selection, setSelection] = useState('all');
  const visible = selection === 'all' ? properties : properties.filter(({ name }) => name === selection);
  const sum = (key) => visible.reduce((total, property) => total + property[key], 0);
  const notes = {
    all: 'Maple Row has the most vacant units and the highest maintenance spend. Cedar Flats has the most leases ending in the next 60 days.',
    'Oak Court': 'One unit is vacant and three leases are ending soon. Review renewal plans alongside the vacancy listing.',
    'Maple Row': 'Three units are vacant and maintenance is highest across the portfolio. Review work orders and check which units are ready to list.',
    'Cedar Flats': 'Five leases are ending in the next 60 days. Start renewal outreach here to help maintain occupancy.',
  };

  return (
    <article id="property-analytics" className="min-w-0 scroll-mt-24 rounded-sm border border-[#E3C581]/25 bg-[#243E60] p-6 sm:p-8">
      <p className="mb-3 font-mono text-xs text-[#E3C581]">FICTIONAL DATA · REAL ESTATE &amp; OPERATIONS</p>
      <h3 className="mb-3 text-2xl font-bold text-[#F3EBD9]">Property Management Analytics</h3>
      <p className="mb-5 text-sm leading-relaxed text-[#B9C8D8]">See which properties need attention by looking at vacancies, operating costs, and expiring leases.</p>
      <label className="mb-2 block text-sm font-semibold" htmlFor="property-filter">Property</label>
      <select id="property-filter" value={selection} onChange={(event) => setSelection(event.target.value)} className="min-h-11 rounded-sm border border-[#83B8D4]/50 bg-[#101C32] px-3 text-[#F3EBD9]">
        <option value="all">All properties</option>
        {properties.map(({ name }) => <option key={name}>{name}</option>)}
      </select>
      <dl aria-live="polite" className="my-5 grid grid-cols-2 gap-3">
        {[
          ['Occupied units', percent(sum('occupied') / sum('units'))],
          ['Monthly rent collected', money(sum('rent'))],
          ['Monthly net operating income', money(sum('rent') - sum('expenses'))],
          ['Leases ending in 60 days', sum('renewals')],
        ].map(([label, value]) => <div key={label} className="rounded-sm bg-[#101C32] p-3"><dt className="text-xs text-[#B9C8D8]">{label}</dt><dd className="mt-1 font-semibold">{value}</dd></div>)}
      </dl>
      <table className="w-full text-left text-sm">
        <caption className="pb-2 text-left font-semibold text-[#E3C581]">Monthly property snapshot</caption>
        <thead className="text-[#B9C8D8]"><tr><th scope="col">Property</th><th scope="col" className="text-right">Vacant</th><th scope="col" className="text-right">Maintenance</th></tr></thead>
        <tbody>
          {visible.map(({ name, units, occupied, maintenance }) => <tr key={name} className="border-t border-[#83B8D4]/25"><th scope="row" className="py-2 font-medium">{name}</th><td className="text-right">{units - occupied}</td><td className="text-right">{money(maintenance)}</td></tr>)}
        </tbody>
      </table>
      <p className="mt-4 text-sm leading-relaxed text-[#B9C8D8]">{notes[selection]}</p>
    </article>
  );
}

export default function PortfolioDemos() {
  return (
    <div className="mb-16 grid gap-6 lg:grid-cols-2">
      <FinancialDashboard />
      <PropertyDashboard />
    </div>
  );
}
