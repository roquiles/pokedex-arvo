import { Pokemon } from '@/types/pokemon';
import { validatePokemonId, pokemonInfoParser } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600 }); // Define cache timeout to 1 hour.

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pokemonId } = req.query;
  const validatedPokemonId = validatePokemonId(pokemonId);

  if (!validatedPokemonId) {
    return res.status(404).json({ message: 'Not found.' });
  }

  const cachedPokemon: { status: number; response: Pokemon } | undefined =
    cache.get(validatedPokemonId);

  if (cachedPokemon) {
    return res.status(cachedPokemon.status).json(cachedPokemon.response);
  }

  try {
    const pokeApiResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${validatedPokemonId}`,
      {
        cache: 'force-cache', // Just making sure cache is explicitly set for the request.
      },
    );

    if (pokeApiResponse.status === 200) {
      const pokemonInfo = await pokeApiResponse.json();
      const parsedPokemonInfo = pokemonInfoParser(pokemonInfo);

      cache.set(validatedPokemonId, {
        status: 200,
        response: parsedPokemonInfo,
      });

      return res.json(parsedPokemonInfo);
    }

    const errorResponse = { message: pokeApiResponse.statusText };

    cache.set(validatedPokemonId, {
      status: pokeApiResponse.status,
      response: errorResponse,
    });

    return res.status(pokeApiResponse.status).json(errorResponse);
  } catch (e) {
    return res.status(500).json({ message: 'Failed to search pokemon.' });
  }
};

export default handler;
