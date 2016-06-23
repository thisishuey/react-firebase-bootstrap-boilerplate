import React, { Component } from 'react';
import classNames from '../utils/classNames';

class Spinner extends Component {
	render = () => <i className={classNames('fa', 'fa-spinner', 'fa-pulse')} />;
}

export default Spinner
