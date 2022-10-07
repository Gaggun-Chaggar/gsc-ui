import { H, SettingsCtx } from 'src/utils'

export type Props = {
  idPrefix: string
}

export type Events<E> = {
  onClick?: (e: E) => any
}

export type Slots<R extends any[]> = {
  title?: () => R
}

export type State = {
  show: boolean
}

export type Methods = {
  setShow: (show: boolean) => void
}

export const coreGscAccordionItem =
  <S>(s: SettingsCtx<S>, clsAttrName = 'class') =>
  <E>(props: Props, events: Events<E>, state: State, methods: Methods) => {
    const render = <R extends any[]>(h: H, children: any, slots: Slots<R>) =>
      h('div')({
        [clsAttrName]: s.get('accordion-item'),
      })([
        h('div')({
          [clsAttrName]: s.get('accordion-item--button-wrapper'),
        })(
          h('button')({
            type: 'button',
            id: props.idPrefix + '-label',
            'aria-controls': props.idPrefix + '-content',
            'aria-expanded': state.show,
            [clsAttrName]: s.get('accordion-item--button'),
            onClick: (e: E) => {
              methods.setShow(!state.show)
              if (events.onClick) events.onClick(e)
            },
          })(slots.title ? slots.title() : [])
        ),
        h('div')({
          id: props.idPrefix + '-content',
          'aria-labelledby': props.idPrefix + '-label',
          hidden: !state.show,
          role: 'region',
          [clsAttrName]: s.get('accordion-item--content'),
        })(children),
      ])

    return render
  }
