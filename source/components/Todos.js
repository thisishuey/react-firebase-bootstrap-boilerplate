import React, { Component } from 'react';

import Spinner from '../icons/Spinner';


class Todos extends Component {

	render() {
		const { todos } = this.props;
		const loadingAnimation = todos.isLoading ? <Spinner /> : undefined;
		const todosObject = todos.todos;
		const todosList = <ul>{Object.keys(todosObject).map(key => <li key={key}>{todosObject[key].title}</li>)}</ul>;

		return (
			<div>
				{loadingAnimation}
				{todosList}
			</div>
		);
	}
}

export default Todos;
