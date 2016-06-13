import React, { Component } from 'react';
import ClassNames from './ClassNames';

class NavbarBrand extends Component {
	render = () => <a className={ClassNames('navbar-brand')} href="#">{this.props.children}</a>;
}

export default NavbarBrand
