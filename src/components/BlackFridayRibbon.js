export default function BlackFridayRibbon() {
  return (
    <div className="flex min-h-[64px] bg-primary items-center  justify-center border-b px-4 py-2 text-sm font-semibold  sm:px-6 lg:px-8 xl:px-10 border-black/20">
      <div className="text-center">
        🔥 Black Friday Sale: Up to 40% OFF on{' '}
        <a
          className="underline hover:no-underline "
          href="https://uiinitiative.com"
          target="_blank"
        >
          UI Initiative
        </a>
        ,{' '}
        <a
          className="underline hover:no-underline"
          href="https://studio.swiperjs.com"
          target="_blank"
        >
          Swiper Studio
        </a>{' '}
        and{' '}
        <a
          className="underline hover:no-underline"
          href="https://t0ggles.com"
          target="_blank"
        >
          t0ggles
        </a>{' '}
        🔥
      </div>
    </div>
  );
}
