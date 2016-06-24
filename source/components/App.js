import React, { PropTypes } from 'react';

import Navigation from './Navigation';
import Container from './Container';


const App = props => <div><Navigation /><Container>{props.children}</Container></div>;

App.propTypes = {
	children: PropTypes.node
};

export default App;
