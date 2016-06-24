import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';


class TodoForm extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = { text: '' };
	}

	handleSubmit = event => {
		const { createTodo } = this.props;
		const { text } = this.state;
		event.preventDefault();
		if (text != '') {
			createTodo({ text });
		}
		this.setState({ text: '' });
	}

	handleChange = event => {
		this.setState({ text: event.target.value });
	}

	render = () => {
		const { id, todo } = this.props;
		return (
			<form onSubmit={this.handleSubmit} className={classNames('todo')}>
				<div className={classNames('form-group', 'row')}>
					<label for="todoText" className={classNames('col-xs-3', 'form-control-label', 'text-xs-right')}>Todo:</label>
					<div className={classNames('col-xs-6')}>
						<input type="text" id="todoText" className={classNames('form-control')} value={this.state.text} onChange={this.handleChange} placeholder="Pick up milk" autoFocus />
					</div>
					<div className={classNames('col-xs-3')}>
						<button type="submit" className={classNames('btn', 'btn-primary')}>Create</button>
					</div>
				</div>
			</form>
		);
	}
}

TodoForm.propTypes = {
	createTodo: PropTypes.func.isRequired
};

export default TodoForm
