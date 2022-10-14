import { defineComponent, PropType } from 'vue'
import { coreGscCardBody } from '@gsc-ui/core/dist/components/gsc-card/gsc-card-body'
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

export const GscCardBody = defineComponent({
  name: names['gsc-card-body'],
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()

    const defaultSlot = ctxSlots('default')

    return () => coreGscCardBody(s)(props)(h, defaultSlot())
  },
})

export const gscCardBody = h(GscCardBody)
