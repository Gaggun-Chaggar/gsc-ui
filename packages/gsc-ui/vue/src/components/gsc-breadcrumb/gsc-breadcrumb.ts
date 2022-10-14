import { defineComponent, PropType } from 'vue'
import { names } from '@gsc-ui/core/dist/components/gsc-breadcrumb/names'
import {
  Props,
  coreGscBreadcrumb,
} from '@gsc-ui/core/dist/components/gsc-breadcrumb/gsc-breadcrumb'
import { useSettings } from '../gsc-settings/providables'
import { h } from '../../utils'

export const props = () =>
  ({
    links: {
      type: Array as PropType<Props['links']>,
      required: true,
    },
  } as const)

export const GscBreadcrumb = defineComponent({
  name: names['gsc-breadcrumb'],
  props: props(),
  setup(props) {
    const s = useSettings()

    return () => coreGscBreadcrumb(s)(props)(h)
  },
})

export const gscBreadcrumb = h(GscBreadcrumb)
