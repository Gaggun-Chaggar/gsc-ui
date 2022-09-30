import { defineComponent, PropType } from 'vue'
import { coreGscCardSubtitle } from '@gsc-ui/core/dist/components/gsc-card/gsc-card-subtitle'
import { Colour } from '@gsc-ui/core/dist/utils/colours'
import { slots } from '../../utils/slots'
import { h } from '../../utils'
import { useSettings } from '../gsc-settings/providables'

export const props = () => ({
  bg: String as PropType<Colour>,
  fg: String as PropType<Colour>,
  tag: String,
})

export const GscCardSubtitle = defineComponent({
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()

    const defaultSlot = ctxSlots('default')

    const r = coreGscCardSubtitle(s)(props)

    return r(h, defaultSlot())
  },
})

export const gscCardSubtitle = h(GscCardSubtitle)
