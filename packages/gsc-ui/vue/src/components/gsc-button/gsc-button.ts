import { Colour, Size } from '@gsc-ui/core'
import {
  Events,
  coreGscButton,
} from '@gsc-ui/core/dist/components/gsc-button/gsc-button'
import { h } from '../../utils'
import { defineComponent, PropType } from 'vue'
import { slots } from '../../utils/slots'
import { useSettings } from '../gsc-settings/providables'

export const props = () => ({
  size: String as PropType<Size>,
  radius: String as PropType<Size>,
  bg: String as PropType<Colour>,
  fg: String as PropType<Colour>,
  disabled: Boolean,
})

export const GscButton = defineComponent({
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()
    const defaultSlot = ctxSlots('default')

    const events: Events<Event> = {
      onClick: (e) => {
        ctx.emit('click', e)
      },
    }

    const r = coreGscButton(s)(props, events)

    return () => r(h, defaultSlot())
  },
})
export const gscButton = h(GscButton)
