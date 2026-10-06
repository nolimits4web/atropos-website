import { GITHUB_SPONSORS_URL, SPONSORS_PORTAL_URL } from '../shared/sponsors';

export const SponsorsIntro = () => {
  return (
    <>
      <p>
        Sponsor Atropos via{' '}
        <a
          href={SPONSORS_PORTAL_URL}
          target="_blank"
          rel="noopener"
          className="text-primary hover:opacity-50"
        >
          nolimits4web Sponsors
        </a>{' '}
        and get your logo and link featured on the website, or support the
        developer on{' '}
        <a
          href={GITHUB_SPONSORS_URL}
          target="_blank"
          rel="noopener"
          className="text-primary hover:opacity-50"
        >
          GitHub Sponsors
        </a>
        . Your support helps keep Atropos growing!
      </p>
      <p className="mt-8">
        <a
          href={SPONSORS_PORTAL_URL}
          target="_blank"
          rel="noopener"
          className="bg-primary text-white rounded-full px-8 py-4 font-bold text-xl inline-flex hover:bg-opacity-70 duration-200"
        >
          Become a Sponsor
        </a>
      </p>
    </>
  );
};
