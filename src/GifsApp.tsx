import { CustomHeader } from './shared/components/CustomHeader';
import { GifsList } from './gifs/components/GifsList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { SearchBar } from './shared/components/SearchBar';
import { useGif } from './gifs/hooks/useGif';

export const GifsApp = () => {
  
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGif();

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
