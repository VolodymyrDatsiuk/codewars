export function duplicateCount(text: string): number {
  // functions name is bad, but it's codewars's naming :) I'd call it countDuplicatedLetters
  const lowerCaseText = text.toLowerCase();

  return [...lowerCaseText].reduce<string[]>((duplicatedLetters, letter) => {
    const duplicatesCount = lowerCaseText.split(letter).length - 1;

    if (duplicatesCount < 2) return duplicatedLetters;
    if (duplicatedLetters.includes(letter)) return duplicatedLetters;

    return [...duplicatedLetters, letter];
  }, []).length;
}
