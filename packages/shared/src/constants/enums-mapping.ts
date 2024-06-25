//E:\Thomas\Prog\TSXI3\packages\shared\src\constants\enums-mapping.tsTDD_TODO EXPLAIN PKOI NECESSAIRE

export function relationsToIssuerFromInt<T>(value: number): T[keyof T] | undefined {
  const relationsToIssuerTypeMapping: { [key: number]: string } = {
    0: 'Issuer',
    1: 'Subsidiary',
    2: 'TenPercentHolder',
    3: 'Director',
    4: 'SeniorOfficer',
    5: 'DirOrOfficerOfTenPercentHolder',
    6: 'DirOrOfficerOfInsiderOrSubsidiary',
    7: 'DeemedInsider',
  };

  const stringValue = relationsToIssuerTypeMapping[value];
  if (stringValue) {
    return stringValue as T[keyof T];
  }
  return undefined;
}

// Convert an enum param string ex "1,2,3" to an enum array
export function convertToEnumArray<T>(
  conversionFunction: (value: number) => T[keyof T] | undefined,
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
