export async function fetchPokemonList(limit: number = 100): Promise<Pokemon[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await response.json();
  
  const pokemonDetails = await Promise.all(data.results.map(async (pokemon: any) => {
    const res = await fetch(pokemon.url);
    const details = await res.json();
    return {
      name: details.name,
      sprite: details.sprites.front_default,
      height: details.height,
      weight: details.weight,
      types: details.types.map((type: any) => type.type.name)
    };
  }));

  return pokemonDetails;
}

interface Pokemon {
  name: string;
  sprite: string;
  height: number;
  weight: number;
  types: string[];
}