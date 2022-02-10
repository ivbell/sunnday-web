import { Global } from '@emotion/react'
import React from 'react'

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=M+PLUS+Rounded+1c:wght@300;400;500&display=swap');

    // Roboto
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      `}
  />
)

export default Fonts
