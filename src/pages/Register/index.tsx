import {
  Image,
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
  useTheme,
} from '@chakra-ui/react';

import logo from '~/assets/logo.svg';
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
  const theme = useTheme();
  const colorBackground = useColorModeValue('gray.100', 'gray.700');
  const colorBackgroundRegister = useColorModeValue('gray.50', 'gray.800');
  const colorText = useColorModeValue('gray.600', 'gray.200');
  const colorTextTheme = useColorModeValue(theme.colors.purple_500,theme.colors.purple_100)
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
      <Stack spacing={[8,4,8]} mx={'auto'} width={'1000px'} py={2} px={6} direction={['row','column','row']} align={'center'}>
        <Stack align={'center'} width={['300px','300px','300px']} >
          <Box ml='1rem'>
            <Image boxSize={['100px','80px','100px']} src={logo} alt='Logo InstaJobs' />
          </Box>
          <Heading textAlign={'center'} width={['300px','500px']}>
            <Text fontSize={['8xl','2xl','4xl']} ml='1rem' fontWeight='700' color={colorTextTheme}>
              InstaJobs
            </Text>
            <Text fontSize={['2xl','2xl','2xl']} ml='1rem'>
              Crie a sua conta!
            </Text>
            <Text fontSize={['lg','md','lg']} color={colorText} ml='1rem'>
              e aproveite as melhores ofertas!!!
            </Text>
          </Heading>
        </Stack>
        <Box rounded={'lg'} bg={colorBackgroundRegister} boxShadow={'lg'} p={8} width={['650px', '450px']}>
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
                  <Link href='/' color={'blue.400'}>
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
