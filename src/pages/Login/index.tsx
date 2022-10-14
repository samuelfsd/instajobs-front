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
  Link,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { ToggleColorMode } from '~/components/ToggleColorMode';
import { AuthContext } from '~/context/authContext';

import logo from '../../assets/logo.svg';
interface IForm {
  email: string;
  password: string;
}

export function LoginPage() {
  const { register, handleSubmit } = useForm<IForm>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signed } = useContext(AuthContext);
  const colorBackground = useColorModeValue('white', 'gray.700');
  const colorText = useColorModeValue('gray.500', 'gray.200');

  const handleLogin: SubmitHandler<IForm> = async () => {
    const data = {
      email,
      password,
    };

    await signIn(data);
  };

  if (signed) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={colorBackground}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Box>
            <Image boxSize='100px' src={logo} alt='Logo InstaJobs' />
          </Box>
          <Heading fontSize={'4xl'}>Entre com sua conta!</Heading>
          <Text align='center' fontSize={'lg'} color={colorText}>
            Poste ofertas ou fique por dentro das novidades de emprego no mercado!
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={colorBackground} boxShadow={'lg'} p={8}>
          <Stack align='flex-end' spacing={5}>
            <Box>
              <ToggleColorMode />
            </Box>
          </Stack>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Stack spacing={4}>
              <FormControl id='email'>
                <FormLabel>Email </FormLabel>
                <Input
                  type='email'
                  {...register('email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Senha </FormLabel>
                <Input
                  type='password'
                  {...register('password')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} justify='flex-end'>
                  <Link href='/register' color={'blue.400'}>
                    Não está cadastrado? Faça seu cadastro!
                  </Link>
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
