import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export const createTodo = ({ title, completed = false }) => database.ref('todo').push({ title, completed }).key;

export const getTodos = () => database.ref('todo').on('value', response => {
	console.log(response !== null ? response.val() : 'GetList failed');
});

export const getTodo = (todoId) => database.ref(`todo/${todoId}`).on('value', response => {
	console.log(response !== null ? response.val() : 'Get failed');
});

export const updateTodo = (todoId, data) => database.ref(`todo/${todoId}`)
	.set(data)
	.then(() => console.log('Update succeeded.'))
	.catch(error => console.log(`Update failed: ${error.message}`));

export const deleteTodo = (todoId) => database.ref(`todo/${todoId}`)
	.remove()
	.then(() => console.log('Delete succeeded.'))
	.catch(error => console.log(`Delete failed: ${error.message}`));

// TODO: need to convert this into proper clients
// https://github.com/douglascorrea/react-hot-redux-firebase-starter/blob/master/src/api/firebase.js
// https://firebase.google.com/docs/database/web/save-data
// import { createTodo, getTodos, deleteTodo } from '../clients/Todo';
// const todoId = createTodo({ title: 'todo' });
// getTodos();
// deleteTodo(todoId);
