import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from '~/providers/Auth/useAuth';

export function PrivateRoutes({ children }: { children: JSX.Element }) {
  const { signed } = useAuth();

  if (!signed) {
    return (
      <Flex bgColor='gray.200' height='100vh' mr='1rem' alignItems='center' justifyContent='center' flexDirection='column' >
        <Text fontSize='2rem' > Faça o login para ter acesso.</Text >
        <Link to='/' >
          <Button colorScheme='blue' >
            Ir para login
          </Button>
        </Link>
      </Flex>
    );
  }

  return children;
}
