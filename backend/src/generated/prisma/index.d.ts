
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model AdminAction
 * 
 */
export type AdminAction = $Result.DefaultSelection<Prisma.$AdminActionPayload>
/**
 * Model Discussion
 * 
 */
export type Discussion = $Result.DefaultSelection<Prisma.$DiscussionPayload>
/**
 * Model QuestionRating
 * 
 */
export type QuestionRating = $Result.DefaultSelection<Prisma.$QuestionRatingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SubmissionStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminAction`: Exposes CRUD operations for the **AdminAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminActions
    * const adminActions = await prisma.adminAction.findMany()
    * ```
    */
  get adminAction(): Prisma.AdminActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussion`: Exposes CRUD operations for the **Discussion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discussions
    * const discussions = await prisma.discussion.findMany()
    * ```
    */
  get discussion(): Prisma.DiscussionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionRating`: Exposes CRUD operations for the **QuestionRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionRatings
    * const questionRatings = await prisma.questionRating.findMany()
    * ```
    */
  get questionRating(): Prisma.QuestionRatingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    User: 'User',
    Question: 'Question',
    Submission: 'Submission',
    AdminAction: 'AdminAction',
    Discussion: 'Discussion',
    QuestionRating: 'QuestionRating'
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
      modelProps: "user" | "question" | "submission" | "adminAction" | "discussion" | "questionRating"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      AdminAction: {
        payload: Prisma.$AdminActionPayload<ExtArgs>
        fields: Prisma.AdminActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>
          }
          findFirst: {
            args: Prisma.AdminActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>
          }
          findMany: {
            args: Prisma.AdminActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>[]
          }
          create: {
            args: Prisma.AdminActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>
          }
          createMany: {
            args: Prisma.AdminActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>[]
          }
          delete: {
            args: Prisma.AdminActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>
          }
          update: {
            args: Prisma.AdminActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>
          }
          deleteMany: {
            args: Prisma.AdminActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>[]
          }
          upsert: {
            args: Prisma.AdminActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActionPayload>
          }
          aggregate: {
            args: Prisma.AdminActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminAction>
          }
          groupBy: {
            args: Prisma.AdminActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminActionCountArgs<ExtArgs>
            result: $Utils.Optional<AdminActionCountAggregateOutputType> | number
          }
        }
      }
      Discussion: {
        payload: Prisma.$DiscussionPayload<ExtArgs>
        fields: Prisma.DiscussionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findFirst: {
            args: Prisma.DiscussionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findMany: {
            args: Prisma.DiscussionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          create: {
            args: Prisma.DiscussionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          createMany: {
            args: Prisma.DiscussionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscussionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          delete: {
            args: Prisma.DiscussionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          update: {
            args: Prisma.DiscussionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          deleteMany: {
            args: Prisma.DiscussionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscussionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          upsert: {
            args: Prisma.DiscussionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          aggregate: {
            args: Prisma.DiscussionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussion>
          }
          groupBy: {
            args: Prisma.DiscussionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscussionCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionCountAggregateOutputType> | number
          }
        }
      }
      QuestionRating: {
        payload: Prisma.$QuestionRatingPayload<ExtArgs>
        fields: Prisma.QuestionRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>
          }
          findFirst: {
            args: Prisma.QuestionRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>
          }
          findMany: {
            args: Prisma.QuestionRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>[]
          }
          create: {
            args: Prisma.QuestionRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>
          }
          createMany: {
            args: Prisma.QuestionRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>[]
          }
          delete: {
            args: Prisma.QuestionRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>
          }
          update: {
            args: Prisma.QuestionRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>
          }
          deleteMany: {
            args: Prisma.QuestionRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>[]
          }
          upsert: {
            args: Prisma.QuestionRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionRatingPayload>
          }
          aggregate: {
            args: Prisma.QuestionRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionRating>
          }
          groupBy: {
            args: Prisma.QuestionRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionRatingCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionRatingCountAggregateOutputType> | number
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
    user?: UserOmit
    question?: QuestionOmit
    submission?: SubmissionOmit
    adminAction?: AdminActionOmit
    discussion?: DiscussionOmit
    questionRating?: QuestionRatingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submissions: number
    discussions: number
    ratings: number
    adminActions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    discussions?: boolean | UserCountOutputTypeCountDiscussionsArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    adminActions?: boolean | UserCountOutputTypeCountAdminActionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiscussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionRatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    submissions: number
    discussions: number
    ratings: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | QuestionCountOutputTypeCountSubmissionsArgs
    discussions?: boolean | QuestionCountOutputTypeCountDiscussionsArgs
    ratings?: boolean | QuestionCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountDiscussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionRatingWhereInput
  }


  /**
   * Count Type DiscussionCountOutputType
   */

  export type DiscussionCountOutputType = {
    replies: number
  }

  export type DiscussionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | DiscussionCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * DiscussionCountOutputType without action
   */
  export type DiscussionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionCountOutputType
     */
    select?: DiscussionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscussionCountOutputType without action
   */
  export type DiscussionCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    score: number | null
  }

  export type UserSumAggregateOutputType = {
    score: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    srn: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    codeforcesHandle: string | null
    score: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    srn: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    codeforcesHandle: string | null
    score: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    srn: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    resetToken: number
    resetTokenExpiry: number
    codeforcesHandle: number
    score: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    score?: true
  }

  export type UserSumAggregateInputType = {
    score?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    srn?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    codeforcesHandle?: true
    score?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    srn?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    codeforcesHandle?: true
    score?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    srn?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    codeforcesHandle?: true
    score?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    srn: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    resetToken: string | null
    resetTokenExpiry: Date | null
    codeforcesHandle: string | null
    score: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    srn?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    codeforcesHandle?: boolean
    score?: boolean
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    discussions?: boolean | User$discussionsArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    adminActions?: boolean | User$adminActionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    srn?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    codeforcesHandle?: boolean
    score?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    srn?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    codeforcesHandle?: boolean
    score?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    srn?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    codeforcesHandle?: boolean
    score?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "srn" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "resetToken" | "resetTokenExpiry" | "codeforcesHandle" | "score", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    discussions?: boolean | User$discussionsArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    adminActions?: boolean | User$adminActionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      discussions: Prisma.$DiscussionPayload<ExtArgs>[]
      ratings: Prisma.$QuestionRatingPayload<ExtArgs>[]
      adminActions: Prisma.$AdminActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      srn: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      resetToken: string | null
      resetTokenExpiry: Date | null
      codeforcesHandle: string | null
      score: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    discussions<T extends User$discussionsArgs<ExtArgs> = {}>(args?: Subset<T, User$discussionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminActions<T extends User$adminActionsArgs<ExtArgs> = {}>(args?: Subset<T, User$adminActionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly srn: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly codeforcesHandle: FieldRef<"User", 'String'>
    readonly score: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.discussions
   */
  export type User$discussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    cursor?: DiscussionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    where?: QuestionRatingWhereInput
    orderBy?: QuestionRatingOrderByWithRelationInput | QuestionRatingOrderByWithRelationInput[]
    cursor?: QuestionRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionRatingScalarFieldEnum | QuestionRatingScalarFieldEnum[]
  }

  /**
   * User.adminActions
   */
  export type User$adminActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    where?: AdminActionWhereInput
    orderBy?: AdminActionOrderByWithRelationInput | AdminActionOrderByWithRelationInput[]
    cursor?: AdminActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminActionScalarFieldEnum | AdminActionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    codeforcesId: number | null
    rating: number | null
  }

  export type QuestionSumAggregateOutputType = {
    codeforcesId: number | null
    rating: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    title: string | null
    codeforcesId: number | null
    link: string | null
    date: Date | null
    createdAt: Date | null
    rating: number | null
    editorialUrl: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    codeforcesId: number | null
    link: string | null
    date: Date | null
    createdAt: Date | null
    rating: number | null
    editorialUrl: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    codeforcesId: number
    link: number
    date: number
    createdAt: number
    rating: number
    editorialUrl: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    codeforcesId?: true
    rating?: true
  }

  export type QuestionSumAggregateInputType = {
    codeforcesId?: true
    rating?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    codeforcesId?: true
    link?: true
    date?: true
    createdAt?: true
    rating?: true
    editorialUrl?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    codeforcesId?: true
    link?: true
    date?: true
    createdAt?: true
    rating?: true
    editorialUrl?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    codeforcesId?: true
    link?: true
    date?: true
    createdAt?: true
    rating?: true
    editorialUrl?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    title: string
    codeforcesId: number | null
    link: string | null
    date: Date
    createdAt: Date
    rating: number
    editorialUrl: string | null
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    codeforcesId?: boolean
    link?: boolean
    date?: boolean
    createdAt?: boolean
    rating?: boolean
    editorialUrl?: boolean
    submissions?: boolean | Question$submissionsArgs<ExtArgs>
    discussions?: boolean | Question$discussionsArgs<ExtArgs>
    ratings?: boolean | Question$ratingsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    codeforcesId?: boolean
    link?: boolean
    date?: boolean
    createdAt?: boolean
    rating?: boolean
    editorialUrl?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    codeforcesId?: boolean
    link?: boolean
    date?: boolean
    createdAt?: boolean
    rating?: boolean
    editorialUrl?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    codeforcesId?: boolean
    link?: boolean
    date?: boolean
    createdAt?: boolean
    rating?: boolean
    editorialUrl?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "codeforcesId" | "link" | "date" | "createdAt" | "rating" | "editorialUrl", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | Question$submissionsArgs<ExtArgs>
    discussions?: boolean | Question$discussionsArgs<ExtArgs>
    ratings?: boolean | Question$ratingsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      discussions: Prisma.$DiscussionPayload<ExtArgs>[]
      ratings: Prisma.$QuestionRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      codeforcesId: number | null
      link: string | null
      date: Date
      createdAt: Date
      rating: number
      editorialUrl: string | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends Question$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    discussions<T extends Question$discussionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$discussionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Question$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Question$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly title: FieldRef<"Question", 'String'>
    readonly codeforcesId: FieldRef<"Question", 'Int'>
    readonly link: FieldRef<"Question", 'String'>
    readonly date: FieldRef<"Question", 'DateTime'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly rating: FieldRef<"Question", 'Int'>
    readonly editorialUrl: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.submissions
   */
  export type Question$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Question.discussions
   */
  export type Question$discussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    cursor?: DiscussionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Question.ratings
   */
  export type Question$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    where?: QuestionRatingWhereInput
    orderBy?: QuestionRatingOrderByWithRelationInput | QuestionRatingOrderByWithRelationInput[]
    cursor?: QuestionRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionRatingScalarFieldEnum | QuestionRatingScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    score: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    score: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    status: $Enums.SubmissionStatus | null
    score: number | null
    submittedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    status: $Enums.SubmissionStatus | null
    score: number | null
    submittedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    status: number
    score: number
    submittedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    score?: true
  }

  export type SubmissionSumAggregateInputType = {
    score?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    status?: true
    score?: true
    submittedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    status?: true
    score?: true
    submittedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    status?: true
    score?: true
    submittedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    status: $Enums.SubmissionStatus
    score: number
    submittedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    status?: boolean
    score?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    status?: boolean
    score?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    status?: boolean
    score?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    status?: boolean
    score?: boolean
    submittedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "status" | "score" | "submittedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      status: $Enums.SubmissionStatus
      score: number
      submittedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly questionId: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'SubmissionStatus'>
    readonly score: FieldRef<"Submission", 'Int'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model AdminAction
   */

  export type AggregateAdminAction = {
    _count: AdminActionCountAggregateOutputType | null
    _min: AdminActionMinAggregateOutputType | null
    _max: AdminActionMaxAggregateOutputType | null
  }

  export type AdminActionMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type AdminActionMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type AdminActionCountAggregateOutputType = {
    id: number
    adminId: number
    action: number
    targetType: number
    targetId: number
    before: number
    after: number
    createdAt: number
    _all: number
  }


  export type AdminActionMinAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetType?: true
    targetId?: true
    createdAt?: true
  }

  export type AdminActionMaxAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetType?: true
    targetId?: true
    createdAt?: true
  }

  export type AdminActionCountAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetType?: true
    targetId?: true
    before?: true
    after?: true
    createdAt?: true
    _all?: true
  }

  export type AdminActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAction to aggregate.
     */
    where?: AdminActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActions to fetch.
     */
    orderBy?: AdminActionOrderByWithRelationInput | AdminActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminActions
    **/
    _count?: true | AdminActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminActionMaxAggregateInputType
  }

  export type GetAdminActionAggregateType<T extends AdminActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminAction[P]>
      : GetScalarType<T[P], AggregateAdminAction[P]>
  }




  export type AdminActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActionWhereInput
    orderBy?: AdminActionOrderByWithAggregationInput | AdminActionOrderByWithAggregationInput[]
    by: AdminActionScalarFieldEnum[] | AdminActionScalarFieldEnum
    having?: AdminActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminActionCountAggregateInputType | true
    _min?: AdminActionMinAggregateInputType
    _max?: AdminActionMaxAggregateInputType
  }

  export type AdminActionGroupByOutputType = {
    id: string
    adminId: string
    action: string
    targetType: string | null
    targetId: string | null
    before: JsonValue | null
    after: JsonValue | null
    createdAt: Date
    _count: AdminActionCountAggregateOutputType | null
    _min: AdminActionMinAggregateOutputType | null
    _max: AdminActionMaxAggregateOutputType | null
  }

  type GetAdminActionGroupByPayload<T extends AdminActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminActionGroupByOutputType[P]>
            : GetScalarType<T[P], AdminActionGroupByOutputType[P]>
        }
      >
    >


  export type AdminActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAction"]>

  export type AdminActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAction"]>

  export type AdminActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAction"]>

  export type AdminActionSelectScalar = {
    id?: boolean
    adminId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
  }

  export type AdminActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "action" | "targetType" | "targetId" | "before" | "after" | "createdAt", ExtArgs["result"]["adminAction"]>
  export type AdminActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminAction"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      action: string
      targetType: string | null
      targetId: string | null
      before: Prisma.JsonValue | null
      after: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["adminAction"]>
    composites: {}
  }

  type AdminActionGetPayload<S extends boolean | null | undefined | AdminActionDefaultArgs> = $Result.GetResult<Prisma.$AdminActionPayload, S>

  type AdminActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminActionCountAggregateInputType | true
    }

  export interface AdminActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminAction'], meta: { name: 'AdminAction' } }
    /**
     * Find zero or one AdminAction that matches the filter.
     * @param {AdminActionFindUniqueArgs} args - Arguments to find a AdminAction
     * @example
     * // Get one AdminAction
     * const adminAction = await prisma.adminAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminActionFindUniqueArgs>(args: SelectSubset<T, AdminActionFindUniqueArgs<ExtArgs>>): Prisma__AdminActionClient<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminActionFindUniqueOrThrowArgs} args - Arguments to find a AdminAction
     * @example
     * // Get one AdminAction
     * const adminAction = await prisma.adminAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminActionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminActionClient<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActionFindFirstArgs} args - Arguments to find a AdminAction
     * @example
     * // Get one AdminAction
     * const adminAction = await prisma.adminAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminActionFindFirstArgs>(args?: SelectSubset<T, AdminActionFindFirstArgs<ExtArgs>>): Prisma__AdminActionClient<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActionFindFirstOrThrowArgs} args - Arguments to find a AdminAction
     * @example
     * // Get one AdminAction
     * const adminAction = await prisma.adminAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminActionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminActionClient<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminActions
     * const adminActions = await prisma.adminAction.findMany()
     * 
     * // Get first 10 AdminActions
     * const adminActions = await prisma.adminAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminActionWithIdOnly = await prisma.adminAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminActionFindManyArgs>(args?: SelectSubset<T, AdminActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminAction.
     * @param {AdminActionCreateArgs} args - Arguments to create a AdminAction.
     * @example
     * // Create one AdminAction
     * const AdminAction = await prisma.adminAction.create({
     *   data: {
     *     // ... data to create a AdminAction
     *   }
     * })
     * 
     */
    create<T extends AdminActionCreateArgs>(args: SelectSubset<T, AdminActionCreateArgs<ExtArgs>>): Prisma__AdminActionClient<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminActions.
     * @param {AdminActionCreateManyArgs} args - Arguments to create many AdminActions.
     * @example
     * // Create many AdminActions
     * const adminAction = await prisma.adminAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminActionCreateManyArgs>(args?: SelectSubset<T, AdminActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminActions and returns the data saved in the database.
     * @param {AdminActionCreateManyAndReturnArgs} args - Arguments to create many AdminActions.
     * @example
     * // Create many AdminActions
     * const adminAction = await prisma.adminAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminActions and only return the `id`
     * const adminActionWithIdOnly = await prisma.adminAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminActionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminAction.
     * @param {AdminActionDeleteArgs} args - Arguments to delete one AdminAction.
     * @example
     * // Delete one AdminAction
     * const AdminAction = await prisma.adminAction.delete({
     *   where: {
     *     // ... filter to delete one AdminAction
     *   }
     * })
     * 
     */
    delete<T extends AdminActionDeleteArgs>(args: SelectSubset<T, AdminActionDeleteArgs<ExtArgs>>): Prisma__AdminActionClient<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminAction.
     * @param {AdminActionUpdateArgs} args - Arguments to update one AdminAction.
     * @example
     * // Update one AdminAction
     * const adminAction = await prisma.adminAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminActionUpdateArgs>(args: SelectSubset<T, AdminActionUpdateArgs<ExtArgs>>): Prisma__AdminActionClient<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminActions.
     * @param {AdminActionDeleteManyArgs} args - Arguments to filter AdminActions to delete.
     * @example
     * // Delete a few AdminActions
     * const { count } = await prisma.adminAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminActionDeleteManyArgs>(args?: SelectSubset<T, AdminActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminActions
     * const adminAction = await prisma.adminAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminActionUpdateManyArgs>(args: SelectSubset<T, AdminActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminActions and returns the data updated in the database.
     * @param {AdminActionUpdateManyAndReturnArgs} args - Arguments to update many AdminActions.
     * @example
     * // Update many AdminActions
     * const adminAction = await prisma.adminAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminActions and only return the `id`
     * const adminActionWithIdOnly = await prisma.adminAction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminActionUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminAction.
     * @param {AdminActionUpsertArgs} args - Arguments to update or create a AdminAction.
     * @example
     * // Update or create a AdminAction
     * const adminAction = await prisma.adminAction.upsert({
     *   create: {
     *     // ... data to create a AdminAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminAction we want to update
     *   }
     * })
     */
    upsert<T extends AdminActionUpsertArgs>(args: SelectSubset<T, AdminActionUpsertArgs<ExtArgs>>): Prisma__AdminActionClient<$Result.GetResult<Prisma.$AdminActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActionCountArgs} args - Arguments to filter AdminActions to count.
     * @example
     * // Count the number of AdminActions
     * const count = await prisma.adminAction.count({
     *   where: {
     *     // ... the filter for the AdminActions we want to count
     *   }
     * })
    **/
    count<T extends AdminActionCountArgs>(
      args?: Subset<T, AdminActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminActionAggregateArgs>(args: Subset<T, AdminActionAggregateArgs>): Prisma.PrismaPromise<GetAdminActionAggregateType<T>>

    /**
     * Group by AdminAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActionGroupByArgs} args - Group by arguments.
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
      T extends AdminActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminActionGroupByArgs['orderBy'] }
        : { orderBy?: AdminActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminAction model
   */
  readonly fields: AdminActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdminAction model
   */
  interface AdminActionFieldRefs {
    readonly id: FieldRef<"AdminAction", 'String'>
    readonly adminId: FieldRef<"AdminAction", 'String'>
    readonly action: FieldRef<"AdminAction", 'String'>
    readonly targetType: FieldRef<"AdminAction", 'String'>
    readonly targetId: FieldRef<"AdminAction", 'String'>
    readonly before: FieldRef<"AdminAction", 'Json'>
    readonly after: FieldRef<"AdminAction", 'Json'>
    readonly createdAt: FieldRef<"AdminAction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminAction findUnique
   */
  export type AdminActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * Filter, which AdminAction to fetch.
     */
    where: AdminActionWhereUniqueInput
  }

  /**
   * AdminAction findUniqueOrThrow
   */
  export type AdminActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * Filter, which AdminAction to fetch.
     */
    where: AdminActionWhereUniqueInput
  }

  /**
   * AdminAction findFirst
   */
  export type AdminActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * Filter, which AdminAction to fetch.
     */
    where?: AdminActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActions to fetch.
     */
    orderBy?: AdminActionOrderByWithRelationInput | AdminActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActions.
     */
    cursor?: AdminActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActions.
     */
    distinct?: AdminActionScalarFieldEnum | AdminActionScalarFieldEnum[]
  }

  /**
   * AdminAction findFirstOrThrow
   */
  export type AdminActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * Filter, which AdminAction to fetch.
     */
    where?: AdminActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActions to fetch.
     */
    orderBy?: AdminActionOrderByWithRelationInput | AdminActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActions.
     */
    cursor?: AdminActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActions.
     */
    distinct?: AdminActionScalarFieldEnum | AdminActionScalarFieldEnum[]
  }

  /**
   * AdminAction findMany
   */
  export type AdminActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * Filter, which AdminActions to fetch.
     */
    where?: AdminActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActions to fetch.
     */
    orderBy?: AdminActionOrderByWithRelationInput | AdminActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminActions.
     */
    cursor?: AdminActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActions.
     */
    skip?: number
    distinct?: AdminActionScalarFieldEnum | AdminActionScalarFieldEnum[]
  }

  /**
   * AdminAction create
   */
  export type AdminActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminAction.
     */
    data: XOR<AdminActionCreateInput, AdminActionUncheckedCreateInput>
  }

  /**
   * AdminAction createMany
   */
  export type AdminActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminActions.
     */
    data: AdminActionCreateManyInput | AdminActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAction createManyAndReturn
   */
  export type AdminActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * The data used to create many AdminActions.
     */
    data: AdminActionCreateManyInput | AdminActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminAction update
   */
  export type AdminActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminAction.
     */
    data: XOR<AdminActionUpdateInput, AdminActionUncheckedUpdateInput>
    /**
     * Choose, which AdminAction to update.
     */
    where: AdminActionWhereUniqueInput
  }

  /**
   * AdminAction updateMany
   */
  export type AdminActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminActions.
     */
    data: XOR<AdminActionUpdateManyMutationInput, AdminActionUncheckedUpdateManyInput>
    /**
     * Filter which AdminActions to update
     */
    where?: AdminActionWhereInput
    /**
     * Limit how many AdminActions to update.
     */
    limit?: number
  }

  /**
   * AdminAction updateManyAndReturn
   */
  export type AdminActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * The data used to update AdminActions.
     */
    data: XOR<AdminActionUpdateManyMutationInput, AdminActionUncheckedUpdateManyInput>
    /**
     * Filter which AdminActions to update
     */
    where?: AdminActionWhereInput
    /**
     * Limit how many AdminActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminAction upsert
   */
  export type AdminActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminAction to update in case it exists.
     */
    where: AdminActionWhereUniqueInput
    /**
     * In case the AdminAction found by the `where` argument doesn't exist, create a new AdminAction with this data.
     */
    create: XOR<AdminActionCreateInput, AdminActionUncheckedCreateInput>
    /**
     * In case the AdminAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminActionUpdateInput, AdminActionUncheckedUpdateInput>
  }

  /**
   * AdminAction delete
   */
  export type AdminActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
    /**
     * Filter which AdminAction to delete.
     */
    where: AdminActionWhereUniqueInput
  }

  /**
   * AdminAction deleteMany
   */
  export type AdminActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActions to delete
     */
    where?: AdminActionWhereInput
    /**
     * Limit how many AdminActions to delete.
     */
    limit?: number
  }

  /**
   * AdminAction without action
   */
  export type AdminActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAction
     */
    select?: AdminActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAction
     */
    omit?: AdminActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActionInclude<ExtArgs> | null
  }


  /**
   * Model Discussion
   */

  export type AggregateDiscussion = {
    _count: DiscussionCountAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  export type DiscussionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    content: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscussionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    content: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscussionCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    content: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiscussionMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    content?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscussionMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    content?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscussionCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    content?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiscussionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussion to aggregate.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discussions
    **/
    _count?: true | DiscussionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionMaxAggregateInputType
  }

  export type GetDiscussionAggregateType<T extends DiscussionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussion[P]>
      : GetScalarType<T[P], AggregateDiscussion[P]>
  }




  export type DiscussionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithAggregationInput | DiscussionOrderByWithAggregationInput[]
    by: DiscussionScalarFieldEnum[] | DiscussionScalarFieldEnum
    having?: DiscussionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionCountAggregateInputType | true
    _min?: DiscussionMinAggregateInputType
    _max?: DiscussionMaxAggregateInputType
  }

  export type DiscussionGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    content: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DiscussionCountAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  type GetDiscussionGroupByPayload<T extends DiscussionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    content?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    parent?: boolean | Discussion$parentArgs<ExtArgs>
    replies?: boolean | Discussion$repliesArgs<ExtArgs>
    _count?: boolean | DiscussionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    content?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    parent?: boolean | Discussion$parentArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    content?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    parent?: boolean | Discussion$parentArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    content?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiscussionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "content" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["discussion"]>
  export type DiscussionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    parent?: boolean | Discussion$parentArgs<ExtArgs>
    replies?: boolean | Discussion$repliesArgs<ExtArgs>
    _count?: boolean | DiscussionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscussionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    parent?: boolean | Discussion$parentArgs<ExtArgs>
  }
  export type DiscussionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    parent?: boolean | Discussion$parentArgs<ExtArgs>
  }

  export type $DiscussionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discussion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      parent: Prisma.$DiscussionPayload<ExtArgs> | null
      replies: Prisma.$DiscussionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      content: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["discussion"]>
    composites: {}
  }

  type DiscussionGetPayload<S extends boolean | null | undefined | DiscussionDefaultArgs> = $Result.GetResult<Prisma.$DiscussionPayload, S>

  type DiscussionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionCountAggregateInputType | true
    }

  export interface DiscussionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discussion'], meta: { name: 'Discussion' } }
    /**
     * Find zero or one Discussion that matches the filter.
     * @param {DiscussionFindUniqueArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionFindUniqueArgs>(args: SelectSubset<T, DiscussionFindUniqueArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discussion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionFindUniqueOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionFindFirstArgs>(args?: SelectSubset<T, DiscussionFindFirstArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discussions
     * const discussions = await prisma.discussion.findMany()
     * 
     * // Get first 10 Discussions
     * const discussions = await prisma.discussion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discussionWithIdOnly = await prisma.discussion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscussionFindManyArgs>(args?: SelectSubset<T, DiscussionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discussion.
     * @param {DiscussionCreateArgs} args - Arguments to create a Discussion.
     * @example
     * // Create one Discussion
     * const Discussion = await prisma.discussion.create({
     *   data: {
     *     // ... data to create a Discussion
     *   }
     * })
     * 
     */
    create<T extends DiscussionCreateArgs>(args: SelectSubset<T, DiscussionCreateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discussions.
     * @param {DiscussionCreateManyArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionCreateManyArgs>(args?: SelectSubset<T, DiscussionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discussions and returns the data saved in the database.
     * @param {DiscussionCreateManyAndReturnArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discussions and only return the `id`
     * const discussionWithIdOnly = await prisma.discussion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscussionCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscussionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discussion.
     * @param {DiscussionDeleteArgs} args - Arguments to delete one Discussion.
     * @example
     * // Delete one Discussion
     * const Discussion = await prisma.discussion.delete({
     *   where: {
     *     // ... filter to delete one Discussion
     *   }
     * })
     * 
     */
    delete<T extends DiscussionDeleteArgs>(args: SelectSubset<T, DiscussionDeleteArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discussion.
     * @param {DiscussionUpdateArgs} args - Arguments to update one Discussion.
     * @example
     * // Update one Discussion
     * const discussion = await prisma.discussion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionUpdateArgs>(args: SelectSubset<T, DiscussionUpdateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discussions.
     * @param {DiscussionDeleteManyArgs} args - Arguments to filter Discussions to delete.
     * @example
     * // Delete a few Discussions
     * const { count } = await prisma.discussion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionDeleteManyArgs>(args?: SelectSubset<T, DiscussionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionUpdateManyArgs>(args: SelectSubset<T, DiscussionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions and returns the data updated in the database.
     * @param {DiscussionUpdateManyAndReturnArgs} args - Arguments to update many Discussions.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discussions and only return the `id`
     * const discussionWithIdOnly = await prisma.discussion.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscussionUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscussionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discussion.
     * @param {DiscussionUpsertArgs} args - Arguments to update or create a Discussion.
     * @example
     * // Update or create a Discussion
     * const discussion = await prisma.discussion.upsert({
     *   create: {
     *     // ... data to create a Discussion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discussion we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionUpsertArgs>(args: SelectSubset<T, DiscussionUpsertArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionCountArgs} args - Arguments to filter Discussions to count.
     * @example
     * // Count the number of Discussions
     * const count = await prisma.discussion.count({
     *   where: {
     *     // ... the filter for the Discussions we want to count
     *   }
     * })
    **/
    count<T extends DiscussionCountArgs>(
      args?: Subset<T, DiscussionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscussionAggregateArgs>(args: Subset<T, DiscussionAggregateArgs>): Prisma.PrismaPromise<GetDiscussionAggregateType<T>>

    /**
     * Group by Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionGroupByArgs} args - Group by arguments.
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
      T extends DiscussionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscussionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discussion model
   */
  readonly fields: DiscussionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discussion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Discussion$parentArgs<ExtArgs> = {}>(args?: Subset<T, Discussion$parentArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Discussion$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Discussion$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Discussion model
   */
  interface DiscussionFieldRefs {
    readonly id: FieldRef<"Discussion", 'String'>
    readonly userId: FieldRef<"Discussion", 'String'>
    readonly questionId: FieldRef<"Discussion", 'String'>
    readonly content: FieldRef<"Discussion", 'String'>
    readonly parentId: FieldRef<"Discussion", 'String'>
    readonly createdAt: FieldRef<"Discussion", 'DateTime'>
    readonly updatedAt: FieldRef<"Discussion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discussion findUnique
   */
  export type DiscussionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findUniqueOrThrow
   */
  export type DiscussionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findFirst
   */
  export type DiscussionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findFirstOrThrow
   */
  export type DiscussionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findMany
   */
  export type DiscussionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion create
   */
  export type DiscussionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The data needed to create a Discussion.
     */
    data: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
  }

  /**
   * Discussion createMany
   */
  export type DiscussionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discussion createManyAndReturn
   */
  export type DiscussionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discussion update
   */
  export type DiscussionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The data needed to update a Discussion.
     */
    data: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
    /**
     * Choose, which Discussion to update.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion updateMany
   */
  export type DiscussionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
  }

  /**
   * Discussion updateManyAndReturn
   */
  export type DiscussionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discussion upsert
   */
  export type DiscussionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The filter to search for the Discussion to update in case it exists.
     */
    where: DiscussionWhereUniqueInput
    /**
     * In case the Discussion found by the `where` argument doesn't exist, create a new Discussion with this data.
     */
    create: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
    /**
     * In case the Discussion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
  }

  /**
   * Discussion delete
   */
  export type DiscussionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter which Discussion to delete.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion deleteMany
   */
  export type DiscussionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussions to delete
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to delete.
     */
    limit?: number
  }

  /**
   * Discussion.parent
   */
  export type Discussion$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    where?: DiscussionWhereInput
  }

  /**
   * Discussion.replies
   */
  export type Discussion$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    cursor?: DiscussionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion without action
   */
  export type DiscussionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionRating
   */

  export type AggregateQuestionRating = {
    _count: QuestionRatingCountAggregateOutputType | null
    _avg: QuestionRatingAvgAggregateOutputType | null
    _sum: QuestionRatingSumAggregateOutputType | null
    _min: QuestionRatingMinAggregateOutputType | null
    _max: QuestionRatingMaxAggregateOutputType | null
  }

  export type QuestionRatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type QuestionRatingSumAggregateOutputType = {
    rating: number | null
  }

  export type QuestionRatingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type QuestionRatingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type QuestionRatingCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    rating: number
    createdAt: number
    _all: number
  }


  export type QuestionRatingAvgAggregateInputType = {
    rating?: true
  }

  export type QuestionRatingSumAggregateInputType = {
    rating?: true
  }

  export type QuestionRatingMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    rating?: true
    createdAt?: true
  }

  export type QuestionRatingMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    rating?: true
    createdAt?: true
  }

  export type QuestionRatingCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionRating to aggregate.
     */
    where?: QuestionRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionRatings to fetch.
     */
    orderBy?: QuestionRatingOrderByWithRelationInput | QuestionRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionRatings
    **/
    _count?: true | QuestionRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionRatingMaxAggregateInputType
  }

  export type GetQuestionRatingAggregateType<T extends QuestionRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionRating[P]>
      : GetScalarType<T[P], AggregateQuestionRating[P]>
  }




  export type QuestionRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionRatingWhereInput
    orderBy?: QuestionRatingOrderByWithAggregationInput | QuestionRatingOrderByWithAggregationInput[]
    by: QuestionRatingScalarFieldEnum[] | QuestionRatingScalarFieldEnum
    having?: QuestionRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionRatingCountAggregateInputType | true
    _avg?: QuestionRatingAvgAggregateInputType
    _sum?: QuestionRatingSumAggregateInputType
    _min?: QuestionRatingMinAggregateInputType
    _max?: QuestionRatingMaxAggregateInputType
  }

  export type QuestionRatingGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    rating: number
    createdAt: Date
    _count: QuestionRatingCountAggregateOutputType | null
    _avg: QuestionRatingAvgAggregateOutputType | null
    _sum: QuestionRatingSumAggregateOutputType | null
    _min: QuestionRatingMinAggregateOutputType | null
    _max: QuestionRatingMaxAggregateOutputType | null
  }

  type GetQuestionRatingGroupByPayload<T extends QuestionRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionRatingGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionRatingGroupByOutputType[P]>
        }
      >
    >


  export type QuestionRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionRating"]>

  export type QuestionRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionRating"]>

  export type QuestionRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionRating"]>

  export type QuestionRatingSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type QuestionRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "rating" | "createdAt", ExtArgs["result"]["questionRating"]>
  export type QuestionRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuestionRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuestionRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $QuestionRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionRating"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      rating: number
      createdAt: Date
    }, ExtArgs["result"]["questionRating"]>
    composites: {}
  }

  type QuestionRatingGetPayload<S extends boolean | null | undefined | QuestionRatingDefaultArgs> = $Result.GetResult<Prisma.$QuestionRatingPayload, S>

  type QuestionRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionRatingCountAggregateInputType | true
    }

  export interface QuestionRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionRating'], meta: { name: 'QuestionRating' } }
    /**
     * Find zero or one QuestionRating that matches the filter.
     * @param {QuestionRatingFindUniqueArgs} args - Arguments to find a QuestionRating
     * @example
     * // Get one QuestionRating
     * const questionRating = await prisma.questionRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionRatingFindUniqueArgs>(args: SelectSubset<T, QuestionRatingFindUniqueArgs<ExtArgs>>): Prisma__QuestionRatingClient<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionRatingFindUniqueOrThrowArgs} args - Arguments to find a QuestionRating
     * @example
     * // Get one QuestionRating
     * const questionRating = await prisma.questionRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionRatingClient<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionRatingFindFirstArgs} args - Arguments to find a QuestionRating
     * @example
     * // Get one QuestionRating
     * const questionRating = await prisma.questionRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionRatingFindFirstArgs>(args?: SelectSubset<T, QuestionRatingFindFirstArgs<ExtArgs>>): Prisma__QuestionRatingClient<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionRatingFindFirstOrThrowArgs} args - Arguments to find a QuestionRating
     * @example
     * // Get one QuestionRating
     * const questionRating = await prisma.questionRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionRatingClient<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionRatings
     * const questionRatings = await prisma.questionRating.findMany()
     * 
     * // Get first 10 QuestionRatings
     * const questionRatings = await prisma.questionRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionRatingWithIdOnly = await prisma.questionRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionRatingFindManyArgs>(args?: SelectSubset<T, QuestionRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionRating.
     * @param {QuestionRatingCreateArgs} args - Arguments to create a QuestionRating.
     * @example
     * // Create one QuestionRating
     * const QuestionRating = await prisma.questionRating.create({
     *   data: {
     *     // ... data to create a QuestionRating
     *   }
     * })
     * 
     */
    create<T extends QuestionRatingCreateArgs>(args: SelectSubset<T, QuestionRatingCreateArgs<ExtArgs>>): Prisma__QuestionRatingClient<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionRatings.
     * @param {QuestionRatingCreateManyArgs} args - Arguments to create many QuestionRatings.
     * @example
     * // Create many QuestionRatings
     * const questionRating = await prisma.questionRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionRatingCreateManyArgs>(args?: SelectSubset<T, QuestionRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionRatings and returns the data saved in the database.
     * @param {QuestionRatingCreateManyAndReturnArgs} args - Arguments to create many QuestionRatings.
     * @example
     * // Create many QuestionRatings
     * const questionRating = await prisma.questionRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionRatings and only return the `id`
     * const questionRatingWithIdOnly = await prisma.questionRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionRating.
     * @param {QuestionRatingDeleteArgs} args - Arguments to delete one QuestionRating.
     * @example
     * // Delete one QuestionRating
     * const QuestionRating = await prisma.questionRating.delete({
     *   where: {
     *     // ... filter to delete one QuestionRating
     *   }
     * })
     * 
     */
    delete<T extends QuestionRatingDeleteArgs>(args: SelectSubset<T, QuestionRatingDeleteArgs<ExtArgs>>): Prisma__QuestionRatingClient<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionRating.
     * @param {QuestionRatingUpdateArgs} args - Arguments to update one QuestionRating.
     * @example
     * // Update one QuestionRating
     * const questionRating = await prisma.questionRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionRatingUpdateArgs>(args: SelectSubset<T, QuestionRatingUpdateArgs<ExtArgs>>): Prisma__QuestionRatingClient<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionRatings.
     * @param {QuestionRatingDeleteManyArgs} args - Arguments to filter QuestionRatings to delete.
     * @example
     * // Delete a few QuestionRatings
     * const { count } = await prisma.questionRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionRatingDeleteManyArgs>(args?: SelectSubset<T, QuestionRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionRatings
     * const questionRating = await prisma.questionRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionRatingUpdateManyArgs>(args: SelectSubset<T, QuestionRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionRatings and returns the data updated in the database.
     * @param {QuestionRatingUpdateManyAndReturnArgs} args - Arguments to update many QuestionRatings.
     * @example
     * // Update many QuestionRatings
     * const questionRating = await prisma.questionRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionRatings and only return the `id`
     * const questionRatingWithIdOnly = await prisma.questionRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionRating.
     * @param {QuestionRatingUpsertArgs} args - Arguments to update or create a QuestionRating.
     * @example
     * // Update or create a QuestionRating
     * const questionRating = await prisma.questionRating.upsert({
     *   create: {
     *     // ... data to create a QuestionRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionRating we want to update
     *   }
     * })
     */
    upsert<T extends QuestionRatingUpsertArgs>(args: SelectSubset<T, QuestionRatingUpsertArgs<ExtArgs>>): Prisma__QuestionRatingClient<$Result.GetResult<Prisma.$QuestionRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionRatingCountArgs} args - Arguments to filter QuestionRatings to count.
     * @example
     * // Count the number of QuestionRatings
     * const count = await prisma.questionRating.count({
     *   where: {
     *     // ... the filter for the QuestionRatings we want to count
     *   }
     * })
    **/
    count<T extends QuestionRatingCountArgs>(
      args?: Subset<T, QuestionRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionRatingAggregateArgs>(args: Subset<T, QuestionRatingAggregateArgs>): Prisma.PrismaPromise<GetQuestionRatingAggregateType<T>>

    /**
     * Group by QuestionRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionRatingGroupByArgs} args - Group by arguments.
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
      T extends QuestionRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionRatingGroupByArgs['orderBy'] }
        : { orderBy?: QuestionRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionRating model
   */
  readonly fields: QuestionRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionRating model
   */
  interface QuestionRatingFieldRefs {
    readonly id: FieldRef<"QuestionRating", 'String'>
    readonly userId: FieldRef<"QuestionRating", 'String'>
    readonly questionId: FieldRef<"QuestionRating", 'String'>
    readonly rating: FieldRef<"QuestionRating", 'Int'>
    readonly createdAt: FieldRef<"QuestionRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionRating findUnique
   */
  export type QuestionRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * Filter, which QuestionRating to fetch.
     */
    where: QuestionRatingWhereUniqueInput
  }

  /**
   * QuestionRating findUniqueOrThrow
   */
  export type QuestionRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * Filter, which QuestionRating to fetch.
     */
    where: QuestionRatingWhereUniqueInput
  }

  /**
   * QuestionRating findFirst
   */
  export type QuestionRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * Filter, which QuestionRating to fetch.
     */
    where?: QuestionRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionRatings to fetch.
     */
    orderBy?: QuestionRatingOrderByWithRelationInput | QuestionRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionRatings.
     */
    cursor?: QuestionRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionRatings.
     */
    distinct?: QuestionRatingScalarFieldEnum | QuestionRatingScalarFieldEnum[]
  }

  /**
   * QuestionRating findFirstOrThrow
   */
  export type QuestionRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * Filter, which QuestionRating to fetch.
     */
    where?: QuestionRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionRatings to fetch.
     */
    orderBy?: QuestionRatingOrderByWithRelationInput | QuestionRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionRatings.
     */
    cursor?: QuestionRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionRatings.
     */
    distinct?: QuestionRatingScalarFieldEnum | QuestionRatingScalarFieldEnum[]
  }

  /**
   * QuestionRating findMany
   */
  export type QuestionRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * Filter, which QuestionRatings to fetch.
     */
    where?: QuestionRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionRatings to fetch.
     */
    orderBy?: QuestionRatingOrderByWithRelationInput | QuestionRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionRatings.
     */
    cursor?: QuestionRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionRatings.
     */
    skip?: number
    distinct?: QuestionRatingScalarFieldEnum | QuestionRatingScalarFieldEnum[]
  }

  /**
   * QuestionRating create
   */
  export type QuestionRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionRating.
     */
    data: XOR<QuestionRatingCreateInput, QuestionRatingUncheckedCreateInput>
  }

  /**
   * QuestionRating createMany
   */
  export type QuestionRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionRatings.
     */
    data: QuestionRatingCreateManyInput | QuestionRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionRating createManyAndReturn
   */
  export type QuestionRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionRatings.
     */
    data: QuestionRatingCreateManyInput | QuestionRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionRating update
   */
  export type QuestionRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionRating.
     */
    data: XOR<QuestionRatingUpdateInput, QuestionRatingUncheckedUpdateInput>
    /**
     * Choose, which QuestionRating to update.
     */
    where: QuestionRatingWhereUniqueInput
  }

  /**
   * QuestionRating updateMany
   */
  export type QuestionRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionRatings.
     */
    data: XOR<QuestionRatingUpdateManyMutationInput, QuestionRatingUncheckedUpdateManyInput>
    /**
     * Filter which QuestionRatings to update
     */
    where?: QuestionRatingWhereInput
    /**
     * Limit how many QuestionRatings to update.
     */
    limit?: number
  }

  /**
   * QuestionRating updateManyAndReturn
   */
  export type QuestionRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * The data used to update QuestionRatings.
     */
    data: XOR<QuestionRatingUpdateManyMutationInput, QuestionRatingUncheckedUpdateManyInput>
    /**
     * Filter which QuestionRatings to update
     */
    where?: QuestionRatingWhereInput
    /**
     * Limit how many QuestionRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionRating upsert
   */
  export type QuestionRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionRating to update in case it exists.
     */
    where: QuestionRatingWhereUniqueInput
    /**
     * In case the QuestionRating found by the `where` argument doesn't exist, create a new QuestionRating with this data.
     */
    create: XOR<QuestionRatingCreateInput, QuestionRatingUncheckedCreateInput>
    /**
     * In case the QuestionRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionRatingUpdateInput, QuestionRatingUncheckedUpdateInput>
  }

  /**
   * QuestionRating delete
   */
  export type QuestionRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
    /**
     * Filter which QuestionRating to delete.
     */
    where: QuestionRatingWhereUniqueInput
  }

  /**
   * QuestionRating deleteMany
   */
  export type QuestionRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionRatings to delete
     */
    where?: QuestionRatingWhereInput
    /**
     * Limit how many QuestionRatings to delete.
     */
    limit?: number
  }

  /**
   * QuestionRating without action
   */
  export type QuestionRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionRating
     */
    select?: QuestionRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionRating
     */
    omit?: QuestionRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionRatingInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    srn: 'srn',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    codeforcesHandle: 'codeforcesHandle',
    score: 'score'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    codeforcesId: 'codeforcesId',
    link: 'link',
    date: 'date',
    createdAt: 'createdAt',
    rating: 'rating',
    editorialUrl: 'editorialUrl'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    status: 'status',
    score: 'score',
    submittedAt: 'submittedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const AdminActionScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    before: 'before',
    after: 'after',
    createdAt: 'createdAt'
  };

  export type AdminActionScalarFieldEnum = (typeof AdminActionScalarFieldEnum)[keyof typeof AdminActionScalarFieldEnum]


  export const DiscussionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    content: 'content',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiscussionScalarFieldEnum = (typeof DiscussionScalarFieldEnum)[keyof typeof DiscussionScalarFieldEnum]


  export const QuestionRatingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type QuestionRatingScalarFieldEnum = (typeof QuestionRatingScalarFieldEnum)[keyof typeof QuestionRatingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    srn?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    codeforcesHandle?: StringNullableFilter<"User"> | string | null
    score?: IntFilter<"User"> | number
    submissions?: SubmissionListRelationFilter
    discussions?: DiscussionListRelationFilter
    ratings?: QuestionRatingListRelationFilter
    adminActions?: AdminActionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    srn?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    codeforcesHandle?: SortOrderInput | SortOrder
    score?: SortOrder
    submissions?: SubmissionOrderByRelationAggregateInput
    discussions?: DiscussionOrderByRelationAggregateInput
    ratings?: QuestionRatingOrderByRelationAggregateInput
    adminActions?: AdminActionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    srn?: string
    email?: string
    codeforcesHandle?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    score?: IntFilter<"User"> | number
    submissions?: SubmissionListRelationFilter
    discussions?: DiscussionListRelationFilter
    ratings?: QuestionRatingListRelationFilter
    adminActions?: AdminActionListRelationFilter
  }, "id" | "srn" | "email" | "codeforcesHandle">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    srn?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    codeforcesHandle?: SortOrderInput | SortOrder
    score?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    srn?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    codeforcesHandle?: StringNullableWithAggregatesFilter<"User"> | string | null
    score?: IntWithAggregatesFilter<"User"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    title?: StringFilter<"Question"> | string
    codeforcesId?: IntNullableFilter<"Question"> | number | null
    link?: StringNullableFilter<"Question"> | string | null
    date?: DateTimeFilter<"Question"> | Date | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    rating?: IntFilter<"Question"> | number
    editorialUrl?: StringNullableFilter<"Question"> | string | null
    submissions?: SubmissionListRelationFilter
    discussions?: DiscussionListRelationFilter
    ratings?: QuestionRatingListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    codeforcesId?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    editorialUrl?: SortOrderInput | SortOrder
    submissions?: SubmissionOrderByRelationAggregateInput
    discussions?: DiscussionOrderByRelationAggregateInput
    ratings?: QuestionRatingOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: Date | string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    codeforcesId?: IntNullableFilter<"Question"> | number | null
    link?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    rating?: IntFilter<"Question"> | number
    editorialUrl?: StringNullableFilter<"Question"> | string | null
    submissions?: SubmissionListRelationFilter
    discussions?: DiscussionListRelationFilter
    ratings?: QuestionRatingListRelationFilter
  }, "id" | "date">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    codeforcesId?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    editorialUrl?: SortOrderInput | SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    title?: StringWithAggregatesFilter<"Question"> | string
    codeforcesId?: IntNullableWithAggregatesFilter<"Question"> | number | null
    link?: StringNullableWithAggregatesFilter<"Question"> | string | null
    date?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    rating?: IntWithAggregatesFilter<"Question"> | number
    editorialUrl?: StringNullableWithAggregatesFilter<"Question"> | string | null
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    questionId?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    score?: IntFilter<"Submission"> | number
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_questionId?: SubmissionUserIdQuestionIdCompoundUniqueInput
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    questionId?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    score?: IntFilter<"Submission"> | number
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "userId_questionId">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    questionId?: StringWithAggregatesFilter<"Submission"> | string
    status?: EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus
    score?: IntWithAggregatesFilter<"Submission"> | number
    submittedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type AdminActionWhereInput = {
    AND?: AdminActionWhereInput | AdminActionWhereInput[]
    OR?: AdminActionWhereInput[]
    NOT?: AdminActionWhereInput | AdminActionWhereInput[]
    id?: StringFilter<"AdminAction"> | string
    adminId?: StringFilter<"AdminAction"> | string
    action?: StringFilter<"AdminAction"> | string
    targetType?: StringNullableFilter<"AdminAction"> | string | null
    targetId?: StringNullableFilter<"AdminAction"> | string | null
    before?: JsonNullableFilter<"AdminAction">
    after?: JsonNullableFilter<"AdminAction">
    createdAt?: DateTimeFilter<"AdminAction"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminActionOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type AdminActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminActionWhereInput | AdminActionWhereInput[]
    OR?: AdminActionWhereInput[]
    NOT?: AdminActionWhereInput | AdminActionWhereInput[]
    adminId?: StringFilter<"AdminAction"> | string
    action?: StringFilter<"AdminAction"> | string
    targetType?: StringNullableFilter<"AdminAction"> | string | null
    targetId?: StringNullableFilter<"AdminAction"> | string | null
    before?: JsonNullableFilter<"AdminAction">
    after?: JsonNullableFilter<"AdminAction">
    createdAt?: DateTimeFilter<"AdminAction"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminActionOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AdminActionCountOrderByAggregateInput
    _max?: AdminActionMaxOrderByAggregateInput
    _min?: AdminActionMinOrderByAggregateInput
  }

  export type AdminActionScalarWhereWithAggregatesInput = {
    AND?: AdminActionScalarWhereWithAggregatesInput | AdminActionScalarWhereWithAggregatesInput[]
    OR?: AdminActionScalarWhereWithAggregatesInput[]
    NOT?: AdminActionScalarWhereWithAggregatesInput | AdminActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminAction"> | string
    adminId?: StringWithAggregatesFilter<"AdminAction"> | string
    action?: StringWithAggregatesFilter<"AdminAction"> | string
    targetType?: StringNullableWithAggregatesFilter<"AdminAction"> | string | null
    targetId?: StringNullableWithAggregatesFilter<"AdminAction"> | string | null
    before?: JsonNullableWithAggregatesFilter<"AdminAction">
    after?: JsonNullableWithAggregatesFilter<"AdminAction">
    createdAt?: DateTimeWithAggregatesFilter<"AdminAction"> | Date | string
  }

  export type DiscussionWhereInput = {
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    id?: StringFilter<"Discussion"> | string
    userId?: StringFilter<"Discussion"> | string
    questionId?: StringFilter<"Discussion"> | string
    content?: StringFilter<"Discussion"> | string
    parentId?: StringNullableFilter<"Discussion"> | string | null
    createdAt?: DateTimeFilter<"Discussion"> | Date | string
    updatedAt?: DateTimeFilter<"Discussion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    parent?: XOR<DiscussionNullableScalarRelationFilter, DiscussionWhereInput> | null
    replies?: DiscussionListRelationFilter
  }

  export type DiscussionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    parent?: DiscussionOrderByWithRelationInput
    replies?: DiscussionOrderByRelationAggregateInput
  }

  export type DiscussionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    userId?: StringFilter<"Discussion"> | string
    questionId?: StringFilter<"Discussion"> | string
    content?: StringFilter<"Discussion"> | string
    parentId?: StringNullableFilter<"Discussion"> | string | null
    createdAt?: DateTimeFilter<"Discussion"> | Date | string
    updatedAt?: DateTimeFilter<"Discussion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    parent?: XOR<DiscussionNullableScalarRelationFilter, DiscussionWhereInput> | null
    replies?: DiscussionListRelationFilter
  }, "id">

  export type DiscussionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiscussionCountOrderByAggregateInput
    _max?: DiscussionMaxOrderByAggregateInput
    _min?: DiscussionMinOrderByAggregateInput
  }

  export type DiscussionScalarWhereWithAggregatesInput = {
    AND?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    OR?: DiscussionScalarWhereWithAggregatesInput[]
    NOT?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discussion"> | string
    userId?: StringWithAggregatesFilter<"Discussion"> | string
    questionId?: StringWithAggregatesFilter<"Discussion"> | string
    content?: StringWithAggregatesFilter<"Discussion"> | string
    parentId?: StringNullableWithAggregatesFilter<"Discussion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Discussion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Discussion"> | Date | string
  }

  export type QuestionRatingWhereInput = {
    AND?: QuestionRatingWhereInput | QuestionRatingWhereInput[]
    OR?: QuestionRatingWhereInput[]
    NOT?: QuestionRatingWhereInput | QuestionRatingWhereInput[]
    id?: StringFilter<"QuestionRating"> | string
    userId?: StringFilter<"QuestionRating"> | string
    questionId?: StringFilter<"QuestionRating"> | string
    rating?: IntFilter<"QuestionRating"> | number
    createdAt?: DateTimeFilter<"QuestionRating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type QuestionRatingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type QuestionRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_questionId?: QuestionRatingUserIdQuestionIdCompoundUniqueInput
    AND?: QuestionRatingWhereInput | QuestionRatingWhereInput[]
    OR?: QuestionRatingWhereInput[]
    NOT?: QuestionRatingWhereInput | QuestionRatingWhereInput[]
    userId?: StringFilter<"QuestionRating"> | string
    questionId?: StringFilter<"QuestionRating"> | string
    rating?: IntFilter<"QuestionRating"> | number
    createdAt?: DateTimeFilter<"QuestionRating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "userId_questionId">

  export type QuestionRatingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionRatingCountOrderByAggregateInput
    _avg?: QuestionRatingAvgOrderByAggregateInput
    _max?: QuestionRatingMaxOrderByAggregateInput
    _min?: QuestionRatingMinOrderByAggregateInput
    _sum?: QuestionRatingSumOrderByAggregateInput
  }

  export type QuestionRatingScalarWhereWithAggregatesInput = {
    AND?: QuestionRatingScalarWhereWithAggregatesInput | QuestionRatingScalarWhereWithAggregatesInput[]
    OR?: QuestionRatingScalarWhereWithAggregatesInput[]
    NOT?: QuestionRatingScalarWhereWithAggregatesInput | QuestionRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionRating"> | string
    userId?: StringWithAggregatesFilter<"QuestionRating"> | string
    questionId?: StringWithAggregatesFilter<"QuestionRating"> | string
    rating?: IntWithAggregatesFilter<"QuestionRating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuestionRating"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    ratings?: QuestionRatingCreateNestedManyWithoutUserInput
    adminActions?: AdminActionCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    ratings?: QuestionRatingUncheckedCreateNestedManyWithoutUserInput
    adminActions?: AdminActionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    ratings?: QuestionRatingUpdateManyWithoutUserNestedInput
    adminActions?: AdminActionUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: QuestionRatingUncheckedUpdateManyWithoutUserNestedInput
    adminActions?: AdminActionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
    submissions?: SubmissionCreateNestedManyWithoutQuestionInput
    discussions?: DiscussionCreateNestedManyWithoutQuestionInput
    ratings?: QuestionRatingCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutQuestionInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutQuestionInput
    ratings?: QuestionRatingUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUpdateManyWithoutQuestionNestedInput
    discussions?: DiscussionUpdateManyWithoutQuestionNestedInput
    ratings?: QuestionRatingUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutQuestionNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutQuestionNestedInput
    ratings?: QuestionRatingUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionCreateInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    question: QuestionCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActionCreateInput = {
    id?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutAdminActionsInput
  }

  export type AdminActionUncheckedCreateInput = {
    id?: string
    adminId: string
    action: string
    targetType?: string | null
    targetId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AdminActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutAdminActionsNestedInput
  }

  export type AdminActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActionCreateManyInput = {
    id?: string
    adminId: string
    action: string
    targetType?: string | null
    targetId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AdminActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDiscussionsInput
    question: QuestionCreateNestedOneWithoutDiscussionsInput
    parent?: DiscussionCreateNestedOneWithoutRepliesInput
    replies?: DiscussionCreateNestedManyWithoutParentInput
  }

  export type DiscussionUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    content: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: DiscussionUncheckedCreateNestedManyWithoutParentInput
  }

  export type DiscussionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutDiscussionsNestedInput
    parent?: DiscussionUpdateOneWithoutRepliesNestedInput
    replies?: DiscussionUpdateManyWithoutParentNestedInput
  }

  export type DiscussionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: DiscussionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type DiscussionCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    content: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscussionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionRatingCreateInput = {
    id?: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
    question: QuestionCreateNestedOneWithoutRatingsInput
  }

  export type QuestionRatingUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    rating: number
    createdAt?: Date | string
  }

  export type QuestionRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
    question?: QuestionUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type QuestionRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionRatingCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    rating: number
    createdAt?: Date | string
  }

  export type QuestionRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type DiscussionListRelationFilter = {
    every?: DiscussionWhereInput
    some?: DiscussionWhereInput
    none?: DiscussionWhereInput
  }

  export type QuestionRatingListRelationFilter = {
    every?: QuestionRatingWhereInput
    some?: QuestionRatingWhereInput
    none?: QuestionRatingWhereInput
  }

  export type AdminActionListRelationFilter = {
    every?: AdminActionWhereInput
    some?: AdminActionWhereInput
    none?: AdminActionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscussionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    srn?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    codeforcesHandle?: SortOrder
    score?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    srn?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    codeforcesHandle?: SortOrder
    score?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    srn?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    codeforcesHandle?: SortOrder
    score?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    score?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    codeforcesId?: SortOrder
    link?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    editorialUrl?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    codeforcesId?: SortOrder
    rating?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    codeforcesId?: SortOrder
    link?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    editorialUrl?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    codeforcesId?: SortOrder
    link?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    rating?: SortOrder
    editorialUrl?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    codeforcesId?: SortOrder
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type SubmissionUserIdQuestionIdCompoundUniqueInput = {
    userId: string
    questionId: string
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AdminActionCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    before?: SortOrder
    after?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminActionMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminActionMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DiscussionNullableScalarRelationFilter = {
    is?: DiscussionWhereInput | null
    isNot?: DiscussionWhereInput | null
  }

  export type DiscussionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscussionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscussionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionRatingUserIdQuestionIdCompoundUniqueInput = {
    userId: string
    questionId: string
  }

  export type QuestionRatingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type QuestionRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionRatingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionRatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type DiscussionCreateNestedManyWithoutUserInput = {
    create?: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput> | DiscussionCreateWithoutUserInput[] | DiscussionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutUserInput | DiscussionCreateOrConnectWithoutUserInput[]
    createMany?: DiscussionCreateManyUserInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type QuestionRatingCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionRatingCreateWithoutUserInput, QuestionRatingUncheckedCreateWithoutUserInput> | QuestionRatingCreateWithoutUserInput[] | QuestionRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionRatingCreateOrConnectWithoutUserInput | QuestionRatingCreateOrConnectWithoutUserInput[]
    createMany?: QuestionRatingCreateManyUserInputEnvelope
    connect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
  }

  export type AdminActionCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminActionCreateWithoutAdminInput, AdminActionUncheckedCreateWithoutAdminInput> | AdminActionCreateWithoutAdminInput[] | AdminActionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActionCreateOrConnectWithoutAdminInput | AdminActionCreateOrConnectWithoutAdminInput[]
    createMany?: AdminActionCreateManyAdminInputEnvelope
    connect?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type DiscussionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput> | DiscussionCreateWithoutUserInput[] | DiscussionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutUserInput | DiscussionCreateOrConnectWithoutUserInput[]
    createMany?: DiscussionCreateManyUserInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type QuestionRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionRatingCreateWithoutUserInput, QuestionRatingUncheckedCreateWithoutUserInput> | QuestionRatingCreateWithoutUserInput[] | QuestionRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionRatingCreateOrConnectWithoutUserInput | QuestionRatingCreateOrConnectWithoutUserInput[]
    createMany?: QuestionRatingCreateManyUserInputEnvelope
    connect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
  }

  export type AdminActionUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminActionCreateWithoutAdminInput, AdminActionUncheckedCreateWithoutAdminInput> | AdminActionCreateWithoutAdminInput[] | AdminActionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActionCreateOrConnectWithoutAdminInput | AdminActionCreateOrConnectWithoutAdminInput[]
    createMany?: AdminActionCreateManyAdminInputEnvelope
    connect?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type DiscussionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput> | DiscussionCreateWithoutUserInput[] | DiscussionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutUserInput | DiscussionCreateOrConnectWithoutUserInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutUserInput | DiscussionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiscussionCreateManyUserInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutUserInput | DiscussionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutUserInput | DiscussionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type QuestionRatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionRatingCreateWithoutUserInput, QuestionRatingUncheckedCreateWithoutUserInput> | QuestionRatingCreateWithoutUserInput[] | QuestionRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionRatingCreateOrConnectWithoutUserInput | QuestionRatingCreateOrConnectWithoutUserInput[]
    upsert?: QuestionRatingUpsertWithWhereUniqueWithoutUserInput | QuestionRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionRatingCreateManyUserInputEnvelope
    set?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    disconnect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    delete?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    connect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    update?: QuestionRatingUpdateWithWhereUniqueWithoutUserInput | QuestionRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionRatingUpdateManyWithWhereWithoutUserInput | QuestionRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionRatingScalarWhereInput | QuestionRatingScalarWhereInput[]
  }

  export type AdminActionUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminActionCreateWithoutAdminInput, AdminActionUncheckedCreateWithoutAdminInput> | AdminActionCreateWithoutAdminInput[] | AdminActionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActionCreateOrConnectWithoutAdminInput | AdminActionCreateOrConnectWithoutAdminInput[]
    upsert?: AdminActionUpsertWithWhereUniqueWithoutAdminInput | AdminActionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminActionCreateManyAdminInputEnvelope
    set?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
    disconnect?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
    delete?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
    connect?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
    update?: AdminActionUpdateWithWhereUniqueWithoutAdminInput | AdminActionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminActionUpdateManyWithWhereWithoutAdminInput | AdminActionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminActionScalarWhereInput | AdminActionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type DiscussionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput> | DiscussionCreateWithoutUserInput[] | DiscussionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutUserInput | DiscussionCreateOrConnectWithoutUserInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutUserInput | DiscussionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiscussionCreateManyUserInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutUserInput | DiscussionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutUserInput | DiscussionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type QuestionRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionRatingCreateWithoutUserInput, QuestionRatingUncheckedCreateWithoutUserInput> | QuestionRatingCreateWithoutUserInput[] | QuestionRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionRatingCreateOrConnectWithoutUserInput | QuestionRatingCreateOrConnectWithoutUserInput[]
    upsert?: QuestionRatingUpsertWithWhereUniqueWithoutUserInput | QuestionRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionRatingCreateManyUserInputEnvelope
    set?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    disconnect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    delete?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    connect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    update?: QuestionRatingUpdateWithWhereUniqueWithoutUserInput | QuestionRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionRatingUpdateManyWithWhereWithoutUserInput | QuestionRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionRatingScalarWhereInput | QuestionRatingScalarWhereInput[]
  }

  export type AdminActionUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminActionCreateWithoutAdminInput, AdminActionUncheckedCreateWithoutAdminInput> | AdminActionCreateWithoutAdminInput[] | AdminActionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActionCreateOrConnectWithoutAdminInput | AdminActionCreateOrConnectWithoutAdminInput[]
    upsert?: AdminActionUpsertWithWhereUniqueWithoutAdminInput | AdminActionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminActionCreateManyAdminInputEnvelope
    set?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
    disconnect?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
    delete?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
    connect?: AdminActionWhereUniqueInput | AdminActionWhereUniqueInput[]
    update?: AdminActionUpdateWithWhereUniqueWithoutAdminInput | AdminActionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminActionUpdateManyWithWhereWithoutAdminInput | AdminActionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminActionScalarWhereInput | AdminActionScalarWhereInput[]
  }

  export type SubmissionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<SubmissionCreateWithoutQuestionInput, SubmissionUncheckedCreateWithoutQuestionInput> | SubmissionCreateWithoutQuestionInput[] | SubmissionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuestionInput | SubmissionCreateOrConnectWithoutQuestionInput[]
    createMany?: SubmissionCreateManyQuestionInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type DiscussionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<DiscussionCreateWithoutQuestionInput, DiscussionUncheckedCreateWithoutQuestionInput> | DiscussionCreateWithoutQuestionInput[] | DiscussionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutQuestionInput | DiscussionCreateOrConnectWithoutQuestionInput[]
    createMany?: DiscussionCreateManyQuestionInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type QuestionRatingCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionRatingCreateWithoutQuestionInput, QuestionRatingUncheckedCreateWithoutQuestionInput> | QuestionRatingCreateWithoutQuestionInput[] | QuestionRatingUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionRatingCreateOrConnectWithoutQuestionInput | QuestionRatingCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionRatingCreateManyQuestionInputEnvelope
    connect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<SubmissionCreateWithoutQuestionInput, SubmissionUncheckedCreateWithoutQuestionInput> | SubmissionCreateWithoutQuestionInput[] | SubmissionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuestionInput | SubmissionCreateOrConnectWithoutQuestionInput[]
    createMany?: SubmissionCreateManyQuestionInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type DiscussionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<DiscussionCreateWithoutQuestionInput, DiscussionUncheckedCreateWithoutQuestionInput> | DiscussionCreateWithoutQuestionInput[] | DiscussionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutQuestionInput | DiscussionCreateOrConnectWithoutQuestionInput[]
    createMany?: DiscussionCreateManyQuestionInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type QuestionRatingUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionRatingCreateWithoutQuestionInput, QuestionRatingUncheckedCreateWithoutQuestionInput> | QuestionRatingCreateWithoutQuestionInput[] | QuestionRatingUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionRatingCreateOrConnectWithoutQuestionInput | QuestionRatingCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionRatingCreateManyQuestionInputEnvelope
    connect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubmissionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<SubmissionCreateWithoutQuestionInput, SubmissionUncheckedCreateWithoutQuestionInput> | SubmissionCreateWithoutQuestionInput[] | SubmissionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuestionInput | SubmissionCreateOrConnectWithoutQuestionInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutQuestionInput | SubmissionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: SubmissionCreateManyQuestionInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutQuestionInput | SubmissionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutQuestionInput | SubmissionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type DiscussionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<DiscussionCreateWithoutQuestionInput, DiscussionUncheckedCreateWithoutQuestionInput> | DiscussionCreateWithoutQuestionInput[] | DiscussionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutQuestionInput | DiscussionCreateOrConnectWithoutQuestionInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutQuestionInput | DiscussionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: DiscussionCreateManyQuestionInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutQuestionInput | DiscussionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutQuestionInput | DiscussionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type QuestionRatingUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionRatingCreateWithoutQuestionInput, QuestionRatingUncheckedCreateWithoutQuestionInput> | QuestionRatingCreateWithoutQuestionInput[] | QuestionRatingUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionRatingCreateOrConnectWithoutQuestionInput | QuestionRatingCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionRatingUpsertWithWhereUniqueWithoutQuestionInput | QuestionRatingUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionRatingCreateManyQuestionInputEnvelope
    set?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    disconnect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    delete?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    connect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    update?: QuestionRatingUpdateWithWhereUniqueWithoutQuestionInput | QuestionRatingUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionRatingUpdateManyWithWhereWithoutQuestionInput | QuestionRatingUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionRatingScalarWhereInput | QuestionRatingScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<SubmissionCreateWithoutQuestionInput, SubmissionUncheckedCreateWithoutQuestionInput> | SubmissionCreateWithoutQuestionInput[] | SubmissionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuestionInput | SubmissionCreateOrConnectWithoutQuestionInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutQuestionInput | SubmissionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: SubmissionCreateManyQuestionInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutQuestionInput | SubmissionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutQuestionInput | SubmissionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type DiscussionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<DiscussionCreateWithoutQuestionInput, DiscussionUncheckedCreateWithoutQuestionInput> | DiscussionCreateWithoutQuestionInput[] | DiscussionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutQuestionInput | DiscussionCreateOrConnectWithoutQuestionInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutQuestionInput | DiscussionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: DiscussionCreateManyQuestionInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutQuestionInput | DiscussionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutQuestionInput | DiscussionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type QuestionRatingUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionRatingCreateWithoutQuestionInput, QuestionRatingUncheckedCreateWithoutQuestionInput> | QuestionRatingCreateWithoutQuestionInput[] | QuestionRatingUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionRatingCreateOrConnectWithoutQuestionInput | QuestionRatingCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionRatingUpsertWithWhereUniqueWithoutQuestionInput | QuestionRatingUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionRatingCreateManyQuestionInputEnvelope
    set?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    disconnect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    delete?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    connect?: QuestionRatingWhereUniqueInput | QuestionRatingWhereUniqueInput[]
    update?: QuestionRatingUpdateWithWhereUniqueWithoutQuestionInput | QuestionRatingUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionRatingUpdateManyWithWhereWithoutQuestionInput | QuestionRatingUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionRatingScalarWhereInput | QuestionRatingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<QuestionCreateWithoutSubmissionsInput, QuestionUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutSubmissionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<QuestionCreateWithoutSubmissionsInput, QuestionUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutSubmissionsInput
    upsert?: QuestionUpsertWithoutSubmissionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutSubmissionsInput, QuestionUpdateWithoutSubmissionsInput>, QuestionUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserCreateNestedOneWithoutAdminActionsInput = {
    create?: XOR<UserCreateWithoutAdminActionsInput, UserUncheckedCreateWithoutAdminActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminActionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminActionsNestedInput = {
    create?: XOR<UserCreateWithoutAdminActionsInput, UserUncheckedCreateWithoutAdminActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminActionsInput
    upsert?: UserUpsertWithoutAdminActionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminActionsInput, UserUpdateWithoutAdminActionsInput>, UserUncheckedUpdateWithoutAdminActionsInput>
  }

  export type UserCreateNestedOneWithoutDiscussionsInput = {
    create?: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscussionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutDiscussionsInput = {
    create?: XOR<QuestionCreateWithoutDiscussionsInput, QuestionUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutDiscussionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type DiscussionCreateNestedOneWithoutRepliesInput = {
    create?: XOR<DiscussionCreateWithoutRepliesInput, DiscussionUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: DiscussionCreateOrConnectWithoutRepliesInput
    connect?: DiscussionWhereUniqueInput
  }

  export type DiscussionCreateNestedManyWithoutParentInput = {
    create?: XOR<DiscussionCreateWithoutParentInput, DiscussionUncheckedCreateWithoutParentInput> | DiscussionCreateWithoutParentInput[] | DiscussionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutParentInput | DiscussionCreateOrConnectWithoutParentInput[]
    createMany?: DiscussionCreateManyParentInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type DiscussionUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<DiscussionCreateWithoutParentInput, DiscussionUncheckedCreateWithoutParentInput> | DiscussionCreateWithoutParentInput[] | DiscussionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutParentInput | DiscussionCreateOrConnectWithoutParentInput[]
    createMany?: DiscussionCreateManyParentInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDiscussionsNestedInput = {
    create?: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscussionsInput
    upsert?: UserUpsertWithoutDiscussionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiscussionsInput, UserUpdateWithoutDiscussionsInput>, UserUncheckedUpdateWithoutDiscussionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutDiscussionsNestedInput = {
    create?: XOR<QuestionCreateWithoutDiscussionsInput, QuestionUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutDiscussionsInput
    upsert?: QuestionUpsertWithoutDiscussionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutDiscussionsInput, QuestionUpdateWithoutDiscussionsInput>, QuestionUncheckedUpdateWithoutDiscussionsInput>
  }

  export type DiscussionUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<DiscussionCreateWithoutRepliesInput, DiscussionUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: DiscussionCreateOrConnectWithoutRepliesInput
    upsert?: DiscussionUpsertWithoutRepliesInput
    disconnect?: DiscussionWhereInput | boolean
    delete?: DiscussionWhereInput | boolean
    connect?: DiscussionWhereUniqueInput
    update?: XOR<XOR<DiscussionUpdateToOneWithWhereWithoutRepliesInput, DiscussionUpdateWithoutRepliesInput>, DiscussionUncheckedUpdateWithoutRepliesInput>
  }

  export type DiscussionUpdateManyWithoutParentNestedInput = {
    create?: XOR<DiscussionCreateWithoutParentInput, DiscussionUncheckedCreateWithoutParentInput> | DiscussionCreateWithoutParentInput[] | DiscussionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutParentInput | DiscussionCreateOrConnectWithoutParentInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutParentInput | DiscussionUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: DiscussionCreateManyParentInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutParentInput | DiscussionUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutParentInput | DiscussionUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type DiscussionUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<DiscussionCreateWithoutParentInput, DiscussionUncheckedCreateWithoutParentInput> | DiscussionCreateWithoutParentInput[] | DiscussionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutParentInput | DiscussionCreateOrConnectWithoutParentInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutParentInput | DiscussionUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: DiscussionCreateManyParentInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutParentInput | DiscussionUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutParentInput | DiscussionUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutRatingsInput = {
    create?: XOR<QuestionCreateWithoutRatingsInput, QuestionUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutRatingsInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type QuestionUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<QuestionCreateWithoutRatingsInput, QuestionUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutRatingsInput
    upsert?: QuestionUpsertWithoutRatingsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutRatingsInput, QuestionUpdateWithoutRatingsInput>, QuestionUncheckedUpdateWithoutRatingsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
    question: QuestionCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiscussionCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutDiscussionsInput
    parent?: DiscussionCreateNestedOneWithoutRepliesInput
    replies?: DiscussionCreateNestedManyWithoutParentInput
  }

  export type DiscussionUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    content: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: DiscussionUncheckedCreateNestedManyWithoutParentInput
  }

  export type DiscussionCreateOrConnectWithoutUserInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput>
  }

  export type DiscussionCreateManyUserInputEnvelope = {
    data: DiscussionCreateManyUserInput | DiscussionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionRatingCreateWithoutUserInput = {
    id?: string
    rating: number
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutRatingsInput
  }

  export type QuestionRatingUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    rating: number
    createdAt?: Date | string
  }

  export type QuestionRatingCreateOrConnectWithoutUserInput = {
    where: QuestionRatingWhereUniqueInput
    create: XOR<QuestionRatingCreateWithoutUserInput, QuestionRatingUncheckedCreateWithoutUserInput>
  }

  export type QuestionRatingCreateManyUserInputEnvelope = {
    data: QuestionRatingCreateManyUserInput | QuestionRatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminActionCreateWithoutAdminInput = {
    id?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AdminActionUncheckedCreateWithoutAdminInput = {
    id?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AdminActionCreateOrConnectWithoutAdminInput = {
    where: AdminActionWhereUniqueInput
    create: XOR<AdminActionCreateWithoutAdminInput, AdminActionUncheckedCreateWithoutAdminInput>
  }

  export type AdminActionCreateManyAdminInputEnvelope = {
    data: AdminActionCreateManyAdminInput | AdminActionCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    questionId?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    score?: IntFilter<"Submission"> | number
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type DiscussionUpsertWithWhereUniqueWithoutUserInput = {
    where: DiscussionWhereUniqueInput
    update: XOR<DiscussionUpdateWithoutUserInput, DiscussionUncheckedUpdateWithoutUserInput>
    create: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput>
  }

  export type DiscussionUpdateWithWhereUniqueWithoutUserInput = {
    where: DiscussionWhereUniqueInput
    data: XOR<DiscussionUpdateWithoutUserInput, DiscussionUncheckedUpdateWithoutUserInput>
  }

  export type DiscussionUpdateManyWithWhereWithoutUserInput = {
    where: DiscussionScalarWhereInput
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyWithoutUserInput>
  }

  export type DiscussionScalarWhereInput = {
    AND?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
    OR?: DiscussionScalarWhereInput[]
    NOT?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
    id?: StringFilter<"Discussion"> | string
    userId?: StringFilter<"Discussion"> | string
    questionId?: StringFilter<"Discussion"> | string
    content?: StringFilter<"Discussion"> | string
    parentId?: StringNullableFilter<"Discussion"> | string | null
    createdAt?: DateTimeFilter<"Discussion"> | Date | string
    updatedAt?: DateTimeFilter<"Discussion"> | Date | string
  }

  export type QuestionRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionRatingWhereUniqueInput
    update: XOR<QuestionRatingUpdateWithoutUserInput, QuestionRatingUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionRatingCreateWithoutUserInput, QuestionRatingUncheckedCreateWithoutUserInput>
  }

  export type QuestionRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionRatingWhereUniqueInput
    data: XOR<QuestionRatingUpdateWithoutUserInput, QuestionRatingUncheckedUpdateWithoutUserInput>
  }

  export type QuestionRatingUpdateManyWithWhereWithoutUserInput = {
    where: QuestionRatingScalarWhereInput
    data: XOR<QuestionRatingUpdateManyMutationInput, QuestionRatingUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionRatingScalarWhereInput = {
    AND?: QuestionRatingScalarWhereInput | QuestionRatingScalarWhereInput[]
    OR?: QuestionRatingScalarWhereInput[]
    NOT?: QuestionRatingScalarWhereInput | QuestionRatingScalarWhereInput[]
    id?: StringFilter<"QuestionRating"> | string
    userId?: StringFilter<"QuestionRating"> | string
    questionId?: StringFilter<"QuestionRating"> | string
    rating?: IntFilter<"QuestionRating"> | number
    createdAt?: DateTimeFilter<"QuestionRating"> | Date | string
  }

  export type AdminActionUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminActionWhereUniqueInput
    update: XOR<AdminActionUpdateWithoutAdminInput, AdminActionUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminActionCreateWithoutAdminInput, AdminActionUncheckedCreateWithoutAdminInput>
  }

  export type AdminActionUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminActionWhereUniqueInput
    data: XOR<AdminActionUpdateWithoutAdminInput, AdminActionUncheckedUpdateWithoutAdminInput>
  }

  export type AdminActionUpdateManyWithWhereWithoutAdminInput = {
    where: AdminActionScalarWhereInput
    data: XOR<AdminActionUpdateManyMutationInput, AdminActionUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminActionScalarWhereInput = {
    AND?: AdminActionScalarWhereInput | AdminActionScalarWhereInput[]
    OR?: AdminActionScalarWhereInput[]
    NOT?: AdminActionScalarWhereInput | AdminActionScalarWhereInput[]
    id?: StringFilter<"AdminAction"> | string
    adminId?: StringFilter<"AdminAction"> | string
    action?: StringFilter<"AdminAction"> | string
    targetType?: StringNullableFilter<"AdminAction"> | string | null
    targetId?: StringNullableFilter<"AdminAction"> | string | null
    before?: JsonNullableFilter<"AdminAction">
    after?: JsonNullableFilter<"AdminAction">
    createdAt?: DateTimeFilter<"AdminAction"> | Date | string
  }

  export type SubmissionCreateWithoutQuestionInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutQuestionInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutQuestionInput, SubmissionUncheckedCreateWithoutQuestionInput>
  }

  export type SubmissionCreateManyQuestionInputEnvelope = {
    data: SubmissionCreateManyQuestionInput | SubmissionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type DiscussionCreateWithoutQuestionInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDiscussionsInput
    parent?: DiscussionCreateNestedOneWithoutRepliesInput
    replies?: DiscussionCreateNestedManyWithoutParentInput
  }

  export type DiscussionUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    content: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: DiscussionUncheckedCreateNestedManyWithoutParentInput
  }

  export type DiscussionCreateOrConnectWithoutQuestionInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutQuestionInput, DiscussionUncheckedCreateWithoutQuestionInput>
  }

  export type DiscussionCreateManyQuestionInputEnvelope = {
    data: DiscussionCreateManyQuestionInput | DiscussionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionRatingCreateWithoutQuestionInput = {
    id?: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type QuestionRatingUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    rating: number
    createdAt?: Date | string
  }

  export type QuestionRatingCreateOrConnectWithoutQuestionInput = {
    where: QuestionRatingWhereUniqueInput
    create: XOR<QuestionRatingCreateWithoutQuestionInput, QuestionRatingUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionRatingCreateManyQuestionInputEnvelope = {
    data: QuestionRatingCreateManyQuestionInput | QuestionRatingCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutQuestionInput, SubmissionUncheckedUpdateWithoutQuestionInput>
    create: XOR<SubmissionCreateWithoutQuestionInput, SubmissionUncheckedCreateWithoutQuestionInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutQuestionInput, SubmissionUncheckedUpdateWithoutQuestionInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutQuestionInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type DiscussionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: DiscussionWhereUniqueInput
    update: XOR<DiscussionUpdateWithoutQuestionInput, DiscussionUncheckedUpdateWithoutQuestionInput>
    create: XOR<DiscussionCreateWithoutQuestionInput, DiscussionUncheckedCreateWithoutQuestionInput>
  }

  export type DiscussionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: DiscussionWhereUniqueInput
    data: XOR<DiscussionUpdateWithoutQuestionInput, DiscussionUncheckedUpdateWithoutQuestionInput>
  }

  export type DiscussionUpdateManyWithWhereWithoutQuestionInput = {
    where: DiscussionScalarWhereInput
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionRatingUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionRatingWhereUniqueInput
    update: XOR<QuestionRatingUpdateWithoutQuestionInput, QuestionRatingUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionRatingCreateWithoutQuestionInput, QuestionRatingUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionRatingUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionRatingWhereUniqueInput
    data: XOR<QuestionRatingUpdateWithoutQuestionInput, QuestionRatingUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionRatingUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionRatingScalarWhereInput
    data: XOR<QuestionRatingUpdateManyMutationInput, QuestionRatingUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    ratings?: QuestionRatingCreateNestedManyWithoutUserInput
    adminActions?: AdminActionCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    ratings?: QuestionRatingUncheckedCreateNestedManyWithoutUserInput
    adminActions?: AdminActionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type QuestionCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
    discussions?: DiscussionCreateNestedManyWithoutQuestionInput
    ratings?: QuestionRatingCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
    discussions?: DiscussionUncheckedCreateNestedManyWithoutQuestionInput
    ratings?: QuestionRatingUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutSubmissionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutSubmissionsInput, QuestionUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    ratings?: QuestionRatingUpdateManyWithoutUserNestedInput
    adminActions?: AdminActionUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: QuestionRatingUncheckedUpdateManyWithoutUserNestedInput
    adminActions?: AdminActionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type QuestionUpsertWithoutSubmissionsInput = {
    update: XOR<QuestionUpdateWithoutSubmissionsInput, QuestionUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<QuestionCreateWithoutSubmissionsInput, QuestionUncheckedCreateWithoutSubmissionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutSubmissionsInput, QuestionUncheckedUpdateWithoutSubmissionsInput>
  }

  export type QuestionUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discussions?: DiscussionUpdateManyWithoutQuestionNestedInput
    ratings?: QuestionRatingUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discussions?: DiscussionUncheckedUpdateManyWithoutQuestionNestedInput
    ratings?: QuestionRatingUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutAdminActionsInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    ratings?: QuestionRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminActionsInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    ratings?: QuestionRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminActionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminActionsInput, UserUncheckedCreateWithoutAdminActionsInput>
  }

  export type UserUpsertWithoutAdminActionsInput = {
    update: XOR<UserUpdateWithoutAdminActionsInput, UserUncheckedUpdateWithoutAdminActionsInput>
    create: XOR<UserCreateWithoutAdminActionsInput, UserUncheckedCreateWithoutAdminActionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminActionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminActionsInput, UserUncheckedUpdateWithoutAdminActionsInput>
  }

  export type UserUpdateWithoutAdminActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    ratings?: QuestionRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: QuestionRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDiscussionsInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    ratings?: QuestionRatingCreateNestedManyWithoutUserInput
    adminActions?: AdminActionCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutDiscussionsInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    ratings?: QuestionRatingUncheckedCreateNestedManyWithoutUserInput
    adminActions?: AdminActionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutDiscussionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
  }

  export type QuestionCreateWithoutDiscussionsInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
    submissions?: SubmissionCreateNestedManyWithoutQuestionInput
    ratings?: QuestionRatingCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutDiscussionsInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutQuestionInput
    ratings?: QuestionRatingUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutDiscussionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutDiscussionsInput, QuestionUncheckedCreateWithoutDiscussionsInput>
  }

  export type DiscussionCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDiscussionsInput
    question: QuestionCreateNestedOneWithoutDiscussionsInput
    parent?: DiscussionCreateNestedOneWithoutRepliesInput
  }

  export type DiscussionUncheckedCreateWithoutRepliesInput = {
    id?: string
    userId: string
    questionId: string
    content: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscussionCreateOrConnectWithoutRepliesInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutRepliesInput, DiscussionUncheckedCreateWithoutRepliesInput>
  }

  export type DiscussionCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDiscussionsInput
    question: QuestionCreateNestedOneWithoutDiscussionsInput
    replies?: DiscussionCreateNestedManyWithoutParentInput
  }

  export type DiscussionUncheckedCreateWithoutParentInput = {
    id?: string
    userId: string
    questionId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: DiscussionUncheckedCreateNestedManyWithoutParentInput
  }

  export type DiscussionCreateOrConnectWithoutParentInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutParentInput, DiscussionUncheckedCreateWithoutParentInput>
  }

  export type DiscussionCreateManyParentInputEnvelope = {
    data: DiscussionCreateManyParentInput | DiscussionCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDiscussionsInput = {
    update: XOR<UserUpdateWithoutDiscussionsInput, UserUncheckedUpdateWithoutDiscussionsInput>
    create: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiscussionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiscussionsInput, UserUncheckedUpdateWithoutDiscussionsInput>
  }

  export type UserUpdateWithoutDiscussionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    ratings?: QuestionRatingUpdateManyWithoutUserNestedInput
    adminActions?: AdminActionUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutDiscussionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: QuestionRatingUncheckedUpdateManyWithoutUserNestedInput
    adminActions?: AdminActionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type QuestionUpsertWithoutDiscussionsInput = {
    update: XOR<QuestionUpdateWithoutDiscussionsInput, QuestionUncheckedUpdateWithoutDiscussionsInput>
    create: XOR<QuestionCreateWithoutDiscussionsInput, QuestionUncheckedCreateWithoutDiscussionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutDiscussionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutDiscussionsInput, QuestionUncheckedUpdateWithoutDiscussionsInput>
  }

  export type QuestionUpdateWithoutDiscussionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUpdateManyWithoutQuestionNestedInput
    ratings?: QuestionRatingUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutDiscussionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutQuestionNestedInput
    ratings?: QuestionRatingUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type DiscussionUpsertWithoutRepliesInput = {
    update: XOR<DiscussionUpdateWithoutRepliesInput, DiscussionUncheckedUpdateWithoutRepliesInput>
    create: XOR<DiscussionCreateWithoutRepliesInput, DiscussionUncheckedCreateWithoutRepliesInput>
    where?: DiscussionWhereInput
  }

  export type DiscussionUpdateToOneWithWhereWithoutRepliesInput = {
    where?: DiscussionWhereInput
    data: XOR<DiscussionUpdateWithoutRepliesInput, DiscussionUncheckedUpdateWithoutRepliesInput>
  }

  export type DiscussionUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutDiscussionsNestedInput
    parent?: DiscussionUpdateOneWithoutRepliesNestedInput
  }

  export type DiscussionUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionUpsertWithWhereUniqueWithoutParentInput = {
    where: DiscussionWhereUniqueInput
    update: XOR<DiscussionUpdateWithoutParentInput, DiscussionUncheckedUpdateWithoutParentInput>
    create: XOR<DiscussionCreateWithoutParentInput, DiscussionUncheckedCreateWithoutParentInput>
  }

  export type DiscussionUpdateWithWhereUniqueWithoutParentInput = {
    where: DiscussionWhereUniqueInput
    data: XOR<DiscussionUpdateWithoutParentInput, DiscussionUncheckedUpdateWithoutParentInput>
  }

  export type DiscussionUpdateManyWithWhereWithoutParentInput = {
    where: DiscussionScalarWhereInput
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyWithoutParentInput>
  }

  export type UserCreateWithoutRatingsInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    adminActions?: AdminActionCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: string
    srn: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    codeforcesHandle?: string | null
    score?: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    adminActions?: AdminActionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type QuestionCreateWithoutRatingsInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
    submissions?: SubmissionCreateNestedManyWithoutQuestionInput
    discussions?: DiscussionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutRatingsInput = {
    id?: string
    title: string
    codeforcesId?: number | null
    link?: string | null
    date: Date | string
    createdAt?: Date | string
    rating?: number
    editorialUrl?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutQuestionInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutRatingsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutRatingsInput, QuestionUncheckedCreateWithoutRatingsInput>
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    adminActions?: AdminActionUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    srn?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforcesHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    adminActions?: AdminActionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type QuestionUpsertWithoutRatingsInput = {
    update: XOR<QuestionUpdateWithoutRatingsInput, QuestionUncheckedUpdateWithoutRatingsInput>
    create: XOR<QuestionCreateWithoutRatingsInput, QuestionUncheckedCreateWithoutRatingsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutRatingsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutRatingsInput, QuestionUncheckedUpdateWithoutRatingsInput>
  }

  export type QuestionUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUpdateManyWithoutQuestionNestedInput
    discussions?: DiscussionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codeforcesId?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    editorialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutQuestionNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    questionId: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
  }

  export type DiscussionCreateManyUserInput = {
    id?: string
    questionId: string
    content: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionRatingCreateManyUserInput = {
    id?: string
    questionId: string
    rating: number
    createdAt?: Date | string
  }

  export type AdminActionCreateManyAdminInput = {
    id?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutDiscussionsNestedInput
    parent?: DiscussionUpdateOneWithoutRepliesNestedInput
    replies?: DiscussionUpdateManyWithoutParentNestedInput
  }

  export type DiscussionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: DiscussionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type DiscussionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionRatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type QuestionRatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionRatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActionUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActionUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActionUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyQuestionInput = {
    id?: string
    userId: string
    status?: $Enums.SubmissionStatus
    score?: number
    submittedAt?: Date | string
  }

  export type DiscussionCreateManyQuestionInput = {
    id?: string
    userId: string
    content: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionRatingCreateManyQuestionInput = {
    id?: string
    userId: string
    rating: number
    createdAt?: Date | string
  }

  export type SubmissionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    score?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput
    parent?: DiscussionUpdateOneWithoutRepliesNestedInput
    replies?: DiscussionUpdateManyWithoutParentNestedInput
  }

  export type DiscussionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: DiscussionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type DiscussionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionRatingUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type QuestionRatingUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionRatingUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionCreateManyParentInput = {
    id?: string
    userId: string
    questionId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscussionUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutDiscussionsNestedInput
    replies?: DiscussionUpdateManyWithoutParentNestedInput
  }

  export type DiscussionUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: DiscussionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type DiscussionUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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