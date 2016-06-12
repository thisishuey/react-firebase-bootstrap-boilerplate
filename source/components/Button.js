import React, { Component } from 'react';
import Spinner from '../icons/Spinner';
import Styles from './Button.sass';

class Button extends Component {
	render = () => <button className={Styles.primary}><Spinner /> {this.props.children}</button>;
}

export default Button
