import React from 'react'

import { GscAccordion, GscAccordionItem } from '@gsc-ui/react/dist/components'

export default {
  title: 'Gsc/Accordion',
  component: GscAccordion,
}

const Template = () => (
  <GscAccordion>
    <GscAccordionItem idPrefix="acc-1" title={() => [<h3>Title</h3>]}>
      Content
    </GscAccordionItem>
    <GscAccordionItem idPrefix="acc-2" title={() => [<h3>Title 2</h3>]}>
      Content 2
    </GscAccordionItem>
  </GscAccordion>
)

export const MyAccordion = Template.bind({})
