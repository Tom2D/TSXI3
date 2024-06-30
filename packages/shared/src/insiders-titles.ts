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
