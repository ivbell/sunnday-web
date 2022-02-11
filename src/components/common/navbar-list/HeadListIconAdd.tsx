import {
  Box,
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface Props {
  readonly title: string
  readonly icon: React.ReactElement
  readonly onClick: React.MouseEventHandler
  readonly modal_title: string
  readonly modal_save: CallableFunction
}

const HeadListIconAdd: FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalSave = () => {
    const res = props.modal_save()
    if (res) {
      onClose()
    } else {
      console.log('Error')
    }
  }

  return (
    <>
      <Box
        color={'#939393'}
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
              onClick={onOpen}
              cursor={'pointer'}
              w={'20px'}
              h={'20px'}
              as={AiOutlinePlusCircle}
            />
          </Box>
        </Stack>
      </Box>

      <Modal
        isCentered
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.modal_title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{props.children}</ModalBody>
          <ModalFooter>
            <Button onClick={modalSave} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default HeadListIconAdd
