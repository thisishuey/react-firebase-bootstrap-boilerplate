import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore()

let devToolsElement;

if (process.env.NODE_ENV !== 'production') {
	const DevTools = require('./containers/DevTools').default;
	devToolsElement = <DevTools />;
}

render(
	<Provider store={store}>
		<div>
			<App />
			{devToolsElement}
		</div>
	</Provider>,
	document.getElementById('root')
);
