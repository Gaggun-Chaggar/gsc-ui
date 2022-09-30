import { cloneDeep } from './clone-deep'

export const staticLog = (...args: any[]) => console.log(cloneDeep(args))
