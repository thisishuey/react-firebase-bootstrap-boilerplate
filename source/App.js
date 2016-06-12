import React, { Component } from 'react';
import { render } from 'react-dom';

import HelloWorld from './components/HelloWorld';

class App extends Component {
	render() {
		return <HelloWorld />;
	}
}

render(<App />, document.getElementById('react-mount'));
