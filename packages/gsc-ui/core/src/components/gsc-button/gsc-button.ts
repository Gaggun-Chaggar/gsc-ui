import { Size } from '../../utils/sizes'
import { Colour } from '../../utils/colours'
import { SettingsCtx } from '../../utils/settings'
import { normaliseClass } from '../../utils/normalise-class'
import { append } from '../../utils/class-definitions'
import { H } from '../../utils/h'

export type Props = {
  size?: Size
  radius?: Size
  bg?: Colour
  fg?: Colour
  disabled?: boolean
}

export type Events<E> = {
  onClick: (e: E) => any
}

export const coreGscButton =
  <S>(s: SettingsCtx<S>, clsAttrName = 'class') =>
  <E>(props: Props, events: Events<E>) => {
    const cls = () =>
      normaliseClass([
        s.get('btn'),
        s.get(append('btn')(props.bg || 'primary')),
        s.get(append('fg')(props.fg || 'white')),
        props.size && s.get(append('btn')(props.size)),
        props.radius && s.get(append('radius')(props.radius)),
      ])

    const render = (h: H, children: any) =>
      h('button')({
        disabled: props.disabled,
        [clsAttrName]: cls(),
        onClick: events.onClick,
      })(children)

    return render
  }
