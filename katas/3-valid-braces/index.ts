const isMatchingBracesPair = (firstBrace: string, secondBrace: string) => {
  const closingByOpeningBrace: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  return closingByOpeningBrace[firstBrace] === secondBrace;
};

export function validBraces(braces: string): boolean {
  const stack: string[] = [];

  for (const brace of braces) {
    const lastBrace = stack.at(-1) ?? "";

    if (isMatchingBracesPair(lastBrace, brace)) {
      stack.pop();
    } else {
      stack.push(brace);
    }
  }

  return !stack.length;
}
