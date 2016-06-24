import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';

import Spinner from '../icons/Spinner';
import Todo from './Todo';


class Todos extends Component {
	render() {
		const { todos, updateTodo } = this.props;
		const loadingAnimation = todos.isLoading ? <Spinner /> : undefined;
		const todosObject = todos.todos;
		const todosList = Object.keys(todosObject).map(key => <Todo key={key} id={key} todo={todosObject[key]} updateTodo={updateTodo} />);

		return (
			<div>
				{loadingAnimation}
				<div className={classNames('todos')}>{todosList}</div>
			</div>
		);
	}
}

Todos.propTypes = {
	todos: PropTypes.object.isRequired,
	updateTodo: PropTypes.func.isRequired
};

export default Todos
