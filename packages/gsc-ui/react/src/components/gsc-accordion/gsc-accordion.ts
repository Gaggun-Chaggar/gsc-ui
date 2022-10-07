import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import { coreGscAccordion } from '@gsc-ui/core/dist/components/gsc-accordion/gsc-accordion'

type RProps = ReactProps

export const GscAccordion = (props: RProps) => {
  const s = useSettings()
  const r = coreGscAccordion(s, 'className')()

  return r(h, [props.children])
}

export const gscAccordion = h(GscAccordion)
