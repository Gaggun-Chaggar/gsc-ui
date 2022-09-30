import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscCard,
  Props,
} from '@gsc-ui/core/dist/components/gsc-card/gsc-card'

type RProps = ReactProps & Props

export const GscCard = (props: RProps) => {
  const s = useSettings()
  const r = coreGscCard(s, 'className')(props)

  return r(h, [props.children])
}
export const gscCard = h(GscCard)
