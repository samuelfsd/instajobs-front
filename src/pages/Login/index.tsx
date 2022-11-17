import {
  Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Stack, Text, useColorModeValue, useTheme
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
  const theme = useTheme();
  const colorTextTheme = useColorModeValue(theme.colors.purple_500, theme.colors.purple_100)
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
      <Stack justifyContent={'space-between'} spacing={[8, 4, 8]} mx={'auto'} width={'1000px'} py={2} px={6} direction={['row', 'column', 'row']} align={'center'}>
        <Stack align={['initial', 'center', 'initial']} width={'500px'}>
          <Box ml={['4rem', '1rem', '4rem']}>
            <Image boxSize={['150px', '100px', '150px']} src={logo} alt='Logo InstaJobs' />
          </Box>
          <Heading textAlign={['initial', 'center', 'initial']} width={['300px', '500px']} fontSize={'4xl'}>
            <Text fontSize={['8xl', '3xl', '6xl']} ml='1rem' fontWeight='700' color={colorTextTheme}>
              InstaJobs
            </Text>
            <Text fontSize={['4xl', '2xl', '4xl']} ml='1rem'>
              Entre com sua conta!
            </Text>
            <Text fontSize={['lg', 'md', 'lg']} color={colorText} ml='1rem'>
              Poste ofertas ou fique por dentro das novidades de emprego no mercado!
            </Text>
          </Heading>

        </Stack>
        <Box rounded={'lg'} bg={colorBackgroundLogin} boxShadow={'lg'} p={8} width={['650px', '450px']}>
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
