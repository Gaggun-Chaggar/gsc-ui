import { SettingsCtx } from '../../utils/settings'
import { normaliseClass } from '../../utils/normalise-class'
import { H } from '../../utils/h'
import { coreGscTab } from './gsc-tab'
import { entries } from '@gsc/utils'

export type Props = {}

export type Events<E> = {
  onClick: (e: E, index: number) => any
}

export type Slots<R extends any[]> = {
  tabs: Record<
    string,
    {
      title: () => R
      content: () => R
    }
  >
}

export type State = {
  activeTab: string
}

export type Methods = {
  activateTab: (id: string) => void
}

export const coreGscTabs = <S>(s: SettingsCtx<S>, clsAttrName = 'class') => {
  const tab = coreGscTab(s)

  return <E>(_: Props, events: Events<E>, state: State, methods: Methods) => {
    const cls = () => normaliseClass([s.get('tabs')])

    const tabListCls = () => normaliseClass([s.get('tab-list')])

    const render = <R extends any[]>(h: H, slots: Slots<R>) =>
      h('div')({
        [clsAttrName]: cls(),
      })([
        h('div')()(
          h('ul')({
            [clsAttrName]: tabListCls(),
            role: 'tablist',
          })(
            entries(slots.tabs).map(([id, t], i, self) =>
              tab(
                {
                  active: state.activeTab === id,
                  controls: id,
                  index: i,
                  setsize: self.length,
                },
                {
                  onClick: (e: E) => {
                    methods.activateTab(id)
                    events.onClick(e, i)
                  },
                }
              )(h, t.title())
            )
          )
        ),
        h('div')()(
          h('div')({
            [clsAttrName]: s.get('tab-content'),
          })(slots.tabs[state.activeTab].content())
        ),
      ])

    return render
  }
}
