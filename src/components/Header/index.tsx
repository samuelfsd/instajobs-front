import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';

import logo from '../../assets/logo.svg';
import { ToggleColorMode } from '../ToggleColorMode';

export function Header() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-around'}>
          <Box>
            <Image boxSize='50px' src={logo} alt='Logo InstaJobs' />
          </Box>

          <Flex alignItems={'center'}>
            <Box>
              <ToggleColorMode />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
