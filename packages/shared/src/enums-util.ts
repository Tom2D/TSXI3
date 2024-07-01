export const getEnumStringValues = (enumObj: any) => Object.keys(enumObj).filter((key) => isNaN(Number(key)));

export const stringToEnum = (enumObj: any, value: string) => enumObj[value as keyof typeof enumObj];

export const enumToString = (enumObj: any, value: any) => Object.keys(enumObj).find((key) => enumObj[key] === value);
