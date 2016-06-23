import firebase from 'firebase';
import firebaseConfig from '../../../firebaseConfig';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export const fetchTodosRequest = isLoading => ({ type: FETCH_TODOS_REQUEST, payload: { isLoading } });
export const fetchTodosSuccess = todos => ({ type: FETCH_TODOS_SUCCESS, payload: { todos } });
export const fetchTodosError = errors => ({ type: FETCH_TODOS_ERROR, payload: { errors } });

export const fetchTodos = () => {
	return dispatch => {
		dispatch(fetchTodosRequest());
		return database.ref('todos').on('value', response => {
			dispatch(fetchTodosSuccess(response.val()));
		});
	};
}

const initialState = {
	isLoading: false,
	todos: [],
	errors: undefined
};

export default function reducer(state = initialState, action) {
	const payload = action.payload || {};
	switch (action.type) {
		case FETCH_TODOS_REQUEST:
			return { ...state, isLoading: true };
		case FETCH_TODOS_SUCCESS:
			return { ...state, isLoading: false, todos: payload.todos, errors: undefined };
		case FETCH_TODOS_ERROR:
			return { ...state, isLoading: false, todos: [], errors: payload.errors };
		default:
			return state;
	}
}
