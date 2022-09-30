export const extendedPositions = [
  'bottom-left',
  'bottom-right',
  'top-left',
  'top-right',
] as const
export type ExtendedPositions = typeof extendedPositions
export type ExtendedPosition = ExtendedPositions[number]
