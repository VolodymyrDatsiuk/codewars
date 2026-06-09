const A_CODE = 96;
const ALPHABET_LENGTH = 26;

export function alphabetPosition(text: string): string {
  return [...text]
    .reduce((acc, symbol) => {
      const symbolIndex = symbol.toLowerCase().charCodeAt(0) - A_CODE;
      const isAlphabetSymbol =
        symbolIndex > 0 && symbolIndex <= ALPHABET_LENGTH;

      if (isAlphabetSymbol) {
        return acc + symbolIndex + " ";
      }

      return acc;
    }, "")
    .trim();
}
