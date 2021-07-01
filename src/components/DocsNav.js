import { useContext } from 'react';
import { TitlesContext } from '../shared/TitlesContext';
import { FrameworkSwitch } from './FrameworkSwitch';

export const DocsNav = () => {
  const { titles } = useContext(TitlesContext);
  return (
    <div className="w-80 px-4 md:px-8 hidden lg:block">
      <div className="sticky top-4">
        <FrameworkSwitch />
        <ul className="text-sm">
          {titles.map((title) => (
            <li key={title.slug}>
              <a
                href={`#${title.slug}`}
                className="px-2 py-1 block rounded hover:bg-primary hover:bg-opacity-10 hover:text-primary font-medium duration-100"
              >
                {title.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
