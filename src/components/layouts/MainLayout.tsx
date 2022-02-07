import { Box, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import NavbarMain from '../main/NavbarMain'

type Props = {
  title?: string
}

const MainLayout: FC<Props> = ({ children, title }) => {
  if (title) {
    document.title = `${title} | Sunnday | A note-taking app and a little more`
  } else {
    document.title = `Sunnday | A note-taking app and a little more`
  }
  return (
    <Stack direction={['column', 'row']}>
      <Box position={'relative'} minW={'500px'} maxW={'500px'}>
        <NavbarMain />
      </Box>
      <main>{children}</main>
    </Stack>
  )
}

export default MainLayout
