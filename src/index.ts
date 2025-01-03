type ToStringArg = { toString(): string };

export function uuidToNumber(value: ToStringArg): string {
  if (value == null) throw new TypeError('Cannot convert null or undefined');
  const string = value.toString().replaceAll('-', '');
  const result = BigInt('0x' + string).toString();

  return result;
}

export function numberToUuid(value: ToStringArg): string {
  if (value == null) throw new TypeError('Cannot convert null or undefined');
  const number = value.toString();
  const string = BigInt(number).toString(16).padStart(32, '0');
  const part1 = string.slice(0, 8);
  const part2 = string.slice(8, 12);
  const part3 = string.slice(12, 16);
  const part4 = string.slice(16, 20);
  const part5 = string.slice(20, 32);

  return `${part1}-${part2}-${part3}-${part4}-${part5}`;
}
