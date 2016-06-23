import firebase from 'firebase';
import firebaseConfig from '../../firebaseConfig';


firebase.initializeApp(firebaseConfig);
const database = firebase.database();

class Firebase {

	static create = (path, value) => new Promise((resolve, reject) => database.ref(path).push(value, error => error ? reject(error) : resolve()));
	static read = path => database.ref(path);
	static update = (path, value) => database.ref(path).update(value);
	static delete = path => database.ref(path).remove();

}

export default Firebase;
