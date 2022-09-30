import { GscButton } from '@gsc-ui/vue/dist/components'

export default {
  title: 'Gsc/Button',
  component: GscButton,
  argTypes: {},
}

const Template = (args) => ({
  components: { GscButton },
  setup() {
    return { args }
  },
  template: `
      <gsc-button size="md" radius="md" bg="primary" fg="secondary" :disabled="args.disabled">Button</gsc-button>
    `,
})

export const MyButton = Template.bind({})
MyButton.args = {
  disabled: false,
}
