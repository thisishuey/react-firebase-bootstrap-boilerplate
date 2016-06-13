import React, { Component } from 'react';
import ClassNames from './ClassNames';

class Nav extends Component {
	render = () => <ul className={ClassNames('nav', 'navbar-nav')}>{this.props.children}</ul>;
}

export default Nav
