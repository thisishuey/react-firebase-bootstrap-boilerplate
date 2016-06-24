import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from '../utils/classNames';


const NavbarBrand = props => <Link className={classNames('navbar-brand')} to={props.href}>{props.children}</Link>;

NavbarBrand.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node
};

export default NavbarBrand;
