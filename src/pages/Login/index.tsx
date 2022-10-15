import {
  Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToggleColorMode } from '~/components/ToggleColorMode';
import { useAuth } from '~/providers/Auth/useAuth';

import logo from '../../assets/logo.svg';
interface IForm {
  email: string;
  password: string;
}

export function LoginPage() {
  const { register, handleSubmit } = useForm<IForm>();
  const { signIn } = useAuth();

  const colorBackground = useColorModeValue('gray.100', 'gray.700');
  const colorBackgroundLogin = useColorModeValue('gray.50', 'gray.800');
  const colorText = useColorModeValue('gray.500', 'gray.200');

  const handleLogin: SubmitHandler<IForm> = async (data: IForm) => {
    if (!data.email || !data.password) {
      alert('Email ou senha inválidos');
      return
    }

    await signIn(data);
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={colorBackground}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={6}>
        <Stack align={'center'}>
          <Box>
            <Image boxSize='100px' src={logo} alt='Logo InstaJobs' />
          </Box>
          <Heading fontSize={'4xl'}>Entre com sua conta!</Heading>
          <Text align='center' fontSize={'lg'} color={colorText}>
            Poste ofertas ou fique por dentro das novidades de emprego no mercado!
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={colorBackgroundLogin} boxShadow={'lg'} p={8}>
          <Stack align='flex-end' spacing={5}>
            <Box>
              <ToggleColorMode />
            </Box>
          </Stack>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Stack spacing={4}>
              <FormControl id='email'>
                <FormLabel>Email </FormLabel>
                <Input type='email' {...register('email')} />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Senha </FormLabel>
                <Input type='password' {...register('password')} />
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} justify='flex-end'>
                  <Text>Ainda não é cadastrado?{' '}
                    <Link href='/register' color={'blue.400'} textDecoration='none'>
                      Faça seu cadastro!
                    </Link>
                  </Text>
                </Stack>
                <Button
                  type='submit'
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
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
