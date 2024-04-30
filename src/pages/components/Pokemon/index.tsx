import { PokemonType } from '@/types/pokemon';
import Image from 'next/image';
import InfoCard from './InfoCard';
import PokemonTypes from './PokemonTypes';
import BaseStats from './BaseStats';

type PokemonProps = {
  activePokemon: PokemonType;
};

const Pokemon: React.FC<PokemonProps> = ({ activePokemon }) => {
  const { name, id, height, weight, abilities, types, stats } = activePokemon;

  return (
    <div className="bg-white rounded mt-10 p-6">
      <div className="flex items-center flex-col mb-5 sm:flex-row sm:ml-6 ">
        <Image
          width={150}
          height={150}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
        <h2 className="text-gray-700 capitalize text-4xl font-semibold sm:ml-5">
          #{id} - {name}
        </h2>
      </div>

      <div className="w-full grid grid-cols-3">
        <div className="col-span-3 mt-10 md:col-span-1 md:mt-0">
          <InfoCard infos={{ height, weight, abilities }} />
          <PokemonTypes types={types} />
        </div>
        <BaseStats stats={stats} />
      </div>
    </div>
  );
};

export default Pokemon;
