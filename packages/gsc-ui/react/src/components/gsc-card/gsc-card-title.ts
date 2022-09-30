import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscCardTitle,
  Props,
} from '@gsc-ui/core/dist/components/gsc-card/gsc-card-title'

type RProps = ReactProps & Props

export const GscCardTitle = (props: RProps) => {
  const s = useSettings()
  const r = coreGscCardTitle(s, 'className')(props)

  return r(h, [props.children])
}
export const gscCardTitle = h(GscCardTitle)
