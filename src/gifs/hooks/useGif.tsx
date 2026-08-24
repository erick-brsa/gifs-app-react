import { useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif';

export const useGif = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = '') => {
    const clean_query = query.trim().toLowerCase();
    if (clean_query == '') return;
    if (previousTerms.includes(clean_query)) return;
    setPreviousTerms([
      clean_query,
      ...previousTerms.slice(0, 7),
    ]);
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };
  return {
    gifs,
    previousTerms,          
    handleSearch,
    handleTermClicked,
  };
};
