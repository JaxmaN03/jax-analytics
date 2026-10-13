# Jax's Analytics

> **Data. Clarity. Results.**

Official website for **Jax's Analytics**, an independent data analytics, business intelligence, Excel consulting, and Python automation practice owned and operated by **Jackson Miller** in **Tulsa, Oklahoma, USA**.

Designed with a sophisticated dark-mode aesthetic inspired by modern technology consultancies and SaaS platforms, optimized for fast loading, accessibility, and zero-cost static hosting on GitHub Pages.

---

## Table of Contents

- [Overview](#overview)
- [Core Services](#core-services)
- [Design System & Palette](#design-system--palette)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started Locally](#getting-started-locally)
- [Testing](#testing)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Configuration Guide](#configuration-guide)
- [Demonstration Data Transparency](#demonstration-data-transparency)
- [License](#license)

---

## Overview

- **Business Name:** Jax's Analytics
- **Principal Specialist:** Jackson Miller
- **Tagline:** Data. Clarity. Results.
- **Location:** Tulsa, Oklahoma, USA
- **Target Audience:** Small businesses, accounting firms, property management companies, insurance agencies, and growing organizations needing practical, cost-effective data solutions.
- **Key Proposition:** Direct 1-on-1 collaboration without enterprise consulting overhead or bloated software retainers.

---

## Core Services

1. **Excel & Spreadsheet Solutions** (Starting at $100)
   - Spreadsheet cleanup, normalization, and formatting
   - Complex formula troubleshooting and auditing
   - Dynamic pivot tables, slicers, and summary reporting
   - Data validation rules and input error controls
   - Financial models and budget planning templates
   - Custom Excel template development

2. **Data Analysis & Visualization** (Starting at $250)
   - Executive and operational KPI performance dashboards
   - Financial statement and variance analysis
   - Exploratory statistical analysis and trend identification
   - Interactive data visualizations and charts
   - Custom reporting packs for stakeholders

3. **Python Automation** (Custom Quote)
   - High-volume CSV, JSON, and Excel batch processing
   - Automated report generation and formatting
   - Data cleaning, deduping, and schema validation
   - Repetitive workflow and file management automation
   - Custom scheduled data transformation scripts

---

## Design System & Palette

The site features a technical dark-mode aesthetic with electric cyan and violet accents, subtle grid backdrops, and interactive data visualizations.

| Element | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Background** | `#0B0F19` | Deep obsidian backdrop |
| **Secondary Background** | `#151C2C` | Elevated card & container surface |
| **Primary Accent** | `#00D9FF` | Electric Cyan highlights & glowing CTAs |
| **Secondary Accent** | `#8B5CF6` | Violet secondary badge & baseline accents |
| **Primary Text** | `#F1F5F9` | Crisp high-contrast headings & labels |
| **Secondary Text** | `#94A3B8` | Balanced body and metadata text |

Features include:
- Respects `prefers-reduced-motion` accessibility preferences
- Keyboard-accessible navigation with explicit focus rings
- Mobile-responsive collapsible navigation menu
- Interactive demo dashboard with simulated trend visualizations

---

## Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/) (Configured with `base: '/jax-analytics/'`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/) with `jsdom`
- **Hosting:** Free static deployment via **GitHub Pages** (Zero paid APIs, databases, or subscriptions required)

---

## Project Structure

```text
jax-analytics/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   └── favicon.svg             # Professional SVG monogram favicon ("JA")
├── src/
│   ├── components/
│   │   ├── About.jsx           # Jackson Miller bio, Tulsa base, & skill badges
│   │   ├── Contact.jsx         # Functional quote request form & mailto router
│   │   ├── DashboardIllustration.jsx # Interactive animated hero analytics preview
│   │   ├── Footer.jsx          # Business metadata, Tulsa location, copyright 2026
│   │   ├── Hero.jsx            # Headline, value proposition, and primary CTAs
│   │   ├── Navbar.jsx          # Sticky nav with mobile drawer and quick quote CTA
│   │   ├── Portfolio.jsx       # Planned demonstration cards & concept modal
│   │   └── Services.jsx        # 3 service tiers with pricing and capabilities
│   ├── test/
│   │   └── setup.js            # Vitest DOM test environment setup
│   ├── App.jsx                 # Root component orchestrating state & sections
│   ├── App.test.jsx            # Test suite covering all 7 core sections
│   ├── config.js               # Centralized business data & placeholder settings
│   ├── index.css               # Design system tokens, grid pattern, & glow utilities
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML entry point with SEO and OpenGraph metadata
├── package.json                # Project dependencies & NPM scripts
├── vite.config.js              # Vite configuration (base: '/jax-analytics/')
└── README.md                   # Project documentation
```

---

## Getting Started Locally

### Prerequisites

- Node.js `v18.0.0` or higher (Node 20+ recommended)
- `npm` (bundled with Node)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JaxmaN03/jax-analytics.git
   cd jax-analytics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173/jax-analytics/` in your browser.

---

## Testing

To run the automated Vitest test suite:

```bash
npm test
```

To run a production build:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## Deployment to GitHub Pages

The repository includes a ready-to-use GitHub Actions workflow configured in `.github/workflows/deploy.yml`.

### Enabling GitHub Pages in Your Repository

1. Go to your repository on GitHub: `https://github.com/JaxmaN03/jax-analytics`
2. Navigate to **Settings** &rarr; **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. Push your changes to the `main` branch.
5. GitHub Actions will automatically test, build, and deploy your site to:
   ```
   https://jaxman03.github.io/jax-analytics/
   ```

### Base Path Configuration

Vite is configured in `vite.config.js` with:

```javascript
export default defineConfig({
  base: '/jax-analytics/',
  // ...
});
```

If you ever deploy under a custom domain (e.g., `jaxanalytics.com`), update `base: '/'` in `vite.config.js`.

---

## Configuration Guide

All business details, service definitions, and configurable placeholders are organized in `src/config.js`:

```javascript
// src/config.js
export const SITE_CONFIG = {
  businessName: "Jax's Analytics",
  ownerName: "Jackson Miller",
  tagline: "Data. Clarity. Results.",
  location: "Tulsa, Oklahoma, USA",
  
  // Set your active production inbox address here:
  contactEmail: "contact@jaxanalytics.example.com",
  isEmailPlaceholder: true,

  // GitHub profile:
  githubUrl: "https://github.com/JaxmaN03",
  // ...
};
```

### Static Contact Solution (No Paid Backend)

Because GitHub Pages provides static hosting without backend script execution:
- Submitting the project form automatically compiles client project specifications into a preformatted `mailto:` dispatch.
- Users can click **Open in Email App** or **Copy Brief to Clipboard** to paste into webmail (Gmail, Outlook, etc.).
- No third-party data tracking, paid form services, or databases are required.
- Free initial project consultations are highlighted across all quote flows.

---

## Demonstration Data Transparency

- All charts, metrics, and KPI figures shown in the Hero section and Portfolio cards are **strictly illustrative demonstration models** using synthetic data.
- Portfolio cards are labeled **"Coming Soon"** as planned prototypes rather than fabricated client outcomes.
- We do not fabricate testimonials, degrees, or unearned client results.

---

## License

MIT &copy; 2026 Jackson Miller &bull; Jax's Analytics
