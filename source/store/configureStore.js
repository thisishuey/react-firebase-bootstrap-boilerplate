/* @flow */
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';


let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
	createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware))(createStore);
} else {
	const { persistState } = require('redux-devtools'); // eslint-disable-line global-require
	const DevTools = require('../containers/DevTools').default; // eslint-disable-line global-require
	const getDebugSessionKey = () => {
		const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
		return (matches && matches.length > 0) ? matches[1] : null;
	};
	createStoreWithMiddleware = compose(
		applyMiddleware(thunkMiddleware),
		DevTools.instrument(),
		persistState(getDebugSessionKey())
	)(createStore);
}

export default function configureStore(initialState: Object = {}) {
	return createStoreWithMiddleware(rootReducer, initialState);
}
