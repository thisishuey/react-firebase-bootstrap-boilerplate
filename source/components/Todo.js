import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classNames from '../utils/classNames';

import Close from '../icons/Close';


class Todo extends Component {

	handleToggle = event => {
		const { id, todo, updateTodo } = this.props;
		event.preventDefault();
		updateTodo(id, { ...todo, completed: !todo.completed });
	}

	handleDelete = event => {
		const { id, deleteTodo } = this.props;
		event.preventDefault();
		event.stopPropagation();
		deleteTodo(id);
	}

	render = () => {
		const { id, todo } = this.props;
		return (
			<a href="#" onClick={this.handleToggle} className={classNames('todo', { completed: todo.completed })}>
				<button className={classNames('btn', 'btn-danger', 'btn-sm', 'pull-right')} onClick={this.handleDelete}><Close /></button>
				<h4>{todo.text}</h4>
				<div>
					<div className={classNames('pull-left')}><small><strong>Created:</strong> {moment(todo.created).fromNow()} | <strong>Last Modified:</strong> {moment(todo.modified).fromNow()}</small></div>
				</div>
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
