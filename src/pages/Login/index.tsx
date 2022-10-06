import { Button, Flex, Input } from '@chakra-ui/react';

export default function LoginPage() {
  return (
    <>
      <Flex>
        <Input type='text' />
        <Input type='password' />
      </Flex>

      <Button>Clique aqui</Button>
    </>
  );
}
