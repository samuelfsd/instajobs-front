import { extendTheme } from '@chakra-ui/react';

export const instaJobsTheme = extendTheme({
  colors: {
    primary: '#5887FF',
    secundary: '#102E4A',
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
