// Verified from the downloadable fictional sample with --deduplicate enabled.
// Source: public/downloads/jax-analytics-report-tool.zip -> sample_sales.csv.
// Invalid amounts are excluded; category totals include valid amounts without valid dates.
export const REPORTING_DEMO = {
  sourceRecords: 20,
  retainedRecords: 19,
  duplicatesRemoved: 1,
  total: 13625,
  categories: [
    { name: 'Consulting', total: 9900 },
    { name: 'Training', total: 2700 },
    { name: 'Templates', total: 900 },
    { name: 'Uncategorized', total: 125 },
  ],
};
