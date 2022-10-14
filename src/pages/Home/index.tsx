import { Box, Flex, Spacer, useTheme } from '@chakra-ui/react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const theme = useTheme();
  return (
    <>
      <Box bgColor={theme.colors.primary} px={4} py={4}>
        <Flex alignItems={'center'}>
          <div>logo</div>
          <Spacer />
          <Flex alignItems={'center'}>
            <div>
              <Link to='/login'>
                <p>Login</p>
              </Link>
            </div>
            <div className='icon'>
              <Link to='/login'>
                <HiOutlineUserCircle />
              </Link>
            </div>
          </Flex>
        </Flex>
      </Box>
      <h1 className='teste'>Bem vindo a página principal</h1>
    </>
  );
}
