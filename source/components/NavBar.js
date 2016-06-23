import React, { Component } from 'react';
import classNames from '../utils/classNames';

class Navbar extends Component {
	render = () => {
		return <nav className={classNames('navbar', 'navbar-fixed-top', 'navbar-dark', 'bg-inverse')}>{this.props.children}</nav>;
	};
}

export default Navbar
