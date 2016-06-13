import React, { Component } from 'react';
import ClassNames from './ClassNames';

import Navigation from './Navigation';
import Container from './Container';
import Button from './Button';

class App extends Component {
	render = () => (
		<div>
			<Navigation />
			<Container>
				<div className={ClassNames('starter-template')}>
					<h1>Bootstrap starter template</h1>
					<p className={ClassNames('lead')}>
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
