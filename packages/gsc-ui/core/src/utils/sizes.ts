export const sizes = ['sm', 'md', 'lg', 'xl'] as const
export type Sizes = typeof sizes
export type Size = Sizes[number]
