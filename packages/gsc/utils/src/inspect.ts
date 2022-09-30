import { RX_NUMBER } from './helpers/regex'
import { File } from './helpers/safe-types'

// --- Convenience inspection utilities ---

export const toType = <T>(value: T) => typeof value

export const toRawType = <T>(value: T) =>
  Object.prototype.toString.call(value).slice(8, -1)

export const toRawTypeLC = <T>(value: T) => toRawType(value).toLowerCase()

export const isUndefined = (value: any): value is undefined =>
  value === undefined

export const isNull = (value: any): value is null => value === null

export const isEmptyString = (value: any): value is '' => value === ''

export const isUndefinedOrNull = (value: any): value is null | undefined =>
  isUndefined(value) || isNull(value)

export const isUndefinedOrNullOrEmpty = (
  value: any
): value is null | undefined | '' =>
  isUndefinedOrNull(value) || isEmptyString(value)

export const isFunction = (value: any): value is Function =>
  toType(value) === 'function'

export const isBoolean = (value: any): value is boolean =>
  toType(value) === 'boolean'

export const isString = (value: any): value is string =>
  toType(value) === 'string'

export const isNumber = (value: any): value is number =>
  toType(value) === 'number'

export const isNumeric = (value: any): value is string =>
  RX_NUMBER.test(String(value))

export const isPrimitive = (value: any): value is string | boolean | number =>
  isBoolean(value) || isString(value) || isNumber(value)

export const isArray = Array.isArray

// Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.
export const isObject = (obj: any) => obj !== null && typeof obj === 'object'

// Strict object type check
// Only returns true for plain JavaScript objects
export const isPlainObject = (obj: any) =>
  Object.prototype.toString.call(obj) === '[object Object]'

export const isDate = (value: any): value is Date => value instanceof Date

export const isEvent = (value: any): value is Event => value instanceof Event

export const isFile = (value: any): value is File => value instanceof File

export const isRegExp = (value: any): value is RegExp =>
  toRawType(value) === 'RegExp'

export const isPromise = <T>(value: any): value is Promise<T> =>
  !isUndefinedOrNull(value) && isFunction(value.then) && isFunction(value.catch)
