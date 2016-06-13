import React, { Component } from 'react';
import Button from './Button';
import Container from './Container';
import Navigation from './Navigation';
import Styles from '../sass/styles';

class App extends Component {
	render = () => (
		<div>
			<Navigation />
			<Container>
				<div className={Styles['starter-template']}>
					<h1>Bootstrap starter template</h1>
					<p className={Styles.lead}>
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
