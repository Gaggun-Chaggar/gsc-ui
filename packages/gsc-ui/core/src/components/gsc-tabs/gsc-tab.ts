import { SettingsCtx } from '../../utils/settings'
import { normaliseClass } from '../../utils/normalise-class'
import { H } from '../../utils/h'

export type Props = {
  active: boolean
  controls: string
  index: number
  setsize: number
}

export type Events<E> = {
  onClick: (e: E) => any
}

export const coreGscTab =
  <S>(s: SettingsCtx<S>, clsAttrName = 'class') =>
  <E>(props: Props, events: Events<E>) => {
    const cls = (active: boolean) =>
      normaliseClass([s.get('tab-item'), active && s.get('tab-item--active')])

    const render = (h: H, children: any) =>
      h('li')({
        role: 'presentation',
        [clsAttrName]: cls(props.active),
      })([
        h('a')({
          role: 'tab',
          href: '#',
          'aria-selected': props.active,
          'aria-setsize': props.setsize,
          'aria-posinset': props.index,
          'aria-controls': props.controls,
          onClick: events.onClick,
        })(children),
      ])

    return render
  }
