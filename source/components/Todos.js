import React, { Component } from 'react';
import classNames from '../utils/classNames';

import Spinner from '../icons/Spinner';
import Todo from './Todo';


class Todos extends Component {

	render() {
		const { todos } = this.props;
		const loadingAnimation = todos.isLoading ? <Spinner /> : undefined;
		const todosObject = todos.todos;
		const todosList = Object.keys(todosObject)
			.map(key => <Todo key={key} todo={todosObject[key]} />);

		return (
			<div>
				{loadingAnimation}
				<div className={classNames('todos')}>{todosList}</div>
			</div>
		);
	}
}

export default Todos;
