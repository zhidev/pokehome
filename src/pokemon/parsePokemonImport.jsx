import { validPokemon } from "./validPokemon";

//Rework this to be better for now
export function parsePokemonImport(text) {
  console.log("PARSE POKMN TEXT!:", text)
  const importText= text.split(/\r?\n/)

  const exportPokemonList = [];

  importText.forEach((line) =>{
    //trim trailing and leading white space
    const cleanedLine = line.trim()
    //if empty string we can kick this part out
    if(!cleanedLine){
      return
    }

    //Trim for items, grab first index before @ 
    const species = cleanedLine.split('@')[0].trim()

    if(validPokemon.has(species)){
      exportPokemonList.push({
        species: species
          //can populate ability item moves later here
      })
    }
  })
  return exportPokemonList;
}

export default parsePokemonImport