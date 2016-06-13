import React, { Component } from 'react';
import Styles from '../sass/styles';

class App extends Component {
	render = () => <li className={Styles['nav-item']}><a className={Styles['nav-link']} href="#">{this.props.children}</a></li>;
}

export default App
