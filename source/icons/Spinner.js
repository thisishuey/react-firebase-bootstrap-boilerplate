import React, { Component } from 'react';
import ClassNames from '../components/ClassNames';

class Spinner extends Component {
	render = () => <i className={ClassNames('fa', 'fa-spinner', 'fa-pulse')} />;
}

export default Spinner
