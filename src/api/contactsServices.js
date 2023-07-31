import {authInstance} from './authServices';

// const contactsInstance = axios.create({
// 	baseURL: 'https://64b93bc879b7c9def6c0c911.mockapi.io/contacts',
// });

export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = contact =>
	authInstance.post('/contacts', { ...contact });

export const deleteContact = id => authInstance.delete(`/contacts/${id}`);

export const editContact = contact => {
	return authInstance.patch(`/contacts/${contact.id}`, {
		name: contact.name,
		number: contact.number,
	});
};