const SearchBar: React.FC = () => (
  <div className="w-full">
    <input
      className="bg-white text-lg py-1.5 px-3 border border-slate-300 rounded-s w-9/12 lg:w-6/12"
      type="text"
      placeholder="Pokémon's name or number"
    />
    <button
      className="bg-indigo-900 text-lg text-white py-1.5 px-3 rounded-e duration-200 hover:bg-indigo-500"
      type="button"
    >
      Search
    </button>
  </div>
);

export default SearchBar;
