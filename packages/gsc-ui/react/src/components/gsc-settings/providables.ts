import { Classes, defaultSettings, SettingsCtx } from '@gsc-ui/core'
import { createContext, useContext } from 'react'

export const GscSettingsContext = createContext(defaultSettings)

export const useSettings = (): SettingsCtx => {
  const settings = useContext(GscSettingsContext)

  const get = (cls: Classes) => settings.classes[cls]

  return {
    _settings: settings,
    get,
  }
}
