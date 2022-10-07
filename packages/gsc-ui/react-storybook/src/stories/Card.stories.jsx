import {
  GscCard,
  GscCardBody,
  GscCardSubtitle,
  GscCardTitle,
  GscCardFooter,
  GscCardHeader,
} from '@gsc-ui/react/dist/components'

export default {
  title: 'Gsc/Card',
  component: GscCard,
  argTypes: {},
}

const Template = (args) => (
  <GscCard>
    <GscCardHeader tag="span" bg="primary">
      My Header
    </GscCardHeader>
    <GscCardBody>
      <GscCardTitle tag="h3">My Title</GscCardTitle>
      <GscCardSubtitle tag="h4">My Subtitle</GscCardSubtitle>
      <p>My Card text</p>
    </GscCardBody>
    <GscCardFooter tag="span">My Footer</GscCardFooter>
  </GscCard>
)

export const MyCard = Template.bind({})
MyCard.args = {}
