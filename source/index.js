/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

let devToolsElement;

if (process.env.NODE_ENV !== 'production') {
	const DevTools = require('./containers/DevTools').default; // eslint-disable-line global-require
	devToolsElement = <DevTools />;
}

render(
	<Provider store={store}>
		<div>
			<Router history={history} routes={routes} />
			{devToolsElement}
		</div>
	</Provider>,
	document.getElementById('root')
);
