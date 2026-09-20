import pokemonList from '../pokemonlist/allpokemonlist.txt?raw';

export const validPokemon = new Set(
  
  pokemonList
    .split(/\r?\n/)    //delimits on new line for both mac and windows
    .map((name) => name.trim()) //maps
    .filter(Boolean)
);
  console.log(validPokemon)
