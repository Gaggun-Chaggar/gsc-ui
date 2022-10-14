import { Colour, Size } from '@gsc-ui/core'
import {
  Events,
  coreGscButton,
} from '@gsc-ui/core/dist/components/gsc-button/gsc-button'
import { h } from '../../utils'
import { defineComponent, PropType } from 'vue'
import { slots } from '../../utils/slots'
import { useSettings } from '../gsc-settings/providables'
import { names } from '@gsc-ui/core/dist/components/gsc-button/names'

export const props = () => ({
  size: String as PropType<Size>,
  radius: String as PropType<Size>,
  bg: String as PropType<Colour>,
  fg: String as PropType<Colour>,
  disabled: Boolean,
})

export const GscButton = defineComponent({
  name: names['gsc-button'],
  props: props(),
  setup(props, ctx) {
    const s = useSettings()
    const ctxSlots = slots(ctx)
    const defaultSlot = ctxSlots('default')

    const events: Events<Event> = {
      onClick: (e) => {
        ctx.emit('click', e)
      },
    }

    return () => coreGscButton(s)(props, events)(h, defaultSlot())
  },
})
export const gscButton = h(GscButton)
