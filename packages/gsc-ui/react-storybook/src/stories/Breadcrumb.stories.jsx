import React from 'react'

import { GscBreadcrumb } from '@gsc-ui/react/dist/components'

export default {
  title: 'Gsc/Breadcrumb',
  component: GscBreadcrumb,
}

const Template = () => (
  <GscBreadcrumb
    links={[
      { title: 'Title 1', href: 'https://www.google.com' },
      { title: 'Title 2', href: 'https://www.google.com' },
    ]}
  />
)

export const MyBreadcrumb = Template.bind({})
