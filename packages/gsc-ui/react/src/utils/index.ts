import {
  Attributes,
  ComponentClass,
  createElement,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from 'react'

export const h =
  <C extends FunctionComponent<any> | ComponentClass<any> | string>(
    component: C
  ) =>
  <S extends {}>(
    settings:
      | (Attributes &
          (C extends keyof JSX.IntrinsicElements
            ? JSX.IntrinsicElements[C]
            : React.HTMLAttributes<any>) &
          S)
      | null = null
  ) =>
  (children?: ReactNode[]): ReactElement<S> => {
    return createElement(component, settings, ...(children || []))
  }
