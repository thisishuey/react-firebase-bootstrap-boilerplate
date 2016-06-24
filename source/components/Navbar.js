import React, { PropTypes } from 'react';
import classNames from '../utils/classNames';


const Navbar = props => (
	<nav className={classNames('navbar', 'navbar-fixed-top', 'navbar-dark', 'bg-inverse')}>{props.children}</nav>
);

Navbar.propTypes = {
	children: PropTypes.node
};

export default Navbar;
