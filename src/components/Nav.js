import Link from 'next/link';
import { GithubStats } from './GithubStats';

export const Nav = ({ className }) => {
  return (
    <div className={className || ''}>
      <div className="h-16 flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8 z-10 relative text-white">
        <div className="flex items-center space-x-2 sm:space-x-4">
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
            <Link href="/">
              <a>
                <img
                  className="h-4 mr-2 hidden sm:block"
                  src="/images/logo-text-white.svg"
                  alt="Mariko"
                />
              </a>
            </Link>
            <span className="text-xs font-bold sm:-mt-4">
              v{process.env.marikoVersion}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/docs/">
            <a className="font-medium hover:opacity-50">
              <span className="sm:hidden">Docs</span>
              <span className="hidden sm:block">Documentation</span>
            </a>
          </Link>
          <GithubStats />
        </div>
      </div>
    </div>
  );
};
