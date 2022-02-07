import { Box, Icon } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

export const Menu: FC = () => {
  const [is_open, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <Icon
        onClick={() => setIsOpen(!is_open)}
        _hover={{ color: 'sn.accent' }}
        w={'20px'}
        h={'20px'}
        as={AiOutlineMenu}
        cursor={'pointer'}
      />
      {is_open && (
        <Box
          p={4}
          w={40}
          h={40}
          position={'absolute'}
          border={'1px'}
          borderColor={'sn.line'}
          bgColor={'sn.bg_accent'}
          rounded={15}>
          menu content
        </Box>
      )}
    </>
  )
}
