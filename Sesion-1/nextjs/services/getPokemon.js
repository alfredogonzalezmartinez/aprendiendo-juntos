export const getPokemon = async (id = 658) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return {
    name: data.name,
    sprite: data.sprites.other["official-artwork"].front_default,
    types: data.types.map((type) => type.type.name),
  };
};
