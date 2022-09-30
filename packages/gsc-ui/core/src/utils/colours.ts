export const colours = [
  'primary',
  'secondary',
  'tertiary',
  'black',
  'white',
  'light',
  'dark',
  'success',
  'danger',
  'warning',
] as const
export type Colours = typeof colours
export type Colour = Colours[number]
