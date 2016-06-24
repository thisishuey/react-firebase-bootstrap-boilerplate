import React, { Component } from 'react';
import classNames from '../utils/classNames';


class Button extends Component {
	render = () => <button className={classNames('btn', 'btn-primary')}>{this.props.children}</button>;
}

export default Button
