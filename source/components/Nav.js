/* @flow */
import React, { PropTypes } from 'react';
import classNames from '../utils/classNames';


const Nav = (props: Object) => <ul className={classNames('nav', 'navbar-nav')}>{props.children}</ul>;

Nav.propTypes = {
	children: PropTypes.node
};

export default Nav;
