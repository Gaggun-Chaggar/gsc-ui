import { H, SettingsCtx } from 'src/utils'
import { normaliseClass } from '../../utils/normalise-class'

export type Props = {
  links: { title: string; href: string }[]
}

export const coreGscBreadcrumb =
  <S>(s: SettingsCtx<S>, clsAttrName = 'class') =>
  (props: Props) => {
    const render = (h: H) =>
      h('nav')({
        [clsAttrName]: s.get('breadcrumb'),
        'aria-label': 'Breadcrumb',
      })([
        h('ol')({
          [clsAttrName]: s.get('breadcrumb-list'),
        })(
          props.links.map(({ href, title }, i, self) =>
            h('li')({
              [clsAttrName]: s.get('breadcrumb-list-item'),
            })([
              h('a')({
                [clsAttrName]: normaliseClass([
                  s.get('breadcrumb-anchor'),
                  i === self.length - 1
                    ? s.get('breadcrumb-anchor-active')
                    : undefined,
                ]),
                'aria-current': i === self.length - 1 ? 'page' : undefined,
                href,
              })([title]),
            ])
          )
        ),
      ])
    return render
  }
