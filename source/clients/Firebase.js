import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const create = (username, email) => database.ref().child('users').push({ username, email }).key;

export const read = (userId) => database.ref('users/' + userId).on('value', snapshot => console.log(snapshot.val()));

// TODO: need to convert this into proper clients
// https://github.com/douglascorrea/react-hot-redux-firebase-starter/blob/master/src/api/firebase.js
// https://firebase.google.com/docs/database/web/save-data
// import { create, read } from '../clients/Firebase';
// const userId = create('Huey', 'huey@carpetelam.com');
// read(userId);
