import React, { PropTypes } from 'react';
import classNames from '../utils/classNames';


const NavItem = props => (
	<li className={classNames('nav-item')}>
		<a className={classNames('nav-link')} href={props.href}>{props.children}</a>
	</li>
);

NavItem.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node
};

export default NavItem;
