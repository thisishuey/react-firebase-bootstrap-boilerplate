/* @flow */
import React, { Component, PropTypes } from 'react';
import classNames from '../utils/classNames';


class TodoForm extends Component {

	constructor(props: Object, context: Object) {
		super(props, context);
		this.state = { text: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	state: {
		text: string;
	};

	handleSubmit(event: Event) {
		const { createTodo } = this.props;
		const { text } = this.state;
		event.preventDefault();
		if (text !== '') {
			createTodo({ text });
		}
		this.setState({ text: '' });
	}

	handleChange(event: Event) {
		const target = event.target;
		if (target instanceof HTMLInputElement) {
			this.setState({ text: target.value });
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className={classNames('todo')}>
				<div className={classNames('form-group', 'row')}>
					<label htmlFor="todoText" className={classNames('col-xs-3', 'form-control-label', 'text-xs-right')}>
						Todo:
					</label>
					<div className={classNames('col-xs-6')}>
						<input
							type="text"
							id="todoText"
							className={classNames('form-control')}
							value={this.state.text}
							onChange={this.handleChange}
							placeholder="Pick up milk"
							autoFocus
						/>
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

export default TodoForm;
