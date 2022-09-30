import { isObject } from './inspect'

// --- Static ---

export const assign = Object.assign
export const create = Object.create
export const defineProperties = Object.defineProperties
export const defineProperty = Object.defineProperty
export const freeze = Object.freeze
export const getOwnPropertyNames = Object.getOwnPropertyNames
export const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
export const getOwnPropertySymbols = Object.getOwnPropertySymbols
export const getPrototypeOf = Object.getPrototypeOf
export const is = Object.is
export const isFrozen = Object.isFrozen
export const keys = <T>(obj: T) => Object.keys(obj) as (keyof T)[]
export const values = <T>(obj: T) => Object.values(obj) as T[keyof T][]
export const entries = <T>(obj: T) =>
  Object.entries(obj) as [keyof T, T[keyof T]][]

// --- "Instance" ---

export const hasOwnProperty = <K extends keyof T, T>(
  obj: Record<K, T>,
  prop: K
) => Object.prototype.hasOwnProperty.call(obj, prop)
export const toString = (obj: any) => Object.prototype.toString.call(obj)

// --- Utilities ---

// Shallow copy an object
export const clone = <T>(obj: T) => ({ ...obj })

// Return a shallow copy of object with the specified properties only
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc
export const pick = <K extends keyof T, T>(obj: T, props: K[]): Pick<T, K> =>
  keys(obj)
    .filter((key) => props.indexOf(key as K) !== -1)
    .reduce((result: any, key) => ({ ...result, [key]: obj[key] }), {})

// Return a shallow copy of object with the specified properties omitted
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc
export const omit = <K extends keyof T, T>(obj: T, props: K[]): Omit<T, K> =>
  keys(obj)
    .filter((key) => props.indexOf(key as K) === -1)
    .reduce((result: any, key) => ({ ...result, [key]: obj[key] }), {})

// Merges two object deeply together
// See: https://gist.github.com/Salakar/1d7137de9cb8b704e48a
export const mergeDeep = <T, U>(target: T, source: U): target is T & U => {
  const targetAsRes: T & U = target as T & U
  if (isObject(target) && isObject(source)) {
    keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!targetAsRes[key] || !isObject(targetAsRes[key])) {
          //@ts-ignore
          target[key] = source[key]
        }
        mergeDeep(targetAsRes[key], source[key])
      } else {
        assign(target, { [key]: source[key] })
      }
    })
  }
  return true
}

// Returns a shallow copy of the object with keys in sorted order
export const sortKeys = <T>(obj: T): T =>
  keys(obj)
    .sort()
    .reduce((result: any, key) => ({ ...result, [key]: obj[key] }), {})
