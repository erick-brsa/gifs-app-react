import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = '') => {
    const clean_query = query.trim().toLowerCase();
    if (clean_query == '') return;
    if (previousTerms.includes(clean_query)) return;
    setPreviousTerms([clean_query, ...previousTerms.slice(0, 7)]);
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descrubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar 
        onQuery={handleSearch} 
        placeholder="Busca el Gif ideal" 
      />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifsList gifs={gifs} />
    </>
  );
};
