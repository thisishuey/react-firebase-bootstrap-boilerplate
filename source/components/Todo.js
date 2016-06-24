import React, { Component } from 'react';
import classNames from '../utils/classNames';


class Todo extends Component {
	render = () => {
		const { todo } = this.props;
		return <a href="#" className={classNames('todo', { completed: todo.completed })}>{todo.title}</a>;
	}
}

export default Todo
