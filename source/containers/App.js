import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from '../utils/classNames';
import { readTodos, createTodo, updateTodo, deleteTodo } from '../actions';

import Navigation from '../components/Navigation';
import Todos from '../components/Todos';
import Container from '../components/Container';
import Button from '../components/Button';


class App extends Component {

	componentDidMount() {
		// this.props.createTodo({ title: 'todo - ' + new Date() });
		this.props.readTodos();
		// this.props.updateTodo('-KKvLQIvaISybYy93l9Q', { title: 'todo - ' + new Date() });
		// this.props.deleteTodo('-KKvLQIvaISybYy93l9Q');
	}

	render() {
		const { todos, updateTodo } = this.props;
		return (
			<div>
				<Navigation />
				<Container>
					<div className={classNames('starter-template')}>
						<h1>Bootstrap starter template</h1>
						<p className={classNames('lead')}>
							Use this document as a way to quickly start any new project.<br />
							All you get is this text and a mostly barebones HTML document.
						</p>
					</div>
					<Todos todos={todos} updateTodo={updateTodo} />
				</Container>
			</div>
		);
	}
}

App.propTypes = {
	todos: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: todo => dispatch(createTodo(todo)),
		readTodos: () => dispatch(readTodos()),
		updateTodo: (id, todo) => dispatch(updateTodo(id, todo)),
		deleteTodo: id => dispatch(deleteTodo(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
