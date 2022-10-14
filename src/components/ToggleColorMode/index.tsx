import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={() => toggleColorMode()}>
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
