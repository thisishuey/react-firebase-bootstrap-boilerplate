import React, { Component } from 'react';
import { Provider } from 'react-redux';

import classNames from '../utils/classNames';
import configureStore from '../redux/configureStore';

import Navigation from './Navigation';
import Container from './Container';
import Button from './Button';

import Todos from '../containers/Todos';

let devToolsElement;

if (process.env.NODE_ENV !== 'production') {
	const DevTools = require('./DevTools').default;
	devToolsElement = (<DevTools />);
}

const store = configureStore();

class App extends Component {
	render = () => (
		<Provider store={store}>
			<div>
				<Navigation />
				<Container>
					<Todos />
					<div className={classNames('starter-template')}>
						<h1>Bootstrap starter template</h1>
						<p className={classNames('lead')}>
							Use this document as a way to quickly start any new project.<br />
							All you get is this text and a mostly barebones HTML document.
						</p>
						<Button>Loading...</Button>
					</div>
				</Container>
				{devToolsElement}
			</div>
		</Provider>
	);
}

export default App
