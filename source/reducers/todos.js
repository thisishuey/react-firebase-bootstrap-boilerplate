import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS } from '../actions'

const initialState = {
	isLoading: false,
	todos: []
};

function todos(state = initialState, action) {
	switch (action.type) {
		case FETCH_TODOS_REQUEST:
			return { ...state, isLoading: true };
		case FETCH_TODOS_SUCCESS:
			return { ...state, isLoading: false, todos: payload.todos };
		default:
			return state;
	}
}

export default todos
