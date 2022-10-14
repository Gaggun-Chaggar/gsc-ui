import { GscAlert } from '@gsc-ui/vue/dist/components'

export default {
  title: 'Gsc/Alert',
  component: GscAlert,
  argTypes: {},
}

const Template = (args) => ({
  components: { GscAlert },
  setup() {
    return { args }
  },
  template: `
      <gsc-alert>Boo!</gsc-alert>
    `,
})

export const MyAlert = Template.bind({})
