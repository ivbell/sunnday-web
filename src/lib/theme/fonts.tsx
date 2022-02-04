import { Global } from '@emotion/react'
import React from 'react'

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=M+PLUS+Rounded+1c:wght@300;400;500&display=swap');
      `}
  />
)

export default Fonts
