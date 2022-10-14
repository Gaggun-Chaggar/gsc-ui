import {
  coreGscAlert,
  Props,
} from '@gsc-ui/core/dist/components/gsc-alert/gsc-alert'
import { ReactProps } from '../../types'
import { useSettings } from '../gsc-settings/providables'
import { h } from '../../utils/index'

export type RProps = ReactProps & Props

export const GscAlert = (props: RProps) => {
  const s = useSettings()

  const r = coreGscAlert(s, 'className')

  return r(props)(h, props.children)
}

export const gscAlert = h(GscAlert)
