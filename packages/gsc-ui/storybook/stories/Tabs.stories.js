import { GscTabs } from '@gsc-ui/vue/dist/components'

export default {
  title: 'Gsc/Tabs',
  component: GscTabs,
  argTypes: {},
}

const Template = (args) => ({
  components: {
    GscTabs,
  },
  setup() {
    const tabs = [
      { id: 'a', title: 'a-title', content: 'a-content' },
      { id: 'b', title: 'b-title', content: 'b-content' },
    ]
    return { args, tabs }
  },
  template: `
      <gsc-tabs>
        <template v-for="x in tabs" #[x.title] :key="x.id+'-title'" >
        Title {{x.id}}
        </template>
        <template v-for="x in tabs" #[x.content] :key="x.id+'-content'" >
        Content {{x.id}}
        </template>
      </gsc-tabs>
    `,
})

export const MyCard = Template.bind({})
MyCard.args = {}
