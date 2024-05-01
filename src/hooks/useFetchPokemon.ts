import { useState } from 'react';

const useFetchPokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchPokemon = async (pokemonId: string) => {
    setError('');
    setIsLoading(true);

    try {
      const apiResponse = await fetch(
        `http://${window.location.host}/api/pokemon/${pokemonId}`,
      );

      if (apiResponse.status !== 200) {
        const { message } = await apiResponse.json();
        throw new Error(message);
      }

      const pokemonData = await apiResponse.json();
      setData(pokemonData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    data,
    error,
    fetchPokemon,
  };
};

export default useFetchPokemon;
