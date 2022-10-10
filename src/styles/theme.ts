import { extendTheme } from '@chakra-ui/react';

export const instaJobsTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    purple_500: '#6F38C5',
    purple_100: '#B1B2FF',
    green_500: '#17E1B1',
    info: '#715AFF',
    warning: '#FFD275',
    danger: '#FB4B4E',
    black: {
      600: 'RGBA(0, 0, 0, 0.48)',
      900: 'RGBA(0, 0, 0, 0.92)',
    },
    gray: {
      600: '#4A5568',
      800: '#1A202C',
    },
  },
});
