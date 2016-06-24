import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';


class Todo extends Component {

	handleToggle = event => {
		const { id, todo, updateTodo } = this.props;
		event.preventDefault();
		updateTodo(id, { ...todo, completed: !todo.completed });
	}

	handleDelete = event => {
		const { id, deleteTodo } = this.props;
		event.stopPropagation();
		deleteTodo(id);
	}

	render = () => {
		const { id, todo } = this.props;
		return (
			<a href="#" onClick={this.handleToggle} className={classNames('todo', { completed: todo.completed })}>
				{todo.text} - {todo.modified} <button onClick={this.handleDelete}>X</button>
			</a>
		);
	}
}

Todo.propTypes = {
	id: PropTypes.string.isRequired,
	todo: PropTypes.object.isRequired,
	updateTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};

export default Todo
