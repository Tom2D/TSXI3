/**
 * Client
 **/

import * as runtime from "@prisma/client/runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model currency
 *
 */
export type currency = $Result.DefaultSelection<Prisma.$currencyPayload>;
/**
 * Model exchanges
 *
 */
export type exchanges = $Result.DefaultSelection<Prisma.$exchangesPayload>;
/**
 * Model insiders
 *
 */
export type insiders = $Result.DefaultSelection<Prisma.$insidersPayload>;
/**
 * Model issuerexchanges
 *
 */
export type issuerexchanges =
  $Result.DefaultSelection<Prisma.$issuerexchangesPayload>;
/**
 * Model issuers
 *
 */
export type issuers = $Result.DefaultSelection<Prisma.$issuersPayload>;
/**
 * Model relationstoissuer
 *
 */
export type relationstoissuer =
  $Result.DefaultSelection<Prisma.$relationstoissuerPayload>;
/**
 * Model securitydesignations
 *
 */
export type securitydesignations =
  $Result.DefaultSelection<Prisma.$securitydesignationsPayload>;
/**
 * Model sizes
 *
 */
export type sizes = $Result.DefaultSelection<Prisma.$sizesPayload>;
/**
 * Model tickers
 *
 */
export type tickers = $Result.DefaultSelection<Prisma.$tickersPayload>;
/**
 * Model transactions
 *
 */
export type transactions =
  $Result.DefaultSelection<Prisma.$transactionsPayload>;
/**
 * Model trnflag
 *
 */
export type trnflag = $Result.DefaultSelection<Prisma.$trnflagPayload>;
/**
 * Model trnnatures
 *
 */
export type trnnatures = $Result.DefaultSelection<Prisma.$trnnaturesPayload>;
/**
 * Model underlyingsecurities
 *
 */
export type underlyingsecurities =
  $Result.DefaultSelection<Prisma.$underlyingsecuritiesPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const relationstoissuer_type: {
    Issuer: "Issuer";
    Subsidiary: "Subsidiary";
    TenPercentHolder: "TenPercentHolder";
    Director: "Director";
    SeniorOfficer: "SeniorOfficer";
    DirOrOfficerOfTenPercentHolder: "DirOrOfficerOfTenPercentHolder";
    DirOrOfficerOfInsiderOrSubsidiary: "DirOrOfficerOfInsiderOrSubsidiary";
    DeemedInsider: "DeemedInsider";
  };

  export type relationstoissuer_type =
    (typeof relationstoissuer_type)[keyof typeof relationstoissuer_type];

  export const transactions_ownershipType: {
    Direct: "Direct";
    Indirect: "Indirect";
    ControlOrDirection: "ControlOrDirection";
  };

  export type transactions_ownershipType =
    (typeof transactions_ownershipType)[keyof typeof transactions_ownershipType];

  export const transactions_nbType: {
    Quantity: "Quantity";
    Value: "Value";
  };

  export type transactions_nbType =
    (typeof transactions_nbType)[keyof typeof transactions_nbType];

  export const transactions_closingBalanceType: {
    Quantity: "Quantity";
    Value: "Value";
  };

  export type transactions_closingBalanceType =
    (typeof transactions_closingBalanceType)[keyof typeof transactions_closingBalanceType];

  export const transactions_calculatedBalanceType: {
    Quantity: "Quantity";
    Value: "Value";
  };

  export type transactions_calculatedBalanceType =
    (typeof transactions_calculatedBalanceType)[keyof typeof transactions_calculatedBalanceType];

  export const underlyingsecurities_nbType: {
    Quantity: "Quantity";
    Value: "Value";
  };

  export type underlyingsecurities_nbType =
    (typeof underlyingsecurities_nbType)[keyof typeof underlyingsecurities_nbType];

  export const underlyingsecurities_BalanceType: {
    Quantity: "Quantity";
    Value: "Value";
  };

  export type underlyingsecurities_BalanceType =
    (typeof underlyingsecurities_BalanceType)[keyof typeof underlyingsecurities_BalanceType];
}

export type relationstoissuer_type = $Enums.relationstoissuer_type;

export const relationstoissuer_type: typeof $Enums.relationstoissuer_type;

export type transactions_ownershipType = $Enums.transactions_ownershipType;

export const transactions_ownershipType: typeof $Enums.transactions_ownershipType;

export type transactions_nbType = $Enums.transactions_nbType;

export const transactions_nbType: typeof $Enums.transactions_nbType;

export type transactions_closingBalanceType =
  $Enums.transactions_closingBalanceType;

export const transactions_closingBalanceType: typeof $Enums.transactions_closingBalanceType;

export type transactions_calculatedBalanceType =
  $Enums.transactions_calculatedBalanceType;

export const transactions_calculatedBalanceType: typeof $Enums.transactions_calculatedBalanceType;

export type underlyingsecurities_nbType = $Enums.underlyingsecurities_nbType;

export const underlyingsecurities_nbType: typeof $Enums.underlyingsecurities_nbType;

export type underlyingsecurities_BalanceType =
  $Enums.underlyingsecurities_BalanceType;

export const underlyingsecurities_BalanceType: typeof $Enums.underlyingsecurities_BalanceType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Currencies
 * const currencies = await prisma.currency.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Currencies
   * const currencies = await prisma.currency.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);

  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **currency** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Currencies
   * const currencies = await prisma.currency.findMany()
   * ```
   */
  get currency(): Prisma.currencyDelegate<ExtArgs>;

  /**
   * `prisma.exchanges`: Exposes CRUD operations for the **exchanges** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Exchanges
   * const exchanges = await prisma.exchanges.findMany()
   * ```
   */
  get exchanges(): Prisma.exchangesDelegate<ExtArgs>;

  /**
   * `prisma.insiders`: Exposes CRUD operations for the **insiders** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Insiders
   * const insiders = await prisma.insiders.findMany()
   * ```
   */
  get insiders(): Prisma.insidersDelegate<ExtArgs>;

  /**
   * `prisma.issuerexchanges`: Exposes CRUD operations for the **issuerexchanges** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Issuerexchanges
   * const issuerexchanges = await prisma.issuerexchanges.findMany()
   * ```
   */
  get issuerexchanges(): Prisma.issuerexchangesDelegate<ExtArgs>;

  /**
   * `prisma.issuers`: Exposes CRUD operations for the **issuers** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Issuers
   * const issuers = await prisma.issuers.findMany()
   * ```
   */
  get issuers(): Prisma.issuersDelegate<ExtArgs>;

  /**
   * `prisma.relationstoissuer`: Exposes CRUD operations for the **relationstoissuer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Relationstoissuers
   * const relationstoissuers = await prisma.relationstoissuer.findMany()
   * ```
   */
  get relationstoissuer(): Prisma.relationstoissuerDelegate<ExtArgs>;

  /**
   * `prisma.securitydesignations`: Exposes CRUD operations for the **securitydesignations** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Securitydesignations
   * const securitydesignations = await prisma.securitydesignations.findMany()
   * ```
   */
  get securitydesignations(): Prisma.securitydesignationsDelegate<ExtArgs>;

  /**
   * `prisma.sizes`: Exposes CRUD operations for the **sizes** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sizes
   * const sizes = await prisma.sizes.findMany()
   * ```
   */
  get sizes(): Prisma.sizesDelegate<ExtArgs>;

  /**
   * `prisma.tickers`: Exposes CRUD operations for the **tickers** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tickers
   * const tickers = await prisma.tickers.findMany()
   * ```
   */
  get tickers(): Prisma.tickersDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transactions.findMany()
   * ```
   */
  get transactions(): Prisma.transactionsDelegate<ExtArgs>;

  /**
   * `prisma.trnflag`: Exposes CRUD operations for the **trnflag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Trnflags
   * const trnflags = await prisma.trnflag.findMany()
   * ```
   */
  get trnflag(): Prisma.trnflagDelegate<ExtArgs>;

  /**
   * `prisma.trnnatures`: Exposes CRUD operations for the **trnnatures** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Trnnatures
   * const trnnatures = await prisma.trnnatures.findMany()
   * ```
   */
  get trnnatures(): Prisma.trnnaturesDelegate<ExtArgs>;

  /**
   * `prisma.underlyingsecurities`: Exposes CRUD operations for the **underlyingsecurities** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Underlyingsecurities
   * const underlyingsecurities = await prisma.underlyingsecurities.findMany()
   * ```
   */
  get underlyingsecurities(): Prisma.underlyingsecuritiesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;

      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;

      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;

      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
    ? "Please either choose `select` or `omit`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends bigint
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
     A [[Boolean]]
     */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
     0
     */
  export type False = 0;

  export type Not<B extends boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends boolean, B2 extends boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    currency: "currency";
    exchanges: "exchanges";
    insiders: "insiders";
    issuerexchanges: "issuerexchanges";
    issuers: "issuers";
    relationstoissuer: "relationstoissuer";
    securitydesignations: "securitydesignations";
    sizes: "sizes";
    tickers: "tickers";
    transactions: "transactions";
    trnflag: "trnflag";
    trnnatures: "trnnatures";
    underlyingsecurities: "underlyingsecurities";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this["params"]["extArgs"]>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    meta: {
      modelProps:
        | "currency"
        | "exchanges"
        | "insiders"
        | "issuerexchanges"
        | "issuers"
        | "relationstoissuer"
        | "securitydesignations"
        | "sizes"
        | "tickers"
        | "transactions"
        | "trnflag"
        | "trnnatures"
        | "underlyingsecurities";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      currency: {
        payload: Prisma.$currencyPayload<ExtArgs>;
        fields: Prisma.currencyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.currencyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.currencyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>;
          };
          findFirst: {
            args: Prisma.currencyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.currencyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>;
          };
          findMany: {
            args: Prisma.currencyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>[];
          };
          create: {
            args: Prisma.currencyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>;
          };
          createMany: {
            args: Prisma.currencyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.currencyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>;
          };
          update: {
            args: Prisma.currencyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>;
          };
          deleteMany: {
            args: Prisma.currencyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.currencyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.currencyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>;
          };
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCurrency>;
          };
          groupBy: {
            args: Prisma.currencyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CurrencyGroupByOutputType>[];
          };
          count: {
            args: Prisma.currencyCountArgs<ExtArgs>;
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number;
          };
        };
      };
      exchanges: {
        payload: Prisma.$exchangesPayload<ExtArgs>;
        fields: Prisma.exchangesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.exchangesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.exchangesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload>;
          };
          findFirst: {
            args: Prisma.exchangesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.exchangesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload>;
          };
          findMany: {
            args: Prisma.exchangesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload>[];
          };
          create: {
            args: Prisma.exchangesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload>;
          };
          createMany: {
            args: Prisma.exchangesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.exchangesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload>;
          };
          update: {
            args: Prisma.exchangesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload>;
          };
          deleteMany: {
            args: Prisma.exchangesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.exchangesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.exchangesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$exchangesPayload>;
          };
          aggregate: {
            args: Prisma.ExchangesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExchanges>;
          };
          groupBy: {
            args: Prisma.exchangesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExchangesGroupByOutputType>[];
          };
          count: {
            args: Prisma.exchangesCountArgs<ExtArgs>;
            result: $Utils.Optional<ExchangesCountAggregateOutputType> | number;
          };
        };
      };
      insiders: {
        payload: Prisma.$insidersPayload<ExtArgs>;
        fields: Prisma.insidersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.insidersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.insidersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload>;
          };
          findFirst: {
            args: Prisma.insidersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.insidersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload>;
          };
          findMany: {
            args: Prisma.insidersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload>[];
          };
          create: {
            args: Prisma.insidersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload>;
          };
          createMany: {
            args: Prisma.insidersCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.insidersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload>;
          };
          update: {
            args: Prisma.insidersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload>;
          };
          deleteMany: {
            args: Prisma.insidersDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.insidersUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.insidersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insidersPayload>;
          };
          aggregate: {
            args: Prisma.InsidersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInsiders>;
          };
          groupBy: {
            args: Prisma.insidersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InsidersGroupByOutputType>[];
          };
          count: {
            args: Prisma.insidersCountArgs<ExtArgs>;
            result: $Utils.Optional<InsidersCountAggregateOutputType> | number;
          };
        };
      };
      issuerexchanges: {
        payload: Prisma.$issuerexchangesPayload<ExtArgs>;
        fields: Prisma.issuerexchangesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.issuerexchangesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.issuerexchangesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload>;
          };
          findFirst: {
            args: Prisma.issuerexchangesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.issuerexchangesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload>;
          };
          findMany: {
            args: Prisma.issuerexchangesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload>[];
          };
          create: {
            args: Prisma.issuerexchangesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload>;
          };
          createMany: {
            args: Prisma.issuerexchangesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.issuerexchangesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload>;
          };
          update: {
            args: Prisma.issuerexchangesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload>;
          };
          deleteMany: {
            args: Prisma.issuerexchangesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.issuerexchangesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.issuerexchangesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuerexchangesPayload>;
          };
          aggregate: {
            args: Prisma.IssuerexchangesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIssuerexchanges>;
          };
          groupBy: {
            args: Prisma.issuerexchangesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<IssuerexchangesGroupByOutputType>[];
          };
          count: {
            args: Prisma.issuerexchangesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<IssuerexchangesCountAggregateOutputType>
              | number;
          };
        };
      };
      issuers: {
        payload: Prisma.$issuersPayload<ExtArgs>;
        fields: Prisma.issuersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.issuersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.issuersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload>;
          };
          findFirst: {
            args: Prisma.issuersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.issuersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload>;
          };
          findMany: {
            args: Prisma.issuersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload>[];
          };
          create: {
            args: Prisma.issuersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload>;
          };
          createMany: {
            args: Prisma.issuersCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.issuersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload>;
          };
          update: {
            args: Prisma.issuersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload>;
          };
          deleteMany: {
            args: Prisma.issuersDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.issuersUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.issuersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$issuersPayload>;
          };
          aggregate: {
            args: Prisma.IssuersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIssuers>;
          };
          groupBy: {
            args: Prisma.issuersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<IssuersGroupByOutputType>[];
          };
          count: {
            args: Prisma.issuersCountArgs<ExtArgs>;
            result: $Utils.Optional<IssuersCountAggregateOutputType> | number;
          };
        };
      };
      relationstoissuer: {
        payload: Prisma.$relationstoissuerPayload<ExtArgs>;
        fields: Prisma.relationstoissuerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.relationstoissuerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.relationstoissuerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload>;
          };
          findFirst: {
            args: Prisma.relationstoissuerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.relationstoissuerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload>;
          };
          findMany: {
            args: Prisma.relationstoissuerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload>[];
          };
          create: {
            args: Prisma.relationstoissuerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload>;
          };
          createMany: {
            args: Prisma.relationstoissuerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.relationstoissuerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload>;
          };
          update: {
            args: Prisma.relationstoissuerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload>;
          };
          deleteMany: {
            args: Prisma.relationstoissuerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.relationstoissuerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.relationstoissuerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$relationstoissuerPayload>;
          };
          aggregate: {
            args: Prisma.RelationstoissuerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRelationstoissuer>;
          };
          groupBy: {
            args: Prisma.relationstoissuerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RelationstoissuerGroupByOutputType>[];
          };
          count: {
            args: Prisma.relationstoissuerCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RelationstoissuerCountAggregateOutputType>
              | number;
          };
        };
      };
      securitydesignations: {
        payload: Prisma.$securitydesignationsPayload<ExtArgs>;
        fields: Prisma.securitydesignationsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.securitydesignationsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.securitydesignationsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload>;
          };
          findFirst: {
            args: Prisma.securitydesignationsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.securitydesignationsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload>;
          };
          findMany: {
            args: Prisma.securitydesignationsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload>[];
          };
          create: {
            args: Prisma.securitydesignationsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload>;
          };
          createMany: {
            args: Prisma.securitydesignationsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.securitydesignationsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload>;
          };
          update: {
            args: Prisma.securitydesignationsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload>;
          };
          deleteMany: {
            args: Prisma.securitydesignationsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.securitydesignationsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.securitydesignationsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$securitydesignationsPayload>;
          };
          aggregate: {
            args: Prisma.SecuritydesignationsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSecuritydesignations>;
          };
          groupBy: {
            args: Prisma.securitydesignationsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SecuritydesignationsGroupByOutputType>[];
          };
          count: {
            args: Prisma.securitydesignationsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SecuritydesignationsCountAggregateOutputType>
              | number;
          };
        };
      };
      sizes: {
        payload: Prisma.$sizesPayload<ExtArgs>;
        fields: Prisma.sizesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.sizesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.sizesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>;
          };
          findFirst: {
            args: Prisma.sizesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.sizesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>;
          };
          findMany: {
            args: Prisma.sizesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>[];
          };
          create: {
            args: Prisma.sizesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>;
          };
          createMany: {
            args: Prisma.sizesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.sizesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>;
          };
          update: {
            args: Prisma.sizesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>;
          };
          deleteMany: {
            args: Prisma.sizesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.sizesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.sizesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>;
          };
          aggregate: {
            args: Prisma.SizesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSizes>;
          };
          groupBy: {
            args: Prisma.sizesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SizesGroupByOutputType>[];
          };
          count: {
            args: Prisma.sizesCountArgs<ExtArgs>;
            result: $Utils.Optional<SizesCountAggregateOutputType> | number;
          };
        };
      };
      tickers: {
        payload: Prisma.$tickersPayload<ExtArgs>;
        fields: Prisma.tickersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.tickersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.tickersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload>;
          };
          findFirst: {
            args: Prisma.tickersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.tickersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload>;
          };
          findMany: {
            args: Prisma.tickersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload>[];
          };
          create: {
            args: Prisma.tickersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload>;
          };
          createMany: {
            args: Prisma.tickersCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.tickersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload>;
          };
          update: {
            args: Prisma.tickersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload>;
          };
          deleteMany: {
            args: Prisma.tickersDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.tickersUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.tickersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tickersPayload>;
          };
          aggregate: {
            args: Prisma.TickersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTickers>;
          };
          groupBy: {
            args: Prisma.tickersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TickersGroupByOutputType>[];
          };
          count: {
            args: Prisma.tickersCountArgs<ExtArgs>;
            result: $Utils.Optional<TickersCountAggregateOutputType> | number;
          };
        };
      };
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>;
        fields: Prisma.transactionsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[];
          };
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransactions>;
          };
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionsGroupByOutputType>[];
          };
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionsCountAggregateOutputType>
              | number;
          };
        };
      };
      trnflag: {
        payload: Prisma.$trnflagPayload<ExtArgs>;
        fields: Prisma.trnflagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.trnflagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.trnflagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload>;
          };
          findFirst: {
            args: Prisma.trnflagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.trnflagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload>;
          };
          findMany: {
            args: Prisma.trnflagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload>[];
          };
          create: {
            args: Prisma.trnflagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload>;
          };
          createMany: {
            args: Prisma.trnflagCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.trnflagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload>;
          };
          update: {
            args: Prisma.trnflagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload>;
          };
          deleteMany: {
            args: Prisma.trnflagDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.trnflagUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.trnflagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnflagPayload>;
          };
          aggregate: {
            args: Prisma.TrnflagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTrnflag>;
          };
          groupBy: {
            args: Prisma.trnflagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TrnflagGroupByOutputType>[];
          };
          count: {
            args: Prisma.trnflagCountArgs<ExtArgs>;
            result: $Utils.Optional<TrnflagCountAggregateOutputType> | number;
          };
        };
      };
      trnnatures: {
        payload: Prisma.$trnnaturesPayload<ExtArgs>;
        fields: Prisma.trnnaturesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.trnnaturesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.trnnaturesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload>;
          };
          findFirst: {
            args: Prisma.trnnaturesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.trnnaturesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload>;
          };
          findMany: {
            args: Prisma.trnnaturesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload>[];
          };
          create: {
            args: Prisma.trnnaturesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload>;
          };
          createMany: {
            args: Prisma.trnnaturesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.trnnaturesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload>;
          };
          update: {
            args: Prisma.trnnaturesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload>;
          };
          deleteMany: {
            args: Prisma.trnnaturesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.trnnaturesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.trnnaturesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trnnaturesPayload>;
          };
          aggregate: {
            args: Prisma.TrnnaturesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTrnnatures>;
          };
          groupBy: {
            args: Prisma.trnnaturesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TrnnaturesGroupByOutputType>[];
          };
          count: {
            args: Prisma.trnnaturesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TrnnaturesCountAggregateOutputType>
              | number;
          };
        };
      };
      underlyingsecurities: {
        payload: Prisma.$underlyingsecuritiesPayload<ExtArgs>;
        fields: Prisma.underlyingsecuritiesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.underlyingsecuritiesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.underlyingsecuritiesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload>;
          };
          findFirst: {
            args: Prisma.underlyingsecuritiesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.underlyingsecuritiesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload>;
          };
          findMany: {
            args: Prisma.underlyingsecuritiesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload>[];
          };
          create: {
            args: Prisma.underlyingsecuritiesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload>;
          };
          createMany: {
            args: Prisma.underlyingsecuritiesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.underlyingsecuritiesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload>;
          };
          update: {
            args: Prisma.underlyingsecuritiesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload>;
          };
          deleteMany: {
            args: Prisma.underlyingsecuritiesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.underlyingsecuritiesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.underlyingsecuritiesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$underlyingsecuritiesPayload>;
          };
          aggregate: {
            args: Prisma.UnderlyingsecuritiesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUnderlyingsecurities>;
          };
          groupBy: {
            args: Prisma.underlyingsecuritiesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UnderlyingsecuritiesGroupByOutputType>[];
          };
          count: {
            args: Prisma.underlyingsecuritiesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UnderlyingsecuritiesCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    transactions: number;
    underlyingsecurities: number;
  };

  export type CurrencyCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?: boolean | CurrencyCountOutputTypeCountTransactionsArgs;
    underlyingsecurities?:
      | boolean
      | CurrencyCountOutputTypeCountUnderlyingsecuritiesArgs;
  };

  // Custom InputTypes
  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountUnderlyingsecuritiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: underlyingsecuritiesWhereInput;
  };

  /**
   * Count Type ExchangesCountOutputType
   */

  export type ExchangesCountOutputType = {
    issuerexchanges: number;
  };

  export type ExchangesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuerexchanges?:
      | boolean
      | ExchangesCountOutputTypeCountIssuerexchangesArgs;
  };

  // Custom InputTypes
  /**
   * ExchangesCountOutputType without action
   */
  export type ExchangesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ExchangesCountOutputType
     */
    select?: ExchangesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ExchangesCountOutputType without action
   */
  export type ExchangesCountOutputTypeCountIssuerexchangesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: issuerexchangesWhereInput;
  };

  /**
   * Count Type InsidersCountOutputType
   */

  export type InsidersCountOutputType = {
    relationstoissuer: number;
    transactions: number;
  };

  export type InsidersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    relationstoissuer?:
      | boolean
      | InsidersCountOutputTypeCountRelationstoissuerArgs;
    transactions?: boolean | InsidersCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * InsidersCountOutputType without action
   */
  export type InsidersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the InsidersCountOutputType
     */
    select?: InsidersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * InsidersCountOutputType without action
   */
  export type InsidersCountOutputTypeCountRelationstoissuerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: relationstoissuerWhereInput;
  };

  /**
   * InsidersCountOutputType without action
   */
  export type InsidersCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * Count Type IssuersCountOutputType
   */

  export type IssuersCountOutputType = {
    insiders: number;
    issuerexchanges: number;
    transactions: number;
  };

  export type IssuersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    insiders?: boolean | IssuersCountOutputTypeCountInsidersArgs;
    issuerexchanges?: boolean | IssuersCountOutputTypeCountIssuerexchangesArgs;
    transactions?: boolean | IssuersCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * IssuersCountOutputType without action
   */
  export type IssuersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the IssuersCountOutputType
     */
    select?: IssuersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * IssuersCountOutputType without action
   */
  export type IssuersCountOutputTypeCountInsidersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: insidersWhereInput;
  };

  /**
   * IssuersCountOutputType without action
   */
  export type IssuersCountOutputTypeCountIssuerexchangesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: issuerexchangesWhereInput;
  };

  /**
   * IssuersCountOutputType without action
   */
  export type IssuersCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * Count Type SecuritydesignationsCountOutputType
   */

  export type SecuritydesignationsCountOutputType = {
    transactions: number;
    underlyingsecurities: number;
  };

  export type SecuritydesignationsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?:
      | boolean
      | SecuritydesignationsCountOutputTypeCountTransactionsArgs;
    underlyingsecurities?:
      | boolean
      | SecuritydesignationsCountOutputTypeCountUnderlyingsecuritiesArgs;
  };

  // Custom InputTypes
  /**
   * SecuritydesignationsCountOutputType without action
   */
  export type SecuritydesignationsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the SecuritydesignationsCountOutputType
     */
    select?: SecuritydesignationsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SecuritydesignationsCountOutputType without action
   */
  export type SecuritydesignationsCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * SecuritydesignationsCountOutputType without action
   */
  export type SecuritydesignationsCountOutputTypeCountUnderlyingsecuritiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: underlyingsecuritiesWhereInput;
  };

  /**
   * Count Type SizesCountOutputType
   */

  export type SizesCountOutputType = {
    issuers: number;
  };

  export type SizesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuers?: boolean | SizesCountOutputTypeCountIssuersArgs;
  };

  // Custom InputTypes
  /**
   * SizesCountOutputType without action
   */
  export type SizesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the SizesCountOutputType
     */
    select?: SizesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SizesCountOutputType without action
   */
  export type SizesCountOutputTypeCountIssuersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: issuersWhereInput;
  };

  /**
   * Count Type TickersCountOutputType
   */

  export type TickersCountOutputType = {
    issuers: number;
  };

  export type TickersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuers?: boolean | TickersCountOutputTypeCountIssuersArgs;
  };

  // Custom InputTypes
  /**
   * TickersCountOutputType without action
   */
  export type TickersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TickersCountOutputType
     */
    select?: TickersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TickersCountOutputType without action
   */
  export type TickersCountOutputTypeCountIssuersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: issuersWhereInput;
  };

  /**
   * Count Type TrnflagCountOutputType
   */

  export type TrnflagCountOutputType = {
    transactions: number;
  };

  export type TrnflagCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?: boolean | TrnflagCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * TrnflagCountOutputType without action
   */
  export type TrnflagCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrnflagCountOutputType
     */
    select?: TrnflagCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TrnflagCountOutputType without action
   */
  export type TrnflagCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * Count Type TrnnaturesCountOutputType
   */

  export type TrnnaturesCountOutputType = {
    transactions: number;
  };

  export type TrnnaturesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?: boolean | TrnnaturesCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * TrnnaturesCountOutputType without action
   */
  export type TrnnaturesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrnnaturesCountOutputType
     */
    select?: TrnnaturesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TrnnaturesCountOutputType without action
   */
  export type TrnnaturesCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * Count Type UnderlyingsecuritiesCountOutputType
   */

  export type UnderlyingsecuritiesCountOutputType = {
    transactions: number;
  };

  export type UnderlyingsecuritiesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?:
      | boolean
      | UnderlyingsecuritiesCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * UnderlyingsecuritiesCountOutputType without action
   */
  export type UnderlyingsecuritiesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the UnderlyingsecuritiesCountOutputType
     */
    select?: UnderlyingsecuritiesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UnderlyingsecuritiesCountOutputType without action
   */
  export type UnderlyingsecuritiesCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null;
    _avg: CurrencyAvgAggregateOutputType | null;
    _sum: CurrencySumAggregateOutputType | null;
    _min: CurrencyMinAggregateOutputType | null;
    _max: CurrencyMaxAggregateOutputType | null;
  };

  export type CurrencyAvgAggregateOutputType = {
    id: number | null;
  };

  export type CurrencySumAggregateOutputType = {
    id: number | null;
  };

  export type CurrencyMinAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type CurrencyMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type CurrencyCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type CurrencyAvgAggregateInputType = {
    id?: true;
  };

  export type CurrencySumAggregateInputType = {
    id?: true;
  };

  export type CurrencyMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type CurrencyMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type CurrencyCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type CurrencyAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which currency to aggregate.
     */
    where?: currencyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of currencies to fetch.
     */
    orderBy?:
      | currencyOrderByWithRelationInput
      | currencyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: currencyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` currencies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned currencies
     **/
    _count?: true | CurrencyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CurrencyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CurrencySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CurrencyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CurrencyMaxAggregateInputType;
  };

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
    [P in keyof T & keyof AggregateCurrency]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>;
  };

  export type currencyGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: currencyWhereInput;
    orderBy?:
      | currencyOrderByWithAggregationInput
      | currencyOrderByWithAggregationInput[];
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum;
    having?: currencyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CurrencyCountAggregateInputType | true;
    _avg?: CurrencyAvgAggregateInputType;
    _sum?: CurrencySumAggregateInputType;
    _min?: CurrencyMinAggregateInputType;
    _max?: CurrencyMaxAggregateInputType;
  };

  export type CurrencyGroupByOutputType = {
    id: number;
    name: string | null;
    _count: CurrencyCountAggregateOutputType | null;
    _avg: CurrencyAvgAggregateOutputType | null;
    _sum: CurrencySumAggregateOutputType | null;
    _min: CurrencyMinAggregateOutputType | null;
    _max: CurrencyMaxAggregateOutputType | null;
  };

  type GetCurrencyGroupByPayload<T extends currencyGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CurrencyGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CurrencyGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>;
        }
      >
    >;

  export type currencySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      transactions?: boolean | currency$transactionsArgs<ExtArgs>;
      underlyingsecurities?:
        | boolean
        | currency$underlyingsecuritiesArgs<ExtArgs>;
      _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["currency"]
  >;

  export type currencySelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type currencyInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?: boolean | currency$transactionsArgs<ExtArgs>;
    underlyingsecurities?: boolean | currency$underlyingsecuritiesArgs<ExtArgs>;
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $currencyPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "currency";
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
      underlyingsecurities: Prisma.$underlyingsecuritiesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string | null;
      },
      ExtArgs["result"]["currency"]
    >;
    composites: {};
  };

  type currencyGetPayload<
    S extends boolean | null | undefined | currencyDefaultArgs
  > = $Result.GetResult<Prisma.$currencyPayload, S>;

  type currencyCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<currencyFindManyArgs, "select" | "include" | "distinct"> & {
    select?: CurrencyCountAggregateInputType | true;
  };

  export interface currencyDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["currency"];
      meta: { name: "currency" };
    };

    /**
     * Find zero or one Currency that matches the filter.
     * @param {currencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends currencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, currencyFindUniqueArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<
        Prisma.$currencyPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Currency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {currencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends currencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<
        Prisma.$currencyPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends currencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyFindFirstArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<
        Prisma.$currencyPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends currencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<
        Prisma.$currencyPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     *
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends currencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Currency.
     * @param {currencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     *
     **/
    create<T extends currencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, currencyCreateArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Currencies.
     * @param {currencyCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends currencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Currency.
     * @param {currencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     *
     **/
    delete<T extends currencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, currencyDeleteArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Currency.
     * @param {currencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends currencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, currencyUpdateArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Currencies.
     * @param {currencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends currencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends currencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, currencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Currency.
     * @param {currencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
     **/
    upsert<T extends currencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, currencyUpsertArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
     **/
    count<T extends currencyCountArgs>(
      args?: Subset<T, currencyCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CurrencyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CurrencyAggregateArgs>(
      args: Subset<T, CurrencyAggregateArgs>
    ): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>;

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends currencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: currencyGroupByArgs["orderBy"] }
        : { orderBy?: currencyGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, currencyGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCurrencyGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the currency model
     */
    readonly fields: currencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__currencyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    transactions<T extends currency$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, currency$transactionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">
      | Null
    >;

    underlyingsecurities<
      T extends currency$underlyingsecuritiesArgs<ExtArgs> = {}
    >(
      args?: Subset<T, currency$underlyingsecuritiesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$underlyingsecuritiesPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the currency model
   */
  interface currencyFieldRefs {
    readonly id: FieldRef<"currency", "Int">;
    readonly name: FieldRef<"currency", "String">;
  }

  // Custom InputTypes
  /**
   * currency findUnique
   */
  export type currencyFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * Filter, which currency to fetch.
     */
    where: currencyWhereUniqueInput;
  };

  /**
   * currency findUniqueOrThrow
   */
  export type currencyFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * Filter, which currency to fetch.
     */
    where: currencyWhereUniqueInput;
  };

  /**
   * currency findFirst
   */
  export type currencyFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * Filter, which currency to fetch.
     */
    where?: currencyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of currencies to fetch.
     */
    orderBy?:
      | currencyOrderByWithRelationInput
      | currencyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for currencies.
     */
    cursor?: currencyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` currencies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[];
  };

  /**
   * currency findFirstOrThrow
   */
  export type currencyFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * Filter, which currency to fetch.
     */
    where?: currencyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of currencies to fetch.
     */
    orderBy?:
      | currencyOrderByWithRelationInput
      | currencyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for currencies.
     */
    cursor?: currencyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` currencies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[];
  };

  /**
   * currency findMany
   */
  export type currencyFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * Filter, which currencies to fetch.
     */
    where?: currencyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of currencies to fetch.
     */
    orderBy?:
      | currencyOrderByWithRelationInput
      | currencyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing currencies.
     */
    cursor?: currencyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` currencies.
     */
    skip?: number;
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[];
  };

  /**
   * currency create
   */
  export type currencyCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * The data needed to create a currency.
     */
    data?: XOR<currencyCreateInput, currencyUncheckedCreateInput>;
  };

  /**
   * currency createMany
   */
  export type currencyCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many currencies.
     */
    data: currencyCreateManyInput | currencyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * currency update
   */
  export type currencyUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * The data needed to update a currency.
     */
    data: XOR<currencyUpdateInput, currencyUncheckedUpdateInput>;
    /**
     * Choose, which currency to update.
     */
    where: currencyWhereUniqueInput;
  };

  /**
   * currency updateMany
   */
  export type currencyUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update currencies.
     */
    data: XOR<
      currencyUpdateManyMutationInput,
      currencyUncheckedUpdateManyInput
    >;
    /**
     * Filter which currencies to update
     */
    where?: currencyWhereInput;
  };

  /**
   * currency upsert
   */
  export type currencyUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * The filter to search for the currency to update in case it exists.
     */
    where: currencyWhereUniqueInput;
    /**
     * In case the currency found by the `where` argument doesn't exist, create a new currency with this data.
     */
    create: XOR<currencyCreateInput, currencyUncheckedCreateInput>;
    /**
     * In case the currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<currencyUpdateInput, currencyUncheckedUpdateInput>;
  };

  /**
   * currency delete
   */
  export type currencyDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    /**
     * Filter which currency to delete.
     */
    where: currencyWhereUniqueInput;
  };

  /**
   * currency deleteMany
   */
  export type currencyDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which currencies to delete
     */
    where?: currencyWhereInput;
  };

  /**
   * currency.transactions
   */
  export type currency$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * currency.underlyingsecurities
   */
  export type currency$underlyingsecuritiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    where?: underlyingsecuritiesWhereInput;
    orderBy?:
      | underlyingsecuritiesOrderByWithRelationInput
      | underlyingsecuritiesOrderByWithRelationInput[];
    cursor?: underlyingsecuritiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UnderlyingsecuritiesScalarFieldEnum
      | UnderlyingsecuritiesScalarFieldEnum[];
  };

  /**
   * currency without action
   */
  export type currencyDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
  };

  /**
   * Model exchanges
   */

  export type AggregateExchanges = {
    _count: ExchangesCountAggregateOutputType | null;
    _avg: ExchangesAvgAggregateOutputType | null;
    _sum: ExchangesSumAggregateOutputType | null;
    _min: ExchangesMinAggregateOutputType | null;
    _max: ExchangesMaxAggregateOutputType | null;
  };

  export type ExchangesAvgAggregateOutputType = {
    id: number | null;
  };

  export type ExchangesSumAggregateOutputType = {
    id: number | null;
  };

  export type ExchangesMinAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type ExchangesMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type ExchangesCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type ExchangesAvgAggregateInputType = {
    id?: true;
  };

  export type ExchangesSumAggregateInputType = {
    id?: true;
  };

  export type ExchangesMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type ExchangesMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type ExchangesCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type ExchangesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which exchanges to aggregate.
     */
    where?: exchangesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of exchanges to fetch.
     */
    orderBy?:
      | exchangesOrderByWithRelationInput
      | exchangesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: exchangesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` exchanges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` exchanges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned exchanges
     **/
    _count?: true | ExchangesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ExchangesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ExchangesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExchangesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExchangesMaxAggregateInputType;
  };

  export type GetExchangesAggregateType<T extends ExchangesAggregateArgs> = {
    [P in keyof T & keyof AggregateExchanges]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchanges[P]>
      : GetScalarType<T[P], AggregateExchanges[P]>;
  };

  export type exchangesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: exchangesWhereInput;
    orderBy?:
      | exchangesOrderByWithAggregationInput
      | exchangesOrderByWithAggregationInput[];
    by: ExchangesScalarFieldEnum[] | ExchangesScalarFieldEnum;
    having?: exchangesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExchangesCountAggregateInputType | true;
    _avg?: ExchangesAvgAggregateInputType;
    _sum?: ExchangesSumAggregateInputType;
    _min?: ExchangesMinAggregateInputType;
    _max?: ExchangesMaxAggregateInputType;
  };

  export type ExchangesGroupByOutputType = {
    id: number;
    name: string | null;
    _count: ExchangesCountAggregateOutputType | null;
    _avg: ExchangesAvgAggregateOutputType | null;
    _sum: ExchangesSumAggregateOutputType | null;
    _min: ExchangesMinAggregateOutputType | null;
    _max: ExchangesMaxAggregateOutputType | null;
  };

  type GetExchangesGroupByPayload<T extends exchangesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ExchangesGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ExchangesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangesGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangesGroupByOutputType[P]>;
        }
      >
    >;

  export type exchangesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      issuerexchanges?: boolean | exchanges$issuerexchangesArgs<ExtArgs>;
      _count?: boolean | ExchangesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["exchanges"]
  >;

  export type exchangesSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type exchangesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuerexchanges?: boolean | exchanges$issuerexchangesArgs<ExtArgs>;
    _count?: boolean | ExchangesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $exchangesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "exchanges";
    objects: {
      issuerexchanges: Prisma.$issuerexchangesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string | null;
      },
      ExtArgs["result"]["exchanges"]
    >;
    composites: {};
  };

  type exchangesGetPayload<
    S extends boolean | null | undefined | exchangesDefaultArgs
  > = $Result.GetResult<Prisma.$exchangesPayload, S>;

  type exchangesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<exchangesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: ExchangesCountAggregateInputType | true;
  };

  export interface exchangesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["exchanges"];
      meta: { name: "exchanges" };
    };

    /**
     * Find zero or one Exchanges that matches the filter.
     * @param {exchangesFindUniqueArgs} args - Arguments to find a Exchanges
     * @example
     * // Get one Exchanges
     * const exchanges = await prisma.exchanges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends exchangesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, exchangesFindUniqueArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      $Result.GetResult<
        Prisma.$exchangesPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Exchanges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exchangesFindUniqueOrThrowArgs} args - Arguments to find a Exchanges
     * @example
     * // Get one Exchanges
     * const exchanges = await prisma.exchanges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends exchangesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, exchangesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      $Result.GetResult<
        Prisma.$exchangesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Exchanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangesFindFirstArgs} args - Arguments to find a Exchanges
     * @example
     * // Get one Exchanges
     * const exchanges = await prisma.exchanges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends exchangesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, exchangesFindFirstArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      $Result.GetResult<
        Prisma.$exchangesPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Exchanges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangesFindFirstOrThrowArgs} args - Arguments to find a Exchanges
     * @example
     * // Get one Exchanges
     * const exchanges = await prisma.exchanges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends exchangesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, exchangesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      $Result.GetResult<
        Prisma.$exchangesPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Exchanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exchanges
     * const exchanges = await prisma.exchanges.findMany()
     *
     * // Get first 10 Exchanges
     * const exchanges = await prisma.exchanges.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const exchangesWithIdOnly = await prisma.exchanges.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends exchangesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, exchangesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$exchangesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Exchanges.
     * @param {exchangesCreateArgs} args - Arguments to create a Exchanges.
     * @example
     * // Create one Exchanges
     * const Exchanges = await prisma.exchanges.create({
     *   data: {
     *     // ... data to create a Exchanges
     *   }
     * })
     *
     **/
    create<T extends exchangesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, exchangesCreateArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      $Result.GetResult<Prisma.$exchangesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Exchanges.
     * @param {exchangesCreateManyArgs} args - Arguments to create many Exchanges.
     * @example
     * // Create many Exchanges
     * const exchanges = await prisma.exchanges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends exchangesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, exchangesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Exchanges.
     * @param {exchangesDeleteArgs} args - Arguments to delete one Exchanges.
     * @example
     * // Delete one Exchanges
     * const Exchanges = await prisma.exchanges.delete({
     *   where: {
     *     // ... filter to delete one Exchanges
     *   }
     * })
     *
     **/
    delete<T extends exchangesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, exchangesDeleteArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      $Result.GetResult<Prisma.$exchangesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Exchanges.
     * @param {exchangesUpdateArgs} args - Arguments to update one Exchanges.
     * @example
     * // Update one Exchanges
     * const exchanges = await prisma.exchanges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends exchangesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, exchangesUpdateArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      $Result.GetResult<Prisma.$exchangesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Exchanges.
     * @param {exchangesDeleteManyArgs} args - Arguments to filter Exchanges to delete.
     * @example
     * // Delete a few Exchanges
     * const { count } = await prisma.exchanges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends exchangesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, exchangesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exchanges
     * const exchanges = await prisma.exchanges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends exchangesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, exchangesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Exchanges.
     * @param {exchangesUpsertArgs} args - Arguments to update or create a Exchanges.
     * @example
     * // Update or create a Exchanges
     * const exchanges = await prisma.exchanges.upsert({
     *   create: {
     *     // ... data to create a Exchanges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exchanges we want to update
     *   }
     * })
     **/
    upsert<T extends exchangesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, exchangesUpsertArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      $Result.GetResult<Prisma.$exchangesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangesCountArgs} args - Arguments to filter Exchanges to count.
     * @example
     * // Count the number of Exchanges
     * const count = await prisma.exchanges.count({
     *   where: {
     *     // ... the filter for the Exchanges we want to count
     *   }
     * })
     **/
    count<T extends exchangesCountArgs>(
      args?: Subset<T, exchangesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ExchangesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ExchangesAggregateArgs>(
      args: Subset<T, ExchangesAggregateArgs>
    ): Prisma.PrismaPromise<GetExchangesAggregateType<T>>;

    /**
     * Group by Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends exchangesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exchangesGroupByArgs["orderBy"] }
        : { orderBy?: exchangesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, exchangesGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetExchangesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the exchanges model
     */
    readonly fields: exchangesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exchanges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exchangesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    issuerexchanges<T extends exchanges$issuerexchangesArgs<ExtArgs> = {}>(
      args?: Subset<T, exchanges$issuerexchangesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$issuerexchangesPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the exchanges model
   */
  interface exchangesFieldRefs {
    readonly id: FieldRef<"exchanges", "Int">;
    readonly name: FieldRef<"exchanges", "String">;
  }

  // Custom InputTypes
  /**
   * exchanges findUnique
   */
  export type exchangesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * Filter, which exchanges to fetch.
     */
    where: exchangesWhereUniqueInput;
  };

  /**
   * exchanges findUniqueOrThrow
   */
  export type exchangesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * Filter, which exchanges to fetch.
     */
    where: exchangesWhereUniqueInput;
  };

  /**
   * exchanges findFirst
   */
  export type exchangesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * Filter, which exchanges to fetch.
     */
    where?: exchangesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of exchanges to fetch.
     */
    orderBy?:
      | exchangesOrderByWithRelationInput
      | exchangesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for exchanges.
     */
    cursor?: exchangesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` exchanges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` exchanges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of exchanges.
     */
    distinct?: ExchangesScalarFieldEnum | ExchangesScalarFieldEnum[];
  };

  /**
   * exchanges findFirstOrThrow
   */
  export type exchangesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * Filter, which exchanges to fetch.
     */
    where?: exchangesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of exchanges to fetch.
     */
    orderBy?:
      | exchangesOrderByWithRelationInput
      | exchangesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for exchanges.
     */
    cursor?: exchangesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` exchanges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` exchanges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of exchanges.
     */
    distinct?: ExchangesScalarFieldEnum | ExchangesScalarFieldEnum[];
  };

  /**
   * exchanges findMany
   */
  export type exchangesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * Filter, which exchanges to fetch.
     */
    where?: exchangesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of exchanges to fetch.
     */
    orderBy?:
      | exchangesOrderByWithRelationInput
      | exchangesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing exchanges.
     */
    cursor?: exchangesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` exchanges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` exchanges.
     */
    skip?: number;
    distinct?: ExchangesScalarFieldEnum | ExchangesScalarFieldEnum[];
  };

  /**
   * exchanges create
   */
  export type exchangesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * The data needed to create a exchanges.
     */
    data?: XOR<exchangesCreateInput, exchangesUncheckedCreateInput>;
  };

  /**
   * exchanges createMany
   */
  export type exchangesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many exchanges.
     */
    data: exchangesCreateManyInput | exchangesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * exchanges update
   */
  export type exchangesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * The data needed to update a exchanges.
     */
    data: XOR<exchangesUpdateInput, exchangesUncheckedUpdateInput>;
    /**
     * Choose, which exchanges to update.
     */
    where: exchangesWhereUniqueInput;
  };

  /**
   * exchanges updateMany
   */
  export type exchangesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update exchanges.
     */
    data: XOR<
      exchangesUpdateManyMutationInput,
      exchangesUncheckedUpdateManyInput
    >;
    /**
     * Filter which exchanges to update
     */
    where?: exchangesWhereInput;
  };

  /**
   * exchanges upsert
   */
  export type exchangesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * The filter to search for the exchanges to update in case it exists.
     */
    where: exchangesWhereUniqueInput;
    /**
     * In case the exchanges found by the `where` argument doesn't exist, create a new exchanges with this data.
     */
    create: XOR<exchangesCreateInput, exchangesUncheckedCreateInput>;
    /**
     * In case the exchanges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exchangesUpdateInput, exchangesUncheckedUpdateInput>;
  };

  /**
   * exchanges delete
   */
  export type exchangesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
    /**
     * Filter which exchanges to delete.
     */
    where: exchangesWhereUniqueInput;
  };

  /**
   * exchanges deleteMany
   */
  export type exchangesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which exchanges to delete
     */
    where?: exchangesWhereInput;
  };

  /**
   * exchanges.issuerexchanges
   */
  export type exchanges$issuerexchangesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    where?: issuerexchangesWhereInput;
    orderBy?:
      | issuerexchangesOrderByWithRelationInput
      | issuerexchangesOrderByWithRelationInput[];
    cursor?: issuerexchangesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | IssuerexchangesScalarFieldEnum
      | IssuerexchangesScalarFieldEnum[];
  };

  /**
   * exchanges without action
   */
  export type exchangesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the exchanges
     */
    select?: exchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchangesInclude<ExtArgs> | null;
  };

  /**
   * Model insiders
   */

  export type AggregateInsiders = {
    _count: InsidersCountAggregateOutputType | null;
    _avg: InsidersAvgAggregateOutputType | null;
    _sum: InsidersSumAggregateOutputType | null;
    _min: InsidersMinAggregateOutputType | null;
    _max: InsidersMaxAggregateOutputType | null;
  };

  export type InsidersAvgAggregateOutputType = {
    id: number | null;
    issuerId: number | null;
  };

  export type InsidersSumAggregateOutputType = {
    id: number | null;
    issuerId: number | null;
  };

  export type InsidersMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    issuerId: number | null;
    ceasedToBeInsider: string | null;
  };

  export type InsidersMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    issuerId: number | null;
    ceasedToBeInsider: string | null;
  };

  export type InsidersCountAggregateOutputType = {
    id: number;
    name: number;
    issuerId: number;
    ceasedToBeInsider: number;
    _all: number;
  };

  export type InsidersAvgAggregateInputType = {
    id?: true;
    issuerId?: true;
  };

  export type InsidersSumAggregateInputType = {
    id?: true;
    issuerId?: true;
  };

  export type InsidersMinAggregateInputType = {
    id?: true;
    name?: true;
    issuerId?: true;
    ceasedToBeInsider?: true;
  };

  export type InsidersMaxAggregateInputType = {
    id?: true;
    name?: true;
    issuerId?: true;
    ceasedToBeInsider?: true;
  };

  export type InsidersCountAggregateInputType = {
    id?: true;
    name?: true;
    issuerId?: true;
    ceasedToBeInsider?: true;
    _all?: true;
  };

  export type InsidersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which insiders to aggregate.
     */
    where?: insidersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insiders to fetch.
     */
    orderBy?:
      | insidersOrderByWithRelationInput
      | insidersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: insidersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insiders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insiders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned insiders
     **/
    _count?: true | InsidersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InsidersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InsidersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InsidersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InsidersMaxAggregateInputType;
  };

  export type GetInsidersAggregateType<T extends InsidersAggregateArgs> = {
    [P in keyof T & keyof AggregateInsiders]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsiders[P]>
      : GetScalarType<T[P], AggregateInsiders[P]>;
  };

  export type insidersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: insidersWhereInput;
    orderBy?:
      | insidersOrderByWithAggregationInput
      | insidersOrderByWithAggregationInput[];
    by: InsidersScalarFieldEnum[] | InsidersScalarFieldEnum;
    having?: insidersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InsidersCountAggregateInputType | true;
    _avg?: InsidersAvgAggregateInputType;
    _sum?: InsidersSumAggregateInputType;
    _min?: InsidersMinAggregateInputType;
    _max?: InsidersMaxAggregateInputType;
  };

  export type InsidersGroupByOutputType = {
    id: number;
    name: string | null;
    issuerId: number | null;
    ceasedToBeInsider: string | null;
    _count: InsidersCountAggregateOutputType | null;
    _avg: InsidersAvgAggregateOutputType | null;
    _sum: InsidersSumAggregateOutputType | null;
    _min: InsidersMinAggregateOutputType | null;
    _max: InsidersMaxAggregateOutputType | null;
  };

  type GetInsidersGroupByPayload<T extends insidersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InsidersGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof InsidersGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsidersGroupByOutputType[P]>
            : GetScalarType<T[P], InsidersGroupByOutputType[P]>;
        }
      >
    >;

  export type insidersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      issuerId?: boolean;
      ceasedToBeInsider?: boolean;
      issuers?: boolean | insiders$issuersArgs<ExtArgs>;
      relationstoissuer?: boolean | insiders$relationstoissuerArgs<ExtArgs>;
      transactions?: boolean | insiders$transactionsArgs<ExtArgs>;
      _count?: boolean | InsidersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["insiders"]
  >;

  export type insidersSelectScalar = {
    id?: boolean;
    name?: boolean;
    issuerId?: boolean;
    ceasedToBeInsider?: boolean;
  };

  export type insidersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuers?: boolean | insiders$issuersArgs<ExtArgs>;
    relationstoissuer?: boolean | insiders$relationstoissuerArgs<ExtArgs>;
    transactions?: boolean | insiders$transactionsArgs<ExtArgs>;
    _count?: boolean | InsidersCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $insidersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "insiders";
    objects: {
      issuers: Prisma.$issuersPayload<ExtArgs> | null;
      relationstoissuer: Prisma.$relationstoissuerPayload<ExtArgs>[];
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string | null;
        issuerId: number | null;
        ceasedToBeInsider: string | null;
      },
      ExtArgs["result"]["insiders"]
    >;
    composites: {};
  };

  type insidersGetPayload<
    S extends boolean | null | undefined | insidersDefaultArgs
  > = $Result.GetResult<Prisma.$insidersPayload, S>;

  type insidersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<insidersFindManyArgs, "select" | "include" | "distinct"> & {
    select?: InsidersCountAggregateInputType | true;
  };

  export interface insidersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["insiders"];
      meta: { name: "insiders" };
    };

    /**
     * Find zero or one Insiders that matches the filter.
     * @param {insidersFindUniqueArgs} args - Arguments to find a Insiders
     * @example
     * // Get one Insiders
     * const insiders = await prisma.insiders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends insidersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, insidersFindUniqueArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<
        Prisma.$insidersPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Insiders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {insidersFindUniqueOrThrowArgs} args - Arguments to find a Insiders
     * @example
     * // Get one Insiders
     * const insiders = await prisma.insiders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends insidersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insidersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<
        Prisma.$insidersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Insiders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insidersFindFirstArgs} args - Arguments to find a Insiders
     * @example
     * // Get one Insiders
     * const insiders = await prisma.insiders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends insidersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, insidersFindFirstArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<
        Prisma.$insidersPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Insiders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insidersFindFirstOrThrowArgs} args - Arguments to find a Insiders
     * @example
     * // Get one Insiders
     * const insiders = await prisma.insiders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends insidersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insidersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<
        Prisma.$insidersPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Insiders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insidersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insiders
     * const insiders = await prisma.insiders.findMany()
     *
     * // Get first 10 Insiders
     * const insiders = await prisma.insiders.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const insidersWithIdOnly = await prisma.insiders.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends insidersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insidersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$insidersPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Insiders.
     * @param {insidersCreateArgs} args - Arguments to create a Insiders.
     * @example
     * // Create one Insiders
     * const Insiders = await prisma.insiders.create({
     *   data: {
     *     // ... data to create a Insiders
     *   }
     * })
     *
     **/
    create<T extends insidersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, insidersCreateArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<Prisma.$insidersPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Insiders.
     * @param {insidersCreateManyArgs} args - Arguments to create many Insiders.
     * @example
     * // Create many Insiders
     * const insiders = await prisma.insiders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends insidersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insidersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Insiders.
     * @param {insidersDeleteArgs} args - Arguments to delete one Insiders.
     * @example
     * // Delete one Insiders
     * const Insiders = await prisma.insiders.delete({
     *   where: {
     *     // ... filter to delete one Insiders
     *   }
     * })
     *
     **/
    delete<T extends insidersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, insidersDeleteArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<Prisma.$insidersPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Insiders.
     * @param {insidersUpdateArgs} args - Arguments to update one Insiders.
     * @example
     * // Update one Insiders
     * const insiders = await prisma.insiders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends insidersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, insidersUpdateArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<Prisma.$insidersPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Insiders.
     * @param {insidersDeleteManyArgs} args - Arguments to filter Insiders to delete.
     * @example
     * // Delete a few Insiders
     * const { count } = await prisma.insiders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends insidersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insidersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insidersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insiders
     * const insiders = await prisma.insiders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends insidersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, insidersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Insiders.
     * @param {insidersUpsertArgs} args - Arguments to update or create a Insiders.
     * @example
     * // Update or create a Insiders
     * const insiders = await prisma.insiders.upsert({
     *   create: {
     *     // ... data to create a Insiders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insiders we want to update
     *   }
     * })
     **/
    upsert<T extends insidersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, insidersUpsertArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<Prisma.$insidersPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Insiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insidersCountArgs} args - Arguments to filter Insiders to count.
     * @example
     * // Count the number of Insiders
     * const count = await prisma.insiders.count({
     *   where: {
     *     // ... the filter for the Insiders we want to count
     *   }
     * })
     **/
    count<T extends insidersCountArgs>(
      args?: Subset<T, insidersCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], InsidersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Insiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InsidersAggregateArgs>(
      args: Subset<T, InsidersAggregateArgs>
    ): Prisma.PrismaPromise<GetInsidersAggregateType<T>>;

    /**
     * Group by Insiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insidersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends insidersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insidersGroupByArgs["orderBy"] }
        : { orderBy?: insidersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, insidersGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetInsidersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the insiders model
     */
    readonly fields: insidersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insiders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insidersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    issuers<T extends insiders$issuersArgs<ExtArgs> = {}>(
      args?: Subset<T, insiders$issuersArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<
        Prisma.$issuersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    relationstoissuer<T extends insiders$relationstoissuerArgs<ExtArgs> = {}>(
      args?: Subset<T, insiders$relationstoissuerArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$relationstoissuerPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    transactions<T extends insiders$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, insiders$transactionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the insiders model
   */
  interface insidersFieldRefs {
    readonly id: FieldRef<"insiders", "Int">;
    readonly name: FieldRef<"insiders", "String">;
    readonly issuerId: FieldRef<"insiders", "Int">;
    readonly ceasedToBeInsider: FieldRef<"insiders", "String">;
  }

  // Custom InputTypes
  /**
   * insiders findUnique
   */
  export type insidersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * Filter, which insiders to fetch.
     */
    where: insidersWhereUniqueInput;
  };

  /**
   * insiders findUniqueOrThrow
   */
  export type insidersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * Filter, which insiders to fetch.
     */
    where: insidersWhereUniqueInput;
  };

  /**
   * insiders findFirst
   */
  export type insidersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * Filter, which insiders to fetch.
     */
    where?: insidersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insiders to fetch.
     */
    orderBy?:
      | insidersOrderByWithRelationInput
      | insidersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insiders.
     */
    cursor?: insidersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insiders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insiders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insiders.
     */
    distinct?: InsidersScalarFieldEnum | InsidersScalarFieldEnum[];
  };

  /**
   * insiders findFirstOrThrow
   */
  export type insidersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * Filter, which insiders to fetch.
     */
    where?: insidersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insiders to fetch.
     */
    orderBy?:
      | insidersOrderByWithRelationInput
      | insidersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insiders.
     */
    cursor?: insidersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insiders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insiders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insiders.
     */
    distinct?: InsidersScalarFieldEnum | InsidersScalarFieldEnum[];
  };

  /**
   * insiders findMany
   */
  export type insidersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * Filter, which insiders to fetch.
     */
    where?: insidersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insiders to fetch.
     */
    orderBy?:
      | insidersOrderByWithRelationInput
      | insidersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing insiders.
     */
    cursor?: insidersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insiders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insiders.
     */
    skip?: number;
    distinct?: InsidersScalarFieldEnum | InsidersScalarFieldEnum[];
  };

  /**
   * insiders create
   */
  export type insidersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * The data needed to create a insiders.
     */
    data?: XOR<insidersCreateInput, insidersUncheckedCreateInput>;
  };

  /**
   * insiders createMany
   */
  export type insidersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many insiders.
     */
    data: insidersCreateManyInput | insidersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * insiders update
   */
  export type insidersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * The data needed to update a insiders.
     */
    data: XOR<insidersUpdateInput, insidersUncheckedUpdateInput>;
    /**
     * Choose, which insiders to update.
     */
    where: insidersWhereUniqueInput;
  };

  /**
   * insiders updateMany
   */
  export type insidersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update insiders.
     */
    data: XOR<
      insidersUpdateManyMutationInput,
      insidersUncheckedUpdateManyInput
    >;
    /**
     * Filter which insiders to update
     */
    where?: insidersWhereInput;
  };

  /**
   * insiders upsert
   */
  export type insidersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * The filter to search for the insiders to update in case it exists.
     */
    where: insidersWhereUniqueInput;
    /**
     * In case the insiders found by the `where` argument doesn't exist, create a new insiders with this data.
     */
    create: XOR<insidersCreateInput, insidersUncheckedCreateInput>;
    /**
     * In case the insiders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insidersUpdateInput, insidersUncheckedUpdateInput>;
  };

  /**
   * insiders delete
   */
  export type insidersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    /**
     * Filter which insiders to delete.
     */
    where: insidersWhereUniqueInput;
  };

  /**
   * insiders deleteMany
   */
  export type insidersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which insiders to delete
     */
    where?: insidersWhereInput;
  };

  /**
   * insiders.issuers
   */
  export type insiders$issuersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    where?: issuersWhereInput;
  };

  /**
   * insiders.relationstoissuer
   */
  export type insiders$relationstoissuerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    where?: relationstoissuerWhereInput;
    orderBy?:
      | relationstoissuerOrderByWithRelationInput
      | relationstoissuerOrderByWithRelationInput[];
    cursor?: relationstoissuerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | RelationstoissuerScalarFieldEnum
      | RelationstoissuerScalarFieldEnum[];
  };

  /**
   * insiders.transactions
   */
  export type insiders$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * insiders without action
   */
  export type insidersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
  };

  /**
   * Model issuerexchanges
   */

  export type AggregateIssuerexchanges = {
    _count: IssuerexchangesCountAggregateOutputType | null;
    _avg: IssuerexchangesAvgAggregateOutputType | null;
    _sum: IssuerexchangesSumAggregateOutputType | null;
    _min: IssuerexchangesMinAggregateOutputType | null;
    _max: IssuerexchangesMaxAggregateOutputType | null;
  };

  export type IssuerexchangesAvgAggregateOutputType = {
    issuerId: number | null;
    exchangeId: number | null;
  };

  export type IssuerexchangesSumAggregateOutputType = {
    issuerId: number | null;
    exchangeId: number | null;
  };

  export type IssuerexchangesMinAggregateOutputType = {
    issuerId: number | null;
    exchangeId: number | null;
  };

  export type IssuerexchangesMaxAggregateOutputType = {
    issuerId: number | null;
    exchangeId: number | null;
  };

  export type IssuerexchangesCountAggregateOutputType = {
    issuerId: number;
    exchangeId: number;
    _all: number;
  };

  export type IssuerexchangesAvgAggregateInputType = {
    issuerId?: true;
    exchangeId?: true;
  };

  export type IssuerexchangesSumAggregateInputType = {
    issuerId?: true;
    exchangeId?: true;
  };

  export type IssuerexchangesMinAggregateInputType = {
    issuerId?: true;
    exchangeId?: true;
  };

  export type IssuerexchangesMaxAggregateInputType = {
    issuerId?: true;
    exchangeId?: true;
  };

  export type IssuerexchangesCountAggregateInputType = {
    issuerId?: true;
    exchangeId?: true;
    _all?: true;
  };

  export type IssuerexchangesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which issuerexchanges to aggregate.
     */
    where?: issuerexchangesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of issuerexchanges to fetch.
     */
    orderBy?:
      | issuerexchangesOrderByWithRelationInput
      | issuerexchangesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: issuerexchangesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` issuerexchanges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` issuerexchanges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned issuerexchanges
     **/
    _count?: true | IssuerexchangesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: IssuerexchangesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: IssuerexchangesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IssuerexchangesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IssuerexchangesMaxAggregateInputType;
  };

  export type GetIssuerexchangesAggregateType<
    T extends IssuerexchangesAggregateArgs
  > = {
    [P in keyof T & keyof AggregateIssuerexchanges]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssuerexchanges[P]>
      : GetScalarType<T[P], AggregateIssuerexchanges[P]>;
  };

  export type issuerexchangesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: issuerexchangesWhereInput;
    orderBy?:
      | issuerexchangesOrderByWithAggregationInput
      | issuerexchangesOrderByWithAggregationInput[];
    by: IssuerexchangesScalarFieldEnum[] | IssuerexchangesScalarFieldEnum;
    having?: issuerexchangesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IssuerexchangesCountAggregateInputType | true;
    _avg?: IssuerexchangesAvgAggregateInputType;
    _sum?: IssuerexchangesSumAggregateInputType;
    _min?: IssuerexchangesMinAggregateInputType;
    _max?: IssuerexchangesMaxAggregateInputType;
  };

  export type IssuerexchangesGroupByOutputType = {
    issuerId: number;
    exchangeId: number;
    _count: IssuerexchangesCountAggregateOutputType | null;
    _avg: IssuerexchangesAvgAggregateOutputType | null;
    _sum: IssuerexchangesSumAggregateOutputType | null;
    _min: IssuerexchangesMinAggregateOutputType | null;
    _max: IssuerexchangesMaxAggregateOutputType | null;
  };

  type GetIssuerexchangesGroupByPayload<T extends issuerexchangesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<IssuerexchangesGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof IssuerexchangesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuerexchangesGroupByOutputType[P]>
            : GetScalarType<T[P], IssuerexchangesGroupByOutputType[P]>;
        }
      >
    >;

  export type issuerexchangesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      issuerId?: boolean;
      exchangeId?: boolean;
      issuers?: boolean | issuersDefaultArgs<ExtArgs>;
      exchanges?: boolean | exchangesDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["issuerexchanges"]
  >;

  export type issuerexchangesSelectScalar = {
    issuerId?: boolean;
    exchangeId?: boolean;
  };

  export type issuerexchangesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuers?: boolean | issuersDefaultArgs<ExtArgs>;
    exchanges?: boolean | exchangesDefaultArgs<ExtArgs>;
  };

  export type $issuerexchangesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "issuerexchanges";
    objects: {
      issuers: Prisma.$issuersPayload<ExtArgs>;
      exchanges: Prisma.$exchangesPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        issuerId: number;
        exchangeId: number;
      },
      ExtArgs["result"]["issuerexchanges"]
    >;
    composites: {};
  };

  type issuerexchangesGetPayload<
    S extends boolean | null | undefined | issuerexchangesDefaultArgs
  > = $Result.GetResult<Prisma.$issuerexchangesPayload, S>;

  type issuerexchangesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<issuerexchangesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: IssuerexchangesCountAggregateInputType | true;
  };

  export interface issuerexchangesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["issuerexchanges"];
      meta: { name: "issuerexchanges" };
    };

    /**
     * Find zero or one Issuerexchanges that matches the filter.
     * @param {issuerexchangesFindUniqueArgs} args - Arguments to find a Issuerexchanges
     * @example
     * // Get one Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends issuerexchangesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, issuerexchangesFindUniqueArgs<ExtArgs>>
    ): Prisma__issuerexchangesClient<
      $Result.GetResult<
        Prisma.$issuerexchangesPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Issuerexchanges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {issuerexchangesFindUniqueOrThrowArgs} args - Arguments to find a Issuerexchanges
     * @example
     * // Get one Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends issuerexchangesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, issuerexchangesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__issuerexchangesClient<
      $Result.GetResult<
        Prisma.$issuerexchangesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Issuerexchanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuerexchangesFindFirstArgs} args - Arguments to find a Issuerexchanges
     * @example
     * // Get one Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends issuerexchangesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, issuerexchangesFindFirstArgs<ExtArgs>>
    ): Prisma__issuerexchangesClient<
      $Result.GetResult<
        Prisma.$issuerexchangesPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Issuerexchanges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuerexchangesFindFirstOrThrowArgs} args - Arguments to find a Issuerexchanges
     * @example
     * // Get one Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends issuerexchangesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, issuerexchangesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__issuerexchangesClient<
      $Result.GetResult<
        Prisma.$issuerexchangesPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Issuerexchanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuerexchangesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.findMany()
     *
     * // Get first 10 Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.findMany({ take: 10 })
     *
     * // Only select the `issuerId`
     * const issuerexchangesWithIssuerIdOnly = await prisma.issuerexchanges.findMany({ select: { issuerId: true } })
     *
     **/
    findMany<T extends issuerexchangesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, issuerexchangesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$issuerexchangesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Issuerexchanges.
     * @param {issuerexchangesCreateArgs} args - Arguments to create a Issuerexchanges.
     * @example
     * // Create one Issuerexchanges
     * const Issuerexchanges = await prisma.issuerexchanges.create({
     *   data: {
     *     // ... data to create a Issuerexchanges
     *   }
     * })
     *
     **/
    create<T extends issuerexchangesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, issuerexchangesCreateArgs<ExtArgs>>
    ): Prisma__issuerexchangesClient<
      $Result.GetResult<Prisma.$issuerexchangesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Issuerexchanges.
     * @param {issuerexchangesCreateManyArgs} args - Arguments to create many Issuerexchanges.
     * @example
     * // Create many Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends issuerexchangesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, issuerexchangesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Issuerexchanges.
     * @param {issuerexchangesDeleteArgs} args - Arguments to delete one Issuerexchanges.
     * @example
     * // Delete one Issuerexchanges
     * const Issuerexchanges = await prisma.issuerexchanges.delete({
     *   where: {
     *     // ... filter to delete one Issuerexchanges
     *   }
     * })
     *
     **/
    delete<T extends issuerexchangesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, issuerexchangesDeleteArgs<ExtArgs>>
    ): Prisma__issuerexchangesClient<
      $Result.GetResult<Prisma.$issuerexchangesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Issuerexchanges.
     * @param {issuerexchangesUpdateArgs} args - Arguments to update one Issuerexchanges.
     * @example
     * // Update one Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends issuerexchangesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, issuerexchangesUpdateArgs<ExtArgs>>
    ): Prisma__issuerexchangesClient<
      $Result.GetResult<Prisma.$issuerexchangesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Issuerexchanges.
     * @param {issuerexchangesDeleteManyArgs} args - Arguments to filter Issuerexchanges to delete.
     * @example
     * // Delete a few Issuerexchanges
     * const { count } = await prisma.issuerexchanges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends issuerexchangesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, issuerexchangesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Issuerexchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuerexchangesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends issuerexchangesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, issuerexchangesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Issuerexchanges.
     * @param {issuerexchangesUpsertArgs} args - Arguments to update or create a Issuerexchanges.
     * @example
     * // Update or create a Issuerexchanges
     * const issuerexchanges = await prisma.issuerexchanges.upsert({
     *   create: {
     *     // ... data to create a Issuerexchanges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issuerexchanges we want to update
     *   }
     * })
     **/
    upsert<T extends issuerexchangesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, issuerexchangesUpsertArgs<ExtArgs>>
    ): Prisma__issuerexchangesClient<
      $Result.GetResult<Prisma.$issuerexchangesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Issuerexchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuerexchangesCountArgs} args - Arguments to filter Issuerexchanges to count.
     * @example
     * // Count the number of Issuerexchanges
     * const count = await prisma.issuerexchanges.count({
     *   where: {
     *     // ... the filter for the Issuerexchanges we want to count
     *   }
     * })
     **/
    count<T extends issuerexchangesCountArgs>(
      args?: Subset<T, issuerexchangesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], IssuerexchangesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Issuerexchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuerexchangesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends IssuerexchangesAggregateArgs>(
      args: Subset<T, IssuerexchangesAggregateArgs>
    ): Prisma.PrismaPromise<GetIssuerexchangesAggregateType<T>>;

    /**
     * Group by Issuerexchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuerexchangesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends issuerexchangesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: issuerexchangesGroupByArgs["orderBy"] }
        : { orderBy?: issuerexchangesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, issuerexchangesGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetIssuerexchangesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the issuerexchanges model
     */
    readonly fields: issuerexchangesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for issuerexchanges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__issuerexchangesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    issuers<T extends issuersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, issuersDefaultArgs<ExtArgs>>
    ): Prisma__issuersClient<
      | $Result.GetResult<
          Prisma.$issuersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow"
        >
      | Null,
      Null,
      ExtArgs
    >;

    exchanges<T extends exchangesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, exchangesDefaultArgs<ExtArgs>>
    ): Prisma__exchangesClient<
      | $Result.GetResult<
          Prisma.$exchangesPayload<ExtArgs>,
          T,
          "findUniqueOrThrow"
        >
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the issuerexchanges model
   */
  interface issuerexchangesFieldRefs {
    readonly issuerId: FieldRef<"issuerexchanges", "Int">;
    readonly exchangeId: FieldRef<"issuerexchanges", "Int">;
  }

  // Custom InputTypes
  /**
   * issuerexchanges findUnique
   */
  export type issuerexchangesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * Filter, which issuerexchanges to fetch.
     */
    where: issuerexchangesWhereUniqueInput;
  };

  /**
   * issuerexchanges findUniqueOrThrow
   */
  export type issuerexchangesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * Filter, which issuerexchanges to fetch.
     */
    where: issuerexchangesWhereUniqueInput;
  };

  /**
   * issuerexchanges findFirst
   */
  export type issuerexchangesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * Filter, which issuerexchanges to fetch.
     */
    where?: issuerexchangesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of issuerexchanges to fetch.
     */
    orderBy?:
      | issuerexchangesOrderByWithRelationInput
      | issuerexchangesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for issuerexchanges.
     */
    cursor?: issuerexchangesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` issuerexchanges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` issuerexchanges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of issuerexchanges.
     */
    distinct?:
      | IssuerexchangesScalarFieldEnum
      | IssuerexchangesScalarFieldEnum[];
  };

  /**
   * issuerexchanges findFirstOrThrow
   */
  export type issuerexchangesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * Filter, which issuerexchanges to fetch.
     */
    where?: issuerexchangesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of issuerexchanges to fetch.
     */
    orderBy?:
      | issuerexchangesOrderByWithRelationInput
      | issuerexchangesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for issuerexchanges.
     */
    cursor?: issuerexchangesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` issuerexchanges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` issuerexchanges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of issuerexchanges.
     */
    distinct?:
      | IssuerexchangesScalarFieldEnum
      | IssuerexchangesScalarFieldEnum[];
  };

  /**
   * issuerexchanges findMany
   */
  export type issuerexchangesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * Filter, which issuerexchanges to fetch.
     */
    where?: issuerexchangesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of issuerexchanges to fetch.
     */
    orderBy?:
      | issuerexchangesOrderByWithRelationInput
      | issuerexchangesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing issuerexchanges.
     */
    cursor?: issuerexchangesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` issuerexchanges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` issuerexchanges.
     */
    skip?: number;
    distinct?:
      | IssuerexchangesScalarFieldEnum
      | IssuerexchangesScalarFieldEnum[];
  };

  /**
   * issuerexchanges create
   */
  export type issuerexchangesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * The data needed to create a issuerexchanges.
     */
    data: XOR<issuerexchangesCreateInput, issuerexchangesUncheckedCreateInput>;
  };

  /**
   * issuerexchanges createMany
   */
  export type issuerexchangesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many issuerexchanges.
     */
    data: issuerexchangesCreateManyInput | issuerexchangesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * issuerexchanges update
   */
  export type issuerexchangesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * The data needed to update a issuerexchanges.
     */
    data: XOR<issuerexchangesUpdateInput, issuerexchangesUncheckedUpdateInput>;
    /**
     * Choose, which issuerexchanges to update.
     */
    where: issuerexchangesWhereUniqueInput;
  };

  /**
   * issuerexchanges updateMany
   */
  export type issuerexchangesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update issuerexchanges.
     */
    data: XOR<
      issuerexchangesUpdateManyMutationInput,
      issuerexchangesUncheckedUpdateManyInput
    >;
    /**
     * Filter which issuerexchanges to update
     */
    where?: issuerexchangesWhereInput;
  };

  /**
   * issuerexchanges upsert
   */
  export type issuerexchangesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * The filter to search for the issuerexchanges to update in case it exists.
     */
    where: issuerexchangesWhereUniqueInput;
    /**
     * In case the issuerexchanges found by the `where` argument doesn't exist, create a new issuerexchanges with this data.
     */
    create: XOR<
      issuerexchangesCreateInput,
      issuerexchangesUncheckedCreateInput
    >;
    /**
     * In case the issuerexchanges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      issuerexchangesUpdateInput,
      issuerexchangesUncheckedUpdateInput
    >;
  };

  /**
   * issuerexchanges delete
   */
  export type issuerexchangesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    /**
     * Filter which issuerexchanges to delete.
     */
    where: issuerexchangesWhereUniqueInput;
  };

  /**
   * issuerexchanges deleteMany
   */
  export type issuerexchangesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which issuerexchanges to delete
     */
    where?: issuerexchangesWhereInput;
  };

  /**
   * issuerexchanges without action
   */
  export type issuerexchangesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
  };

  /**
   * Model issuers
   */

  export type AggregateIssuers = {
    _count: IssuersCountAggregateOutputType | null;
    _avg: IssuersAvgAggregateOutputType | null;
    _sum: IssuersSumAggregateOutputType | null;
    _min: IssuersMinAggregateOutputType | null;
    _max: IssuersMaxAggregateOutputType | null;
  };

  export type IssuersAvgAggregateOutputType = {
    id: number | null;
    sedarId: number | null;
    tickerId: number | null;
    sizeId: number | null;
  };

  export type IssuersSumAggregateOutputType = {
    id: number | null;
    sedarId: number | null;
    tickerId: number | null;
    sizeId: number | null;
  };

  export type IssuersMinAggregateOutputType = {
    id: number | null;
    sedarId: number | null;
    name: string | null;
    tickerId: number | null;
    sizeId: number | null;
  };

  export type IssuersMaxAggregateOutputType = {
    id: number | null;
    sedarId: number | null;
    name: string | null;
    tickerId: number | null;
    sizeId: number | null;
  };

  export type IssuersCountAggregateOutputType = {
    id: number;
    sedarId: number;
    name: number;
    tickerId: number;
    sizeId: number;
    _all: number;
  };

  export type IssuersAvgAggregateInputType = {
    id?: true;
    sedarId?: true;
    tickerId?: true;
    sizeId?: true;
  };

  export type IssuersSumAggregateInputType = {
    id?: true;
    sedarId?: true;
    tickerId?: true;
    sizeId?: true;
  };

  export type IssuersMinAggregateInputType = {
    id?: true;
    sedarId?: true;
    name?: true;
    tickerId?: true;
    sizeId?: true;
  };

  export type IssuersMaxAggregateInputType = {
    id?: true;
    sedarId?: true;
    name?: true;
    tickerId?: true;
    sizeId?: true;
  };

  export type IssuersCountAggregateInputType = {
    id?: true;
    sedarId?: true;
    name?: true;
    tickerId?: true;
    sizeId?: true;
    _all?: true;
  };

  export type IssuersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which issuers to aggregate.
     */
    where?: issuersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of issuers to fetch.
     */
    orderBy?:
      | issuersOrderByWithRelationInput
      | issuersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: issuersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` issuers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` issuers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned issuers
     **/
    _count?: true | IssuersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: IssuersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: IssuersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IssuersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IssuersMaxAggregateInputType;
  };

  export type GetIssuersAggregateType<T extends IssuersAggregateArgs> = {
    [P in keyof T & keyof AggregateIssuers]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssuers[P]>
      : GetScalarType<T[P], AggregateIssuers[P]>;
  };

  export type issuersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: issuersWhereInput;
    orderBy?:
      | issuersOrderByWithAggregationInput
      | issuersOrderByWithAggregationInput[];
    by: IssuersScalarFieldEnum[] | IssuersScalarFieldEnum;
    having?: issuersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IssuersCountAggregateInputType | true;
    _avg?: IssuersAvgAggregateInputType;
    _sum?: IssuersSumAggregateInputType;
    _min?: IssuersMinAggregateInputType;
    _max?: IssuersMaxAggregateInputType;
  };

  export type IssuersGroupByOutputType = {
    id: number;
    sedarId: number | null;
    name: string | null;
    tickerId: number | null;
    sizeId: number | null;
    _count: IssuersCountAggregateOutputType | null;
    _avg: IssuersAvgAggregateOutputType | null;
    _sum: IssuersSumAggregateOutputType | null;
    _min: IssuersMinAggregateOutputType | null;
    _max: IssuersMaxAggregateOutputType | null;
  };

  type GetIssuersGroupByPayload<T extends issuersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<IssuersGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof IssuersGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuersGroupByOutputType[P]>
            : GetScalarType<T[P], IssuersGroupByOutputType[P]>;
        }
      >
    >;

  export type issuersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sedarId?: boolean;
      name?: boolean;
      tickerId?: boolean;
      sizeId?: boolean;
      insiders?: boolean | issuers$insidersArgs<ExtArgs>;
      issuerexchanges?: boolean | issuers$issuerexchangesArgs<ExtArgs>;
      tickers?: boolean | issuers$tickersArgs<ExtArgs>;
      sizes?: boolean | issuers$sizesArgs<ExtArgs>;
      transactions?: boolean | issuers$transactionsArgs<ExtArgs>;
      _count?: boolean | IssuersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["issuers"]
  >;

  export type issuersSelectScalar = {
    id?: boolean;
    sedarId?: boolean;
    name?: boolean;
    tickerId?: boolean;
    sizeId?: boolean;
  };

  export type issuersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    insiders?: boolean | issuers$insidersArgs<ExtArgs>;
    issuerexchanges?: boolean | issuers$issuerexchangesArgs<ExtArgs>;
    tickers?: boolean | issuers$tickersArgs<ExtArgs>;
    sizes?: boolean | issuers$sizesArgs<ExtArgs>;
    transactions?: boolean | issuers$transactionsArgs<ExtArgs>;
    _count?: boolean | IssuersCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $issuersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "issuers";
    objects: {
      insiders: Prisma.$insidersPayload<ExtArgs>[];
      issuerexchanges: Prisma.$issuerexchangesPayload<ExtArgs>[];
      tickers: Prisma.$tickersPayload<ExtArgs> | null;
      sizes: Prisma.$sizesPayload<ExtArgs> | null;
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        sedarId: number | null;
        name: string | null;
        tickerId: number | null;
        sizeId: number | null;
      },
      ExtArgs["result"]["issuers"]
    >;
    composites: {};
  };

  type issuersGetPayload<
    S extends boolean | null | undefined | issuersDefaultArgs
  > = $Result.GetResult<Prisma.$issuersPayload, S>;

  type issuersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<issuersFindManyArgs, "select" | "include" | "distinct"> & {
    select?: IssuersCountAggregateInputType | true;
  };

  export interface issuersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["issuers"];
      meta: { name: "issuers" };
    };

    /**
     * Find zero or one Issuers that matches the filter.
     * @param {issuersFindUniqueArgs} args - Arguments to find a Issuers
     * @example
     * // Get one Issuers
     * const issuers = await prisma.issuers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends issuersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, issuersFindUniqueArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<
        Prisma.$issuersPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Issuers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {issuersFindUniqueOrThrowArgs} args - Arguments to find a Issuers
     * @example
     * // Get one Issuers
     * const issuers = await prisma.issuers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends issuersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, issuersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<
        Prisma.$issuersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Issuers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuersFindFirstArgs} args - Arguments to find a Issuers
     * @example
     * // Get one Issuers
     * const issuers = await prisma.issuers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends issuersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, issuersFindFirstArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Issuers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuersFindFirstOrThrowArgs} args - Arguments to find a Issuers
     * @example
     * // Get one Issuers
     * const issuers = await prisma.issuers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends issuersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, issuersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Issuers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issuers
     * const issuers = await prisma.issuers.findMany()
     *
     * // Get first 10 Issuers
     * const issuers = await prisma.issuers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const issuersWithIdOnly = await prisma.issuers.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends issuersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, issuersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Issuers.
     * @param {issuersCreateArgs} args - Arguments to create a Issuers.
     * @example
     * // Create one Issuers
     * const Issuers = await prisma.issuers.create({
     *   data: {
     *     // ... data to create a Issuers
     *   }
     * })
     *
     **/
    create<T extends issuersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, issuersCreateArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Issuers.
     * @param {issuersCreateManyArgs} args - Arguments to create many Issuers.
     * @example
     * // Create many Issuers
     * const issuers = await prisma.issuers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends issuersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, issuersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Issuers.
     * @param {issuersDeleteArgs} args - Arguments to delete one Issuers.
     * @example
     * // Delete one Issuers
     * const Issuers = await prisma.issuers.delete({
     *   where: {
     *     // ... filter to delete one Issuers
     *   }
     * })
     *
     **/
    delete<T extends issuersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, issuersDeleteArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Issuers.
     * @param {issuersUpdateArgs} args - Arguments to update one Issuers.
     * @example
     * // Update one Issuers
     * const issuers = await prisma.issuers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends issuersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, issuersUpdateArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Issuers.
     * @param {issuersDeleteManyArgs} args - Arguments to filter Issuers to delete.
     * @example
     * // Delete a few Issuers
     * const { count } = await prisma.issuers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends issuersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, issuersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issuers
     * const issuers = await prisma.issuers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends issuersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, issuersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Issuers.
     * @param {issuersUpsertArgs} args - Arguments to update or create a Issuers.
     * @example
     * // Update or create a Issuers
     * const issuers = await prisma.issuers.upsert({
     *   create: {
     *     // ... data to create a Issuers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issuers we want to update
     *   }
     * })
     **/
    upsert<T extends issuersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, issuersUpsertArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuersCountArgs} args - Arguments to filter Issuers to count.
     * @example
     * // Count the number of Issuers
     * const count = await prisma.issuers.count({
     *   where: {
     *     // ... the filter for the Issuers we want to count
     *   }
     * })
     **/
    count<T extends issuersCountArgs>(
      args?: Subset<T, issuersCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], IssuersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends IssuersAggregateArgs>(
      args: Subset<T, IssuersAggregateArgs>
    ): Prisma.PrismaPromise<GetIssuersAggregateType<T>>;

    /**
     * Group by Issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {issuersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends issuersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: issuersGroupByArgs["orderBy"] }
        : { orderBy?: issuersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, issuersGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetIssuersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the issuers model
     */
    readonly fields: issuersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for issuers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__issuersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    insiders<T extends issuers$insidersArgs<ExtArgs> = {}>(
      args?: Subset<T, issuers$insidersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$insidersPayload<ExtArgs>, T, "findMany"> | Null
    >;

    issuerexchanges<T extends issuers$issuerexchangesArgs<ExtArgs> = {}>(
      args?: Subset<T, issuers$issuerexchangesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$issuerexchangesPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    tickers<T extends issuers$tickersArgs<ExtArgs> = {}>(
      args?: Subset<T, issuers$tickersArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<
        Prisma.$tickersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    sizes<T extends issuers$sizesArgs<ExtArgs> = {}>(
      args?: Subset<T, issuers$sizesArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<
        Prisma.$sizesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    transactions<T extends issuers$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, issuers$transactionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the issuers model
   */
  interface issuersFieldRefs {
    readonly id: FieldRef<"issuers", "Int">;
    readonly sedarId: FieldRef<"issuers", "Int">;
    readonly name: FieldRef<"issuers", "String">;
    readonly tickerId: FieldRef<"issuers", "Int">;
    readonly sizeId: FieldRef<"issuers", "Int">;
  }

  // Custom InputTypes
  /**
   * issuers findUnique
   */
  export type issuersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * Filter, which issuers to fetch.
     */
    where: issuersWhereUniqueInput;
  };

  /**
   * issuers findUniqueOrThrow
   */
  export type issuersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * Filter, which issuers to fetch.
     */
    where: issuersWhereUniqueInput;
  };

  /**
   * issuers findFirst
   */
  export type issuersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * Filter, which issuers to fetch.
     */
    where?: issuersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of issuers to fetch.
     */
    orderBy?:
      | issuersOrderByWithRelationInput
      | issuersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for issuers.
     */
    cursor?: issuersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` issuers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` issuers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of issuers.
     */
    distinct?: IssuersScalarFieldEnum | IssuersScalarFieldEnum[];
  };

  /**
   * issuers findFirstOrThrow
   */
  export type issuersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * Filter, which issuers to fetch.
     */
    where?: issuersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of issuers to fetch.
     */
    orderBy?:
      | issuersOrderByWithRelationInput
      | issuersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for issuers.
     */
    cursor?: issuersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` issuers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` issuers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of issuers.
     */
    distinct?: IssuersScalarFieldEnum | IssuersScalarFieldEnum[];
  };

  /**
   * issuers findMany
   */
  export type issuersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * Filter, which issuers to fetch.
     */
    where?: issuersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of issuers to fetch.
     */
    orderBy?:
      | issuersOrderByWithRelationInput
      | issuersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing issuers.
     */
    cursor?: issuersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` issuers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` issuers.
     */
    skip?: number;
    distinct?: IssuersScalarFieldEnum | IssuersScalarFieldEnum[];
  };

  /**
   * issuers create
   */
  export type issuersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * The data needed to create a issuers.
     */
    data?: XOR<issuersCreateInput, issuersUncheckedCreateInput>;
  };

  /**
   * issuers createMany
   */
  export type issuersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many issuers.
     */
    data: issuersCreateManyInput | issuersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * issuers update
   */
  export type issuersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * The data needed to update a issuers.
     */
    data: XOR<issuersUpdateInput, issuersUncheckedUpdateInput>;
    /**
     * Choose, which issuers to update.
     */
    where: issuersWhereUniqueInput;
  };

  /**
   * issuers updateMany
   */
  export type issuersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update issuers.
     */
    data: XOR<issuersUpdateManyMutationInput, issuersUncheckedUpdateManyInput>;
    /**
     * Filter which issuers to update
     */
    where?: issuersWhereInput;
  };

  /**
   * issuers upsert
   */
  export type issuersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * The filter to search for the issuers to update in case it exists.
     */
    where: issuersWhereUniqueInput;
    /**
     * In case the issuers found by the `where` argument doesn't exist, create a new issuers with this data.
     */
    create: XOR<issuersCreateInput, issuersUncheckedCreateInput>;
    /**
     * In case the issuers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<issuersUpdateInput, issuersUncheckedUpdateInput>;
  };

  /**
   * issuers delete
   */
  export type issuersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    /**
     * Filter which issuers to delete.
     */
    where: issuersWhereUniqueInput;
  };

  /**
   * issuers deleteMany
   */
  export type issuersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which issuers to delete
     */
    where?: issuersWhereInput;
  };

  /**
   * issuers.insiders
   */
  export type issuers$insidersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    where?: insidersWhereInput;
    orderBy?:
      | insidersOrderByWithRelationInput
      | insidersOrderByWithRelationInput[];
    cursor?: insidersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InsidersScalarFieldEnum | InsidersScalarFieldEnum[];
  };

  /**
   * issuers.issuerexchanges
   */
  export type issuers$issuerexchangesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuerexchanges
     */
    select?: issuerexchangesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuerexchangesInclude<ExtArgs> | null;
    where?: issuerexchangesWhereInput;
    orderBy?:
      | issuerexchangesOrderByWithRelationInput
      | issuerexchangesOrderByWithRelationInput[];
    cursor?: issuerexchangesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | IssuerexchangesScalarFieldEnum
      | IssuerexchangesScalarFieldEnum[];
  };

  /**
   * issuers.tickers
   */
  export type issuers$tickersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    where?: tickersWhereInput;
  };

  /**
   * issuers.sizes
   */
  export type issuers$sizesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    where?: sizesWhereInput;
  };

  /**
   * issuers.transactions
   */
  export type issuers$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * issuers without action
   */
  export type issuersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
  };

  /**
   * Model relationstoissuer
   */

  export type AggregateRelationstoissuer = {
    _count: RelationstoissuerCountAggregateOutputType | null;
    _avg: RelationstoissuerAvgAggregateOutputType | null;
    _sum: RelationstoissuerSumAggregateOutputType | null;
    _min: RelationstoissuerMinAggregateOutputType | null;
    _max: RelationstoissuerMaxAggregateOutputType | null;
  };

  export type RelationstoissuerAvgAggregateOutputType = {
    insiderId: number | null;
  };

  export type RelationstoissuerSumAggregateOutputType = {
    insiderId: number | null;
  };

  export type RelationstoissuerMinAggregateOutputType = {
    type: $Enums.relationstoissuer_type | null;
    insiderId: number | null;
  };

  export type RelationstoissuerMaxAggregateOutputType = {
    type: $Enums.relationstoissuer_type | null;
    insiderId: number | null;
  };

  export type RelationstoissuerCountAggregateOutputType = {
    type: number;
    insiderId: number;
    _all: number;
  };

  export type RelationstoissuerAvgAggregateInputType = {
    insiderId?: true;
  };

  export type RelationstoissuerSumAggregateInputType = {
    insiderId?: true;
  };

  export type RelationstoissuerMinAggregateInputType = {
    type?: true;
    insiderId?: true;
  };

  export type RelationstoissuerMaxAggregateInputType = {
    type?: true;
    insiderId?: true;
  };

  export type RelationstoissuerCountAggregateInputType = {
    type?: true;
    insiderId?: true;
    _all?: true;
  };

  export type RelationstoissuerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which relationstoissuer to aggregate.
     */
    where?: relationstoissuerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of relationstoissuers to fetch.
     */
    orderBy?:
      | relationstoissuerOrderByWithRelationInput
      | relationstoissuerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: relationstoissuerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` relationstoissuers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` relationstoissuers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned relationstoissuers
     **/
    _count?: true | RelationstoissuerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RelationstoissuerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RelationstoissuerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RelationstoissuerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RelationstoissuerMaxAggregateInputType;
  };

  export type GetRelationstoissuerAggregateType<
    T extends RelationstoissuerAggregateArgs
  > = {
    [P in keyof T & keyof AggregateRelationstoissuer]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationstoissuer[P]>
      : GetScalarType<T[P], AggregateRelationstoissuer[P]>;
  };

  export type relationstoissuerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: relationstoissuerWhereInput;
    orderBy?:
      | relationstoissuerOrderByWithAggregationInput
      | relationstoissuerOrderByWithAggregationInput[];
    by: RelationstoissuerScalarFieldEnum[] | RelationstoissuerScalarFieldEnum;
    having?: relationstoissuerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RelationstoissuerCountAggregateInputType | true;
    _avg?: RelationstoissuerAvgAggregateInputType;
    _sum?: RelationstoissuerSumAggregateInputType;
    _min?: RelationstoissuerMinAggregateInputType;
    _max?: RelationstoissuerMaxAggregateInputType;
  };

  export type RelationstoissuerGroupByOutputType = {
    type: $Enums.relationstoissuer_type;
    insiderId: number;
    _count: RelationstoissuerCountAggregateOutputType | null;
    _avg: RelationstoissuerAvgAggregateOutputType | null;
    _sum: RelationstoissuerSumAggregateOutputType | null;
    _min: RelationstoissuerMinAggregateOutputType | null;
    _max: RelationstoissuerMaxAggregateOutputType | null;
  };

  type GetRelationstoissuerGroupByPayload<
    T extends relationstoissuerGroupByArgs
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationstoissuerGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof RelationstoissuerGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RelationstoissuerGroupByOutputType[P]>
          : GetScalarType<T[P], RelationstoissuerGroupByOutputType[P]>;
      }
    >
  >;

  export type relationstoissuerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      type?: boolean;
      insiderId?: boolean;
      insiders?: boolean | insidersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["relationstoissuer"]
  >;

  export type relationstoissuerSelectScalar = {
    type?: boolean;
    insiderId?: boolean;
  };

  export type relationstoissuerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    insiders?: boolean | insidersDefaultArgs<ExtArgs>;
  };

  export type $relationstoissuerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "relationstoissuer";
    objects: {
      insiders: Prisma.$insidersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        type: $Enums.relationstoissuer_type;
        insiderId: number;
      },
      ExtArgs["result"]["relationstoissuer"]
    >;
    composites: {};
  };

  type relationstoissuerGetPayload<
    S extends boolean | null | undefined | relationstoissuerDefaultArgs
  > = $Result.GetResult<Prisma.$relationstoissuerPayload, S>;

  type relationstoissuerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<relationstoissuerFindManyArgs, "select" | "include" | "distinct"> & {
    select?: RelationstoissuerCountAggregateInputType | true;
  };

  export interface relationstoissuerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["relationstoissuer"];
      meta: { name: "relationstoissuer" };
    };

    /**
     * Find zero or one Relationstoissuer that matches the filter.
     * @param {relationstoissuerFindUniqueArgs} args - Arguments to find a Relationstoissuer
     * @example
     * // Get one Relationstoissuer
     * const relationstoissuer = await prisma.relationstoissuer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends relationstoissuerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, relationstoissuerFindUniqueArgs<ExtArgs>>
    ): Prisma__relationstoissuerClient<
      $Result.GetResult<
        Prisma.$relationstoissuerPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Relationstoissuer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {relationstoissuerFindUniqueOrThrowArgs} args - Arguments to find a Relationstoissuer
     * @example
     * // Get one Relationstoissuer
     * const relationstoissuer = await prisma.relationstoissuer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<
      T extends relationstoissuerFindUniqueOrThrowArgs<ExtArgs>
    >(
      args?: SelectSubset<T, relationstoissuerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__relationstoissuerClient<
      $Result.GetResult<
        Prisma.$relationstoissuerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Relationstoissuer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationstoissuerFindFirstArgs} args - Arguments to find a Relationstoissuer
     * @example
     * // Get one Relationstoissuer
     * const relationstoissuer = await prisma.relationstoissuer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends relationstoissuerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, relationstoissuerFindFirstArgs<ExtArgs>>
    ): Prisma__relationstoissuerClient<
      $Result.GetResult<
        Prisma.$relationstoissuerPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Relationstoissuer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationstoissuerFindFirstOrThrowArgs} args - Arguments to find a Relationstoissuer
     * @example
     * // Get one Relationstoissuer
     * const relationstoissuer = await prisma.relationstoissuer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends relationstoissuerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, relationstoissuerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__relationstoissuerClient<
      $Result.GetResult<
        Prisma.$relationstoissuerPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Relationstoissuers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationstoissuerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relationstoissuers
     * const relationstoissuers = await prisma.relationstoissuer.findMany()
     *
     * // Get first 10 Relationstoissuers
     * const relationstoissuers = await prisma.relationstoissuer.findMany({ take: 10 })
     *
     * // Only select the `insiderId`
     * const relationstoissuerWithInsiderIdOnly = await prisma.relationstoissuer.findMany({ select: { insiderId: true } })
     *
     **/
    findMany<T extends relationstoissuerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relationstoissuerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$relationstoissuerPayload<ExtArgs>,
        T,
        "findMany"
      >
    >;

    /**
     * Create a Relationstoissuer.
     * @param {relationstoissuerCreateArgs} args - Arguments to create a Relationstoissuer.
     * @example
     * // Create one Relationstoissuer
     * const Relationstoissuer = await prisma.relationstoissuer.create({
     *   data: {
     *     // ... data to create a Relationstoissuer
     *   }
     * })
     *
     **/
    create<T extends relationstoissuerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, relationstoissuerCreateArgs<ExtArgs>>
    ): Prisma__relationstoissuerClient<
      $Result.GetResult<Prisma.$relationstoissuerPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Relationstoissuers.
     * @param {relationstoissuerCreateManyArgs} args - Arguments to create many Relationstoissuers.
     * @example
     * // Create many Relationstoissuers
     * const relationstoissuer = await prisma.relationstoissuer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends relationstoissuerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relationstoissuerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Relationstoissuer.
     * @param {relationstoissuerDeleteArgs} args - Arguments to delete one Relationstoissuer.
     * @example
     * // Delete one Relationstoissuer
     * const Relationstoissuer = await prisma.relationstoissuer.delete({
     *   where: {
     *     // ... filter to delete one Relationstoissuer
     *   }
     * })
     *
     **/
    delete<T extends relationstoissuerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, relationstoissuerDeleteArgs<ExtArgs>>
    ): Prisma__relationstoissuerClient<
      $Result.GetResult<Prisma.$relationstoissuerPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Relationstoissuer.
     * @param {relationstoissuerUpdateArgs} args - Arguments to update one Relationstoissuer.
     * @example
     * // Update one Relationstoissuer
     * const relationstoissuer = await prisma.relationstoissuer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends relationstoissuerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, relationstoissuerUpdateArgs<ExtArgs>>
    ): Prisma__relationstoissuerClient<
      $Result.GetResult<Prisma.$relationstoissuerPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Relationstoissuers.
     * @param {relationstoissuerDeleteManyArgs} args - Arguments to filter Relationstoissuers to delete.
     * @example
     * // Delete a few Relationstoissuers
     * const { count } = await prisma.relationstoissuer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends relationstoissuerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relationstoissuerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Relationstoissuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationstoissuerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relationstoissuers
     * const relationstoissuer = await prisma.relationstoissuer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends relationstoissuerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, relationstoissuerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Relationstoissuer.
     * @param {relationstoissuerUpsertArgs} args - Arguments to update or create a Relationstoissuer.
     * @example
     * // Update or create a Relationstoissuer
     * const relationstoissuer = await prisma.relationstoissuer.upsert({
     *   create: {
     *     // ... data to create a Relationstoissuer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relationstoissuer we want to update
     *   }
     * })
     **/
    upsert<T extends relationstoissuerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, relationstoissuerUpsertArgs<ExtArgs>>
    ): Prisma__relationstoissuerClient<
      $Result.GetResult<Prisma.$relationstoissuerPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Relationstoissuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationstoissuerCountArgs} args - Arguments to filter Relationstoissuers to count.
     * @example
     * // Count the number of Relationstoissuers
     * const count = await prisma.relationstoissuer.count({
     *   where: {
     *     // ... the filter for the Relationstoissuers we want to count
     *   }
     * })
     **/
    count<T extends relationstoissuerCountArgs>(
      args?: Subset<T, relationstoissuerCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              RelationstoissuerCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Relationstoissuer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationstoissuerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RelationstoissuerAggregateArgs>(
      args: Subset<T, RelationstoissuerAggregateArgs>
    ): Prisma.PrismaPromise<GetRelationstoissuerAggregateType<T>>;

    /**
     * Group by Relationstoissuer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationstoissuerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends relationstoissuerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: relationstoissuerGroupByArgs["orderBy"] }
        : { orderBy?: relationstoissuerGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, relationstoissuerGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetRelationstoissuerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the relationstoissuer model
     */
    readonly fields: relationstoissuerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for relationstoissuer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__relationstoissuerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    insiders<T extends insidersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, insidersDefaultArgs<ExtArgs>>
    ): Prisma__insidersClient<
      | $Result.GetResult<
          Prisma.$insidersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow"
        >
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the relationstoissuer model
   */
  interface relationstoissuerFieldRefs {
    readonly type: FieldRef<"relationstoissuer", "relationstoissuer_type">;
    readonly insiderId: FieldRef<"relationstoissuer", "Int">;
  }

  // Custom InputTypes
  /**
   * relationstoissuer findUnique
   */
  export type relationstoissuerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * Filter, which relationstoissuer to fetch.
     */
    where: relationstoissuerWhereUniqueInput;
  };

  /**
   * relationstoissuer findUniqueOrThrow
   */
  export type relationstoissuerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * Filter, which relationstoissuer to fetch.
     */
    where: relationstoissuerWhereUniqueInput;
  };

  /**
   * relationstoissuer findFirst
   */
  export type relationstoissuerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * Filter, which relationstoissuer to fetch.
     */
    where?: relationstoissuerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of relationstoissuers to fetch.
     */
    orderBy?:
      | relationstoissuerOrderByWithRelationInput
      | relationstoissuerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for relationstoissuers.
     */
    cursor?: relationstoissuerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` relationstoissuers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` relationstoissuers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of relationstoissuers.
     */
    distinct?:
      | RelationstoissuerScalarFieldEnum
      | RelationstoissuerScalarFieldEnum[];
  };

  /**
   * relationstoissuer findFirstOrThrow
   */
  export type relationstoissuerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * Filter, which relationstoissuer to fetch.
     */
    where?: relationstoissuerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of relationstoissuers to fetch.
     */
    orderBy?:
      | relationstoissuerOrderByWithRelationInput
      | relationstoissuerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for relationstoissuers.
     */
    cursor?: relationstoissuerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` relationstoissuers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` relationstoissuers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of relationstoissuers.
     */
    distinct?:
      | RelationstoissuerScalarFieldEnum
      | RelationstoissuerScalarFieldEnum[];
  };

  /**
   * relationstoissuer findMany
   */
  export type relationstoissuerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * Filter, which relationstoissuers to fetch.
     */
    where?: relationstoissuerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of relationstoissuers to fetch.
     */
    orderBy?:
      | relationstoissuerOrderByWithRelationInput
      | relationstoissuerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing relationstoissuers.
     */
    cursor?: relationstoissuerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` relationstoissuers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` relationstoissuers.
     */
    skip?: number;
    distinct?:
      | RelationstoissuerScalarFieldEnum
      | RelationstoissuerScalarFieldEnum[];
  };

  /**
   * relationstoissuer create
   */
  export type relationstoissuerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * The data needed to create a relationstoissuer.
     */
    data: XOR<
      relationstoissuerCreateInput,
      relationstoissuerUncheckedCreateInput
    >;
  };

  /**
   * relationstoissuer createMany
   */
  export type relationstoissuerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many relationstoissuers.
     */
    data: relationstoissuerCreateManyInput | relationstoissuerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * relationstoissuer update
   */
  export type relationstoissuerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * The data needed to update a relationstoissuer.
     */
    data: XOR<
      relationstoissuerUpdateInput,
      relationstoissuerUncheckedUpdateInput
    >;
    /**
     * Choose, which relationstoissuer to update.
     */
    where: relationstoissuerWhereUniqueInput;
  };

  /**
   * relationstoissuer updateMany
   */
  export type relationstoissuerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update relationstoissuers.
     */
    data: XOR<
      relationstoissuerUpdateManyMutationInput,
      relationstoissuerUncheckedUpdateManyInput
    >;
    /**
     * Filter which relationstoissuers to update
     */
    where?: relationstoissuerWhereInput;
  };

  /**
   * relationstoissuer upsert
   */
  export type relationstoissuerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * The filter to search for the relationstoissuer to update in case it exists.
     */
    where: relationstoissuerWhereUniqueInput;
    /**
     * In case the relationstoissuer found by the `where` argument doesn't exist, create a new relationstoissuer with this data.
     */
    create: XOR<
      relationstoissuerCreateInput,
      relationstoissuerUncheckedCreateInput
    >;
    /**
     * In case the relationstoissuer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      relationstoissuerUpdateInput,
      relationstoissuerUncheckedUpdateInput
    >;
  };

  /**
   * relationstoissuer delete
   */
  export type relationstoissuerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
    /**
     * Filter which relationstoissuer to delete.
     */
    where: relationstoissuerWhereUniqueInput;
  };

  /**
   * relationstoissuer deleteMany
   */
  export type relationstoissuerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which relationstoissuers to delete
     */
    where?: relationstoissuerWhereInput;
  };

  /**
   * relationstoissuer without action
   */
  export type relationstoissuerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the relationstoissuer
     */
    select?: relationstoissuerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relationstoissuerInclude<ExtArgs> | null;
  };

  /**
   * Model securitydesignations
   */

  export type AggregateSecuritydesignations = {
    _count: SecuritydesignationsCountAggregateOutputType | null;
    _avg: SecuritydesignationsAvgAggregateOutputType | null;
    _sum: SecuritydesignationsSumAggregateOutputType | null;
    _min: SecuritydesignationsMinAggregateOutputType | null;
    _max: SecuritydesignationsMaxAggregateOutputType | null;
  };

  export type SecuritydesignationsAvgAggregateOutputType = {
    id: number | null;
  };

  export type SecuritydesignationsSumAggregateOutputType = {
    id: number | null;
  };

  export type SecuritydesignationsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type SecuritydesignationsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type SecuritydesignationsCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type SecuritydesignationsAvgAggregateInputType = {
    id?: true;
  };

  export type SecuritydesignationsSumAggregateInputType = {
    id?: true;
  };

  export type SecuritydesignationsMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type SecuritydesignationsMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type SecuritydesignationsCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type SecuritydesignationsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which securitydesignations to aggregate.
     */
    where?: securitydesignationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of securitydesignations to fetch.
     */
    orderBy?:
      | securitydesignationsOrderByWithRelationInput
      | securitydesignationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: securitydesignationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` securitydesignations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` securitydesignations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned securitydesignations
     **/
    _count?: true | SecuritydesignationsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SecuritydesignationsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SecuritydesignationsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SecuritydesignationsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SecuritydesignationsMaxAggregateInputType;
  };

  export type GetSecuritydesignationsAggregateType<
    T extends SecuritydesignationsAggregateArgs
  > = {
    [P in keyof T & keyof AggregateSecuritydesignations]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecuritydesignations[P]>
      : GetScalarType<T[P], AggregateSecuritydesignations[P]>;
  };

  export type securitydesignationsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: securitydesignationsWhereInput;
    orderBy?:
      | securitydesignationsOrderByWithAggregationInput
      | securitydesignationsOrderByWithAggregationInput[];
    by:
      | SecuritydesignationsScalarFieldEnum[]
      | SecuritydesignationsScalarFieldEnum;
    having?: securitydesignationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SecuritydesignationsCountAggregateInputType | true;
    _avg?: SecuritydesignationsAvgAggregateInputType;
    _sum?: SecuritydesignationsSumAggregateInputType;
    _min?: SecuritydesignationsMinAggregateInputType;
    _max?: SecuritydesignationsMaxAggregateInputType;
  };

  export type SecuritydesignationsGroupByOutputType = {
    id: number;
    name: string | null;
    _count: SecuritydesignationsCountAggregateOutputType | null;
    _avg: SecuritydesignationsAvgAggregateOutputType | null;
    _sum: SecuritydesignationsSumAggregateOutputType | null;
    _min: SecuritydesignationsMinAggregateOutputType | null;
    _max: SecuritydesignationsMaxAggregateOutputType | null;
  };

  type GetSecuritydesignationsGroupByPayload<
    T extends securitydesignationsGroupByArgs
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecuritydesignationsGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof SecuritydesignationsGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SecuritydesignationsGroupByOutputType[P]>
          : GetScalarType<T[P], SecuritydesignationsGroupByOutputType[P]>;
      }
    >
  >;

  export type securitydesignationsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      transactions?: boolean | securitydesignations$transactionsArgs<ExtArgs>;
      underlyingsecurities?:
        | boolean
        | securitydesignations$underlyingsecuritiesArgs<ExtArgs>;
      _count?:
        | boolean
        | SecuritydesignationsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["securitydesignations"]
  >;

  export type securitydesignationsSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type securitydesignationsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?: boolean | securitydesignations$transactionsArgs<ExtArgs>;
    underlyingsecurities?:
      | boolean
      | securitydesignations$underlyingsecuritiesArgs<ExtArgs>;
    _count?: boolean | SecuritydesignationsCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $securitydesignationsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "securitydesignations";
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
      underlyingsecurities: Prisma.$underlyingsecuritiesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string | null;
      },
      ExtArgs["result"]["securitydesignations"]
    >;
    composites: {};
  };

  type securitydesignationsGetPayload<
    S extends boolean | null | undefined | securitydesignationsDefaultArgs
  > = $Result.GetResult<Prisma.$securitydesignationsPayload, S>;

  type securitydesignationsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    securitydesignationsFindManyArgs,
    "select" | "include" | "distinct"
  > & {
    select?: SecuritydesignationsCountAggregateInputType | true;
  };

  export interface securitydesignationsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["securitydesignations"];
      meta: { name: "securitydesignations" };
    };

    /**
     * Find zero or one Securitydesignations that matches the filter.
     * @param {securitydesignationsFindUniqueArgs} args - Arguments to find a Securitydesignations
     * @example
     * // Get one Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends securitydesignationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, securitydesignationsFindUniqueArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Securitydesignations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {securitydesignationsFindUniqueOrThrowArgs} args - Arguments to find a Securitydesignations
     * @example
     * // Get one Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<
      T extends securitydesignationsFindUniqueOrThrowArgs<ExtArgs>
    >(
      args?: SelectSubset<T, securitydesignationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Securitydesignations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {securitydesignationsFindFirstArgs} args - Arguments to find a Securitydesignations
     * @example
     * // Get one Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends securitydesignationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, securitydesignationsFindFirstArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Securitydesignations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {securitydesignationsFindFirstOrThrowArgs} args - Arguments to find a Securitydesignations
     * @example
     * // Get one Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<
      T extends securitydesignationsFindFirstOrThrowArgs<ExtArgs>
    >(
      args?: SelectSubset<T, securitydesignationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Securitydesignations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {securitydesignationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.findMany()
     *
     * // Get first 10 Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const securitydesignationsWithIdOnly = await prisma.securitydesignations.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends securitydesignationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, securitydesignationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "findMany"
      >
    >;

    /**
     * Create a Securitydesignations.
     * @param {securitydesignationsCreateArgs} args - Arguments to create a Securitydesignations.
     * @example
     * // Create one Securitydesignations
     * const Securitydesignations = await prisma.securitydesignations.create({
     *   data: {
     *     // ... data to create a Securitydesignations
     *   }
     * })
     *
     **/
    create<T extends securitydesignationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, securitydesignationsCreateArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "create"
      >,
      never,
      ExtArgs
    >;

    /**
     * Create many Securitydesignations.
     * @param {securitydesignationsCreateManyArgs} args - Arguments to create many Securitydesignations.
     * @example
     * // Create many Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends securitydesignationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, securitydesignationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Securitydesignations.
     * @param {securitydesignationsDeleteArgs} args - Arguments to delete one Securitydesignations.
     * @example
     * // Delete one Securitydesignations
     * const Securitydesignations = await prisma.securitydesignations.delete({
     *   where: {
     *     // ... filter to delete one Securitydesignations
     *   }
     * })
     *
     **/
    delete<T extends securitydesignationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, securitydesignationsDeleteArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "delete"
      >,
      never,
      ExtArgs
    >;

    /**
     * Update one Securitydesignations.
     * @param {securitydesignationsUpdateArgs} args - Arguments to update one Securitydesignations.
     * @example
     * // Update one Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends securitydesignationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, securitydesignationsUpdateArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "update"
      >,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Securitydesignations.
     * @param {securitydesignationsDeleteManyArgs} args - Arguments to filter Securitydesignations to delete.
     * @example
     * // Delete a few Securitydesignations
     * const { count } = await prisma.securitydesignations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends securitydesignationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, securitydesignationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Securitydesignations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {securitydesignationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends securitydesignationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, securitydesignationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Securitydesignations.
     * @param {securitydesignationsUpsertArgs} args - Arguments to update or create a Securitydesignations.
     * @example
     * // Update or create a Securitydesignations
     * const securitydesignations = await prisma.securitydesignations.upsert({
     *   create: {
     *     // ... data to create a Securitydesignations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Securitydesignations we want to update
     *   }
     * })
     **/
    upsert<T extends securitydesignationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, securitydesignationsUpsertArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "upsert"
      >,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Securitydesignations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {securitydesignationsCountArgs} args - Arguments to filter Securitydesignations to count.
     * @example
     * // Count the number of Securitydesignations
     * const count = await prisma.securitydesignations.count({
     *   where: {
     *     // ... the filter for the Securitydesignations we want to count
     *   }
     * })
     **/
    count<T extends securitydesignationsCountArgs>(
      args?: Subset<T, securitydesignationsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              SecuritydesignationsCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Securitydesignations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecuritydesignationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SecuritydesignationsAggregateArgs>(
      args: Subset<T, SecuritydesignationsAggregateArgs>
    ): Prisma.PrismaPromise<GetSecuritydesignationsAggregateType<T>>;

    /**
     * Group by Securitydesignations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {securitydesignationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends securitydesignationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: securitydesignationsGroupByArgs["orderBy"] }
        : { orderBy?: securitydesignationsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, securitydesignationsGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetSecuritydesignationsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the securitydesignations model
     */
    readonly fields: securitydesignationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for securitydesignations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__securitydesignationsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    transactions<T extends securitydesignations$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, securitydesignations$transactionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">
      | Null
    >;

    underlyingsecurities<
      T extends securitydesignations$underlyingsecuritiesArgs<ExtArgs> = {}
    >(
      args?: Subset<T, securitydesignations$underlyingsecuritiesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$underlyingsecuritiesPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the securitydesignations model
   */
  interface securitydesignationsFieldRefs {
    readonly id: FieldRef<"securitydesignations", "Int">;
    readonly name: FieldRef<"securitydesignations", "String">;
  }

  // Custom InputTypes
  /**
   * securitydesignations findUnique
   */
  export type securitydesignationsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * Filter, which securitydesignations to fetch.
     */
    where: securitydesignationsWhereUniqueInput;
  };

  /**
   * securitydesignations findUniqueOrThrow
   */
  export type securitydesignationsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * Filter, which securitydesignations to fetch.
     */
    where: securitydesignationsWhereUniqueInput;
  };

  /**
   * securitydesignations findFirst
   */
  export type securitydesignationsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * Filter, which securitydesignations to fetch.
     */
    where?: securitydesignationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of securitydesignations to fetch.
     */
    orderBy?:
      | securitydesignationsOrderByWithRelationInput
      | securitydesignationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for securitydesignations.
     */
    cursor?: securitydesignationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` securitydesignations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` securitydesignations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of securitydesignations.
     */
    distinct?:
      | SecuritydesignationsScalarFieldEnum
      | SecuritydesignationsScalarFieldEnum[];
  };

  /**
   * securitydesignations findFirstOrThrow
   */
  export type securitydesignationsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * Filter, which securitydesignations to fetch.
     */
    where?: securitydesignationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of securitydesignations to fetch.
     */
    orderBy?:
      | securitydesignationsOrderByWithRelationInput
      | securitydesignationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for securitydesignations.
     */
    cursor?: securitydesignationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` securitydesignations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` securitydesignations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of securitydesignations.
     */
    distinct?:
      | SecuritydesignationsScalarFieldEnum
      | SecuritydesignationsScalarFieldEnum[];
  };

  /**
   * securitydesignations findMany
   */
  export type securitydesignationsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * Filter, which securitydesignations to fetch.
     */
    where?: securitydesignationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of securitydesignations to fetch.
     */
    orderBy?:
      | securitydesignationsOrderByWithRelationInput
      | securitydesignationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing securitydesignations.
     */
    cursor?: securitydesignationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` securitydesignations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` securitydesignations.
     */
    skip?: number;
    distinct?:
      | SecuritydesignationsScalarFieldEnum
      | SecuritydesignationsScalarFieldEnum[];
  };

  /**
   * securitydesignations create
   */
  export type securitydesignationsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * The data needed to create a securitydesignations.
     */
    data?: XOR<
      securitydesignationsCreateInput,
      securitydesignationsUncheckedCreateInput
    >;
  };

  /**
   * securitydesignations createMany
   */
  export type securitydesignationsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many securitydesignations.
     */
    data:
      | securitydesignationsCreateManyInput
      | securitydesignationsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * securitydesignations update
   */
  export type securitydesignationsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * The data needed to update a securitydesignations.
     */
    data: XOR<
      securitydesignationsUpdateInput,
      securitydesignationsUncheckedUpdateInput
    >;
    /**
     * Choose, which securitydesignations to update.
     */
    where: securitydesignationsWhereUniqueInput;
  };

  /**
   * securitydesignations updateMany
   */
  export type securitydesignationsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update securitydesignations.
     */
    data: XOR<
      securitydesignationsUpdateManyMutationInput,
      securitydesignationsUncheckedUpdateManyInput
    >;
    /**
     * Filter which securitydesignations to update
     */
    where?: securitydesignationsWhereInput;
  };

  /**
   * securitydesignations upsert
   */
  export type securitydesignationsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * The filter to search for the securitydesignations to update in case it exists.
     */
    where: securitydesignationsWhereUniqueInput;
    /**
     * In case the securitydesignations found by the `where` argument doesn't exist, create a new securitydesignations with this data.
     */
    create: XOR<
      securitydesignationsCreateInput,
      securitydesignationsUncheckedCreateInput
    >;
    /**
     * In case the securitydesignations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      securitydesignationsUpdateInput,
      securitydesignationsUncheckedUpdateInput
    >;
  };

  /**
   * securitydesignations delete
   */
  export type securitydesignationsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    /**
     * Filter which securitydesignations to delete.
     */
    where: securitydesignationsWhereUniqueInput;
  };

  /**
   * securitydesignations deleteMany
   */
  export type securitydesignationsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which securitydesignations to delete
     */
    where?: securitydesignationsWhereInput;
  };

  /**
   * securitydesignations.transactions
   */
  export type securitydesignations$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * securitydesignations.underlyingsecurities
   */
  export type securitydesignations$underlyingsecuritiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    where?: underlyingsecuritiesWhereInput;
    orderBy?:
      | underlyingsecuritiesOrderByWithRelationInput
      | underlyingsecuritiesOrderByWithRelationInput[];
    cursor?: underlyingsecuritiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UnderlyingsecuritiesScalarFieldEnum
      | UnderlyingsecuritiesScalarFieldEnum[];
  };

  /**
   * securitydesignations without action
   */
  export type securitydesignationsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
  };

  /**
   * Model sizes
   */

  export type AggregateSizes = {
    _count: SizesCountAggregateOutputType | null;
    _avg: SizesAvgAggregateOutputType | null;
    _sum: SizesSumAggregateOutputType | null;
    _min: SizesMinAggregateOutputType | null;
    _max: SizesMaxAggregateOutputType | null;
  };

  export type SizesAvgAggregateOutputType = {
    id: number | null;
  };

  export type SizesSumAggregateOutputType = {
    id: number | null;
  };

  export type SizesMinAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type SizesMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type SizesCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type SizesAvgAggregateInputType = {
    id?: true;
  };

  export type SizesSumAggregateInputType = {
    id?: true;
  };

  export type SizesMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type SizesMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type SizesCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type SizesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which sizes to aggregate.
     */
    where?: sizesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizesOrderByWithRelationInput | sizesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: sizesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sizes
     **/
    _count?: true | SizesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SizesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SizesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SizesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SizesMaxAggregateInputType;
  };

  export type GetSizesAggregateType<T extends SizesAggregateArgs> = {
    [P in keyof T & keyof AggregateSizes]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSizes[P]>
      : GetScalarType<T[P], AggregateSizes[P]>;
  };

  export type sizesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: sizesWhereInput;
    orderBy?:
      | sizesOrderByWithAggregationInput
      | sizesOrderByWithAggregationInput[];
    by: SizesScalarFieldEnum[] | SizesScalarFieldEnum;
    having?: sizesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SizesCountAggregateInputType | true;
    _avg?: SizesAvgAggregateInputType;
    _sum?: SizesSumAggregateInputType;
    _min?: SizesMinAggregateInputType;
    _max?: SizesMaxAggregateInputType;
  };

  export type SizesGroupByOutputType = {
    id: number;
    name: string | null;
    _count: SizesCountAggregateOutputType | null;
    _avg: SizesAvgAggregateOutputType | null;
    _sum: SizesSumAggregateOutputType | null;
    _min: SizesMinAggregateOutputType | null;
    _max: SizesMaxAggregateOutputType | null;
  };

  type GetSizesGroupByPayload<T extends sizesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SizesGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SizesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizesGroupByOutputType[P]>
            : GetScalarType<T[P], SizesGroupByOutputType[P]>;
        }
      >
    >;

  export type sizesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      issuers?: boolean | sizes$issuersArgs<ExtArgs>;
      _count?: boolean | SizesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sizes"]
  >;

  export type sizesSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type sizesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuers?: boolean | sizes$issuersArgs<ExtArgs>;
    _count?: boolean | SizesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $sizesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "sizes";
    objects: {
      issuers: Prisma.$issuersPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string | null;
      },
      ExtArgs["result"]["sizes"]
    >;
    composites: {};
  };

  type sizesGetPayload<
    S extends boolean | null | undefined | sizesDefaultArgs
  > = $Result.GetResult<Prisma.$sizesPayload, S>;

  type sizesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<sizesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: SizesCountAggregateInputType | true;
  };

  export interface sizesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["sizes"];
      meta: { name: "sizes" };
    };

    /**
     * Find zero or one Sizes that matches the filter.
     * @param {sizesFindUniqueArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends sizesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sizesFindUniqueArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Sizes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sizesFindUniqueOrThrowArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends sizesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sizesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesFindFirstArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends sizesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sizesFindFirstArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Sizes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesFindFirstOrThrowArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends sizesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sizesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.sizes.findMany()
     *
     * // Get first 10 Sizes
     * const sizes = await prisma.sizes.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sizesWithIdOnly = await prisma.sizes.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends sizesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sizesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Sizes.
     * @param {sizesCreateArgs} args - Arguments to create a Sizes.
     * @example
     * // Create one Sizes
     * const Sizes = await prisma.sizes.create({
     *   data: {
     *     // ... data to create a Sizes
     *   }
     * })
     *
     **/
    create<T extends sizesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sizesCreateArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Sizes.
     * @param {sizesCreateManyArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const sizes = await prisma.sizes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends sizesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sizesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Sizes.
     * @param {sizesDeleteArgs} args - Arguments to delete one Sizes.
     * @example
     * // Delete one Sizes
     * const Sizes = await prisma.sizes.delete({
     *   where: {
     *     // ... filter to delete one Sizes
     *   }
     * })
     *
     **/
    delete<T extends sizesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sizesDeleteArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Sizes.
     * @param {sizesUpdateArgs} args - Arguments to update one Sizes.
     * @example
     * // Update one Sizes
     * const sizes = await prisma.sizes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends sizesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sizesUpdateArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Sizes.
     * @param {sizesDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.sizes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends sizesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sizesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const sizes = await prisma.sizes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends sizesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sizesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Sizes.
     * @param {sizesUpsertArgs} args - Arguments to update or create a Sizes.
     * @example
     * // Update or create a Sizes
     * const sizes = await prisma.sizes.upsert({
     *   create: {
     *     // ... data to create a Sizes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sizes we want to update
     *   }
     * })
     **/
    upsert<T extends sizesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sizesUpsertArgs<ExtArgs>>
    ): Prisma__sizesClient<
      $Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.sizes.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
     **/
    count<T extends sizesCountArgs>(
      args?: Subset<T, sizesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SizesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SizesAggregateArgs>(
      args: Subset<T, SizesAggregateArgs>
    ): Prisma.PrismaPromise<GetSizesAggregateType<T>>;

    /**
     * Group by Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends sizesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sizesGroupByArgs["orderBy"] }
        : { orderBy?: sizesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, sizesGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetSizesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the sizes model
     */
    readonly fields: sizesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sizes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sizesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    issuers<T extends sizes$issuersArgs<ExtArgs> = {}>(
      args?: Subset<T, sizes$issuersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sizes model
   */
  interface sizesFieldRefs {
    readonly id: FieldRef<"sizes", "Int">;
    readonly name: FieldRef<"sizes", "String">;
  }

  // Custom InputTypes
  /**
   * sizes findUnique
   */
  export type sizesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * Filter, which sizes to fetch.
     */
    where: sizesWhereUniqueInput;
  };

  /**
   * sizes findUniqueOrThrow
   */
  export type sizesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * Filter, which sizes to fetch.
     */
    where: sizesWhereUniqueInput;
  };

  /**
   * sizes findFirst
   */
  export type sizesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * Filter, which sizes to fetch.
     */
    where?: sizesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizesOrderByWithRelationInput | sizesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sizes.
     */
    cursor?: sizesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sizes.
     */
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[];
  };

  /**
   * sizes findFirstOrThrow
   */
  export type sizesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * Filter, which sizes to fetch.
     */
    where?: sizesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizesOrderByWithRelationInput | sizesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sizes.
     */
    cursor?: sizesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sizes.
     */
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[];
  };

  /**
   * sizes findMany
   */
  export type sizesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * Filter, which sizes to fetch.
     */
    where?: sizesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizesOrderByWithRelationInput | sizesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sizes.
     */
    cursor?: sizesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sizes.
     */
    skip?: number;
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[];
  };

  /**
   * sizes create
   */
  export type sizesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * The data needed to create a sizes.
     */
    data?: XOR<sizesCreateInput, sizesUncheckedCreateInput>;
  };

  /**
   * sizes createMany
   */
  export type sizesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many sizes.
     */
    data: sizesCreateManyInput | sizesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sizes update
   */
  export type sizesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * The data needed to update a sizes.
     */
    data: XOR<sizesUpdateInput, sizesUncheckedUpdateInput>;
    /**
     * Choose, which sizes to update.
     */
    where: sizesWhereUniqueInput;
  };

  /**
   * sizes updateMany
   */
  export type sizesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update sizes.
     */
    data: XOR<sizesUpdateManyMutationInput, sizesUncheckedUpdateManyInput>;
    /**
     * Filter which sizes to update
     */
    where?: sizesWhereInput;
  };

  /**
   * sizes upsert
   */
  export type sizesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * The filter to search for the sizes to update in case it exists.
     */
    where: sizesWhereUniqueInput;
    /**
     * In case the sizes found by the `where` argument doesn't exist, create a new sizes with this data.
     */
    create: XOR<sizesCreateInput, sizesUncheckedCreateInput>;
    /**
     * In case the sizes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sizesUpdateInput, sizesUncheckedUpdateInput>;
  };

  /**
   * sizes delete
   */
  export type sizesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
    /**
     * Filter which sizes to delete.
     */
    where: sizesWhereUniqueInput;
  };

  /**
   * sizes deleteMany
   */
  export type sizesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which sizes to delete
     */
    where?: sizesWhereInput;
  };

  /**
   * sizes.issuers
   */
  export type sizes$issuersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    where?: issuersWhereInput;
    orderBy?:
      | issuersOrderByWithRelationInput
      | issuersOrderByWithRelationInput[];
    cursor?: issuersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IssuersScalarFieldEnum | IssuersScalarFieldEnum[];
  };

  /**
   * sizes without action
   */
  export type sizesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizesInclude<ExtArgs> | null;
  };

  /**
   * Model tickers
   */

  export type AggregateTickers = {
    _count: TickersCountAggregateOutputType | null;
    _avg: TickersAvgAggregateOutputType | null;
    _sum: TickersSumAggregateOutputType | null;
    _min: TickersMinAggregateOutputType | null;
    _max: TickersMaxAggregateOutputType | null;
  };

  export type TickersAvgAggregateOutputType = {
    id: number | null;
  };

  export type TickersSumAggregateOutputType = {
    id: number | null;
  };

  export type TickersMinAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type TickersMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type TickersCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type TickersAvgAggregateInputType = {
    id?: true;
  };

  export type TickersSumAggregateInputType = {
    id?: true;
  };

  export type TickersMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type TickersMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type TickersCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type TickersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which tickers to aggregate.
     */
    where?: tickersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickers to fetch.
     */
    orderBy?:
      | tickersOrderByWithRelationInput
      | tickersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: tickersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tickers
     **/
    _count?: true | TickersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TickersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TickersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TickersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TickersMaxAggregateInputType;
  };

  export type GetTickersAggregateType<T extends TickersAggregateArgs> = {
    [P in keyof T & keyof AggregateTickers]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickers[P]>
      : GetScalarType<T[P], AggregateTickers[P]>;
  };

  export type tickersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: tickersWhereInput;
    orderBy?:
      | tickersOrderByWithAggregationInput
      | tickersOrderByWithAggregationInput[];
    by: TickersScalarFieldEnum[] | TickersScalarFieldEnum;
    having?: tickersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TickersCountAggregateInputType | true;
    _avg?: TickersAvgAggregateInputType;
    _sum?: TickersSumAggregateInputType;
    _min?: TickersMinAggregateInputType;
    _max?: TickersMaxAggregateInputType;
  };

  export type TickersGroupByOutputType = {
    id: number;
    name: string | null;
    _count: TickersCountAggregateOutputType | null;
    _avg: TickersAvgAggregateOutputType | null;
    _sum: TickersSumAggregateOutputType | null;
    _min: TickersMinAggregateOutputType | null;
    _max: TickersMaxAggregateOutputType | null;
  };

  type GetTickersGroupByPayload<T extends tickersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TickersGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof TickersGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TickersGroupByOutputType[P]>
            : GetScalarType<T[P], TickersGroupByOutputType[P]>;
        }
      >
    >;

  export type tickersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      issuers?: boolean | tickers$issuersArgs<ExtArgs>;
      _count?: boolean | TickersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["tickers"]
  >;

  export type tickersSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type tickersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuers?: boolean | tickers$issuersArgs<ExtArgs>;
    _count?: boolean | TickersCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $tickersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "tickers";
    objects: {
      issuers: Prisma.$issuersPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string | null;
      },
      ExtArgs["result"]["tickers"]
    >;
    composites: {};
  };

  type tickersGetPayload<
    S extends boolean | null | undefined | tickersDefaultArgs
  > = $Result.GetResult<Prisma.$tickersPayload, S>;

  type tickersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<tickersFindManyArgs, "select" | "include" | "distinct"> & {
    select?: TickersCountAggregateInputType | true;
  };

  export interface tickersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["tickers"];
      meta: { name: "tickers" };
    };

    /**
     * Find zero or one Tickers that matches the filter.
     * @param {tickersFindUniqueArgs} args - Arguments to find a Tickers
     * @example
     * // Get one Tickers
     * const tickers = await prisma.tickers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends tickersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tickersFindUniqueArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<
        Prisma.$tickersPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Tickers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tickersFindUniqueOrThrowArgs} args - Arguments to find a Tickers
     * @example
     * // Get one Tickers
     * const tickers = await prisma.tickers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends tickersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tickersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<
        Prisma.$tickersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Tickers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tickersFindFirstArgs} args - Arguments to find a Tickers
     * @example
     * // Get one Tickers
     * const tickers = await prisma.tickers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends tickersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tickersFindFirstArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<Prisma.$tickersPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Tickers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tickersFindFirstOrThrowArgs} args - Arguments to find a Tickers
     * @example
     * // Get one Tickers
     * const tickers = await prisma.tickers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends tickersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tickersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<Prisma.$tickersPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Tickers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tickersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickers
     * const tickers = await prisma.tickers.findMany()
     *
     * // Get first 10 Tickers
     * const tickers = await prisma.tickers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tickersWithIdOnly = await prisma.tickers.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends tickersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tickersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$tickersPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Tickers.
     * @param {tickersCreateArgs} args - Arguments to create a Tickers.
     * @example
     * // Create one Tickers
     * const Tickers = await prisma.tickers.create({
     *   data: {
     *     // ... data to create a Tickers
     *   }
     * })
     *
     **/
    create<T extends tickersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tickersCreateArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<Prisma.$tickersPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Tickers.
     * @param {tickersCreateManyArgs} args - Arguments to create many Tickers.
     * @example
     * // Create many Tickers
     * const tickers = await prisma.tickers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends tickersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tickersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tickers.
     * @param {tickersDeleteArgs} args - Arguments to delete one Tickers.
     * @example
     * // Delete one Tickers
     * const Tickers = await prisma.tickers.delete({
     *   where: {
     *     // ... filter to delete one Tickers
     *   }
     * })
     *
     **/
    delete<T extends tickersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tickersDeleteArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<Prisma.$tickersPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Tickers.
     * @param {tickersUpdateArgs} args - Arguments to update one Tickers.
     * @example
     * // Update one Tickers
     * const tickers = await prisma.tickers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends tickersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tickersUpdateArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<Prisma.$tickersPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Tickers.
     * @param {tickersDeleteManyArgs} args - Arguments to filter Tickers to delete.
     * @example
     * // Delete a few Tickers
     * const { count } = await prisma.tickers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends tickersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tickersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tickersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickers
     * const tickers = await prisma.tickers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends tickersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tickersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tickers.
     * @param {tickersUpsertArgs} args - Arguments to update or create a Tickers.
     * @example
     * // Update or create a Tickers
     * const tickers = await prisma.tickers.upsert({
     *   create: {
     *     // ... data to create a Tickers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickers we want to update
     *   }
     * })
     **/
    upsert<T extends tickersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tickersUpsertArgs<ExtArgs>>
    ): Prisma__tickersClient<
      $Result.GetResult<Prisma.$tickersPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tickersCountArgs} args - Arguments to filter Tickers to count.
     * @example
     * // Count the number of Tickers
     * const count = await prisma.tickers.count({
     *   where: {
     *     // ... the filter for the Tickers we want to count
     *   }
     * })
     **/
    count<T extends tickersCountArgs>(
      args?: Subset<T, tickersCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TickersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TickersAggregateArgs>(
      args: Subset<T, TickersAggregateArgs>
    ): Prisma.PrismaPromise<GetTickersAggregateType<T>>;

    /**
     * Group by Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tickersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends tickersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tickersGroupByArgs["orderBy"] }
        : { orderBy?: tickersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, tickersGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTickersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the tickers model
     */
    readonly fields: tickersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tickers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tickersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    issuers<T extends tickers$issuersArgs<ExtArgs> = {}>(
      args?: Subset<T, tickers$issuersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$issuersPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the tickers model
   */
  interface tickersFieldRefs {
    readonly id: FieldRef<"tickers", "Int">;
    readonly name: FieldRef<"tickers", "String">;
  }

  // Custom InputTypes
  /**
   * tickers findUnique
   */
  export type tickersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * Filter, which tickers to fetch.
     */
    where: tickersWhereUniqueInput;
  };

  /**
   * tickers findUniqueOrThrow
   */
  export type tickersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * Filter, which tickers to fetch.
     */
    where: tickersWhereUniqueInput;
  };

  /**
   * tickers findFirst
   */
  export type tickersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * Filter, which tickers to fetch.
     */
    where?: tickersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickers to fetch.
     */
    orderBy?:
      | tickersOrderByWithRelationInput
      | tickersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tickers.
     */
    cursor?: tickersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tickers.
     */
    distinct?: TickersScalarFieldEnum | TickersScalarFieldEnum[];
  };

  /**
   * tickers findFirstOrThrow
   */
  export type tickersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * Filter, which tickers to fetch.
     */
    where?: tickersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickers to fetch.
     */
    orderBy?:
      | tickersOrderByWithRelationInput
      | tickersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tickers.
     */
    cursor?: tickersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tickers.
     */
    distinct?: TickersScalarFieldEnum | TickersScalarFieldEnum[];
  };

  /**
   * tickers findMany
   */
  export type tickersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * Filter, which tickers to fetch.
     */
    where?: tickersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickers to fetch.
     */
    orderBy?:
      | tickersOrderByWithRelationInput
      | tickersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tickers.
     */
    cursor?: tickersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickers.
     */
    skip?: number;
    distinct?: TickersScalarFieldEnum | TickersScalarFieldEnum[];
  };

  /**
   * tickers create
   */
  export type tickersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * The data needed to create a tickers.
     */
    data?: XOR<tickersCreateInput, tickersUncheckedCreateInput>;
  };

  /**
   * tickers createMany
   */
  export type tickersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many tickers.
     */
    data: tickersCreateManyInput | tickersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * tickers update
   */
  export type tickersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * The data needed to update a tickers.
     */
    data: XOR<tickersUpdateInput, tickersUncheckedUpdateInput>;
    /**
     * Choose, which tickers to update.
     */
    where: tickersWhereUniqueInput;
  };

  /**
   * tickers updateMany
   */
  export type tickersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update tickers.
     */
    data: XOR<tickersUpdateManyMutationInput, tickersUncheckedUpdateManyInput>;
    /**
     * Filter which tickers to update
     */
    where?: tickersWhereInput;
  };

  /**
   * tickers upsert
   */
  export type tickersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * The filter to search for the tickers to update in case it exists.
     */
    where: tickersWhereUniqueInput;
    /**
     * In case the tickers found by the `where` argument doesn't exist, create a new tickers with this data.
     */
    create: XOR<tickersCreateInput, tickersUncheckedCreateInput>;
    /**
     * In case the tickers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tickersUpdateInput, tickersUncheckedUpdateInput>;
  };

  /**
   * tickers delete
   */
  export type tickersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
    /**
     * Filter which tickers to delete.
     */
    where: tickersWhereUniqueInput;
  };

  /**
   * tickers deleteMany
   */
  export type tickersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which tickers to delete
     */
    where?: tickersWhereInput;
  };

  /**
   * tickers.issuers
   */
  export type tickers$issuersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    where?: issuersWhereInput;
    orderBy?:
      | issuersOrderByWithRelationInput
      | issuersOrderByWithRelationInput[];
    cursor?: issuersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IssuersScalarFieldEnum | IssuersScalarFieldEnum[];
  };

  /**
   * tickers without action
   */
  export type tickersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the tickers
     */
    select?: tickersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tickersInclude<ExtArgs> | null;
  };

  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null;
    _avg: TransactionsAvgAggregateOutputType | null;
    _sum: TransactionsSumAggregateOutputType | null;
    _min: TransactionsMinAggregateOutputType | null;
    _max: TransactionsMaxAggregateOutputType | null;
  };

  export type TransactionsAvgAggregateOutputType = {
    id: number | null;
    sediId: number | null;
    insiderId: number | null;
    issuerId: number | null;
    securityId: number | null;
    trnFlagId: number | null;
    trnNatureCode: number | null;
    nb: number | null;
    price: number | null;
    priceCurrencyId: number | null;
    closingBalance: number | null;
    calculatedBalance: number | null;
    underlyingSecurityId: number | null;
  };

  export type TransactionsSumAggregateOutputType = {
    id: number | null;
    sediId: number | null;
    insiderId: number | null;
    issuerId: number | null;
    securityId: number | null;
    trnFlagId: number | null;
    trnNatureCode: number | null;
    nb: number | null;
    price: number | null;
    priceCurrencyId: number | null;
    closingBalance: number | null;
    calculatedBalance: number | null;
    underlyingSecurityId: number | null;
  };

  export type TransactionsMinAggregateOutputType = {
    id: number | null;
    sediId: number | null;
    insiderId: number | null;
    issuerId: number | null;
    securityId: number | null;
    trnFlagId: number | null;
    trnDate: Date | null;
    filingDate: Date | null;
    ownershipType: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo: string | null;
    trnNatureCode: number | null;
    nb: number | null;
    nbType: $Enums.transactions_nbType | null;
    price: number | null;
    priceCurrencyId: number | null;
    closingBalance: number | null;
    closingBalanceType: $Enums.transactions_closingBalanceType | null;
    calculatedBalance: number | null;
    calculatedBalanceType: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId: number | null;
    GeneralRemarks: string | null;
  };

  export type TransactionsMaxAggregateOutputType = {
    id: number | null;
    sediId: number | null;
    insiderId: number | null;
    issuerId: number | null;
    securityId: number | null;
    trnFlagId: number | null;
    trnDate: Date | null;
    filingDate: Date | null;
    ownershipType: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo: string | null;
    trnNatureCode: number | null;
    nb: number | null;
    nbType: $Enums.transactions_nbType | null;
    price: number | null;
    priceCurrencyId: number | null;
    closingBalance: number | null;
    closingBalanceType: $Enums.transactions_closingBalanceType | null;
    calculatedBalance: number | null;
    calculatedBalanceType: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId: number | null;
    GeneralRemarks: string | null;
  };

  export type TransactionsCountAggregateOutputType = {
    id: number;
    sediId: number;
    insiderId: number;
    issuerId: number;
    securityId: number;
    trnFlagId: number;
    trnDate: number;
    filingDate: number;
    ownershipType: number;
    ownershipExtraInfo: number;
    trnNatureCode: number;
    nb: number;
    nbType: number;
    price: number;
    priceCurrencyId: number;
    closingBalance: number;
    closingBalanceType: number;
    calculatedBalance: number;
    calculatedBalanceType: number;
    underlyingSecurityId: number;
    GeneralRemarks: number;
    _all: number;
  };

  export type TransactionsAvgAggregateInputType = {
    id?: true;
    sediId?: true;
    insiderId?: true;
    issuerId?: true;
    securityId?: true;
    trnFlagId?: true;
    trnNatureCode?: true;
    nb?: true;
    price?: true;
    priceCurrencyId?: true;
    closingBalance?: true;
    calculatedBalance?: true;
    underlyingSecurityId?: true;
  };

  export type TransactionsSumAggregateInputType = {
    id?: true;
    sediId?: true;
    insiderId?: true;
    issuerId?: true;
    securityId?: true;
    trnFlagId?: true;
    trnNatureCode?: true;
    nb?: true;
    price?: true;
    priceCurrencyId?: true;
    closingBalance?: true;
    calculatedBalance?: true;
    underlyingSecurityId?: true;
  };

  export type TransactionsMinAggregateInputType = {
    id?: true;
    sediId?: true;
    insiderId?: true;
    issuerId?: true;
    securityId?: true;
    trnFlagId?: true;
    trnDate?: true;
    filingDate?: true;
    ownershipType?: true;
    ownershipExtraInfo?: true;
    trnNatureCode?: true;
    nb?: true;
    nbType?: true;
    price?: true;
    priceCurrencyId?: true;
    closingBalance?: true;
    closingBalanceType?: true;
    calculatedBalance?: true;
    calculatedBalanceType?: true;
    underlyingSecurityId?: true;
    GeneralRemarks?: true;
  };

  export type TransactionsMaxAggregateInputType = {
    id?: true;
    sediId?: true;
    insiderId?: true;
    issuerId?: true;
    securityId?: true;
    trnFlagId?: true;
    trnDate?: true;
    filingDate?: true;
    ownershipType?: true;
    ownershipExtraInfo?: true;
    trnNatureCode?: true;
    nb?: true;
    nbType?: true;
    price?: true;
    priceCurrencyId?: true;
    closingBalance?: true;
    closingBalanceType?: true;
    calculatedBalance?: true;
    calculatedBalanceType?: true;
    underlyingSecurityId?: true;
    GeneralRemarks?: true;
  };

  export type TransactionsCountAggregateInputType = {
    id?: true;
    sediId?: true;
    insiderId?: true;
    issuerId?: true;
    securityId?: true;
    trnFlagId?: true;
    trnDate?: true;
    filingDate?: true;
    ownershipType?: true;
    ownershipExtraInfo?: true;
    trnNatureCode?: true;
    nb?: true;
    nbType?: true;
    price?: true;
    priceCurrencyId?: true;
    closingBalance?: true;
    closingBalanceType?: true;
    calculatedBalance?: true;
    calculatedBalanceType?: true;
    underlyingSecurityId?: true;
    GeneralRemarks?: true;
    _all?: true;
  };

  export type TransactionsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned transactions
     **/
    _count?: true | TransactionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionsMaxAggregateInputType;
  };

  export type GetTransactionsAggregateType<
    T extends TransactionsAggregateArgs
  > = {
    [P in keyof T & keyof AggregateTransactions]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>;
  };

  export type transactionsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithAggregationInput
      | transactionsOrderByWithAggregationInput[];
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum;
    having?: transactionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionsCountAggregateInputType | true;
    _avg?: TransactionsAvgAggregateInputType;
    _sum?: TransactionsSumAggregateInputType;
    _min?: TransactionsMinAggregateInputType;
    _max?: TransactionsMaxAggregateInputType;
  };

  export type TransactionsGroupByOutputType = {
    id: number;
    sediId: number | null;
    insiderId: number | null;
    issuerId: number | null;
    securityId: number | null;
    trnFlagId: number | null;
    trnDate: Date | null;
    filingDate: Date | null;
    ownershipType: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo: string | null;
    trnNatureCode: number | null;
    nb: number | null;
    nbType: $Enums.transactions_nbType | null;
    price: number | null;
    priceCurrencyId: number | null;
    closingBalance: number | null;
    closingBalanceType: $Enums.transactions_closingBalanceType | null;
    calculatedBalance: number | null;
    calculatedBalanceType: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId: number | null;
    GeneralRemarks: string | null;
    _count: TransactionsCountAggregateOutputType | null;
    _avg: TransactionsAvgAggregateOutputType | null;
    _sum: TransactionsSumAggregateOutputType | null;
    _min: TransactionsMinAggregateOutputType | null;
    _max: TransactionsMaxAggregateOutputType | null;
  };

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionsGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof TransactionsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>;
        }
      >
    >;

  export type transactionsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sediId?: boolean;
      insiderId?: boolean;
      issuerId?: boolean;
      securityId?: boolean;
      trnFlagId?: boolean;
      trnDate?: boolean;
      filingDate?: boolean;
      ownershipType?: boolean;
      ownershipExtraInfo?: boolean;
      trnNatureCode?: boolean;
      nb?: boolean;
      nbType?: boolean;
      price?: boolean;
      priceCurrencyId?: boolean;
      closingBalance?: boolean;
      closingBalanceType?: boolean;
      calculatedBalance?: boolean;
      calculatedBalanceType?: boolean;
      underlyingSecurityId?: boolean;
      GeneralRemarks?: boolean;
      issuers?: boolean | transactions$issuersArgs<ExtArgs>;
      insiders?: boolean | transactions$insidersArgs<ExtArgs>;
      securitydesignations?:
        | boolean
        | transactions$securitydesignationsArgs<ExtArgs>;
      trnflag?: boolean | transactions$trnflagArgs<ExtArgs>;
      trnnatures?: boolean | transactions$trnnaturesArgs<ExtArgs>;
      underlyingsecurities?:
        | boolean
        | transactions$underlyingsecuritiesArgs<ExtArgs>;
      currency?: boolean | transactions$currencyArgs<ExtArgs>;
    },
    ExtArgs["result"]["transactions"]
  >;

  export type transactionsSelectScalar = {
    id?: boolean;
    sediId?: boolean;
    insiderId?: boolean;
    issuerId?: boolean;
    securityId?: boolean;
    trnFlagId?: boolean;
    trnDate?: boolean;
    filingDate?: boolean;
    ownershipType?: boolean;
    ownershipExtraInfo?: boolean;
    trnNatureCode?: boolean;
    nb?: boolean;
    nbType?: boolean;
    price?: boolean;
    priceCurrencyId?: boolean;
    closingBalance?: boolean;
    closingBalanceType?: boolean;
    calculatedBalance?: boolean;
    calculatedBalanceType?: boolean;
    underlyingSecurityId?: boolean;
    GeneralRemarks?: boolean;
  };

  export type transactionsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    issuers?: boolean | transactions$issuersArgs<ExtArgs>;
    insiders?: boolean | transactions$insidersArgs<ExtArgs>;
    securitydesignations?:
      | boolean
      | transactions$securitydesignationsArgs<ExtArgs>;
    trnflag?: boolean | transactions$trnflagArgs<ExtArgs>;
    trnnatures?: boolean | transactions$trnnaturesArgs<ExtArgs>;
    underlyingsecurities?:
      | boolean
      | transactions$underlyingsecuritiesArgs<ExtArgs>;
    currency?: boolean | transactions$currencyArgs<ExtArgs>;
  };

  export type $transactionsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "transactions";
    objects: {
      issuers: Prisma.$issuersPayload<ExtArgs> | null;
      insiders: Prisma.$insidersPayload<ExtArgs> | null;
      securitydesignations: Prisma.$securitydesignationsPayload<ExtArgs> | null;
      trnflag: Prisma.$trnflagPayload<ExtArgs> | null;
      trnnatures: Prisma.$trnnaturesPayload<ExtArgs> | null;
      underlyingsecurities: Prisma.$underlyingsecuritiesPayload<ExtArgs> | null;
      currency: Prisma.$currencyPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        sediId: number | null;
        insiderId: number | null;
        issuerId: number | null;
        securityId: number | null;
        trnFlagId: number | null;
        trnDate: Date | null;
        filingDate: Date | null;
        ownershipType: $Enums.transactions_ownershipType | null;
        ownershipExtraInfo: string | null;
        trnNatureCode: number | null;
        nb: number | null;
        nbType: $Enums.transactions_nbType | null;
        price: number | null;
        priceCurrencyId: number | null;
        closingBalance: number | null;
        closingBalanceType: $Enums.transactions_closingBalanceType | null;
        calculatedBalance: number | null;
        calculatedBalanceType: $Enums.transactions_calculatedBalanceType | null;
        underlyingSecurityId: number | null;
        GeneralRemarks: string | null;
      },
      ExtArgs["result"]["transactions"]
    >;
    composites: {};
  };

  type transactionsGetPayload<
    S extends boolean | null | undefined | transactionsDefaultArgs
  > = $Result.GetResult<Prisma.$transactionsPayload, S>;

  type transactionsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<transactionsFindManyArgs, "select" | "include" | "distinct"> & {
    select?: TransactionsCountAggregateInputType | true;
  };

  export interface transactionsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["transactions"];
      meta: { name: "transactions" };
    };

    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends transactionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends transactionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends transactionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     *
     **/
    create<T extends transactionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>
    ): Prisma__transactionsClient<
      $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends transactionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     *
     **/
    delete<T extends transactionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>
    ): Prisma__transactionsClient<
      $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends transactionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>
    ): Prisma__transactionsClient<
      $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends transactionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends transactionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     **/
    upsert<T extends transactionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>
    ): Prisma__transactionsClient<
      $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
     **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TransactionsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TransactionsAggregateArgs>(
      args: Subset<T, TransactionsAggregateArgs>
    ): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>;

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs["orderBy"] }
        : { orderBy?: transactionsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetTransactionsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the transactions model
     */
    readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    issuers<T extends transactions$issuersArgs<ExtArgs> = {}>(
      args?: Subset<T, transactions$issuersArgs<ExtArgs>>
    ): Prisma__issuersClient<
      $Result.GetResult<
        Prisma.$issuersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    insiders<T extends transactions$insidersArgs<ExtArgs> = {}>(
      args?: Subset<T, transactions$insidersArgs<ExtArgs>>
    ): Prisma__insidersClient<
      $Result.GetResult<
        Prisma.$insidersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    securitydesignations<
      T extends transactions$securitydesignationsArgs<ExtArgs> = {}
    >(
      args?: Subset<T, transactions$securitydesignationsArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    trnflag<T extends transactions$trnflagArgs<ExtArgs> = {}>(
      args?: Subset<T, transactions$trnflagArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<
        Prisma.$trnflagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    trnnatures<T extends transactions$trnnaturesArgs<ExtArgs> = {}>(
      args?: Subset<T, transactions$trnnaturesArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<
        Prisma.$trnnaturesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    underlyingsecurities<
      T extends transactions$underlyingsecuritiesArgs<ExtArgs> = {}
    >(
      args?: Subset<T, transactions$underlyingsecuritiesArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    currency<T extends transactions$currencyArgs<ExtArgs> = {}>(
      args?: Subset<T, transactions$currencyArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<
        Prisma.$currencyPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", "Int">;
    readonly sediId: FieldRef<"transactions", "Int">;
    readonly insiderId: FieldRef<"transactions", "Int">;
    readonly issuerId: FieldRef<"transactions", "Int">;
    readonly securityId: FieldRef<"transactions", "Int">;
    readonly trnFlagId: FieldRef<"transactions", "Int">;
    readonly trnDate: FieldRef<"transactions", "DateTime">;
    readonly filingDate: FieldRef<"transactions", "DateTime">;
    readonly ownershipType: FieldRef<
      "transactions",
      "transactions_ownershipType"
    >;
    readonly ownershipExtraInfo: FieldRef<"transactions", "String">;
    readonly trnNatureCode: FieldRef<"transactions", "Int">;
    readonly nb: FieldRef<"transactions", "Int">;
    readonly nbType: FieldRef<"transactions", "transactions_nbType">;
    readonly price: FieldRef<"transactions", "Float">;
    readonly priceCurrencyId: FieldRef<"transactions", "Int">;
    readonly closingBalance: FieldRef<"transactions", "Float">;
    readonly closingBalanceType: FieldRef<
      "transactions",
      "transactions_closingBalanceType"
    >;
    readonly calculatedBalance: FieldRef<"transactions", "Float">;
    readonly calculatedBalanceType: FieldRef<
      "transactions",
      "transactions_calculatedBalanceType"
    >;
    readonly underlyingSecurityId: FieldRef<"transactions", "Int">;
    readonly GeneralRemarks: FieldRef<"transactions", "String">;
  }

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput;
  };

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput;
  };

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * transactions create
   */
  export type transactionsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a transactions.
     */
    data?: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>;
  };

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>;
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput;
  };

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update transactions.
     */
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyInput
    >;
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput;
  };

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput;
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>;
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>;
  };

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput;
  };

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput;
  };

  /**
   * transactions.issuers
   */
  export type transactions$issuersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the issuers
     */
    select?: issuersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: issuersInclude<ExtArgs> | null;
    where?: issuersWhereInput;
  };

  /**
   * transactions.insiders
   */
  export type transactions$insidersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the insiders
     */
    select?: insidersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insidersInclude<ExtArgs> | null;
    where?: insidersWhereInput;
  };

  /**
   * transactions.securitydesignations
   */
  export type transactions$securitydesignationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    where?: securitydesignationsWhereInput;
  };

  /**
   * transactions.trnflag
   */
  export type transactions$trnflagArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    where?: trnflagWhereInput;
  };

  /**
   * transactions.trnnatures
   */
  export type transactions$trnnaturesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    where?: trnnaturesWhereInput;
  };

  /**
   * transactions.underlyingsecurities
   */
  export type transactions$underlyingsecuritiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    where?: underlyingsecuritiesWhereInput;
  };

  /**
   * transactions.currency
   */
  export type transactions$currencyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    where?: currencyWhereInput;
  };

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
  };

  /**
   * Model trnflag
   */

  export type AggregateTrnflag = {
    _count: TrnflagCountAggregateOutputType | null;
    _avg: TrnflagAvgAggregateOutputType | null;
    _sum: TrnflagSumAggregateOutputType | null;
    _min: TrnflagMinAggregateOutputType | null;
    _max: TrnflagMaxAggregateOutputType | null;
  };

  export type TrnflagAvgAggregateOutputType = {
    id: number | null;
  };

  export type TrnflagSumAggregateOutputType = {
    id: number | null;
  };

  export type TrnflagMinAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type TrnflagMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type TrnflagCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type TrnflagAvgAggregateInputType = {
    id?: true;
  };

  export type TrnflagSumAggregateInputType = {
    id?: true;
  };

  export type TrnflagMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type TrnflagMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type TrnflagCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type TrnflagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which trnflag to aggregate.
     */
    where?: trnflagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trnflags to fetch.
     */
    orderBy?:
      | trnflagOrderByWithRelationInput
      | trnflagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: trnflagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trnflags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trnflags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned trnflags
     **/
    _count?: true | TrnflagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TrnflagAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TrnflagSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TrnflagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TrnflagMaxAggregateInputType;
  };

  export type GetTrnflagAggregateType<T extends TrnflagAggregateArgs> = {
    [P in keyof T & keyof AggregateTrnflag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrnflag[P]>
      : GetScalarType<T[P], AggregateTrnflag[P]>;
  };

  export type trnflagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: trnflagWhereInput;
    orderBy?:
      | trnflagOrderByWithAggregationInput
      | trnflagOrderByWithAggregationInput[];
    by: TrnflagScalarFieldEnum[] | TrnflagScalarFieldEnum;
    having?: trnflagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrnflagCountAggregateInputType | true;
    _avg?: TrnflagAvgAggregateInputType;
    _sum?: TrnflagSumAggregateInputType;
    _min?: TrnflagMinAggregateInputType;
    _max?: TrnflagMaxAggregateInputType;
  };

  export type TrnflagGroupByOutputType = {
    id: number;
    name: string | null;
    _count: TrnflagCountAggregateOutputType | null;
    _avg: TrnflagAvgAggregateOutputType | null;
    _sum: TrnflagSumAggregateOutputType | null;
    _min: TrnflagMinAggregateOutputType | null;
    _max: TrnflagMaxAggregateOutputType | null;
  };

  type GetTrnflagGroupByPayload<T extends trnflagGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TrnflagGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof TrnflagGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrnflagGroupByOutputType[P]>
            : GetScalarType<T[P], TrnflagGroupByOutputType[P]>;
        }
      >
    >;

  export type trnflagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      transactions?: boolean | trnflag$transactionsArgs<ExtArgs>;
      _count?: boolean | TrnflagCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["trnflag"]
  >;

  export type trnflagSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type trnflagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?: boolean | trnflag$transactionsArgs<ExtArgs>;
    _count?: boolean | TrnflagCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $trnflagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "trnflag";
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string | null;
      },
      ExtArgs["result"]["trnflag"]
    >;
    composites: {};
  };

  type trnflagGetPayload<
    S extends boolean | null | undefined | trnflagDefaultArgs
  > = $Result.GetResult<Prisma.$trnflagPayload, S>;

  type trnflagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<trnflagFindManyArgs, "select" | "include" | "distinct"> & {
    select?: TrnflagCountAggregateInputType | true;
  };

  export interface trnflagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["trnflag"];
      meta: { name: "trnflag" };
    };

    /**
     * Find zero or one Trnflag that matches the filter.
     * @param {trnflagFindUniqueArgs} args - Arguments to find a Trnflag
     * @example
     * // Get one Trnflag
     * const trnflag = await prisma.trnflag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends trnflagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, trnflagFindUniqueArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<
        Prisma.$trnflagPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Trnflag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trnflagFindUniqueOrThrowArgs} args - Arguments to find a Trnflag
     * @example
     * // Get one Trnflag
     * const trnflag = await prisma.trnflag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends trnflagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trnflagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<
        Prisma.$trnflagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Trnflag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnflagFindFirstArgs} args - Arguments to find a Trnflag
     * @example
     * // Get one Trnflag
     * const trnflag = await prisma.trnflag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends trnflagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, trnflagFindFirstArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<Prisma.$trnflagPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Trnflag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnflagFindFirstOrThrowArgs} args - Arguments to find a Trnflag
     * @example
     * // Get one Trnflag
     * const trnflag = await prisma.trnflag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends trnflagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trnflagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<Prisma.$trnflagPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Trnflags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnflagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trnflags
     * const trnflags = await prisma.trnflag.findMany()
     *
     * // Get first 10 Trnflags
     * const trnflags = await prisma.trnflag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const trnflagWithIdOnly = await prisma.trnflag.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends trnflagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trnflagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$trnflagPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Trnflag.
     * @param {trnflagCreateArgs} args - Arguments to create a Trnflag.
     * @example
     * // Create one Trnflag
     * const Trnflag = await prisma.trnflag.create({
     *   data: {
     *     // ... data to create a Trnflag
     *   }
     * })
     *
     **/
    create<T extends trnflagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, trnflagCreateArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<Prisma.$trnflagPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Trnflags.
     * @param {trnflagCreateManyArgs} args - Arguments to create many Trnflags.
     * @example
     * // Create many Trnflags
     * const trnflag = await prisma.trnflag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends trnflagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trnflagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Trnflag.
     * @param {trnflagDeleteArgs} args - Arguments to delete one Trnflag.
     * @example
     * // Delete one Trnflag
     * const Trnflag = await prisma.trnflag.delete({
     *   where: {
     *     // ... filter to delete one Trnflag
     *   }
     * })
     *
     **/
    delete<T extends trnflagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, trnflagDeleteArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<Prisma.$trnflagPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Trnflag.
     * @param {trnflagUpdateArgs} args - Arguments to update one Trnflag.
     * @example
     * // Update one Trnflag
     * const trnflag = await prisma.trnflag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends trnflagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, trnflagUpdateArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<Prisma.$trnflagPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Trnflags.
     * @param {trnflagDeleteManyArgs} args - Arguments to filter Trnflags to delete.
     * @example
     * // Delete a few Trnflags
     * const { count } = await prisma.trnflag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends trnflagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trnflagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Trnflags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnflagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trnflags
     * const trnflag = await prisma.trnflag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends trnflagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, trnflagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Trnflag.
     * @param {trnflagUpsertArgs} args - Arguments to update or create a Trnflag.
     * @example
     * // Update or create a Trnflag
     * const trnflag = await prisma.trnflag.upsert({
     *   create: {
     *     // ... data to create a Trnflag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trnflag we want to update
     *   }
     * })
     **/
    upsert<T extends trnflagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, trnflagUpsertArgs<ExtArgs>>
    ): Prisma__trnflagClient<
      $Result.GetResult<Prisma.$trnflagPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Trnflags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnflagCountArgs} args - Arguments to filter Trnflags to count.
     * @example
     * // Count the number of Trnflags
     * const count = await prisma.trnflag.count({
     *   where: {
     *     // ... the filter for the Trnflags we want to count
     *   }
     * })
     **/
    count<T extends trnflagCountArgs>(
      args?: Subset<T, trnflagCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TrnflagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Trnflag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrnflagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TrnflagAggregateArgs>(
      args: Subset<T, TrnflagAggregateArgs>
    ): Prisma.PrismaPromise<GetTrnflagAggregateType<T>>;

    /**
     * Group by Trnflag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnflagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends trnflagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trnflagGroupByArgs["orderBy"] }
        : { orderBy?: trnflagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, trnflagGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTrnflagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the trnflag model
     */
    readonly fields: trnflagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trnflag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trnflagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    transactions<T extends trnflag$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, trnflag$transactionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the trnflag model
   */
  interface trnflagFieldRefs {
    readonly id: FieldRef<"trnflag", "Int">;
    readonly name: FieldRef<"trnflag", "String">;
  }

  // Custom InputTypes
  /**
   * trnflag findUnique
   */
  export type trnflagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * Filter, which trnflag to fetch.
     */
    where: trnflagWhereUniqueInput;
  };

  /**
   * trnflag findUniqueOrThrow
   */
  export type trnflagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * Filter, which trnflag to fetch.
     */
    where: trnflagWhereUniqueInput;
  };

  /**
   * trnflag findFirst
   */
  export type trnflagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * Filter, which trnflag to fetch.
     */
    where?: trnflagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trnflags to fetch.
     */
    orderBy?:
      | trnflagOrderByWithRelationInput
      | trnflagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trnflags.
     */
    cursor?: trnflagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trnflags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trnflags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trnflags.
     */
    distinct?: TrnflagScalarFieldEnum | TrnflagScalarFieldEnum[];
  };

  /**
   * trnflag findFirstOrThrow
   */
  export type trnflagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * Filter, which trnflag to fetch.
     */
    where?: trnflagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trnflags to fetch.
     */
    orderBy?:
      | trnflagOrderByWithRelationInput
      | trnflagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trnflags.
     */
    cursor?: trnflagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trnflags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trnflags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trnflags.
     */
    distinct?: TrnflagScalarFieldEnum | TrnflagScalarFieldEnum[];
  };

  /**
   * trnflag findMany
   */
  export type trnflagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * Filter, which trnflags to fetch.
     */
    where?: trnflagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trnflags to fetch.
     */
    orderBy?:
      | trnflagOrderByWithRelationInput
      | trnflagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing trnflags.
     */
    cursor?: trnflagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trnflags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trnflags.
     */
    skip?: number;
    distinct?: TrnflagScalarFieldEnum | TrnflagScalarFieldEnum[];
  };

  /**
   * trnflag create
   */
  export type trnflagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * The data needed to create a trnflag.
     */
    data?: XOR<trnflagCreateInput, trnflagUncheckedCreateInput>;
  };

  /**
   * trnflag createMany
   */
  export type trnflagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many trnflags.
     */
    data: trnflagCreateManyInput | trnflagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * trnflag update
   */
  export type trnflagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * The data needed to update a trnflag.
     */
    data: XOR<trnflagUpdateInput, trnflagUncheckedUpdateInput>;
    /**
     * Choose, which trnflag to update.
     */
    where: trnflagWhereUniqueInput;
  };

  /**
   * trnflag updateMany
   */
  export type trnflagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update trnflags.
     */
    data: XOR<trnflagUpdateManyMutationInput, trnflagUncheckedUpdateManyInput>;
    /**
     * Filter which trnflags to update
     */
    where?: trnflagWhereInput;
  };

  /**
   * trnflag upsert
   */
  export type trnflagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * The filter to search for the trnflag to update in case it exists.
     */
    where: trnflagWhereUniqueInput;
    /**
     * In case the trnflag found by the `where` argument doesn't exist, create a new trnflag with this data.
     */
    create: XOR<trnflagCreateInput, trnflagUncheckedCreateInput>;
    /**
     * In case the trnflag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trnflagUpdateInput, trnflagUncheckedUpdateInput>;
  };

  /**
   * trnflag delete
   */
  export type trnflagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
    /**
     * Filter which trnflag to delete.
     */
    where: trnflagWhereUniqueInput;
  };

  /**
   * trnflag deleteMany
   */
  export type trnflagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which trnflags to delete
     */
    where?: trnflagWhereInput;
  };

  /**
   * trnflag.transactions
   */
  export type trnflag$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * trnflag without action
   */
  export type trnflagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnflag
     */
    select?: trnflagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnflagInclude<ExtArgs> | null;
  };

  /**
   * Model trnnatures
   */

  export type AggregateTrnnatures = {
    _count: TrnnaturesCountAggregateOutputType | null;
    _avg: TrnnaturesAvgAggregateOutputType | null;
    _sum: TrnnaturesSumAggregateOutputType | null;
    _min: TrnnaturesMinAggregateOutputType | null;
    _max: TrnnaturesMaxAggregateOutputType | null;
  };

  export type TrnnaturesAvgAggregateOutputType = {
    code: number | null;
  };

  export type TrnnaturesSumAggregateOutputType = {
    code: number | null;
  };

  export type TrnnaturesMinAggregateOutputType = {
    code: number | null;
    description: string | null;
  };

  export type TrnnaturesMaxAggregateOutputType = {
    code: number | null;
    description: string | null;
  };

  export type TrnnaturesCountAggregateOutputType = {
    code: number;
    description: number;
    _all: number;
  };

  export type TrnnaturesAvgAggregateInputType = {
    code?: true;
  };

  export type TrnnaturesSumAggregateInputType = {
    code?: true;
  };

  export type TrnnaturesMinAggregateInputType = {
    code?: true;
    description?: true;
  };

  export type TrnnaturesMaxAggregateInputType = {
    code?: true;
    description?: true;
  };

  export type TrnnaturesCountAggregateInputType = {
    code?: true;
    description?: true;
    _all?: true;
  };

  export type TrnnaturesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which trnnatures to aggregate.
     */
    where?: trnnaturesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trnnatures to fetch.
     */
    orderBy?:
      | trnnaturesOrderByWithRelationInput
      | trnnaturesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: trnnaturesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trnnatures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trnnatures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned trnnatures
     **/
    _count?: true | TrnnaturesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TrnnaturesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TrnnaturesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TrnnaturesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TrnnaturesMaxAggregateInputType;
  };

  export type GetTrnnaturesAggregateType<T extends TrnnaturesAggregateArgs> = {
    [P in keyof T & keyof AggregateTrnnatures]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrnnatures[P]>
      : GetScalarType<T[P], AggregateTrnnatures[P]>;
  };

  export type trnnaturesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: trnnaturesWhereInput;
    orderBy?:
      | trnnaturesOrderByWithAggregationInput
      | trnnaturesOrderByWithAggregationInput[];
    by: TrnnaturesScalarFieldEnum[] | TrnnaturesScalarFieldEnum;
    having?: trnnaturesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrnnaturesCountAggregateInputType | true;
    _avg?: TrnnaturesAvgAggregateInputType;
    _sum?: TrnnaturesSumAggregateInputType;
    _min?: TrnnaturesMinAggregateInputType;
    _max?: TrnnaturesMaxAggregateInputType;
  };

  export type TrnnaturesGroupByOutputType = {
    code: number;
    description: string | null;
    _count: TrnnaturesCountAggregateOutputType | null;
    _avg: TrnnaturesAvgAggregateOutputType | null;
    _sum: TrnnaturesSumAggregateOutputType | null;
    _min: TrnnaturesMinAggregateOutputType | null;
    _max: TrnnaturesMaxAggregateOutputType | null;
  };

  type GetTrnnaturesGroupByPayload<T extends trnnaturesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TrnnaturesGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof TrnnaturesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrnnaturesGroupByOutputType[P]>
            : GetScalarType<T[P], TrnnaturesGroupByOutputType[P]>;
        }
      >
    >;

  export type trnnaturesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      code?: boolean;
      description?: boolean;
      transactions?: boolean | trnnatures$transactionsArgs<ExtArgs>;
      _count?: boolean | TrnnaturesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["trnnatures"]
  >;

  export type trnnaturesSelectScalar = {
    code?: boolean;
    description?: boolean;
  };

  export type trnnaturesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?: boolean | trnnatures$transactionsArgs<ExtArgs>;
    _count?: boolean | TrnnaturesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $trnnaturesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "trnnatures";
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        code: number;
        description: string | null;
      },
      ExtArgs["result"]["trnnatures"]
    >;
    composites: {};
  };

  type trnnaturesGetPayload<
    S extends boolean | null | undefined | trnnaturesDefaultArgs
  > = $Result.GetResult<Prisma.$trnnaturesPayload, S>;

  type trnnaturesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<trnnaturesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: TrnnaturesCountAggregateInputType | true;
  };

  export interface trnnaturesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["trnnatures"];
      meta: { name: "trnnatures" };
    };

    /**
     * Find zero or one Trnnatures that matches the filter.
     * @param {trnnaturesFindUniqueArgs} args - Arguments to find a Trnnatures
     * @example
     * // Get one Trnnatures
     * const trnnatures = await prisma.trnnatures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends trnnaturesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, trnnaturesFindUniqueArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<
        Prisma.$trnnaturesPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Trnnatures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trnnaturesFindUniqueOrThrowArgs} args - Arguments to find a Trnnatures
     * @example
     * // Get one Trnnatures
     * const trnnatures = await prisma.trnnatures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends trnnaturesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trnnaturesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<
        Prisma.$trnnaturesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Trnnatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnnaturesFindFirstArgs} args - Arguments to find a Trnnatures
     * @example
     * // Get one Trnnatures
     * const trnnatures = await prisma.trnnatures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends trnnaturesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, trnnaturesFindFirstArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<
        Prisma.$trnnaturesPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Trnnatures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnnaturesFindFirstOrThrowArgs} args - Arguments to find a Trnnatures
     * @example
     * // Get one Trnnatures
     * const trnnatures = await prisma.trnnatures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends trnnaturesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trnnaturesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<
        Prisma.$trnnaturesPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Trnnatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnnaturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trnnatures
     * const trnnatures = await prisma.trnnatures.findMany()
     *
     * // Get first 10 Trnnatures
     * const trnnatures = await prisma.trnnatures.findMany({ take: 10 })
     *
     * // Only select the `code`
     * const trnnaturesWithCodeOnly = await prisma.trnnatures.findMany({ select: { code: true } })
     *
     **/
    findMany<T extends trnnaturesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trnnaturesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$trnnaturesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Trnnatures.
     * @param {trnnaturesCreateArgs} args - Arguments to create a Trnnatures.
     * @example
     * // Create one Trnnatures
     * const Trnnatures = await prisma.trnnatures.create({
     *   data: {
     *     // ... data to create a Trnnatures
     *   }
     * })
     *
     **/
    create<T extends trnnaturesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, trnnaturesCreateArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<Prisma.$trnnaturesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Trnnatures.
     * @param {trnnaturesCreateManyArgs} args - Arguments to create many Trnnatures.
     * @example
     * // Create many Trnnatures
     * const trnnatures = await prisma.trnnatures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends trnnaturesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trnnaturesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Trnnatures.
     * @param {trnnaturesDeleteArgs} args - Arguments to delete one Trnnatures.
     * @example
     * // Delete one Trnnatures
     * const Trnnatures = await prisma.trnnatures.delete({
     *   where: {
     *     // ... filter to delete one Trnnatures
     *   }
     * })
     *
     **/
    delete<T extends trnnaturesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, trnnaturesDeleteArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<Prisma.$trnnaturesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Trnnatures.
     * @param {trnnaturesUpdateArgs} args - Arguments to update one Trnnatures.
     * @example
     * // Update one Trnnatures
     * const trnnatures = await prisma.trnnatures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends trnnaturesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, trnnaturesUpdateArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<Prisma.$trnnaturesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Trnnatures.
     * @param {trnnaturesDeleteManyArgs} args - Arguments to filter Trnnatures to delete.
     * @example
     * // Delete a few Trnnatures
     * const { count } = await prisma.trnnatures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends trnnaturesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trnnaturesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Trnnatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnnaturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trnnatures
     * const trnnatures = await prisma.trnnatures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends trnnaturesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, trnnaturesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Trnnatures.
     * @param {trnnaturesUpsertArgs} args - Arguments to update or create a Trnnatures.
     * @example
     * // Update or create a Trnnatures
     * const trnnatures = await prisma.trnnatures.upsert({
     *   create: {
     *     // ... data to create a Trnnatures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trnnatures we want to update
     *   }
     * })
     **/
    upsert<T extends trnnaturesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, trnnaturesUpsertArgs<ExtArgs>>
    ): Prisma__trnnaturesClient<
      $Result.GetResult<Prisma.$trnnaturesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Trnnatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnnaturesCountArgs} args - Arguments to filter Trnnatures to count.
     * @example
     * // Count the number of Trnnatures
     * const count = await prisma.trnnatures.count({
     *   where: {
     *     // ... the filter for the Trnnatures we want to count
     *   }
     * })
     **/
    count<T extends trnnaturesCountArgs>(
      args?: Subset<T, trnnaturesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TrnnaturesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Trnnatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrnnaturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TrnnaturesAggregateArgs>(
      args: Subset<T, TrnnaturesAggregateArgs>
    ): Prisma.PrismaPromise<GetTrnnaturesAggregateType<T>>;

    /**
     * Group by Trnnatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trnnaturesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends trnnaturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trnnaturesGroupByArgs["orderBy"] }
        : { orderBy?: trnnaturesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, trnnaturesGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetTrnnaturesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the trnnatures model
     */
    readonly fields: trnnaturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trnnatures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trnnaturesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    transactions<T extends trnnatures$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, trnnatures$transactionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the trnnatures model
   */
  interface trnnaturesFieldRefs {
    readonly code: FieldRef<"trnnatures", "Int">;
    readonly description: FieldRef<"trnnatures", "String">;
  }

  // Custom InputTypes
  /**
   * trnnatures findUnique
   */
  export type trnnaturesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * Filter, which trnnatures to fetch.
     */
    where: trnnaturesWhereUniqueInput;
  };

  /**
   * trnnatures findUniqueOrThrow
   */
  export type trnnaturesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * Filter, which trnnatures to fetch.
     */
    where: trnnaturesWhereUniqueInput;
  };

  /**
   * trnnatures findFirst
   */
  export type trnnaturesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * Filter, which trnnatures to fetch.
     */
    where?: trnnaturesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trnnatures to fetch.
     */
    orderBy?:
      | trnnaturesOrderByWithRelationInput
      | trnnaturesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trnnatures.
     */
    cursor?: trnnaturesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trnnatures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trnnatures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trnnatures.
     */
    distinct?: TrnnaturesScalarFieldEnum | TrnnaturesScalarFieldEnum[];
  };

  /**
   * trnnatures findFirstOrThrow
   */
  export type trnnaturesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * Filter, which trnnatures to fetch.
     */
    where?: trnnaturesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trnnatures to fetch.
     */
    orderBy?:
      | trnnaturesOrderByWithRelationInput
      | trnnaturesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trnnatures.
     */
    cursor?: trnnaturesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trnnatures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trnnatures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trnnatures.
     */
    distinct?: TrnnaturesScalarFieldEnum | TrnnaturesScalarFieldEnum[];
  };

  /**
   * trnnatures findMany
   */
  export type trnnaturesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * Filter, which trnnatures to fetch.
     */
    where?: trnnaturesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trnnatures to fetch.
     */
    orderBy?:
      | trnnaturesOrderByWithRelationInput
      | trnnaturesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing trnnatures.
     */
    cursor?: trnnaturesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trnnatures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trnnatures.
     */
    skip?: number;
    distinct?: TrnnaturesScalarFieldEnum | TrnnaturesScalarFieldEnum[];
  };

  /**
   * trnnatures create
   */
  export type trnnaturesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * The data needed to create a trnnatures.
     */
    data: XOR<trnnaturesCreateInput, trnnaturesUncheckedCreateInput>;
  };

  /**
   * trnnatures createMany
   */
  export type trnnaturesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many trnnatures.
     */
    data: trnnaturesCreateManyInput | trnnaturesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * trnnatures update
   */
  export type trnnaturesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * The data needed to update a trnnatures.
     */
    data: XOR<trnnaturesUpdateInput, trnnaturesUncheckedUpdateInput>;
    /**
     * Choose, which trnnatures to update.
     */
    where: trnnaturesWhereUniqueInput;
  };

  /**
   * trnnatures updateMany
   */
  export type trnnaturesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update trnnatures.
     */
    data: XOR<
      trnnaturesUpdateManyMutationInput,
      trnnaturesUncheckedUpdateManyInput
    >;
    /**
     * Filter which trnnatures to update
     */
    where?: trnnaturesWhereInput;
  };

  /**
   * trnnatures upsert
   */
  export type trnnaturesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * The filter to search for the trnnatures to update in case it exists.
     */
    where: trnnaturesWhereUniqueInput;
    /**
     * In case the trnnatures found by the `where` argument doesn't exist, create a new trnnatures with this data.
     */
    create: XOR<trnnaturesCreateInput, trnnaturesUncheckedCreateInput>;
    /**
     * In case the trnnatures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trnnaturesUpdateInput, trnnaturesUncheckedUpdateInput>;
  };

  /**
   * trnnatures delete
   */
  export type trnnaturesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
    /**
     * Filter which trnnatures to delete.
     */
    where: trnnaturesWhereUniqueInput;
  };

  /**
   * trnnatures deleteMany
   */
  export type trnnaturesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which trnnatures to delete
     */
    where?: trnnaturesWhereInput;
  };

  /**
   * trnnatures.transactions
   */
  export type trnnatures$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * trnnatures without action
   */
  export type trnnaturesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the trnnatures
     */
    select?: trnnaturesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trnnaturesInclude<ExtArgs> | null;
  };

  /**
   * Model underlyingsecurities
   */

  export type AggregateUnderlyingsecurities = {
    _count: UnderlyingsecuritiesCountAggregateOutputType | null;
    _avg: UnderlyingsecuritiesAvgAggregateOutputType | null;
    _sum: UnderlyingsecuritiesSumAggregateOutputType | null;
    _min: UnderlyingsecuritiesMinAggregateOutputType | null;
    _max: UnderlyingsecuritiesMaxAggregateOutputType | null;
  };

  export type UnderlyingsecuritiesAvgAggregateOutputType = {
    id: number | null;
    securityId: number | null;
    nb: number | null;
    Balance: number | null;
    exercisePrice: number | null;
    exercisePriceCurrencyId: number | null;
  };

  export type UnderlyingsecuritiesSumAggregateOutputType = {
    id: number | null;
    securityId: number | null;
    nb: number | null;
    Balance: number | null;
    exercisePrice: number | null;
    exercisePriceCurrencyId: number | null;
  };

  export type UnderlyingsecuritiesMinAggregateOutputType = {
    id: number | null;
    securityId: number | null;
    nb: number | null;
    nbType: $Enums.underlyingsecurities_nbType | null;
    Balance: number | null;
    BalanceType: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice: number | null;
    exercisePriceCurrencyId: number | null;
    expiryDate: Date | null;
  };

  export type UnderlyingsecuritiesMaxAggregateOutputType = {
    id: number | null;
    securityId: number | null;
    nb: number | null;
    nbType: $Enums.underlyingsecurities_nbType | null;
    Balance: number | null;
    BalanceType: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice: number | null;
    exercisePriceCurrencyId: number | null;
    expiryDate: Date | null;
  };

  export type UnderlyingsecuritiesCountAggregateOutputType = {
    id: number;
    securityId: number;
    nb: number;
    nbType: number;
    Balance: number;
    BalanceType: number;
    exercisePrice: number;
    exercisePriceCurrencyId: number;
    expiryDate: number;
    _all: number;
  };

  export type UnderlyingsecuritiesAvgAggregateInputType = {
    id?: true;
    securityId?: true;
    nb?: true;
    Balance?: true;
    exercisePrice?: true;
    exercisePriceCurrencyId?: true;
  };

  export type UnderlyingsecuritiesSumAggregateInputType = {
    id?: true;
    securityId?: true;
    nb?: true;
    Balance?: true;
    exercisePrice?: true;
    exercisePriceCurrencyId?: true;
  };

  export type UnderlyingsecuritiesMinAggregateInputType = {
    id?: true;
    securityId?: true;
    nb?: true;
    nbType?: true;
    Balance?: true;
    BalanceType?: true;
    exercisePrice?: true;
    exercisePriceCurrencyId?: true;
    expiryDate?: true;
  };

  export type UnderlyingsecuritiesMaxAggregateInputType = {
    id?: true;
    securityId?: true;
    nb?: true;
    nbType?: true;
    Balance?: true;
    BalanceType?: true;
    exercisePrice?: true;
    exercisePriceCurrencyId?: true;
    expiryDate?: true;
  };

  export type UnderlyingsecuritiesCountAggregateInputType = {
    id?: true;
    securityId?: true;
    nb?: true;
    nbType?: true;
    Balance?: true;
    BalanceType?: true;
    exercisePrice?: true;
    exercisePriceCurrencyId?: true;
    expiryDate?: true;
    _all?: true;
  };

  export type UnderlyingsecuritiesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which underlyingsecurities to aggregate.
     */
    where?: underlyingsecuritiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of underlyingsecurities to fetch.
     */
    orderBy?:
      | underlyingsecuritiesOrderByWithRelationInput
      | underlyingsecuritiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: underlyingsecuritiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` underlyingsecurities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` underlyingsecurities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned underlyingsecurities
     **/
    _count?: true | UnderlyingsecuritiesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UnderlyingsecuritiesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UnderlyingsecuritiesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UnderlyingsecuritiesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UnderlyingsecuritiesMaxAggregateInputType;
  };

  export type GetUnderlyingsecuritiesAggregateType<
    T extends UnderlyingsecuritiesAggregateArgs
  > = {
    [P in keyof T & keyof AggregateUnderlyingsecurities]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnderlyingsecurities[P]>
      : GetScalarType<T[P], AggregateUnderlyingsecurities[P]>;
  };

  export type underlyingsecuritiesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: underlyingsecuritiesWhereInput;
    orderBy?:
      | underlyingsecuritiesOrderByWithAggregationInput
      | underlyingsecuritiesOrderByWithAggregationInput[];
    by:
      | UnderlyingsecuritiesScalarFieldEnum[]
      | UnderlyingsecuritiesScalarFieldEnum;
    having?: underlyingsecuritiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UnderlyingsecuritiesCountAggregateInputType | true;
    _avg?: UnderlyingsecuritiesAvgAggregateInputType;
    _sum?: UnderlyingsecuritiesSumAggregateInputType;
    _min?: UnderlyingsecuritiesMinAggregateInputType;
    _max?: UnderlyingsecuritiesMaxAggregateInputType;
  };

  export type UnderlyingsecuritiesGroupByOutputType = {
    id: number;
    securityId: number | null;
    nb: number | null;
    nbType: $Enums.underlyingsecurities_nbType | null;
    Balance: number | null;
    BalanceType: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice: number | null;
    exercisePriceCurrencyId: number | null;
    expiryDate: Date | null;
    _count: UnderlyingsecuritiesCountAggregateOutputType | null;
    _avg: UnderlyingsecuritiesAvgAggregateOutputType | null;
    _sum: UnderlyingsecuritiesSumAggregateOutputType | null;
    _min: UnderlyingsecuritiesMinAggregateOutputType | null;
    _max: UnderlyingsecuritiesMaxAggregateOutputType | null;
  };

  type GetUnderlyingsecuritiesGroupByPayload<
    T extends underlyingsecuritiesGroupByArgs
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnderlyingsecuritiesGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof UnderlyingsecuritiesGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UnderlyingsecuritiesGroupByOutputType[P]>
          : GetScalarType<T[P], UnderlyingsecuritiesGroupByOutputType[P]>;
      }
    >
  >;

  export type underlyingsecuritiesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      securityId?: boolean;
      nb?: boolean;
      nbType?: boolean;
      Balance?: boolean;
      BalanceType?: boolean;
      exercisePrice?: boolean;
      exercisePriceCurrencyId?: boolean;
      expiryDate?: boolean;
      transactions?: boolean | underlyingsecurities$transactionsArgs<ExtArgs>;
      securitydesignations?:
        | boolean
        | underlyingsecurities$securitydesignationsArgs<ExtArgs>;
      currency?: boolean | underlyingsecurities$currencyArgs<ExtArgs>;
      _count?:
        | boolean
        | UnderlyingsecuritiesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["underlyingsecurities"]
  >;

  export type underlyingsecuritiesSelectScalar = {
    id?: boolean;
    securityId?: boolean;
    nb?: boolean;
    nbType?: boolean;
    Balance?: boolean;
    BalanceType?: boolean;
    exercisePrice?: boolean;
    exercisePriceCurrencyId?: boolean;
    expiryDate?: boolean;
  };

  export type underlyingsecuritiesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    transactions?: boolean | underlyingsecurities$transactionsArgs<ExtArgs>;
    securitydesignations?:
      | boolean
      | underlyingsecurities$securitydesignationsArgs<ExtArgs>;
    currency?: boolean | underlyingsecurities$currencyArgs<ExtArgs>;
    _count?: boolean | UnderlyingsecuritiesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $underlyingsecuritiesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "underlyingsecurities";
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
      securitydesignations: Prisma.$securitydesignationsPayload<ExtArgs> | null;
      currency: Prisma.$currencyPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        securityId: number | null;
        nb: number | null;
        nbType: $Enums.underlyingsecurities_nbType | null;
        Balance: number | null;
        BalanceType: $Enums.underlyingsecurities_BalanceType | null;
        exercisePrice: number | null;
        exercisePriceCurrencyId: number | null;
        expiryDate: Date | null;
      },
      ExtArgs["result"]["underlyingsecurities"]
    >;
    composites: {};
  };

  type underlyingsecuritiesGetPayload<
    S extends boolean | null | undefined | underlyingsecuritiesDefaultArgs
  > = $Result.GetResult<Prisma.$underlyingsecuritiesPayload, S>;

  type underlyingsecuritiesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    underlyingsecuritiesFindManyArgs,
    "select" | "include" | "distinct"
  > & {
    select?: UnderlyingsecuritiesCountAggregateInputType | true;
  };

  export interface underlyingsecuritiesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["underlyingsecurities"];
      meta: { name: "underlyingsecurities" };
    };

    /**
     * Find zero or one Underlyingsecurities that matches the filter.
     * @param {underlyingsecuritiesFindUniqueArgs} args - Arguments to find a Underlyingsecurities
     * @example
     * // Get one Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends underlyingsecuritiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, underlyingsecuritiesFindUniqueArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Underlyingsecurities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {underlyingsecuritiesFindUniqueOrThrowArgs} args - Arguments to find a Underlyingsecurities
     * @example
     * // Get one Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<
      T extends underlyingsecuritiesFindUniqueOrThrowArgs<ExtArgs>
    >(
      args?: SelectSubset<T, underlyingsecuritiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Underlyingsecurities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {underlyingsecuritiesFindFirstArgs} args - Arguments to find a Underlyingsecurities
     * @example
     * // Get one Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends underlyingsecuritiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, underlyingsecuritiesFindFirstArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Underlyingsecurities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {underlyingsecuritiesFindFirstOrThrowArgs} args - Arguments to find a Underlyingsecurities
     * @example
     * // Get one Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<
      T extends underlyingsecuritiesFindFirstOrThrowArgs<ExtArgs>
    >(
      args?: SelectSubset<T, underlyingsecuritiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Underlyingsecurities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {underlyingsecuritiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.findMany()
     *
     * // Get first 10 Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const underlyingsecuritiesWithIdOnly = await prisma.underlyingsecurities.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends underlyingsecuritiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, underlyingsecuritiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "findMany"
      >
    >;

    /**
     * Create a Underlyingsecurities.
     * @param {underlyingsecuritiesCreateArgs} args - Arguments to create a Underlyingsecurities.
     * @example
     * // Create one Underlyingsecurities
     * const Underlyingsecurities = await prisma.underlyingsecurities.create({
     *   data: {
     *     // ... data to create a Underlyingsecurities
     *   }
     * })
     *
     **/
    create<T extends underlyingsecuritiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, underlyingsecuritiesCreateArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "create"
      >,
      never,
      ExtArgs
    >;

    /**
     * Create many Underlyingsecurities.
     * @param {underlyingsecuritiesCreateManyArgs} args - Arguments to create many Underlyingsecurities.
     * @example
     * // Create many Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends underlyingsecuritiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, underlyingsecuritiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Underlyingsecurities.
     * @param {underlyingsecuritiesDeleteArgs} args - Arguments to delete one Underlyingsecurities.
     * @example
     * // Delete one Underlyingsecurities
     * const Underlyingsecurities = await prisma.underlyingsecurities.delete({
     *   where: {
     *     // ... filter to delete one Underlyingsecurities
     *   }
     * })
     *
     **/
    delete<T extends underlyingsecuritiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, underlyingsecuritiesDeleteArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "delete"
      >,
      never,
      ExtArgs
    >;

    /**
     * Update one Underlyingsecurities.
     * @param {underlyingsecuritiesUpdateArgs} args - Arguments to update one Underlyingsecurities.
     * @example
     * // Update one Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends underlyingsecuritiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, underlyingsecuritiesUpdateArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "update"
      >,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Underlyingsecurities.
     * @param {underlyingsecuritiesDeleteManyArgs} args - Arguments to filter Underlyingsecurities to delete.
     * @example
     * // Delete a few Underlyingsecurities
     * const { count } = await prisma.underlyingsecurities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends underlyingsecuritiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, underlyingsecuritiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Underlyingsecurities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {underlyingsecuritiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends underlyingsecuritiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, underlyingsecuritiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Underlyingsecurities.
     * @param {underlyingsecuritiesUpsertArgs} args - Arguments to update or create a Underlyingsecurities.
     * @example
     * // Update or create a Underlyingsecurities
     * const underlyingsecurities = await prisma.underlyingsecurities.upsert({
     *   create: {
     *     // ... data to create a Underlyingsecurities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Underlyingsecurities we want to update
     *   }
     * })
     **/
    upsert<T extends underlyingsecuritiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, underlyingsecuritiesUpsertArgs<ExtArgs>>
    ): Prisma__underlyingsecuritiesClient<
      $Result.GetResult<
        Prisma.$underlyingsecuritiesPayload<ExtArgs>,
        T,
        "upsert"
      >,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Underlyingsecurities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {underlyingsecuritiesCountArgs} args - Arguments to filter Underlyingsecurities to count.
     * @example
     * // Count the number of Underlyingsecurities
     * const count = await prisma.underlyingsecurities.count({
     *   where: {
     *     // ... the filter for the Underlyingsecurities we want to count
     *   }
     * })
     **/
    count<T extends underlyingsecuritiesCountArgs>(
      args?: Subset<T, underlyingsecuritiesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              UnderlyingsecuritiesCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Underlyingsecurities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnderlyingsecuritiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UnderlyingsecuritiesAggregateArgs>(
      args: Subset<T, UnderlyingsecuritiesAggregateArgs>
    ): Prisma.PrismaPromise<GetUnderlyingsecuritiesAggregateType<T>>;

    /**
     * Group by Underlyingsecurities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {underlyingsecuritiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends underlyingsecuritiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: underlyingsecuritiesGroupByArgs["orderBy"] }
        : { orderBy?: underlyingsecuritiesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, underlyingsecuritiesGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetUnderlyingsecuritiesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;

    /**
     * Fields of the underlyingsecurities model
     */
    readonly fields: underlyingsecuritiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for underlyingsecurities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__underlyingsecuritiesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    transactions<T extends underlyingsecurities$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, underlyingsecurities$transactionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">
      | Null
    >;

    securitydesignations<
      T extends underlyingsecurities$securitydesignationsArgs<ExtArgs> = {}
    >(
      args?: Subset<T, underlyingsecurities$securitydesignationsArgs<ExtArgs>>
    ): Prisma__securitydesignationsClient<
      $Result.GetResult<
        Prisma.$securitydesignationsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    currency<T extends underlyingsecurities$currencyArgs<ExtArgs> = {}>(
      args?: Subset<T, underlyingsecurities$currencyArgs<ExtArgs>>
    ): Prisma__currencyClient<
      $Result.GetResult<
        Prisma.$currencyPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the underlyingsecurities model
   */
  interface underlyingsecuritiesFieldRefs {
    readonly id: FieldRef<"underlyingsecurities", "Int">;
    readonly securityId: FieldRef<"underlyingsecurities", "Int">;
    readonly nb: FieldRef<"underlyingsecurities", "Int">;
    readonly nbType: FieldRef<
      "underlyingsecurities",
      "underlyingsecurities_nbType"
    >;
    readonly Balance: FieldRef<"underlyingsecurities", "Int">;
    readonly BalanceType: FieldRef<
      "underlyingsecurities",
      "underlyingsecurities_BalanceType"
    >;
    readonly exercisePrice: FieldRef<"underlyingsecurities", "Float">;
    readonly exercisePriceCurrencyId: FieldRef<"underlyingsecurities", "Int">;
    readonly expiryDate: FieldRef<"underlyingsecurities", "DateTime">;
  }

  // Custom InputTypes
  /**
   * underlyingsecurities findUnique
   */
  export type underlyingsecuritiesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * Filter, which underlyingsecurities to fetch.
     */
    where: underlyingsecuritiesWhereUniqueInput;
  };

  /**
   * underlyingsecurities findUniqueOrThrow
   */
  export type underlyingsecuritiesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * Filter, which underlyingsecurities to fetch.
     */
    where: underlyingsecuritiesWhereUniqueInput;
  };

  /**
   * underlyingsecurities findFirst
   */
  export type underlyingsecuritiesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * Filter, which underlyingsecurities to fetch.
     */
    where?: underlyingsecuritiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of underlyingsecurities to fetch.
     */
    orderBy?:
      | underlyingsecuritiesOrderByWithRelationInput
      | underlyingsecuritiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for underlyingsecurities.
     */
    cursor?: underlyingsecuritiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` underlyingsecurities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` underlyingsecurities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of underlyingsecurities.
     */
    distinct?:
      | UnderlyingsecuritiesScalarFieldEnum
      | UnderlyingsecuritiesScalarFieldEnum[];
  };

  /**
   * underlyingsecurities findFirstOrThrow
   */
  export type underlyingsecuritiesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * Filter, which underlyingsecurities to fetch.
     */
    where?: underlyingsecuritiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of underlyingsecurities to fetch.
     */
    orderBy?:
      | underlyingsecuritiesOrderByWithRelationInput
      | underlyingsecuritiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for underlyingsecurities.
     */
    cursor?: underlyingsecuritiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` underlyingsecurities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` underlyingsecurities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of underlyingsecurities.
     */
    distinct?:
      | UnderlyingsecuritiesScalarFieldEnum
      | UnderlyingsecuritiesScalarFieldEnum[];
  };

  /**
   * underlyingsecurities findMany
   */
  export type underlyingsecuritiesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * Filter, which underlyingsecurities to fetch.
     */
    where?: underlyingsecuritiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of underlyingsecurities to fetch.
     */
    orderBy?:
      | underlyingsecuritiesOrderByWithRelationInput
      | underlyingsecuritiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing underlyingsecurities.
     */
    cursor?: underlyingsecuritiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` underlyingsecurities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` underlyingsecurities.
     */
    skip?: number;
    distinct?:
      | UnderlyingsecuritiesScalarFieldEnum
      | UnderlyingsecuritiesScalarFieldEnum[];
  };

  /**
   * underlyingsecurities create
   */
  export type underlyingsecuritiesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * The data needed to create a underlyingsecurities.
     */
    data?: XOR<
      underlyingsecuritiesCreateInput,
      underlyingsecuritiesUncheckedCreateInput
    >;
  };

  /**
   * underlyingsecurities createMany
   */
  export type underlyingsecuritiesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many underlyingsecurities.
     */
    data:
      | underlyingsecuritiesCreateManyInput
      | underlyingsecuritiesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * underlyingsecurities update
   */
  export type underlyingsecuritiesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * The data needed to update a underlyingsecurities.
     */
    data: XOR<
      underlyingsecuritiesUpdateInput,
      underlyingsecuritiesUncheckedUpdateInput
    >;
    /**
     * Choose, which underlyingsecurities to update.
     */
    where: underlyingsecuritiesWhereUniqueInput;
  };

  /**
   * underlyingsecurities updateMany
   */
  export type underlyingsecuritiesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update underlyingsecurities.
     */
    data: XOR<
      underlyingsecuritiesUpdateManyMutationInput,
      underlyingsecuritiesUncheckedUpdateManyInput
    >;
    /**
     * Filter which underlyingsecurities to update
     */
    where?: underlyingsecuritiesWhereInput;
  };

  /**
   * underlyingsecurities upsert
   */
  export type underlyingsecuritiesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * The filter to search for the underlyingsecurities to update in case it exists.
     */
    where: underlyingsecuritiesWhereUniqueInput;
    /**
     * In case the underlyingsecurities found by the `where` argument doesn't exist, create a new underlyingsecurities with this data.
     */
    create: XOR<
      underlyingsecuritiesCreateInput,
      underlyingsecuritiesUncheckedCreateInput
    >;
    /**
     * In case the underlyingsecurities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      underlyingsecuritiesUpdateInput,
      underlyingsecuritiesUncheckedUpdateInput
    >;
  };

  /**
   * underlyingsecurities delete
   */
  export type underlyingsecuritiesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
    /**
     * Filter which underlyingsecurities to delete.
     */
    where: underlyingsecuritiesWhereUniqueInput;
  };

  /**
   * underlyingsecurities deleteMany
   */
  export type underlyingsecuritiesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which underlyingsecurities to delete
     */
    where?: underlyingsecuritiesWhereInput;
  };

  /**
   * underlyingsecurities.transactions
   */
  export type underlyingsecurities$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * underlyingsecurities.securitydesignations
   */
  export type underlyingsecurities$securitydesignationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the securitydesignations
     */
    select?: securitydesignationsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: securitydesignationsInclude<ExtArgs> | null;
    where?: securitydesignationsWhereInput;
  };

  /**
   * underlyingsecurities.currency
   */
  export type underlyingsecurities$currencyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currencyInclude<ExtArgs> | null;
    where?: currencyWhereInput;
  };

  /**
   * underlyingsecurities without action
   */
  export type underlyingsecuritiesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the underlyingsecurities
     */
    select?: underlyingsecuritiesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: underlyingsecuritiesInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CurrencyScalarFieldEnum: {
    id: "id";
    name: "name";
  };

  export type CurrencyScalarFieldEnum =
    (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum];

  export const ExchangesScalarFieldEnum: {
    id: "id";
    name: "name";
  };

  export type ExchangesScalarFieldEnum =
    (typeof ExchangesScalarFieldEnum)[keyof typeof ExchangesScalarFieldEnum];

  export const InsidersScalarFieldEnum: {
    id: "id";
    name: "name";
    issuerId: "issuerId";
    ceasedToBeInsider: "ceasedToBeInsider";
  };

  export type InsidersScalarFieldEnum =
    (typeof InsidersScalarFieldEnum)[keyof typeof InsidersScalarFieldEnum];

  export const IssuerexchangesScalarFieldEnum: {
    issuerId: "issuerId";
    exchangeId: "exchangeId";
  };

  export type IssuerexchangesScalarFieldEnum =
    (typeof IssuerexchangesScalarFieldEnum)[keyof typeof IssuerexchangesScalarFieldEnum];

  export const IssuersScalarFieldEnum: {
    id: "id";
    sedarId: "sedarId";
    name: "name";
    tickerId: "tickerId";
    sizeId: "sizeId";
  };

  export type IssuersScalarFieldEnum =
    (typeof IssuersScalarFieldEnum)[keyof typeof IssuersScalarFieldEnum];

  export const RelationstoissuerScalarFieldEnum: {
    type: "type";
    insiderId: "insiderId";
  };

  export type RelationstoissuerScalarFieldEnum =
    (typeof RelationstoissuerScalarFieldEnum)[keyof typeof RelationstoissuerScalarFieldEnum];

  export const SecuritydesignationsScalarFieldEnum: {
    id: "id";
    name: "name";
  };

  export type SecuritydesignationsScalarFieldEnum =
    (typeof SecuritydesignationsScalarFieldEnum)[keyof typeof SecuritydesignationsScalarFieldEnum];

  export const SizesScalarFieldEnum: {
    id: "id";
    name: "name";
  };

  export type SizesScalarFieldEnum =
    (typeof SizesScalarFieldEnum)[keyof typeof SizesScalarFieldEnum];

  export const TickersScalarFieldEnum: {
    id: "id";
    name: "name";
  };

  export type TickersScalarFieldEnum =
    (typeof TickersScalarFieldEnum)[keyof typeof TickersScalarFieldEnum];

  export const TransactionsScalarFieldEnum: {
    id: "id";
    sediId: "sediId";
    insiderId: "insiderId";
    issuerId: "issuerId";
    securityId: "securityId";
    trnFlagId: "trnFlagId";
    trnDate: "trnDate";
    filingDate: "filingDate";
    ownershipType: "ownershipType";
    ownershipExtraInfo: "ownershipExtraInfo";
    trnNatureCode: "trnNatureCode";
    nb: "nb";
    nbType: "nbType";
    price: "price";
    priceCurrencyId: "priceCurrencyId";
    closingBalance: "closingBalance";
    closingBalanceType: "closingBalanceType";
    calculatedBalance: "calculatedBalance";
    calculatedBalanceType: "calculatedBalanceType";
    underlyingSecurityId: "underlyingSecurityId";
    GeneralRemarks: "GeneralRemarks";
  };

  export type TransactionsScalarFieldEnum =
    (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum];

  export const TrnflagScalarFieldEnum: {
    id: "id";
    name: "name";
  };

  export type TrnflagScalarFieldEnum =
    (typeof TrnflagScalarFieldEnum)[keyof typeof TrnflagScalarFieldEnum];

  export const TrnnaturesScalarFieldEnum: {
    code: "code";
    description: "description";
  };

  export type TrnnaturesScalarFieldEnum =
    (typeof TrnnaturesScalarFieldEnum)[keyof typeof TrnnaturesScalarFieldEnum];

  export const UnderlyingsecuritiesScalarFieldEnum: {
    id: "id";
    securityId: "securityId";
    nb: "nb";
    nbType: "nbType";
    Balance: "Balance";
    BalanceType: "BalanceType";
    exercisePrice: "exercisePrice";
    exercisePriceCurrencyId: "exercisePriceCurrencyId";
    expiryDate: "expiryDate";
  };

  export type UnderlyingsecuritiesScalarFieldEnum =
    (typeof UnderlyingsecuritiesScalarFieldEnum)[keyof typeof UnderlyingsecuritiesScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'relationstoissuer_type'
   */
  export type Enumrelationstoissuer_typeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "relationstoissuer_type">;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'transactions_ownershipType'
   */
  export type Enumtransactions_ownershipTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "transactions_ownershipType">;

  /**
   * Reference to a field of type 'transactions_nbType'
   */
  export type Enumtransactions_nbTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "transactions_nbType">;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'transactions_closingBalanceType'
   */
  export type Enumtransactions_closingBalanceTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "transactions_closingBalanceType">;

  /**
   * Reference to a field of type 'transactions_calculatedBalanceType'
   */
  export type Enumtransactions_calculatedBalanceTypeFieldRefInput<
    $PrismaModel
  > = FieldRefInputType<$PrismaModel, "transactions_calculatedBalanceType">;

  /**
   * Reference to a field of type 'underlyingsecurities_nbType'
   */
  export type Enumunderlyingsecurities_nbTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "underlyingsecurities_nbType">;

  /**
   * Reference to a field of type 'underlyingsecurities_BalanceType'
   */
  export type Enumunderlyingsecurities_BalanceTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "underlyingsecurities_BalanceType">;

  /**
   * Deep Input Types
   */

  export type currencyWhereInput = {
    AND?: currencyWhereInput | currencyWhereInput[];
    OR?: currencyWhereInput[];
    NOT?: currencyWhereInput | currencyWhereInput[];
    id?: IntFilter<"currency"> | number;
    name?: StringNullableFilter<"currency"> | string | null;
    transactions?: TransactionsListRelationFilter;
    underlyingsecurities?: UnderlyingsecuritiesListRelationFilter;
  };

  export type currencyOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    transactions?: transactionsOrderByRelationAggregateInput;
    underlyingsecurities?: underlyingsecuritiesOrderByRelationAggregateInput;
  };

  export type currencyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: currencyWhereInput | currencyWhereInput[];
      OR?: currencyWhereInput[];
      NOT?: currencyWhereInput | currencyWhereInput[];
      name?: StringNullableFilter<"currency"> | string | null;
      transactions?: TransactionsListRelationFilter;
      underlyingsecurities?: UnderlyingsecuritiesListRelationFilter;
    },
    "id"
  >;

  export type currencyOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    _count?: currencyCountOrderByAggregateInput;
    _avg?: currencyAvgOrderByAggregateInput;
    _max?: currencyMaxOrderByAggregateInput;
    _min?: currencyMinOrderByAggregateInput;
    _sum?: currencySumOrderByAggregateInput;
  };

  export type currencyScalarWhereWithAggregatesInput = {
    AND?:
      | currencyScalarWhereWithAggregatesInput
      | currencyScalarWhereWithAggregatesInput[];
    OR?: currencyScalarWhereWithAggregatesInput[];
    NOT?:
      | currencyScalarWhereWithAggregatesInput
      | currencyScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"currency"> | number;
    name?: StringNullableWithAggregatesFilter<"currency"> | string | null;
  };

  export type exchangesWhereInput = {
    AND?: exchangesWhereInput | exchangesWhereInput[];
    OR?: exchangesWhereInput[];
    NOT?: exchangesWhereInput | exchangesWhereInput[];
    id?: IntFilter<"exchanges"> | number;
    name?: StringNullableFilter<"exchanges"> | string | null;
    issuerexchanges?: IssuerexchangesListRelationFilter;
  };

  export type exchangesOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    issuerexchanges?: issuerexchangesOrderByRelationAggregateInput;
  };

  export type exchangesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: exchangesWhereInput | exchangesWhereInput[];
      OR?: exchangesWhereInput[];
      NOT?: exchangesWhereInput | exchangesWhereInput[];
      name?: StringNullableFilter<"exchanges"> | string | null;
      issuerexchanges?: IssuerexchangesListRelationFilter;
    },
    "id"
  >;

  export type exchangesOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    _count?: exchangesCountOrderByAggregateInput;
    _avg?: exchangesAvgOrderByAggregateInput;
    _max?: exchangesMaxOrderByAggregateInput;
    _min?: exchangesMinOrderByAggregateInput;
    _sum?: exchangesSumOrderByAggregateInput;
  };

  export type exchangesScalarWhereWithAggregatesInput = {
    AND?:
      | exchangesScalarWhereWithAggregatesInput
      | exchangesScalarWhereWithAggregatesInput[];
    OR?: exchangesScalarWhereWithAggregatesInput[];
    NOT?:
      | exchangesScalarWhereWithAggregatesInput
      | exchangesScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"exchanges"> | number;
    name?: StringNullableWithAggregatesFilter<"exchanges"> | string | null;
  };

  export type insidersWhereInput = {
    AND?: insidersWhereInput | insidersWhereInput[];
    OR?: insidersWhereInput[];
    NOT?: insidersWhereInput | insidersWhereInput[];
    id?: IntFilter<"insiders"> | number;
    name?: StringNullableFilter<"insiders"> | string | null;
    issuerId?: IntNullableFilter<"insiders"> | number | null;
    ceasedToBeInsider?: StringNullableFilter<"insiders"> | string | null;
    issuers?: XOR<IssuersNullableRelationFilter, issuersWhereInput> | null;
    relationstoissuer?: RelationstoissuerListRelationFilter;
    transactions?: TransactionsListRelationFilter;
  };

  export type insidersOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    issuerId?: SortOrderInput | SortOrder;
    ceasedToBeInsider?: SortOrderInput | SortOrder;
    issuers?: issuersOrderByWithRelationInput;
    relationstoissuer?: relationstoissuerOrderByRelationAggregateInput;
    transactions?: transactionsOrderByRelationAggregateInput;
  };

  export type insidersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: insidersWhereInput | insidersWhereInput[];
      OR?: insidersWhereInput[];
      NOT?: insidersWhereInput | insidersWhereInput[];
      name?: StringNullableFilter<"insiders"> | string | null;
      issuerId?: IntNullableFilter<"insiders"> | number | null;
      ceasedToBeInsider?: StringNullableFilter<"insiders"> | string | null;
      issuers?: XOR<IssuersNullableRelationFilter, issuersWhereInput> | null;
      relationstoissuer?: RelationstoissuerListRelationFilter;
      transactions?: TransactionsListRelationFilter;
    },
    "id"
  >;

  export type insidersOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    issuerId?: SortOrderInput | SortOrder;
    ceasedToBeInsider?: SortOrderInput | SortOrder;
    _count?: insidersCountOrderByAggregateInput;
    _avg?: insidersAvgOrderByAggregateInput;
    _max?: insidersMaxOrderByAggregateInput;
    _min?: insidersMinOrderByAggregateInput;
    _sum?: insidersSumOrderByAggregateInput;
  };

  export type insidersScalarWhereWithAggregatesInput = {
    AND?:
      | insidersScalarWhereWithAggregatesInput
      | insidersScalarWhereWithAggregatesInput[];
    OR?: insidersScalarWhereWithAggregatesInput[];
    NOT?:
      | insidersScalarWhereWithAggregatesInput
      | insidersScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"insiders"> | number;
    name?: StringNullableWithAggregatesFilter<"insiders"> | string | null;
    issuerId?: IntNullableWithAggregatesFilter<"insiders"> | number | null;
    ceasedToBeInsider?:
      | StringNullableWithAggregatesFilter<"insiders">
      | string
      | null;
  };

  export type issuerexchangesWhereInput = {
    AND?: issuerexchangesWhereInput | issuerexchangesWhereInput[];
    OR?: issuerexchangesWhereInput[];
    NOT?: issuerexchangesWhereInput | issuerexchangesWhereInput[];
    issuerId?: IntFilter<"issuerexchanges"> | number;
    exchangeId?: IntFilter<"issuerexchanges"> | number;
    issuers?: XOR<IssuersRelationFilter, issuersWhereInput>;
    exchanges?: XOR<ExchangesRelationFilter, exchangesWhereInput>;
  };

  export type issuerexchangesOrderByWithRelationInput = {
    issuerId?: SortOrder;
    exchangeId?: SortOrder;
    issuers?: issuersOrderByWithRelationInput;
    exchanges?: exchangesOrderByWithRelationInput;
  };

  export type issuerexchangesWhereUniqueInput = Prisma.AtLeast<
    {
      issuerId_exchangeId?: issuerexchangesIssuerIdExchangeIdCompoundUniqueInput;
      AND?: issuerexchangesWhereInput | issuerexchangesWhereInput[];
      OR?: issuerexchangesWhereInput[];
      NOT?: issuerexchangesWhereInput | issuerexchangesWhereInput[];
      issuerId?: IntFilter<"issuerexchanges"> | number;
      exchangeId?: IntFilter<"issuerexchanges"> | number;
      issuers?: XOR<IssuersRelationFilter, issuersWhereInput>;
      exchanges?: XOR<ExchangesRelationFilter, exchangesWhereInput>;
    },
    "issuerId_exchangeId"
  >;

  export type issuerexchangesOrderByWithAggregationInput = {
    issuerId?: SortOrder;
    exchangeId?: SortOrder;
    _count?: issuerexchangesCountOrderByAggregateInput;
    _avg?: issuerexchangesAvgOrderByAggregateInput;
    _max?: issuerexchangesMaxOrderByAggregateInput;
    _min?: issuerexchangesMinOrderByAggregateInput;
    _sum?: issuerexchangesSumOrderByAggregateInput;
  };

  export type issuerexchangesScalarWhereWithAggregatesInput = {
    AND?:
      | issuerexchangesScalarWhereWithAggregatesInput
      | issuerexchangesScalarWhereWithAggregatesInput[];
    OR?: issuerexchangesScalarWhereWithAggregatesInput[];
    NOT?:
      | issuerexchangesScalarWhereWithAggregatesInput
      | issuerexchangesScalarWhereWithAggregatesInput[];
    issuerId?: IntWithAggregatesFilter<"issuerexchanges"> | number;
    exchangeId?: IntWithAggregatesFilter<"issuerexchanges"> | number;
  };

  export type issuersWhereInput = {
    AND?: issuersWhereInput | issuersWhereInput[];
    OR?: issuersWhereInput[];
    NOT?: issuersWhereInput | issuersWhereInput[];
    id?: IntFilter<"issuers"> | number;
    sedarId?: IntNullableFilter<"issuers"> | number | null;
    name?: StringNullableFilter<"issuers"> | string | null;
    tickerId?: IntNullableFilter<"issuers"> | number | null;
    sizeId?: IntNullableFilter<"issuers"> | number | null;
    insiders?: InsidersListRelationFilter;
    issuerexchanges?: IssuerexchangesListRelationFilter;
    tickers?: XOR<TickersNullableRelationFilter, tickersWhereInput> | null;
    sizes?: XOR<SizesNullableRelationFilter, sizesWhereInput> | null;
    transactions?: TransactionsListRelationFilter;
  };

  export type issuersOrderByWithRelationInput = {
    id?: SortOrder;
    sedarId?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    tickerId?: SortOrderInput | SortOrder;
    sizeId?: SortOrderInput | SortOrder;
    insiders?: insidersOrderByRelationAggregateInput;
    issuerexchanges?: issuerexchangesOrderByRelationAggregateInput;
    tickers?: tickersOrderByWithRelationInput;
    sizes?: sizesOrderByWithRelationInput;
    transactions?: transactionsOrderByRelationAggregateInput;
  };

  export type issuersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      sedarId?: number;
      name?: string;
      AND?: issuersWhereInput | issuersWhereInput[];
      OR?: issuersWhereInput[];
      NOT?: issuersWhereInput | issuersWhereInput[];
      tickerId?: IntNullableFilter<"issuers"> | number | null;
      sizeId?: IntNullableFilter<"issuers"> | number | null;
      insiders?: InsidersListRelationFilter;
      issuerexchanges?: IssuerexchangesListRelationFilter;
      tickers?: XOR<TickersNullableRelationFilter, tickersWhereInput> | null;
      sizes?: XOR<SizesNullableRelationFilter, sizesWhereInput> | null;
      transactions?: TransactionsListRelationFilter;
    },
    "id" | "sedarId" | "name"
  >;

  export type issuersOrderByWithAggregationInput = {
    id?: SortOrder;
    sedarId?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    tickerId?: SortOrderInput | SortOrder;
    sizeId?: SortOrderInput | SortOrder;
    _count?: issuersCountOrderByAggregateInput;
    _avg?: issuersAvgOrderByAggregateInput;
    _max?: issuersMaxOrderByAggregateInput;
    _min?: issuersMinOrderByAggregateInput;
    _sum?: issuersSumOrderByAggregateInput;
  };

  export type issuersScalarWhereWithAggregatesInput = {
    AND?:
      | issuersScalarWhereWithAggregatesInput
      | issuersScalarWhereWithAggregatesInput[];
    OR?: issuersScalarWhereWithAggregatesInput[];
    NOT?:
      | issuersScalarWhereWithAggregatesInput
      | issuersScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"issuers"> | number;
    sedarId?: IntNullableWithAggregatesFilter<"issuers"> | number | null;
    name?: StringNullableWithAggregatesFilter<"issuers"> | string | null;
    tickerId?: IntNullableWithAggregatesFilter<"issuers"> | number | null;
    sizeId?: IntNullableWithAggregatesFilter<"issuers"> | number | null;
  };

  export type relationstoissuerWhereInput = {
    AND?: relationstoissuerWhereInput | relationstoissuerWhereInput[];
    OR?: relationstoissuerWhereInput[];
    NOT?: relationstoissuerWhereInput | relationstoissuerWhereInput[];
    type?:
      | Enumrelationstoissuer_typeFilter<"relationstoissuer">
      | $Enums.relationstoissuer_type;
    insiderId?: IntFilter<"relationstoissuer"> | number;
    insiders?: XOR<InsidersRelationFilter, insidersWhereInput>;
  };

  export type relationstoissuerOrderByWithRelationInput = {
    type?: SortOrder;
    insiderId?: SortOrder;
    insiders?: insidersOrderByWithRelationInput;
  };

  export type relationstoissuerWhereUniqueInput = Prisma.AtLeast<
    {
      type_insiderId?: relationstoissuerTypeInsiderIdCompoundUniqueInput;
      AND?: relationstoissuerWhereInput | relationstoissuerWhereInput[];
      OR?: relationstoissuerWhereInput[];
      NOT?: relationstoissuerWhereInput | relationstoissuerWhereInput[];
      type?:
        | Enumrelationstoissuer_typeFilter<"relationstoissuer">
        | $Enums.relationstoissuer_type;
      insiderId?: IntFilter<"relationstoissuer"> | number;
      insiders?: XOR<InsidersRelationFilter, insidersWhereInput>;
    },
    "type_insiderId"
  >;

  export type relationstoissuerOrderByWithAggregationInput = {
    type?: SortOrder;
    insiderId?: SortOrder;
    _count?: relationstoissuerCountOrderByAggregateInput;
    _avg?: relationstoissuerAvgOrderByAggregateInput;
    _max?: relationstoissuerMaxOrderByAggregateInput;
    _min?: relationstoissuerMinOrderByAggregateInput;
    _sum?: relationstoissuerSumOrderByAggregateInput;
  };

  export type relationstoissuerScalarWhereWithAggregatesInput = {
    AND?:
      | relationstoissuerScalarWhereWithAggregatesInput
      | relationstoissuerScalarWhereWithAggregatesInput[];
    OR?: relationstoissuerScalarWhereWithAggregatesInput[];
    NOT?:
      | relationstoissuerScalarWhereWithAggregatesInput
      | relationstoissuerScalarWhereWithAggregatesInput[];
    type?:
      | Enumrelationstoissuer_typeWithAggregatesFilter<"relationstoissuer">
      | $Enums.relationstoissuer_type;
    insiderId?: IntWithAggregatesFilter<"relationstoissuer"> | number;
  };

  export type securitydesignationsWhereInput = {
    AND?: securitydesignationsWhereInput | securitydesignationsWhereInput[];
    OR?: securitydesignationsWhereInput[];
    NOT?: securitydesignationsWhereInput | securitydesignationsWhereInput[];
    id?: IntFilter<"securitydesignations"> | number;
    name?: StringNullableFilter<"securitydesignations"> | string | null;
    transactions?: TransactionsListRelationFilter;
    underlyingsecurities?: UnderlyingsecuritiesListRelationFilter;
  };

  export type securitydesignationsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    transactions?: transactionsOrderByRelationAggregateInput;
    underlyingsecurities?: underlyingsecuritiesOrderByRelationAggregateInput;
  };

  export type securitydesignationsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: securitydesignationsWhereInput | securitydesignationsWhereInput[];
      OR?: securitydesignationsWhereInput[];
      NOT?: securitydesignationsWhereInput | securitydesignationsWhereInput[];
      name?: StringNullableFilter<"securitydesignations"> | string | null;
      transactions?: TransactionsListRelationFilter;
      underlyingsecurities?: UnderlyingsecuritiesListRelationFilter;
    },
    "id"
  >;

  export type securitydesignationsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    _count?: securitydesignationsCountOrderByAggregateInput;
    _avg?: securitydesignationsAvgOrderByAggregateInput;
    _max?: securitydesignationsMaxOrderByAggregateInput;
    _min?: securitydesignationsMinOrderByAggregateInput;
    _sum?: securitydesignationsSumOrderByAggregateInput;
  };

  export type securitydesignationsScalarWhereWithAggregatesInput = {
    AND?:
      | securitydesignationsScalarWhereWithAggregatesInput
      | securitydesignationsScalarWhereWithAggregatesInput[];
    OR?: securitydesignationsScalarWhereWithAggregatesInput[];
    NOT?:
      | securitydesignationsScalarWhereWithAggregatesInput
      | securitydesignationsScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"securitydesignations"> | number;
    name?:
      | StringNullableWithAggregatesFilter<"securitydesignations">
      | string
      | null;
  };

  export type sizesWhereInput = {
    AND?: sizesWhereInput | sizesWhereInput[];
    OR?: sizesWhereInput[];
    NOT?: sizesWhereInput | sizesWhereInput[];
    id?: IntFilter<"sizes"> | number;
    name?: StringNullableFilter<"sizes"> | string | null;
    issuers?: IssuersListRelationFilter;
  };

  export type sizesOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    issuers?: issuersOrderByRelationAggregateInput;
  };

  export type sizesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: sizesWhereInput | sizesWhereInput[];
      OR?: sizesWhereInput[];
      NOT?: sizesWhereInput | sizesWhereInput[];
      name?: StringNullableFilter<"sizes"> | string | null;
      issuers?: IssuersListRelationFilter;
    },
    "id"
  >;

  export type sizesOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    _count?: sizesCountOrderByAggregateInput;
    _avg?: sizesAvgOrderByAggregateInput;
    _max?: sizesMaxOrderByAggregateInput;
    _min?: sizesMinOrderByAggregateInput;
    _sum?: sizesSumOrderByAggregateInput;
  };

  export type sizesScalarWhereWithAggregatesInput = {
    AND?:
      | sizesScalarWhereWithAggregatesInput
      | sizesScalarWhereWithAggregatesInput[];
    OR?: sizesScalarWhereWithAggregatesInput[];
    NOT?:
      | sizesScalarWhereWithAggregatesInput
      | sizesScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"sizes"> | number;
    name?: StringNullableWithAggregatesFilter<"sizes"> | string | null;
  };

  export type tickersWhereInput = {
    AND?: tickersWhereInput | tickersWhereInput[];
    OR?: tickersWhereInput[];
    NOT?: tickersWhereInput | tickersWhereInput[];
    id?: IntFilter<"tickers"> | number;
    name?: StringNullableFilter<"tickers"> | string | null;
    issuers?: IssuersListRelationFilter;
  };

  export type tickersOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    issuers?: issuersOrderByRelationAggregateInput;
  };

  export type tickersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: tickersWhereInput | tickersWhereInput[];
      OR?: tickersWhereInput[];
      NOT?: tickersWhereInput | tickersWhereInput[];
      name?: StringNullableFilter<"tickers"> | string | null;
      issuers?: IssuersListRelationFilter;
    },
    "id"
  >;

  export type tickersOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    _count?: tickersCountOrderByAggregateInput;
    _avg?: tickersAvgOrderByAggregateInput;
    _max?: tickersMaxOrderByAggregateInput;
    _min?: tickersMinOrderByAggregateInput;
    _sum?: tickersSumOrderByAggregateInput;
  };

  export type tickersScalarWhereWithAggregatesInput = {
    AND?:
      | tickersScalarWhereWithAggregatesInput
      | tickersScalarWhereWithAggregatesInput[];
    OR?: tickersScalarWhereWithAggregatesInput[];
    NOT?:
      | tickersScalarWhereWithAggregatesInput
      | tickersScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"tickers"> | number;
    name?: StringNullableWithAggregatesFilter<"tickers"> | string | null;
  };

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[];
    OR?: transactionsWhereInput[];
    NOT?: transactionsWhereInput | transactionsWhereInput[];
    id?: IntFilter<"transactions"> | number;
    sediId?: IntNullableFilter<"transactions"> | number | null;
    insiderId?: IntNullableFilter<"transactions"> | number | null;
    issuerId?: IntNullableFilter<"transactions"> | number | null;
    securityId?: IntNullableFilter<"transactions"> | number | null;
    trnFlagId?: IntNullableFilter<"transactions"> | number | null;
    trnDate?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    filingDate?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    ownershipType?:
      | Enumtransactions_ownershipTypeNullableFilter<"transactions">
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?: StringNullableFilter<"transactions"> | string | null;
    trnNatureCode?: IntNullableFilter<"transactions"> | number | null;
    nb?: IntNullableFilter<"transactions"> | number | null;
    nbType?:
      | Enumtransactions_nbTypeNullableFilter<"transactions">
      | $Enums.transactions_nbType
      | null;
    price?: FloatNullableFilter<"transactions"> | number | null;
    priceCurrencyId?: IntNullableFilter<"transactions"> | number | null;
    closingBalance?: FloatNullableFilter<"transactions"> | number | null;
    closingBalanceType?:
      | Enumtransactions_closingBalanceTypeNullableFilter<"transactions">
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: FloatNullableFilter<"transactions"> | number | null;
    calculatedBalanceType?:
      | Enumtransactions_calculatedBalanceTypeNullableFilter<"transactions">
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?: IntNullableFilter<"transactions"> | number | null;
    GeneralRemarks?: StringNullableFilter<"transactions"> | string | null;
    issuers?: XOR<IssuersNullableRelationFilter, issuersWhereInput> | null;
    insiders?: XOR<InsidersNullableRelationFilter, insidersWhereInput> | null;
    securitydesignations?: XOR<
      SecuritydesignationsNullableRelationFilter,
      securitydesignationsWhereInput
    > | null;
    trnflag?: XOR<TrnflagNullableRelationFilter, trnflagWhereInput> | null;
    trnnatures?: XOR<
      TrnnaturesNullableRelationFilter,
      trnnaturesWhereInput
    > | null;
    underlyingsecurities?: XOR<
      UnderlyingsecuritiesNullableRelationFilter,
      underlyingsecuritiesWhereInput
    > | null;
    currency?: XOR<CurrencyNullableRelationFilter, currencyWhereInput> | null;
  };

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder;
    sediId?: SortOrderInput | SortOrder;
    insiderId?: SortOrderInput | SortOrder;
    issuerId?: SortOrderInput | SortOrder;
    securityId?: SortOrderInput | SortOrder;
    trnFlagId?: SortOrderInput | SortOrder;
    trnDate?: SortOrderInput | SortOrder;
    filingDate?: SortOrderInput | SortOrder;
    ownershipType?: SortOrderInput | SortOrder;
    ownershipExtraInfo?: SortOrderInput | SortOrder;
    trnNatureCode?: SortOrderInput | SortOrder;
    nb?: SortOrderInput | SortOrder;
    nbType?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    priceCurrencyId?: SortOrderInput | SortOrder;
    closingBalance?: SortOrderInput | SortOrder;
    closingBalanceType?: SortOrderInput | SortOrder;
    calculatedBalance?: SortOrderInput | SortOrder;
    calculatedBalanceType?: SortOrderInput | SortOrder;
    underlyingSecurityId?: SortOrderInput | SortOrder;
    GeneralRemarks?: SortOrderInput | SortOrder;
    issuers?: issuersOrderByWithRelationInput;
    insiders?: insidersOrderByWithRelationInput;
    securitydesignations?: securitydesignationsOrderByWithRelationInput;
    trnflag?: trnflagOrderByWithRelationInput;
    trnnatures?: trnnaturesOrderByWithRelationInput;
    underlyingsecurities?: underlyingsecuritiesOrderByWithRelationInput;
    currency?: currencyOrderByWithRelationInput;
  };

  export type transactionsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: transactionsWhereInput | transactionsWhereInput[];
      OR?: transactionsWhereInput[];
      NOT?: transactionsWhereInput | transactionsWhereInput[];
      sediId?: IntNullableFilter<"transactions"> | number | null;
      insiderId?: IntNullableFilter<"transactions"> | number | null;
      issuerId?: IntNullableFilter<"transactions"> | number | null;
      securityId?: IntNullableFilter<"transactions"> | number | null;
      trnFlagId?: IntNullableFilter<"transactions"> | number | null;
      trnDate?: DateTimeNullableFilter<"transactions"> | Date | string | null;
      filingDate?:
        | DateTimeNullableFilter<"transactions">
        | Date
        | string
        | null;
      ownershipType?:
        | Enumtransactions_ownershipTypeNullableFilter<"transactions">
        | $Enums.transactions_ownershipType
        | null;
      ownershipExtraInfo?: StringNullableFilter<"transactions"> | string | null;
      trnNatureCode?: IntNullableFilter<"transactions"> | number | null;
      nb?: IntNullableFilter<"transactions"> | number | null;
      nbType?:
        | Enumtransactions_nbTypeNullableFilter<"transactions">
        | $Enums.transactions_nbType
        | null;
      price?: FloatNullableFilter<"transactions"> | number | null;
      priceCurrencyId?: IntNullableFilter<"transactions"> | number | null;
      closingBalance?: FloatNullableFilter<"transactions"> | number | null;
      closingBalanceType?:
        | Enumtransactions_closingBalanceTypeNullableFilter<"transactions">
        | $Enums.transactions_closingBalanceType
        | null;
      calculatedBalance?: FloatNullableFilter<"transactions"> | number | null;
      calculatedBalanceType?:
        | Enumtransactions_calculatedBalanceTypeNullableFilter<"transactions">
        | $Enums.transactions_calculatedBalanceType
        | null;
      underlyingSecurityId?: IntNullableFilter<"transactions"> | number | null;
      GeneralRemarks?: StringNullableFilter<"transactions"> | string | null;
      issuers?: XOR<IssuersNullableRelationFilter, issuersWhereInput> | null;
      insiders?: XOR<InsidersNullableRelationFilter, insidersWhereInput> | null;
      securitydesignations?: XOR<
        SecuritydesignationsNullableRelationFilter,
        securitydesignationsWhereInput
      > | null;
      trnflag?: XOR<TrnflagNullableRelationFilter, trnflagWhereInput> | null;
      trnnatures?: XOR<
        TrnnaturesNullableRelationFilter,
        trnnaturesWhereInput
      > | null;
      underlyingsecurities?: XOR<
        UnderlyingsecuritiesNullableRelationFilter,
        underlyingsecuritiesWhereInput
      > | null;
      currency?: XOR<CurrencyNullableRelationFilter, currencyWhereInput> | null;
    },
    "id"
  >;

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder;
    sediId?: SortOrderInput | SortOrder;
    insiderId?: SortOrderInput | SortOrder;
    issuerId?: SortOrderInput | SortOrder;
    securityId?: SortOrderInput | SortOrder;
    trnFlagId?: SortOrderInput | SortOrder;
    trnDate?: SortOrderInput | SortOrder;
    filingDate?: SortOrderInput | SortOrder;
    ownershipType?: SortOrderInput | SortOrder;
    ownershipExtraInfo?: SortOrderInput | SortOrder;
    trnNatureCode?: SortOrderInput | SortOrder;
    nb?: SortOrderInput | SortOrder;
    nbType?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    priceCurrencyId?: SortOrderInput | SortOrder;
    closingBalance?: SortOrderInput | SortOrder;
    closingBalanceType?: SortOrderInput | SortOrder;
    calculatedBalance?: SortOrderInput | SortOrder;
    calculatedBalanceType?: SortOrderInput | SortOrder;
    underlyingSecurityId?: SortOrderInput | SortOrder;
    GeneralRemarks?: SortOrderInput | SortOrder;
    _count?: transactionsCountOrderByAggregateInput;
    _avg?: transactionsAvgOrderByAggregateInput;
    _max?: transactionsMaxOrderByAggregateInput;
    _min?: transactionsMinOrderByAggregateInput;
    _sum?: transactionsSumOrderByAggregateInput;
  };

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?:
      | transactionsScalarWhereWithAggregatesInput
      | transactionsScalarWhereWithAggregatesInput[];
    OR?: transactionsScalarWhereWithAggregatesInput[];
    NOT?:
      | transactionsScalarWhereWithAggregatesInput
      | transactionsScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"transactions"> | number;
    sediId?: IntNullableWithAggregatesFilter<"transactions"> | number | null;
    insiderId?: IntNullableWithAggregatesFilter<"transactions"> | number | null;
    issuerId?: IntNullableWithAggregatesFilter<"transactions"> | number | null;
    securityId?:
      | IntNullableWithAggregatesFilter<"transactions">
      | number
      | null;
    trnFlagId?: IntNullableWithAggregatesFilter<"transactions"> | number | null;
    trnDate?:
      | DateTimeNullableWithAggregatesFilter<"transactions">
      | Date
      | string
      | null;
    filingDate?:
      | DateTimeNullableWithAggregatesFilter<"transactions">
      | Date
      | string
      | null;
    ownershipType?:
      | Enumtransactions_ownershipTypeNullableWithAggregatesFilter<"transactions">
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | StringNullableWithAggregatesFilter<"transactions">
      | string
      | null;
    trnNatureCode?:
      | IntNullableWithAggregatesFilter<"transactions">
      | number
      | null;
    nb?: IntNullableWithAggregatesFilter<"transactions"> | number | null;
    nbType?:
      | Enumtransactions_nbTypeNullableWithAggregatesFilter<"transactions">
      | $Enums.transactions_nbType
      | null;
    price?: FloatNullableWithAggregatesFilter<"transactions"> | number | null;
    priceCurrencyId?:
      | IntNullableWithAggregatesFilter<"transactions">
      | number
      | null;
    closingBalance?:
      | FloatNullableWithAggregatesFilter<"transactions">
      | number
      | null;
    closingBalanceType?:
      | Enumtransactions_closingBalanceTypeNullableWithAggregatesFilter<"transactions">
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?:
      | FloatNullableWithAggregatesFilter<"transactions">
      | number
      | null;
    calculatedBalanceType?:
      | Enumtransactions_calculatedBalanceTypeNullableWithAggregatesFilter<"transactions">
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | IntNullableWithAggregatesFilter<"transactions">
      | number
      | null;
    GeneralRemarks?:
      | StringNullableWithAggregatesFilter<"transactions">
      | string
      | null;
  };

  export type trnflagWhereInput = {
    AND?: trnflagWhereInput | trnflagWhereInput[];
    OR?: trnflagWhereInput[];
    NOT?: trnflagWhereInput | trnflagWhereInput[];
    id?: IntFilter<"trnflag"> | number;
    name?: StringNullableFilter<"trnflag"> | string | null;
    transactions?: TransactionsListRelationFilter;
  };

  export type trnflagOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    transactions?: transactionsOrderByRelationAggregateInput;
  };

  export type trnflagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: trnflagWhereInput | trnflagWhereInput[];
      OR?: trnflagWhereInput[];
      NOT?: trnflagWhereInput | trnflagWhereInput[];
      name?: StringNullableFilter<"trnflag"> | string | null;
      transactions?: TransactionsListRelationFilter;
    },
    "id"
  >;

  export type trnflagOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    _count?: trnflagCountOrderByAggregateInput;
    _avg?: trnflagAvgOrderByAggregateInput;
    _max?: trnflagMaxOrderByAggregateInput;
    _min?: trnflagMinOrderByAggregateInput;
    _sum?: trnflagSumOrderByAggregateInput;
  };

  export type trnflagScalarWhereWithAggregatesInput = {
    AND?:
      | trnflagScalarWhereWithAggregatesInput
      | trnflagScalarWhereWithAggregatesInput[];
    OR?: trnflagScalarWhereWithAggregatesInput[];
    NOT?:
      | trnflagScalarWhereWithAggregatesInput
      | trnflagScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"trnflag"> | number;
    name?: StringNullableWithAggregatesFilter<"trnflag"> | string | null;
  };

  export type trnnaturesWhereInput = {
    AND?: trnnaturesWhereInput | trnnaturesWhereInput[];
    OR?: trnnaturesWhereInput[];
    NOT?: trnnaturesWhereInput | trnnaturesWhereInput[];
    code?: IntFilter<"trnnatures"> | number;
    description?: StringNullableFilter<"trnnatures"> | string | null;
    transactions?: TransactionsListRelationFilter;
  };

  export type trnnaturesOrderByWithRelationInput = {
    code?: SortOrder;
    description?: SortOrderInput | SortOrder;
    transactions?: transactionsOrderByRelationAggregateInput;
  };

  export type trnnaturesWhereUniqueInput = Prisma.AtLeast<
    {
      code?: number;
      AND?: trnnaturesWhereInput | trnnaturesWhereInput[];
      OR?: trnnaturesWhereInput[];
      NOT?: trnnaturesWhereInput | trnnaturesWhereInput[];
      description?: StringNullableFilter<"trnnatures"> | string | null;
      transactions?: TransactionsListRelationFilter;
    },
    "code"
  >;

  export type trnnaturesOrderByWithAggregationInput = {
    code?: SortOrder;
    description?: SortOrderInput | SortOrder;
    _count?: trnnaturesCountOrderByAggregateInput;
    _avg?: trnnaturesAvgOrderByAggregateInput;
    _max?: trnnaturesMaxOrderByAggregateInput;
    _min?: trnnaturesMinOrderByAggregateInput;
    _sum?: trnnaturesSumOrderByAggregateInput;
  };

  export type trnnaturesScalarWhereWithAggregatesInput = {
    AND?:
      | trnnaturesScalarWhereWithAggregatesInput
      | trnnaturesScalarWhereWithAggregatesInput[];
    OR?: trnnaturesScalarWhereWithAggregatesInput[];
    NOT?:
      | trnnaturesScalarWhereWithAggregatesInput
      | trnnaturesScalarWhereWithAggregatesInput[];
    code?: IntWithAggregatesFilter<"trnnatures"> | number;
    description?:
      | StringNullableWithAggregatesFilter<"trnnatures">
      | string
      | null;
  };

  export type underlyingsecuritiesWhereInput = {
    AND?: underlyingsecuritiesWhereInput | underlyingsecuritiesWhereInput[];
    OR?: underlyingsecuritiesWhereInput[];
    NOT?: underlyingsecuritiesWhereInput | underlyingsecuritiesWhereInput[];
    id?: IntFilter<"underlyingsecurities"> | number;
    securityId?: IntNullableFilter<"underlyingsecurities"> | number | null;
    nb?: IntNullableFilter<"underlyingsecurities"> | number | null;
    nbType?:
      | Enumunderlyingsecurities_nbTypeNullableFilter<"underlyingsecurities">
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: IntNullableFilter<"underlyingsecurities"> | number | null;
    BalanceType?:
      | Enumunderlyingsecurities_BalanceTypeNullableFilter<"underlyingsecurities">
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: FloatNullableFilter<"underlyingsecurities"> | number | null;
    exercisePriceCurrencyId?:
      | IntNullableFilter<"underlyingsecurities">
      | number
      | null;
    expiryDate?:
      | DateTimeNullableFilter<"underlyingsecurities">
      | Date
      | string
      | null;
    transactions?: TransactionsListRelationFilter;
    securitydesignations?: XOR<
      SecuritydesignationsNullableRelationFilter,
      securitydesignationsWhereInput
    > | null;
    currency?: XOR<CurrencyNullableRelationFilter, currencyWhereInput> | null;
  };

  export type underlyingsecuritiesOrderByWithRelationInput = {
    id?: SortOrder;
    securityId?: SortOrderInput | SortOrder;
    nb?: SortOrderInput | SortOrder;
    nbType?: SortOrderInput | SortOrder;
    Balance?: SortOrderInput | SortOrder;
    BalanceType?: SortOrderInput | SortOrder;
    exercisePrice?: SortOrderInput | SortOrder;
    exercisePriceCurrencyId?: SortOrderInput | SortOrder;
    expiryDate?: SortOrderInput | SortOrder;
    transactions?: transactionsOrderByRelationAggregateInput;
    securitydesignations?: securitydesignationsOrderByWithRelationInput;
    currency?: currencyOrderByWithRelationInput;
  };

  export type underlyingsecuritiesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: underlyingsecuritiesWhereInput | underlyingsecuritiesWhereInput[];
      OR?: underlyingsecuritiesWhereInput[];
      NOT?: underlyingsecuritiesWhereInput | underlyingsecuritiesWhereInput[];
      securityId?: IntNullableFilter<"underlyingsecurities"> | number | null;
      nb?: IntNullableFilter<"underlyingsecurities"> | number | null;
      nbType?:
        | Enumunderlyingsecurities_nbTypeNullableFilter<"underlyingsecurities">
        | $Enums.underlyingsecurities_nbType
        | null;
      Balance?: IntNullableFilter<"underlyingsecurities"> | number | null;
      BalanceType?:
        | Enumunderlyingsecurities_BalanceTypeNullableFilter<"underlyingsecurities">
        | $Enums.underlyingsecurities_BalanceType
        | null;
      exercisePrice?:
        | FloatNullableFilter<"underlyingsecurities">
        | number
        | null;
      exercisePriceCurrencyId?:
        | IntNullableFilter<"underlyingsecurities">
        | number
        | null;
      expiryDate?:
        | DateTimeNullableFilter<"underlyingsecurities">
        | Date
        | string
        | null;
      transactions?: TransactionsListRelationFilter;
      securitydesignations?: XOR<
        SecuritydesignationsNullableRelationFilter,
        securitydesignationsWhereInput
      > | null;
      currency?: XOR<CurrencyNullableRelationFilter, currencyWhereInput> | null;
    },
    "id"
  >;

  export type underlyingsecuritiesOrderByWithAggregationInput = {
    id?: SortOrder;
    securityId?: SortOrderInput | SortOrder;
    nb?: SortOrderInput | SortOrder;
    nbType?: SortOrderInput | SortOrder;
    Balance?: SortOrderInput | SortOrder;
    BalanceType?: SortOrderInput | SortOrder;
    exercisePrice?: SortOrderInput | SortOrder;
    exercisePriceCurrencyId?: SortOrderInput | SortOrder;
    expiryDate?: SortOrderInput | SortOrder;
    _count?: underlyingsecuritiesCountOrderByAggregateInput;
    _avg?: underlyingsecuritiesAvgOrderByAggregateInput;
    _max?: underlyingsecuritiesMaxOrderByAggregateInput;
    _min?: underlyingsecuritiesMinOrderByAggregateInput;
    _sum?: underlyingsecuritiesSumOrderByAggregateInput;
  };

  export type underlyingsecuritiesScalarWhereWithAggregatesInput = {
    AND?:
      | underlyingsecuritiesScalarWhereWithAggregatesInput
      | underlyingsecuritiesScalarWhereWithAggregatesInput[];
    OR?: underlyingsecuritiesScalarWhereWithAggregatesInput[];
    NOT?:
      | underlyingsecuritiesScalarWhereWithAggregatesInput
      | underlyingsecuritiesScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"underlyingsecurities"> | number;
    securityId?:
      | IntNullableWithAggregatesFilter<"underlyingsecurities">
      | number
      | null;
    nb?:
      | IntNullableWithAggregatesFilter<"underlyingsecurities">
      | number
      | null;
    nbType?:
      | Enumunderlyingsecurities_nbTypeNullableWithAggregatesFilter<"underlyingsecurities">
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?:
      | IntNullableWithAggregatesFilter<"underlyingsecurities">
      | number
      | null;
    BalanceType?:
      | Enumunderlyingsecurities_BalanceTypeNullableWithAggregatesFilter<"underlyingsecurities">
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?:
      | FloatNullableWithAggregatesFilter<"underlyingsecurities">
      | number
      | null;
    exercisePriceCurrencyId?:
      | IntNullableWithAggregatesFilter<"underlyingsecurities">
      | number
      | null;
    expiryDate?:
      | DateTimeNullableWithAggregatesFilter<"underlyingsecurities">
      | Date
      | string
      | null;
  };

  export type currencyCreateInput = {
    name?: string | null;
    transactions?: transactionsCreateNestedManyWithoutCurrencyInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedManyWithoutCurrencyInput;
  };

  export type currencyUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    transactions?: transactionsUncheckedCreateNestedManyWithoutCurrencyInput;
    underlyingsecurities?: underlyingsecuritiesUncheckedCreateNestedManyWithoutCurrencyInput;
  };

  export type currencyUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUpdateManyWithoutCurrencyNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateManyWithoutCurrencyNestedInput;
  };

  export type currencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUncheckedUpdateManyWithoutCurrencyNestedInput;
    underlyingsecurities?: underlyingsecuritiesUncheckedUpdateManyWithoutCurrencyNestedInput;
  };

  export type currencyCreateManyInput = {
    id?: number;
    name?: string | null;
  };

  export type currencyUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type currencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type exchangesCreateInput = {
    name?: string | null;
    issuerexchanges?: issuerexchangesCreateNestedManyWithoutExchangesInput;
  };

  export type exchangesUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    issuerexchanges?: issuerexchangesUncheckedCreateNestedManyWithoutExchangesInput;
  };

  export type exchangesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuerexchanges?: issuerexchangesUpdateManyWithoutExchangesNestedInput;
  };

  export type exchangesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuerexchanges?: issuerexchangesUncheckedUpdateManyWithoutExchangesNestedInput;
  };

  export type exchangesCreateManyInput = {
    id?: number;
    name?: string | null;
  };

  export type exchangesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type exchangesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type insidersCreateInput = {
    name?: string | null;
    ceasedToBeInsider?: string | null;
    issuers?: issuersCreateNestedOneWithoutInsidersInput;
    relationstoissuer?: relationstoissuerCreateNestedManyWithoutInsidersInput;
    transactions?: transactionsCreateNestedManyWithoutInsidersInput;
  };

  export type insidersUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    issuerId?: number | null;
    ceasedToBeInsider?: string | null;
    relationstoissuer?: relationstoissuerUncheckedCreateNestedManyWithoutInsidersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutInsidersInput;
  };

  export type insidersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    issuers?: issuersUpdateOneWithoutInsidersNestedInput;
    relationstoissuer?: relationstoissuerUpdateManyWithoutInsidersNestedInput;
    transactions?: transactionsUpdateManyWithoutInsidersNestedInput;
  };

  export type insidersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    relationstoissuer?: relationstoissuerUncheckedUpdateManyWithoutInsidersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutInsidersNestedInput;
  };

  export type insidersCreateManyInput = {
    id?: number;
    name?: string | null;
    issuerId?: number | null;
    ceasedToBeInsider?: string | null;
  };

  export type insidersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
  };

  export type insidersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
  };

  export type issuerexchangesCreateInput = {
    issuers: issuersCreateNestedOneWithoutIssuerexchangesInput;
    exchanges: exchangesCreateNestedOneWithoutIssuerexchangesInput;
  };

  export type issuerexchangesUncheckedCreateInput = {
    issuerId: number;
    exchangeId: number;
  };

  export type issuerexchangesUpdateInput = {
    issuers?: issuersUpdateOneRequiredWithoutIssuerexchangesNestedInput;
    exchanges?: exchangesUpdateOneRequiredWithoutIssuerexchangesNestedInput;
  };

  export type issuerexchangesUncheckedUpdateInput = {
    issuerId?: IntFieldUpdateOperationsInput | number;
    exchangeId?: IntFieldUpdateOperationsInput | number;
  };

  export type issuerexchangesCreateManyInput = {
    issuerId: number;
    exchangeId: number;
  };

  export type issuerexchangesUpdateManyMutationInput = {};

  export type issuerexchangesUncheckedUpdateManyInput = {
    issuerId?: IntFieldUpdateOperationsInput | number;
    exchangeId?: IntFieldUpdateOperationsInput | number;
  };

  export type issuersCreateInput = {
    sedarId?: number | null;
    name?: string | null;
    insiders?: insidersCreateNestedManyWithoutIssuersInput;
    issuerexchanges?: issuerexchangesCreateNestedManyWithoutIssuersInput;
    tickers?: tickersCreateNestedOneWithoutIssuersInput;
    sizes?: sizesCreateNestedOneWithoutIssuersInput;
    transactions?: transactionsCreateNestedManyWithoutIssuersInput;
  };

  export type issuersUncheckedCreateInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    tickerId?: number | null;
    sizeId?: number | null;
    insiders?: insidersUncheckedCreateNestedManyWithoutIssuersInput;
    issuerexchanges?: issuerexchangesUncheckedCreateNestedManyWithoutIssuersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutIssuersInput;
  };

  export type issuersUpdateInput = {
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    insiders?: insidersUpdateManyWithoutIssuersNestedInput;
    issuerexchanges?: issuerexchangesUpdateManyWithoutIssuersNestedInput;
    tickers?: tickersUpdateOneWithoutIssuersNestedInput;
    sizes?: sizesUpdateOneWithoutIssuersNestedInput;
    transactions?: transactionsUpdateManyWithoutIssuersNestedInput;
  };

  export type issuersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    tickerId?: NullableIntFieldUpdateOperationsInput | number | null;
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiders?: insidersUncheckedUpdateManyWithoutIssuersNestedInput;
    issuerexchanges?: issuerexchangesUncheckedUpdateManyWithoutIssuersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutIssuersNestedInput;
  };

  export type issuersCreateManyInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    tickerId?: number | null;
    sizeId?: number | null;
  };

  export type issuersUpdateManyMutationInput = {
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type issuersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    tickerId?: NullableIntFieldUpdateOperationsInput | number | null;
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type relationstoissuerCreateInput = {
    type: $Enums.relationstoissuer_type;
    insiders: insidersCreateNestedOneWithoutRelationstoissuerInput;
  };

  export type relationstoissuerUncheckedCreateInput = {
    type: $Enums.relationstoissuer_type;
    insiderId: number;
  };

  export type relationstoissuerUpdateInput = {
    type?:
      | Enumrelationstoissuer_typeFieldUpdateOperationsInput
      | $Enums.relationstoissuer_type;
    insiders?: insidersUpdateOneRequiredWithoutRelationstoissuerNestedInput;
  };

  export type relationstoissuerUncheckedUpdateInput = {
    type?:
      | Enumrelationstoissuer_typeFieldUpdateOperationsInput
      | $Enums.relationstoissuer_type;
    insiderId?: IntFieldUpdateOperationsInput | number;
  };

  export type relationstoissuerCreateManyInput = {
    type: $Enums.relationstoissuer_type;
    insiderId: number;
  };

  export type relationstoissuerUpdateManyMutationInput = {
    type?:
      | Enumrelationstoissuer_typeFieldUpdateOperationsInput
      | $Enums.relationstoissuer_type;
  };

  export type relationstoissuerUncheckedUpdateManyInput = {
    type?:
      | Enumrelationstoissuer_typeFieldUpdateOperationsInput
      | $Enums.relationstoissuer_type;
    insiderId?: IntFieldUpdateOperationsInput | number;
  };

  export type securitydesignationsCreateInput = {
    name?: string | null;
    transactions?: transactionsCreateNestedManyWithoutSecuritydesignationsInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedManyWithoutSecuritydesignationsInput;
  };

  export type securitydesignationsUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    transactions?: transactionsUncheckedCreateNestedManyWithoutSecuritydesignationsInput;
    underlyingsecurities?: underlyingsecuritiesUncheckedCreateNestedManyWithoutSecuritydesignationsInput;
  };

  export type securitydesignationsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUpdateManyWithoutSecuritydesignationsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateManyWithoutSecuritydesignationsNestedInput;
  };

  export type securitydesignationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUncheckedUpdateManyWithoutSecuritydesignationsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUncheckedUpdateManyWithoutSecuritydesignationsNestedInput;
  };

  export type securitydesignationsCreateManyInput = {
    id?: number;
    name?: string | null;
  };

  export type securitydesignationsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type securitydesignationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type sizesCreateInput = {
    name?: string | null;
    issuers?: issuersCreateNestedManyWithoutSizesInput;
  };

  export type sizesUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    issuers?: issuersUncheckedCreateNestedManyWithoutSizesInput;
  };

  export type sizesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateManyWithoutSizesNestedInput;
  };

  export type sizesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUncheckedUpdateManyWithoutSizesNestedInput;
  };

  export type sizesCreateManyInput = {
    id?: number;
    name?: string | null;
  };

  export type sizesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type sizesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type tickersCreateInput = {
    name?: string | null;
    issuers?: issuersCreateNestedManyWithoutTickersInput;
  };

  export type tickersUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    issuers?: issuersUncheckedCreateNestedManyWithoutTickersInput;
  };

  export type tickersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateManyWithoutTickersNestedInput;
  };

  export type tickersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUncheckedUpdateManyWithoutTickersNestedInput;
  };

  export type tickersCreateManyInput = {
    id?: number;
    name?: string | null;
  };

  export type tickersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type tickersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsCreateInput = {
    sediId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
    issuers?: issuersCreateNestedOneWithoutTransactionsInput;
    insiders?: insidersCreateNestedOneWithoutTransactionsInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutTransactionsInput;
    trnflag?: trnflagCreateNestedOneWithoutTransactionsInput;
    trnnatures?: trnnaturesCreateNestedOneWithoutTransactionsInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedOneWithoutTransactionsInput;
    currency?: currencyCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsUpdateInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateOneWithoutTransactionsNestedInput;
    insiders?: insidersUpdateOneWithoutTransactionsNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutTransactionsNestedInput;
    trnflag?: trnflagUpdateOneWithoutTransactionsNestedInput;
    trnnatures?: trnnaturesUpdateOneWithoutTransactionsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateOneWithoutTransactionsNestedInput;
    currency?: currencyUpdateOneWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsCreateManyInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsUpdateManyMutationInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type trnflagCreateInput = {
    name?: string | null;
    transactions?: transactionsCreateNestedManyWithoutTrnflagInput;
  };

  export type trnflagUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    transactions?: transactionsUncheckedCreateNestedManyWithoutTrnflagInput;
  };

  export type trnflagUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUpdateManyWithoutTrnflagNestedInput;
  };

  export type trnflagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUncheckedUpdateManyWithoutTrnflagNestedInput;
  };

  export type trnflagCreateManyInput = {
    id?: number;
    name?: string | null;
  };

  export type trnflagUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type trnflagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type trnnaturesCreateInput = {
    code: number;
    description?: string | null;
    transactions?: transactionsCreateNestedManyWithoutTrnnaturesInput;
  };

  export type trnnaturesUncheckedCreateInput = {
    code: number;
    description?: string | null;
    transactions?: transactionsUncheckedCreateNestedManyWithoutTrnnaturesInput;
  };

  export type trnnaturesUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUpdateManyWithoutTrnnaturesNestedInput;
  };

  export type trnnaturesUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUncheckedUpdateManyWithoutTrnnaturesNestedInput;
  };

  export type trnnaturesCreateManyInput = {
    code: number;
    description?: string | null;
  };

  export type trnnaturesUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type trnnaturesUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type underlyingsecuritiesCreateInput = {
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    expiryDate?: Date | string | null;
    transactions?: transactionsCreateNestedManyWithoutUnderlyingsecuritiesInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutUnderlyingsecuritiesInput;
    currency?: currencyCreateNestedOneWithoutUnderlyingsecuritiesInput;
  };

  export type underlyingsecuritiesUncheckedCreateInput = {
    id?: number;
    securityId?: number | null;
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    exercisePriceCurrencyId?: number | null;
    expiryDate?: Date | string | null;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUnderlyingsecuritiesInput;
  };

  export type underlyingsecuritiesUpdateInput = {
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions?: transactionsUpdateManyWithoutUnderlyingsecuritiesNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutUnderlyingsecuritiesNestedInput;
    currency?: currencyUpdateOneWithoutUnderlyingsecuritiesNestedInput;
  };

  export type underlyingsecuritiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    exercisePriceCurrencyId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions?: transactionsUncheckedUpdateManyWithoutUnderlyingsecuritiesNestedInput;
  };

  export type underlyingsecuritiesCreateManyInput = {
    id?: number;
    securityId?: number | null;
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    exercisePriceCurrencyId?: number | null;
    expiryDate?: Date | string | null;
  };

  export type underlyingsecuritiesUpdateManyMutationInput = {
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type underlyingsecuritiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    exercisePriceCurrencyId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput;
    some?: transactionsWhereInput;
    none?: transactionsWhereInput;
  };

  export type UnderlyingsecuritiesListRelationFilter = {
    every?: underlyingsecuritiesWhereInput;
    some?: underlyingsecuritiesWhereInput;
    none?: underlyingsecuritiesWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type underlyingsecuritiesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type currencyCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type currencyAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type currencyMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type currencyMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type currencySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IssuerexchangesListRelationFilter = {
    every?: issuerexchangesWhereInput;
    some?: issuerexchangesWhereInput;
    none?: issuerexchangesWhereInput;
  };

  export type issuerexchangesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type exchangesCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type exchangesAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type exchangesMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type exchangesMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type exchangesSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type IssuersNullableRelationFilter = {
    is?: issuersWhereInput | null;
    isNot?: issuersWhereInput | null;
  };

  export type RelationstoissuerListRelationFilter = {
    every?: relationstoissuerWhereInput;
    some?: relationstoissuerWhereInput;
    none?: relationstoissuerWhereInput;
  };

  export type relationstoissuerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type insidersCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    issuerId?: SortOrder;
    ceasedToBeInsider?: SortOrder;
  };

  export type insidersAvgOrderByAggregateInput = {
    id?: SortOrder;
    issuerId?: SortOrder;
  };

  export type insidersMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    issuerId?: SortOrder;
    ceasedToBeInsider?: SortOrder;
  };

  export type insidersMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    issuerId?: SortOrder;
    ceasedToBeInsider?: SortOrder;
  };

  export type insidersSumOrderByAggregateInput = {
    id?: SortOrder;
    issuerId?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type IssuersRelationFilter = {
    is?: issuersWhereInput;
    isNot?: issuersWhereInput;
  };

  export type ExchangesRelationFilter = {
    is?: exchangesWhereInput;
    isNot?: exchangesWhereInput;
  };

  export type issuerexchangesIssuerIdExchangeIdCompoundUniqueInput = {
    issuerId: number;
    exchangeId: number;
  };

  export type issuerexchangesCountOrderByAggregateInput = {
    issuerId?: SortOrder;
    exchangeId?: SortOrder;
  };

  export type issuerexchangesAvgOrderByAggregateInput = {
    issuerId?: SortOrder;
    exchangeId?: SortOrder;
  };

  export type issuerexchangesMaxOrderByAggregateInput = {
    issuerId?: SortOrder;
    exchangeId?: SortOrder;
  };

  export type issuerexchangesMinOrderByAggregateInput = {
    issuerId?: SortOrder;
    exchangeId?: SortOrder;
  };

  export type issuerexchangesSumOrderByAggregateInput = {
    issuerId?: SortOrder;
    exchangeId?: SortOrder;
  };

  export type InsidersListRelationFilter = {
    every?: insidersWhereInput;
    some?: insidersWhereInput;
    none?: insidersWhereInput;
  };

  export type TickersNullableRelationFilter = {
    is?: tickersWhereInput | null;
    isNot?: tickersWhereInput | null;
  };

  export type SizesNullableRelationFilter = {
    is?: sizesWhereInput | null;
    isNot?: sizesWhereInput | null;
  };

  export type insidersOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type issuersCountOrderByAggregateInput = {
    id?: SortOrder;
    sedarId?: SortOrder;
    name?: SortOrder;
    tickerId?: SortOrder;
    sizeId?: SortOrder;
  };

  export type issuersAvgOrderByAggregateInput = {
    id?: SortOrder;
    sedarId?: SortOrder;
    tickerId?: SortOrder;
    sizeId?: SortOrder;
  };

  export type issuersMaxOrderByAggregateInput = {
    id?: SortOrder;
    sedarId?: SortOrder;
    name?: SortOrder;
    tickerId?: SortOrder;
    sizeId?: SortOrder;
  };

  export type issuersMinOrderByAggregateInput = {
    id?: SortOrder;
    sedarId?: SortOrder;
    name?: SortOrder;
    tickerId?: SortOrder;
    sizeId?: SortOrder;
  };

  export type issuersSumOrderByAggregateInput = {
    id?: SortOrder;
    sedarId?: SortOrder;
    tickerId?: SortOrder;
    sizeId?: SortOrder;
  };

  export type Enumrelationstoissuer_typeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.relationstoissuer_type
      | Enumrelationstoissuer_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.relationstoissuer_type[];
    notIn?: $Enums.relationstoissuer_type[];
    not?:
      | NestedEnumrelationstoissuer_typeFilter<$PrismaModel>
      | $Enums.relationstoissuer_type;
  };

  export type InsidersRelationFilter = {
    is?: insidersWhereInput;
    isNot?: insidersWhereInput;
  };

  export type relationstoissuerTypeInsiderIdCompoundUniqueInput = {
    type: $Enums.relationstoissuer_type;
    insiderId: number;
  };

  export type relationstoissuerCountOrderByAggregateInput = {
    type?: SortOrder;
    insiderId?: SortOrder;
  };

  export type relationstoissuerAvgOrderByAggregateInput = {
    insiderId?: SortOrder;
  };

  export type relationstoissuerMaxOrderByAggregateInput = {
    type?: SortOrder;
    insiderId?: SortOrder;
  };

  export type relationstoissuerMinOrderByAggregateInput = {
    type?: SortOrder;
    insiderId?: SortOrder;
  };

  export type relationstoissuerSumOrderByAggregateInput = {
    insiderId?: SortOrder;
  };

  export type Enumrelationstoissuer_typeWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.relationstoissuer_type
      | Enumrelationstoissuer_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.relationstoissuer_type[];
    notIn?: $Enums.relationstoissuer_type[];
    not?:
      | NestedEnumrelationstoissuer_typeWithAggregatesFilter<$PrismaModel>
      | $Enums.relationstoissuer_type;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumrelationstoissuer_typeFilter<$PrismaModel>;
    _max?: NestedEnumrelationstoissuer_typeFilter<$PrismaModel>;
  };

  export type securitydesignationsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type securitydesignationsAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type securitydesignationsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type securitydesignationsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type securitydesignationsSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IssuersListRelationFilter = {
    every?: issuersWhereInput;
    some?: issuersWhereInput;
    none?: issuersWhereInput;
  };

  export type issuersOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type sizesCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type sizesAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type sizesMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type sizesMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type sizesSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type tickersCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type tickersAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type tickersMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type tickersMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type tickersSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type Enumtransactions_ownershipTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_ownershipType
      | Enumtransactions_ownershipTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_ownershipType[] | null;
    notIn?: $Enums.transactions_ownershipType[] | null;
    not?:
      | NestedEnumtransactions_ownershipTypeNullableFilter<$PrismaModel>
      | $Enums.transactions_ownershipType
      | null;
  };

  export type Enumtransactions_nbTypeNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.transactions_nbType
      | Enumtransactions_nbTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_nbType[] | null;
    notIn?: $Enums.transactions_nbType[] | null;
    not?:
      | NestedEnumtransactions_nbTypeNullableFilter<$PrismaModel>
      | $Enums.transactions_nbType
      | null;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type Enumtransactions_closingBalanceTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_closingBalanceType
      | Enumtransactions_closingBalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_closingBalanceType[] | null;
    notIn?: $Enums.transactions_closingBalanceType[] | null;
    not?:
      | NestedEnumtransactions_closingBalanceTypeNullableFilter<$PrismaModel>
      | $Enums.transactions_closingBalanceType
      | null;
  };

  export type Enumtransactions_calculatedBalanceTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_calculatedBalanceType
      | Enumtransactions_calculatedBalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_calculatedBalanceType[] | null;
    notIn?: $Enums.transactions_calculatedBalanceType[] | null;
    not?:
      | NestedEnumtransactions_calculatedBalanceTypeNullableFilter<$PrismaModel>
      | $Enums.transactions_calculatedBalanceType
      | null;
  };

  export type InsidersNullableRelationFilter = {
    is?: insidersWhereInput | null;
    isNot?: insidersWhereInput | null;
  };

  export type SecuritydesignationsNullableRelationFilter = {
    is?: securitydesignationsWhereInput | null;
    isNot?: securitydesignationsWhereInput | null;
  };

  export type TrnflagNullableRelationFilter = {
    is?: trnflagWhereInput | null;
    isNot?: trnflagWhereInput | null;
  };

  export type TrnnaturesNullableRelationFilter = {
    is?: trnnaturesWhereInput | null;
    isNot?: trnnaturesWhereInput | null;
  };

  export type UnderlyingsecuritiesNullableRelationFilter = {
    is?: underlyingsecuritiesWhereInput | null;
    isNot?: underlyingsecuritiesWhereInput | null;
  };

  export type CurrencyNullableRelationFilter = {
    is?: currencyWhereInput | null;
    isNot?: currencyWhereInput | null;
  };

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder;
    sediId?: SortOrder;
    insiderId?: SortOrder;
    issuerId?: SortOrder;
    securityId?: SortOrder;
    trnFlagId?: SortOrder;
    trnDate?: SortOrder;
    filingDate?: SortOrder;
    ownershipType?: SortOrder;
    ownershipExtraInfo?: SortOrder;
    trnNatureCode?: SortOrder;
    nb?: SortOrder;
    nbType?: SortOrder;
    price?: SortOrder;
    priceCurrencyId?: SortOrder;
    closingBalance?: SortOrder;
    closingBalanceType?: SortOrder;
    calculatedBalance?: SortOrder;
    calculatedBalanceType?: SortOrder;
    underlyingSecurityId?: SortOrder;
    GeneralRemarks?: SortOrder;
  };

  export type transactionsAvgOrderByAggregateInput = {
    id?: SortOrder;
    sediId?: SortOrder;
    insiderId?: SortOrder;
    issuerId?: SortOrder;
    securityId?: SortOrder;
    trnFlagId?: SortOrder;
    trnNatureCode?: SortOrder;
    nb?: SortOrder;
    price?: SortOrder;
    priceCurrencyId?: SortOrder;
    closingBalance?: SortOrder;
    calculatedBalance?: SortOrder;
    underlyingSecurityId?: SortOrder;
  };

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder;
    sediId?: SortOrder;
    insiderId?: SortOrder;
    issuerId?: SortOrder;
    securityId?: SortOrder;
    trnFlagId?: SortOrder;
    trnDate?: SortOrder;
    filingDate?: SortOrder;
    ownershipType?: SortOrder;
    ownershipExtraInfo?: SortOrder;
    trnNatureCode?: SortOrder;
    nb?: SortOrder;
    nbType?: SortOrder;
    price?: SortOrder;
    priceCurrencyId?: SortOrder;
    closingBalance?: SortOrder;
    closingBalanceType?: SortOrder;
    calculatedBalance?: SortOrder;
    calculatedBalanceType?: SortOrder;
    underlyingSecurityId?: SortOrder;
    GeneralRemarks?: SortOrder;
  };

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder;
    sediId?: SortOrder;
    insiderId?: SortOrder;
    issuerId?: SortOrder;
    securityId?: SortOrder;
    trnFlagId?: SortOrder;
    trnDate?: SortOrder;
    filingDate?: SortOrder;
    ownershipType?: SortOrder;
    ownershipExtraInfo?: SortOrder;
    trnNatureCode?: SortOrder;
    nb?: SortOrder;
    nbType?: SortOrder;
    price?: SortOrder;
    priceCurrencyId?: SortOrder;
    closingBalance?: SortOrder;
    closingBalanceType?: SortOrder;
    calculatedBalance?: SortOrder;
    calculatedBalanceType?: SortOrder;
    underlyingSecurityId?: SortOrder;
    GeneralRemarks?: SortOrder;
  };

  export type transactionsSumOrderByAggregateInput = {
    id?: SortOrder;
    sediId?: SortOrder;
    insiderId?: SortOrder;
    issuerId?: SortOrder;
    securityId?: SortOrder;
    trnFlagId?: SortOrder;
    trnNatureCode?: SortOrder;
    nb?: SortOrder;
    price?: SortOrder;
    priceCurrencyId?: SortOrder;
    closingBalance?: SortOrder;
    calculatedBalance?: SortOrder;
    underlyingSecurityId?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type Enumtransactions_ownershipTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_ownershipType
      | Enumtransactions_ownershipTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_ownershipType[] | null;
    notIn?: $Enums.transactions_ownershipType[] | null;
    not?:
      | NestedEnumtransactions_ownershipTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.transactions_ownershipType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumtransactions_ownershipTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumtransactions_ownershipTypeNullableFilter<$PrismaModel>;
  };

  export type Enumtransactions_nbTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_nbType
      | Enumtransactions_nbTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_nbType[] | null;
    notIn?: $Enums.transactions_nbType[] | null;
    not?:
      | NestedEnumtransactions_nbTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.transactions_nbType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumtransactions_nbTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumtransactions_nbTypeNullableFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type Enumtransactions_closingBalanceTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_closingBalanceType
      | Enumtransactions_closingBalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_closingBalanceType[] | null;
    notIn?: $Enums.transactions_closingBalanceType[] | null;
    not?:
      | NestedEnumtransactions_closingBalanceTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.transactions_closingBalanceType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumtransactions_closingBalanceTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumtransactions_closingBalanceTypeNullableFilter<$PrismaModel>;
  };

  export type Enumtransactions_calculatedBalanceTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_calculatedBalanceType
      | Enumtransactions_calculatedBalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_calculatedBalanceType[] | null;
    notIn?: $Enums.transactions_calculatedBalanceType[] | null;
    not?:
      | NestedEnumtransactions_calculatedBalanceTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.transactions_calculatedBalanceType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumtransactions_calculatedBalanceTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumtransactions_calculatedBalanceTypeNullableFilter<$PrismaModel>;
  };

  export type trnflagCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type trnflagAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type trnflagMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type trnflagMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type trnflagSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type trnnaturesCountOrderByAggregateInput = {
    code?: SortOrder;
    description?: SortOrder;
  };

  export type trnnaturesAvgOrderByAggregateInput = {
    code?: SortOrder;
  };

  export type trnnaturesMaxOrderByAggregateInput = {
    code?: SortOrder;
    description?: SortOrder;
  };

  export type trnnaturesMinOrderByAggregateInput = {
    code?: SortOrder;
    description?: SortOrder;
  };

  export type trnnaturesSumOrderByAggregateInput = {
    code?: SortOrder;
  };

  export type Enumunderlyingsecurities_nbTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.underlyingsecurities_nbType
      | Enumunderlyingsecurities_nbTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.underlyingsecurities_nbType[] | null;
    notIn?: $Enums.underlyingsecurities_nbType[] | null;
    not?:
      | NestedEnumunderlyingsecurities_nbTypeNullableFilter<$PrismaModel>
      | $Enums.underlyingsecurities_nbType
      | null;
  };

  export type Enumunderlyingsecurities_BalanceTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.underlyingsecurities_BalanceType
      | Enumunderlyingsecurities_BalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.underlyingsecurities_BalanceType[] | null;
    notIn?: $Enums.underlyingsecurities_BalanceType[] | null;
    not?:
      | NestedEnumunderlyingsecurities_BalanceTypeNullableFilter<$PrismaModel>
      | $Enums.underlyingsecurities_BalanceType
      | null;
  };

  export type underlyingsecuritiesCountOrderByAggregateInput = {
    id?: SortOrder;
    securityId?: SortOrder;
    nb?: SortOrder;
    nbType?: SortOrder;
    Balance?: SortOrder;
    BalanceType?: SortOrder;
    exercisePrice?: SortOrder;
    exercisePriceCurrencyId?: SortOrder;
    expiryDate?: SortOrder;
  };

  export type underlyingsecuritiesAvgOrderByAggregateInput = {
    id?: SortOrder;
    securityId?: SortOrder;
    nb?: SortOrder;
    Balance?: SortOrder;
    exercisePrice?: SortOrder;
    exercisePriceCurrencyId?: SortOrder;
  };

  export type underlyingsecuritiesMaxOrderByAggregateInput = {
    id?: SortOrder;
    securityId?: SortOrder;
    nb?: SortOrder;
    nbType?: SortOrder;
    Balance?: SortOrder;
    BalanceType?: SortOrder;
    exercisePrice?: SortOrder;
    exercisePriceCurrencyId?: SortOrder;
    expiryDate?: SortOrder;
  };

  export type underlyingsecuritiesMinOrderByAggregateInput = {
    id?: SortOrder;
    securityId?: SortOrder;
    nb?: SortOrder;
    nbType?: SortOrder;
    Balance?: SortOrder;
    BalanceType?: SortOrder;
    exercisePrice?: SortOrder;
    exercisePriceCurrencyId?: SortOrder;
    expiryDate?: SortOrder;
  };

  export type underlyingsecuritiesSumOrderByAggregateInput = {
    id?: SortOrder;
    securityId?: SortOrder;
    nb?: SortOrder;
    Balance?: SortOrder;
    exercisePrice?: SortOrder;
    exercisePriceCurrencyId?: SortOrder;
  };

  export type Enumunderlyingsecurities_nbTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.underlyingsecurities_nbType
      | Enumunderlyingsecurities_nbTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.underlyingsecurities_nbType[] | null;
    notIn?: $Enums.underlyingsecurities_nbType[] | null;
    not?:
      | NestedEnumunderlyingsecurities_nbTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.underlyingsecurities_nbType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumunderlyingsecurities_nbTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumunderlyingsecurities_nbTypeNullableFilter<$PrismaModel>;
  };

  export type Enumunderlyingsecurities_BalanceTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.underlyingsecurities_BalanceType
      | Enumunderlyingsecurities_BalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.underlyingsecurities_BalanceType[] | null;
    notIn?: $Enums.underlyingsecurities_BalanceType[] | null;
    not?:
      | NestedEnumunderlyingsecurities_BalanceTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.underlyingsecurities_BalanceType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumunderlyingsecurities_BalanceTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumunderlyingsecurities_BalanceTypeNullableFilter<$PrismaModel>;
  };

  export type transactionsCreateNestedManyWithoutCurrencyInput = {
    create?:
      | XOR<
          transactionsCreateWithoutCurrencyInput,
          transactionsUncheckedCreateWithoutCurrencyInput
        >
      | transactionsCreateWithoutCurrencyInput[]
      | transactionsUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutCurrencyInput
      | transactionsCreateOrConnectWithoutCurrencyInput[];
    createMany?: transactionsCreateManyCurrencyInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type underlyingsecuritiesCreateNestedManyWithoutCurrencyInput = {
    create?:
      | XOR<
          underlyingsecuritiesCreateWithoutCurrencyInput,
          underlyingsecuritiesUncheckedCreateWithoutCurrencyInput
        >
      | underlyingsecuritiesCreateWithoutCurrencyInput[]
      | underlyingsecuritiesUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?:
      | underlyingsecuritiesCreateOrConnectWithoutCurrencyInput
      | underlyingsecuritiesCreateOrConnectWithoutCurrencyInput[];
    createMany?: underlyingsecuritiesCreateManyCurrencyInputEnvelope;
    connect?:
      | underlyingsecuritiesWhereUniqueInput
      | underlyingsecuritiesWhereUniqueInput[];
  };

  export type transactionsUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?:
      | XOR<
          transactionsCreateWithoutCurrencyInput,
          transactionsUncheckedCreateWithoutCurrencyInput
        >
      | transactionsCreateWithoutCurrencyInput[]
      | transactionsUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutCurrencyInput
      | transactionsCreateOrConnectWithoutCurrencyInput[];
    createMany?: transactionsCreateManyCurrencyInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type underlyingsecuritiesUncheckedCreateNestedManyWithoutCurrencyInput =
    {
      create?:
        | XOR<
            underlyingsecuritiesCreateWithoutCurrencyInput,
            underlyingsecuritiesUncheckedCreateWithoutCurrencyInput
          >
        | underlyingsecuritiesCreateWithoutCurrencyInput[]
        | underlyingsecuritiesUncheckedCreateWithoutCurrencyInput[];
      connectOrCreate?:
        | underlyingsecuritiesCreateOrConnectWithoutCurrencyInput
        | underlyingsecuritiesCreateOrConnectWithoutCurrencyInput[];
      createMany?: underlyingsecuritiesCreateManyCurrencyInputEnvelope;
      connect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
    };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type transactionsUpdateManyWithoutCurrencyNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutCurrencyInput,
          transactionsUncheckedCreateWithoutCurrencyInput
        >
      | transactionsCreateWithoutCurrencyInput[]
      | transactionsUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutCurrencyInput
      | transactionsCreateOrConnectWithoutCurrencyInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutCurrencyInput
      | transactionsUpsertWithWhereUniqueWithoutCurrencyInput[];
    createMany?: transactionsCreateManyCurrencyInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutCurrencyInput
      | transactionsUpdateWithWhereUniqueWithoutCurrencyInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutCurrencyInput
      | transactionsUpdateManyWithWhereWithoutCurrencyInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type underlyingsecuritiesUpdateManyWithoutCurrencyNestedInput = {
    create?:
      | XOR<
          underlyingsecuritiesCreateWithoutCurrencyInput,
          underlyingsecuritiesUncheckedCreateWithoutCurrencyInput
        >
      | underlyingsecuritiesCreateWithoutCurrencyInput[]
      | underlyingsecuritiesUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?:
      | underlyingsecuritiesCreateOrConnectWithoutCurrencyInput
      | underlyingsecuritiesCreateOrConnectWithoutCurrencyInput[];
    upsert?:
      | underlyingsecuritiesUpsertWithWhereUniqueWithoutCurrencyInput
      | underlyingsecuritiesUpsertWithWhereUniqueWithoutCurrencyInput[];
    createMany?: underlyingsecuritiesCreateManyCurrencyInputEnvelope;
    set?:
      | underlyingsecuritiesWhereUniqueInput
      | underlyingsecuritiesWhereUniqueInput[];
    disconnect?:
      | underlyingsecuritiesWhereUniqueInput
      | underlyingsecuritiesWhereUniqueInput[];
    delete?:
      | underlyingsecuritiesWhereUniqueInput
      | underlyingsecuritiesWhereUniqueInput[];
    connect?:
      | underlyingsecuritiesWhereUniqueInput
      | underlyingsecuritiesWhereUniqueInput[];
    update?:
      | underlyingsecuritiesUpdateWithWhereUniqueWithoutCurrencyInput
      | underlyingsecuritiesUpdateWithWhereUniqueWithoutCurrencyInput[];
    updateMany?:
      | underlyingsecuritiesUpdateManyWithWhereWithoutCurrencyInput
      | underlyingsecuritiesUpdateManyWithWhereWithoutCurrencyInput[];
    deleteMany?:
      | underlyingsecuritiesScalarWhereInput
      | underlyingsecuritiesScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type transactionsUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutCurrencyInput,
          transactionsUncheckedCreateWithoutCurrencyInput
        >
      | transactionsCreateWithoutCurrencyInput[]
      | transactionsUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutCurrencyInput
      | transactionsCreateOrConnectWithoutCurrencyInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutCurrencyInput
      | transactionsUpsertWithWhereUniqueWithoutCurrencyInput[];
    createMany?: transactionsCreateManyCurrencyInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutCurrencyInput
      | transactionsUpdateWithWhereUniqueWithoutCurrencyInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutCurrencyInput
      | transactionsUpdateManyWithWhereWithoutCurrencyInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type underlyingsecuritiesUncheckedUpdateManyWithoutCurrencyNestedInput =
    {
      create?:
        | XOR<
            underlyingsecuritiesCreateWithoutCurrencyInput,
            underlyingsecuritiesUncheckedCreateWithoutCurrencyInput
          >
        | underlyingsecuritiesCreateWithoutCurrencyInput[]
        | underlyingsecuritiesUncheckedCreateWithoutCurrencyInput[];
      connectOrCreate?:
        | underlyingsecuritiesCreateOrConnectWithoutCurrencyInput
        | underlyingsecuritiesCreateOrConnectWithoutCurrencyInput[];
      upsert?:
        | underlyingsecuritiesUpsertWithWhereUniqueWithoutCurrencyInput
        | underlyingsecuritiesUpsertWithWhereUniqueWithoutCurrencyInput[];
      createMany?: underlyingsecuritiesCreateManyCurrencyInputEnvelope;
      set?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      disconnect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      delete?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      connect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      update?:
        | underlyingsecuritiesUpdateWithWhereUniqueWithoutCurrencyInput
        | underlyingsecuritiesUpdateWithWhereUniqueWithoutCurrencyInput[];
      updateMany?:
        | underlyingsecuritiesUpdateManyWithWhereWithoutCurrencyInput
        | underlyingsecuritiesUpdateManyWithWhereWithoutCurrencyInput[];
      deleteMany?:
        | underlyingsecuritiesScalarWhereInput
        | underlyingsecuritiesScalarWhereInput[];
    };

  export type issuerexchangesCreateNestedManyWithoutExchangesInput = {
    create?:
      | XOR<
          issuerexchangesCreateWithoutExchangesInput,
          issuerexchangesUncheckedCreateWithoutExchangesInput
        >
      | issuerexchangesCreateWithoutExchangesInput[]
      | issuerexchangesUncheckedCreateWithoutExchangesInput[];
    connectOrCreate?:
      | issuerexchangesCreateOrConnectWithoutExchangesInput
      | issuerexchangesCreateOrConnectWithoutExchangesInput[];
    createMany?: issuerexchangesCreateManyExchangesInputEnvelope;
    connect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
  };

  export type issuerexchangesUncheckedCreateNestedManyWithoutExchangesInput = {
    create?:
      | XOR<
          issuerexchangesCreateWithoutExchangesInput,
          issuerexchangesUncheckedCreateWithoutExchangesInput
        >
      | issuerexchangesCreateWithoutExchangesInput[]
      | issuerexchangesUncheckedCreateWithoutExchangesInput[];
    connectOrCreate?:
      | issuerexchangesCreateOrConnectWithoutExchangesInput
      | issuerexchangesCreateOrConnectWithoutExchangesInput[];
    createMany?: issuerexchangesCreateManyExchangesInputEnvelope;
    connect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
  };

  export type issuerexchangesUpdateManyWithoutExchangesNestedInput = {
    create?:
      | XOR<
          issuerexchangesCreateWithoutExchangesInput,
          issuerexchangesUncheckedCreateWithoutExchangesInput
        >
      | issuerexchangesCreateWithoutExchangesInput[]
      | issuerexchangesUncheckedCreateWithoutExchangesInput[];
    connectOrCreate?:
      | issuerexchangesCreateOrConnectWithoutExchangesInput
      | issuerexchangesCreateOrConnectWithoutExchangesInput[];
    upsert?:
      | issuerexchangesUpsertWithWhereUniqueWithoutExchangesInput
      | issuerexchangesUpsertWithWhereUniqueWithoutExchangesInput[];
    createMany?: issuerexchangesCreateManyExchangesInputEnvelope;
    set?: issuerexchangesWhereUniqueInput | issuerexchangesWhereUniqueInput[];
    disconnect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    delete?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    connect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    update?:
      | issuerexchangesUpdateWithWhereUniqueWithoutExchangesInput
      | issuerexchangesUpdateWithWhereUniqueWithoutExchangesInput[];
    updateMany?:
      | issuerexchangesUpdateManyWithWhereWithoutExchangesInput
      | issuerexchangesUpdateManyWithWhereWithoutExchangesInput[];
    deleteMany?:
      | issuerexchangesScalarWhereInput
      | issuerexchangesScalarWhereInput[];
  };

  export type issuerexchangesUncheckedUpdateManyWithoutExchangesNestedInput = {
    create?:
      | XOR<
          issuerexchangesCreateWithoutExchangesInput,
          issuerexchangesUncheckedCreateWithoutExchangesInput
        >
      | issuerexchangesCreateWithoutExchangesInput[]
      | issuerexchangesUncheckedCreateWithoutExchangesInput[];
    connectOrCreate?:
      | issuerexchangesCreateOrConnectWithoutExchangesInput
      | issuerexchangesCreateOrConnectWithoutExchangesInput[];
    upsert?:
      | issuerexchangesUpsertWithWhereUniqueWithoutExchangesInput
      | issuerexchangesUpsertWithWhereUniqueWithoutExchangesInput[];
    createMany?: issuerexchangesCreateManyExchangesInputEnvelope;
    set?: issuerexchangesWhereUniqueInput | issuerexchangesWhereUniqueInput[];
    disconnect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    delete?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    connect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    update?:
      | issuerexchangesUpdateWithWhereUniqueWithoutExchangesInput
      | issuerexchangesUpdateWithWhereUniqueWithoutExchangesInput[];
    updateMany?:
      | issuerexchangesUpdateManyWithWhereWithoutExchangesInput
      | issuerexchangesUpdateManyWithWhereWithoutExchangesInput[];
    deleteMany?:
      | issuerexchangesScalarWhereInput
      | issuerexchangesScalarWhereInput[];
  };

  export type issuersCreateNestedOneWithoutInsidersInput = {
    create?: XOR<
      issuersCreateWithoutInsidersInput,
      issuersUncheckedCreateWithoutInsidersInput
    >;
    connectOrCreate?: issuersCreateOrConnectWithoutInsidersInput;
    connect?: issuersWhereUniqueInput;
  };

  export type relationstoissuerCreateNestedManyWithoutInsidersInput = {
    create?:
      | XOR<
          relationstoissuerCreateWithoutInsidersInput,
          relationstoissuerUncheckedCreateWithoutInsidersInput
        >
      | relationstoissuerCreateWithoutInsidersInput[]
      | relationstoissuerUncheckedCreateWithoutInsidersInput[];
    connectOrCreate?:
      | relationstoissuerCreateOrConnectWithoutInsidersInput
      | relationstoissuerCreateOrConnectWithoutInsidersInput[];
    createMany?: relationstoissuerCreateManyInsidersInputEnvelope;
    connect?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
  };

  export type transactionsCreateNestedManyWithoutInsidersInput = {
    create?:
      | XOR<
          transactionsCreateWithoutInsidersInput,
          transactionsUncheckedCreateWithoutInsidersInput
        >
      | transactionsCreateWithoutInsidersInput[]
      | transactionsUncheckedCreateWithoutInsidersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutInsidersInput
      | transactionsCreateOrConnectWithoutInsidersInput[];
    createMany?: transactionsCreateManyInsidersInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type relationstoissuerUncheckedCreateNestedManyWithoutInsidersInput = {
    create?:
      | XOR<
          relationstoissuerCreateWithoutInsidersInput,
          relationstoissuerUncheckedCreateWithoutInsidersInput
        >
      | relationstoissuerCreateWithoutInsidersInput[]
      | relationstoissuerUncheckedCreateWithoutInsidersInput[];
    connectOrCreate?:
      | relationstoissuerCreateOrConnectWithoutInsidersInput
      | relationstoissuerCreateOrConnectWithoutInsidersInput[];
    createMany?: relationstoissuerCreateManyInsidersInputEnvelope;
    connect?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
  };

  export type transactionsUncheckedCreateNestedManyWithoutInsidersInput = {
    create?:
      | XOR<
          transactionsCreateWithoutInsidersInput,
          transactionsUncheckedCreateWithoutInsidersInput
        >
      | transactionsCreateWithoutInsidersInput[]
      | transactionsUncheckedCreateWithoutInsidersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutInsidersInput
      | transactionsCreateOrConnectWithoutInsidersInput[];
    createMany?: transactionsCreateManyInsidersInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type issuersUpdateOneWithoutInsidersNestedInput = {
    create?: XOR<
      issuersCreateWithoutInsidersInput,
      issuersUncheckedCreateWithoutInsidersInput
    >;
    connectOrCreate?: issuersCreateOrConnectWithoutInsidersInput;
    upsert?: issuersUpsertWithoutInsidersInput;
    disconnect?: issuersWhereInput | boolean;
    delete?: issuersWhereInput | boolean;
    connect?: issuersWhereUniqueInput;
    update?: XOR<
      XOR<
        issuersUpdateToOneWithWhereWithoutInsidersInput,
        issuersUpdateWithoutInsidersInput
      >,
      issuersUncheckedUpdateWithoutInsidersInput
    >;
  };

  export type relationstoissuerUpdateManyWithoutInsidersNestedInput = {
    create?:
      | XOR<
          relationstoissuerCreateWithoutInsidersInput,
          relationstoissuerUncheckedCreateWithoutInsidersInput
        >
      | relationstoissuerCreateWithoutInsidersInput[]
      | relationstoissuerUncheckedCreateWithoutInsidersInput[];
    connectOrCreate?:
      | relationstoissuerCreateOrConnectWithoutInsidersInput
      | relationstoissuerCreateOrConnectWithoutInsidersInput[];
    upsert?:
      | relationstoissuerUpsertWithWhereUniqueWithoutInsidersInput
      | relationstoissuerUpsertWithWhereUniqueWithoutInsidersInput[];
    createMany?: relationstoissuerCreateManyInsidersInputEnvelope;
    set?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
    disconnect?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
    delete?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
    connect?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
    update?:
      | relationstoissuerUpdateWithWhereUniqueWithoutInsidersInput
      | relationstoissuerUpdateWithWhereUniqueWithoutInsidersInput[];
    updateMany?:
      | relationstoissuerUpdateManyWithWhereWithoutInsidersInput
      | relationstoissuerUpdateManyWithWhereWithoutInsidersInput[];
    deleteMany?:
      | relationstoissuerScalarWhereInput
      | relationstoissuerScalarWhereInput[];
  };

  export type transactionsUpdateManyWithoutInsidersNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutInsidersInput,
          transactionsUncheckedCreateWithoutInsidersInput
        >
      | transactionsCreateWithoutInsidersInput[]
      | transactionsUncheckedCreateWithoutInsidersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutInsidersInput
      | transactionsCreateOrConnectWithoutInsidersInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutInsidersInput
      | transactionsUpsertWithWhereUniqueWithoutInsidersInput[];
    createMany?: transactionsCreateManyInsidersInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutInsidersInput
      | transactionsUpdateWithWhereUniqueWithoutInsidersInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutInsidersInput
      | transactionsUpdateManyWithWhereWithoutInsidersInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type relationstoissuerUncheckedUpdateManyWithoutInsidersNestedInput = {
    create?:
      | XOR<
          relationstoissuerCreateWithoutInsidersInput,
          relationstoissuerUncheckedCreateWithoutInsidersInput
        >
      | relationstoissuerCreateWithoutInsidersInput[]
      | relationstoissuerUncheckedCreateWithoutInsidersInput[];
    connectOrCreate?:
      | relationstoissuerCreateOrConnectWithoutInsidersInput
      | relationstoissuerCreateOrConnectWithoutInsidersInput[];
    upsert?:
      | relationstoissuerUpsertWithWhereUniqueWithoutInsidersInput
      | relationstoissuerUpsertWithWhereUniqueWithoutInsidersInput[];
    createMany?: relationstoissuerCreateManyInsidersInputEnvelope;
    set?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
    disconnect?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
    delete?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
    connect?:
      | relationstoissuerWhereUniqueInput
      | relationstoissuerWhereUniqueInput[];
    update?:
      | relationstoissuerUpdateWithWhereUniqueWithoutInsidersInput
      | relationstoissuerUpdateWithWhereUniqueWithoutInsidersInput[];
    updateMany?:
      | relationstoissuerUpdateManyWithWhereWithoutInsidersInput
      | relationstoissuerUpdateManyWithWhereWithoutInsidersInput[];
    deleteMany?:
      | relationstoissuerScalarWhereInput
      | relationstoissuerScalarWhereInput[];
  };

  export type transactionsUncheckedUpdateManyWithoutInsidersNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutInsidersInput,
          transactionsUncheckedCreateWithoutInsidersInput
        >
      | transactionsCreateWithoutInsidersInput[]
      | transactionsUncheckedCreateWithoutInsidersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutInsidersInput
      | transactionsCreateOrConnectWithoutInsidersInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutInsidersInput
      | transactionsUpsertWithWhereUniqueWithoutInsidersInput[];
    createMany?: transactionsCreateManyInsidersInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutInsidersInput
      | transactionsUpdateWithWhereUniqueWithoutInsidersInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutInsidersInput
      | transactionsUpdateManyWithWhereWithoutInsidersInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type issuersCreateNestedOneWithoutIssuerexchangesInput = {
    create?: XOR<
      issuersCreateWithoutIssuerexchangesInput,
      issuersUncheckedCreateWithoutIssuerexchangesInput
    >;
    connectOrCreate?: issuersCreateOrConnectWithoutIssuerexchangesInput;
    connect?: issuersWhereUniqueInput;
  };

  export type exchangesCreateNestedOneWithoutIssuerexchangesInput = {
    create?: XOR<
      exchangesCreateWithoutIssuerexchangesInput,
      exchangesUncheckedCreateWithoutIssuerexchangesInput
    >;
    connectOrCreate?: exchangesCreateOrConnectWithoutIssuerexchangesInput;
    connect?: exchangesWhereUniqueInput;
  };

  export type issuersUpdateOneRequiredWithoutIssuerexchangesNestedInput = {
    create?: XOR<
      issuersCreateWithoutIssuerexchangesInput,
      issuersUncheckedCreateWithoutIssuerexchangesInput
    >;
    connectOrCreate?: issuersCreateOrConnectWithoutIssuerexchangesInput;
    upsert?: issuersUpsertWithoutIssuerexchangesInput;
    connect?: issuersWhereUniqueInput;
    update?: XOR<
      XOR<
        issuersUpdateToOneWithWhereWithoutIssuerexchangesInput,
        issuersUpdateWithoutIssuerexchangesInput
      >,
      issuersUncheckedUpdateWithoutIssuerexchangesInput
    >;
  };

  export type exchangesUpdateOneRequiredWithoutIssuerexchangesNestedInput = {
    create?: XOR<
      exchangesCreateWithoutIssuerexchangesInput,
      exchangesUncheckedCreateWithoutIssuerexchangesInput
    >;
    connectOrCreate?: exchangesCreateOrConnectWithoutIssuerexchangesInput;
    upsert?: exchangesUpsertWithoutIssuerexchangesInput;
    connect?: exchangesWhereUniqueInput;
    update?: XOR<
      XOR<
        exchangesUpdateToOneWithWhereWithoutIssuerexchangesInput,
        exchangesUpdateWithoutIssuerexchangesInput
      >,
      exchangesUncheckedUpdateWithoutIssuerexchangesInput
    >;
  };

  export type insidersCreateNestedManyWithoutIssuersInput = {
    create?:
      | XOR<
          insidersCreateWithoutIssuersInput,
          insidersUncheckedCreateWithoutIssuersInput
        >
      | insidersCreateWithoutIssuersInput[]
      | insidersUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | insidersCreateOrConnectWithoutIssuersInput
      | insidersCreateOrConnectWithoutIssuersInput[];
    createMany?: insidersCreateManyIssuersInputEnvelope;
    connect?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
  };

  export type issuerexchangesCreateNestedManyWithoutIssuersInput = {
    create?:
      | XOR<
          issuerexchangesCreateWithoutIssuersInput,
          issuerexchangesUncheckedCreateWithoutIssuersInput
        >
      | issuerexchangesCreateWithoutIssuersInput[]
      | issuerexchangesUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | issuerexchangesCreateOrConnectWithoutIssuersInput
      | issuerexchangesCreateOrConnectWithoutIssuersInput[];
    createMany?: issuerexchangesCreateManyIssuersInputEnvelope;
    connect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
  };

  export type tickersCreateNestedOneWithoutIssuersInput = {
    create?: XOR<
      tickersCreateWithoutIssuersInput,
      tickersUncheckedCreateWithoutIssuersInput
    >;
    connectOrCreate?: tickersCreateOrConnectWithoutIssuersInput;
    connect?: tickersWhereUniqueInput;
  };

  export type sizesCreateNestedOneWithoutIssuersInput = {
    create?: XOR<
      sizesCreateWithoutIssuersInput,
      sizesUncheckedCreateWithoutIssuersInput
    >;
    connectOrCreate?: sizesCreateOrConnectWithoutIssuersInput;
    connect?: sizesWhereUniqueInput;
  };

  export type transactionsCreateNestedManyWithoutIssuersInput = {
    create?:
      | XOR<
          transactionsCreateWithoutIssuersInput,
          transactionsUncheckedCreateWithoutIssuersInput
        >
      | transactionsCreateWithoutIssuersInput[]
      | transactionsUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutIssuersInput
      | transactionsCreateOrConnectWithoutIssuersInput[];
    createMany?: transactionsCreateManyIssuersInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type insidersUncheckedCreateNestedManyWithoutIssuersInput = {
    create?:
      | XOR<
          insidersCreateWithoutIssuersInput,
          insidersUncheckedCreateWithoutIssuersInput
        >
      | insidersCreateWithoutIssuersInput[]
      | insidersUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | insidersCreateOrConnectWithoutIssuersInput
      | insidersCreateOrConnectWithoutIssuersInput[];
    createMany?: insidersCreateManyIssuersInputEnvelope;
    connect?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
  };

  export type issuerexchangesUncheckedCreateNestedManyWithoutIssuersInput = {
    create?:
      | XOR<
          issuerexchangesCreateWithoutIssuersInput,
          issuerexchangesUncheckedCreateWithoutIssuersInput
        >
      | issuerexchangesCreateWithoutIssuersInput[]
      | issuerexchangesUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | issuerexchangesCreateOrConnectWithoutIssuersInput
      | issuerexchangesCreateOrConnectWithoutIssuersInput[];
    createMany?: issuerexchangesCreateManyIssuersInputEnvelope;
    connect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
  };

  export type transactionsUncheckedCreateNestedManyWithoutIssuersInput = {
    create?:
      | XOR<
          transactionsCreateWithoutIssuersInput,
          transactionsUncheckedCreateWithoutIssuersInput
        >
      | transactionsCreateWithoutIssuersInput[]
      | transactionsUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutIssuersInput
      | transactionsCreateOrConnectWithoutIssuersInput[];
    createMany?: transactionsCreateManyIssuersInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type insidersUpdateManyWithoutIssuersNestedInput = {
    create?:
      | XOR<
          insidersCreateWithoutIssuersInput,
          insidersUncheckedCreateWithoutIssuersInput
        >
      | insidersCreateWithoutIssuersInput[]
      | insidersUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | insidersCreateOrConnectWithoutIssuersInput
      | insidersCreateOrConnectWithoutIssuersInput[];
    upsert?:
      | insidersUpsertWithWhereUniqueWithoutIssuersInput
      | insidersUpsertWithWhereUniqueWithoutIssuersInput[];
    createMany?: insidersCreateManyIssuersInputEnvelope;
    set?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
    disconnect?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
    delete?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
    connect?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
    update?:
      | insidersUpdateWithWhereUniqueWithoutIssuersInput
      | insidersUpdateWithWhereUniqueWithoutIssuersInput[];
    updateMany?:
      | insidersUpdateManyWithWhereWithoutIssuersInput
      | insidersUpdateManyWithWhereWithoutIssuersInput[];
    deleteMany?: insidersScalarWhereInput | insidersScalarWhereInput[];
  };

  export type issuerexchangesUpdateManyWithoutIssuersNestedInput = {
    create?:
      | XOR<
          issuerexchangesCreateWithoutIssuersInput,
          issuerexchangesUncheckedCreateWithoutIssuersInput
        >
      | issuerexchangesCreateWithoutIssuersInput[]
      | issuerexchangesUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | issuerexchangesCreateOrConnectWithoutIssuersInput
      | issuerexchangesCreateOrConnectWithoutIssuersInput[];
    upsert?:
      | issuerexchangesUpsertWithWhereUniqueWithoutIssuersInput
      | issuerexchangesUpsertWithWhereUniqueWithoutIssuersInput[];
    createMany?: issuerexchangesCreateManyIssuersInputEnvelope;
    set?: issuerexchangesWhereUniqueInput | issuerexchangesWhereUniqueInput[];
    disconnect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    delete?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    connect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    update?:
      | issuerexchangesUpdateWithWhereUniqueWithoutIssuersInput
      | issuerexchangesUpdateWithWhereUniqueWithoutIssuersInput[];
    updateMany?:
      | issuerexchangesUpdateManyWithWhereWithoutIssuersInput
      | issuerexchangesUpdateManyWithWhereWithoutIssuersInput[];
    deleteMany?:
      | issuerexchangesScalarWhereInput
      | issuerexchangesScalarWhereInput[];
  };

  export type tickersUpdateOneWithoutIssuersNestedInput = {
    create?: XOR<
      tickersCreateWithoutIssuersInput,
      tickersUncheckedCreateWithoutIssuersInput
    >;
    connectOrCreate?: tickersCreateOrConnectWithoutIssuersInput;
    upsert?: tickersUpsertWithoutIssuersInput;
    disconnect?: tickersWhereInput | boolean;
    delete?: tickersWhereInput | boolean;
    connect?: tickersWhereUniqueInput;
    update?: XOR<
      XOR<
        tickersUpdateToOneWithWhereWithoutIssuersInput,
        tickersUpdateWithoutIssuersInput
      >,
      tickersUncheckedUpdateWithoutIssuersInput
    >;
  };

  export type sizesUpdateOneWithoutIssuersNestedInput = {
    create?: XOR<
      sizesCreateWithoutIssuersInput,
      sizesUncheckedCreateWithoutIssuersInput
    >;
    connectOrCreate?: sizesCreateOrConnectWithoutIssuersInput;
    upsert?: sizesUpsertWithoutIssuersInput;
    disconnect?: sizesWhereInput | boolean;
    delete?: sizesWhereInput | boolean;
    connect?: sizesWhereUniqueInput;
    update?: XOR<
      XOR<
        sizesUpdateToOneWithWhereWithoutIssuersInput,
        sizesUpdateWithoutIssuersInput
      >,
      sizesUncheckedUpdateWithoutIssuersInput
    >;
  };

  export type transactionsUpdateManyWithoutIssuersNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutIssuersInput,
          transactionsUncheckedCreateWithoutIssuersInput
        >
      | transactionsCreateWithoutIssuersInput[]
      | transactionsUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutIssuersInput
      | transactionsCreateOrConnectWithoutIssuersInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutIssuersInput
      | transactionsUpsertWithWhereUniqueWithoutIssuersInput[];
    createMany?: transactionsCreateManyIssuersInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutIssuersInput
      | transactionsUpdateWithWhereUniqueWithoutIssuersInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutIssuersInput
      | transactionsUpdateManyWithWhereWithoutIssuersInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type insidersUncheckedUpdateManyWithoutIssuersNestedInput = {
    create?:
      | XOR<
          insidersCreateWithoutIssuersInput,
          insidersUncheckedCreateWithoutIssuersInput
        >
      | insidersCreateWithoutIssuersInput[]
      | insidersUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | insidersCreateOrConnectWithoutIssuersInput
      | insidersCreateOrConnectWithoutIssuersInput[];
    upsert?:
      | insidersUpsertWithWhereUniqueWithoutIssuersInput
      | insidersUpsertWithWhereUniqueWithoutIssuersInput[];
    createMany?: insidersCreateManyIssuersInputEnvelope;
    set?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
    disconnect?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
    delete?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
    connect?: insidersWhereUniqueInput | insidersWhereUniqueInput[];
    update?:
      | insidersUpdateWithWhereUniqueWithoutIssuersInput
      | insidersUpdateWithWhereUniqueWithoutIssuersInput[];
    updateMany?:
      | insidersUpdateManyWithWhereWithoutIssuersInput
      | insidersUpdateManyWithWhereWithoutIssuersInput[];
    deleteMany?: insidersScalarWhereInput | insidersScalarWhereInput[];
  };

  export type issuerexchangesUncheckedUpdateManyWithoutIssuersNestedInput = {
    create?:
      | XOR<
          issuerexchangesCreateWithoutIssuersInput,
          issuerexchangesUncheckedCreateWithoutIssuersInput
        >
      | issuerexchangesCreateWithoutIssuersInput[]
      | issuerexchangesUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | issuerexchangesCreateOrConnectWithoutIssuersInput
      | issuerexchangesCreateOrConnectWithoutIssuersInput[];
    upsert?:
      | issuerexchangesUpsertWithWhereUniqueWithoutIssuersInput
      | issuerexchangesUpsertWithWhereUniqueWithoutIssuersInput[];
    createMany?: issuerexchangesCreateManyIssuersInputEnvelope;
    set?: issuerexchangesWhereUniqueInput | issuerexchangesWhereUniqueInput[];
    disconnect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    delete?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    connect?:
      | issuerexchangesWhereUniqueInput
      | issuerexchangesWhereUniqueInput[];
    update?:
      | issuerexchangesUpdateWithWhereUniqueWithoutIssuersInput
      | issuerexchangesUpdateWithWhereUniqueWithoutIssuersInput[];
    updateMany?:
      | issuerexchangesUpdateManyWithWhereWithoutIssuersInput
      | issuerexchangesUpdateManyWithWhereWithoutIssuersInput[];
    deleteMany?:
      | issuerexchangesScalarWhereInput
      | issuerexchangesScalarWhereInput[];
  };

  export type transactionsUncheckedUpdateManyWithoutIssuersNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutIssuersInput,
          transactionsUncheckedCreateWithoutIssuersInput
        >
      | transactionsCreateWithoutIssuersInput[]
      | transactionsUncheckedCreateWithoutIssuersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutIssuersInput
      | transactionsCreateOrConnectWithoutIssuersInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutIssuersInput
      | transactionsUpsertWithWhereUniqueWithoutIssuersInput[];
    createMany?: transactionsCreateManyIssuersInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutIssuersInput
      | transactionsUpdateWithWhereUniqueWithoutIssuersInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutIssuersInput
      | transactionsUpdateManyWithWhereWithoutIssuersInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type insidersCreateNestedOneWithoutRelationstoissuerInput = {
    create?: XOR<
      insidersCreateWithoutRelationstoissuerInput,
      insidersUncheckedCreateWithoutRelationstoissuerInput
    >;
    connectOrCreate?: insidersCreateOrConnectWithoutRelationstoissuerInput;
    connect?: insidersWhereUniqueInput;
  };

  export type Enumrelationstoissuer_typeFieldUpdateOperationsInput = {
    set?: $Enums.relationstoissuer_type;
  };

  export type insidersUpdateOneRequiredWithoutRelationstoissuerNestedInput = {
    create?: XOR<
      insidersCreateWithoutRelationstoissuerInput,
      insidersUncheckedCreateWithoutRelationstoissuerInput
    >;
    connectOrCreate?: insidersCreateOrConnectWithoutRelationstoissuerInput;
    upsert?: insidersUpsertWithoutRelationstoissuerInput;
    connect?: insidersWhereUniqueInput;
    update?: XOR<
      XOR<
        insidersUpdateToOneWithWhereWithoutRelationstoissuerInput,
        insidersUpdateWithoutRelationstoissuerInput
      >,
      insidersUncheckedUpdateWithoutRelationstoissuerInput
    >;
  };

  export type transactionsCreateNestedManyWithoutSecuritydesignationsInput = {
    create?:
      | XOR<
          transactionsCreateWithoutSecuritydesignationsInput,
          transactionsUncheckedCreateWithoutSecuritydesignationsInput
        >
      | transactionsCreateWithoutSecuritydesignationsInput[]
      | transactionsUncheckedCreateWithoutSecuritydesignationsInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutSecuritydesignationsInput
      | transactionsCreateOrConnectWithoutSecuritydesignationsInput[];
    createMany?: transactionsCreateManySecuritydesignationsInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type underlyingsecuritiesCreateNestedManyWithoutSecuritydesignationsInput =
    {
      create?:
        | XOR<
            underlyingsecuritiesCreateWithoutSecuritydesignationsInput,
            underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput
          >
        | underlyingsecuritiesCreateWithoutSecuritydesignationsInput[]
        | underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput[];
      connectOrCreate?:
        | underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput
        | underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput[];
      createMany?: underlyingsecuritiesCreateManySecuritydesignationsInputEnvelope;
      connect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
    };

  export type transactionsUncheckedCreateNestedManyWithoutSecuritydesignationsInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutSecuritydesignationsInput,
            transactionsUncheckedCreateWithoutSecuritydesignationsInput
          >
        | transactionsCreateWithoutSecuritydesignationsInput[]
        | transactionsUncheckedCreateWithoutSecuritydesignationsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutSecuritydesignationsInput
        | transactionsCreateOrConnectWithoutSecuritydesignationsInput[];
      createMany?: transactionsCreateManySecuritydesignationsInputEnvelope;
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    };

  export type underlyingsecuritiesUncheckedCreateNestedManyWithoutSecuritydesignationsInput =
    {
      create?:
        | XOR<
            underlyingsecuritiesCreateWithoutSecuritydesignationsInput,
            underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput
          >
        | underlyingsecuritiesCreateWithoutSecuritydesignationsInput[]
        | underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput[];
      connectOrCreate?:
        | underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput
        | underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput[];
      createMany?: underlyingsecuritiesCreateManySecuritydesignationsInputEnvelope;
      connect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
    };

  export type transactionsUpdateManyWithoutSecuritydesignationsNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutSecuritydesignationsInput,
          transactionsUncheckedCreateWithoutSecuritydesignationsInput
        >
      | transactionsCreateWithoutSecuritydesignationsInput[]
      | transactionsUncheckedCreateWithoutSecuritydesignationsInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutSecuritydesignationsInput
      | transactionsCreateOrConnectWithoutSecuritydesignationsInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutSecuritydesignationsInput
      | transactionsUpsertWithWhereUniqueWithoutSecuritydesignationsInput[];
    createMany?: transactionsCreateManySecuritydesignationsInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutSecuritydesignationsInput
      | transactionsUpdateWithWhereUniqueWithoutSecuritydesignationsInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutSecuritydesignationsInput
      | transactionsUpdateManyWithWhereWithoutSecuritydesignationsInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type underlyingsecuritiesUpdateManyWithoutSecuritydesignationsNestedInput =
    {
      create?:
        | XOR<
            underlyingsecuritiesCreateWithoutSecuritydesignationsInput,
            underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput
          >
        | underlyingsecuritiesCreateWithoutSecuritydesignationsInput[]
        | underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput[];
      connectOrCreate?:
        | underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput
        | underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput[];
      upsert?:
        | underlyingsecuritiesUpsertWithWhereUniqueWithoutSecuritydesignationsInput
        | underlyingsecuritiesUpsertWithWhereUniqueWithoutSecuritydesignationsInput[];
      createMany?: underlyingsecuritiesCreateManySecuritydesignationsInputEnvelope;
      set?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      disconnect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      delete?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      connect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      update?:
        | underlyingsecuritiesUpdateWithWhereUniqueWithoutSecuritydesignationsInput
        | underlyingsecuritiesUpdateWithWhereUniqueWithoutSecuritydesignationsInput[];
      updateMany?:
        | underlyingsecuritiesUpdateManyWithWhereWithoutSecuritydesignationsInput
        | underlyingsecuritiesUpdateManyWithWhereWithoutSecuritydesignationsInput[];
      deleteMany?:
        | underlyingsecuritiesScalarWhereInput
        | underlyingsecuritiesScalarWhereInput[];
    };

  export type transactionsUncheckedUpdateManyWithoutSecuritydesignationsNestedInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutSecuritydesignationsInput,
            transactionsUncheckedCreateWithoutSecuritydesignationsInput
          >
        | transactionsCreateWithoutSecuritydesignationsInput[]
        | transactionsUncheckedCreateWithoutSecuritydesignationsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutSecuritydesignationsInput
        | transactionsCreateOrConnectWithoutSecuritydesignationsInput[];
      upsert?:
        | transactionsUpsertWithWhereUniqueWithoutSecuritydesignationsInput
        | transactionsUpsertWithWhereUniqueWithoutSecuritydesignationsInput[];
      createMany?: transactionsCreateManySecuritydesignationsInputEnvelope;
      set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      disconnect?:
        | transactionsWhereUniqueInput
        | transactionsWhereUniqueInput[];
      delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      update?:
        | transactionsUpdateWithWhereUniqueWithoutSecuritydesignationsInput
        | transactionsUpdateWithWhereUniqueWithoutSecuritydesignationsInput[];
      updateMany?:
        | transactionsUpdateManyWithWhereWithoutSecuritydesignationsInput
        | transactionsUpdateManyWithWhereWithoutSecuritydesignationsInput[];
      deleteMany?:
        | transactionsScalarWhereInput
        | transactionsScalarWhereInput[];
    };

  export type underlyingsecuritiesUncheckedUpdateManyWithoutSecuritydesignationsNestedInput =
    {
      create?:
        | XOR<
            underlyingsecuritiesCreateWithoutSecuritydesignationsInput,
            underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput
          >
        | underlyingsecuritiesCreateWithoutSecuritydesignationsInput[]
        | underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput[];
      connectOrCreate?:
        | underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput
        | underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput[];
      upsert?:
        | underlyingsecuritiesUpsertWithWhereUniqueWithoutSecuritydesignationsInput
        | underlyingsecuritiesUpsertWithWhereUniqueWithoutSecuritydesignationsInput[];
      createMany?: underlyingsecuritiesCreateManySecuritydesignationsInputEnvelope;
      set?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      disconnect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      delete?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      connect?:
        | underlyingsecuritiesWhereUniqueInput
        | underlyingsecuritiesWhereUniqueInput[];
      update?:
        | underlyingsecuritiesUpdateWithWhereUniqueWithoutSecuritydesignationsInput
        | underlyingsecuritiesUpdateWithWhereUniqueWithoutSecuritydesignationsInput[];
      updateMany?:
        | underlyingsecuritiesUpdateManyWithWhereWithoutSecuritydesignationsInput
        | underlyingsecuritiesUpdateManyWithWhereWithoutSecuritydesignationsInput[];
      deleteMany?:
        | underlyingsecuritiesScalarWhereInput
        | underlyingsecuritiesScalarWhereInput[];
    };

  export type issuersCreateNestedManyWithoutSizesInput = {
    create?:
      | XOR<
          issuersCreateWithoutSizesInput,
          issuersUncheckedCreateWithoutSizesInput
        >
      | issuersCreateWithoutSizesInput[]
      | issuersUncheckedCreateWithoutSizesInput[];
    connectOrCreate?:
      | issuersCreateOrConnectWithoutSizesInput
      | issuersCreateOrConnectWithoutSizesInput[];
    createMany?: issuersCreateManySizesInputEnvelope;
    connect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
  };

  export type issuersUncheckedCreateNestedManyWithoutSizesInput = {
    create?:
      | XOR<
          issuersCreateWithoutSizesInput,
          issuersUncheckedCreateWithoutSizesInput
        >
      | issuersCreateWithoutSizesInput[]
      | issuersUncheckedCreateWithoutSizesInput[];
    connectOrCreate?:
      | issuersCreateOrConnectWithoutSizesInput
      | issuersCreateOrConnectWithoutSizesInput[];
    createMany?: issuersCreateManySizesInputEnvelope;
    connect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
  };

  export type issuersUpdateManyWithoutSizesNestedInput = {
    create?:
      | XOR<
          issuersCreateWithoutSizesInput,
          issuersUncheckedCreateWithoutSizesInput
        >
      | issuersCreateWithoutSizesInput[]
      | issuersUncheckedCreateWithoutSizesInput[];
    connectOrCreate?:
      | issuersCreateOrConnectWithoutSizesInput
      | issuersCreateOrConnectWithoutSizesInput[];
    upsert?:
      | issuersUpsertWithWhereUniqueWithoutSizesInput
      | issuersUpsertWithWhereUniqueWithoutSizesInput[];
    createMany?: issuersCreateManySizesInputEnvelope;
    set?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    disconnect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    delete?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    connect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    update?:
      | issuersUpdateWithWhereUniqueWithoutSizesInput
      | issuersUpdateWithWhereUniqueWithoutSizesInput[];
    updateMany?:
      | issuersUpdateManyWithWhereWithoutSizesInput
      | issuersUpdateManyWithWhereWithoutSizesInput[];
    deleteMany?: issuersScalarWhereInput | issuersScalarWhereInput[];
  };

  export type issuersUncheckedUpdateManyWithoutSizesNestedInput = {
    create?:
      | XOR<
          issuersCreateWithoutSizesInput,
          issuersUncheckedCreateWithoutSizesInput
        >
      | issuersCreateWithoutSizesInput[]
      | issuersUncheckedCreateWithoutSizesInput[];
    connectOrCreate?:
      | issuersCreateOrConnectWithoutSizesInput
      | issuersCreateOrConnectWithoutSizesInput[];
    upsert?:
      | issuersUpsertWithWhereUniqueWithoutSizesInput
      | issuersUpsertWithWhereUniqueWithoutSizesInput[];
    createMany?: issuersCreateManySizesInputEnvelope;
    set?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    disconnect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    delete?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    connect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    update?:
      | issuersUpdateWithWhereUniqueWithoutSizesInput
      | issuersUpdateWithWhereUniqueWithoutSizesInput[];
    updateMany?:
      | issuersUpdateManyWithWhereWithoutSizesInput
      | issuersUpdateManyWithWhereWithoutSizesInput[];
    deleteMany?: issuersScalarWhereInput | issuersScalarWhereInput[];
  };

  export type issuersCreateNestedManyWithoutTickersInput = {
    create?:
      | XOR<
          issuersCreateWithoutTickersInput,
          issuersUncheckedCreateWithoutTickersInput
        >
      | issuersCreateWithoutTickersInput[]
      | issuersUncheckedCreateWithoutTickersInput[];
    connectOrCreate?:
      | issuersCreateOrConnectWithoutTickersInput
      | issuersCreateOrConnectWithoutTickersInput[];
    createMany?: issuersCreateManyTickersInputEnvelope;
    connect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
  };

  export type issuersUncheckedCreateNestedManyWithoutTickersInput = {
    create?:
      | XOR<
          issuersCreateWithoutTickersInput,
          issuersUncheckedCreateWithoutTickersInput
        >
      | issuersCreateWithoutTickersInput[]
      | issuersUncheckedCreateWithoutTickersInput[];
    connectOrCreate?:
      | issuersCreateOrConnectWithoutTickersInput
      | issuersCreateOrConnectWithoutTickersInput[];
    createMany?: issuersCreateManyTickersInputEnvelope;
    connect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
  };

  export type issuersUpdateManyWithoutTickersNestedInput = {
    create?:
      | XOR<
          issuersCreateWithoutTickersInput,
          issuersUncheckedCreateWithoutTickersInput
        >
      | issuersCreateWithoutTickersInput[]
      | issuersUncheckedCreateWithoutTickersInput[];
    connectOrCreate?:
      | issuersCreateOrConnectWithoutTickersInput
      | issuersCreateOrConnectWithoutTickersInput[];
    upsert?:
      | issuersUpsertWithWhereUniqueWithoutTickersInput
      | issuersUpsertWithWhereUniqueWithoutTickersInput[];
    createMany?: issuersCreateManyTickersInputEnvelope;
    set?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    disconnect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    delete?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    connect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    update?:
      | issuersUpdateWithWhereUniqueWithoutTickersInput
      | issuersUpdateWithWhereUniqueWithoutTickersInput[];
    updateMany?:
      | issuersUpdateManyWithWhereWithoutTickersInput
      | issuersUpdateManyWithWhereWithoutTickersInput[];
    deleteMany?: issuersScalarWhereInput | issuersScalarWhereInput[];
  };

  export type issuersUncheckedUpdateManyWithoutTickersNestedInput = {
    create?:
      | XOR<
          issuersCreateWithoutTickersInput,
          issuersUncheckedCreateWithoutTickersInput
        >
      | issuersCreateWithoutTickersInput[]
      | issuersUncheckedCreateWithoutTickersInput[];
    connectOrCreate?:
      | issuersCreateOrConnectWithoutTickersInput
      | issuersCreateOrConnectWithoutTickersInput[];
    upsert?:
      | issuersUpsertWithWhereUniqueWithoutTickersInput
      | issuersUpsertWithWhereUniqueWithoutTickersInput[];
    createMany?: issuersCreateManyTickersInputEnvelope;
    set?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    disconnect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    delete?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    connect?: issuersWhereUniqueInput | issuersWhereUniqueInput[];
    update?:
      | issuersUpdateWithWhereUniqueWithoutTickersInput
      | issuersUpdateWithWhereUniqueWithoutTickersInput[];
    updateMany?:
      | issuersUpdateManyWithWhereWithoutTickersInput
      | issuersUpdateManyWithWhereWithoutTickersInput[];
    deleteMany?: issuersScalarWhereInput | issuersScalarWhereInput[];
  };

  export type issuersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      issuersCreateWithoutTransactionsInput,
      issuersUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: issuersCreateOrConnectWithoutTransactionsInput;
    connect?: issuersWhereUniqueInput;
  };

  export type insidersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      insidersCreateWithoutTransactionsInput,
      insidersUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: insidersCreateOrConnectWithoutTransactionsInput;
    connect?: insidersWhereUniqueInput;
  };

  export type securitydesignationsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      securitydesignationsCreateWithoutTransactionsInput,
      securitydesignationsUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: securitydesignationsCreateOrConnectWithoutTransactionsInput;
    connect?: securitydesignationsWhereUniqueInput;
  };

  export type trnflagCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      trnflagCreateWithoutTransactionsInput,
      trnflagUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: trnflagCreateOrConnectWithoutTransactionsInput;
    connect?: trnflagWhereUniqueInput;
  };

  export type trnnaturesCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      trnnaturesCreateWithoutTransactionsInput,
      trnnaturesUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: trnnaturesCreateOrConnectWithoutTransactionsInput;
    connect?: trnnaturesWhereUniqueInput;
  };

  export type underlyingsecuritiesCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      underlyingsecuritiesCreateWithoutTransactionsInput,
      underlyingsecuritiesUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: underlyingsecuritiesCreateOrConnectWithoutTransactionsInput;
    connect?: underlyingsecuritiesWhereUniqueInput;
  };

  export type currencyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      currencyCreateWithoutTransactionsInput,
      currencyUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: currencyCreateOrConnectWithoutTransactionsInput;
    connect?: currencyWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput =
    {
      set?: $Enums.transactions_ownershipType | null;
    };

  export type NullableEnumtransactions_nbTypeFieldUpdateOperationsInput = {
    set?: $Enums.transactions_nbType | null;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput =
    {
      set?: $Enums.transactions_closingBalanceType | null;
    };

  export type NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput =
    {
      set?: $Enums.transactions_calculatedBalanceType | null;
    };

  export type issuersUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      issuersCreateWithoutTransactionsInput,
      issuersUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: issuersCreateOrConnectWithoutTransactionsInput;
    upsert?: issuersUpsertWithoutTransactionsInput;
    disconnect?: issuersWhereInput | boolean;
    delete?: issuersWhereInput | boolean;
    connect?: issuersWhereUniqueInput;
    update?: XOR<
      XOR<
        issuersUpdateToOneWithWhereWithoutTransactionsInput,
        issuersUpdateWithoutTransactionsInput
      >,
      issuersUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type insidersUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      insidersCreateWithoutTransactionsInput,
      insidersUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: insidersCreateOrConnectWithoutTransactionsInput;
    upsert?: insidersUpsertWithoutTransactionsInput;
    disconnect?: insidersWhereInput | boolean;
    delete?: insidersWhereInput | boolean;
    connect?: insidersWhereUniqueInput;
    update?: XOR<
      XOR<
        insidersUpdateToOneWithWhereWithoutTransactionsInput,
        insidersUpdateWithoutTransactionsInput
      >,
      insidersUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type securitydesignationsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      securitydesignationsCreateWithoutTransactionsInput,
      securitydesignationsUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: securitydesignationsCreateOrConnectWithoutTransactionsInput;
    upsert?: securitydesignationsUpsertWithoutTransactionsInput;
    disconnect?: securitydesignationsWhereInput | boolean;
    delete?: securitydesignationsWhereInput | boolean;
    connect?: securitydesignationsWhereUniqueInput;
    update?: XOR<
      XOR<
        securitydesignationsUpdateToOneWithWhereWithoutTransactionsInput,
        securitydesignationsUpdateWithoutTransactionsInput
      >,
      securitydesignationsUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type trnflagUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      trnflagCreateWithoutTransactionsInput,
      trnflagUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: trnflagCreateOrConnectWithoutTransactionsInput;
    upsert?: trnflagUpsertWithoutTransactionsInput;
    disconnect?: trnflagWhereInput | boolean;
    delete?: trnflagWhereInput | boolean;
    connect?: trnflagWhereUniqueInput;
    update?: XOR<
      XOR<
        trnflagUpdateToOneWithWhereWithoutTransactionsInput,
        trnflagUpdateWithoutTransactionsInput
      >,
      trnflagUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type trnnaturesUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      trnnaturesCreateWithoutTransactionsInput,
      trnnaturesUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: trnnaturesCreateOrConnectWithoutTransactionsInput;
    upsert?: trnnaturesUpsertWithoutTransactionsInput;
    disconnect?: trnnaturesWhereInput | boolean;
    delete?: trnnaturesWhereInput | boolean;
    connect?: trnnaturesWhereUniqueInput;
    update?: XOR<
      XOR<
        trnnaturesUpdateToOneWithWhereWithoutTransactionsInput,
        trnnaturesUpdateWithoutTransactionsInput
      >,
      trnnaturesUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type underlyingsecuritiesUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      underlyingsecuritiesCreateWithoutTransactionsInput,
      underlyingsecuritiesUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: underlyingsecuritiesCreateOrConnectWithoutTransactionsInput;
    upsert?: underlyingsecuritiesUpsertWithoutTransactionsInput;
    disconnect?: underlyingsecuritiesWhereInput | boolean;
    delete?: underlyingsecuritiesWhereInput | boolean;
    connect?: underlyingsecuritiesWhereUniqueInput;
    update?: XOR<
      XOR<
        underlyingsecuritiesUpdateToOneWithWhereWithoutTransactionsInput,
        underlyingsecuritiesUpdateWithoutTransactionsInput
      >,
      underlyingsecuritiesUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type currencyUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      currencyCreateWithoutTransactionsInput,
      currencyUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: currencyCreateOrConnectWithoutTransactionsInput;
    upsert?: currencyUpsertWithoutTransactionsInput;
    disconnect?: currencyWhereInput | boolean;
    delete?: currencyWhereInput | boolean;
    connect?: currencyWhereUniqueInput;
    update?: XOR<
      XOR<
        currencyUpdateToOneWithWhereWithoutTransactionsInput,
        currencyUpdateWithoutTransactionsInput
      >,
      currencyUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type transactionsCreateNestedManyWithoutTrnflagInput = {
    create?:
      | XOR<
          transactionsCreateWithoutTrnflagInput,
          transactionsUncheckedCreateWithoutTrnflagInput
        >
      | transactionsCreateWithoutTrnflagInput[]
      | transactionsUncheckedCreateWithoutTrnflagInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutTrnflagInput
      | transactionsCreateOrConnectWithoutTrnflagInput[];
    createMany?: transactionsCreateManyTrnflagInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type transactionsUncheckedCreateNestedManyWithoutTrnflagInput = {
    create?:
      | XOR<
          transactionsCreateWithoutTrnflagInput,
          transactionsUncheckedCreateWithoutTrnflagInput
        >
      | transactionsCreateWithoutTrnflagInput[]
      | transactionsUncheckedCreateWithoutTrnflagInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutTrnflagInput
      | transactionsCreateOrConnectWithoutTrnflagInput[];
    createMany?: transactionsCreateManyTrnflagInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type transactionsUpdateManyWithoutTrnflagNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutTrnflagInput,
          transactionsUncheckedCreateWithoutTrnflagInput
        >
      | transactionsCreateWithoutTrnflagInput[]
      | transactionsUncheckedCreateWithoutTrnflagInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutTrnflagInput
      | transactionsCreateOrConnectWithoutTrnflagInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutTrnflagInput
      | transactionsUpsertWithWhereUniqueWithoutTrnflagInput[];
    createMany?: transactionsCreateManyTrnflagInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutTrnflagInput
      | transactionsUpdateWithWhereUniqueWithoutTrnflagInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutTrnflagInput
      | transactionsUpdateManyWithWhereWithoutTrnflagInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type transactionsUncheckedUpdateManyWithoutTrnflagNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutTrnflagInput,
          transactionsUncheckedCreateWithoutTrnflagInput
        >
      | transactionsCreateWithoutTrnflagInput[]
      | transactionsUncheckedCreateWithoutTrnflagInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutTrnflagInput
      | transactionsCreateOrConnectWithoutTrnflagInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutTrnflagInput
      | transactionsUpsertWithWhereUniqueWithoutTrnflagInput[];
    createMany?: transactionsCreateManyTrnflagInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutTrnflagInput
      | transactionsUpdateWithWhereUniqueWithoutTrnflagInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutTrnflagInput
      | transactionsUpdateManyWithWhereWithoutTrnflagInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type transactionsCreateNestedManyWithoutTrnnaturesInput = {
    create?:
      | XOR<
          transactionsCreateWithoutTrnnaturesInput,
          transactionsUncheckedCreateWithoutTrnnaturesInput
        >
      | transactionsCreateWithoutTrnnaturesInput[]
      | transactionsUncheckedCreateWithoutTrnnaturesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutTrnnaturesInput
      | transactionsCreateOrConnectWithoutTrnnaturesInput[];
    createMany?: transactionsCreateManyTrnnaturesInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type transactionsUncheckedCreateNestedManyWithoutTrnnaturesInput = {
    create?:
      | XOR<
          transactionsCreateWithoutTrnnaturesInput,
          transactionsUncheckedCreateWithoutTrnnaturesInput
        >
      | transactionsCreateWithoutTrnnaturesInput[]
      | transactionsUncheckedCreateWithoutTrnnaturesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutTrnnaturesInput
      | transactionsCreateOrConnectWithoutTrnnaturesInput[];
    createMany?: transactionsCreateManyTrnnaturesInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type transactionsUpdateManyWithoutTrnnaturesNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutTrnnaturesInput,
          transactionsUncheckedCreateWithoutTrnnaturesInput
        >
      | transactionsCreateWithoutTrnnaturesInput[]
      | transactionsUncheckedCreateWithoutTrnnaturesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutTrnnaturesInput
      | transactionsCreateOrConnectWithoutTrnnaturesInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutTrnnaturesInput
      | transactionsUpsertWithWhereUniqueWithoutTrnnaturesInput[];
    createMany?: transactionsCreateManyTrnnaturesInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutTrnnaturesInput
      | transactionsUpdateWithWhereUniqueWithoutTrnnaturesInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutTrnnaturesInput
      | transactionsUpdateManyWithWhereWithoutTrnnaturesInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type transactionsUncheckedUpdateManyWithoutTrnnaturesNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutTrnnaturesInput,
          transactionsUncheckedCreateWithoutTrnnaturesInput
        >
      | transactionsCreateWithoutTrnnaturesInput[]
      | transactionsUncheckedCreateWithoutTrnnaturesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutTrnnaturesInput
      | transactionsCreateOrConnectWithoutTrnnaturesInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutTrnnaturesInput
      | transactionsUpsertWithWhereUniqueWithoutTrnnaturesInput[];
    createMany?: transactionsCreateManyTrnnaturesInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutTrnnaturesInput
      | transactionsUpdateWithWhereUniqueWithoutTrnnaturesInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutTrnnaturesInput
      | transactionsUpdateManyWithWhereWithoutTrnnaturesInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type transactionsCreateNestedManyWithoutUnderlyingsecuritiesInput = {
    create?:
      | XOR<
          transactionsCreateWithoutUnderlyingsecuritiesInput,
          transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput
        >
      | transactionsCreateWithoutUnderlyingsecuritiesInput[]
      | transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput
      | transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput[];
    createMany?: transactionsCreateManyUnderlyingsecuritiesInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type securitydesignationsCreateNestedOneWithoutUnderlyingsecuritiesInput =
    {
      create?: XOR<
        securitydesignationsCreateWithoutUnderlyingsecuritiesInput,
        securitydesignationsUncheckedCreateWithoutUnderlyingsecuritiesInput
      >;
      connectOrCreate?: securitydesignationsCreateOrConnectWithoutUnderlyingsecuritiesInput;
      connect?: securitydesignationsWhereUniqueInput;
    };

  export type currencyCreateNestedOneWithoutUnderlyingsecuritiesInput = {
    create?: XOR<
      currencyCreateWithoutUnderlyingsecuritiesInput,
      currencyUncheckedCreateWithoutUnderlyingsecuritiesInput
    >;
    connectOrCreate?: currencyCreateOrConnectWithoutUnderlyingsecuritiesInput;
    connect?: currencyWhereUniqueInput;
  };

  export type transactionsUncheckedCreateNestedManyWithoutUnderlyingsecuritiesInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutUnderlyingsecuritiesInput,
            transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput
          >
        | transactionsCreateWithoutUnderlyingsecuritiesInput[]
        | transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput
        | transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput[];
      createMany?: transactionsCreateManyUnderlyingsecuritiesInputEnvelope;
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    };

  export type NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput =
    {
      set?: $Enums.underlyingsecurities_nbType | null;
    };

  export type NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput =
    {
      set?: $Enums.underlyingsecurities_BalanceType | null;
    };

  export type transactionsUpdateManyWithoutUnderlyingsecuritiesNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutUnderlyingsecuritiesInput,
          transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput
        >
      | transactionsCreateWithoutUnderlyingsecuritiesInput[]
      | transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput
      | transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutUnderlyingsecuritiesInput
      | transactionsUpsertWithWhereUniqueWithoutUnderlyingsecuritiesInput[];
    createMany?: transactionsCreateManyUnderlyingsecuritiesInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutUnderlyingsecuritiesInput
      | transactionsUpdateWithWhereUniqueWithoutUnderlyingsecuritiesInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutUnderlyingsecuritiesInput
      | transactionsUpdateManyWithWhereWithoutUnderlyingsecuritiesInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type securitydesignationsUpdateOneWithoutUnderlyingsecuritiesNestedInput =
    {
      create?: XOR<
        securitydesignationsCreateWithoutUnderlyingsecuritiesInput,
        securitydesignationsUncheckedCreateWithoutUnderlyingsecuritiesInput
      >;
      connectOrCreate?: securitydesignationsCreateOrConnectWithoutUnderlyingsecuritiesInput;
      upsert?: securitydesignationsUpsertWithoutUnderlyingsecuritiesInput;
      disconnect?: securitydesignationsWhereInput | boolean;
      delete?: securitydesignationsWhereInput | boolean;
      connect?: securitydesignationsWhereUniqueInput;
      update?: XOR<
        XOR<
          securitydesignationsUpdateToOneWithWhereWithoutUnderlyingsecuritiesInput,
          securitydesignationsUpdateWithoutUnderlyingsecuritiesInput
        >,
        securitydesignationsUncheckedUpdateWithoutUnderlyingsecuritiesInput
      >;
    };

  export type currencyUpdateOneWithoutUnderlyingsecuritiesNestedInput = {
    create?: XOR<
      currencyCreateWithoutUnderlyingsecuritiesInput,
      currencyUncheckedCreateWithoutUnderlyingsecuritiesInput
    >;
    connectOrCreate?: currencyCreateOrConnectWithoutUnderlyingsecuritiesInput;
    upsert?: currencyUpsertWithoutUnderlyingsecuritiesInput;
    disconnect?: currencyWhereInput | boolean;
    delete?: currencyWhereInput | boolean;
    connect?: currencyWhereUniqueInput;
    update?: XOR<
      XOR<
        currencyUpdateToOneWithWhereWithoutUnderlyingsecuritiesInput,
        currencyUpdateWithoutUnderlyingsecuritiesInput
      >,
      currencyUncheckedUpdateWithoutUnderlyingsecuritiesInput
    >;
  };

  export type transactionsUncheckedUpdateManyWithoutUnderlyingsecuritiesNestedInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutUnderlyingsecuritiesInput,
            transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput
          >
        | transactionsCreateWithoutUnderlyingsecuritiesInput[]
        | transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput
        | transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput[];
      upsert?:
        | transactionsUpsertWithWhereUniqueWithoutUnderlyingsecuritiesInput
        | transactionsUpsertWithWhereUniqueWithoutUnderlyingsecuritiesInput[];
      createMany?: transactionsCreateManyUnderlyingsecuritiesInputEnvelope;
      set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      disconnect?:
        | transactionsWhereUniqueInput
        | transactionsWhereUniqueInput[];
      delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      update?:
        | transactionsUpdateWithWhereUniqueWithoutUnderlyingsecuritiesInput
        | transactionsUpdateWithWhereUniqueWithoutUnderlyingsecuritiesInput[];
      updateMany?:
        | transactionsUpdateManyWithWhereWithoutUnderlyingsecuritiesInput
        | transactionsUpdateManyWithWhereWithoutUnderlyingsecuritiesInput[];
      deleteMany?:
        | transactionsScalarWhereInput
        | transactionsScalarWhereInput[];
    };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumrelationstoissuer_typeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.relationstoissuer_type
      | Enumrelationstoissuer_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.relationstoissuer_type[];
    notIn?: $Enums.relationstoissuer_type[];
    not?:
      | NestedEnumrelationstoissuer_typeFilter<$PrismaModel>
      | $Enums.relationstoissuer_type;
  };

  export type NestedEnumrelationstoissuer_typeWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.relationstoissuer_type
      | Enumrelationstoissuer_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.relationstoissuer_type[];
    notIn?: $Enums.relationstoissuer_type[];
    not?:
      | NestedEnumrelationstoissuer_typeWithAggregatesFilter<$PrismaModel>
      | $Enums.relationstoissuer_type;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumrelationstoissuer_typeFilter<$PrismaModel>;
    _max?: NestedEnumrelationstoissuer_typeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedEnumtransactions_ownershipTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_ownershipType
      | Enumtransactions_ownershipTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_ownershipType[] | null;
    notIn?: $Enums.transactions_ownershipType[] | null;
    not?:
      | NestedEnumtransactions_ownershipTypeNullableFilter<$PrismaModel>
      | $Enums.transactions_ownershipType
      | null;
  };

  export type NestedEnumtransactions_nbTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_nbType
      | Enumtransactions_nbTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_nbType[] | null;
    notIn?: $Enums.transactions_nbType[] | null;
    not?:
      | NestedEnumtransactions_nbTypeNullableFilter<$PrismaModel>
      | $Enums.transactions_nbType
      | null;
  };

  export type NestedEnumtransactions_closingBalanceTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_closingBalanceType
      | Enumtransactions_closingBalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_closingBalanceType[] | null;
    notIn?: $Enums.transactions_closingBalanceType[] | null;
    not?:
      | NestedEnumtransactions_closingBalanceTypeNullableFilter<$PrismaModel>
      | $Enums.transactions_closingBalanceType
      | null;
  };

  export type NestedEnumtransactions_calculatedBalanceTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_calculatedBalanceType
      | Enumtransactions_calculatedBalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_calculatedBalanceType[] | null;
    notIn?: $Enums.transactions_calculatedBalanceType[] | null;
    not?:
      | NestedEnumtransactions_calculatedBalanceTypeNullableFilter<$PrismaModel>
      | $Enums.transactions_calculatedBalanceType
      | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | null;
      notIn?: Date[] | string[] | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedEnumtransactions_ownershipTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_ownershipType
      | Enumtransactions_ownershipTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_ownershipType[] | null;
    notIn?: $Enums.transactions_ownershipType[] | null;
    not?:
      | NestedEnumtransactions_ownershipTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.transactions_ownershipType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumtransactions_ownershipTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumtransactions_ownershipTypeNullableFilter<$PrismaModel>;
  };

  export type NestedEnumtransactions_nbTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_nbType
      | Enumtransactions_nbTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_nbType[] | null;
    notIn?: $Enums.transactions_nbType[] | null;
    not?:
      | NestedEnumtransactions_nbTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.transactions_nbType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumtransactions_nbTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumtransactions_nbTypeNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedEnumtransactions_closingBalanceTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_closingBalanceType
      | Enumtransactions_closingBalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_closingBalanceType[] | null;
    notIn?: $Enums.transactions_closingBalanceType[] | null;
    not?:
      | NestedEnumtransactions_closingBalanceTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.transactions_closingBalanceType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumtransactions_closingBalanceTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumtransactions_closingBalanceTypeNullableFilter<$PrismaModel>;
  };

  export type NestedEnumtransactions_calculatedBalanceTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.transactions_calculatedBalanceType
      | Enumtransactions_calculatedBalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.transactions_calculatedBalanceType[] | null;
    notIn?: $Enums.transactions_calculatedBalanceType[] | null;
    not?:
      | NestedEnumtransactions_calculatedBalanceTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.transactions_calculatedBalanceType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumtransactions_calculatedBalanceTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumtransactions_calculatedBalanceTypeNullableFilter<$PrismaModel>;
  };

  export type NestedEnumunderlyingsecurities_nbTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.underlyingsecurities_nbType
      | Enumunderlyingsecurities_nbTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.underlyingsecurities_nbType[] | null;
    notIn?: $Enums.underlyingsecurities_nbType[] | null;
    not?:
      | NestedEnumunderlyingsecurities_nbTypeNullableFilter<$PrismaModel>
      | $Enums.underlyingsecurities_nbType
      | null;
  };

  export type NestedEnumunderlyingsecurities_BalanceTypeNullableFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.underlyingsecurities_BalanceType
      | Enumunderlyingsecurities_BalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.underlyingsecurities_BalanceType[] | null;
    notIn?: $Enums.underlyingsecurities_BalanceType[] | null;
    not?:
      | NestedEnumunderlyingsecurities_BalanceTypeNullableFilter<$PrismaModel>
      | $Enums.underlyingsecurities_BalanceType
      | null;
  };

  export type NestedEnumunderlyingsecurities_nbTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.underlyingsecurities_nbType
      | Enumunderlyingsecurities_nbTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.underlyingsecurities_nbType[] | null;
    notIn?: $Enums.underlyingsecurities_nbType[] | null;
    not?:
      | NestedEnumunderlyingsecurities_nbTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.underlyingsecurities_nbType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumunderlyingsecurities_nbTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumunderlyingsecurities_nbTypeNullableFilter<$PrismaModel>;
  };

  export type NestedEnumunderlyingsecurities_BalanceTypeNullableWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.underlyingsecurities_BalanceType
      | Enumunderlyingsecurities_BalanceTypeFieldRefInput<$PrismaModel>
      | null;
    in?: $Enums.underlyingsecurities_BalanceType[] | null;
    notIn?: $Enums.underlyingsecurities_BalanceType[] | null;
    not?:
      | NestedEnumunderlyingsecurities_BalanceTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.underlyingsecurities_BalanceType
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumunderlyingsecurities_BalanceTypeNullableFilter<$PrismaModel>;
    _max?: NestedEnumunderlyingsecurities_BalanceTypeNullableFilter<$PrismaModel>;
  };

  export type transactionsCreateWithoutCurrencyInput = {
    sediId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
    issuers?: issuersCreateNestedOneWithoutTransactionsInput;
    insiders?: insidersCreateNestedOneWithoutTransactionsInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutTransactionsInput;
    trnflag?: trnflagCreateNestedOneWithoutTransactionsInput;
    trnnatures?: trnnaturesCreateNestedOneWithoutTransactionsInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateWithoutCurrencyInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsCreateOrConnectWithoutCurrencyInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutCurrencyInput,
      transactionsUncheckedCreateWithoutCurrencyInput
    >;
  };

  export type transactionsCreateManyCurrencyInputEnvelope = {
    data:
      | transactionsCreateManyCurrencyInput
      | transactionsCreateManyCurrencyInput[];
    skipDuplicates?: boolean;
  };

  export type underlyingsecuritiesCreateWithoutCurrencyInput = {
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    expiryDate?: Date | string | null;
    transactions?: transactionsCreateNestedManyWithoutUnderlyingsecuritiesInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutUnderlyingsecuritiesInput;
  };

  export type underlyingsecuritiesUncheckedCreateWithoutCurrencyInput = {
    id?: number;
    securityId?: number | null;
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    expiryDate?: Date | string | null;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUnderlyingsecuritiesInput;
  };

  export type underlyingsecuritiesCreateOrConnectWithoutCurrencyInput = {
    where: underlyingsecuritiesWhereUniqueInput;
    create: XOR<
      underlyingsecuritiesCreateWithoutCurrencyInput,
      underlyingsecuritiesUncheckedCreateWithoutCurrencyInput
    >;
  };

  export type underlyingsecuritiesCreateManyCurrencyInputEnvelope = {
    data:
      | underlyingsecuritiesCreateManyCurrencyInput
      | underlyingsecuritiesCreateManyCurrencyInput[];
    skipDuplicates?: boolean;
  };

  export type transactionsUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: transactionsWhereUniqueInput;
    update: XOR<
      transactionsUpdateWithoutCurrencyInput,
      transactionsUncheckedUpdateWithoutCurrencyInput
    >;
    create: XOR<
      transactionsCreateWithoutCurrencyInput,
      transactionsUncheckedCreateWithoutCurrencyInput
    >;
  };

  export type transactionsUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: transactionsWhereUniqueInput;
    data: XOR<
      transactionsUpdateWithoutCurrencyInput,
      transactionsUncheckedUpdateWithoutCurrencyInput
    >;
  };

  export type transactionsUpdateManyWithWhereWithoutCurrencyInput = {
    where: transactionsScalarWhereInput;
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyWithoutCurrencyInput
    >;
  };

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
    OR?: transactionsScalarWhereInput[];
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
    id?: IntFilter<"transactions"> | number;
    sediId?: IntNullableFilter<"transactions"> | number | null;
    insiderId?: IntNullableFilter<"transactions"> | number | null;
    issuerId?: IntNullableFilter<"transactions"> | number | null;
    securityId?: IntNullableFilter<"transactions"> | number | null;
    trnFlagId?: IntNullableFilter<"transactions"> | number | null;
    trnDate?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    filingDate?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    ownershipType?:
      | Enumtransactions_ownershipTypeNullableFilter<"transactions">
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?: StringNullableFilter<"transactions"> | string | null;
    trnNatureCode?: IntNullableFilter<"transactions"> | number | null;
    nb?: IntNullableFilter<"transactions"> | number | null;
    nbType?:
      | Enumtransactions_nbTypeNullableFilter<"transactions">
      | $Enums.transactions_nbType
      | null;
    price?: FloatNullableFilter<"transactions"> | number | null;
    priceCurrencyId?: IntNullableFilter<"transactions"> | number | null;
    closingBalance?: FloatNullableFilter<"transactions"> | number | null;
    closingBalanceType?:
      | Enumtransactions_closingBalanceTypeNullableFilter<"transactions">
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: FloatNullableFilter<"transactions"> | number | null;
    calculatedBalanceType?:
      | Enumtransactions_calculatedBalanceTypeNullableFilter<"transactions">
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?: IntNullableFilter<"transactions"> | number | null;
    GeneralRemarks?: StringNullableFilter<"transactions"> | string | null;
  };

  export type underlyingsecuritiesUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: underlyingsecuritiesWhereUniqueInput;
    update: XOR<
      underlyingsecuritiesUpdateWithoutCurrencyInput,
      underlyingsecuritiesUncheckedUpdateWithoutCurrencyInput
    >;
    create: XOR<
      underlyingsecuritiesCreateWithoutCurrencyInput,
      underlyingsecuritiesUncheckedCreateWithoutCurrencyInput
    >;
  };

  export type underlyingsecuritiesUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: underlyingsecuritiesWhereUniqueInput;
    data: XOR<
      underlyingsecuritiesUpdateWithoutCurrencyInput,
      underlyingsecuritiesUncheckedUpdateWithoutCurrencyInput
    >;
  };

  export type underlyingsecuritiesUpdateManyWithWhereWithoutCurrencyInput = {
    where: underlyingsecuritiesScalarWhereInput;
    data: XOR<
      underlyingsecuritiesUpdateManyMutationInput,
      underlyingsecuritiesUncheckedUpdateManyWithoutCurrencyInput
    >;
  };

  export type underlyingsecuritiesScalarWhereInput = {
    AND?:
      | underlyingsecuritiesScalarWhereInput
      | underlyingsecuritiesScalarWhereInput[];
    OR?: underlyingsecuritiesScalarWhereInput[];
    NOT?:
      | underlyingsecuritiesScalarWhereInput
      | underlyingsecuritiesScalarWhereInput[];
    id?: IntFilter<"underlyingsecurities"> | number;
    securityId?: IntNullableFilter<"underlyingsecurities"> | number | null;
    nb?: IntNullableFilter<"underlyingsecurities"> | number | null;
    nbType?:
      | Enumunderlyingsecurities_nbTypeNullableFilter<"underlyingsecurities">
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: IntNullableFilter<"underlyingsecurities"> | number | null;
    BalanceType?:
      | Enumunderlyingsecurities_BalanceTypeNullableFilter<"underlyingsecurities">
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: FloatNullableFilter<"underlyingsecurities"> | number | null;
    exercisePriceCurrencyId?:
      | IntNullableFilter<"underlyingsecurities">
      | number
      | null;
    expiryDate?:
      | DateTimeNullableFilter<"underlyingsecurities">
      | Date
      | string
      | null;
  };

  export type issuerexchangesCreateWithoutExchangesInput = {
    issuers: issuersCreateNestedOneWithoutIssuerexchangesInput;
  };

  export type issuerexchangesUncheckedCreateWithoutExchangesInput = {
    issuerId: number;
  };

  export type issuerexchangesCreateOrConnectWithoutExchangesInput = {
    where: issuerexchangesWhereUniqueInput;
    create: XOR<
      issuerexchangesCreateWithoutExchangesInput,
      issuerexchangesUncheckedCreateWithoutExchangesInput
    >;
  };

  export type issuerexchangesCreateManyExchangesInputEnvelope = {
    data:
      | issuerexchangesCreateManyExchangesInput
      | issuerexchangesCreateManyExchangesInput[];
    skipDuplicates?: boolean;
  };

  export type issuerexchangesUpsertWithWhereUniqueWithoutExchangesInput = {
    where: issuerexchangesWhereUniqueInput;
    update: XOR<
      issuerexchangesUpdateWithoutExchangesInput,
      issuerexchangesUncheckedUpdateWithoutExchangesInput
    >;
    create: XOR<
      issuerexchangesCreateWithoutExchangesInput,
      issuerexchangesUncheckedCreateWithoutExchangesInput
    >;
  };

  export type issuerexchangesUpdateWithWhereUniqueWithoutExchangesInput = {
    where: issuerexchangesWhereUniqueInput;
    data: XOR<
      issuerexchangesUpdateWithoutExchangesInput,
      issuerexchangesUncheckedUpdateWithoutExchangesInput
    >;
  };

  export type issuerexchangesUpdateManyWithWhereWithoutExchangesInput = {
    where: issuerexchangesScalarWhereInput;
    data: XOR<
      issuerexchangesUpdateManyMutationInput,
      issuerexchangesUncheckedUpdateManyWithoutExchangesInput
    >;
  };

  export type issuerexchangesScalarWhereInput = {
    AND?: issuerexchangesScalarWhereInput | issuerexchangesScalarWhereInput[];
    OR?: issuerexchangesScalarWhereInput[];
    NOT?: issuerexchangesScalarWhereInput | issuerexchangesScalarWhereInput[];
    issuerId?: IntFilter<"issuerexchanges"> | number;
    exchangeId?: IntFilter<"issuerexchanges"> | number;
  };

  export type issuersCreateWithoutInsidersInput = {
    sedarId?: number | null;
    name?: string | null;
    issuerexchanges?: issuerexchangesCreateNestedManyWithoutIssuersInput;
    tickers?: tickersCreateNestedOneWithoutIssuersInput;
    sizes?: sizesCreateNestedOneWithoutIssuersInput;
    transactions?: transactionsCreateNestedManyWithoutIssuersInput;
  };

  export type issuersUncheckedCreateWithoutInsidersInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    tickerId?: number | null;
    sizeId?: number | null;
    issuerexchanges?: issuerexchangesUncheckedCreateNestedManyWithoutIssuersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutIssuersInput;
  };

  export type issuersCreateOrConnectWithoutInsidersInput = {
    where: issuersWhereUniqueInput;
    create: XOR<
      issuersCreateWithoutInsidersInput,
      issuersUncheckedCreateWithoutInsidersInput
    >;
  };

  export type relationstoissuerCreateWithoutInsidersInput = {
    type: $Enums.relationstoissuer_type;
  };

  export type relationstoissuerUncheckedCreateWithoutInsidersInput = {
    type: $Enums.relationstoissuer_type;
  };

  export type relationstoissuerCreateOrConnectWithoutInsidersInput = {
    where: relationstoissuerWhereUniqueInput;
    create: XOR<
      relationstoissuerCreateWithoutInsidersInput,
      relationstoissuerUncheckedCreateWithoutInsidersInput
    >;
  };

  export type relationstoissuerCreateManyInsidersInputEnvelope = {
    data:
      | relationstoissuerCreateManyInsidersInput
      | relationstoissuerCreateManyInsidersInput[];
    skipDuplicates?: boolean;
  };

  export type transactionsCreateWithoutInsidersInput = {
    sediId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
    issuers?: issuersCreateNestedOneWithoutTransactionsInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutTransactionsInput;
    trnflag?: trnflagCreateNestedOneWithoutTransactionsInput;
    trnnatures?: trnnaturesCreateNestedOneWithoutTransactionsInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedOneWithoutTransactionsInput;
    currency?: currencyCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateWithoutInsidersInput = {
    id?: number;
    sediId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsCreateOrConnectWithoutInsidersInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutInsidersInput,
      transactionsUncheckedCreateWithoutInsidersInput
    >;
  };

  export type transactionsCreateManyInsidersInputEnvelope = {
    data:
      | transactionsCreateManyInsidersInput
      | transactionsCreateManyInsidersInput[];
    skipDuplicates?: boolean;
  };

  export type issuersUpsertWithoutInsidersInput = {
    update: XOR<
      issuersUpdateWithoutInsidersInput,
      issuersUncheckedUpdateWithoutInsidersInput
    >;
    create: XOR<
      issuersCreateWithoutInsidersInput,
      issuersUncheckedCreateWithoutInsidersInput
    >;
    where?: issuersWhereInput;
  };

  export type issuersUpdateToOneWithWhereWithoutInsidersInput = {
    where?: issuersWhereInput;
    data: XOR<
      issuersUpdateWithoutInsidersInput,
      issuersUncheckedUpdateWithoutInsidersInput
    >;
  };

  export type issuersUpdateWithoutInsidersInput = {
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuerexchanges?: issuerexchangesUpdateManyWithoutIssuersNestedInput;
    tickers?: tickersUpdateOneWithoutIssuersNestedInput;
    sizes?: sizesUpdateOneWithoutIssuersNestedInput;
    transactions?: transactionsUpdateManyWithoutIssuersNestedInput;
  };

  export type issuersUncheckedUpdateWithoutInsidersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    tickerId?: NullableIntFieldUpdateOperationsInput | number | null;
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerexchanges?: issuerexchangesUncheckedUpdateManyWithoutIssuersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutIssuersNestedInput;
  };

  export type relationstoissuerUpsertWithWhereUniqueWithoutInsidersInput = {
    where: relationstoissuerWhereUniqueInput;
    update: XOR<
      relationstoissuerUpdateWithoutInsidersInput,
      relationstoissuerUncheckedUpdateWithoutInsidersInput
    >;
    create: XOR<
      relationstoissuerCreateWithoutInsidersInput,
      relationstoissuerUncheckedCreateWithoutInsidersInput
    >;
  };

  export type relationstoissuerUpdateWithWhereUniqueWithoutInsidersInput = {
    where: relationstoissuerWhereUniqueInput;
    data: XOR<
      relationstoissuerUpdateWithoutInsidersInput,
      relationstoissuerUncheckedUpdateWithoutInsidersInput
    >;
  };

  export type relationstoissuerUpdateManyWithWhereWithoutInsidersInput = {
    where: relationstoissuerScalarWhereInput;
    data: XOR<
      relationstoissuerUpdateManyMutationInput,
      relationstoissuerUncheckedUpdateManyWithoutInsidersInput
    >;
  };

  export type relationstoissuerScalarWhereInput = {
    AND?:
      | relationstoissuerScalarWhereInput
      | relationstoissuerScalarWhereInput[];
    OR?: relationstoissuerScalarWhereInput[];
    NOT?:
      | relationstoissuerScalarWhereInput
      | relationstoissuerScalarWhereInput[];
    type?:
      | Enumrelationstoissuer_typeFilter<"relationstoissuer">
      | $Enums.relationstoissuer_type;
    insiderId?: IntFilter<"relationstoissuer"> | number;
  };

  export type transactionsUpsertWithWhereUniqueWithoutInsidersInput = {
    where: transactionsWhereUniqueInput;
    update: XOR<
      transactionsUpdateWithoutInsidersInput,
      transactionsUncheckedUpdateWithoutInsidersInput
    >;
    create: XOR<
      transactionsCreateWithoutInsidersInput,
      transactionsUncheckedCreateWithoutInsidersInput
    >;
  };

  export type transactionsUpdateWithWhereUniqueWithoutInsidersInput = {
    where: transactionsWhereUniqueInput;
    data: XOR<
      transactionsUpdateWithoutInsidersInput,
      transactionsUncheckedUpdateWithoutInsidersInput
    >;
  };

  export type transactionsUpdateManyWithWhereWithoutInsidersInput = {
    where: transactionsScalarWhereInput;
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyWithoutInsidersInput
    >;
  };

  export type issuersCreateWithoutIssuerexchangesInput = {
    sedarId?: number | null;
    name?: string | null;
    insiders?: insidersCreateNestedManyWithoutIssuersInput;
    tickers?: tickersCreateNestedOneWithoutIssuersInput;
    sizes?: sizesCreateNestedOneWithoutIssuersInput;
    transactions?: transactionsCreateNestedManyWithoutIssuersInput;
  };

  export type issuersUncheckedCreateWithoutIssuerexchangesInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    tickerId?: number | null;
    sizeId?: number | null;
    insiders?: insidersUncheckedCreateNestedManyWithoutIssuersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutIssuersInput;
  };

  export type issuersCreateOrConnectWithoutIssuerexchangesInput = {
    where: issuersWhereUniqueInput;
    create: XOR<
      issuersCreateWithoutIssuerexchangesInput,
      issuersUncheckedCreateWithoutIssuerexchangesInput
    >;
  };

  export type exchangesCreateWithoutIssuerexchangesInput = {
    name?: string | null;
  };

  export type exchangesUncheckedCreateWithoutIssuerexchangesInput = {
    id?: number;
    name?: string | null;
  };

  export type exchangesCreateOrConnectWithoutIssuerexchangesInput = {
    where: exchangesWhereUniqueInput;
    create: XOR<
      exchangesCreateWithoutIssuerexchangesInput,
      exchangesUncheckedCreateWithoutIssuerexchangesInput
    >;
  };

  export type issuersUpsertWithoutIssuerexchangesInput = {
    update: XOR<
      issuersUpdateWithoutIssuerexchangesInput,
      issuersUncheckedUpdateWithoutIssuerexchangesInput
    >;
    create: XOR<
      issuersCreateWithoutIssuerexchangesInput,
      issuersUncheckedCreateWithoutIssuerexchangesInput
    >;
    where?: issuersWhereInput;
  };

  export type issuersUpdateToOneWithWhereWithoutIssuerexchangesInput = {
    where?: issuersWhereInput;
    data: XOR<
      issuersUpdateWithoutIssuerexchangesInput,
      issuersUncheckedUpdateWithoutIssuerexchangesInput
    >;
  };

  export type issuersUpdateWithoutIssuerexchangesInput = {
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    insiders?: insidersUpdateManyWithoutIssuersNestedInput;
    tickers?: tickersUpdateOneWithoutIssuersNestedInput;
    sizes?: sizesUpdateOneWithoutIssuersNestedInput;
    transactions?: transactionsUpdateManyWithoutIssuersNestedInput;
  };

  export type issuersUncheckedUpdateWithoutIssuerexchangesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    tickerId?: NullableIntFieldUpdateOperationsInput | number | null;
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiders?: insidersUncheckedUpdateManyWithoutIssuersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutIssuersNestedInput;
  };

  export type exchangesUpsertWithoutIssuerexchangesInput = {
    update: XOR<
      exchangesUpdateWithoutIssuerexchangesInput,
      exchangesUncheckedUpdateWithoutIssuerexchangesInput
    >;
    create: XOR<
      exchangesCreateWithoutIssuerexchangesInput,
      exchangesUncheckedCreateWithoutIssuerexchangesInput
    >;
    where?: exchangesWhereInput;
  };

  export type exchangesUpdateToOneWithWhereWithoutIssuerexchangesInput = {
    where?: exchangesWhereInput;
    data: XOR<
      exchangesUpdateWithoutIssuerexchangesInput,
      exchangesUncheckedUpdateWithoutIssuerexchangesInput
    >;
  };

  export type exchangesUpdateWithoutIssuerexchangesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type exchangesUncheckedUpdateWithoutIssuerexchangesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type insidersCreateWithoutIssuersInput = {
    name?: string | null;
    ceasedToBeInsider?: string | null;
    relationstoissuer?: relationstoissuerCreateNestedManyWithoutInsidersInput;
    transactions?: transactionsCreateNestedManyWithoutInsidersInput;
  };

  export type insidersUncheckedCreateWithoutIssuersInput = {
    id?: number;
    name?: string | null;
    ceasedToBeInsider?: string | null;
    relationstoissuer?: relationstoissuerUncheckedCreateNestedManyWithoutInsidersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutInsidersInput;
  };

  export type insidersCreateOrConnectWithoutIssuersInput = {
    where: insidersWhereUniqueInput;
    create: XOR<
      insidersCreateWithoutIssuersInput,
      insidersUncheckedCreateWithoutIssuersInput
    >;
  };

  export type insidersCreateManyIssuersInputEnvelope = {
    data: insidersCreateManyIssuersInput | insidersCreateManyIssuersInput[];
    skipDuplicates?: boolean;
  };

  export type issuerexchangesCreateWithoutIssuersInput = {
    exchanges: exchangesCreateNestedOneWithoutIssuerexchangesInput;
  };

  export type issuerexchangesUncheckedCreateWithoutIssuersInput = {
    exchangeId: number;
  };

  export type issuerexchangesCreateOrConnectWithoutIssuersInput = {
    where: issuerexchangesWhereUniqueInput;
    create: XOR<
      issuerexchangesCreateWithoutIssuersInput,
      issuerexchangesUncheckedCreateWithoutIssuersInput
    >;
  };

  export type issuerexchangesCreateManyIssuersInputEnvelope = {
    data:
      | issuerexchangesCreateManyIssuersInput
      | issuerexchangesCreateManyIssuersInput[];
    skipDuplicates?: boolean;
  };

  export type tickersCreateWithoutIssuersInput = {
    name?: string | null;
  };

  export type tickersUncheckedCreateWithoutIssuersInput = {
    id?: number;
    name?: string | null;
  };

  export type tickersCreateOrConnectWithoutIssuersInput = {
    where: tickersWhereUniqueInput;
    create: XOR<
      tickersCreateWithoutIssuersInput,
      tickersUncheckedCreateWithoutIssuersInput
    >;
  };

  export type sizesCreateWithoutIssuersInput = {
    name?: string | null;
  };

  export type sizesUncheckedCreateWithoutIssuersInput = {
    id?: number;
    name?: string | null;
  };

  export type sizesCreateOrConnectWithoutIssuersInput = {
    where: sizesWhereUniqueInput;
    create: XOR<
      sizesCreateWithoutIssuersInput,
      sizesUncheckedCreateWithoutIssuersInput
    >;
  };

  export type transactionsCreateWithoutIssuersInput = {
    sediId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
    insiders?: insidersCreateNestedOneWithoutTransactionsInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutTransactionsInput;
    trnflag?: trnflagCreateNestedOneWithoutTransactionsInput;
    trnnatures?: trnnaturesCreateNestedOneWithoutTransactionsInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedOneWithoutTransactionsInput;
    currency?: currencyCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateWithoutIssuersInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsCreateOrConnectWithoutIssuersInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutIssuersInput,
      transactionsUncheckedCreateWithoutIssuersInput
    >;
  };

  export type transactionsCreateManyIssuersInputEnvelope = {
    data:
      | transactionsCreateManyIssuersInput
      | transactionsCreateManyIssuersInput[];
    skipDuplicates?: boolean;
  };

  export type insidersUpsertWithWhereUniqueWithoutIssuersInput = {
    where: insidersWhereUniqueInput;
    update: XOR<
      insidersUpdateWithoutIssuersInput,
      insidersUncheckedUpdateWithoutIssuersInput
    >;
    create: XOR<
      insidersCreateWithoutIssuersInput,
      insidersUncheckedCreateWithoutIssuersInput
    >;
  };

  export type insidersUpdateWithWhereUniqueWithoutIssuersInput = {
    where: insidersWhereUniqueInput;
    data: XOR<
      insidersUpdateWithoutIssuersInput,
      insidersUncheckedUpdateWithoutIssuersInput
    >;
  };

  export type insidersUpdateManyWithWhereWithoutIssuersInput = {
    where: insidersScalarWhereInput;
    data: XOR<
      insidersUpdateManyMutationInput,
      insidersUncheckedUpdateManyWithoutIssuersInput
    >;
  };

  export type insidersScalarWhereInput = {
    AND?: insidersScalarWhereInput | insidersScalarWhereInput[];
    OR?: insidersScalarWhereInput[];
    NOT?: insidersScalarWhereInput | insidersScalarWhereInput[];
    id?: IntFilter<"insiders"> | number;
    name?: StringNullableFilter<"insiders"> | string | null;
    issuerId?: IntNullableFilter<"insiders"> | number | null;
    ceasedToBeInsider?: StringNullableFilter<"insiders"> | string | null;
  };

  export type issuerexchangesUpsertWithWhereUniqueWithoutIssuersInput = {
    where: issuerexchangesWhereUniqueInput;
    update: XOR<
      issuerexchangesUpdateWithoutIssuersInput,
      issuerexchangesUncheckedUpdateWithoutIssuersInput
    >;
    create: XOR<
      issuerexchangesCreateWithoutIssuersInput,
      issuerexchangesUncheckedCreateWithoutIssuersInput
    >;
  };

  export type issuerexchangesUpdateWithWhereUniqueWithoutIssuersInput = {
    where: issuerexchangesWhereUniqueInput;
    data: XOR<
      issuerexchangesUpdateWithoutIssuersInput,
      issuerexchangesUncheckedUpdateWithoutIssuersInput
    >;
  };

  export type issuerexchangesUpdateManyWithWhereWithoutIssuersInput = {
    where: issuerexchangesScalarWhereInput;
    data: XOR<
      issuerexchangesUpdateManyMutationInput,
      issuerexchangesUncheckedUpdateManyWithoutIssuersInput
    >;
  };

  export type tickersUpsertWithoutIssuersInput = {
    update: XOR<
      tickersUpdateWithoutIssuersInput,
      tickersUncheckedUpdateWithoutIssuersInput
    >;
    create: XOR<
      tickersCreateWithoutIssuersInput,
      tickersUncheckedCreateWithoutIssuersInput
    >;
    where?: tickersWhereInput;
  };

  export type tickersUpdateToOneWithWhereWithoutIssuersInput = {
    where?: tickersWhereInput;
    data: XOR<
      tickersUpdateWithoutIssuersInput,
      tickersUncheckedUpdateWithoutIssuersInput
    >;
  };

  export type tickersUpdateWithoutIssuersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type tickersUncheckedUpdateWithoutIssuersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type sizesUpsertWithoutIssuersInput = {
    update: XOR<
      sizesUpdateWithoutIssuersInput,
      sizesUncheckedUpdateWithoutIssuersInput
    >;
    create: XOR<
      sizesCreateWithoutIssuersInput,
      sizesUncheckedCreateWithoutIssuersInput
    >;
    where?: sizesWhereInput;
  };

  export type sizesUpdateToOneWithWhereWithoutIssuersInput = {
    where?: sizesWhereInput;
    data: XOR<
      sizesUpdateWithoutIssuersInput,
      sizesUncheckedUpdateWithoutIssuersInput
    >;
  };

  export type sizesUpdateWithoutIssuersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type sizesUncheckedUpdateWithoutIssuersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUpsertWithWhereUniqueWithoutIssuersInput = {
    where: transactionsWhereUniqueInput;
    update: XOR<
      transactionsUpdateWithoutIssuersInput,
      transactionsUncheckedUpdateWithoutIssuersInput
    >;
    create: XOR<
      transactionsCreateWithoutIssuersInput,
      transactionsUncheckedCreateWithoutIssuersInput
    >;
  };

  export type transactionsUpdateWithWhereUniqueWithoutIssuersInput = {
    where: transactionsWhereUniqueInput;
    data: XOR<
      transactionsUpdateWithoutIssuersInput,
      transactionsUncheckedUpdateWithoutIssuersInput
    >;
  };

  export type transactionsUpdateManyWithWhereWithoutIssuersInput = {
    where: transactionsScalarWhereInput;
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyWithoutIssuersInput
    >;
  };

  export type insidersCreateWithoutRelationstoissuerInput = {
    name?: string | null;
    ceasedToBeInsider?: string | null;
    issuers?: issuersCreateNestedOneWithoutInsidersInput;
    transactions?: transactionsCreateNestedManyWithoutInsidersInput;
  };

  export type insidersUncheckedCreateWithoutRelationstoissuerInput = {
    id?: number;
    name?: string | null;
    issuerId?: number | null;
    ceasedToBeInsider?: string | null;
    transactions?: transactionsUncheckedCreateNestedManyWithoutInsidersInput;
  };

  export type insidersCreateOrConnectWithoutRelationstoissuerInput = {
    where: insidersWhereUniqueInput;
    create: XOR<
      insidersCreateWithoutRelationstoissuerInput,
      insidersUncheckedCreateWithoutRelationstoissuerInput
    >;
  };

  export type insidersUpsertWithoutRelationstoissuerInput = {
    update: XOR<
      insidersUpdateWithoutRelationstoissuerInput,
      insidersUncheckedUpdateWithoutRelationstoissuerInput
    >;
    create: XOR<
      insidersCreateWithoutRelationstoissuerInput,
      insidersUncheckedCreateWithoutRelationstoissuerInput
    >;
    where?: insidersWhereInput;
  };

  export type insidersUpdateToOneWithWhereWithoutRelationstoissuerInput = {
    where?: insidersWhereInput;
    data: XOR<
      insidersUpdateWithoutRelationstoissuerInput,
      insidersUncheckedUpdateWithoutRelationstoissuerInput
    >;
  };

  export type insidersUpdateWithoutRelationstoissuerInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    issuers?: issuersUpdateOneWithoutInsidersNestedInput;
    transactions?: transactionsUpdateManyWithoutInsidersNestedInput;
  };

  export type insidersUncheckedUpdateWithoutRelationstoissuerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    transactions?: transactionsUncheckedUpdateManyWithoutInsidersNestedInput;
  };

  export type transactionsCreateWithoutSecuritydesignationsInput = {
    sediId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
    issuers?: issuersCreateNestedOneWithoutTransactionsInput;
    insiders?: insidersCreateNestedOneWithoutTransactionsInput;
    trnflag?: trnflagCreateNestedOneWithoutTransactionsInput;
    trnnatures?: trnnaturesCreateNestedOneWithoutTransactionsInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedOneWithoutTransactionsInput;
    currency?: currencyCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateWithoutSecuritydesignationsInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsCreateOrConnectWithoutSecuritydesignationsInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutSecuritydesignationsInput,
      transactionsUncheckedCreateWithoutSecuritydesignationsInput
    >;
  };

  export type transactionsCreateManySecuritydesignationsInputEnvelope = {
    data:
      | transactionsCreateManySecuritydesignationsInput
      | transactionsCreateManySecuritydesignationsInput[];
    skipDuplicates?: boolean;
  };

  export type underlyingsecuritiesCreateWithoutSecuritydesignationsInput = {
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    expiryDate?: Date | string | null;
    transactions?: transactionsCreateNestedManyWithoutUnderlyingsecuritiesInput;
    currency?: currencyCreateNestedOneWithoutUnderlyingsecuritiesInput;
  };

  export type underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput =
    {
      id?: number;
      nb?: number | null;
      nbType?: $Enums.underlyingsecurities_nbType | null;
      Balance?: number | null;
      BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
      exercisePrice?: number | null;
      exercisePriceCurrencyId?: number | null;
      expiryDate?: Date | string | null;
      transactions?: transactionsUncheckedCreateNestedManyWithoutUnderlyingsecuritiesInput;
    };

  export type underlyingsecuritiesCreateOrConnectWithoutSecuritydesignationsInput =
    {
      where: underlyingsecuritiesWhereUniqueInput;
      create: XOR<
        underlyingsecuritiesCreateWithoutSecuritydesignationsInput,
        underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput
      >;
    };

  export type underlyingsecuritiesCreateManySecuritydesignationsInputEnvelope =
    {
      data:
        | underlyingsecuritiesCreateManySecuritydesignationsInput
        | underlyingsecuritiesCreateManySecuritydesignationsInput[];
      skipDuplicates?: boolean;
    };

  export type transactionsUpsertWithWhereUniqueWithoutSecuritydesignationsInput =
    {
      where: transactionsWhereUniqueInput;
      update: XOR<
        transactionsUpdateWithoutSecuritydesignationsInput,
        transactionsUncheckedUpdateWithoutSecuritydesignationsInput
      >;
      create: XOR<
        transactionsCreateWithoutSecuritydesignationsInput,
        transactionsUncheckedCreateWithoutSecuritydesignationsInput
      >;
    };

  export type transactionsUpdateWithWhereUniqueWithoutSecuritydesignationsInput =
    {
      where: transactionsWhereUniqueInput;
      data: XOR<
        transactionsUpdateWithoutSecuritydesignationsInput,
        transactionsUncheckedUpdateWithoutSecuritydesignationsInput
      >;
    };

  export type transactionsUpdateManyWithWhereWithoutSecuritydesignationsInput =
    {
      where: transactionsScalarWhereInput;
      data: XOR<
        transactionsUpdateManyMutationInput,
        transactionsUncheckedUpdateManyWithoutSecuritydesignationsInput
      >;
    };

  export type underlyingsecuritiesUpsertWithWhereUniqueWithoutSecuritydesignationsInput =
    {
      where: underlyingsecuritiesWhereUniqueInput;
      update: XOR<
        underlyingsecuritiesUpdateWithoutSecuritydesignationsInput,
        underlyingsecuritiesUncheckedUpdateWithoutSecuritydesignationsInput
      >;
      create: XOR<
        underlyingsecuritiesCreateWithoutSecuritydesignationsInput,
        underlyingsecuritiesUncheckedCreateWithoutSecuritydesignationsInput
      >;
    };

  export type underlyingsecuritiesUpdateWithWhereUniqueWithoutSecuritydesignationsInput =
    {
      where: underlyingsecuritiesWhereUniqueInput;
      data: XOR<
        underlyingsecuritiesUpdateWithoutSecuritydesignationsInput,
        underlyingsecuritiesUncheckedUpdateWithoutSecuritydesignationsInput
      >;
    };

  export type underlyingsecuritiesUpdateManyWithWhereWithoutSecuritydesignationsInput =
    {
      where: underlyingsecuritiesScalarWhereInput;
      data: XOR<
        underlyingsecuritiesUpdateManyMutationInput,
        underlyingsecuritiesUncheckedUpdateManyWithoutSecuritydesignationsInput
      >;
    };

  export type issuersCreateWithoutSizesInput = {
    sedarId?: number | null;
    name?: string | null;
    insiders?: insidersCreateNestedManyWithoutIssuersInput;
    issuerexchanges?: issuerexchangesCreateNestedManyWithoutIssuersInput;
    tickers?: tickersCreateNestedOneWithoutIssuersInput;
    transactions?: transactionsCreateNestedManyWithoutIssuersInput;
  };

  export type issuersUncheckedCreateWithoutSizesInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    tickerId?: number | null;
    insiders?: insidersUncheckedCreateNestedManyWithoutIssuersInput;
    issuerexchanges?: issuerexchangesUncheckedCreateNestedManyWithoutIssuersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutIssuersInput;
  };

  export type issuersCreateOrConnectWithoutSizesInput = {
    where: issuersWhereUniqueInput;
    create: XOR<
      issuersCreateWithoutSizesInput,
      issuersUncheckedCreateWithoutSizesInput
    >;
  };

  export type issuersCreateManySizesInputEnvelope = {
    data: issuersCreateManySizesInput | issuersCreateManySizesInput[];
    skipDuplicates?: boolean;
  };

  export type issuersUpsertWithWhereUniqueWithoutSizesInput = {
    where: issuersWhereUniqueInput;
    update: XOR<
      issuersUpdateWithoutSizesInput,
      issuersUncheckedUpdateWithoutSizesInput
    >;
    create: XOR<
      issuersCreateWithoutSizesInput,
      issuersUncheckedCreateWithoutSizesInput
    >;
  };

  export type issuersUpdateWithWhereUniqueWithoutSizesInput = {
    where: issuersWhereUniqueInput;
    data: XOR<
      issuersUpdateWithoutSizesInput,
      issuersUncheckedUpdateWithoutSizesInput
    >;
  };

  export type issuersUpdateManyWithWhereWithoutSizesInput = {
    where: issuersScalarWhereInput;
    data: XOR<
      issuersUpdateManyMutationInput,
      issuersUncheckedUpdateManyWithoutSizesInput
    >;
  };

  export type issuersScalarWhereInput = {
    AND?: issuersScalarWhereInput | issuersScalarWhereInput[];
    OR?: issuersScalarWhereInput[];
    NOT?: issuersScalarWhereInput | issuersScalarWhereInput[];
    id?: IntFilter<"issuers"> | number;
    sedarId?: IntNullableFilter<"issuers"> | number | null;
    name?: StringNullableFilter<"issuers"> | string | null;
    tickerId?: IntNullableFilter<"issuers"> | number | null;
    sizeId?: IntNullableFilter<"issuers"> | number | null;
  };

  export type issuersCreateWithoutTickersInput = {
    sedarId?: number | null;
    name?: string | null;
    insiders?: insidersCreateNestedManyWithoutIssuersInput;
    issuerexchanges?: issuerexchangesCreateNestedManyWithoutIssuersInput;
    sizes?: sizesCreateNestedOneWithoutIssuersInput;
    transactions?: transactionsCreateNestedManyWithoutIssuersInput;
  };

  export type issuersUncheckedCreateWithoutTickersInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    sizeId?: number | null;
    insiders?: insidersUncheckedCreateNestedManyWithoutIssuersInput;
    issuerexchanges?: issuerexchangesUncheckedCreateNestedManyWithoutIssuersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutIssuersInput;
  };

  export type issuersCreateOrConnectWithoutTickersInput = {
    where: issuersWhereUniqueInput;
    create: XOR<
      issuersCreateWithoutTickersInput,
      issuersUncheckedCreateWithoutTickersInput
    >;
  };

  export type issuersCreateManyTickersInputEnvelope = {
    data: issuersCreateManyTickersInput | issuersCreateManyTickersInput[];
    skipDuplicates?: boolean;
  };

  export type issuersUpsertWithWhereUniqueWithoutTickersInput = {
    where: issuersWhereUniqueInput;
    update: XOR<
      issuersUpdateWithoutTickersInput,
      issuersUncheckedUpdateWithoutTickersInput
    >;
    create: XOR<
      issuersCreateWithoutTickersInput,
      issuersUncheckedCreateWithoutTickersInput
    >;
  };

  export type issuersUpdateWithWhereUniqueWithoutTickersInput = {
    where: issuersWhereUniqueInput;
    data: XOR<
      issuersUpdateWithoutTickersInput,
      issuersUncheckedUpdateWithoutTickersInput
    >;
  };

  export type issuersUpdateManyWithWhereWithoutTickersInput = {
    where: issuersScalarWhereInput;
    data: XOR<
      issuersUpdateManyMutationInput,
      issuersUncheckedUpdateManyWithoutTickersInput
    >;
  };

  export type issuersCreateWithoutTransactionsInput = {
    sedarId?: number | null;
    name?: string | null;
    insiders?: insidersCreateNestedManyWithoutIssuersInput;
    issuerexchanges?: issuerexchangesCreateNestedManyWithoutIssuersInput;
    tickers?: tickersCreateNestedOneWithoutIssuersInput;
    sizes?: sizesCreateNestedOneWithoutIssuersInput;
  };

  export type issuersUncheckedCreateWithoutTransactionsInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    tickerId?: number | null;
    sizeId?: number | null;
    insiders?: insidersUncheckedCreateNestedManyWithoutIssuersInput;
    issuerexchanges?: issuerexchangesUncheckedCreateNestedManyWithoutIssuersInput;
  };

  export type issuersCreateOrConnectWithoutTransactionsInput = {
    where: issuersWhereUniqueInput;
    create: XOR<
      issuersCreateWithoutTransactionsInput,
      issuersUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type insidersCreateWithoutTransactionsInput = {
    name?: string | null;
    ceasedToBeInsider?: string | null;
    issuers?: issuersCreateNestedOneWithoutInsidersInput;
    relationstoissuer?: relationstoissuerCreateNestedManyWithoutInsidersInput;
  };

  export type insidersUncheckedCreateWithoutTransactionsInput = {
    id?: number;
    name?: string | null;
    issuerId?: number | null;
    ceasedToBeInsider?: string | null;
    relationstoissuer?: relationstoissuerUncheckedCreateNestedManyWithoutInsidersInput;
  };

  export type insidersCreateOrConnectWithoutTransactionsInput = {
    where: insidersWhereUniqueInput;
    create: XOR<
      insidersCreateWithoutTransactionsInput,
      insidersUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type securitydesignationsCreateWithoutTransactionsInput = {
    name?: string | null;
    underlyingsecurities?: underlyingsecuritiesCreateNestedManyWithoutSecuritydesignationsInput;
  };

  export type securitydesignationsUncheckedCreateWithoutTransactionsInput = {
    id?: number;
    name?: string | null;
    underlyingsecurities?: underlyingsecuritiesUncheckedCreateNestedManyWithoutSecuritydesignationsInput;
  };

  export type securitydesignationsCreateOrConnectWithoutTransactionsInput = {
    where: securitydesignationsWhereUniqueInput;
    create: XOR<
      securitydesignationsCreateWithoutTransactionsInput,
      securitydesignationsUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type trnflagCreateWithoutTransactionsInput = {
    name?: string | null;
  };

  export type trnflagUncheckedCreateWithoutTransactionsInput = {
    id?: number;
    name?: string | null;
  };

  export type trnflagCreateOrConnectWithoutTransactionsInput = {
    where: trnflagWhereUniqueInput;
    create: XOR<
      trnflagCreateWithoutTransactionsInput,
      trnflagUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type trnnaturesCreateWithoutTransactionsInput = {
    code: number;
    description?: string | null;
  };

  export type trnnaturesUncheckedCreateWithoutTransactionsInput = {
    code: number;
    description?: string | null;
  };

  export type trnnaturesCreateOrConnectWithoutTransactionsInput = {
    where: trnnaturesWhereUniqueInput;
    create: XOR<
      trnnaturesCreateWithoutTransactionsInput,
      trnnaturesUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type underlyingsecuritiesCreateWithoutTransactionsInput = {
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    expiryDate?: Date | string | null;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutUnderlyingsecuritiesInput;
    currency?: currencyCreateNestedOneWithoutUnderlyingsecuritiesInput;
  };

  export type underlyingsecuritiesUncheckedCreateWithoutTransactionsInput = {
    id?: number;
    securityId?: number | null;
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    exercisePriceCurrencyId?: number | null;
    expiryDate?: Date | string | null;
  };

  export type underlyingsecuritiesCreateOrConnectWithoutTransactionsInput = {
    where: underlyingsecuritiesWhereUniqueInput;
    create: XOR<
      underlyingsecuritiesCreateWithoutTransactionsInput,
      underlyingsecuritiesUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type currencyCreateWithoutTransactionsInput = {
    name?: string | null;
    underlyingsecurities?: underlyingsecuritiesCreateNestedManyWithoutCurrencyInput;
  };

  export type currencyUncheckedCreateWithoutTransactionsInput = {
    id?: number;
    name?: string | null;
    underlyingsecurities?: underlyingsecuritiesUncheckedCreateNestedManyWithoutCurrencyInput;
  };

  export type currencyCreateOrConnectWithoutTransactionsInput = {
    where: currencyWhereUniqueInput;
    create: XOR<
      currencyCreateWithoutTransactionsInput,
      currencyUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type issuersUpsertWithoutTransactionsInput = {
    update: XOR<
      issuersUpdateWithoutTransactionsInput,
      issuersUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      issuersCreateWithoutTransactionsInput,
      issuersUncheckedCreateWithoutTransactionsInput
    >;
    where?: issuersWhereInput;
  };

  export type issuersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: issuersWhereInput;
    data: XOR<
      issuersUpdateWithoutTransactionsInput,
      issuersUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type issuersUpdateWithoutTransactionsInput = {
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    insiders?: insidersUpdateManyWithoutIssuersNestedInput;
    issuerexchanges?: issuerexchangesUpdateManyWithoutIssuersNestedInput;
    tickers?: tickersUpdateOneWithoutIssuersNestedInput;
    sizes?: sizesUpdateOneWithoutIssuersNestedInput;
  };

  export type issuersUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    tickerId?: NullableIntFieldUpdateOperationsInput | number | null;
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiders?: insidersUncheckedUpdateManyWithoutIssuersNestedInput;
    issuerexchanges?: issuerexchangesUncheckedUpdateManyWithoutIssuersNestedInput;
  };

  export type insidersUpsertWithoutTransactionsInput = {
    update: XOR<
      insidersUpdateWithoutTransactionsInput,
      insidersUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      insidersCreateWithoutTransactionsInput,
      insidersUncheckedCreateWithoutTransactionsInput
    >;
    where?: insidersWhereInput;
  };

  export type insidersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: insidersWhereInput;
    data: XOR<
      insidersUpdateWithoutTransactionsInput,
      insidersUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type insidersUpdateWithoutTransactionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    issuers?: issuersUpdateOneWithoutInsidersNestedInput;
    relationstoissuer?: relationstoissuerUpdateManyWithoutInsidersNestedInput;
  };

  export type insidersUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    relationstoissuer?: relationstoissuerUncheckedUpdateManyWithoutInsidersNestedInput;
  };

  export type securitydesignationsUpsertWithoutTransactionsInput = {
    update: XOR<
      securitydesignationsUpdateWithoutTransactionsInput,
      securitydesignationsUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      securitydesignationsCreateWithoutTransactionsInput,
      securitydesignationsUncheckedCreateWithoutTransactionsInput
    >;
    where?: securitydesignationsWhereInput;
  };

  export type securitydesignationsUpdateToOneWithWhereWithoutTransactionsInput =
    {
      where?: securitydesignationsWhereInput;
      data: XOR<
        securitydesignationsUpdateWithoutTransactionsInput,
        securitydesignationsUncheckedUpdateWithoutTransactionsInput
      >;
    };

  export type securitydesignationsUpdateWithoutTransactionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    underlyingsecurities?: underlyingsecuritiesUpdateManyWithoutSecuritydesignationsNestedInput;
  };

  export type securitydesignationsUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    underlyingsecurities?: underlyingsecuritiesUncheckedUpdateManyWithoutSecuritydesignationsNestedInput;
  };

  export type trnflagUpsertWithoutTransactionsInput = {
    update: XOR<
      trnflagUpdateWithoutTransactionsInput,
      trnflagUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      trnflagCreateWithoutTransactionsInput,
      trnflagUncheckedCreateWithoutTransactionsInput
    >;
    where?: trnflagWhereInput;
  };

  export type trnflagUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: trnflagWhereInput;
    data: XOR<
      trnflagUpdateWithoutTransactionsInput,
      trnflagUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type trnflagUpdateWithoutTransactionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type trnflagUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type trnnaturesUpsertWithoutTransactionsInput = {
    update: XOR<
      trnnaturesUpdateWithoutTransactionsInput,
      trnnaturesUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      trnnaturesCreateWithoutTransactionsInput,
      trnnaturesUncheckedCreateWithoutTransactionsInput
    >;
    where?: trnnaturesWhereInput;
  };

  export type trnnaturesUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: trnnaturesWhereInput;
    data: XOR<
      trnnaturesUpdateWithoutTransactionsInput,
      trnnaturesUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type trnnaturesUpdateWithoutTransactionsInput = {
    code?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type trnnaturesUncheckedUpdateWithoutTransactionsInput = {
    code?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type underlyingsecuritiesUpsertWithoutTransactionsInput = {
    update: XOR<
      underlyingsecuritiesUpdateWithoutTransactionsInput,
      underlyingsecuritiesUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      underlyingsecuritiesCreateWithoutTransactionsInput,
      underlyingsecuritiesUncheckedCreateWithoutTransactionsInput
    >;
    where?: underlyingsecuritiesWhereInput;
  };

  export type underlyingsecuritiesUpdateToOneWithWhereWithoutTransactionsInput =
    {
      where?: underlyingsecuritiesWhereInput;
      data: XOR<
        underlyingsecuritiesUpdateWithoutTransactionsInput,
        underlyingsecuritiesUncheckedUpdateWithoutTransactionsInput
      >;
    };

  export type underlyingsecuritiesUpdateWithoutTransactionsInput = {
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    securitydesignations?: securitydesignationsUpdateOneWithoutUnderlyingsecuritiesNestedInput;
    currency?: currencyUpdateOneWithoutUnderlyingsecuritiesNestedInput;
  };

  export type underlyingsecuritiesUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    exercisePriceCurrencyId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type currencyUpsertWithoutTransactionsInput = {
    update: XOR<
      currencyUpdateWithoutTransactionsInput,
      currencyUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      currencyCreateWithoutTransactionsInput,
      currencyUncheckedCreateWithoutTransactionsInput
    >;
    where?: currencyWhereInput;
  };

  export type currencyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: currencyWhereInput;
    data: XOR<
      currencyUpdateWithoutTransactionsInput,
      currencyUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type currencyUpdateWithoutTransactionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    underlyingsecurities?: underlyingsecuritiesUpdateManyWithoutCurrencyNestedInput;
  };

  export type currencyUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    underlyingsecurities?: underlyingsecuritiesUncheckedUpdateManyWithoutCurrencyNestedInput;
  };

  export type transactionsCreateWithoutTrnflagInput = {
    sediId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
    issuers?: issuersCreateNestedOneWithoutTransactionsInput;
    insiders?: insidersCreateNestedOneWithoutTransactionsInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutTransactionsInput;
    trnnatures?: trnnaturesCreateNestedOneWithoutTransactionsInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedOneWithoutTransactionsInput;
    currency?: currencyCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateWithoutTrnflagInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsCreateOrConnectWithoutTrnflagInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutTrnflagInput,
      transactionsUncheckedCreateWithoutTrnflagInput
    >;
  };

  export type transactionsCreateManyTrnflagInputEnvelope = {
    data:
      | transactionsCreateManyTrnflagInput
      | transactionsCreateManyTrnflagInput[];
    skipDuplicates?: boolean;
  };

  export type transactionsUpsertWithWhereUniqueWithoutTrnflagInput = {
    where: transactionsWhereUniqueInput;
    update: XOR<
      transactionsUpdateWithoutTrnflagInput,
      transactionsUncheckedUpdateWithoutTrnflagInput
    >;
    create: XOR<
      transactionsCreateWithoutTrnflagInput,
      transactionsUncheckedCreateWithoutTrnflagInput
    >;
  };

  export type transactionsUpdateWithWhereUniqueWithoutTrnflagInput = {
    where: transactionsWhereUniqueInput;
    data: XOR<
      transactionsUpdateWithoutTrnflagInput,
      transactionsUncheckedUpdateWithoutTrnflagInput
    >;
  };

  export type transactionsUpdateManyWithWhereWithoutTrnflagInput = {
    where: transactionsScalarWhereInput;
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyWithoutTrnflagInput
    >;
  };

  export type transactionsCreateWithoutTrnnaturesInput = {
    sediId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
    issuers?: issuersCreateNestedOneWithoutTransactionsInput;
    insiders?: insidersCreateNestedOneWithoutTransactionsInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutTransactionsInput;
    trnflag?: trnflagCreateNestedOneWithoutTransactionsInput;
    underlyingsecurities?: underlyingsecuritiesCreateNestedOneWithoutTransactionsInput;
    currency?: currencyCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateWithoutTrnnaturesInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsCreateOrConnectWithoutTrnnaturesInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutTrnnaturesInput,
      transactionsUncheckedCreateWithoutTrnnaturesInput
    >;
  };

  export type transactionsCreateManyTrnnaturesInputEnvelope = {
    data:
      | transactionsCreateManyTrnnaturesInput
      | transactionsCreateManyTrnnaturesInput[];
    skipDuplicates?: boolean;
  };

  export type transactionsUpsertWithWhereUniqueWithoutTrnnaturesInput = {
    where: transactionsWhereUniqueInput;
    update: XOR<
      transactionsUpdateWithoutTrnnaturesInput,
      transactionsUncheckedUpdateWithoutTrnnaturesInput
    >;
    create: XOR<
      transactionsCreateWithoutTrnnaturesInput,
      transactionsUncheckedCreateWithoutTrnnaturesInput
    >;
  };

  export type transactionsUpdateWithWhereUniqueWithoutTrnnaturesInput = {
    where: transactionsWhereUniqueInput;
    data: XOR<
      transactionsUpdateWithoutTrnnaturesInput,
      transactionsUncheckedUpdateWithoutTrnnaturesInput
    >;
  };

  export type transactionsUpdateManyWithWhereWithoutTrnnaturesInput = {
    where: transactionsScalarWhereInput;
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyWithoutTrnnaturesInput
    >;
  };

  export type transactionsCreateWithoutUnderlyingsecuritiesInput = {
    sediId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
    issuers?: issuersCreateNestedOneWithoutTransactionsInput;
    insiders?: insidersCreateNestedOneWithoutTransactionsInput;
    securitydesignations?: securitydesignationsCreateNestedOneWithoutTransactionsInput;
    trnflag?: trnflagCreateNestedOneWithoutTransactionsInput;
    trnnatures?: trnnaturesCreateNestedOneWithoutTransactionsInput;
    currency?: currencyCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsCreateOrConnectWithoutUnderlyingsecuritiesInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutUnderlyingsecuritiesInput,
      transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput
    >;
  };

  export type transactionsCreateManyUnderlyingsecuritiesInputEnvelope = {
    data:
      | transactionsCreateManyUnderlyingsecuritiesInput
      | transactionsCreateManyUnderlyingsecuritiesInput[];
    skipDuplicates?: boolean;
  };

  export type securitydesignationsCreateWithoutUnderlyingsecuritiesInput = {
    name?: string | null;
    transactions?: transactionsCreateNestedManyWithoutSecuritydesignationsInput;
  };

  export type securitydesignationsUncheckedCreateWithoutUnderlyingsecuritiesInput =
    {
      id?: number;
      name?: string | null;
      transactions?: transactionsUncheckedCreateNestedManyWithoutSecuritydesignationsInput;
    };

  export type securitydesignationsCreateOrConnectWithoutUnderlyingsecuritiesInput =
    {
      where: securitydesignationsWhereUniqueInput;
      create: XOR<
        securitydesignationsCreateWithoutUnderlyingsecuritiesInput,
        securitydesignationsUncheckedCreateWithoutUnderlyingsecuritiesInput
      >;
    };

  export type currencyCreateWithoutUnderlyingsecuritiesInput = {
    name?: string | null;
    transactions?: transactionsCreateNestedManyWithoutCurrencyInput;
  };

  export type currencyUncheckedCreateWithoutUnderlyingsecuritiesInput = {
    id?: number;
    name?: string | null;
    transactions?: transactionsUncheckedCreateNestedManyWithoutCurrencyInput;
  };

  export type currencyCreateOrConnectWithoutUnderlyingsecuritiesInput = {
    where: currencyWhereUniqueInput;
    create: XOR<
      currencyCreateWithoutUnderlyingsecuritiesInput,
      currencyUncheckedCreateWithoutUnderlyingsecuritiesInput
    >;
  };

  export type transactionsUpsertWithWhereUniqueWithoutUnderlyingsecuritiesInput =
    {
      where: transactionsWhereUniqueInput;
      update: XOR<
        transactionsUpdateWithoutUnderlyingsecuritiesInput,
        transactionsUncheckedUpdateWithoutUnderlyingsecuritiesInput
      >;
      create: XOR<
        transactionsCreateWithoutUnderlyingsecuritiesInput,
        transactionsUncheckedCreateWithoutUnderlyingsecuritiesInput
      >;
    };

  export type transactionsUpdateWithWhereUniqueWithoutUnderlyingsecuritiesInput =
    {
      where: transactionsWhereUniqueInput;
      data: XOR<
        transactionsUpdateWithoutUnderlyingsecuritiesInput,
        transactionsUncheckedUpdateWithoutUnderlyingsecuritiesInput
      >;
    };

  export type transactionsUpdateManyWithWhereWithoutUnderlyingsecuritiesInput =
    {
      where: transactionsScalarWhereInput;
      data: XOR<
        transactionsUpdateManyMutationInput,
        transactionsUncheckedUpdateManyWithoutUnderlyingsecuritiesInput
      >;
    };

  export type securitydesignationsUpsertWithoutUnderlyingsecuritiesInput = {
    update: XOR<
      securitydesignationsUpdateWithoutUnderlyingsecuritiesInput,
      securitydesignationsUncheckedUpdateWithoutUnderlyingsecuritiesInput
    >;
    create: XOR<
      securitydesignationsCreateWithoutUnderlyingsecuritiesInput,
      securitydesignationsUncheckedCreateWithoutUnderlyingsecuritiesInput
    >;
    where?: securitydesignationsWhereInput;
  };

  export type securitydesignationsUpdateToOneWithWhereWithoutUnderlyingsecuritiesInput =
    {
      where?: securitydesignationsWhereInput;
      data: XOR<
        securitydesignationsUpdateWithoutUnderlyingsecuritiesInput,
        securitydesignationsUncheckedUpdateWithoutUnderlyingsecuritiesInput
      >;
    };

  export type securitydesignationsUpdateWithoutUnderlyingsecuritiesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUpdateManyWithoutSecuritydesignationsNestedInput;
  };

  export type securitydesignationsUncheckedUpdateWithoutUnderlyingsecuritiesInput =
    {
      id?: IntFieldUpdateOperationsInput | number;
      name?: NullableStringFieldUpdateOperationsInput | string | null;
      transactions?: transactionsUncheckedUpdateManyWithoutSecuritydesignationsNestedInput;
    };

  export type currencyUpsertWithoutUnderlyingsecuritiesInput = {
    update: XOR<
      currencyUpdateWithoutUnderlyingsecuritiesInput,
      currencyUncheckedUpdateWithoutUnderlyingsecuritiesInput
    >;
    create: XOR<
      currencyCreateWithoutUnderlyingsecuritiesInput,
      currencyUncheckedCreateWithoutUnderlyingsecuritiesInput
    >;
    where?: currencyWhereInput;
  };

  export type currencyUpdateToOneWithWhereWithoutUnderlyingsecuritiesInput = {
    where?: currencyWhereInput;
    data: XOR<
      currencyUpdateWithoutUnderlyingsecuritiesInput,
      currencyUncheckedUpdateWithoutUnderlyingsecuritiesInput
    >;
  };

  export type currencyUpdateWithoutUnderlyingsecuritiesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUpdateManyWithoutCurrencyNestedInput;
  };

  export type currencyUncheckedUpdateWithoutUnderlyingsecuritiesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    transactions?: transactionsUncheckedUpdateManyWithoutCurrencyNestedInput;
  };

  export type transactionsCreateManyCurrencyInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type underlyingsecuritiesCreateManyCurrencyInput = {
    id?: number;
    securityId?: number | null;
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    expiryDate?: Date | string | null;
  };

  export type transactionsUpdateWithoutCurrencyInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateOneWithoutTransactionsNestedInput;
    insiders?: insidersUpdateOneWithoutTransactionsNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutTransactionsNestedInput;
    trnflag?: trnflagUpdateOneWithoutTransactionsNestedInput;
    trnnatures?: trnnaturesUpdateOneWithoutTransactionsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateOneWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUncheckedUpdateManyWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type underlyingsecuritiesUpdateWithoutCurrencyInput = {
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions?: transactionsUpdateManyWithoutUnderlyingsecuritiesNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutUnderlyingsecuritiesNestedInput;
  };

  export type underlyingsecuritiesUncheckedUpdateWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions?: transactionsUncheckedUpdateManyWithoutUnderlyingsecuritiesNestedInput;
  };

  export type underlyingsecuritiesUncheckedUpdateManyWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type issuerexchangesCreateManyExchangesInput = {
    issuerId: number;
  };

  export type issuerexchangesUpdateWithoutExchangesInput = {
    issuers?: issuersUpdateOneRequiredWithoutIssuerexchangesNestedInput;
  };

  export type issuerexchangesUncheckedUpdateWithoutExchangesInput = {
    issuerId?: IntFieldUpdateOperationsInput | number;
  };

  export type issuerexchangesUncheckedUpdateManyWithoutExchangesInput = {
    issuerId?: IntFieldUpdateOperationsInput | number;
  };

  export type relationstoissuerCreateManyInsidersInput = {
    type: $Enums.relationstoissuer_type;
  };

  export type transactionsCreateManyInsidersInput = {
    id?: number;
    sediId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type relationstoissuerUpdateWithoutInsidersInput = {
    type?:
      | Enumrelationstoissuer_typeFieldUpdateOperationsInput
      | $Enums.relationstoissuer_type;
  };

  export type relationstoissuerUncheckedUpdateWithoutInsidersInput = {
    type?:
      | Enumrelationstoissuer_typeFieldUpdateOperationsInput
      | $Enums.relationstoissuer_type;
  };

  export type relationstoissuerUncheckedUpdateManyWithoutInsidersInput = {
    type?:
      | Enumrelationstoissuer_typeFieldUpdateOperationsInput
      | $Enums.relationstoissuer_type;
  };

  export type transactionsUpdateWithoutInsidersInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateOneWithoutTransactionsNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutTransactionsNestedInput;
    trnflag?: trnflagUpdateOneWithoutTransactionsNestedInput;
    trnnatures?: trnnaturesUpdateOneWithoutTransactionsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateOneWithoutTransactionsNestedInput;
    currency?: currencyUpdateOneWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutInsidersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUncheckedUpdateManyWithoutInsidersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type insidersCreateManyIssuersInput = {
    id?: number;
    name?: string | null;
    ceasedToBeInsider?: string | null;
  };

  export type issuerexchangesCreateManyIssuersInput = {
    exchangeId: number;
  };

  export type transactionsCreateManyIssuersInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type insidersUpdateWithoutIssuersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    relationstoissuer?: relationstoissuerUpdateManyWithoutInsidersNestedInput;
    transactions?: transactionsUpdateManyWithoutInsidersNestedInput;
  };

  export type insidersUncheckedUpdateWithoutIssuersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    relationstoissuer?: relationstoissuerUncheckedUpdateManyWithoutInsidersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutInsidersNestedInput;
  };

  export type insidersUncheckedUpdateManyWithoutIssuersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    ceasedToBeInsider?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
  };

  export type issuerexchangesUpdateWithoutIssuersInput = {
    exchanges?: exchangesUpdateOneRequiredWithoutIssuerexchangesNestedInput;
  };

  export type issuerexchangesUncheckedUpdateWithoutIssuersInput = {
    exchangeId?: IntFieldUpdateOperationsInput | number;
  };

  export type issuerexchangesUncheckedUpdateManyWithoutIssuersInput = {
    exchangeId?: IntFieldUpdateOperationsInput | number;
  };

  export type transactionsUpdateWithoutIssuersInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    insiders?: insidersUpdateOneWithoutTransactionsNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutTransactionsNestedInput;
    trnflag?: trnflagUpdateOneWithoutTransactionsNestedInput;
    trnnatures?: trnnaturesUpdateOneWithoutTransactionsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateOneWithoutTransactionsNestedInput;
    currency?: currencyUpdateOneWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutIssuersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUncheckedUpdateManyWithoutIssuersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsCreateManySecuritydesignationsInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type underlyingsecuritiesCreateManySecuritydesignationsInput = {
    id?: number;
    nb?: number | null;
    nbType?: $Enums.underlyingsecurities_nbType | null;
    Balance?: number | null;
    BalanceType?: $Enums.underlyingsecurities_BalanceType | null;
    exercisePrice?: number | null;
    exercisePriceCurrencyId?: number | null;
    expiryDate?: Date | string | null;
  };

  export type transactionsUpdateWithoutSecuritydesignationsInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateOneWithoutTransactionsNestedInput;
    insiders?: insidersUpdateOneWithoutTransactionsNestedInput;
    trnflag?: trnflagUpdateOneWithoutTransactionsNestedInput;
    trnnatures?: trnnaturesUpdateOneWithoutTransactionsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateOneWithoutTransactionsNestedInput;
    currency?: currencyUpdateOneWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutSecuritydesignationsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUncheckedUpdateManyWithoutSecuritydesignationsInput =
    {
      id?: IntFieldUpdateOperationsInput | number;
      sediId?: NullableIntFieldUpdateOperationsInput | number | null;
      insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
      issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
      trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
      trnDate?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      filingDate?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      ownershipType?:
        | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
        | $Enums.transactions_ownershipType
        | null;
      ownershipExtraInfo?:
        | NullableStringFieldUpdateOperationsInput
        | string
        | null;
      trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
      nb?: NullableIntFieldUpdateOperationsInput | number | null;
      nbType?:
        | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
        | $Enums.transactions_nbType
        | null;
      price?: NullableFloatFieldUpdateOperationsInput | number | null;
      priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
      closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
      closingBalanceType?:
        | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
        | $Enums.transactions_closingBalanceType
        | null;
      calculatedBalance?:
        | NullableFloatFieldUpdateOperationsInput
        | number
        | null;
      calculatedBalanceType?:
        | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
        | $Enums.transactions_calculatedBalanceType
        | null;
      underlyingSecurityId?:
        | NullableIntFieldUpdateOperationsInput
        | number
        | null;
      GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    };

  export type underlyingsecuritiesUpdateWithoutSecuritydesignationsInput = {
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_nbType
      | null;
    Balance?: NullableIntFieldUpdateOperationsInput | number | null;
    BalanceType?:
      | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
      | $Enums.underlyingsecurities_BalanceType
      | null;
    exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions?: transactionsUpdateManyWithoutUnderlyingsecuritiesNestedInput;
    currency?: currencyUpdateOneWithoutUnderlyingsecuritiesNestedInput;
  };

  export type underlyingsecuritiesUncheckedUpdateWithoutSecuritydesignationsInput =
    {
      id?: IntFieldUpdateOperationsInput | number;
      nb?: NullableIntFieldUpdateOperationsInput | number | null;
      nbType?:
        | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
        | $Enums.underlyingsecurities_nbType
        | null;
      Balance?: NullableIntFieldUpdateOperationsInput | number | null;
      BalanceType?:
        | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
        | $Enums.underlyingsecurities_BalanceType
        | null;
      exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
      exercisePriceCurrencyId?:
        | NullableIntFieldUpdateOperationsInput
        | number
        | null;
      expiryDate?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      transactions?: transactionsUncheckedUpdateManyWithoutUnderlyingsecuritiesNestedInput;
    };

  export type underlyingsecuritiesUncheckedUpdateManyWithoutSecuritydesignationsInput =
    {
      id?: IntFieldUpdateOperationsInput | number;
      nb?: NullableIntFieldUpdateOperationsInput | number | null;
      nbType?:
        | NullableEnumunderlyingsecurities_nbTypeFieldUpdateOperationsInput
        | $Enums.underlyingsecurities_nbType
        | null;
      Balance?: NullableIntFieldUpdateOperationsInput | number | null;
      BalanceType?:
        | NullableEnumunderlyingsecurities_BalanceTypeFieldUpdateOperationsInput
        | $Enums.underlyingsecurities_BalanceType
        | null;
      exercisePrice?: NullableFloatFieldUpdateOperationsInput | number | null;
      exercisePriceCurrencyId?:
        | NullableIntFieldUpdateOperationsInput
        | number
        | null;
      expiryDate?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
    };

  export type issuersCreateManySizesInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    tickerId?: number | null;
  };

  export type issuersUpdateWithoutSizesInput = {
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    insiders?: insidersUpdateManyWithoutIssuersNestedInput;
    issuerexchanges?: issuerexchangesUpdateManyWithoutIssuersNestedInput;
    tickers?: tickersUpdateOneWithoutIssuersNestedInput;
    transactions?: transactionsUpdateManyWithoutIssuersNestedInput;
  };

  export type issuersUncheckedUpdateWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    tickerId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiders?: insidersUncheckedUpdateManyWithoutIssuersNestedInput;
    issuerexchanges?: issuerexchangesUncheckedUpdateManyWithoutIssuersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutIssuersNestedInput;
  };

  export type issuersUncheckedUpdateManyWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    tickerId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type issuersCreateManyTickersInput = {
    id?: number;
    sedarId?: number | null;
    name?: string | null;
    sizeId?: number | null;
  };

  export type issuersUpdateWithoutTickersInput = {
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    insiders?: insidersUpdateManyWithoutIssuersNestedInput;
    issuerexchanges?: issuerexchangesUpdateManyWithoutIssuersNestedInput;
    sizes?: sizesUpdateOneWithoutIssuersNestedInput;
    transactions?: transactionsUpdateManyWithoutIssuersNestedInput;
  };

  export type issuersUncheckedUpdateWithoutTickersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiders?: insidersUncheckedUpdateManyWithoutIssuersNestedInput;
    issuerexchanges?: issuerexchangesUncheckedUpdateManyWithoutIssuersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutIssuersNestedInput;
  };

  export type issuersUncheckedUpdateManyWithoutTickersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sedarId?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type transactionsCreateManyTrnflagInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsUpdateWithoutTrnflagInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateOneWithoutTransactionsNestedInput;
    insiders?: insidersUpdateOneWithoutTransactionsNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutTransactionsNestedInput;
    trnnatures?: trnnaturesUpdateOneWithoutTransactionsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateOneWithoutTransactionsNestedInput;
    currency?: currencyUpdateOneWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutTrnflagInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUncheckedUpdateManyWithoutTrnflagInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsCreateManyTrnnaturesInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    underlyingSecurityId?: number | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsUpdateWithoutTrnnaturesInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateOneWithoutTransactionsNestedInput;
    insiders?: insidersUpdateOneWithoutTransactionsNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutTransactionsNestedInput;
    trnflag?: trnflagUpdateOneWithoutTransactionsNestedInput;
    underlyingsecurities?: underlyingsecuritiesUpdateOneWithoutTransactionsNestedInput;
    currency?: currencyUpdateOneWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutTrnnaturesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUncheckedUpdateManyWithoutTrnnaturesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    underlyingSecurityId?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsCreateManyUnderlyingsecuritiesInput = {
    id?: number;
    sediId?: number | null;
    insiderId?: number | null;
    issuerId?: number | null;
    securityId?: number | null;
    trnFlagId?: number | null;
    trnDate?: Date | string | null;
    filingDate?: Date | string | null;
    ownershipType?: $Enums.transactions_ownershipType | null;
    ownershipExtraInfo?: string | null;
    trnNatureCode?: number | null;
    nb?: number | null;
    nbType?: $Enums.transactions_nbType | null;
    price?: number | null;
    priceCurrencyId?: number | null;
    closingBalance?: number | null;
    closingBalanceType?: $Enums.transactions_closingBalanceType | null;
    calculatedBalance?: number | null;
    calculatedBalanceType?: $Enums.transactions_calculatedBalanceType | null;
    GeneralRemarks?: string | null;
  };

  export type transactionsUpdateWithoutUnderlyingsecuritiesInput = {
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    issuers?: issuersUpdateOneWithoutTransactionsNestedInput;
    insiders?: insidersUpdateOneWithoutTransactionsNestedInput;
    securitydesignations?: securitydesignationsUpdateOneWithoutTransactionsNestedInput;
    trnflag?: trnflagUpdateOneWithoutTransactionsNestedInput;
    trnnatures?: trnnaturesUpdateOneWithoutTransactionsNestedInput;
    currency?: currencyUpdateOneWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutUnderlyingsecuritiesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sediId?: NullableIntFieldUpdateOperationsInput | number | null;
    insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
    issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
    securityId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
    trnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filingDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    ownershipType?:
      | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
      | $Enums.transactions_ownershipType
      | null;
    ownershipExtraInfo?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
    nb?: NullableIntFieldUpdateOperationsInput | number | null;
    nbType?:
      | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
      | $Enums.transactions_nbType
      | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
    closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    closingBalanceType?:
      | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_closingBalanceType
      | null;
    calculatedBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
    calculatedBalanceType?:
      | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
      | $Enums.transactions_calculatedBalanceType
      | null;
    GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type transactionsUncheckedUpdateManyWithoutUnderlyingsecuritiesInput =
    {
      id?: IntFieldUpdateOperationsInput | number;
      sediId?: NullableIntFieldUpdateOperationsInput | number | null;
      insiderId?: NullableIntFieldUpdateOperationsInput | number | null;
      issuerId?: NullableIntFieldUpdateOperationsInput | number | null;
      securityId?: NullableIntFieldUpdateOperationsInput | number | null;
      trnFlagId?: NullableIntFieldUpdateOperationsInput | number | null;
      trnDate?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      filingDate?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      ownershipType?:
        | NullableEnumtransactions_ownershipTypeFieldUpdateOperationsInput
        | $Enums.transactions_ownershipType
        | null;
      ownershipExtraInfo?:
        | NullableStringFieldUpdateOperationsInput
        | string
        | null;
      trnNatureCode?: NullableIntFieldUpdateOperationsInput | number | null;
      nb?: NullableIntFieldUpdateOperationsInput | number | null;
      nbType?:
        | NullableEnumtransactions_nbTypeFieldUpdateOperationsInput
        | $Enums.transactions_nbType
        | null;
      price?: NullableFloatFieldUpdateOperationsInput | number | null;
      priceCurrencyId?: NullableIntFieldUpdateOperationsInput | number | null;
      closingBalance?: NullableFloatFieldUpdateOperationsInput | number | null;
      closingBalanceType?:
        | NullableEnumtransactions_closingBalanceTypeFieldUpdateOperationsInput
        | $Enums.transactions_closingBalanceType
        | null;
      calculatedBalance?:
        | NullableFloatFieldUpdateOperationsInput
        | number
        | null;
      calculatedBalanceType?:
        | NullableEnumtransactions_calculatedBalanceTypeFieldUpdateOperationsInput
        | $Enums.transactions_calculatedBalanceType
        | null;
      GeneralRemarks?: NullableStringFieldUpdateOperationsInput | string | null;
    };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CurrencyCountOutputTypeDefaultArgs instead
   */
  export type CurrencyCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = CurrencyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ExchangesCountOutputTypeDefaultArgs instead
   */
  export type ExchangesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = ExchangesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use InsidersCountOutputTypeDefaultArgs instead
   */
  export type InsidersCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = InsidersCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use IssuersCountOutputTypeDefaultArgs instead
   */
  export type IssuersCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = IssuersCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use SecuritydesignationsCountOutputTypeDefaultArgs instead
   */
  export type SecuritydesignationsCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = SecuritydesignationsCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use SizesCountOutputTypeDefaultArgs instead
   */
  export type SizesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = SizesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TickersCountOutputTypeDefaultArgs instead
   */
  export type TickersCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = TickersCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TrnflagCountOutputTypeDefaultArgs instead
   */
  export type TrnflagCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = TrnflagCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TrnnaturesCountOutputTypeDefaultArgs instead
   */
  export type TrnnaturesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = TrnnaturesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UnderlyingsecuritiesCountOutputTypeDefaultArgs instead
   */
  export type UnderlyingsecuritiesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = UnderlyingsecuritiesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use currencyDefaultArgs instead
   */
  export type currencyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = currencyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use exchangesDefaultArgs instead
   */
  export type exchangesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = exchangesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use insidersDefaultArgs instead
   */
  export type insidersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = insidersDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use issuerexchangesDefaultArgs instead
   */
  export type issuerexchangesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = issuerexchangesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use issuersDefaultArgs instead
   */
  export type issuersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = issuersDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use relationstoissuerDefaultArgs instead
   */
  export type relationstoissuerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = relationstoissuerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use securitydesignationsDefaultArgs instead
   */
  export type securitydesignationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = securitydesignationsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use sizesDefaultArgs instead
   */
  export type sizesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = sizesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use tickersDefaultArgs instead
   */
  export type tickersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = tickersDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use transactionsDefaultArgs instead
   */
  export type transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = transactionsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use trnflagDefaultArgs instead
   */
  export type trnflagArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = trnflagDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use trnnaturesDefaultArgs instead
   */
  export type trnnaturesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = trnnaturesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use underlyingsecuritiesDefaultArgs instead
   */
  export type underlyingsecuritiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = underlyingsecuritiesDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
