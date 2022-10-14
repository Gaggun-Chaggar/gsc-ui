import { defineComponent, PropType } from 'vue'
import { coreGscCardHeader } from '@gsc-ui/core/dist/components/gsc-card/gsc-card-header'
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

export const GscCardHeader = defineComponent({
  name: names['gsc-card-header'],
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()

    const defaultSlot = ctxSlots('default')

    return () => coreGscCardHeader(s)(props)(h, defaultSlot())
  },
})

export const gscCardHeader = h(GscCardHeader)
