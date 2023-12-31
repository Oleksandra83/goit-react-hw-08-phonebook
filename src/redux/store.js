import { configureStore } from '@reduxjs/toolkit';

import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import persistAuthReducer from './auth/auth-slice';

export const store = configureStore({
	reducer: {
		auth: persistAuthReducer,
		filter: filterReducer,
		contacts: contactsReducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);