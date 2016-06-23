import React, { Component } from 'react';
import classNames from '../utils/classNames';

class NavbarBrand extends Component {
	render = () => <a className={classNames('navbar-brand')} href={this.props.href}>{this.props.children}</a>;
}

export default NavbarBrand
