import React, { Component } from 'react';

import classNames from '../utils/classNames';

import Navigation from './Navigation';
import Container from './Container';
import Button from './Button';

import Todos from '../containers/Todos';

class App extends Component {
	render = () => (
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
		</div>
	);
}

export default App
