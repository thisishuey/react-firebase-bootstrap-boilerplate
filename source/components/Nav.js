import React, { Component } from 'react';
import Styles from '../sass/styles';

class Nav extends Component {
	render = () => <ul className={`${Styles.nav} ${Styles['navbar-nav']}`}>{this.props.children}</ul>;
}

export default Nav
