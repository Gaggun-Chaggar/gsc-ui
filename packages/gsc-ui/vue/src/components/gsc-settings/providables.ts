import { Ref, inject, InjectionKey, ref } from 'vue'
import { Settings, defaultSettings, Classes, SettingsCtx } from '@gsc-ui/core'

export const SETTINGS: InjectionKey<Ref<Settings>> = Symbol('settings')

export const useSettings = (): SettingsCtx<Ref<Settings>> => {
  const _defaultSettings = ref(defaultSettings)
  const settings = inject(SETTINGS, _defaultSettings)

  const get = (cls: Classes) => settings.value.classes[cls]
  console.log({ defaultSettings })

  return {
    _settings: settings,
    get,
  }
}
