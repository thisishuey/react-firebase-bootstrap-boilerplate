/* @flow */
import React from 'react';

import Navbar from './Navbar';
import NavbarBrand from './NavbarBrand';
import Nav from './Nav';
import NavItem from './NavItem';


const Navigation = () => (
	<Navbar>
		<NavbarBrand href="/">React Todo</NavbarBrand>
		<Nav>
			<NavItem href="/todos">Todos</NavItem>
			<NavItem href="/about">About</NavItem>
			<NavItem href="/contact">Contact</NavItem>
		</Nav>
	</Navbar>
);

export default Navigation;
