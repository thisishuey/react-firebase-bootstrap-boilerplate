/* @flow */
import Firebase from '../clients/Firebase';
import * as types from '../constants/ActionTypes';


const createTodoRequest = () => ({ type: types.CREATE_TODO_REQUEST });
const createTodoSuccess = () => ({ type: types.CREATE_TODO_SUCCESS });
const createTodoFailure = (error: Error) => ({ type: types.CREATE_TODO_FAILURE, error });

export function createTodo(todo: Object) {
	return (dispatch: Function) => {
		const newTodo = {
			text: todo.text || 'New Todo',
			completed: todo.completed || false,
			created: new Date().valueOf(),
			modified: new Date().valueOf()
		};
		dispatch(createTodoRequest());
		Firebase.create('todos', newTodo)
			.then(dispatch(createTodoSuccess()))
			.catch((error: Error) => {
				dispatch(createTodoFailure(error));
				throw error;
			});
	};
}

const readTodosRequest = () => ({ type: types.READ_TODOS_REQUEST });
const readTodosSuccess = (todos: Object) => ({ type: types.READ_TODOS_SUCCESS, todos });
const readTodosFailure = (error: Error) => ({ type: types.READ_TODOS_FAILURE, error });

export const readTodos = () => (dispatch: Function) => {
	dispatch(readTodosRequest());
	Firebase.read('todos').on('value', (response: Object) => {
		if (response !== null) {
			dispatch(readTodosSuccess(response.val()));
		} else {
			dispatch(readTodosFailure(new Error('Error reading todos')));
		}
	});
};

const updateTodoRequest = () => ({ type: types.UPDATE_TODO_REQUEST });
const updateTodoSuccess = () => ({ type: types.UPDATE_TODO_SUCCESS });
const updateTodoFailure = (error: Error) => ({ type: types.UPDATE_TODO_FAILURE, error });

export function updateTodo(id: string, todo: Object) {
	const newTodo = {
		text: todo.text || 'New Todo',
		completed: todo.completed || false,
		created: todo.created || new Date().valueOf(),
		modified: new Date().valueOf()
	};
	return (dispatch: Function) => {
		dispatch(updateTodoRequest());
		Firebase.update(`todos/${id}`, newTodo)
			.then(dispatch(updateTodoSuccess()))
			.catch((error: Error) => {
				dispatch(updateTodoFailure(error));
				throw error;
			});
	};
}

const deleteTodoRequest = () => ({ type: types.DELETE_TODO_REQUEST });
const deleteTodoSuccess = () => ({ type: types.DELETE_TODO_SUCCESS });
const deleteTodoFailure = (error: Error) => ({ type: types.DELETE_TODO_FAILURE, error });

export function deleteTodo(id: string) {
	return (dispatch: Function) => {
		dispatch(deleteTodoRequest());
		Firebase.delete(`todos/${id}`)
			.then(dispatch(deleteTodoSuccess()))
			.catch((error: Error) => {
				dispatch(deleteTodoFailure(error));
				throw error;
			});
	};
}
