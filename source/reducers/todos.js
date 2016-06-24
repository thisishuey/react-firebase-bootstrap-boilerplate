import * as types from '../constants/ActionTypes';


const initialState = {
	isLoading: false,
	todos: {},
	error: {}
};

function todos(state = initialState, action) {
	switch (action.type) {
		case types.CREATE_TODO_REQUEST:
			return { ...state, isLoading: true };
		case types.CREATE_TODO_SUCCESS:
			return { ...state, isLoading: false, error: {} };
		case types.CREATE_TODO_FAILURE:
			return { ...state, isLoading: false, error: action.error };
		case types.READ_TODOS_REQUEST:
			return { ...state, isLoading: true };
		case types.READ_TODOS_SUCCESS:
			return { ...state, isLoading: false, todos: action.todos, error: {} };
		case types.READ_TODOS_FAILURE:
			return { ...state, isLoading: false, todos: {}, error: action.error };
		case types.UPDATE_TODO_REQUEST:
			return { ...state, isLoading: true };
		case types.UPDATE_TODO_SUCCESS:
			return { ...state, isLoading: false, error: {} };
		case types.UPDATE_TODO_FAILURE:
			return { ...state, isLoading: false, error: action.error };
		case types.DELETE_TODO_REQUEST:
			return { ...state, isLoading: true };
		case types.DELETE_TODO_SUCCESS:
			return { ...state, isLoading: false, error: {} };
		case types.DELETE_TODO_FAILURE:
			return { ...state, isLoading: false, error: action.error };
		default:
			return state;
	}
}

export default todos;
