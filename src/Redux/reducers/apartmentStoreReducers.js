import { ADD_TO_STORE } from '../action/apartmentAction';

const initialState = {
	apointments: '',
};

const apartmentStoreReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_STORE:
			return { ...state };

		default:
			return state;
	}
};

export default apartmentStoreReducers;
