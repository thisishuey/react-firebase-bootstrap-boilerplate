import {
	CREATE_TODO_REQUEST, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE,
	READ_TODOS_REQUEST, READ_TODOS_SUCCESS, READ_TODOS_FAILURE,
	UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE,
	DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE
 } from '../actions'

const initialState = {
	isLoading: false,
	todos: {},
	error: {}
};

function todos(state = initialState, action) {
	switch (action.type) {
		case CREATE_TODO_REQUEST:
			return state
		case CREATE_TODO_SUCCESS:
			return { ...state, error: {} }
		case CREATE_TODO_FAILURE:
			return { ...state, error: action.error }
		case READ_TODOS_REQUEST:
			return { ...state, isLoading: true };
		case READ_TODOS_SUCCESS:
			return { ...state, isLoading: false, todos: action.todos, error: {} };
		case READ_TODOS_FAILURE:
			return { ...state, isLoading: false, todos: {}, error: action.error };
		case UPDATE_TODO_REQUEST:
			return state
		case UPDATE_TODO_SUCCESS:
			return { ...state, error: {} }
		case UPDATE_TODO_FAILURE:
			return { ...state, error: action.error }
		case DELETE_TODO_REQUEST:
			return state
		case DELETE_TODO_SUCCESS:
			return { ...state, error: {} }
		case DELETE_TODO_FAILURE:
			return { ...state, error: action.error }
		default:
			return state;
	}
}

export default todos
