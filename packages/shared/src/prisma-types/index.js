
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CurrencyScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ExchangesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.InsidersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  issuerId: 'issuerId',
  ceasedToBeInsider: 'ceasedToBeInsider'
};

exports.Prisma.IssuerexchangesScalarFieldEnum = {
  issuerId: 'issuerId',
  exchangeId: 'exchangeId'
};

exports.Prisma.IssuersScalarFieldEnum = {
  id: 'id',
  sedarId: 'sedarId',
  name: 'name',
  tickerId: 'tickerId',
  sizeId: 'sizeId'
};

exports.Prisma.RelationstoissuerScalarFieldEnum = {
  type: 'type',
  insiderId: 'insiderId'
};

exports.Prisma.SecuritydesignationsScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SizesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.TickersScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  id: 'id',
  sediId: 'sediId',
  insiderId: 'insiderId',
  issuerId: 'issuerId',
  securityId: 'securityId',
  trnFlagId: 'trnFlagId',
  trnDate: 'trnDate',
  filingDate: 'filingDate',
  ownershipType: 'ownershipType',
  ownershipExtraInfo: 'ownershipExtraInfo',
  trnNatureCode: 'trnNatureCode',
  nb: 'nb',
  nbType: 'nbType',
  price: 'price',
  priceCurrencyId: 'priceCurrencyId',
  closingBalance: 'closingBalance',
  closingBalanceType: 'closingBalanceType',
  calculatedBalance: 'calculatedBalance',
  calculatedBalanceType: 'calculatedBalanceType',
  underlyingSecurityId: 'underlyingSecurityId',
  GeneralRemarks: 'GeneralRemarks'
};

exports.Prisma.TrnflagScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.TrnnaturesScalarFieldEnum = {
  code: 'code',
  description: 'description'
};

