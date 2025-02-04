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
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
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
