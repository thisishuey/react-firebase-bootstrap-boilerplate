import React, { Component } from 'react';
import Spinner from '../icons/Spinner';
import Styles from '../sass/styles';

class Button extends Component {
	render = () => <button className={`${Styles.btn} ${Styles['btn-primary']}`}><Spinner /> {this.props.children}</button>;
}

export default Button
