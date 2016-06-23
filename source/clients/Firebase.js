import firebase from 'firebase';
import firebaseConfig from '../../firebaseConfig';

firebase.initializeApp(firebaseConfig);

class Firebase {

	static read = path => firebase.database().ref(path);

	static create = (path, value) => {
		return new Promise((resolve, reject) => {
			firebase
				.database()
				.ref(path)
				.push(value, error => error ? reject(error) : resolve());
		});
	}

	static update = (path, value) => {
		return new Promise((resolve, reject) => {
			firebase
				.database()
				.ref(path)
				.update(value);
		});
	}

	static delete = path => {
		return new Promise((resolve, reject) => {
			firebase
				.database()
				.ref(path)
				.remove();
		});
	}

}

export default Firebase;

// export const update = (todoId, data) => database.ref(`todos/${todoId}`)
// 	.set(data)
// 	.then(() => console.log('Update succeeded.'))
// 	.catch(error => console.log(`Update failed: ${error.message}`));
//
// export const remove = todoId => database.ref(`todos/${todoId}`)
// 	.remove()
// 	.then(() => console.log('Delete succeeded.'))
// 	.catch(error => console.log(`Delete failed: ${error.message}`));
//


// TODO: need to convert this into proper clients
// https://github.com/douglascorrea/react-hot-redux-firebase-starter/blob/master/src/api/firebase.js
// https://firebase.google.com/docs/database/web/save-data
// import { createTodo, getTodos, deleteTodo } from '../clients/Todo';
// const todoId = createTodo({ title: 'todo' });
// getTodos();
// deleteTodo(todoId);
