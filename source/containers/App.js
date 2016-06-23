import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import classNames from '../utils/classNames';

import { fetchTodos } from '../reducers/todos';

import Navigation from '../components/Navigation';
import Todos from '../components/Todos';
import Container from '../components/Container';
import Button from '../components/Button';

class App extends Component {

	componentDidMount() {
		this.props.getTodos();
	}

	render() {
		const { todos } = this.props;
		return (
			<div>
				<Navigation />
				<Container>
					<Todos todos={todos} />
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
}

App.propTypes = {
	todos: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = (dispatch) => {
	return {
		getTodos: () => {
			dispatch(fetchTodos());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
