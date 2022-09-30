import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscCardSubtitle,
  Props,
} from '@gsc-ui/core/dist/components/gsc-card/gsc-card-subtitle'

type RProps = ReactProps & Props

export const GscCardSubtitle = (props: RProps) => {
  const s = useSettings()
  const r = coreGscCardSubtitle(s, 'className')(props)

  return r(h, [props.children])
}
export const gscCardSubtitle = h(GscCardSubtitle)
