import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { instaJobsTheme } from './styles/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={instaJobsTheme}>
    <BrowserRouter>
      <ColorModeScript initialColorMode={instaJobsTheme.config.initialColorMode} />
      <App />
    </BrowserRouter>
  </ChakraProvider>

);
