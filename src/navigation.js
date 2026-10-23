export const PAGE_URLS = {
  home: `${import.meta.env.BASE_URL}index.html`,
  services: `${import.meta.env.BASE_URL}services.html`,
  portfolio: `${import.meta.env.BASE_URL}portfolio.html`,
  about: `${import.meta.env.BASE_URL}about.html`,
  contact: `${import.meta.env.BASE_URL}contact.html`,
};

export const NAV_LINKS = Object.entries(PAGE_URLS).map(([id, href]) => ({
  id, name: id[0].toUpperCase() + id.slice(1), href,
}));

export function currentPage() {
  const filename = window.location.pathname.split('/').pop();
  const page = filename?.replace(/\.html$/, '');
  return Object.hasOwn(PAGE_URLS, page) ? page : 'home';
}

export function contactUrl(service = 'excel', presentation = '') {
  const params = new URLSearchParams({ service });
  if (presentation) params.set('presentation', presentation);
  return `${PAGE_URLS.contact}?${params}`;
}

export function navigate(url) {
  window.location.assign(url);
}

export function legacyDestination(hash) {
  const sections = {
    '#services': 'services', '#presentation-addon': 'services', '#how-it-works': 'services',
    '#portfolio': 'portfolio', '#reporting-case-study': 'portfolio', '#nonprofit-case-study': 'portfolio',
    '#about': 'about', '#contact': 'contact',
  };
  return sections[hash] ? `${PAGE_URLS[sections[hash]]}${hash}` : null;
}
