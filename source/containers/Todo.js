/* @flow */
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classNames from '../utils/classNames';

import Close from '../icons/Close';


class Todo extends Component {

	constructor(props: Object) {
		super(props);
		/* $FlowIssue: Not sure why flow can't handle this */
		this.handleToggle = this.handleToggle.bind(this);
		/* $FlowIssue: Not sure why flow can't handle this */
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleToggle(event: Event) {
		const { id, todo, updateTodo } = this.props;
		event.preventDefault();
		updateTodo(id, { ...todo, completed: !todo.completed });
	}

	handleDelete(event: Event) {
		const { id, deleteTodo } = this.props;
		event.preventDefault();
		event.stopPropagation();
		deleteTodo(id);
	}

	render() {
		const { todo } = this.props;
		const todoClassNames = [
			'todo',
			'col-xs-12',
			'col-md-8',
			'col-md-offset-2',
			'col-lg-6',
			'col-lg-offset-3',
			{ completed: todo.completed }
		];
		return (
			<a href="#" onClick={this.handleToggle} className={classNames(todoClassNames)}>
				<button
					className={classNames('btn', 'btn-danger', 'btn-sm', 'pull-right')}
					onClick={this.handleDelete}
				>
					<Close />
				</button>
				<h4>{todo.text}</h4>
				<div>
					<div className={classNames('pull-left')}>
						<small>
							<strong>Created:</strong> {moment(todo.created).fromNow()}
							{' | '}
							<strong>Last Modified:</strong> {moment(todo.modified).fromNow()}
						</small>
					</div>
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

export default Todo;
