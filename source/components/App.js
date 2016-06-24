import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';

import Navigation from './Navigation';
import Container from './Container';
import AboutPage from './AboutPage.js'
import ContactPage from './ContactPage.js'
import TodosPage from '../containers/TodosPage.js'


class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Container>
					<TodosPage />
				</Container>
			</div>
		);
	}
}

export default App
