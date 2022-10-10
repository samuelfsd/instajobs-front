import {
  Box,
  Button,
  Flex,
  Input,
  useTheme,
  Spacer,
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { IoReturnUpBack } from 'react-icons/io5';
import { AiOutlineGoogle } from 'react-icons/ai';

export default function LoginPage() {
  const theme = useTheme();
  return (
    <>
      <Box bgColor={theme.colors.primary} px={4} py={4}>
        <Flex alignItems={'center'}>
          <div>
            <Link to='/'>
              <IoReturnUpBack size={35} color={'#B1B2FF'} />
            </Link>
          </div>
          <Spacer />
          <Flex alignItems={'center'}>
            <div>
              <Link to='/register'>
                <Button px={2} h={10} borderRadius={'2xl'} bgColor='#B1B2FF' variant='solid'>
                  Registrar
                </Button>
              </Link>
            </div>
          </Flex>
        </Flex>
      </Box>
      <Center>
        <Box
          pt={10}
          boxShadow='dark-lg'
          w={'510px'}
          h={'540px'}
          p='6'
          rounded='md'
          bgColor={'#D2DAFF'}
        >
          <Center textAlign={'center'}>
            <h1>Entrar</h1>
          </Center>
          <Center>
            <p>Poste ofertas ou fique por dentro das novidades</p>
          </Center>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type='email' />
            <FormHelperText>Não esqueça de colocar seu E-mail</FormHelperText>
            <FormLabel>Senha</FormLabel>
            <Input type='password' />
            <FormHelperText>Não esqueça de colocar sua senha</FormHelperText>
          </FormControl>
          <Center h='50px' color='white'>
            <Button px={6} borderRadius={'2xl'} bgColor='#17E1B1' variant='solid'>
              Login
            </Button>
          </Center>
          <Center h='50px' color='white'>
            <Button
              leftIcon={<AiOutlineGoogle />}
              px={6}
              borderRadius={'2xl'}
              bgColor='#17E1B1'
              variant='solid'
            >
              Entrar com o Google
            </Button>
          </Center>
        </Box>
      </Center>
    </>
  );
}
