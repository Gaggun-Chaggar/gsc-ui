export type Maybe<T> = T | undefined | null

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}
