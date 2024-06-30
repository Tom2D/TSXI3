// Transform int into enum, based on the specified enumMapping (int -> enum string)
export function enumFromInt<T>(value: number, enumMapping: { [key: number]: string }): T[keyof T] | undefined {
  const stringValue = enumMapping[value];
  if (stringValue) {
    return stringValue as T[keyof T];
  }
  return undefined;
}

// Convert an enum param string ex "1,2,3" to an enum array
export function convertToEnumArray<T>(
  conversionFunction: (_value: number) => T[keyof T] | undefined,
  paramString: string,
): T[keyof T][] {
  if (!paramString) {
    return [];
  }
  return paramString
    .split(',')
    .map((title) => conversionFunction(Number(title)))
    .filter((title): title is T[keyof T] => title !== undefined);
}
