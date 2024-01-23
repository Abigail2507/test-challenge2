/* **DNA String Filter:**
- Create a function to process a DNA string (e.g., 'CTAGGGTA').
- The function should remove any non-canonical DNA bases (anything other than 'C', 'T', 'A', 'G').
- The function should be case sensitive (keep 'C' but remove 'c').
- If the DNA string is empty, return an empty string.
 */

function filtrarStringDNA(stringDNA) {
      if (!stringDNA) {
        return "";
    }

    const basesCanonical = new Set(['A', 'C', 'G', 'T']);

    const dnaFiltrado = Array.from(stringDNA).filter(base => basesCanonical.has(base)).join('');

    return dnaFiltrado;

}
