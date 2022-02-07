import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { Menu } from '../Menu'
import HeadListIconAdd from '../navbar-list/HeadListIconAdd'
import { Settings } from '../Settings'

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
      <HeadListIconAdd
        title={'Tasks'}
        icon={<AiOutlineUnorderedList />}
        onClick={() => console.log(12)}
      />
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
