import React, { Component } from 'react';
import Button from './Button';
import Styles from './HelloWorld.sass';

class HelloWorld extends Component {
	render() {
		return (
			<div className={Styles.helloWorld}>
				<h1>Hello World</h1>
				<Button>New Test</Button>
			</div>
		);
	}
}

export default HelloWorld
