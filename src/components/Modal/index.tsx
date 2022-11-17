import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input, Modal as ChakraModal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea
} from '@chakra-ui/react'
import { useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  modalTitle: string,
  saveButtonTitle?: string,
  saveButtonCallback: () => void
}

export function Modal({ isOpen, onClose, modalTitle, saveButtonTitle = 'Salvar', saveButtonCallback }: ModalProps) {

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <ChakraModal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent minWidth='40rem' >
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome da vaga</FormLabel>
              <Input ref={initialRef} placeholder='Desenvolvedor Front-end' />
            </FormControl>

            <Flex justifyContent='space-between' gap='5rem' >
              <FormControl mt={4}>
                <FormLabel>Nível</FormLabel>
                <Input placeholder='Sênior' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Salário</FormLabel>
                <Input placeholder='R$ 5000,00' />
              </FormControl>
            </Flex>


            <FormControl mt={4}>
              <FormLabel>Local</FormLabel>
              <Input placeholder='Remoto' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição da vaga</FormLabel>
              <Textarea />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={saveButtonCallback} >
              {saveButtonTitle}
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  )
}