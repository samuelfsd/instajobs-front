import {
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  Box,
  Link,
  FormControl,
  useColorModeValue,
  Text,
  FormLabel,
} from '@chakra-ui/react';

import { Header } from '~/components/Header';

export function LoginPage() {
  return (
    <>
      <Header />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Entre com sua conta!</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Poste ofertas ou fique por dentro das novidades de emprego no mercado!
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
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
    </>
  );
}
