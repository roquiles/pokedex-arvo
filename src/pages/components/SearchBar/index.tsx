import { validatePokemonId } from '@/utils';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

type SearchBarProps = {
  onSearch: (id: string) => void;
  isLoadingSearch: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoadingSearch }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [lastSearchedValue, setLastSearchedValue] = useState('');

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const validatedInputValue = validatePokemonId(enteredValue);

      if (validatedInputValue && validatedInputValue !== lastSearchedValue) {
        onSearch(validatedInputValue);
      }

      setLastSearchedValue(validatedInputValue);
    },
    [enteredValue, lastSearchedValue, onSearch],
  );

  const handleChangeInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const validValue = value.replace(/[^a-z0-9]/gi, '');

      setEnteredValue(validValue);
    },
    [],
  );

  return (
    <form onSubmit={handleSearch} className="w-full">
      <input
        className="bg-white text-lg py-1.5 px-3 border border-slate-300 rounded-s w-9/12 lg:w-6/12 disabled:opacity-50"
        type="text"
        placeholder="Pokémon's name or number"
        value={enteredValue}
        minLength={1}
        onChange={handleChangeInputValue}
        disabled={isLoadingSearch}
      />
      <button
        className="bg-indigo-900 text-lg text-white py-1.5 px-3 rounded-e duration-200 hover:bg-indigo-500 disabled:bg-indigo-500"
        type="submit"
        onClick={handleSearch}
        disabled={isLoadingSearch}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
