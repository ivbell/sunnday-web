import { createGlobalStyle } from 'styled-components'
import { baseTheme } from './theme'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  body {
    background-color: ${baseTheme.colors.bg_body};
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

`