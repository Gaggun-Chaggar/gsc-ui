import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscButton,
  Props,
  Events,
} from '@gsc-ui/core/dist/components/gsc-button/gsc-button'
import { MouseEvent } from 'react'

type RProps = ReactProps & Props & Events<MouseEvent<HTMLButtonElement>>

export const GscButton = (props: RProps) => {
  const s = useSettings()
  const r = coreGscButton(s, 'className')(props, props)

  return r(h, [props.children])
}
export const gscButton = h(GscButton)
