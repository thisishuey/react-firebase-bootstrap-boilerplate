import React, { Component } from 'react';
import Styles from '../sass/styles';

// navbar navbar-fixed-top navbar-dark bg-inverse

class Navbar extends Component {
	render = () => <nav className={`${Styles.navbar} ${Styles['navbar-fixed-top']} ${Styles['navbar-dark']} ${Styles['bg-inverse']}`}>{this.props.children}</nav>;
}

export default Navbar
