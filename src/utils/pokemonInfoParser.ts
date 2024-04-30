import getAttributesList from './getAttributesList';
import getStatsList from './getStatsList';

export type RawPokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  types: Array<{
    types: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
};

const pokemonInfoParser = (pokemon: RawPokemon) => {
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
