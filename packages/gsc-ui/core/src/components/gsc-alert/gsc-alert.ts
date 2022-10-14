import { H, SettingsCtx } from 'src/utils'

export type Props = {
  tag?: string
}

export const coreGscAlert =
  <S>(s: SettingsCtx<S>, clsAttrName = 'class') =>
  (props: Props) => {
    const render = (h: H, children: any) =>
      h(props.tag || 'div')({ [clsAttrName]: s.get('alert'), role: 'alert' })(
        children
      )
    return render
  }
