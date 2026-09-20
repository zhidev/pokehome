//Very basic barebone, splits on @ and new line
export function parsePokemonImport(text) {
  return text
    .split(/\n\s*\n/)
    .map((entry) => {
      const firstLine = entry.trim().split('\n')[0];

      return {
        species: firstLine.split('@')[0].trim()
      };
    });
}