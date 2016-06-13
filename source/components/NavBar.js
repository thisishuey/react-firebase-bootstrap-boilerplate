import React, { Component } from 'react';
import Styles from '../sass/styles';

class Navbar extends Component {
	render = () => <nav className={`${Styles.navbar} ${Styles['navbar-fixed-top']} ${Styles['navbar-dark']} ${Styles['bg-inverse']}`}>{this.props.children}</nav>;
}

export default Navbar
