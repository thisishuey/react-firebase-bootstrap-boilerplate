import React, { Component } from 'react';

import Styles from './HelloWorld.sass'

class HelloWorld extends Component {
	render() {
		return (
			<div className={Styles.helloWorld}>
				<h1>Hello World</h1>
			</div>
		);
	}
}

export default HelloWorld
