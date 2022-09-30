import { hasOwnProperty, keys } from './object'
import { isArray, isDate, isObject } from './inspect'

// Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)
const compareArrays = <T, U>(a: T[], b: U[]): boolean => {
  if (a.length !== b.length) {
    return false
  }

  let equal = true
  for (let i = 0, length = a.length; equal && i < length; i++) {
    equal = looseEqual(a[i], b[i])
  }
  return equal
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */
export const looseEqual = (a: any, b: any): b is typeof a => {
  if (a === b) {
    return true
  }
  if (isDate(a) || isDate(b)) {
    return isDate(a) && isDate(b) ? a.getTime() === b.getTime() : false
  }

  if (isArray(a) || isArray(b)) {
    return isArray(a) && isArray(b) ? compareArrays(a, b) : false
  }
  const aValidType = isObject(a)
  const bValidType = isObject(b)
  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false
    }
    const aKeysCount = keys(a).length
    const bKeysCount = keys(b).length
    if (aKeysCount !== bKeysCount) {
      return false
    }
    for (const key of keys(a)) {
      const aHasKey = hasOwnProperty<any, any>(a, key)
      const bHasKey = hasOwnProperty<any, any>(b, key)
      if (
        (aHasKey && !bHasKey) ||
        (!aHasKey && bHasKey) ||
        !looseEqual(a[key], b[key])
      ) {
        return false
      }
    }
  }
  return String(a) === String(b)
}
