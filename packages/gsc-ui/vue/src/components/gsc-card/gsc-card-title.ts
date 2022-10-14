import { defineComponent, PropType } from 'vue'
import { coreGscCardTitle } from '@gsc-ui/core/dist/components/gsc-card/gsc-card-title'
import { Colour } from '@gsc-ui/core/dist/utils/colours'
import { slots } from '../../utils/slots'
import { h } from '../../utils'
import { useSettings } from '../gsc-settings/providables'
import { names } from '@gsc-ui/core/dist/components/gsc-card/names'

export const props = () => ({
  bg: String as PropType<Colour>,
  fg: String as PropType<Colour>,
  tag: String,
})

export const GscCardTitle = defineComponent({
  name: names['gsc-card-title'],
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()

    const defaultSlot = ctxSlots('default')

    return () => coreGscCardTitle(s)(props)(h, defaultSlot())
  },
})

export const gscCardTitle = h(GscCardTitle)
