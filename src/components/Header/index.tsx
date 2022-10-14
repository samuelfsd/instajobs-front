import { Avatar, Box, Flex, Image, Text, useTheme, WrapItem } from '@chakra-ui/react';

import logo from '../../assets/logo.svg';
import { ToggleColorMode } from '../ToggleColorMode';

export function Header() {

  const theme = useTheme();

  return (
    <>
      <Box bgColor={theme.colors.purple_500} >
        <Flex h='5rem' alignItems={'center'} justifyContent={'space-between'} paddingX='4rem' >
          <Flex alignItems='center' >
            <Image boxSize='50px' src={logo} alt='Logo InstaJobs' />
            <Text fontSize='1.8rem' ml='1rem' fontWeight='700' color='white' >Insta Jobs</Text>
          </Flex>

          <Flex alignItems='center' justifyContent='space-between' w='10rem' >
            <ToggleColorMode />
            <WrapItem mr='0.8rem' >
              <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/sage-adebayo' />{' '}
            </WrapItem>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
