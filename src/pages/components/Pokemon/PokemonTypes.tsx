import { getTypeColor } from '@/utils';

const PokemonTypes: React.FC<{ types: string[] }> = ({ types }) => (
  <div className="ml-4 text-start">
    <h3 className="text-2xl text-gray-800 font-semibold mb-4">Types</h3>
    {types.map((item) => (
      <span
        style={{ backgroundColor: getTypeColor(item) }}
        className="px-6 py-1 rounded-full mr-2"
        key={item}
      >
        {item}
      </span>
    ))}
  </div>
);

export default PokemonTypes;
