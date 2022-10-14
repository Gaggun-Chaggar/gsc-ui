import { defineComponent, PropType } from 'vue'
import { coreGscCardFooter } from '@gsc-ui/core/dist/components/gsc-card/gsc-card-footer'
import { Colour } from '@gsc-ui/core/dist/utils/colours'
import { slots } from '../../utils/slots'
import { h } from '../../utils'
import { useSettings } from '../gsc-settings/providables'
import { names } from '@gsc-ui/core/dist/components/gsc-card/names'

export const props = () =>
  ({
    bg: String as PropType<Colour>,
    fg: String as PropType<Colour>,
    tag: String,
  } as const)

export const GscCardFooter = defineComponent({
  name: names['gsc-card-footer'],
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()

    const defaultSlot = ctxSlots('default')

    return () => coreGscCardFooter(s)(props)(h, defaultSlot())
  },
})

export const gscCardFooter = h(GscCardFooter)
