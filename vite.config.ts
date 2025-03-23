import type { UserConfig } from 'vite'
import path from 'path'
import { one } from 'one/vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Aliases `@` to `src/`
    },
  },
  plugins: [
    one({
      react: {
        compiler: process.env.NODE_ENV === 'production',
      },

      web: {
        defaultRenderMode: 'ssg',
      },

      native: {
        // set to the key of your native app
        // will call AppRegistry.registerComponent(app.key)
        key: 'one-example',
      },
    }),

    tamaguiPlugin({
      optimize: process.env.NODE_ENV === 'production',
      components: ['tamagui'],
      config: './src/tamagui/tamagui.config.ts',
      outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
      logTimings: true,
      disableExtraction: false,
    }),
  ],

  // Vite 6 style configuration
  ssr: {
    noExternal: true,
  },

  optimizeDeps: {
    include: [
      '@tamagui/core',
      '@tamagui/config',
    ],
  },

  build: {
    cssTarget: 'safari15',
  },
} satisfies UserConfig
