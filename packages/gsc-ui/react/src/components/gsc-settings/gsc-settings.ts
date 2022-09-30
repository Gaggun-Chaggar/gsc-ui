import { Settings } from '@gsc-ui/core'
import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { GscSettingsContext } from './providables'

export type Props = ReactProps & {
  settings: Settings
}
export const GscSettings = (props: Props) =>
  h(GscSettingsContext.Provider)({ value: props.settings })([props.children])
