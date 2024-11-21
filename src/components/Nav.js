import Link from 'next/link';
import { GithubStats } from './GithubStats';
import BlackFridayRibbon from './BlackFridayRibbon';

export const Nav = ({ className }) => {
  return (
    <>
      <BlackFridayRibbon />
      <div className={className || ''}>
        <div className="h-16 flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8 z-10 relative text-white">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/">
              <img
                src="/images/logo-inner.svg"
                className="w-16 h-16"
                alt="Atropos"
              />
            </Link>
            <div className="flex items-center">
              <Link href="/">
                <img
                  className="h-4 mr-2 hidden sm:block"
                  src="/images/logo-text-white.svg"
                  alt="Atropos"
                />
              </Link>
              <span className="text-xs font-bold sm:-mt-4">
                v{process.env.atroposVersion}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/docs/" className="font-medium hover:opacity-50">
              <span className="sm:hidden">Docs</span>
              <span className="hidden sm:block">Documentation</span>
            </Link>
            <GithubStats />
          </div>
        </div>
      </div>
    </>
  );
};
