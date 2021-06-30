import { useContext, useEffect } from 'react';
import { TitlesContext } from './TitlesContext';

export const SectionTitle = ({ level = '2', title = '' }) => {
  const Component = `h${level}`;
  const slug = title
    .replace(/['?.]/g, '')
    .replace(/[ \-_]/g, '-')
    .toLowerCase();
  const titles = useContext(TitlesContext);
  useEffect(() => {
    titles.addTitle({ slug, title });
  });
  return (
    <Component id={slug}>
      <a href={`#${slug}`} className="!font-bold !no-underline">
        {title}
      </a>
    </Component>
  );
};
