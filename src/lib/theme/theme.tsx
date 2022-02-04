import { extendTheme } from '@chakra-ui/react'
import Button from './components/ButtonStyle'
import Input from './components/InputStyle'
import { mode } from '@chakra-ui/theme-tools'
import { colors } from './colors'

const styles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global: (props: any) => ({
    body: {
      bg: mode('#F4F4F4', '#1c2128')(props),
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
