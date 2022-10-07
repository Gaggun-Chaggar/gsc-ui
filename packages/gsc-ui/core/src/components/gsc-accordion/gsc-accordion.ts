import { H, SettingsCtx } from 'src/utils'

export const coreGscAccordion =
  <S>(s: SettingsCtx<S>, clsAttrName = 'class') =>
  () => {
    const render = (h: H, children: any) =>
      h('div')({ [clsAttrName]: s.get('accordion') })(children)
    return render
  }
