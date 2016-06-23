import React, { Component } from 'react';
import classNames from '../utils/classNames';


class Container extends Component {
	render = () => <div className={classNames('container')}>{this.props.children}</div>;
}

export default Container
