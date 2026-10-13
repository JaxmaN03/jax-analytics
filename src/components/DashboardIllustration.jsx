import React, { useState } from 'react';
import { TrendingUp, Clock, CheckCircle2, Cpu, BarChart2, Zap } from 'lucide-react';

export default function DashboardIllustration() {
  const [activeTab, setActiveTab] = useState('revenue');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Fictional monthly data
  const monthlyData = [
    { month: 'Jan', revenue: 68, margin: 42, automated: 210 },
    { month: 'Feb', revenue: 74, margin: 48, automated: 340 },
    { month: 'Mar', revenue: 82, margin: 55, automated: 480 },
    { month: 'Apr', revenue: 95, margin: 62, automated: 720 },
    { month: 'May', revenue: 110, margin: 70, automated: 980 },
    { month: 'Jun', revenue: 128, margin: 82, automated: 1240 },
  ];

  // SVG dimensions
  const width = 420;
  const height = 140;
  const padding = 25;

  const maxVal = 140;
  const minVal = 40;

  const getCoordinates = (val, index) => {
    const x = padding + (index * (width - 2 * padding)) / (monthlyData.length - 1);
    const y = height - padding - ((val - minVal) / (maxVal - minVal)) * (height - 2 * padding);
    return { x, y };
  };

  const revenuePoints = monthlyData.map((d, i) => getCoordinates(d.revenue, i));
  const marginPoints = monthlyData.map((d, i) => getCoordinates(d.margin, i));

  const revenuePath = revenuePoints.reduce((acc, curr, i, arr) => {
    if (i === 0) return `M ${curr.x} ${curr.y}`;
    const prev = arr[i - 1];
    const cx1 = prev.x + (curr.x - prev.x) / 2;
    const cy1 = prev.y;
    const cx2 = prev.x + (curr.x - prev.x) / 2;
    const cy2 = curr.y;
    return `${acc} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
  }, '');

  const areaPath = `${revenuePath} L ${revenuePoints[revenuePoints.length - 1].x} ${height - padding} L ${revenuePoints[0].x} ${height - padding} Z`;

  return (
    <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl bg-[#151C2C]/90 border border-slate-700/60 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl p-4 sm:p-6 transition-all duration-300 hover:border-[#00D9FF]/40">
      {/* Decorative ambient glow background */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00D9FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D9FF]/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-[#94A3B8] tracking-tight">
            Jax&apos;s Analytics Intelligence Hub
          </span>
        </div>

        {/* Prominent Illustrative Data Disclaimer */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[10px] font-mono text-[#00D9FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
          <span>Illustrative Demo Data</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 my-4">
        <button
          type="button"
          onClick={() => setActiveTab('revenue')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'revenue'
              ? 'bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/40 shadow-[0_0_10px_rgba(0,217,255,0.2)]'
              : 'text-[#94A3B8] hover:text-white bg-[#0B0F19]/60'
          }`}
        >
          Revenue & Margin Trends
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('automation')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'automation'
              ? 'bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/40 shadow-[0_0_10px_rgba(139,92,246,0.2)]'
              : 'text-[#94A3B8] hover:text-white bg-[#0B0F19]/60'
          }`}
        >
          Workflow Automation
        </button>
      </div>

      {/* Top 3 KPI metric cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
        <div className="p-3 rounded-xl bg-[#0B0F19]/70 border border-slate-800">
          <div className="flex items-center justify-between text-[#94A3B8] text-[11px] mb-1">
            <span>Fictional Rev</span>
            <TrendingUp className="w-3.5 h-3.5 text-[#00D9FF]" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-white">$128.4K</div>
          <div className="text-[10px] text-emerald-400 font-mono mt-0.5">+22.4% MoM</div>
        </div>

        <div className="p-3 rounded-xl bg-[#0B0F19]/70 border border-slate-800">
          <div className="flex items-center justify-between text-[#94A3B8] text-[11px] mb-1">
            <span>Time Saved</span>
            <Clock className="w-3.5 h-3.5 text-[#8B5CF6]" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-white">48 hrs</div>
          <div className="text-[10px] text-[#8B5CF6] font-mono mt-0.5">per month</div>
        </div>

        <div className="p-3 rounded-xl bg-[#0B0F19]/70 border border-slate-800">
          <div className="flex items-center justify-between text-[#94A3B8] text-[11px] mb-1">
            <span>Accuracy</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-white">99.8%</div>
          <div className="text-[10px] text-emerald-400 font-mono mt-0.5">0 formula errors</div>
        </div>
      </div>

      {/* Tab 1: Revenue Trends Chart */}
      {activeTab === 'revenue' && (
        <div className="rounded-xl bg-[#0B0F19]/80 border border-slate-800/80 p-3 sm:p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-semibold text-slate-200">Simulated Trajectory</span>
              <p className="text-[10px] text-[#94A3B8]">Gross Revenue vs Operating Margin (Sample Data)</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono">
              <span className="flex items-center gap-1 text-[#00D9FF]">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF]" /> Revenue
              </span>
              <span className="flex items-center gap-1 text-[#8B5CF6]">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> Margin
              </span>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-auto overflow-visible select-none"
              aria-label="Fictional performance trend chart"
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00D9FF" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              {/* Gridlines */}
              <line
                x1={padding}
                y1={padding}
                x2={width - padding}
                y2={padding}
                stroke="#334155"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              <line
                x1={padding}
                y1={height / 2}
                x2={width - padding}
                y2={height / 2}
                stroke="#334155"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              <line
                x1={padding}
                y1={height - padding}
                x2={width - padding}
                y2={height - padding}
                stroke="#334155"
                strokeWidth="1"
              />

              {/* Area fill */}
              <path d={areaPath} fill="url(#areaGradient)" />

              {/* Revenue line */}
              <path
                d={revenuePath}
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Margin line */}
              <path
                d={marginPoints.reduce((acc, curr, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${curr.x} ${curr.y}`, '')}
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray="4 3"
              />

              {/* Interactive Data Points */}
              {revenuePoints.map((pt, i) => (
                <g key={monthlyData[i].month} className="cursor-pointer">
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={hoveredPoint === i ? 6 : 4}
                    fill="#0B0F19"
                    stroke="#00D9FF"
                    strokeWidth={hoveredPoint === i ? 3 : 2}
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                    className="transition-all duration-150"
                  />
                  {/* Month Label */}
                  <text
                    x={pt.x}
                    y={height - 8}
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    {monthlyData[i].month}
                  </text>
                </g>
              ))}
            </svg>

            {/* Hover Tooltip */}
            {hoveredPoint !== null && (
              <div
                className="absolute z-10 px-2 py-1 bg-[#151C2C] border border-[#00D9FF] rounded-md text-[10px] font-mono shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full"
                style={{
                  left: `${((hoveredPoint * 100) / (monthlyData.length - 1)) * 0.88 + 6}%`,
                  top: '30%',
                }}
              >
                <div className="text-white font-bold">{monthlyData[hoveredPoint].month} Simulation</div>
                <div className="text-[#00D9FF]">Revenue: ${monthlyData[hoveredPoint].revenue}K</div>
                <div className="text-[#8B5CF6]">Margin: ${monthlyData[hoveredPoint].margin}K</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Workflow Automation View */}
      {activeTab === 'automation' && (
        <div className="rounded-xl bg-[#0B0F19]/80 border border-slate-800/80 p-3 sm:p-4 mb-4 space-y-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-200">Automated Pipeline Execution</span>
            <span className="text-[10px] font-mono text-emerald-400">All Pipelines Healthy</span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#151C2C] border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-[#00D9FF]" />
              <div>
                <p className="font-medium text-slate-200">Daily CSV Reconciliation</p>
                <p className="text-[10px] text-[#94A3B8]">3,450 records processed</p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-emerald-400">1.4s (Automated)</span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#151C2C] border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-4 h-4 text-[#8B5CF6]" />
              <div>
                <p className="font-medium text-slate-200">Executive Excel Deck Generation</p>
                <p className="text-[10px] text-[#94A3B8]">Auto-formatted with charts</p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-emerald-400">Scheduled 8:00 AM</span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#151C2C] border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="font-medium text-slate-200">Variance & Anomaly Detector</p>
                <p className="text-[10px] text-[#94A3B8]">Discrepancy flag threshold: &gt;2%</p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#00D9FF]">Active</span>
          </div>
        </div>
      )}

      {/* Footer bar of illustration */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80 text-[11px] text-[#94A3B8]">
        <div className="flex items-center gap-1.5 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>System Status: Demo Ready</span>
        </div>
        <div className="font-mono text-[10px] text-slate-500">
          *All values and metrics are fictional demonstrations
        </div>
      </div>
    </div>
  );
}
