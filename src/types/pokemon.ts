export type Pokemon = {
  id: number;
  name: string;
  height?: number;
  weight?: number;
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
