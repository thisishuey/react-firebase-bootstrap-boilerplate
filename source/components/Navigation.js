import React, { Component } from 'react';

import Navbar from './Navbar';
import NavbarBrand from './NavbarBrand';
import Nav from './Nav';
import NavItem from './NavItem';

class Navigation extends Component {
	render = () => (
		<Navbar>
			<NavbarBrand>Project name</NavbarBrand>
			<Nav>
				<NavItem>Home</NavItem>
				<NavItem>About</NavItem>
				<NavItem>Contact</NavItem>
			</Nav>
		</Navbar>
	);
}

export default Navigation
