type BaseStatsProps = {
  stats: Array<{
    name: string;
    value: number;
  }>;
};

const BaseStats: React.FC<BaseStatsProps> = ({ stats }) => {
  const statsValues = stats?.map((stat) => stat.value);
  const maxStatValue = Math.max(...statsValues);

  const getStatWidth = (value: number) =>
    value === maxStatValue
      ? '100%'
      : `${Math.round((value * 100) / maxStatValue)}%`;

  return (
    <div className="col-span-3 md:col-span-2 text-start ml-4 sm:ml-8">
      <h3 className=" text-2xl text-gray-800 font-semibold mb-4 ">
        Base Stats
      </h3>
      {stats?.map(({ name, value }) => (
        <div key={name} className="mb-2">
          <span className="uppercase text-gray-500">{name}</span>
          <div className="flex">
            <div
              className="h6 rounded-sm bg-teal-600 mr-1"
              style={{
                width: getStatWidth(value),
              }}
            />
            <span>{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BaseStats;
