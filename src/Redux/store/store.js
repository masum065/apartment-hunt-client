import { createStore } from 'redux';
import apartmentStoreReducers from '../reducers/apartmentStoreReducers';

export const store = createStore(apartmentStoreReducers);
