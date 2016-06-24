import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';


class Todo extends Component {
	render = () => {
		const { id, todo } = this.props;
		return (
			<a href="#" className={classNames('todo', { completed: todo.completed })}>{todo.title}</a>
		);
	}
}

Todo.propTypes = {
	id: PropTypes.string.isRequired,
	todo: PropTypes.object.isRequired
};

export default Todo
