export const getEnumStringValues = (enumObj: any) => Object.keys(enumObj).filter((key) => isNaN(Number(key)));

export const stringToEnum = (enumObj: any, value: string) => enumObj[value as keyof typeof enumObj];

export const enumToString = (enumObj: any, value: any) => Object.keys(enumObj).find((key) => enumObj[key] === value);

// For EnumA and EnumB, return the value of EnumB based on the string value of EnumA
// (Both enums must share the sanme string keys)
export function enumConvert<T>(value: string, enumMapping: { [key: string]: T }): T | undefined {
  return enumMapping[value as keyof typeof enumMapping];
}

// Transform int into enum, based on the specified enumMapping (int -> enum string)
export function enumFromInt<T>(value: number, enumMapping: { [key: number]: string }): T[keyof T] | undefined {
  const stringValue = enumMapping[value];
  if (stringValue) {
    return stringValue as T[keyof T];
  }
  return undefined;
}

export function enumToInt(value: string, enumMapping: { [key: number]: string }): number | undefined {
  const intValue = Object.keys(enumMapping).find((key) => enumMapping[Number(key)] === value);
  return intValue !== undefined ? Number(intValue) : undefined;
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
