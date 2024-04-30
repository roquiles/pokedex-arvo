import { PokemonType } from '@/types/pokemon';

const InfoCard: React.FC<{ infos: Partial<PokemonType> }> = ({ infos }) => {
  const { weight, height, abilities } = infos;

  return (
    <div className="rounded-lg bg-yellow-400 p-5 text-gray-600 mb-8">
      <div className="flex flex-col mb-3.5 items-center">
        Height:&nbsp;
        <span className="text-gray-800 text-xl font-semibold">{height}</span>
      </div>
      <div className="flex flex-col mb-3.5 items-center">
        Weight:&nbsp;
        <span className="text-gray-800 text-xl font-semibold">{weight}</span>
      </div>
      <div className="flex flex-col mb-3.5 text-center text-wrap">
        Abilities:&nbsp;
        <ul>
          {abilities?.map((ability) => (
            <li
              className="capitalize text-gray-800 text-xl mr-1 font-semibold"
              key={ability}
            >
              {ability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;
