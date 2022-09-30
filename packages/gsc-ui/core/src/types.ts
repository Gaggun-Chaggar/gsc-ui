export type ToListOfType<
  A extends readonly any[],
  T extends string,
  K extends string,
  V extends Record<T, any>
> = V[T] extends true ? `${K}--${A[number]}` : never

export type ArrayToSelfReferringRecord<T extends string[]> = {
  [K in T[number]]: K extends T[number] ? K : never
}
export type ArrayToStringRecord<T extends string[]> = {
  [K in T[number]]: string
}
