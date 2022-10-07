import { coreGscAccordion } from '@gsc-ui/core/dist/components/gsc-accordion/gsc-accordion'
import { h } from '../../utils'
import { defineComponent } from 'vue'
import { slots } from '../../utils/slots'
import { useSettings } from '../gsc-settings/providables'

export const GscAccordion = defineComponent({
  setup(_, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()
    const defaultSlot = ctxSlots('default')

    return () => coreGscAccordion(s)()(h, defaultSlot())
  },
})
export const gscAccordion = h(GscAccordion)
