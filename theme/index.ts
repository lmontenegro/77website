import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import '@fontsource/source-code-pro'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: {
        body: {
          color: 'white',
          bg: 'gray.900',
          fontSize: 'lg',
        },
      },
    },
    fonts: {
      heading: 'Source Code Pro',
      body: 'Source Code Pro',
    },
    fontSizes,
    components,
  },
  baseTheme,
)
