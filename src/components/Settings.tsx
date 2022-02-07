import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack, Switch, useColorMode,
  useDisclosure
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlineSetting } from 'react-icons/ai'

export const Settings: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Icon
        onClick={onOpen}
        _hover={{ color: 'sn.accent' }}
        w={'20px'}
        h={'20px'}
        as={AiOutlineSetting}
        cursor={'pointer'}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                  Toggle color mode: {colorMode === 'light' ? 'Light' : 'Dark'}
                </FormLabel>
                <Switch
                  defaultChecked={colorMode === 'light'}
                  onChange={toggleColorMode}
                  mt={'0.5px'}
                  id='email-alerts'
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
