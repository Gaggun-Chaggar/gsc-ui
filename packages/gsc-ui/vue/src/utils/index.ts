import {
  VNode,
  h as _h,
  VNodeProps,
  DefineComponent,
  AreaHTMLAttributes,
} from 'vue'

type Params = Parameters<typeof _h>
type CH = Params[2]

export function h(
  component: string
): (
  settings: VNodeProps & Record<string, any> & AreaHTMLAttributes
) => (children?: CH) => VNode
export function h<C extends DefineComponent<any, any, any, any, any, any>>(
  component: C
): (
  settings: VNodeProps &
    Record<string, any> &
    InstanceType<C>['$props'] &
    AreaHTMLAttributes
) => (children?: CH) => VNode
export function h(component: any) {
  return (settings: any) =>
    (children: any = undefined): VNode => {
      return _h(component, settings, children)
    }
}
