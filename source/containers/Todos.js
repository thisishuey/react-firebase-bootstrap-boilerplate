import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../redux/modules/todos';

import Spinner from '../icons/Spinner';

class Todos extends Component {

	static propTypes = {
		isLoading: React.PropTypes.bool,
		getTodos: React.PropTypes.func
	};

	componentDidMount() {
		this.props.getTodos();
	}

	render() {
		const { isLoading, todos } = this.props;
		const loadingAnimation = isLoading ? <Spinner /> : undefined;
		let todosList = <ul>{Object.keys(todos).map(key => <li key={key}>{todos[key].title}</li>)}</ul>;

		return (
			<div>
				{loadingAnimation}
				{todosList}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.todos.isLoading,
	todos: state.todos.todos
});

const mapDispatchToProps = (dispatch) => {
	return {
		getTodos: () => {
			dispatch(fetchTodos());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
