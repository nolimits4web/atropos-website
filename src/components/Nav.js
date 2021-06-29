import Link from 'next/link';
import { GithubStats } from './GithubStats';

export const Nav = () => {
  return (
    <div className="h-16 flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8 z-10 relative text-white">
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link href="/">
          <a>
            <img
              src="/images/logo-white.svg"
              className="w-10 h-10"
              alt="Mariko"
            />
          </a>
        </Link>
        <div className="flex items-center">
          <img
            className="h-4 mr-2 hidden md:block"
            src="/images/logo-text-white.svg"
            alt="Mariko"
          />
          <span className="text-xs font-bold md:-mt-4">v1.0.0</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/docs/">
          <a className="font-medium hover:opacity-50">
            <span className="md:hidden">Docs</span>
            <span className="hidden md:block">Documentation</span>
          </a>
        </Link>
        <GithubStats />
      </div>
    </div>
  );
};
