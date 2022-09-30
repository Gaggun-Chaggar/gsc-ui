import { create } from './object'

export const memoize = <P extends any[], R>(fn: (...args: [...P]) => R) => {
  const cache = create(null)

  return (...args: [...P]) => {
    const argsKey = JSON.stringify(args)
    return (cache[argsKey] = cache[argsKey] || fn.apply(null, args))
  }
}
