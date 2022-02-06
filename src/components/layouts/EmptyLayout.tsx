import { Box, Container } from '@chakra-ui/react'
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
      <Container py={2} maxW={'container.xl'}>
        {children}
      </Container>
      {/* Footer */}
    </>
  )
}

export default EmptyLayout
