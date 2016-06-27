/* @flow */
import React, { PropTypes } from 'react';
import classNames from '../utils/classNames';

import Spinner from '../icons/Spinner';
import Todo from '../containers/Todo';
import TodoForm from '../containers/TodoForm';


const Todos = (props: Object) => {
	const { todos, createTodo, updateTodo, deleteTodo } = props;
	const todoClassNames = [
		'todo',
		'col-xs-12',
		'col-md-8',
		'col-md-offset-2',
		'col-lg-6',
		'col-lg-offset-3',
		'center'
	];
	const loadingAnimation = todos.isLoading ?
		<div className={classNames(todoClassNames)}><Spinner /></div> :
		undefined;
	const todosObject = todos.todos;
	const todosList = todosObject ?
		Object.keys(todosObject).map(key => (
			<Todo key={key} id={key} todo={todosObject[key]} updateTodo={updateTodo} deleteTodo={deleteTodo} />
		)) : <div className={classNames(todoClassNames, 'error')}>No Todos available</div>;

	return (
		<div>
			<div className={classNames('todos', 'row')}>
				{loadingAnimation}
				{todosList}
				<TodoForm createTodo={createTodo} />
			</div>
		</div>
	);
};

Todos.propTypes = {
	todos: PropTypes.object.isRequired,
	createTodo: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};

export default Todos;
