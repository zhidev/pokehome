import { parsePokemonImport } from './parsePokemonImport';
import { addPokemon } from './PokemonNode';
import { isValidPokemon } from './validatePokemon';


//For onSubmit for imports
export function handlePokemonImport(event, setPersonalNodes,position){
    event.preventDefault();
    console.log(event)
    const formData = new FormData(event.currentTarget);
    const importText = formData.get('importField');
    console.log("importText:\n", importText)
    const importedPokemonText = parsePokemonImport(importText)
    console.log("ImportedPokemonText inside handlePokemonImport:", importedPokemonText)
    importedPokemonText.forEach((pokemon)=> {
      //This step may be redundant
      if(isValidPokemon(pokemon.species)){
       addPokemon(pokemon.species, setPersonalNodes,position);
      }else{
        console.log("Invalid import: ", pokemon.species)
      }
    });
}