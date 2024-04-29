import Head from 'next/head';
import useFetchPokemon from '@/hooks/useFetchPokemon';
import SearchBar from './components/SearchBar';
import { Empty, LoaderSpinner, UpperArrow } from './components/Icons';

const Home = () => {
  const { fetchPokemon, isLoading, error } = useFetchPokemon();

  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokémon encyclopedia app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center px-5 py-24 max-w-7xl m-auto ">
        <h1 className="text-gray-800 text-4xl font-bold pb-6">
          Welcome to Pokedéx!
        </h1>
        <SearchBar onSearch={fetchPokemon} isLoadingSearch={isLoading} />

        {isLoading && <LoaderSpinner />}

        {!isLoading && !error && (
          <>
            <UpperArrow />
            <p className="text-gray-700 pb-6">
              Enter a Pokémon&apos;s name or number in the search bar above to
              begin your journey.
            </p>
          </>
        )}

        {!isLoading && error && (
          <>
            <Empty />
            <p>{error}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
