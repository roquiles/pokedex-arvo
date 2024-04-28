import { Pokemon } from '@/types/pokemon';
import getAttributesList from './getAttributesList';
import getStatsList from './getStatsList';

const pokemonInfoParser = (pokemon: Pokemon) => {
  const {
    id,
    name,
    height,
    weight,
    types: rawTypes,
    stats: rawStats,
    abilities: rawAbilities,
  } = pokemon;

  const parsedPokemon = {
    id,
    name,
    height,
    weight,
    abilities: getAttributesList(rawAbilities, 'ability'),
    types: getAttributesList(rawTypes, 'type'),
    stats: getStatsList(rawStats),
  };

  return parsedPokemon;
};

export default pokemonInfoParser;
