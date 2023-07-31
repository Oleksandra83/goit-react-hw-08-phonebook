import {combineReducers } from 'redux';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import persistAuthReducer from './auth/auth-slice';

export const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer,
	auth: persistAuthReducer,
});