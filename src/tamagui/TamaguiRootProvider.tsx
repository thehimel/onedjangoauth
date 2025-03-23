import { useColorScheme } from 'react-native'
import {TamaguiProvider, Theme} from "tamagui";
import config from './tamagui.config'

export const TamaguiRootProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider disableInjectCSS config={config} defaultTheme={colorScheme || 'light'}>
      <Theme name={colorScheme}>
        {children}
      </Theme>
    </TamaguiProvider>
  )
}
