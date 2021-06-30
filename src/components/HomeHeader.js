// eslint-disable-next-line
import { Mariko } from 'mariko/react';
import Link from 'next/link';

export const HomeHeader = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-dark -mt-16 border-b-2 border-primary">
      <div className="max-w-screen-lg mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <Mariko className="mariko-header w-full" highlight={false}>
          <img
            className="mariko-header-spacer"
            src="/images/header/mariko-bg.svg"
            alt=""
          />
          <img
            data-mariko-offset="-4.5"
            src="/images/header/mariko-bg.svg"
            alt=""
          />
          <img
            data-mariko-offset="-2.5"
            src="/images/header/mariko-mountains.svg"
            alt=""
          />
          <img
            data-mariko-offset="0"
            src="/images/header/mariko-forest-back.svg"
            alt=""
          />
          <img
            data-mariko-offset="2"
            src="/images/header/mariko-forest-mid.svg"
            alt=""
          />
          <img
            data-mariko-offset="4"
            src="/images/header/mariko-forest-front.svg"
            alt=""
          />
          <img
            data-mariko-offset="4.5"
            src="/images/header/mariko-logo-en.svg"
            alt=""
          />
          <img
            data-mariko-offset="5"
            src="/images/header/mariko-logo-jp.svg"
            alt=""
          />
          <div data-mariko-offset="6" className="mariko-header-button-wrap">
            <Link href="/docs">
              <a className="bg-primary text-white rounded-full px-4 py-2 md:px-8 md:py-4 font-bold md:text-xl inline-flex hover:bg-opacity-70 duration-200 translate-y-full">
                Get Started
              </a>
            </Link>
          </div>
        </Mariko>
      </div>
    </div>
  );
};
