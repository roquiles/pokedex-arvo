import validatePokemonId from '../validatePokemonId';

describe('validatePokemonId', () => {
  it('should return an empty string when there is no ID', () => {
    expect(validatePokemonId(undefined)).toBe('');
  });

  it('should return a lowercase string when ID is valid', () => {
    expect(validatePokemonId('EXAMPLE')).toBe('example');
  });
});
