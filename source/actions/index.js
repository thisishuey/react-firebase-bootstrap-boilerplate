import Firebase from '../clients/Firebase'

export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST'
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS'
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE'

const createTodoRequest = () => ({ type: CREATE_TODO_REQUEST });
const createTodoSuccess = () => ({ type: CREATE_TODO_SUCCESS });
const createTodoFailure = error => ({ type: CREATE_TODO_FAILURE, error });

export function createTodo(todo) {
	return dispatch => {
		dispatch(createTodoRequest());
		Firebase.create('todos', todo)
			.then(dispatch(createTodoSuccess()))
			.catch(error => {
				dispatch(createTodoFailure(error))
				throw(error);
			});
	};
}

export const READ_TODOS_REQUEST = 'READ_TODOS_REQUEST'
export const READ_TODOS_SUCCESS = 'READ_TODOS_SUCCESS'
export const READ_TODOS_FAILURE = 'READ_TODOS_FAILURE'

const readTodosRequest = () => ({ type: READ_TODOS_REQUEST });
const readTodosSuccess = todos => ({ type: READ_TODOS_SUCCESS, todos });
const readTodosFailure = errors => ({ type: READ_TODOS_FAILURE, errors });

export const readTodos = () => {
	return dispatch => {
		dispatch(readTodosRequest());
		Firebase.read('todos').on('value', response => {
			if (response !== null) {
				dispatch(readTodosSuccess(response.val()));
			} else {
				dispatch(readTodosFailure(error));
			}
		});
	};
}

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE'

const updateTodoRequest = () => ({ type: UPDATE_TODO_REQUEST });
const updateTodoSuccess = () => ({ type: UPDATE_TODO_SUCCESS });
const updateTodoFailure = error => ({ type: UPDATE_TODO_FAILURE, error });

export function updateTodo(todoId, todo) {
	return dispatch => {
		dispatch(updateTodoRequest());
		Firebase.update('todos/' + todoId, todo)
			.then(dispatch(updateTodoSuccess()))
			.catch(error => {
				dispatch(updateTodoFailure(error))
				throw(error);
			});
	};
}

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE'

const deleteTodoRequest = () => ({ type: DELETE_TODO_REQUEST });
const deleteTodoSuccess = () => ({ type: DELETE_TODO_SUCCESS });
const deleteTodoFailure = error => ({ type: DELETE_TODO_FAILURE, error });

export function deleteTodo(todoId) {
	return dispatch => {
		dispatch(deleteTodoRequest());
		Firebase.delete('todos/' + todoId)
			.then(dispatch(deleteTodoSuccess()))
			.catch(error => {
				dispatch(deleteTodoFailure(error))
				throw(error);
			});
	};
}
