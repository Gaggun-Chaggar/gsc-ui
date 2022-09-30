import {
  GscCard,
  GscCardBody,
  GscCardSubtitle,
  GscCardTitle,
  GscCardFooter,
  GscCardHeader,
} from '@gsc-ui/vue/dist/components'

export default {
  title: 'Gsc/Card',
  component: GscCard,
  argTypes: {},
}

const Template = (args) => ({
  components: {
    GscCard,
    GscCardBody,
    GscCardSubtitle,
    GscCardTitle,
    GscCardFooter,
    GscCardHeader,
  },
  setup() {
    return { args }
  },
  template: `
      <gsc-card>
        <gsc-card-header tag="span" bg="primary">My Header</gsc-card-header>
        <gsc-card-body>
          <gsc-card-title tag="h3">My Title</gsc-card-title>
          <gsc-card-subtitle tag="h4">My Subtitle</gsc-card-subtitle>
          <p>
            My Card text
          </p>
        </gsc-card-body>
        <gsc-card-footer tag="span">My Footer</gsc-card-footer>
      </gsc-card>
    `,
})

export const MyCard = Template.bind({})
MyCard.args = {}
