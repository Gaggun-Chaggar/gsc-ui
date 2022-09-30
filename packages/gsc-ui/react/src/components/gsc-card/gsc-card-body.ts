import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscCardBody,
  Props,
} from '@gsc-ui/core/dist/components/gsc-card/gsc-card-body'

type RProps = ReactProps & Props

export const GscCardBody = (props: RProps) => {
  const s = useSettings()
  const r = coreGscCardBody(s, 'className')(props)

  return r(h, [props.children])
}
export const gscCardBody = h(GscCardBody)
