import { h } from '../../utils'
import { ReactProps } from '../../types/index'
import { useSettings } from '../gsc-settings/providables'
import {
  coreGscTabs,
  Props,
  Events,
  Slots,
} from '@gsc-ui/core/dist/components/gsc-tabs/gsc-tabs'
import { MouseEvent, ReactNode, useState } from 'react'
import { keys } from '@gsc/utils'

type RProps = ReactProps &
  Props &
  Events<MouseEvent<HTMLButtonElement>> &
  Slots<ReactNode[]>

export const GscTabs = (props: RProps) => {
  const s = useSettings()

  const [activeTab, setActiveTab] = useState(keys(props.tabs)[0])

  const events = {
    onClick: (e: MouseEvent<HTMLButtonElement>, i: number) => {
      e.preventDefault()
      props.onClick(e, i)
    },
  }

  const r = coreGscTabs(s, 'className')(
    props,
    events,
    { activeTab },
    { activateTab: setActiveTab }
  )

  return r(h, props)
}
export const gscTabs = h(GscTabs)
