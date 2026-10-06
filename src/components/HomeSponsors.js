import { getSponsors, SPONSORS_PORTAL_URL } from '../shared/sponsors';

const PLANS = ['Gold Sponsor', 'Sponsor'];

const SIZES = {
  'Gold Sponsor': 'w-24 h-24 p-2',
  Sponsor: 'w-14 h-14 p-1',
};

const PlanSection = ({ plan, showPlaceholder, showTitle }) => {
  const items = getSponsors(plan);
  const size = SIZES[plan];

  if (!items.length && !showPlaceholder) return null;

  return (
    <div className="mt-12">
      {showTitle && <h3 className="text-2xl font-bold mb-6">{plan}s</h3>}
      <div className="flex flex-wrap justify-center gap-3">
        {items.map(({ link, title, image }) => (
          <a
            className={`flex items-center justify-center overflow-hidden rounded-lg bg-white text-black font-bold duration-200 hover:opacity-80 ${size}`}
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
        {showPlaceholder && (
          <a
            className={`flex items-center justify-center rounded-lg border border-dashed border-primary bg-primary bg-opacity-10 text-center font-semibold leading-tight duration-200 hover:bg-opacity-30 ${size} ${
              plan === 'Sponsor' ? 'text-[9px]' : 'text-xs'
            }`}
            href={SPONSORS_PORTAL_URL}
            rel="noopener"
            target="_blank"
          >
            Become {plan}
          </a>
        )}
      </div>
    </div>
  );
};

export const HomeSponsors = ({ showPlaceholders, showTitles }) => {
  return (
    <div>
      {PLANS.map((plan) => (
        <PlanSection
          key={plan}
          plan={plan}
          showPlaceholder={showPlaceholders}
          showTitle={showTitles}
        />
      ))}
    </div>
  );
};
