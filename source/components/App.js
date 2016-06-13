import React, { Component } from 'react';
import Button from './Button';
import Container from './Container';
import Nav from './Nav';
import Navbar from './Navbar';
import NavbarBrand from './NavbarBrand';
import NavItem from './NavItem';
import Styles from '../sass/styles';

class App extends Component {
	render = () => (
		<div>
			<Navbar>
				<NavbarBrand>Project name</NavbarBrand>
				<Nav>
					<NavItem>Home</NavItem>
					<NavItem>About</NavItem>
					<NavItem>Contact</NavItem>
				</Nav>
			</Navbar>
			<Container>
				<div className={Styles['starter-template']}>
					<h1>Bootstrap starter template</h1>
					<p className={Styles.lead}>
						Use this document as a way to quickly start any new project.<br />
						All you get is this text and a mostly barebones HTML document.
					</p>
					<Button>Loading...</Button>
				</div>
			</Container>
		</div>
	);
}

export default App
