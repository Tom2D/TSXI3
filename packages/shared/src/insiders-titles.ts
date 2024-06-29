import { enumFromInt } from './enums-util';

export enum TitlesBitfield {
  Issuer = 1 << 0, // 1
  Subsidiary = 1 << 1, // 2
  TenPercentHolder = 1 << 2, // 4
  Director = 1 << 3, // 8
  SeniorOfficer = 1 << 4, // 16
  DirOrOfficerOfTenPercentHolder = 1 << 5, // 32
  DirOrOfficerOfInsiderOrSubsidiary = 1 << 6, // 64
  DeemedInsider = 1 << 7, // 128
}

export function titlesFromInt<T>(value: number): T[keyof T] | undefined {
  const titleMapping: { [key: number]: string } = {
    0: 'Issuer',
    1: 'Subsidiary',
    2: 'TenPercentHolder',
    3: 'Director',
    4: 'SeniorOfficer',
    5: 'DirOrOfficerOfTenPercentHolder',
    6: 'DirOrOfficerOfInsiderOrSubsidiary',
    7: 'DeemedInsider',
  };
  return enumFromInt(value, titleMapping);
}
