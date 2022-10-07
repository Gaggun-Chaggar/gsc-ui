import { names as a_names } from './gsc-accordion/names'
import { names as b_names } from './gsc-button/names'
import { names as c_names } from './gsc-card/names'
import { names as t_names } from './gsc-tabs/names'

export const names = {
  ...a_names,
  ...b_names,
  ...c_names,
  ...t_names,
} as const
