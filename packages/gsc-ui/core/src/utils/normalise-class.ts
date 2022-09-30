import { isArray, isString, isObject, entries } from '@gsc/utils'

type ClassObject = Record<string, boolean>
type ClassArray = (string | ClassObject | ClassArray | undefined | false)[]

export const normaliseClass = (
  cls: ClassObject | ClassArray | string | false | undefined
): string => {
  if (isString(cls)) {
    return cls
  }

  if (isArray(cls)) {
    return cls
      .map((c) => normaliseClass(c))
      .join(' ')
      .trim()
  }

  if (isObject(cls)) {
    return entries(cls)
      .map(([c, v]) => (v ? c : undefined))
      .filter(Boolean)
      .join(' ')
      .trim()
  }

  return ''
}
