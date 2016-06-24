import React, { PropTypes } from 'react';
import classNames from '../utils/classNames';


const NavbarBrand = props => <a className={classNames('navbar-brand')} href={props.href}>{props.children}</a>;

NavbarBrand.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node
};

export default NavbarBrand;
