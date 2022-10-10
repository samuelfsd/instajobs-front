import { EditIcon, HamburgerIcon, ViewIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	Button,
	Flex,
	IconButton,
	List,
	ListIcon,
	ListItem,
	Menu,
	MenuButton,
	MenuItem,
	MenuList, Text, WrapItem
} from '@chakra-ui/react';

import { BsFillPersonCheckFill } from 'react-icons/bs';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { IoMdMore } from 'react-icons/io'


export default function Post() {
	return (
		<Flex flexDirection='column' alignItems='space-between' bgColor='#EEF1FF' width='40rem' height='22rem' padding='1rem' mt='1rem'  >
			<Flex justifyContent='space-between' alignItems='center' height='2rem'>
				<Flex alignItems='center' >
					<WrapItem mr='0.8rem' >
						<Avatar size='md' name='Christian Nwamba' src='https://bit.ly/sage-adebayo' />{' '}
					</WrapItem>
					<Text fontSize='1.2rem' fontWeight='700' mr='0.2rem' >Márcio - </Text>
					<Text fontSize='1rem' mt='0.2rem' >Gestor de projetos do Pecege</Text>
				</Flex>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<IoMdMore fontSize='2rem' />}
					/>
					<MenuList>
						<MenuItem icon={<EditIcon />}>
							Editar
						</MenuItem>
						<MenuItem icon={<ViewIcon />}>
							Visualizar
						</MenuItem>
					</MenuList>
				</Menu>
			</Flex>

			<Flex justifyContent='space-between' fontSize='1rem' fontWeight='700' my='1rem' >
				<List spacing={3} width='65%' >
					<ListItem>
						<ListIcon as={IoCheckmarkCircleSharp} />
						Desenvolvedor Front-end
					</ListItem>
					<ListItem>
						<ListIcon as={IoCheckmarkCircleSharp} />
						Nível: Júnior
					</ListItem>
				</List>

				<List spacing={3} width='35%'>
					<ListItem>
						<ListIcon as={IoCheckmarkCircleSharp} />
						Salário: R$2500,00
					</ListItem>
					<ListItem>
						<ListIcon as={IoCheckmarkCircleSharp} />
						Local: Remoto
					</ListItem>
				</List>
			</Flex>

			<Flex>
				<Text textAlign='justify' >
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					It has survived not only five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the grammy.
				</Text>
			</Flex>

			<Flex alignItems='center' justifyContent='flex-end' mt='1rem'  >
				<Button rightIcon={<BsFillPersonCheckFill />} backgroundColor='#17E1B1' color='white' variant='solid' width='12rem' >
					Enviar Candidatura
				</Button>
			</Flex>
		</Flex >
	);
}
