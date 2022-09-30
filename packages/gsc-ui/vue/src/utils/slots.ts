import { SetupContext } from 'vue'

export const slots =
  (ctx: SetupContext) =>
  (name: string) =>
  (...args: any[]) => {
    const slot = ctx.slots[name]

    if (!slot) {
      return undefined
    }

    return slot(...args)
  }
