import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Menu } from '../Menu'
import { Settings } from '../Settings'
import TaskFolderList from './task/TaskFolderList'
import TaskHead from './task/TaskHead'

const LeftNavbarMain: FC = () => {
  return (
    <Box
      m={1}
      bgColor={useColorModeValue('sn.bg', 'zinc.700')}
      rounded={15}
      position={'fixed'}
      w={'225px'}
      h={'99vh'}
      color={'sn.text'}>
      <Stack
        p={2}
        alignItems={'center'}
        justify={'space-between'}
        direction={['column', 'row']}
        borderBottom={'1px'}
        borderColor={'sn.line'}>
        {/* Logo */}
        <Heading fontSize={'xl'} color={'sn.accent'}>
          Sunnday
        </Heading>
        <Stack direction={['column', 'row']}>
          {/* Menu and settings */}

          <Menu />
          <Settings />
        </Stack>
      </Stack>
      <TaskHead />
      <TaskFolderList />
      {/* all notes */}
      {/* Notebooks */}
      {/* Templates */}
      {/* Task */}
      {/* status */}
      {/* tags */}
    </Box>
  )
}

export default LeftNavbarMain
