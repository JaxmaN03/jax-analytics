/**
 * Jax's Analytics - Site Configuration
 * Centralized business details and configurable placeholders
 */
export const SITE_CONFIG = {
  businessName: "Jax's Analytics",
  shortName: "Jax's Analytics",
  ownerName: "Jackson Miller",
  tagline: "Data. Clarity. Results.",
  subheadline:
    "Excel solutions, business analytics, and Python automation designed to help businesses work smarter, save time, and make confident decisions.",
  location: "Tulsa, Oklahoma, USA",
  industry: "Data Analytics, Business Intelligence, Excel Consulting, and Python Automation",
  targetAudience:
    "Small businesses, accounting firms, property management companies, insurance agencies, and organizations needing affordable data solutions.",
  
  // Static hosting contact email placeholder
  // Note: Set your actual production email address here when ready
  contactEmail: "jacksonjmiller03@gmail.com",
  isEmailPlaceholder: false,

  // GitHub profile - populated with repository owner URL
  githubUrl: "https://github.com/JaxmaN03",
  repositoryUrl: "https://github.com/JaxmaN03/jax-analytics",

  copyrightYear: 2026,
};

export const SERVICES = [
  {
    id: "excel",
    title: "Excel & Spreadsheet Solutions",
    icon: "FileSpreadsheet",
    description: "Transform disorganized spreadsheets into clean, accurate, and efficient business tools.",
    capabilities: [
      "Spreadsheet cleanup and formatting",
      "Formula troubleshooting",
      "Pivot tables and reporting",
      "Data validation",
      "Financial spreadsheets",
      "Custom Excel templates",
    ],
    pricing: "Starting at $100",
    startingPrice: "$100",
    pricingNote: "Final pricing depends on project scope and spreadsheet complexity.",
    deliverable: "A cleaned or repaired Excel workbook, with formula notes and instructions for updating it.",
  },
  {
    id: "analysis",
    title: "Data Analysis & Visualization",
    icon: "BarChart3",
    description: "Turn raw business information into meaningful insights through analysis, reporting, and visualization.",
    capabilities: [
      "Business performance dashboards",
      "Financial data analysis",
      "Statistical analysis",
      "Data visualization",
      "KPI tracking",
      "Custom reports",
    ],
    pricing: "Starting at $250",
    startingPrice: "$250",
    pricingNote: "Customized according to data volume, source systems, and reporting depth.",
    deliverable: "A dashboard or reporting workbook with agreed KPIs, documented calculations, and an update guide.",

  },
  {
    id: "python",
    title: "Python Automation",
    icon: "Cpu",
    description: "Reduce repetitive work with customized scripts and automated data-processing workflows.",
    capabilities: [
      "CSV and Excel processing",
      "Automated reporting",
      "Data cleaning",
      "Repetitive workflow automation",
      "File organization",
      "Custom data-processing scripts",
    ],
    pricing: "Custom Quote",
    startingPrice: "Custom Quote",
    pricingNote: "Tailored to your specific file formats, update frequency, and pipeline logic.",
    deliverable: "A Python script for your agreed workflow, plus setup instructions, sample inputs, and example outputs.",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "financial-dashboard",
    title: "Business Financial Dashboard",
    category: "Excel & Financial Analytics",
    badge: "Planned Demonstration",
    status: "Coming Soon",
    description:
      "An interactive Excel dashboard demonstrating revenue, expenses, profit margins, and business performance trends.",
    capabilities: ["Financial Modeling", "Dynamic Pivot Charts", "Variance Analysis", "Scenario Planning"],
    sampleMetrics: [
      { label: "Revenue Trend", value: "+18.4% MoM", note: "Fictional Demo" },
      { label: "Gross Margin", value: "64.2%", note: "Fictional Demo" },
      { label: "Operating Expense", value: "$42.1K", note: "Fictional Demo" },
    ],
    previewType: "financial",
  },
  {
    id: "property-analytics",
    title: "Property Management Analytics",
    category: "Real Estate & Operations",
    badge: "Planned Demonstration",
    status: "Coming Soon",
    description:
      "A sample reporting system tracking occupancy, rental revenue, maintenance expenses, and property-level performance.",
    capabilities: ["Occupancy Rate Tracking", "Unit-Level NOI", "Lease Expiration Schedules", "Maintenance Cost Breakdown"],
    sampleMetrics: [
      { label: "Portfolio Occupancy", value: "96.5%", note: "Fictional Demo" },
      { label: "Average Lease Term", value: "14.2 Mo", note: "Fictional Demo" },
      { label: "Maintenance Turnaround", value: "1.8 Days", note: "Fictional Demo" },
    ],
    previewType: "property",
  },
  {
    id: "automated-reporting",
    title: "Automated Data Reporting",
    category: "Python Automation & Pipelines",
    badge: "Planned Demonstration",
    status: "Coming Soon",
    description:
      "A Python-based workflow demonstrating how raw CSV data can be cleaned, organized, and transformed into formatted Excel reports.",
    capabilities: ["Automated Ingestion", "Schema Normalization", "Automated XLSX Generation", "Scheduled Email Delivery"],
    sampleMetrics: [
      { label: "Process Time", value: "< 4.2 sec", note: "Fictional Demo" },
      { label: "Row Capacity", value: "100k+ rows", note: "Fictional Demo" },
      { label: "Manual Effort", value: "0 hours", note: "Fictional Demo" },
    ],
    previewType: "python",
  },
];

export const ABOUT_INFO = {
  heading: "Meet the Analyst.",
  analystName: "Jackson Miller",
  role: "Founder & Data Analytics Specialist",
  location: "Tulsa, Oklahoma, USA",
  paragraphs: [
    "I'm Jackson Miller, a Tulsa-based data enthusiast focused on helping businesses make better use of their information.",
    "My technical interests include Excel, Python, financial analysis, statistics, and business reporting.",
    "I founded Jax's Analytics to provide practical, accessible data solutions for businesses that need reliable support without the complexity of a large consulting engagement.",
    "Whether you're dealing with an overwhelming spreadsheet, repetitive reporting tasks, or data that's difficult to interpret, my goal is to help you find a clearer path forward.",
  ],
  skills: [
    "Microsoft Excel",
    "Python",
    "Data Analysis",
    "Financial Reporting",
    "Statistics",
    "Data Visualization",
  ],
  valueProps: [
    {
      title: "Direct 1-on-1 Attention",
      description: "Work directly with Jackson — no middlemen, account managers, or junior handoffs.",
    },
    {
      title: "Transparent, Upfront Pricing",
      description: "Starting rates and clear scope estimates so you know exactly what to expect before we begin.",
    },
    {
      title: "Practical, Actionable Deliverables",
      description: "Solutions built for non-technical users to open, understand, and update immediately.",
    },
    {
      title: "Tulsa-Rooted, Remote-Ready",
      description: "Proudly based in Tulsa, Oklahoma, serving regional clients and remote businesses nationwide.",
    },
  ],
};

// Add only the exact quote and attribution approved for public display.
// Entry fields: quote, name, title, organization, approvedForPublication: true.
// Empty until a real testimonial is available; the public section stays hidden.
export const TESTIMONIALS = [];
