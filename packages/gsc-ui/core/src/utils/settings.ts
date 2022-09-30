import {
  ClassMap,
  classMap,
  PartialClassMap,
  Classes,
} from './class-definitions'
import { cloneDeep, mergeDeep } from '@gsc/utils'

export type Settings = {
  classes: ClassMap
}

export type SettingsCtx<S = Settings> = {
  _settings: S
  get: (cls: Classes) => string
}

export const defaultSettings: Settings = {
  classes: cloneDeep(classMap),
}

export const createSettings = (classes?: PartialClassMap): Settings => {
  const _classes: ClassMap = cloneDeep(classMap)
  if (classes) {
    mergeDeep(_classes, classMap)
  }

  return {
    classes: _classes,
  }
}
