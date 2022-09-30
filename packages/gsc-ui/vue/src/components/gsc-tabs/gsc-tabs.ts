import {
  Events,
  coreGscTabs,
  Slots,
} from '@gsc-ui/core/dist/components/gsc-tabs/gsc-tabs'
import { h } from '../../utils'
import { defineComponent, reactive } from 'vue'
import { slots } from '../../utils/slots'
import { useSettings } from '../gsc-settings/providables'
import { keys } from '@gsc/utils'

export const props = () => ({})

export const GscTabs = defineComponent({
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const s = useSettings()

    const events: Events<Event> = {
      onClick: (e) => {
        ctx.emit('click', e)
      },
    }

    const slotKeys = keys(ctx.slots).map((s) => String(s))
    let _slots: Slots<any>

    slotKeys.forEach((s) => {
      const isContent = s.endsWith('-content')
      const isTitle = s.endsWith('-title')
      let id: string
      if (isContent) {
        id = s.replace('-content', '')
      } else if (isTitle) {
        id = s.replace('-title', '')
      } else {
        return
      }

      const key = isContent ? 'content' : 'title'

      if (!_slots.tabs[id]) {
        // @ts-ignore
        _slots.tabs[id] = {}
      }

      _slots.tabs[id][key] = ctxSlots(s)
    })

    const state = reactive({
      activeTab: '',
    })

    const activateTab = (id: string) => {
      state.activeTab = id
    }

    const r = coreGscTabs(s)(props, events, state, { activateTab })

    return () => r(h, _slots)
  },
})
export const gscTabs = h(GscTabs)
