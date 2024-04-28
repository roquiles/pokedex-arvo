type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

const getStatsList = (stats: Stat[]) => {
  const statsList = stats.reduce(
    (statsArr: Array<{ name: string; value: number }>, item) => {
      const statFormatted = {
        name: item.stat.name,
        value: item.base_stat,
      };
      return [...statsArr, statFormatted];
    },
    [],
  );

  return statsList;
};

export default getStatsList;
