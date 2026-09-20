import { validPokemon } from './validPokemon';

export function isValidPokemon(species) {
  console.log("Validating: ", species)
  return validPokemon.has(species);
}