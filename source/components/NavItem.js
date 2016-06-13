import React, { Component } from 'react';
import ClassNames from './ClassNames';

class NavItem extends Component {
	render = () => (
		<li className={ClassNames('nav-item')}>
			<a className={ClassNames('nav-link')} href="#">{this.props.children}</a>
		</li>
	);
}

export default NavItem
