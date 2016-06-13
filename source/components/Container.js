import React, { Component } from 'react';
import Button from './Button';
import Styles from '../sass/styles';

class Container extends Component {
	render = () => <div className={Styles.container}>{this.props.children}</div>;
}

export default Container
