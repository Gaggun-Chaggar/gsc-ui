import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscCardHeader,
  Props,
} from '@gsc-ui/core/dist/components/gsc-card/gsc-card-header'

type RProps = ReactProps & Props

export const GscCardHeader = (props: RProps) => {
  const s = useSettings()
  const r = coreGscCardHeader(s, 'className')(props)

  return r(h, [props.children])
}
export const gscCardHeader = h(GscCardHeader)
