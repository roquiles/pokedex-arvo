import { render } from '@testing-library/react';
import Pokemon from '..';

const pokemonMock = {
  id: 113,
  name: 'Chansey',
  height: 11,
  weight: 346,
  abilities: ['natural-cure', 'serene-grace', 'healer'],
  types: ['normal'],
  stats: [
    {
      name: 'hp',
      value: 250,
    },
    { name: 'attack', value: 5 },
    { name: 'defense', value: 5 },
    { name: 'special-attack', value: 35 },
    { name: 'special-defense', value: 105 },
    { name: 'speed', value: 50 },
  ],
};

describe('', () => {
  it('should render correctly', () => {
    const component = render(<Pokemon activePokemon={pokemonMock} />);
    expect(component).toMatchSnapshot();
  });
});
