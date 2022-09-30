import { isArray, isPlainObject } from './inspect'
import { keys } from './object'

export const cloneDeep = <T>(obj: T, defaultValue = obj): T => {
  if (isArray(obj)) {
    return obj.reduce((result, val) => [...result, cloneDeep(val, val)], [])
  }

  if (isPlainObject(obj)) {
    return keys(obj).reduce(
      (result: any, key) => ({
        ...result,
        [key]: cloneDeep(obj[key], obj[key]),
      }),
      {}
    )
  }
  return defaultValue
}
