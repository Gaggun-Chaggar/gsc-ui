import { GscAccordion, GscAccordionItem } from '@gsc-ui/vue/dist/components'

export default {
  title: 'Gsc/Accordion',
  component: GscAccordion,
  argTypes: {},
}

const Template = (args) => ({
  components: { GscAccordion, GscAccordionItem },
  setup() {
    return { args }
  },
  template: `
      <gsc-accordion>
        <gsc-accordion-item id-prefix="acc-1">
          <template #title>
            <h3>Title</h3>
          </template>
          Content
        </gsc-accordion-item>
        <gsc-accordion-item id-prefix="acc-2">
          <template #title>
           <h3>Title 2</h3>
          </template>
          Content 2
        </gsc-accordion-item>
      </gsc-accordion>
    `,
})

export const MyAccordion = Template.bind({})
