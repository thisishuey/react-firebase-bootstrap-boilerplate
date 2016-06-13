import React, { Component } from 'react';
import ClassNames from './ClassNames';

import Spinner from '../icons/Spinner';

class Button extends Component {
	render = () => <button className={ClassNames('btn', 'btn-primary')}><Spinner /> {this.props.children}</button>;
}

export default Button
