import Firebase from '../clients/Firebase';
import * as types from '../constants/ActionTypes';


const createTodoRequest = () => ({ type: types.CREATE_TODO_REQUEST });
const createTodoSuccess = () => ({ type: types.CREATE_TODO_SUCCESS });
const createTodoFailure = error => ({ type: types.CREATE_TODO_FAILURE, error });

export function createTodo(todo) {
	return dispatch => {
		const newTodo = {
			text: todo.text || 'New Todo',
			completed: todo.completed || false,
			created: new Date().valueOf(),
			modified: new Date().valueOf()
		};
		dispatch(createTodoRequest());
		Firebase.create('todos', newTodo)
			.then(dispatch(createTodoSuccess()))
			.catch(error => {
				dispatch(createTodoFailure(error));
				throw error;
			});
	};
}

const readTodosRequest = () => ({ type: types.READ_TODOS_REQUEST });
const readTodosSuccess = todos => ({ type: types.READ_TODOS_SUCCESS, todos });
const readTodosFailure = errors => ({ type: types.READ_TODOS_FAILURE, errors });

export const readTodos = () => dispatch => {
	dispatch(readTodosRequest());
	Firebase.read('todos').on('value', response => {
		if (response !== null) {
			dispatch(readTodosSuccess(response.val()));
		} else {
			dispatch(readTodosFailure(new Error('Error reading todos')));
		}
	});
};

const updateTodoRequest = () => ({ type: types.UPDATE_TODO_REQUEST });
const updateTodoSuccess = () => ({ type: types.UPDATE_TODO_SUCCESS });
const updateTodoFailure = error => ({ type: types.UPDATE_TODO_FAILURE, error });

export function updateTodo(id, todo) {
	const newTodo = {
		text: todo.text || 'New Todo',
		completed: todo.completed || false,
		created: todo.created || new Date().valueOf(),
		modified: new Date().valueOf()
	};
	return dispatch => {
		dispatch(updateTodoRequest());
		Firebase.update(`todos/${id}`, newTodo)
			.then(dispatch(updateTodoSuccess()))
			.catch(error => {
				dispatch(updateTodoFailure(error));
				throw error;
			});
	};
}

const deleteTodoRequest = () => ({ type: types.DELETE_TODO_REQUEST });
const deleteTodoSuccess = () => ({ type: types.DELETE_TODO_SUCCESS });
const deleteTodoFailure = error => ({ type: types.DELETE_TODO_FAILURE, error });

export function deleteTodo(id) {
	return dispatch => {
		dispatch(deleteTodoRequest());
		Firebase.delete(`todos/${id}`)
			.then(dispatch(deleteTodoSuccess()))
			.catch(error => {
				dispatch(deleteTodoFailure(error));
				throw error;
			});
	};
}
