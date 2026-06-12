import { MORSE_CODE } from "./preloaded";

const WORD_SEPARATOR = "   ";
const LETTER_SEPARATOR = " ";

const decodeMorseWord = (word: string) =>
  word
    .trim()
    .split(LETTER_SEPARATOR)
    .map((letter) => MORSE_CODE[letter.trim()])
    .join("");

export function decodeMorse(morseCode: string): string {
  return morseCode.split(WORD_SEPARATOR).map(decodeMorseWord).join(" ").trim();
}
