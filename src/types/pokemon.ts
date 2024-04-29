export type PokemonType = {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  abilities: Array<string>;
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
