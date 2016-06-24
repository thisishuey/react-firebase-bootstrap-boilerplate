import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';


class Todo extends Component {

	onClick = event => {
		const { id, todo, updateTodo } = this.props;
		updateTodo(id, { ...todo, completed: !todo.completed });
	}

	render = () => {
		const { id, todo } = this.props;
		return (
			<button onClick={this.onClick} className={classNames('todo', { completed: todo.completed })}>
				{todo.text} - {todo.modified}
			</button>
		);
	}
}

Todo.propTypes = {
	id: PropTypes.string.isRequired,
	todo: PropTypes.object.isRequired,
	updateTodo: PropTypes.func.isRequired
};

export default Todo
