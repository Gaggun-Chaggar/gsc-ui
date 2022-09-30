export const positions = ['bottom', 'top', 'left', 'right'] as const
export type Positions = typeof positions
export type Position = Positions[number]
