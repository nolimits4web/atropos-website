import { getSponsors, SPONSORS_PORTAL_URL } from '../shared/sponsors';

export const SidebarSponsors = () => {
  const sponsors = getSponsors('Gold Sponsor');
  if (!sponsors.length) return null;
  return (
    <div className="mb-4 text-sm">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium">Sponsors</span>
        <a
          href={SPONSORS_PORTAL_URL}
          target="_blank"
          rel="noopener"
          className="text-xs text-primary hover:opacity-50"
        >
          Become a sponsor
        </a>
      </div>
      <div className="flex flex-wrap gap-1">
        {sponsors.map(({ link, title, image }) => (
          <a
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded border border-black border-opacity-10 bg-white p-0.5 font-bold duration-100 hover:opacity-80"
            href={link}
            key={link + title}
            title={title}
            // eslint-disable-next-line react/no-invalid-html-attribute
            rel="sponsored noopener"
            target="_blank"
          >
            {image ? (
              <img
                className="h-auto max-h-full w-auto max-w-full"
                src={image}
                alt={title}
                loading="lazy"
              />
            ) : (
              title.slice(0, 1)
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
