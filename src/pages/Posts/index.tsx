import { Flex } from '@chakra-ui/react';
import Post from '~/components/Post';

export default function PostsPage() {
	return (
		<Flex flexDirection='column' justifyContent='center' alignItems='center'>
			<Post />
		</Flex>
	);
}
