import { Colour } from '../../utils/colours'
import { SettingsCtx } from '../../utils/settings'
import { normaliseClass } from '../../utils/normalise-class'
import { append } from '../../utils/class-definitions'
import { H } from '../../utils/h'

export type Props = {
  bg?: Colour
  fg?: Colour
  tag?: string
}

export const coreGscCard =
  <S>(s: SettingsCtx<S>, clsAttrName = 'class') =>
  (props: Props) => {
    const cls = () =>
      normaliseClass([
        s.get('card'),
        props.bg && s.get(append('card')(props.bg)),
        props.fg && s.get(append('fg')(props.fg)),
      ])

    const render = (h: H, children: any) =>
      h(props.tag || 'div')({
        [clsAttrName]: cls(),
      })(children)

    return render
  }
