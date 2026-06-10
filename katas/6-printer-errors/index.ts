export function printerError(string: string): string | null {
  if (typeof string !== "string") return null;

  const availableColorsCodes = "abcdefghijklm";

  const errorsCount = [...string].reduce(
    (acc, colorCode) =>
      availableColorsCodes.includes(colorCode) ? acc : acc + 1,
    0,
  );

  return `${errorsCount}/${string.length}`;
}
