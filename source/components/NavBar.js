import React, { Component } from 'react';
import ClassNames from './ClassNames';

class Navbar extends Component {
	render = () => {
		return <nav className={ClassNames('navbar', 'navbar-fixed-top', 'navbar-dark', 'bg-inverse')}>{this.props.children}</nav>;
	};
}

export default Navbar
