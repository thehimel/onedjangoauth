import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import { themes } from '@tamagui/themes'

/**
 * Welcome to Tamagui, this project uses the default config.
 *
 * To learn more about it, see:
 *   https://tamagui.dev/docs/core/config-v4
 *
 */

// Extend the default config with explicit themes
const config = createTamagui({
  ...defaultConfig,
  themes: {
    ...themes,
    // The default config doesn't explicitly include themes,
    // so we need to add them from @tamagui/themes
  },
  // Explicitly set a default theme
  defaultTheme: 'light',
})

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}

  // for group types:
  // interface TypeOverride {
  //   groupNames(): 'message'
  // }
}

export default config
