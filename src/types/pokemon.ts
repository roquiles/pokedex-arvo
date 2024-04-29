export type PokemonType = {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  abilities: Array<string>;
  types: Array<string>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
};
