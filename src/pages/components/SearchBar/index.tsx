import { validatePokemonId } from '@/utils';
import { useCallback, useState } from 'react';

type SearchBarProps = {
  onSearch: (id: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [lastSearchedValue, setLastSearchedValue] = useState('');

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      const validatedInputValue = validatePokemonId(enteredValue);

      if (validatedInputValue && validatedInputValue !== lastSearchedValue) {
        onSearch(validatedInputValue);
        setLastSearchedValue(validatedInputValue);
      }
    },
    [enteredValue, lastSearchedValue, onSearch],
  );

  return (
    <form onSubmit={handleSearch} className="w-full">
      <input
        className="bg-white text-lg py-1.5 px-3 border border-slate-300 rounded-s w-9/12 lg:w-6/12"
        type="text"
        placeholder="Pokémon's name or number"
        value={enteredValue}
        minLength={1}
        onChange={(e) => setEnteredValue(e.target.value)}
      />
      <button
        className="bg-indigo-900 text-lg text-white py-1.5 px-3 rounded-e duration-200 hover:bg-indigo-500"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
