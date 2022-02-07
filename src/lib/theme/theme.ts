import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { colors } from './colors'
import Button from './components/ButtonStyle'
import Input from './components/InputStyle'

const styles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global: (props: any) => ({
    body: {
      bg: mode('gray.50', 'zinc.800')(props),
    },
  }),
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fonts = {
  heading: "'Comfortaa', cursive",
  body: "'M PLUS Rounded 1c', sans-serif",
}
const components = {
  Button,
  Input,
}
// 1c2128

const theme = extendTheme({ config, styles, fonts, colors, components })

export default theme
