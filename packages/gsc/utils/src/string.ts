export const capitalizeFirstLetter = <T extends string>(
  str: T
): Capitalize<T> => {
  if (str.length === 0) return str as Capitalize<T>

  return (str.charAt(0).toUpperCase() +
    str.slice(1, str.length)) as Capitalize<T>
}

export const lowerFirstLetter = (str: string) => {
  if (str.length === 0) return str

  return str.charAt(0).toLowerCase() + str.slice(1, str.length)
}

export const camelToKebabCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
