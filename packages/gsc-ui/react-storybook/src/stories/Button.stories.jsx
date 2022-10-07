import React from 'react'

import { GscButton } from '@gsc-ui/react/dist/components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Gsc/Button',
  component: GscButton,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MyButton.args = {
  disabled: false,
}
