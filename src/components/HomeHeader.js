// eslint-disable-next-line
import { Atropos } from 'atropos/react';
import Link from 'next/link';

export const HomeHeader = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-dark -mt-16 border-b-2 border-primary">
      <div className="max-w-screen-lg mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <Atropos
          className="atropos-header w-full"
          rotateTouch="scroll-y"
          highlight={false}
        >
          <img
            className="atropos-header-spacer"
            src="/images/header/atropos-bg.svg"
            alt="stars"
          />
          <img
            data-atropos-offset="-4.5"
            src="/images/header/atropos-bg.svg"
            alt="stars"
          />
          <img
            data-atropos-offset="-2.5"
            src="/images/header/atropos-mountains.svg"
            alt="mountains"
          />
          <img
            data-atropos-offset="0"
            src="/images/header/atropos-forest-back.svg"
            alt="forest"
          />
          <img
            data-atropos-offset="2"
            src="/images/header/atropos-forest-mid.svg"
            alt="forest"
          />
          <img
            data-atropos-offset="4"
            src="/images/header/atropos-forest-front.svg"
            alt="forest"
          />
          <img
            data-atropos-offset="5"
            src="/images/header/atropos-logo-en.svg"
            alt="atropos logo"
          />
          <div data-atropos-offset="6" className="atropos-header-button-wrap">
            <Link href="/docs">
              <a className="bg-primary text-white rounded-full px-4 py-2 md:px-8 md:py-4 font-bold md:text-xl inline-flex hover:bg-opacity-70 duration-200 translate-y-full">
                Get Started
              </a>
            </Link>
          </div>
        </Atropos>
      </div>
    </div>
  );
};
