import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from '@chakra-ui/react';
import  Avatar  from '@mui/material/Avatar';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { ContactModal } from 'components/Modal/Modal';
import { selectContacts } from 'redux/selectors';
import { IoPersonRemove } from 'react-icons/io5';
import { getRandomHexColor } from 'untils/getRandomHexColor';
import { abbreviationName } from 'untils/abbreviationName';
import {
	Item,
	ContactDescr,
	ThumBtns,
	TelegramShareButton,
	TelegramIcon,
	Btn,
	ModalPhotoWrapper,
} from './ContactItem.styled';

export const ContactItem = ({ name, phone, id }) => {
	const contacts = useSelector(selectContacts);
	const [selectedContact, setSelectedContact] = useState(null);

	const dispatch = useDispatch();

	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
	};

	const closeModal = () => {
		setSelectedContact(null);
	};

	const setModalData = id => {
		const selectContact = contacts.find(contact => contact.id === id);
		setSelectedContact(selectContact);
	};

	function avatarAbbreviation(name) {
		return {
			sx: {
				bgcolor: getRandomHexColor(),
			},
			children: abbreviationName(name),
		};
	}

	return (
		<>
			<Item>
				<Tooltip label="Click" color="#000" fontSize="xs">
					<ModalPhotoWrapper>
						<Avatar onClick={() => setModalData(id)}
							{...avatarAbbreviation(Object.values(name).join(''))}
						/>
					</ModalPhotoWrapper>
				</Tooltip>
				<ContactDescr>
					<span>{name}</span>
					<Tooltip label="Call" color="#024934" fontSize="xs">
						<span>
							<a href={'tel:' + phone}>{phone}</a>
						</span>
					</Tooltip>
					<ThumBtns>
						<Tooltip label="Call" color="#024934" fontSize="xs">
							<TelegramShareButton
								url={'tel:' + phone}
								title={'contact' + name}
								hashtag="#telnumber">
								<TelegramIcon size={30} round={true} />
							</TelegramShareButton>
						</Tooltip>
						<Tooltip label="Delete" color="#024934" fontSize="xs">
							<Btn type="button" onClick={() => onDeleteContact(id)}>
								<IoPersonRemove size="14" />
							</Btn>
						</Tooltip>
					</ThumBtns>
				</ContactDescr>
			</Item>
			<ContactModal
				isOpen={selectedContact !== null}
				onClose={closeModal}
				data={selectedContact}
			/>
		</>
	);
};

ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};