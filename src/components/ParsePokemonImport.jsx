//Rework this to be better for now
function parsePokemonImport(text) {
  return text
    .split(/\n\s*\n/)
    .map((entry) => {
      const firstLine = entry.trim().split('\n')[0];

      return {
        species: firstLine.split('@')[0].trim()
      };
    });
}

export default parsePokemonImport