exports.Prisma.UnderlyingsecuritiesScalarFieldEnum = {
  id: 'id',
  securityId: 'securityId',
  nb: 'nb',
  nbType: 'nbType',
  Balance: 'Balance',
  BalanceType: 'BalanceType',
  exercisePrice: 'exercisePrice',
  exercisePriceCurrencyId: 'exercisePriceCurrencyId',
  expiryDate: 'expiryDate'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.relationstoissuer_type = exports.$Enums.relationstoissuer_type = {
  Issuer: 'Issuer',
  Subsidiary: 'Subsidiary',
  TenPercentHolder: 'TenPercentHolder',
  Director: 'Director',
  SeniorOfficer: 'SeniorOfficer',
  DirOrOfficerOfTenPercentHolder: 'DirOrOfficerOfTenPercentHolder',
  DirOrOfficerOfInsiderOrSubsidiary: 'DirOrOfficerOfInsiderOrSubsidiary',
  DeemedInsider: 'DeemedInsider'
};

exports.transactions_ownershipType = exports.$Enums.transactions_ownershipType = {
  Direct: 'Direct',
  Indirect: 'Indirect',
  ControlOrDirection: 'ControlOrDirection'
};

exports.transactions_nbType = exports.$Enums.transactions_nbType = {
  Quantity: 'Quantity',
  Value: 'Value'
};

exports.transactions_closingBalanceType = exports.$Enums.transactions_closingBalanceType = {
  Quantity: 'Quantity',
  Value: 'Value'
};

exports.transactions_calculatedBalanceType = exports.$Enums.transactions_calculatedBalanceType = {
  Quantity: 'Quantity',
  Value: 'Value'
};

exports.underlyingsecurities_nbType = exports.$Enums.underlyingsecurities_nbType = {
  Quantity: 'Quantity',
  Value: 'Value'
};

exports.underlyingsecurities_BalanceType = exports.$Enums.underlyingsecurities_BalanceType = {
  Quantity: 'Quantity',
  Value: 'Value'
};

exports.Prisma.ModelName = {
  currency: 'currency',
  exchanges: 'exchanges',
  insiders: 'insiders',
  issuerexchanges: 'issuerexchanges',
  issuers: 'issuers',
  relationstoissuer: 'relationstoissuer',
  securitydesignations: 'securitydesignations',
  sizes: 'sizes',
  tickers: 'tickers',
  transactions: 'transactions',
  trnflag: 'trnflag',
  trnnatures: 'trnnatures',
  underlyingsecurities: 'underlyingsecurities'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\Thomas\\Prog\\TSXInsiderJS2\\packages\\shared\\src\\prisma-types",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../apps/server/.env"
  },
  "relativePath": "../../../../apps/server/prisma",
  "clientVersion": "5.14.0",
  "engineVersion": "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../../../packages/shared/src/prisma-types\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel currency {\n  id                   Int                    @id @default(autoincrement())\n  name                 String?                @db.VarChar(255)\n  transactions         transactions[]\n  underlyingsecurities underlyingsecurities[]\n}\n\nmodel exchanges {\n  id              Int               @id @default(autoincrement())\n  name            String?           @db.VarChar(255)\n  issuerexchanges issuerexchanges[]\n}\n\nmodel insiders {\n  id                Int                 @id @default(autoincrement())\n  name              String?             @db.VarChar(255)\n  issuerId          Int?\n  ceasedToBeInsider String?             @db.VarChar(255)\n  issuers           issuers?            @relation(fields: [issuerId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"insiders_ibfk_1\")\n  relationstoissuer relationstoissuer[]\n  transactions      transactions[]\n\n  @@index([issuerId], map: \"issuerId\")\n}\n\nmodel issuerexchanges {\n  issuerId   Int\n  exchangeId Int\n  issuers    issuers   @relation(fields: [issuerId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"issuerexchanges_ibfk_1\")\n  exchanges  exchanges @relation(fields: [exchangeId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"issuerexchanges_ibfk_2\")\n\n  @@id([issuerId, exchangeId])\n  @@index([exchangeId], map: \"exchangeId\")\n}\n\nmodel issuers {\n  id              Int               @id @default(autoincrement())\n  sedarId         Int?              @unique(map: \"sedarId\")\n  name            String?           @unique(map: \"name\") @db.VarChar(255)\n  tickerId        Int?\n  sizeId          Int?\n  insiders        insiders[]\n  issuerexchanges issuerexchanges[]\n  tickers         tickers?          @relation(fields: [tickerId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"issuers_ibfk_1\")\n  sizes           sizes?            @relation(fields: [sizeId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"issuers_ibfk_2\")\n  transactions    transactions[]\n\n  @@index([id], map: \"issuers_index_0\")\n  @@index([sedarId], map: \"issuers_index_1\")\n  @@index([name], map: \"issuers_index_2\")\n  @@index([sizeId], map: \"sizeId\")\n  @@index([tickerId], map: \"tickerId\")\n}\n\nmodel relationstoissuer {\n  type      relationstoissuer_type\n  insiderId Int\n  insiders  insiders               @relation(fields: [insiderId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"relationstoissuer_ibfk_1\")\n\n  @@id([type, insiderId])\n  @@index([insiderId], map: \"insiderId\")\n}\n\nmodel securitydesignations {\n  id                   Int                    @id @default(autoincrement())\n  name                 String?                @db.VarChar(255)\n  transactions         transactions[]\n  underlyingsecurities underlyingsecurities[]\n}\n\nmodel sizes {\n  id      Int       @id @default(autoincrement())\n  name    String?   @db.VarChar(255)\n  issuers issuers[]\n}\n\nmodel tickers {\n  id      Int       @id @default(autoincrement())\n  name    String?   @db.VarChar(255)\n  issuers issuers[]\n}\n\nmodel transactions {\n  id                    Int                                 @id @default(autoincrement())\n  sediId                Int?\n  insiderId             Int?\n  issuerId              Int?\n  securityId            Int?\n  trnFlagId             Int?\n  trnDate               DateTime?                           @db.Date\n  filingDate            DateTime?                           @db.Date\n  ownershipType         transactions_ownershipType?\n  ownershipExtraInfo    String?                             @db.VarChar(255)\n  trnNatureCode         Int?\n  nb                    Int?\n  nbType                transactions_nbType?\n  price                 Float?                              @db.Float\n  priceCurrencyId       Int?\n  closingBalance        Float?                              @db.Float\n  closingBalanceType    transactions_closingBalanceType?\n  calculatedBalance     Float?                              @db.Float\n  calculatedBalanceType transactions_calculatedBalanceType?\n  underlyingSecurityId  Int?\n  GeneralRemarks        String?                             @db.VarChar(255)\n  issuers               issuers?                            @relation(fields: [issuerId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"transactions_ibfk_1\")\n  insiders              insiders?                           @relation(fields: [insiderId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"transactions_ibfk_2\")\n  securitydesignations  securitydesignations?               @relation(fields: [securityId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"transactions_ibfk_3\")\n  trnflag               trnflag?                            @relation(fields: [trnFlagId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"transactions_ibfk_4\")\n  trnnatures            trnnatures?                         @relation(fields: [trnNatureCode], references: [code], onDelete: NoAction, onUpdate: NoAction, map: \"transactions_ibfk_5\")\n  underlyingsecurities  underlyingsecurities?               @relation(fields: [underlyingSecurityId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"transactions_ibfk_6\")\n  currency              currency?                           @relation(fields: [priceCurrencyId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"transactions_ibfk_7\")\n\n  @@index([insiderId], map: \"insiderId\")\n  @@index([issuerId], map: \"issuerId\")\n  @@index([priceCurrencyId], map: \"priceCurrencyId\")\n  @@index([securityId], map: \"securityId\")\n  @@index([id], map: \"transactions_index_3\")\n  @@index([sediId], map: \"transactions_index_4\")\n  @@index([trnFlagId], map: \"trnFlagId\")\n  @@index([trnNatureCode], map: \"trnNatureCode\")\n  @@index([underlyingSecurityId], map: \"underlyingSecurityId\")\n}\n\nmodel trnflag {\n  id           Int            @id @default(autoincrement())\n  name         String?        @db.VarChar(255)\n  transactions transactions[]\n}\n\nmodel trnnatures {\n  code         Int            @id\n  description  String?        @db.VarChar(255)\n  transactions transactions[]\n}\n\nmodel underlyingsecurities {\n  id                      Int                               @id @default(autoincrement())\n  securityId              Int?\n  nb                      Int?\n  nbType                  underlyingsecurities_nbType?\n  Balance                 Int?\n  BalanceType             underlyingsecurities_BalanceType?\n  exercisePrice           Float?                            @db.Float\n  exercisePriceCurrencyId Int?\n  expiryDate              DateTime?                         @db.Date\n  transactions            transactions[]\n  securitydesignations    securitydesignations?             @relation(fields: [securityId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"underlyingsecurities_ibfk_1\")\n  currency                currency?                         @relation(fields: [exercisePriceCurrencyId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"underlyingsecurities_ibfk_2\")\n\n  @@index([exercisePriceCurrencyId], map: \"exercisePriceCurrencyId\")\n  @@index([securityId], map: \"securityId\")\n}\n\nenum relationstoissuer_type {\n  Issuer\n  Subsidiary\n  TenPercentHolder\n  Director\n  SeniorOfficer\n  DirOrOfficerOfTenPercentHolder\n  DirOrOfficerOfInsiderOrSubsidiary\n  DeemedInsider\n}\n\nenum underlyingsecurities_nbType {\n  Quantity\n  Value\n}\n\nenum underlyingsecurities_BalanceType {\n  Quantity\n  Value\n}\n\nenum transactions_ownershipType {\n  Direct\n  Indirect\n  ControlOrDirection\n}\n\nenum transactions_nbType {\n  Quantity\n  Value\n}\n\nenum transactions_closingBalanceType {\n  Quantity\n  Value\n}\n\nenum transactions_calculatedBalanceType {\n  Quantity\n  Value\n}\n",
  "inlineSchemaHash": "c42bc9a52551048b71dd829e045f13b06d662b50ef3d6b818f8aa4290c0d6670",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "../../packages/shared/src/prisma-types",
    "../packages/shared/src/prisma-types",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"currency\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"relationName\":\"currencyTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"underlyingsecurities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"underlyingsecurities\",\"relationName\":\"currencyTounderlyingsecurities\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"exchanges\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuerexchanges\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"issuerexchanges\",\"relationName\":\"exchangesToissuerexchanges\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"insiders\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ceasedToBeInsider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"issuers\",\"relationName\":\"insidersToissuers\",\"relationFromFields\":[\"issuerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relationstoissuer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"relationstoissuer\",\"relationName\":\"insidersTorelationstoissuer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"relationName\":\"insidersTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"issuerexchanges\":{\"dbName\":null,\"fields\":[{\"name\":\"issuerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exchangeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"issuers\",\"relationName\":\"issuerexchangesToissuers\",\"relationFromFields\":[\"issuerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exchanges\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exchanges\",\"relationName\":\"exchangesToissuerexchanges\",\"relationFromFields\":[\"exchangeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"issuerId\",\"exchangeId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"issuers\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sedarId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sizeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insiders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"insiders\",\"relationName\":\"insidersToissuers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuerexchanges\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"issuerexchanges\",\"relationName\":\"issuerexchangesToissuers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickers\",\"relationName\":\"issuersTotickers\",\"relationFromFields\":[\"tickerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sizes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sizes\",\"relationName\":\"issuersTosizes\",\"relationFromFields\":[\"sizeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"relationName\":\"issuersTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"relationstoissuer\":{\"dbName\":null,\"fields\":[{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"relationstoissuer_type\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insiderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insiders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"insiders\",\"relationName\":\"insidersTorelationstoissuer\",\"relationFromFields\":[\"insiderId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"type\",\"insiderId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"securitydesignations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"relationName\":\"securitydesignationsTotransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"underlyingsecurities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"underlyingsecurities\",\"relationName\":\"securitydesignationsTounderlyingsecurities\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sizes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"issuers\",\"relationName\":\"issuersTosizes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tickers\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"issuers\",\"relationName\":\"issuersTotickers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"transactions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sediId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insiderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"securityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trnFlagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trnDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filingDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownershipType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions_ownershipType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownershipExtraInfo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trnNatureCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions_nbType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceCurrencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"closingBalance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"closingBalanceType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions_closingBalanceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calculatedBalance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calculatedBalanceType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions_calculatedBalanceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"underlyingSecurityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GeneralRemarks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"issuers\",\"relationName\":\"issuersTotransactions\",\"relationFromFields\":[\"issuerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insiders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"insiders\",\"relationName\":\"insidersTotransactions\",\"relationFromFields\":[\"insiderId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"securitydesignations\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"securitydesignations\",\"relationName\":\"securitydesignationsTotransactions\",\"relationFromFields\":[\"securityId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trnflag\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trnflag\",\"relationName\":\"transactionsTotrnflag\",\"relationFromFields\":[\"trnFlagId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trnnatures\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trnnatures\",\"relationName\":\"transactionsTotrnnatures\",\"relationFromFields\":[\"trnNatureCode\"],\"relationToFields\":[\"code\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"underlyingsecurities\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"underlyingsecurities\",\"relationName\":\"transactionsTounderlyingsecurities\",\"relationFromFields\":[\"underlyingSecurityId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"currency\",\"relationName\":\"currencyTotransactions\",\"relationFromFields\":[\"priceCurrencyId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"trnflag\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"relationName\":\"transactionsTotrnflag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"trnnatures\":{\"dbName\":null,\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"relationName\":\"transactionsTotrnnatures\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"underlyingsecurities\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"securityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"underlyingsecurities_nbType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BalanceType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"underlyingsecurities_BalanceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercisePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercisePriceCurrencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiryDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactions\",\"relationName\":\"transactionsTounderlyingsecurities\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"securitydesignations\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"securitydesignations\",\"relationName\":\"securitydesignationsTounderlyingsecurities\",\"relationFromFields\":[\"securityId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"currency\",\"relationName\":\"currencyTounderlyingsecurities\",\"relationFromFields\":[\"exercisePriceCurrencyId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"relationstoissuer_type\":{\"values\":[{\"name\":\"Issuer\",\"dbName\":null},{\"name\":\"Subsidiary\",\"dbName\":null},{\"name\":\"TenPercentHolder\",\"dbName\":null},{\"name\":\"Director\",\"dbName\":null},{\"name\":\"SeniorOfficer\",\"dbName\":null},{\"name\":\"DirOrOfficerOfTenPercentHolder\",\"dbName\":null},{\"name\":\"DirOrOfficerOfInsiderOrSubsidiary\",\"dbName\":null},{\"name\":\"DeemedInsider\",\"dbName\":null}],\"dbName\":null},\"underlyingsecurities_nbType\":{\"values\":[{\"name\":\"Quantity\",\"dbName\":null},{\"name\":\"Value\",\"dbName\":null}],\"dbName\":null},\"underlyingsecurities_BalanceType\":{\"values\":[{\"name\":\"Quantity\",\"dbName\":null},{\"name\":\"Value\",\"dbName\":null}],\"dbName\":null},\"transactions_ownershipType\":{\"values\":[{\"name\":\"Direct\",\"dbName\":null},{\"name\":\"Indirect\",\"dbName\":null},{\"name\":\"ControlOrDirection\",\"dbName\":null}],\"dbName\":null},\"transactions_nbType\":{\"values\":[{\"name\":\"Quantity\",\"dbName\":null},{\"name\":\"Value\",\"dbName\":null}],\"dbName\":null},\"transactions_closingBalanceType\":{\"values\":[{\"name\":\"Quantity\",\"dbName\":null},{\"name\":\"Value\",\"dbName\":null}],\"dbName\":null},\"transactions_calculatedBalanceType\":{\"values\":[{\"name\":\"Quantity\",\"dbName\":null},{\"name\":\"Value\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "../../packages/shared/src/prisma-types/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "../../packages/shared/src/prisma-types/schema.prisma")
