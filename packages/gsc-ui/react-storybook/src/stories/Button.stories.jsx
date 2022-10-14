import React from 'react'

import { GscButton } from '@gsc-ui/react/dist/components'

export default {
  title: 'Gsc/Button',
  component: GscButton,
}

const Template = (args) => (
  <GscButton
    size="md"
    radius="md"
    bg="primary"
    fg="secondary"
    disabled={args.disabled}
  >
    My Button
  </GscButton>
)

export const MyButton = Template.bind({})
MyButton.args = {
  disabled: false,
}
