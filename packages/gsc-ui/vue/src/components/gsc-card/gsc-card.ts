import { defineComponent, PropType } from 'vue'
import { coreGscCard } from '@gsc-ui/core/dist/components/gsc-card/gsc-card'
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

export const GscCard = defineComponent({
  name: names['gsc-card'],
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()

    const defaultSlot = ctxSlots('default')

    return () => coreGscCard(s)(props)(h, defaultSlot())
  },
})

export const gscCard = h(GscCard)
