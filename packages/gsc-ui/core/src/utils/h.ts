type H_CHToR<CH, R> = (children?: CH) => R
type H_SToCH<S, CH extends any[], R> = (settings?: S) => H_CHToR<CH, R>

export type H<C = any, S = any, CH extends any[] = any[], R = any> = (
  component: C
) => H_SToCH<S, CH, R>
