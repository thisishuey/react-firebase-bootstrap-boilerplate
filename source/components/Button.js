import React, { Component } from 'react';
import classNames from '../utils/classNames';

import Spinner from '../icons/Spinner';


class Button extends Component {
	render = () => <button className={classNames('btn', 'btn-primary')}><Spinner /> {this.props.children}</button>;
}

export default Button
