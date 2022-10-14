import { Box, useTheme } from '@chakra-ui/react';
import { Header } from '~/components/Header';

export default function HomePage() {
  const theme = useTheme();
  return (
    <>
      <Box bgColor={theme.colors.primary}>
        <Header />
      </Box>
      <h1 className='teste'>Bem vindo a página principal</h1>
    </>
  );
}
