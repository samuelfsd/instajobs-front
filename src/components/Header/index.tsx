import { ArrowBackIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, useTheme } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '~/providers/Auth/authContext';

import logo from '../../assets/logo.svg';
import { Modal } from '../Modal';
import { ToggleColorMode } from '../ToggleColorMode';

export function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { signOut } = useContext(AuthContext);

  const theme = useTheme();

  function handleCreateNewPost() {
    console.log('Vamos ver ')
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} modalTitle='Adiciona novo Job' saveButtonCallback={handleCreateNewPost} />
      <Box bgColor={theme.colors.purple_500} w='100%' >
        <Flex h='5rem' alignItems={'center'} justifyContent={'space-between'} paddingX='4rem' >
          <Flex alignItems='center' >
            <Image boxSize='50px' src={logo} alt='Logo InstaJobs' />
            <Text fontSize='1.8rem' ml='1rem' fontWeight='700' color='white' >Insta Jobs</Text>
          </Flex>

          <Flex alignItems='center' justifyContent='space-between' width='18rem' >
            <Button onClick={onOpen} >
              Criar nova oferta
            </Button>
            <ToggleColorMode />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                background='none'
                icon={<Avatar size='md' name='Christian Nwamba' src='https://bit.ly/sage-adebayo' />}
              />
              <MenuList>
                <MenuItem icon={<ArrowBackIcon />} onClick={() => signOut()} >
                  Sair
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
