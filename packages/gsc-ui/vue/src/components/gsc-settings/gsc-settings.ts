import { computed, defineComponent, PropType, provide } from 'vue'
import { ClassMap, createSettings } from '@gsc-ui/core'
import { SETTINGS } from './providables'
import { slots } from '../../utils/slots'

export const props = () =>
  ({
    classes: {
      default: () => ({}),
      type: Object as PropType<ClassMap>,
    },
  } as const)

export const GscSettings = defineComponent({
  name: 'gsc-settings',
  props: props(),
  setup(props, ctx) {
    const ctxSlots = slots(ctx)
    const defaultSlot = ctxSlots('default')

    const settings = computed(() => createSettings(props.classes))

    provide(SETTINGS, settings)

    return defaultSlot
  },
})
