import { GscTabs } from '@gsc-ui/react/dist/components'

export default {
  title: 'Gsc/Tabs',
  component: GscTabs,
  argTypes: {},
}

const Template = (args) => (
  <GscTabs
    tabs={{
      a: {
        title: () => [<div>Title a</div>],
        content: () => [<div>Content a</div>],
      },
      b: {
        title: () => [<div>Title b</div>],
        content: () => [<div>Content b</div>],
      },
    }}
  />
)

export const MyTabs = Template.bind({})
MyTabs.args = {}
