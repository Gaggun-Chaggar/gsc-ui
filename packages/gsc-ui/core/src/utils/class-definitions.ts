import { colours, Colours } from './colours'
import { extendedPositions, ExtendedPositions } from './extended-positions'
import { positions, Positions } from './positions'
import { sizes, Sizes } from './sizes'
import { ArrayToSelfReferringRecord, ToListOfType } from '../types'
import { entries, PartialRecord } from '@gsc/utils'

export type ExtensionOptions = {
  colour: boolean
  size: boolean
  position: boolean
  self: boolean
  extendedPosition: boolean
}

export const baseClasses = {
  shadow: {
    position: false,
    size: true,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  border: {
    position: false,
    size: true,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'border-left': {
    position: false,
    size: true,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'border-right': {
    position: false,
    size: true,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'border-bottom': {
    position: false,
    size: true,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'border-top': {
    position: false,
    size: true,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  radius: {
    colour: false,
    position: false,
    size: true,
    self: true,
    extendedPosition: false,
  },
  bg: {
    size: false,
    position: false,
    colour: true,
    self: false,
    extendedPosition: false,
  },
  fg: {
    size: false,
    position: false,
    colour: true,
    self: false,
    extendedPosition: false,
  },
  btn: {
    position: false,
    size: true,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'btn-group': {
    size: true,
    colour: true,
    position: false,
    self: true,
    extendedPosition: false,
  },
  'btn-disabled': {
    colour: false,
    size: false,
    position: false,
    self: true,
    extendedPosition: false,
  },
  card: {
    position: false,
    colour: true,
    size: false,
    self: true,
    extendedPosition: false,
  },
  'card-body': {
    size: false,
    position: false,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'card-header': {
    size: false,
    position: false,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'card-footer': {
    size: false,
    position: false,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'card-title': {
    size: false,
    position: false,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'card-subtitle': {
    size: false,
    position: false,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'card-text': {
    size: false,
    position: false,
    colour: true,
    self: true,
    extendedPosition: false,
  },
  'card-img': {
    colour: false,
    size: false,
    position: true,
    self: true,
    extendedPosition: false,
  },
  tabs: {
    colour: false,
    size: false,
    position: false,
    self: true,
    extendedPosition: false,
  },
  'tab-list': {
    colour: false,
    size: false,
    position: false,
    self: true,
    extendedPosition: false,
  },
  'tab-item': {
    colour: false,
    size: false,
    position: false,
    self: true,
    extendedPosition: false,
  },
  'tab-item--active': {
    colour: false,
    size: false,
    position: false,
    self: true,
    extendedPosition: false,
  },
  'tab-content': {
    colour: false,
    size: false,
    position: false,
    self: true,
    extendedPosition: false,
  },
  tooltip: {
    colour: false,
    size: false,
    position: true,
    self: false,
    extendedPosition: true,
  },
} as const
export type BaseClasses = typeof baseClasses

type ToSelf<
  K extends string,
  V extends ExtensionOptions
> = V['self'] extends true ? K : never

type ToPositions<K extends string, V extends ExtensionOptions> = ToListOfType<
  Positions,
  'position',
  K,
  V
>
type ToExtendedPositions<
  K extends string,
  V extends ExtensionOptions
> = ToListOfType<ExtendedPositions, 'extendedPosition', K, V>
type ToSizes<K extends string, V extends ExtensionOptions> = ToListOfType<
  Sizes,
  'size',
  K,
  V
>
type ToColours<K extends string, V extends ExtensionOptions> = ToListOfType<
  Colours,
  'colour',
  K,
  V
>
type ToAllVariables<K extends string, V extends ExtensionOptions> =
  | ToSelf<K, V>
  | ToSizes<K, V>
  | ToPositions<K, V>
  | ToColours<K, V>
  | ToExtendedPositions<K, V>

type RecordToUnionValue<R extends Record<string, ExtensionOptions>> = {
  [K in keyof R]: K extends string ? ToAllVariables<K, R[K]> : never
}
type RecordToArray<R extends Record<string, ExtensionOptions>> =
  RecordToUnionValue<R>[keyof R]

export const append =
  <K extends string>(k: K) =>
  <V extends string>(v: V): `${K}--${V}` =>
    `${k}--${v}`

export const classList = entries(baseClasses).flatMap(([k, v]) => {
  const appendToK = append(k)

  const classes = []

  if (v.colour) {
    classes.push(...colours.map(appendToK))
  }

  if (v.self) {
    classes.push(k)
  }

  if (v.size) {
    classes.push(...sizes.map(appendToK))
  }

  if (v.position) {
    classes.push(...positions.map(appendToK))
  }

  if (v.extendedPosition) {
    classes.push(...extendedPositions.map(appendToK))
  }

  return classes
}) as RecordToArray<BaseClasses>[]

export type ClassList = typeof classList
export type Classes = ClassList[number]

export const classMap = classList.reduce(
  (a, b) => ({ ...a, b }),
  {}
) as ArrayToSelfReferringRecord<RecordToArray<BaseClasses>[]>

export type DefaultClassMap = typeof classMap
export type ClassMap = Record<ClassList[number], string>
export type PartialClassMap = PartialRecord<ClassList[number], string>
