import { ReactProps } from '../../types/index'
import {
  coreGscBreadcrumb,
  Props,
} from '@gsc-ui/core/dist/components/gsc-breadcrumb/gsc-breadcrumb'
import { useSettings } from '../gsc-settings/providables'
import { h } from '../../utils'

export type RProps = ReactProps & Props

export const GscBreadcrumb = (props: RProps) => {
  const s = useSettings()
  const r = coreGscBreadcrumb(s, 'className')
  return r(props)(h)
}

export const gscBreadcrumb = h(GscBreadcrumb)
