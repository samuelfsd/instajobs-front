import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ToggleColorMode } from '~/components/ToggleColorMode';
import { api } from '~/services/api';

interface IFormValues {
  name?: string;
  email: string;
  password: string;
}

export function RegisterPage() {
  const colorBackground = useColorModeValue('gray.50', 'gray.700');
  const colorText = useColorModeValue('gray.500', 'gray.200');

  const { register, handleSubmit } = useForm<IFormValues>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<IFormValues> = async () => {
    const data = {
      name,
      email,
      password,
    };

    const response = await api.post('/create', data);

    console.log(response.data);
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={colorBackground}>
      <Stack spacing={8} mx={'auto'} width={'550px'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Crie sua conta!
          </Heading>
          <Text fontSize={'lg'} color={colorText}>
            aproveite as melhores ofertas!!!
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={colorBackground} boxShadow={'lg'} p={8}>
          <Stack align='flex-end' spacing={5}>
            <Box>
              <ToggleColorMode />
            </Box>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type='text'
                    {...register('name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type='email'
                  {...register('email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type='submit'
                  bg={'#17E1B1'}
                  color={'white'}
                  _hover={{
                    bg: '#118268',
                  }}
                >
                  Cadastrar
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Já é um usuário?{' '}
                  <Link href='/login' color={'blue.400'}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
