import { useEffect, useState } from 'react';
import { GithubIcon } from './GithubIcon';

function getLocalStats() {
  return {
    stars: localStorage.getItem('atropos-git-stats-stars'),
  };
}

async function fetchGitStats(local) {
  if (local) {
    return getLocalStats();
  }
  const res = await fetch('https://api.github.com/repos/nolimits4web/atropos/');
  const { stargazers_count } = await res.json();
  if (stargazers_count) {
    localStorage.setItem('atropos-git-stats-date', new Date().getTime());
  }
  if (stargazers_count) {
    localStorage.setItem(
      'atropos-git-stats-stars',
      stargazers_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    );
  }

  return getLocalStats();
}

export const GithubStats = () => {
  const [data, setData] = useState({ stars: 0 });
  useEffect(() => {
    const gitStatsDate = localStorage.getItem('atropos-git-stats-date');
    const local =
      gitStatsDate && new Date().getTime() - gitStatsDate * 1 < 1000 * 60 * 60;
    fetchGitStats(local).then((res) => {
      if (res.stars !== null) {
        setData(res);
      }
    });
  }, []);
  return (
    <div className="inline-flex items-center space-x-2">
      <GithubIcon className="inline-block" height="20" />
      {[[data.stars, 'stars']].map(([value, label]) => (
        <a
          key={label}
          className="text-xs hover:opacity-50 hover:no-underline"
          href="https://github.com/nolimits4web/atropos/"
          rel="noopener"
          target="_blank"
        >
          <span className="text-sm md:text-base font-medium">{value}</span>{' '}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};
