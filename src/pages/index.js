import Link from 'next/link';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { GameBox } from '../components/GameBox';
import { MovieBox } from '../components/MovieBox';
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

export default function Home() {
  return (
    <div className="bg-page-dark-bg text-white">
      <Nav />
      <HomeHeader />
      <HomeBlock>
        <HomeBlockTitle Tag="h1">Atropos</HomeBlockTitle>
        <p>
          <b>Atropos</b> is a{' '}
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
          <img className="h-16" src="/images/logos/js.svg" alt="JavaScript" />
          <img className="h-16" src="/images/logos/react.svg" alt="React" />
          <img className="h-16" src="/images/logos/vue.svg" alt="Vue.js" />
        </p>
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Features</HomeBlockTitle>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="p-4 rounded-lg bg-primary bg-opacity-10">
            <div className="text-xl font-bold mb-4">Touch Friendly</div>
            <div>
              Atropos uses pointer events so it perfectly works with both mouse
              and touch screens at the same time
            </div>
          </div>
          <div className="p-4 rounded-lg bg-primary bg-opacity-10">
            <div className="text-xl font-bold mb-4">Lightweight</div>
            <div>Atropos script is just 2KB minified and gzipped</div>
          </div>
          <div className="p-4 rounded-lg bg-primary bg-opacity-10">
            <div className="text-xl font-bold mb-4">Zero Dependencies</div>
            <div>
              Yeah, Atropos doesn't depend and doesn't include any third-party
              scripts
            </div>
          </div>
          <div className="p-4 rounded-lg bg-primary bg-opacity-10">
            <div className="text-xl font-bold mb-4">Configurable</div>
            <div>Atropos comes with wide customization possibilities</div>
          </div>
        </div>
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

        <div className="mt-8 flex flex-wrap justify-center">
          <MovieBox
            bg="gk-bg.jpg"
            logo1="gk-logo-1.png"
            logo2="gk-logo-2.png"
            logo3="gk-logo-3.png"
          />
          <MovieBox
            bg="ted-lasso-bg.jpg"
            logo1="ted-lasso-logo-1.png"
            logo2="ted-lasso-logo-2.png"
          />
          <MovieBox
            bg="mk-bg.jpg"
            logo1="mk-logo-1.png"
            logo2="mk-logo-2.png"
            logo3="mk-logo-3.png"
          />
          <MovieBox
            bg="spider-bg.jpg"
            logo1="spider-logo-1.png"
            logo2="spider-logo-2.png"
            logo3="spider-logo-3.png"
          />
        </div>
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Get Started</HomeBlockTitle>
        <p>
          <b>Atropos</b> is completely free and open-source (MIT Licensed)
        </p>
        <p className="mt-4">
          <Link href="/docs/">
            <a className="bg-primary text-white rounded-full px-8 py-4 font-bold text-xl inline-flex hover:bg-opacity-70 duration-200">
              Get Started
            </a>
          </Link>
        </p>
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>More Of Our Projects</HomeBlockTitle>

        <div className="sm:flex items-stretch max-w-3xl mx-auto space-y-4 sm:space-y-0 sm:space-x-8 sm:text-center gr">
          {[
            {
              url: 'https://framework7.io',
              title: 'Framework7',
              description:
                'Full featured framework for building iOS, Android & desktop apps',
              logo: 'framework7.svg',
            },
            {
              url: 'https://swiperjs.com',
              title: 'Swiper',
              description: 'Most modern mobile touch slider',
              logo: 'swiper.svg',
            },
            {
              url: 'https://tailwind-mobile.com',
              title: 'Tailwind Mobile',
              description:
                'Pixel perfect mobile UI components built with Tailwind CSS',
              logo: 'tailwind-mobile.svg',
            },
          ].map((item) => (
            <a
              className="flex sm:flex-col items-center w-full border-white border-opacity-10 border rounded-xl px-4 py-6 duration-200 hover:shadow-lg sm:hover:shadow-2xl hover:border-opacity-0 hover:bg-primary hover:bg-opacity-5 hover:scale-[1.05]"
              href={item.url}
              target="_blank"
              key={item.title}
            >
              <img
                className="w-12 sm:w-32 sm:h-32 mr-4 sm:mr-0"
                src={`/images/projects/${item.logo}`}
                alt={item.title}
              />
              <div>
                <div className="font-semibold sm:mt-4 sm:mb-2">
                  {item.title}
                </div>
                <div className="text-sm opacity-75">{item.description}</div>
              </div>
            </a>
          ))}
        </div>
      </HomeBlock>
      <Footer />
    </div>
  );
}
