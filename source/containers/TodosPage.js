import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from '../utils/classNames';
import {
	readTodos as readTodosAction,
	createTodo as createTodoAction,
	updateTodo as updateTodoAction,
	deleteTodo as deleteTodoAction
} from '../actions';

import Todos from '../components/Todos';


class TodoPage extends Component {

	componentDidMount() {
		this.props.readTodos();
	}

	render() {
		const { todos, createTodo, updateTodo, deleteTodo } = this.props;
		return (
			<div>
				<div className={classNames('starter-template')}>
					<h1>Bootstrap starter template</h1>
					<p className={classNames('lead')}>
						Use this document as a way to quickly start any new project.<br />
						All you get is this text and a mostly barebones HTML document.
					</p>
				</div>
				<Todos todos={todos} createTodo={createTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
			</div>
		);
	}
}

TodoPage.propTypes = {
	todos: PropTypes.object.isRequired,
	createTodo: PropTypes.func.isRequired,
	readTodos: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
	createTodo: todo => dispatch(createTodoAction(todo)),
	readTodos: () => dispatch(readTodosAction()),
	updateTodo: (id, todo) => dispatch(updateTodoAction(id, todo)),
	deleteTodo: id => dispatch(deleteTodoAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
