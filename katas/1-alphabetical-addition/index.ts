const A_CODE = 96;
const ALPHABET_LENGTH = 26;

export function addLetters(...letters: string[]) {
  if (!letters?.length) {
    return "z";
  }

  const lettersSum =
    letters.reduce((sum, letter) => sum + letter.charCodeAt(0) - A_CODE, 0) %
    ALPHABET_LENGTH;

  return lettersSum === 0 ? "z" : String.fromCharCode(lettersSum + A_CODE);
}
