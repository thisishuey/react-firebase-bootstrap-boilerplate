import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from '../utils/classNames';


const NavItem = props => (
	<li className={classNames('nav-item')}>
		<Link
			className={classNames('nav-link')}
			activeClassName={classNames('active')}
			to={props.href}
		>
			{props.children}
		</Link>
	</li>
);

NavItem.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node
};

export default NavItem;
