import { isFunction } from './inspect'

export const from = Array.from

export const arrayIncludes = <T>(array: T[], value: T) =>
  array.indexOf(value) !== -1

export const concat = <T>(...args: (T[] | T)[]): T[] =>
  Array.prototype.concat.apply([], args)

export const createArray = <T, R>(
  length: number,
  fillFn: (value: T, index: number, array: T[]) => R
) => {
  const mapFn = isFunction(fillFn) ? fillFn : () => fillFn
  return new Array(length).map(mapFn)
}

export const flatten = <T>(array: (T[] | T)[]): T[] =>
  array.reduce((result: T[], item) => concat(result, item), [])

export const flattenDeep = <T>(array: Array<T | T[] | Array<T | T[]>>): T[] =>
  array.reduce(
    (result: T[], item) =>
      concat(result, Array.isArray(item) ? flattenDeep(item) : <T>item),
    []
  )

export const toMap = <T>(array: T[], key: keyof T) => {
  const res: any = {}

  for (let i = 0, length = array.length; i < length; i++) {
    const val = array[i] as T
    res[val[key]] = val
  }

  return res as Record<keyof any, T>
}
