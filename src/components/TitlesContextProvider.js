import { useState } from 'react';
import { TitlesContext } from '../shared/TitlesContext';

export const TitlesContextProvider = ({ children }) => {
  const [titles, setTitles] = useState([]);
  const addTitle = (newTitle) => {
    const hasTitle = titles.filter((t) => t.slug === newTitle.slug).length > 0;
    if (hasTitle) return;
    titles.push(newTitle);
    setTitles([...titles]);
  };
  return (
    <TitlesContext.Provider value={{ titles, addTitle }}>
      {children}
    </TitlesContext.Provider>
  );
};
