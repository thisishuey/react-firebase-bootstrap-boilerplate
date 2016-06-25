/* @flow */
import firebase from 'firebase';
import firebaseConfig from '../../firebaseConfig';


firebase.initializeApp(firebaseConfig);
const database: Object = firebase.database();

class Firebase {

	static create = (path: string, value: Object) => new Promise((resolve: Function, reject: Function) => (
		database.ref(path).push(value, (error: Error) => (error ? reject(error) : resolve()))
	));
	static read = (path: string) => database.ref(path);
	static update = (path: string, value: Object) => database.ref(path).update(value);
	static delete = (path: string) => database.ref(path).remove();

}

export default Firebase;
