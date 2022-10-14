import {
  coreGscAccordionItem,
  Events,
  Slots,
} from '@gsc-ui/core/dist/components/gsc-accordion/gsc-accordion-item'
import { h } from '../../utils'
import { defineComponent, reactive } from 'vue'
import { slots } from '../../utils/slots'
import { useSettings } from '../gsc-settings/providables'
import { names } from '@gsc-ui/core/dist/components/gsc-accordion/names'

export const props = () =>
  ({
    idPrefix: {
      type: String,
      required: true,
    },
  } as const)

export const GscAccordionItem = defineComponent({
  name: names['gsc-accordion-item'],
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()
    const defaultSlot = ctxSlots('default')

    const state = reactive({ show: false })
    const setShow = (s: boolean) => (state.show = s)

    const events: Events<Event> = {
      onClick: (e) => {
        ctx.emit('click', e)
      },
    }

    const _slots: Slots<any> = { title: ctxSlots('title') }

    return () =>
      coreGscAccordionItem(s)(props, events, state, { setShow })(
        h,
        defaultSlot(),
        _slots
      )
  },
})
export const gscAccordionItem = h(GscAccordionItem)
