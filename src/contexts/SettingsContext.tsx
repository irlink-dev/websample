import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

type Settings = {
  USE_ENGINE_IO_V3: boolean
}

export const SettingsContext = createContext({
  settings: {
    USE_ENGINE_IO_V3: false,
  },
  setSettings: ((settings: Settings) => {
    /* empty */
  }) as Dispatch<SetStateAction<Settings>>,
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({
    USE_ENGINE_IO_V3: false, // 추후 ENGINE_IO_VERSION: number 형태로 확장.
  })

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
