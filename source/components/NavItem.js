import React, { Component } from 'react';
import classNames from '../utils/classNames';


class NavItem extends Component {
	render = () => (
		<li className={classNames('nav-item')}>
			<a className={classNames('nav-link')} href={this.props.href}>{this.props.children}</a>
		</li>
	);
}

export default NavItem
