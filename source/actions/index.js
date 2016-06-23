import firebase from 'firebase';
import firebaseConfig from '../../firebaseConfig';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'

function fetchTodosRequest() {
	return {
		type: FETCH_TODOS_REQUEST
	}
}

function fetchTodosSuccess(todos) {
	return {
		type: FETCH_TODOS_SUCCESS,
		todos
	}
}

export function fetchTodos() {
	return dispatch => {
		dispatch(fetchTodosRequest());
		return database.ref('todos').on('value', response => dispatch(fetchTodosSuccess(response.val())));
	};
}
