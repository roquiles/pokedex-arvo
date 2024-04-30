const validatePokemonId = (id: string | undefined) => {
  if (!id) {
    return '';
  }

  if (typeof id === 'string' && /^[0-9a-zA-Z]+$/g.test(id)) {
    return id.toLowerCase();
  }

  return '';
};

export default validatePokemonId;
