import { useContext, useEffect } from 'react';
import { TitlesContext } from '../shared/TitlesContext';

export const SectionTitle = ({ level = '2', title = '' }) => {
  const Component = `h${level}`;
  const slug = title
    .replace(/['?.]/g, '')
    .replace(/[ \-_]/g, '-')
    .toLowerCase();
  const titles = useContext(TitlesContext);
  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
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
