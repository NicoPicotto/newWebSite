import { React } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='navBarContainer'>
			<Navbar expand='lg'>
				<Container fluid>
					<Navbar.Brand href='#' className='logo'>
						Nico Picotto
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav className='me-auto my-2 my-lg-0' navbarScroll>
							<Nav.Link href='/'>About</Nav.Link>
							<Nav.Link href='/'>Journey</Nav.Link>
							<Nav.Link href='/'>Proyects</Nav.Link>
							<Nav.Link href='/'>Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;