import { Box, Icon, Stack, Text } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface Props {
  readonly title: string
  readonly icon: React.ReactElement
  readonly onClick: React.MouseEventHandler
  readonly isShowElement: React.ReactElement
}

const HeadListIconAdd: FC<Props> = (props) => {
  const { isShowElement } = props
  const [isShowAdd, setIsShowAdd] = useState<boolean>(false)
  return (
    <Box
      position={'relative'}
      _hover={{ backgroundColor: 'sn.bg_accent' }}
      px={2}>
      <Stack
        direction={['column', 'row']}
        alignItems={'center'}
        justify={'space-between'}>
        <Stack
          direction={['column', 'row']}
          spacing={'5px'}
          alignItems={'center'}>
          <Box sx={{ fontSize: '20px' }}>{props.icon}</Box>
          <Text>{props.title}</Text>
        </Stack>
        <Box pt={2}>
          <Icon
            _hover={{ color: 'sn.accent' }}
            cursor={'pointer'}
            w={'20px'}
            h={'20px'}
            onClick={props.onClick}
            as={AiOutlinePlusCircle}
          />
        </Box>
      </Stack>
      {isShowAdd && isShowElement}
    </Box>
  )
}
export default HeadListIconAdd
