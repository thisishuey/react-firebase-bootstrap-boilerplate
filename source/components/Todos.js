import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';

import Spinner from '../icons/Spinner';
import Todo from './Todo';
import TodoForm from './TodoForm';


class Todos extends Component {
	render() {
		const { todos, createTodo, updateTodo } = this.props;
		const loadingAnimation = todos.isLoading ? <div className={classNames('todo', 'center')}><Spinner /></div> : undefined;
		const todosObject = todos.todos;
		const todosList = todosObject ?
			Object.keys(todosObject).map(key => <Todo key={key} id={key} todo={todosObject[key]} updateTodo={updateTodo} />) :
			<div className={classNames('todo', 'error')}>No Todos available</div>;

		return (
			<div>
				<div className={classNames('todos')}>
					{loadingAnimation}
					{todosList}
					<TodoForm createTodo={createTodo} />
				</div>
			</div>
		);
	}
}

Todos.propTypes = {
	todos: PropTypes.object.isRequired,
	createTodo: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired
};

export default Todos
