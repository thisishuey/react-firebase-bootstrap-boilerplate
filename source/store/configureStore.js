import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';


let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
	createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware))(createStore);
} else {
	const { persistState } = require('redux-devtools');
	const DevTools = require('../components/DevTools').default;
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

export default function configureStore(initialState) {
	return createStoreWithMiddleware(rootReducer, initialState);
}
