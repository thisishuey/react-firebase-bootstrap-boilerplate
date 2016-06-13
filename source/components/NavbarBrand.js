import React, { Component } from 'react';
import Container from './Container';
import Styles from '../sass/styles';

class NavbarBrand extends Component {
	render = () => <a className={Styles['navbar-brand']} href="#">{this.props.children}</a>;
}

export default NavbarBrand
