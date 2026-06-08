export function getSum(a: number, b: number): number {
  if (a === b) return a;

  const [firstTerm, lastTerm] = [Math.min(a, b), Math.max(a, b)];

  return arithmeticSum(firstTerm, lastTerm - firstTerm + 1);
}

function arithmeticSum(
  firstTerm: number,
  termCount: number,
  difference = 1,
): number {
  const halfTermCount = termCount / 2;
  const totalDifference = (termCount - 1) * difference;
  const firstAndLastTermSum = 2 * firstTerm + totalDifference;

  return halfTermCount * firstAndLastTermSum;
}
