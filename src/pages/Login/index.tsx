import {
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  Box,
  FormControl,
  useColorModeValue,
  Text,
  FormLabel,
  Image,
} from '@chakra-ui/react';
import { ToggleColorMode } from '~/components/ToggleColorMode';

import logo from '../../assets/logo.svg';

export function LoginPage() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Box>
            <Image boxSize='100px' src={logo} alt='Logo InstaJobs' />
          </Box>
          <Heading fontSize={'4xl'}>Entre com sua conta!</Heading>
          <Text align='center' fontSize={'lg'} color={useColorModeValue('gray.500', 'gray.200')}>
            Poste ofertas ou fique por dentro das novidades de emprego no mercado!
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack align='flex-end' spacing={5}>
            <Box>
              <ToggleColorMode />
            </Box>
          </Stack>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email </FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Senha </FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'flex-end'}></Stack>
              <Button
                bg={'#17E1B1'}
                color={'white'}
                _hover={{
                  bg: '#118268',
                }}
              >
                Entrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
