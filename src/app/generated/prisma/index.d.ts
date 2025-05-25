
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tableau
 * 
 */
export type Tableau = $Result.DefaultSelection<Prisma.$TableauPayload>
/**
 * Model Galerie
 * 
 */
export type Galerie = $Result.DefaultSelection<Prisma.$GaleriePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tableaus
 * const tableaus = await prisma.tableau.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tableaus
   * const tableaus = await prisma.tableau.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tableau`: Exposes CRUD operations for the **Tableau** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tableaus
    * const tableaus = await prisma.tableau.findMany()
    * ```
    */
  get tableau(): Prisma.TableauDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galerie`: Exposes CRUD operations for the **Galerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galeries
    * const galeries = await prisma.galerie.findMany()
    * ```
    */
  get galerie(): Prisma.GalerieDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tableau: 'Tableau',
    Galerie: 'Galerie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tableau" | "galerie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tableau: {
        payload: Prisma.$TableauPayload<ExtArgs>
        fields: Prisma.TableauFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableauFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableauFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>
          }
          findFirst: {
            args: Prisma.TableauFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableauFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>
          }
          findMany: {
            args: Prisma.TableauFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>[]
          }
          create: {
            args: Prisma.TableauCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>
          }
          createMany: {
            args: Prisma.TableauCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableauCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>[]
          }
          delete: {
            args: Prisma.TableauDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>
          }
          update: {
            args: Prisma.TableauUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>
          }
          deleteMany: {
            args: Prisma.TableauDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableauUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableauUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>[]
          }
          upsert: {
            args: Prisma.TableauUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableauPayload>
          }
          aggregate: {
            args: Prisma.TableauAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableau>
          }
          groupBy: {
            args: Prisma.TableauGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableauGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableauCountArgs<ExtArgs>
            result: $Utils.Optional<TableauCountAggregateOutputType> | number
          }
        }
      }
      Galerie: {
        payload: Prisma.$GaleriePayload<ExtArgs>
        fields: Prisma.GalerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          findFirst: {
            args: Prisma.GalerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          findMany: {
            args: Prisma.GalerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          create: {
            args: Prisma.GalerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          createMany: {
            args: Prisma.GalerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalerieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          delete: {
            args: Prisma.GalerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          update: {
            args: Prisma.GalerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          deleteMany: {
            args: Prisma.GalerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalerieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          upsert: {
            args: Prisma.GalerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          aggregate: {
            args: Prisma.GalerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalerie>
          }
          groupBy: {
            args: Prisma.GalerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalerieCountArgs<ExtArgs>
            result: $Utils.Optional<GalerieCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tableau?: TableauOmit
    galerie?: GalerieOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GalerieCountOutputType
   */

  export type GalerieCountOutputType = {
    tableaux: number
  }

  export type GalerieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableaux?: boolean | GalerieCountOutputTypeCountTableauxArgs
  }

  // Custom InputTypes
  /**
   * GalerieCountOutputType without action
   */
  export type GalerieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalerieCountOutputType
     */
    select?: GalerieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GalerieCountOutputType without action
   */
  export type GalerieCountOutputTypeCountTableauxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableauWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tableau
   */

  export type AggregateTableau = {
    _count: TableauCountAggregateOutputType | null
    _avg: TableauAvgAggregateOutputType | null
    _sum: TableauSumAggregateOutputType | null
    _min: TableauMinAggregateOutputType | null
    _max: TableauMaxAggregateOutputType | null
  }

  export type TableauAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type TableauSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type TableauMinAggregateOutputType = {
    id: number | null
    imagePath: string | null
    description_fr: string | null
    description_en: string | null
    order: number | null
    laGalerieId: string | null
  }

  export type TableauMaxAggregateOutputType = {
    id: number | null
    imagePath: string | null
    description_fr: string | null
    description_en: string | null
    order: number | null
    laGalerieId: string | null
  }

  export type TableauCountAggregateOutputType = {
    id: number
    imagePath: number
    description_fr: number
    description_en: number
    order: number
    laGalerieId: number
    _all: number
  }


  export type TableauAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type TableauSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type TableauMinAggregateInputType = {
    id?: true
    imagePath?: true
    description_fr?: true
    description_en?: true
    order?: true
    laGalerieId?: true
  }

  export type TableauMaxAggregateInputType = {
    id?: true
    imagePath?: true
    description_fr?: true
    description_en?: true
    order?: true
    laGalerieId?: true
  }

  export type TableauCountAggregateInputType = {
    id?: true
    imagePath?: true
    description_fr?: true
    description_en?: true
    order?: true
    laGalerieId?: true
    _all?: true
  }

  export type TableauAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tableau to aggregate.
     */
    where?: TableauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tableaus to fetch.
     */
    orderBy?: TableauOrderByWithRelationInput | TableauOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tableaus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tableaus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tableaus
    **/
    _count?: true | TableauCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableauAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableauSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableauMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableauMaxAggregateInputType
  }

  export type GetTableauAggregateType<T extends TableauAggregateArgs> = {
        [P in keyof T & keyof AggregateTableau]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableau[P]>
      : GetScalarType<T[P], AggregateTableau[P]>
  }




  export type TableauGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableauWhereInput
    orderBy?: TableauOrderByWithAggregationInput | TableauOrderByWithAggregationInput[]
    by: TableauScalarFieldEnum[] | TableauScalarFieldEnum
    having?: TableauScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableauCountAggregateInputType | true
    _avg?: TableauAvgAggregateInputType
    _sum?: TableauSumAggregateInputType
    _min?: TableauMinAggregateInputType
    _max?: TableauMaxAggregateInputType
  }

  export type TableauGroupByOutputType = {
    id: number
    imagePath: string
    description_fr: string
    description_en: string
    order: number
    laGalerieId: string
    _count: TableauCountAggregateOutputType | null
    _avg: TableauAvgAggregateOutputType | null
    _sum: TableauSumAggregateOutputType | null
    _min: TableauMinAggregateOutputType | null
    _max: TableauMaxAggregateOutputType | null
  }

  type GetTableauGroupByPayload<T extends TableauGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableauGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableauGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableauGroupByOutputType[P]>
            : GetScalarType<T[P], TableauGroupByOutputType[P]>
        }
      >
    >


  export type TableauSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagePath?: boolean
    description_fr?: boolean
    description_en?: boolean
    order?: boolean
    laGalerieId?: boolean
    laGalerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableau"]>

  export type TableauSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagePath?: boolean
    description_fr?: boolean
    description_en?: boolean
    order?: boolean
    laGalerieId?: boolean
    laGalerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableau"]>

  export type TableauSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagePath?: boolean
    description_fr?: boolean
    description_en?: boolean
    order?: boolean
    laGalerieId?: boolean
    laGalerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableau"]>

  export type TableauSelectScalar = {
    id?: boolean
    imagePath?: boolean
    description_fr?: boolean
    description_en?: boolean
    order?: boolean
    laGalerieId?: boolean
  }

  export type TableauOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imagePath" | "description_fr" | "description_en" | "order" | "laGalerieId", ExtArgs["result"]["tableau"]>
  export type TableauInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laGalerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }
  export type TableauIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laGalerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }
  export type TableauIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laGalerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }

  export type $TableauPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tableau"
    objects: {
      laGalerie: Prisma.$GaleriePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imagePath: string
      description_fr: string
      description_en: string
      order: number
      laGalerieId: string
    }, ExtArgs["result"]["tableau"]>
    composites: {}
  }

  type TableauGetPayload<S extends boolean | null | undefined | TableauDefaultArgs> = $Result.GetResult<Prisma.$TableauPayload, S>

  type TableauCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableauFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableauCountAggregateInputType | true
    }

  export interface TableauDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tableau'], meta: { name: 'Tableau' } }
    /**
     * Find zero or one Tableau that matches the filter.
     * @param {TableauFindUniqueArgs} args - Arguments to find a Tableau
     * @example
     * // Get one Tableau
     * const tableau = await prisma.tableau.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableauFindUniqueArgs>(args: SelectSubset<T, TableauFindUniqueArgs<ExtArgs>>): Prisma__TableauClient<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tableau that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableauFindUniqueOrThrowArgs} args - Arguments to find a Tableau
     * @example
     * // Get one Tableau
     * const tableau = await prisma.tableau.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableauFindUniqueOrThrowArgs>(args: SelectSubset<T, TableauFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableauClient<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tableau that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableauFindFirstArgs} args - Arguments to find a Tableau
     * @example
     * // Get one Tableau
     * const tableau = await prisma.tableau.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableauFindFirstArgs>(args?: SelectSubset<T, TableauFindFirstArgs<ExtArgs>>): Prisma__TableauClient<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tableau that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableauFindFirstOrThrowArgs} args - Arguments to find a Tableau
     * @example
     * // Get one Tableau
     * const tableau = await prisma.tableau.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableauFindFirstOrThrowArgs>(args?: SelectSubset<T, TableauFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableauClient<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tableaus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableauFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tableaus
     * const tableaus = await prisma.tableau.findMany()
     * 
     * // Get first 10 Tableaus
     * const tableaus = await prisma.tableau.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableauWithIdOnly = await prisma.tableau.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableauFindManyArgs>(args?: SelectSubset<T, TableauFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tableau.
     * @param {TableauCreateArgs} args - Arguments to create a Tableau.
     * @example
     * // Create one Tableau
     * const Tableau = await prisma.tableau.create({
     *   data: {
     *     // ... data to create a Tableau
     *   }
     * })
     * 
     */
    create<T extends TableauCreateArgs>(args: SelectSubset<T, TableauCreateArgs<ExtArgs>>): Prisma__TableauClient<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tableaus.
     * @param {TableauCreateManyArgs} args - Arguments to create many Tableaus.
     * @example
     * // Create many Tableaus
     * const tableau = await prisma.tableau.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableauCreateManyArgs>(args?: SelectSubset<T, TableauCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tableaus and returns the data saved in the database.
     * @param {TableauCreateManyAndReturnArgs} args - Arguments to create many Tableaus.
     * @example
     * // Create many Tableaus
     * const tableau = await prisma.tableau.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tableaus and only return the `id`
     * const tableauWithIdOnly = await prisma.tableau.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableauCreateManyAndReturnArgs>(args?: SelectSubset<T, TableauCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tableau.
     * @param {TableauDeleteArgs} args - Arguments to delete one Tableau.
     * @example
     * // Delete one Tableau
     * const Tableau = await prisma.tableau.delete({
     *   where: {
     *     // ... filter to delete one Tableau
     *   }
     * })
     * 
     */
    delete<T extends TableauDeleteArgs>(args: SelectSubset<T, TableauDeleteArgs<ExtArgs>>): Prisma__TableauClient<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tableau.
     * @param {TableauUpdateArgs} args - Arguments to update one Tableau.
     * @example
     * // Update one Tableau
     * const tableau = await prisma.tableau.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableauUpdateArgs>(args: SelectSubset<T, TableauUpdateArgs<ExtArgs>>): Prisma__TableauClient<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tableaus.
     * @param {TableauDeleteManyArgs} args - Arguments to filter Tableaus to delete.
     * @example
     * // Delete a few Tableaus
     * const { count } = await prisma.tableau.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableauDeleteManyArgs>(args?: SelectSubset<T, TableauDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tableaus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableauUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tableaus
     * const tableau = await prisma.tableau.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableauUpdateManyArgs>(args: SelectSubset<T, TableauUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tableaus and returns the data updated in the database.
     * @param {TableauUpdateManyAndReturnArgs} args - Arguments to update many Tableaus.
     * @example
     * // Update many Tableaus
     * const tableau = await prisma.tableau.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tableaus and only return the `id`
     * const tableauWithIdOnly = await prisma.tableau.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TableauUpdateManyAndReturnArgs>(args: SelectSubset<T, TableauUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tableau.
     * @param {TableauUpsertArgs} args - Arguments to update or create a Tableau.
     * @example
     * // Update or create a Tableau
     * const tableau = await prisma.tableau.upsert({
     *   create: {
     *     // ... data to create a Tableau
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tableau we want to update
     *   }
     * })
     */
    upsert<T extends TableauUpsertArgs>(args: SelectSubset<T, TableauUpsertArgs<ExtArgs>>): Prisma__TableauClient<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tableaus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableauCountArgs} args - Arguments to filter Tableaus to count.
     * @example
     * // Count the number of Tableaus
     * const count = await prisma.tableau.count({
     *   where: {
     *     // ... the filter for the Tableaus we want to count
     *   }
     * })
    **/
    count<T extends TableauCountArgs>(
      args?: Subset<T, TableauCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableauCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tableau.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableauAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableauAggregateArgs>(args: Subset<T, TableauAggregateArgs>): Prisma.PrismaPromise<GetTableauAggregateType<T>>

    /**
     * Group by Tableau.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableauGroupByArgs} args - Group by arguments.
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
      T extends TableauGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableauGroupByArgs['orderBy'] }
        : { orderBy?: TableauGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableauGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableauGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tableau model
   */
  readonly fields: TableauFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tableau.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableauClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laGalerie<T extends GalerieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GalerieDefaultArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tableau model
   */
  interface TableauFieldRefs {
    readonly id: FieldRef<"Tableau", 'Int'>
    readonly imagePath: FieldRef<"Tableau", 'String'>
    readonly description_fr: FieldRef<"Tableau", 'String'>
    readonly description_en: FieldRef<"Tableau", 'String'>
    readonly order: FieldRef<"Tableau", 'Int'>
    readonly laGalerieId: FieldRef<"Tableau", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tableau findUnique
   */
  export type TableauFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * Filter, which Tableau to fetch.
     */
    where: TableauWhereUniqueInput
  }

  /**
   * Tableau findUniqueOrThrow
   */
  export type TableauFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * Filter, which Tableau to fetch.
     */
    where: TableauWhereUniqueInput
  }

  /**
   * Tableau findFirst
   */
  export type TableauFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * Filter, which Tableau to fetch.
     */
    where?: TableauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tableaus to fetch.
     */
    orderBy?: TableauOrderByWithRelationInput | TableauOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tableaus.
     */
    cursor?: TableauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tableaus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tableaus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tableaus.
     */
    distinct?: TableauScalarFieldEnum | TableauScalarFieldEnum[]
  }

  /**
   * Tableau findFirstOrThrow
   */
  export type TableauFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * Filter, which Tableau to fetch.
     */
    where?: TableauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tableaus to fetch.
     */
    orderBy?: TableauOrderByWithRelationInput | TableauOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tableaus.
     */
    cursor?: TableauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tableaus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tableaus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tableaus.
     */
    distinct?: TableauScalarFieldEnum | TableauScalarFieldEnum[]
  }

  /**
   * Tableau findMany
   */
  export type TableauFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * Filter, which Tableaus to fetch.
     */
    where?: TableauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tableaus to fetch.
     */
    orderBy?: TableauOrderByWithRelationInput | TableauOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tableaus.
     */
    cursor?: TableauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tableaus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tableaus.
     */
    skip?: number
    distinct?: TableauScalarFieldEnum | TableauScalarFieldEnum[]
  }

  /**
   * Tableau create
   */
  export type TableauCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * The data needed to create a Tableau.
     */
    data: XOR<TableauCreateInput, TableauUncheckedCreateInput>
  }

  /**
   * Tableau createMany
   */
  export type TableauCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tableaus.
     */
    data: TableauCreateManyInput | TableauCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tableau createManyAndReturn
   */
  export type TableauCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * The data used to create many Tableaus.
     */
    data: TableauCreateManyInput | TableauCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tableau update
   */
  export type TableauUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * The data needed to update a Tableau.
     */
    data: XOR<TableauUpdateInput, TableauUncheckedUpdateInput>
    /**
     * Choose, which Tableau to update.
     */
    where: TableauWhereUniqueInput
  }

  /**
   * Tableau updateMany
   */
  export type TableauUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tableaus.
     */
    data: XOR<TableauUpdateManyMutationInput, TableauUncheckedUpdateManyInput>
    /**
     * Filter which Tableaus to update
     */
    where?: TableauWhereInput
    /**
     * Limit how many Tableaus to update.
     */
    limit?: number
  }

  /**
   * Tableau updateManyAndReturn
   */
  export type TableauUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * The data used to update Tableaus.
     */
    data: XOR<TableauUpdateManyMutationInput, TableauUncheckedUpdateManyInput>
    /**
     * Filter which Tableaus to update
     */
    where?: TableauWhereInput
    /**
     * Limit how many Tableaus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tableau upsert
   */
  export type TableauUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * The filter to search for the Tableau to update in case it exists.
     */
    where: TableauWhereUniqueInput
    /**
     * In case the Tableau found by the `where` argument doesn't exist, create a new Tableau with this data.
     */
    create: XOR<TableauCreateInput, TableauUncheckedCreateInput>
    /**
     * In case the Tableau was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableauUpdateInput, TableauUncheckedUpdateInput>
  }

  /**
   * Tableau delete
   */
  export type TableauDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    /**
     * Filter which Tableau to delete.
     */
    where: TableauWhereUniqueInput
  }

  /**
   * Tableau deleteMany
   */
  export type TableauDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tableaus to delete
     */
    where?: TableauWhereInput
    /**
     * Limit how many Tableaus to delete.
     */
    limit?: number
  }

  /**
   * Tableau without action
   */
  export type TableauDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
  }


  /**
   * Model Galerie
   */

  export type AggregateGalerie = {
    _count: GalerieCountAggregateOutputType | null
    _avg: GalerieAvgAggregateOutputType | null
    _sum: GalerieSumAggregateOutputType | null
    _min: GalerieMinAggregateOutputType | null
    _max: GalerieMaxAggregateOutputType | null
  }

  export type GalerieAvgAggregateOutputType = {
    order: number | null
  }

  export type GalerieSumAggregateOutputType = {
    order: number | null
  }

  export type GalerieMinAggregateOutputType = {
    nom_fr: string | null
    nom_en: string | null
    presentation_fr: string | null
    presentation_en: string | null
    order: number | null
  }

  export type GalerieMaxAggregateOutputType = {
    nom_fr: string | null
    nom_en: string | null
    presentation_fr: string | null
    presentation_en: string | null
    order: number | null
  }

  export type GalerieCountAggregateOutputType = {
    nom_fr: number
    nom_en: number
    presentation_fr: number
    presentation_en: number
    order: number
    _all: number
  }


  export type GalerieAvgAggregateInputType = {
    order?: true
  }

  export type GalerieSumAggregateInputType = {
    order?: true
  }

  export type GalerieMinAggregateInputType = {
    nom_fr?: true
    nom_en?: true
    presentation_fr?: true
    presentation_en?: true
    order?: true
  }

  export type GalerieMaxAggregateInputType = {
    nom_fr?: true
    nom_en?: true
    presentation_fr?: true
    presentation_en?: true
    order?: true
  }

  export type GalerieCountAggregateInputType = {
    nom_fr?: true
    nom_en?: true
    presentation_fr?: true
    presentation_en?: true
    order?: true
    _all?: true
  }

  export type GalerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galerie to aggregate.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galeries
    **/
    _count?: true | GalerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalerieMaxAggregateInputType
  }

  export type GetGalerieAggregateType<T extends GalerieAggregateArgs> = {
        [P in keyof T & keyof AggregateGalerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalerie[P]>
      : GetScalarType<T[P], AggregateGalerie[P]>
  }




  export type GalerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalerieWhereInput
    orderBy?: GalerieOrderByWithAggregationInput | GalerieOrderByWithAggregationInput[]
    by: GalerieScalarFieldEnum[] | GalerieScalarFieldEnum
    having?: GalerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalerieCountAggregateInputType | true
    _avg?: GalerieAvgAggregateInputType
    _sum?: GalerieSumAggregateInputType
    _min?: GalerieMinAggregateInputType
    _max?: GalerieMaxAggregateInputType
  }

  export type GalerieGroupByOutputType = {
    nom_fr: string
    nom_en: string
    presentation_fr: string
    presentation_en: string
    order: number
    _count: GalerieCountAggregateOutputType | null
    _avg: GalerieAvgAggregateOutputType | null
    _sum: GalerieSumAggregateOutputType | null
    _min: GalerieMinAggregateOutputType | null
    _max: GalerieMaxAggregateOutputType | null
  }

  type GetGalerieGroupByPayload<T extends GalerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalerieGroupByOutputType[P]>
            : GetScalarType<T[P], GalerieGroupByOutputType[P]>
        }
      >
    >


  export type GalerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nom_fr?: boolean
    nom_en?: boolean
    presentation_fr?: boolean
    presentation_en?: boolean
    order?: boolean
    tableaux?: boolean | Galerie$tableauxArgs<ExtArgs>
    _count?: boolean | GalerieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nom_fr?: boolean
    nom_en?: boolean
    presentation_fr?: boolean
    presentation_en?: boolean
    order?: boolean
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nom_fr?: boolean
    nom_en?: boolean
    presentation_fr?: boolean
    presentation_en?: boolean
    order?: boolean
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectScalar = {
    nom_fr?: boolean
    nom_en?: boolean
    presentation_fr?: boolean
    presentation_en?: boolean
    order?: boolean
  }

  export type GalerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nom_fr" | "nom_en" | "presentation_fr" | "presentation_en" | "order", ExtArgs["result"]["galerie"]>
  export type GalerieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableaux?: boolean | Galerie$tableauxArgs<ExtArgs>
    _count?: boolean | GalerieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GalerieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GalerieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GaleriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Galerie"
    objects: {
      tableaux: Prisma.$TableauPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nom_fr: string
      nom_en: string
      presentation_fr: string
      presentation_en: string
      order: number
    }, ExtArgs["result"]["galerie"]>
    composites: {}
  }

  type GalerieGetPayload<S extends boolean | null | undefined | GalerieDefaultArgs> = $Result.GetResult<Prisma.$GaleriePayload, S>

  type GalerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalerieCountAggregateInputType | true
    }

  export interface GalerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Galerie'], meta: { name: 'Galerie' } }
    /**
     * Find zero or one Galerie that matches the filter.
     * @param {GalerieFindUniqueArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalerieFindUniqueArgs>(args: SelectSubset<T, GalerieFindUniqueArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Galerie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalerieFindUniqueOrThrowArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalerieFindUniqueOrThrowArgs>(args: SelectSubset<T, GalerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindFirstArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalerieFindFirstArgs>(args?: SelectSubset<T, GalerieFindFirstArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindFirstOrThrowArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalerieFindFirstOrThrowArgs>(args?: SelectSubset<T, GalerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galeries
     * const galeries = await prisma.galerie.findMany()
     * 
     * // Get first 10 Galeries
     * const galeries = await prisma.galerie.findMany({ take: 10 })
     * 
     * // Only select the `nom_fr`
     * const galerieWithNom_frOnly = await prisma.galerie.findMany({ select: { nom_fr: true } })
     * 
     */
    findMany<T extends GalerieFindManyArgs>(args?: SelectSubset<T, GalerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Galerie.
     * @param {GalerieCreateArgs} args - Arguments to create a Galerie.
     * @example
     * // Create one Galerie
     * const Galerie = await prisma.galerie.create({
     *   data: {
     *     // ... data to create a Galerie
     *   }
     * })
     * 
     */
    create<T extends GalerieCreateArgs>(args: SelectSubset<T, GalerieCreateArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galeries.
     * @param {GalerieCreateManyArgs} args - Arguments to create many Galeries.
     * @example
     * // Create many Galeries
     * const galerie = await prisma.galerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalerieCreateManyArgs>(args?: SelectSubset<T, GalerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galeries and returns the data saved in the database.
     * @param {GalerieCreateManyAndReturnArgs} args - Arguments to create many Galeries.
     * @example
     * // Create many Galeries
     * const galerie = await prisma.galerie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galeries and only return the `nom_fr`
     * const galerieWithNom_frOnly = await prisma.galerie.createManyAndReturn({
     *   select: { nom_fr: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalerieCreateManyAndReturnArgs>(args?: SelectSubset<T, GalerieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Galerie.
     * @param {GalerieDeleteArgs} args - Arguments to delete one Galerie.
     * @example
     * // Delete one Galerie
     * const Galerie = await prisma.galerie.delete({
     *   where: {
     *     // ... filter to delete one Galerie
     *   }
     * })
     * 
     */
    delete<T extends GalerieDeleteArgs>(args: SelectSubset<T, GalerieDeleteArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Galerie.
     * @param {GalerieUpdateArgs} args - Arguments to update one Galerie.
     * @example
     * // Update one Galerie
     * const galerie = await prisma.galerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalerieUpdateArgs>(args: SelectSubset<T, GalerieUpdateArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galeries.
     * @param {GalerieDeleteManyArgs} args - Arguments to filter Galeries to delete.
     * @example
     * // Delete a few Galeries
     * const { count } = await prisma.galerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalerieDeleteManyArgs>(args?: SelectSubset<T, GalerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galeries
     * const galerie = await prisma.galerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalerieUpdateManyArgs>(args: SelectSubset<T, GalerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeries and returns the data updated in the database.
     * @param {GalerieUpdateManyAndReturnArgs} args - Arguments to update many Galeries.
     * @example
     * // Update many Galeries
     * const galerie = await prisma.galerie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galeries and only return the `nom_fr`
     * const galerieWithNom_frOnly = await prisma.galerie.updateManyAndReturn({
     *   select: { nom_fr: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalerieUpdateManyAndReturnArgs>(args: SelectSubset<T, GalerieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Galerie.
     * @param {GalerieUpsertArgs} args - Arguments to update or create a Galerie.
     * @example
     * // Update or create a Galerie
     * const galerie = await prisma.galerie.upsert({
     *   create: {
     *     // ... data to create a Galerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Galerie we want to update
     *   }
     * })
     */
    upsert<T extends GalerieUpsertArgs>(args: SelectSubset<T, GalerieUpsertArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieCountArgs} args - Arguments to filter Galeries to count.
     * @example
     * // Count the number of Galeries
     * const count = await prisma.galerie.count({
     *   where: {
     *     // ... the filter for the Galeries we want to count
     *   }
     * })
    **/
    count<T extends GalerieCountArgs>(
      args?: Subset<T, GalerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Galerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalerieAggregateArgs>(args: Subset<T, GalerieAggregateArgs>): Prisma.PrismaPromise<GetGalerieAggregateType<T>>

    /**
     * Group by Galerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieGroupByArgs} args - Group by arguments.
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
      T extends GalerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalerieGroupByArgs['orderBy'] }
        : { orderBy?: GalerieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Galerie model
   */
  readonly fields: GalerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Galerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tableaux<T extends Galerie$tableauxArgs<ExtArgs> = {}>(args?: Subset<T, Galerie$tableauxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableauPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Galerie model
   */
  interface GalerieFieldRefs {
    readonly nom_fr: FieldRef<"Galerie", 'String'>
    readonly nom_en: FieldRef<"Galerie", 'String'>
    readonly presentation_fr: FieldRef<"Galerie", 'String'>
    readonly presentation_en: FieldRef<"Galerie", 'String'>
    readonly order: FieldRef<"Galerie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Galerie findUnique
   */
  export type GalerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie findUniqueOrThrow
   */
  export type GalerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie findFirst
   */
  export type GalerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie findFirstOrThrow
   */
  export type GalerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie findMany
   */
  export type GalerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galeries to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie create
   */
  export type GalerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The data needed to create a Galerie.
     */
    data: XOR<GalerieCreateInput, GalerieUncheckedCreateInput>
  }

  /**
   * Galerie createMany
   */
  export type GalerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galeries.
     */
    data: GalerieCreateManyInput | GalerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galerie createManyAndReturn
   */
  export type GalerieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * The data used to create many Galeries.
     */
    data: GalerieCreateManyInput | GalerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galerie update
   */
  export type GalerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The data needed to update a Galerie.
     */
    data: XOR<GalerieUpdateInput, GalerieUncheckedUpdateInput>
    /**
     * Choose, which Galerie to update.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie updateMany
   */
  export type GalerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galeries.
     */
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyInput>
    /**
     * Filter which Galeries to update
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to update.
     */
    limit?: number
  }

  /**
   * Galerie updateManyAndReturn
   */
  export type GalerieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * The data used to update Galeries.
     */
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyInput>
    /**
     * Filter which Galeries to update
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to update.
     */
    limit?: number
  }

  /**
   * Galerie upsert
   */
  export type GalerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The filter to search for the Galerie to update in case it exists.
     */
    where: GalerieWhereUniqueInput
    /**
     * In case the Galerie found by the `where` argument doesn't exist, create a new Galerie with this data.
     */
    create: XOR<GalerieCreateInput, GalerieUncheckedCreateInput>
    /**
     * In case the Galerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalerieUpdateInput, GalerieUncheckedUpdateInput>
  }

  /**
   * Galerie delete
   */
  export type GalerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter which Galerie to delete.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie deleteMany
   */
  export type GalerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeries to delete
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to delete.
     */
    limit?: number
  }

  /**
   * Galerie.tableaux
   */
  export type Galerie$tableauxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tableau
     */
    select?: TableauSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tableau
     */
    omit?: TableauOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableauInclude<ExtArgs> | null
    where?: TableauWhereInput
    orderBy?: TableauOrderByWithRelationInput | TableauOrderByWithRelationInput[]
    cursor?: TableauWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableauScalarFieldEnum | TableauScalarFieldEnum[]
  }

  /**
   * Galerie without action
   */
  export type GalerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TableauScalarFieldEnum: {
    id: 'id',
    imagePath: 'imagePath',
    description_fr: 'description_fr',
    description_en: 'description_en',
    order: 'order',
    laGalerieId: 'laGalerieId'
  };

  export type TableauScalarFieldEnum = (typeof TableauScalarFieldEnum)[keyof typeof TableauScalarFieldEnum]


  export const GalerieScalarFieldEnum: {
    nom_fr: 'nom_fr',
    nom_en: 'nom_en',
    presentation_fr: 'presentation_fr',
    presentation_en: 'presentation_en',
    order: 'order'
  };

  export type GalerieScalarFieldEnum = (typeof GalerieScalarFieldEnum)[keyof typeof GalerieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TableauWhereInput = {
    AND?: TableauWhereInput | TableauWhereInput[]
    OR?: TableauWhereInput[]
    NOT?: TableauWhereInput | TableauWhereInput[]
    id?: IntFilter<"Tableau"> | number
    imagePath?: StringFilter<"Tableau"> | string
    description_fr?: StringFilter<"Tableau"> | string
    description_en?: StringFilter<"Tableau"> | string
    order?: IntFilter<"Tableau"> | number
    laGalerieId?: StringFilter<"Tableau"> | string
    laGalerie?: XOR<GalerieScalarRelationFilter, GalerieWhereInput>
  }

  export type TableauOrderByWithRelationInput = {
    id?: SortOrder
    imagePath?: SortOrder
    description_fr?: SortOrder
    description_en?: SortOrder
    order?: SortOrder
    laGalerieId?: SortOrder
    laGalerie?: GalerieOrderByWithRelationInput
  }

  export type TableauWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableauWhereInput | TableauWhereInput[]
    OR?: TableauWhereInput[]
    NOT?: TableauWhereInput | TableauWhereInput[]
    imagePath?: StringFilter<"Tableau"> | string
    description_fr?: StringFilter<"Tableau"> | string
    description_en?: StringFilter<"Tableau"> | string
    order?: IntFilter<"Tableau"> | number
    laGalerieId?: StringFilter<"Tableau"> | string
    laGalerie?: XOR<GalerieScalarRelationFilter, GalerieWhereInput>
  }, "id">

  export type TableauOrderByWithAggregationInput = {
    id?: SortOrder
    imagePath?: SortOrder
    description_fr?: SortOrder
    description_en?: SortOrder
    order?: SortOrder
    laGalerieId?: SortOrder
    _count?: TableauCountOrderByAggregateInput
    _avg?: TableauAvgOrderByAggregateInput
    _max?: TableauMaxOrderByAggregateInput
    _min?: TableauMinOrderByAggregateInput
    _sum?: TableauSumOrderByAggregateInput
  }

  export type TableauScalarWhereWithAggregatesInput = {
    AND?: TableauScalarWhereWithAggregatesInput | TableauScalarWhereWithAggregatesInput[]
    OR?: TableauScalarWhereWithAggregatesInput[]
    NOT?: TableauScalarWhereWithAggregatesInput | TableauScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tableau"> | number
    imagePath?: StringWithAggregatesFilter<"Tableau"> | string
    description_fr?: StringWithAggregatesFilter<"Tableau"> | string
    description_en?: StringWithAggregatesFilter<"Tableau"> | string
    order?: IntWithAggregatesFilter<"Tableau"> | number
    laGalerieId?: StringWithAggregatesFilter<"Tableau"> | string
  }

  export type GalerieWhereInput = {
    AND?: GalerieWhereInput | GalerieWhereInput[]
    OR?: GalerieWhereInput[]
    NOT?: GalerieWhereInput | GalerieWhereInput[]
    nom_fr?: StringFilter<"Galerie"> | string
    nom_en?: StringFilter<"Galerie"> | string
    presentation_fr?: StringFilter<"Galerie"> | string
    presentation_en?: StringFilter<"Galerie"> | string
    order?: IntFilter<"Galerie"> | number
    tableaux?: TableauListRelationFilter
  }

  export type GalerieOrderByWithRelationInput = {
    nom_fr?: SortOrder
    nom_en?: SortOrder
    presentation_fr?: SortOrder
    presentation_en?: SortOrder
    order?: SortOrder
    tableaux?: TableauOrderByRelationAggregateInput
  }

  export type GalerieWhereUniqueInput = Prisma.AtLeast<{
    nom_fr?: string
    AND?: GalerieWhereInput | GalerieWhereInput[]
    OR?: GalerieWhereInput[]
    NOT?: GalerieWhereInput | GalerieWhereInput[]
    nom_en?: StringFilter<"Galerie"> | string
    presentation_fr?: StringFilter<"Galerie"> | string
    presentation_en?: StringFilter<"Galerie"> | string
    order?: IntFilter<"Galerie"> | number
    tableaux?: TableauListRelationFilter
  }, "nom_fr">

  export type GalerieOrderByWithAggregationInput = {
    nom_fr?: SortOrder
    nom_en?: SortOrder
    presentation_fr?: SortOrder
    presentation_en?: SortOrder
    order?: SortOrder
    _count?: GalerieCountOrderByAggregateInput
    _avg?: GalerieAvgOrderByAggregateInput
    _max?: GalerieMaxOrderByAggregateInput
    _min?: GalerieMinOrderByAggregateInput
    _sum?: GalerieSumOrderByAggregateInput
  }

  export type GalerieScalarWhereWithAggregatesInput = {
    AND?: GalerieScalarWhereWithAggregatesInput | GalerieScalarWhereWithAggregatesInput[]
    OR?: GalerieScalarWhereWithAggregatesInput[]
    NOT?: GalerieScalarWhereWithAggregatesInput | GalerieScalarWhereWithAggregatesInput[]
    nom_fr?: StringWithAggregatesFilter<"Galerie"> | string
    nom_en?: StringWithAggregatesFilter<"Galerie"> | string
    presentation_fr?: StringWithAggregatesFilter<"Galerie"> | string
    presentation_en?: StringWithAggregatesFilter<"Galerie"> | string
    order?: IntWithAggregatesFilter<"Galerie"> | number
  }

  export type TableauCreateInput = {
    imagePath: string
    description_fr: string
    description_en: string
    order?: number
    laGalerie: GalerieCreateNestedOneWithoutTableauxInput
  }

  export type TableauUncheckedCreateInput = {
    id?: number
    imagePath: string
    description_fr: string
    description_en: string
    order?: number
    laGalerieId: string
  }

  export type TableauUpdateInput = {
    imagePath?: StringFieldUpdateOperationsInput | string
    description_fr?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    laGalerie?: GalerieUpdateOneRequiredWithoutTableauxNestedInput
  }

  export type TableauUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagePath?: StringFieldUpdateOperationsInput | string
    description_fr?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    laGalerieId?: StringFieldUpdateOperationsInput | string
  }

  export type TableauCreateManyInput = {
    id?: number
    imagePath: string
    description_fr: string
    description_en: string
    order?: number
    laGalerieId: string
  }

  export type TableauUpdateManyMutationInput = {
    imagePath?: StringFieldUpdateOperationsInput | string
    description_fr?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TableauUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagePath?: StringFieldUpdateOperationsInput | string
    description_fr?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    laGalerieId?: StringFieldUpdateOperationsInput | string
  }

  export type GalerieCreateInput = {
    nom_fr: string
    nom_en: string
    presentation_fr: string
    presentation_en: string
    order?: number
    tableaux?: TableauCreateNestedManyWithoutLaGalerieInput
  }

  export type GalerieUncheckedCreateInput = {
    nom_fr: string
    nom_en: string
    presentation_fr: string
    presentation_en: string
    order?: number
    tableaux?: TableauUncheckedCreateNestedManyWithoutLaGalerieInput
  }

  export type GalerieUpdateInput = {
    nom_fr?: StringFieldUpdateOperationsInput | string
    nom_en?: StringFieldUpdateOperationsInput | string
    presentation_fr?: StringFieldUpdateOperationsInput | string
    presentation_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tableaux?: TableauUpdateManyWithoutLaGalerieNestedInput
  }

  export type GalerieUncheckedUpdateInput = {
    nom_fr?: StringFieldUpdateOperationsInput | string
    nom_en?: StringFieldUpdateOperationsInput | string
    presentation_fr?: StringFieldUpdateOperationsInput | string
    presentation_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tableaux?: TableauUncheckedUpdateManyWithoutLaGalerieNestedInput
  }

  export type GalerieCreateManyInput = {
    nom_fr: string
    nom_en: string
    presentation_fr: string
    presentation_en: string
    order?: number
  }

  export type GalerieUpdateManyMutationInput = {
    nom_fr?: StringFieldUpdateOperationsInput | string
    nom_en?: StringFieldUpdateOperationsInput | string
    presentation_fr?: StringFieldUpdateOperationsInput | string
    presentation_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GalerieUncheckedUpdateManyInput = {
    nom_fr?: StringFieldUpdateOperationsInput | string
    nom_en?: StringFieldUpdateOperationsInput | string
    presentation_fr?: StringFieldUpdateOperationsInput | string
    presentation_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GalerieScalarRelationFilter = {
    is?: GalerieWhereInput
    isNot?: GalerieWhereInput
  }

  export type TableauCountOrderByAggregateInput = {
    id?: SortOrder
    imagePath?: SortOrder
    description_fr?: SortOrder
    description_en?: SortOrder
    order?: SortOrder
    laGalerieId?: SortOrder
  }

  export type TableauAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type TableauMaxOrderByAggregateInput = {
    id?: SortOrder
    imagePath?: SortOrder
    description_fr?: SortOrder
    description_en?: SortOrder
    order?: SortOrder
    laGalerieId?: SortOrder
  }

  export type TableauMinOrderByAggregateInput = {
    id?: SortOrder
    imagePath?: SortOrder
    description_fr?: SortOrder
    description_en?: SortOrder
    order?: SortOrder
    laGalerieId?: SortOrder
  }

  export type TableauSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TableauListRelationFilter = {
    every?: TableauWhereInput
    some?: TableauWhereInput
    none?: TableauWhereInput
  }

  export type TableauOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalerieCountOrderByAggregateInput = {
    nom_fr?: SortOrder
    nom_en?: SortOrder
    presentation_fr?: SortOrder
    presentation_en?: SortOrder
    order?: SortOrder
  }

  export type GalerieAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GalerieMaxOrderByAggregateInput = {
    nom_fr?: SortOrder
    nom_en?: SortOrder
    presentation_fr?: SortOrder
    presentation_en?: SortOrder
    order?: SortOrder
  }

  export type GalerieMinOrderByAggregateInput = {
    nom_fr?: SortOrder
    nom_en?: SortOrder
    presentation_fr?: SortOrder
    presentation_en?: SortOrder
    order?: SortOrder
  }

  export type GalerieSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GalerieCreateNestedOneWithoutTableauxInput = {
    create?: XOR<GalerieCreateWithoutTableauxInput, GalerieUncheckedCreateWithoutTableauxInput>
    connectOrCreate?: GalerieCreateOrConnectWithoutTableauxInput
    connect?: GalerieWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GalerieUpdateOneRequiredWithoutTableauxNestedInput = {
    create?: XOR<GalerieCreateWithoutTableauxInput, GalerieUncheckedCreateWithoutTableauxInput>
    connectOrCreate?: GalerieCreateOrConnectWithoutTableauxInput
    upsert?: GalerieUpsertWithoutTableauxInput
    connect?: GalerieWhereUniqueInput
    update?: XOR<XOR<GalerieUpdateToOneWithWhereWithoutTableauxInput, GalerieUpdateWithoutTableauxInput>, GalerieUncheckedUpdateWithoutTableauxInput>
  }

  export type TableauCreateNestedManyWithoutLaGalerieInput = {
    create?: XOR<TableauCreateWithoutLaGalerieInput, TableauUncheckedCreateWithoutLaGalerieInput> | TableauCreateWithoutLaGalerieInput[] | TableauUncheckedCreateWithoutLaGalerieInput[]
    connectOrCreate?: TableauCreateOrConnectWithoutLaGalerieInput | TableauCreateOrConnectWithoutLaGalerieInput[]
    createMany?: TableauCreateManyLaGalerieInputEnvelope
    connect?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
  }

  export type TableauUncheckedCreateNestedManyWithoutLaGalerieInput = {
    create?: XOR<TableauCreateWithoutLaGalerieInput, TableauUncheckedCreateWithoutLaGalerieInput> | TableauCreateWithoutLaGalerieInput[] | TableauUncheckedCreateWithoutLaGalerieInput[]
    connectOrCreate?: TableauCreateOrConnectWithoutLaGalerieInput | TableauCreateOrConnectWithoutLaGalerieInput[]
    createMany?: TableauCreateManyLaGalerieInputEnvelope
    connect?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
  }

  export type TableauUpdateManyWithoutLaGalerieNestedInput = {
    create?: XOR<TableauCreateWithoutLaGalerieInput, TableauUncheckedCreateWithoutLaGalerieInput> | TableauCreateWithoutLaGalerieInput[] | TableauUncheckedCreateWithoutLaGalerieInput[]
    connectOrCreate?: TableauCreateOrConnectWithoutLaGalerieInput | TableauCreateOrConnectWithoutLaGalerieInput[]
    upsert?: TableauUpsertWithWhereUniqueWithoutLaGalerieInput | TableauUpsertWithWhereUniqueWithoutLaGalerieInput[]
    createMany?: TableauCreateManyLaGalerieInputEnvelope
    set?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
    disconnect?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
    delete?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
    connect?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
    update?: TableauUpdateWithWhereUniqueWithoutLaGalerieInput | TableauUpdateWithWhereUniqueWithoutLaGalerieInput[]
    updateMany?: TableauUpdateManyWithWhereWithoutLaGalerieInput | TableauUpdateManyWithWhereWithoutLaGalerieInput[]
    deleteMany?: TableauScalarWhereInput | TableauScalarWhereInput[]
  }

  export type TableauUncheckedUpdateManyWithoutLaGalerieNestedInput = {
    create?: XOR<TableauCreateWithoutLaGalerieInput, TableauUncheckedCreateWithoutLaGalerieInput> | TableauCreateWithoutLaGalerieInput[] | TableauUncheckedCreateWithoutLaGalerieInput[]
    connectOrCreate?: TableauCreateOrConnectWithoutLaGalerieInput | TableauCreateOrConnectWithoutLaGalerieInput[]
    upsert?: TableauUpsertWithWhereUniqueWithoutLaGalerieInput | TableauUpsertWithWhereUniqueWithoutLaGalerieInput[]
    createMany?: TableauCreateManyLaGalerieInputEnvelope
    set?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
    disconnect?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
    delete?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
    connect?: TableauWhereUniqueInput | TableauWhereUniqueInput[]
    update?: TableauUpdateWithWhereUniqueWithoutLaGalerieInput | TableauUpdateWithWhereUniqueWithoutLaGalerieInput[]
    updateMany?: TableauUpdateManyWithWhereWithoutLaGalerieInput | TableauUpdateManyWithWhereWithoutLaGalerieInput[]
    deleteMany?: TableauScalarWhereInput | TableauScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type GalerieCreateWithoutTableauxInput = {
    nom_fr: string
    nom_en: string
    presentation_fr: string
    presentation_en: string
    order?: number
  }

  export type GalerieUncheckedCreateWithoutTableauxInput = {
    nom_fr: string
    nom_en: string
    presentation_fr: string
    presentation_en: string
    order?: number
  }

  export type GalerieCreateOrConnectWithoutTableauxInput = {
    where: GalerieWhereUniqueInput
    create: XOR<GalerieCreateWithoutTableauxInput, GalerieUncheckedCreateWithoutTableauxInput>
  }

  export type GalerieUpsertWithoutTableauxInput = {
    update: XOR<GalerieUpdateWithoutTableauxInput, GalerieUncheckedUpdateWithoutTableauxInput>
    create: XOR<GalerieCreateWithoutTableauxInput, GalerieUncheckedCreateWithoutTableauxInput>
    where?: GalerieWhereInput
  }

  export type GalerieUpdateToOneWithWhereWithoutTableauxInput = {
    where?: GalerieWhereInput
    data: XOR<GalerieUpdateWithoutTableauxInput, GalerieUncheckedUpdateWithoutTableauxInput>
  }

  export type GalerieUpdateWithoutTableauxInput = {
    nom_fr?: StringFieldUpdateOperationsInput | string
    nom_en?: StringFieldUpdateOperationsInput | string
    presentation_fr?: StringFieldUpdateOperationsInput | string
    presentation_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GalerieUncheckedUpdateWithoutTableauxInput = {
    nom_fr?: StringFieldUpdateOperationsInput | string
    nom_en?: StringFieldUpdateOperationsInput | string
    presentation_fr?: StringFieldUpdateOperationsInput | string
    presentation_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TableauCreateWithoutLaGalerieInput = {
    imagePath: string
    description_fr: string
    description_en: string
    order?: number
  }

  export type TableauUncheckedCreateWithoutLaGalerieInput = {
    id?: number
    imagePath: string
    description_fr: string
    description_en: string
    order?: number
  }

  export type TableauCreateOrConnectWithoutLaGalerieInput = {
    where: TableauWhereUniqueInput
    create: XOR<TableauCreateWithoutLaGalerieInput, TableauUncheckedCreateWithoutLaGalerieInput>
  }

  export type TableauCreateManyLaGalerieInputEnvelope = {
    data: TableauCreateManyLaGalerieInput | TableauCreateManyLaGalerieInput[]
    skipDuplicates?: boolean
  }

  export type TableauUpsertWithWhereUniqueWithoutLaGalerieInput = {
    where: TableauWhereUniqueInput
    update: XOR<TableauUpdateWithoutLaGalerieInput, TableauUncheckedUpdateWithoutLaGalerieInput>
    create: XOR<TableauCreateWithoutLaGalerieInput, TableauUncheckedCreateWithoutLaGalerieInput>
  }

  export type TableauUpdateWithWhereUniqueWithoutLaGalerieInput = {
    where: TableauWhereUniqueInput
    data: XOR<TableauUpdateWithoutLaGalerieInput, TableauUncheckedUpdateWithoutLaGalerieInput>
  }

  export type TableauUpdateManyWithWhereWithoutLaGalerieInput = {
    where: TableauScalarWhereInput
    data: XOR<TableauUpdateManyMutationInput, TableauUncheckedUpdateManyWithoutLaGalerieInput>
  }

  export type TableauScalarWhereInput = {
    AND?: TableauScalarWhereInput | TableauScalarWhereInput[]
    OR?: TableauScalarWhereInput[]
    NOT?: TableauScalarWhereInput | TableauScalarWhereInput[]
    id?: IntFilter<"Tableau"> | number
    imagePath?: StringFilter<"Tableau"> | string
    description_fr?: StringFilter<"Tableau"> | string
    description_en?: StringFilter<"Tableau"> | string
    order?: IntFilter<"Tableau"> | number
    laGalerieId?: StringFilter<"Tableau"> | string
  }

  export type TableauCreateManyLaGalerieInput = {
    id?: number
    imagePath: string
    description_fr: string
    description_en: string
    order?: number
  }

  export type TableauUpdateWithoutLaGalerieInput = {
    imagePath?: StringFieldUpdateOperationsInput | string
    description_fr?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TableauUncheckedUpdateWithoutLaGalerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagePath?: StringFieldUpdateOperationsInput | string
    description_fr?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TableauUncheckedUpdateManyWithoutLaGalerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagePath?: StringFieldUpdateOperationsInput | string
    description_fr?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}