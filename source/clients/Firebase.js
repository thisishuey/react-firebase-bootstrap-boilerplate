import firebase from 'firebase';
import firebaseConfig from '../../firebaseConfig';

firebase.initializeApp(firebaseConfig);

class Firebase {

	static create = (path, value) => {
		return new Promise((resolve, reject) => {
			firebase
				.database()
				.ref(path)
				.push(value, error => error ? reject(error) : resolve());
		});
	}

	static read = path => firebase.database().ref(path);

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
