import React, { Component } from 'react';
import classNames from '../utils/classNames';


class Nav extends Component {
	render = () => <ul className={classNames('nav', 'navbar-nav')}>{this.props.children}</ul>;
}

export default Nav
