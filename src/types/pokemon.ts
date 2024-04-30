export type PokemonType = {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  abilities: Array<string>;
  types: Array<string>;
  stats: Array<{
    name: string;
    value: number;
  }>;
};
