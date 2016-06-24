import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore';
import routes from './routes';

import { Router } from 'react-router';


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

let devToolsElement;

if (process.env.NODE_ENV !== 'production') {
	const DevTools = require('./containers/DevTools').default;
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
