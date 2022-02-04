import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import NavbarEmpty from '../empty/NavbarEmpty'

type Props = {
  title?: string
}

const EmptyLayout: FC<Props> = ({ children, title }) => {
  document.title = `${title} | Sunnday | A note-taking app and a little more`

  return (
    <>
      <NavbarEmpty />
      <Box py={1}>{children}</Box>
      {/* Footer */}
    </>
  )
}

export default EmptyLayout
