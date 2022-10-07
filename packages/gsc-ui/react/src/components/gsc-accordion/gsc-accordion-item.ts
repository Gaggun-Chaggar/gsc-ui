import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscAccordionItem,
  Props,
  Events,
  Slots,
} from '@gsc-ui/core/dist/components/gsc-accordion/gsc-accordion-item'
import { MouseEvent, ReactNode, useState } from 'react'

type RProps = ReactProps &
  Props &
  Events<MouseEvent<HTMLButtonElement>> &
  Slots<ReactNode[]>

export const GscAccordionItem = (props: RProps) => {
  const s = useSettings()

  const [show, setShow] = useState(false)
  const r = coreGscAccordionItem(s, 'className')(
    props,
    props,
    { show },
    { setShow }
  )

  return r(h, [props.children], props)
}

export const gscAccordionItem = h(GscAccordionItem)
