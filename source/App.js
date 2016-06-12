import React, { Component } from 'react';
import { render } from 'react-dom';

import Styles from './sass/styles.sass';
import HelloWorld from './components/HelloWorld';

class App extends Component {
	render = () => <HelloWorld />;
}

render(<App />, document.getElementById('react-mount'));
