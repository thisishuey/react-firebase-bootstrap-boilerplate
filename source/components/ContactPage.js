import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';

import Navigation from '../components/Navigation';
import Container from '../components/Container';


class ContactPage extends Component {

	render() {
		const { todos, createTodo, updateTodo, deleteTodo } = this.props;
		return (
			<div>
				<Navigation />
				<Container>
					<div className={classNames('starter-template')}>
						<h1>Contact</h1>
						<p className={classNames('lead')}>
							Use this document as a way to quickly start any new project.<br />
							All you get is this text and a mostly barebones HTML document.
						</p>
					</div>
				</Container>
			</div>
		);
	}
}

export default ContactPage
