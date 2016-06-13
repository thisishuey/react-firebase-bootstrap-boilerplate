import React, { Component } from 'react';
import Spinner from '../icons/Spinner';
import ClassNames from './ClassNames';

class Button extends Component {
	render = () => <button className={ClassNames('btn', 'btn-primary')}><Spinner /> {this.props.children}</button>;
}

export default Button
