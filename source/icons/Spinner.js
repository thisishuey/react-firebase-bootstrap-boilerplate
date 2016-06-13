import React, { Component } from 'react';
import Styles from '../sass/styles.sass';

class Spinner extends Component {
	render = () => <i className={`${Styles.fa} ${Styles['fa-spinner']} ${Styles['fa-pulse']}`} />;
}

export default Spinner
