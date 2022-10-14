import { GscBreadcrumb } from '@gsc-ui/vue/dist/components'

export default {
  title: 'Gsc/Breadcrumb',
  component: GscBreadcrumb,
  argTypes: {},
}

const Template = (args) => ({
  components: { GscBreadcrumb },
  setup() {
    return { args }
  },
  template: `
      <gsc-breadcrumb 
        :links="[{ title: 'Title 1', href: 'https://www.google.com' },{ title: 'Title 2', href: 'https://www.google.com' }]"
      />
    `,
})

export const MyBreadcrumb = Template.bind({})
