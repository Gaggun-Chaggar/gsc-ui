import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscCardFooter,
  Props,
} from '@gsc-ui/core/dist/components/gsc-card/gsc-card-footer'

type RProps = ReactProps & Props

export const GscCardFooter = (props: RProps) => {
  const s = useSettings()
  const r = coreGscCardFooter(s, 'className')(props)

  return r(h, [props.children])
}
export const gscCardFooter = h(GscCardFooter)
