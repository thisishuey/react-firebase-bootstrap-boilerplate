import React, { Component } from 'react';

import Navbar from './Navbar';
import NavbarBrand from './NavbarBrand';
import Nav from './Nav';
import NavItem from './NavItem';

class Navigation extends Component {
	render = () => (
		<Navbar>
			<NavbarBrand href="#home">Project name</NavbarBrand>
			<Nav>
				<NavItem href="#home">Home</NavItem>
				<NavItem href="#about">About</NavItem>
				<NavItem href="#contact">Contact</NavItem>
			</Nav>
		</Navbar>
	);
}

export default Navigation
