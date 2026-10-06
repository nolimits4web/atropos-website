import sponsors from './sponsors.json';

export const SPONSORS_PORTAL_URL = 'https://sponsors.nolimits4web.com/#atropos';
export const GITHUB_SPONSORS_URL = 'https://github.com/sponsors/nolimits4web';

export const getSponsors = (plan) =>
  sponsors.filter((sponsor) => sponsor.plan === plan);
