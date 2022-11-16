import { Flex } from '@chakra-ui/react';
import Post from '~/components/Post';

export function HomePage() {
  return (
    <>
      <Flex flexDirection='column' alignItems='center' >
        <Post />
      </Flex>
    </>
  );
}
