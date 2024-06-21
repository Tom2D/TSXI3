//TDD_TODO EXPLAIN PKOI NECESSAIRE

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

export function convertToEnumArray<T>(
  conversionFunction: (value: number) => T[keyof T] | undefined,
  input: string | number[],
): T[keyof T][] {
  const values = typeof input === 'string' ? input.split(',').map(Number) : input;
  return values.map(conversionFunction).filter((value): value is T[keyof T] => value !== undefined);
}
