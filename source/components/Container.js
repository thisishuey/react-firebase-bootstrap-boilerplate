import React, { Component } from 'react';
import ClassNames from './ClassNames';

class Container extends Component {
	render = () => <div className={ClassNames('container')}>{this.props.children}</div>;
}

export default Container
