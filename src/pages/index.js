import Link from 'next/link';
// eslint-disable-next-line
import { Mariko } from 'mariko/react';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';

const HomeBlock = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-lg text-center py-16">
        {children}
      </div>
    </div>
  );
};

const HomeBlockTitle = ({ Tag = 'h2', children }) => {
  return <Tag className="text-4xl font-bold sm:text-5xl mb-10">{children}</Tag>;
};

const GameBox = ({ bg, logo, studios }) => {
  return (
    <div className="w-64 m-6">
      <Mariko className="game-box">
        <img
          className="game-box-size"
          src="/images/game-boxes/box-size.svg"
          alt="box bg"
        />
        <img
          className="game-box-bg"
          data-mariko-offset="-4"
          src={`/images/game-boxes/${bg}`}
          alt="game cover"
        />
        <img
          className="game-box-logo"
          data-mariko-offset="2.5"
          src={`/images/game-boxes/${logo}`}
          alt="game logo"
        />
        <img src="/images/game-boxes/box-ribbon.svg" alt="" />
        <img
          className="game-box-studio"
          src={`/images/game-boxes/${studios}`}
          alt="game studio"
        />
      </Mariko>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-page-dark-bg text-white">
      <Nav />
      <HomeHeader />
      <HomeBlock>
        <HomeBlockTitle Tag="h1">Mariko</HomeBlockTitle>
        <p>
          <b>Mariko</b> is a{' '}
          <b className="border-b border-primary">
            lightweight, free and open-source
          </b>{' '}
          JavaScript library to create{' '}
          <b className="border-b border-primary">
            stunning touch-friendly 3D parallax hover effects
          </b>
          .
        </p>
        <p className="mt-4">
          Available for <b className="border-b border-primary">JavaScript</b>,{' '}
          <b className="border-b border-primary">React</b> and{' '}
          <b className="border-b border-primary">Vue.js</b>
        </p>
        <p className="mt-4 flex items-center space-x-4 justify-center">
          <img
            className="h-16"
            src="/images/home-logos/js.svg"
            alt="JavaScript"
          />
          <img
            className="h-16"
            src="/images/home-logos/react.svg"
            alt="React"
          />
          <img className="h-16" src="/images/home-logos/vue.svg" alt="Vue.js" />
        </p>
      </HomeBlock>

      <HomeBlock className="bg-gradient-to-r from-primary to-primary-dark border-t-2 border-b-2 border-primary">
        <HomeBlockTitle>Showcase</HomeBlockTitle>
        <p>Creative and interactive presentation for anything</p>
        <div className="mt-8 flex flex-wrap justify-center">
          <GameBox
            bg="returnal-bg.jpg"
            logo="returnal-logo.png"
            studios="ps-studios-logo.svg"
          />
          <GameBox
            bg="demonsouls-bg.jpg"
            logo="demonsouls-logo.png"
            studios="ps-studios-logo.svg"
          />
          <GameBox
            bg="ratchet-bg.jpg"
            logo="ratchet-logo.png"
            studios="ps-studios-logo.svg"
          />
          <GameBox
            bg="re-bg.jpg"
            logo="re-logo.png"
            studios="capcom-logo.svg"
          />
        </div>
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Get Started</HomeBlockTitle>
        <p>
          <b>Mariko</b> is completely free and open-source (MIT Licensed)
        </p>
        <p className="mt-4">
          <Link href="/docs/">
            <a className="bg-primary text-white rounded-full px-8 py-4 font-bold text-xl inline-flex hover:bg-opacity-70 duration-200">
              Get Started
            </a>
          </Link>
        </p>
      </HomeBlock>
      <Footer />
    </div>
  );
}
