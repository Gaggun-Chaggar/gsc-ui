import { defineComponent, PropType, h } from 'vue'
import { coreGscAlert } from '@gsc-ui/core/dist/components/gsc-alert/gsc-alert'
import { useSettings } from '../gsc-settings/providables'
import { slots } from '../../utils/slots'
import { names } from '@gsc-ui/core/dist/components/gsc-alert/names'

export const props = () => ({
  tag: String as PropType<string>,
})

export const GscAlert = defineComponent({
  name: names['gsc-alert'],
  props: props(),
  setup(props, ctx) {
    const s = useSettings()
    const ctxSlots = slots(ctx)
    const defaultSlot = ctxSlots('default')

    return () => coreGscAlert(s)(props)(h, defaultSlot())
  },
})

export const gscAlert = h(GscAlert)
