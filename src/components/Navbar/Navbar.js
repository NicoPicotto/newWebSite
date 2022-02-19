import { React } from 'react';
import img1 from '../../npicon-02.png';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='navBarContainer'>
			<Navbar expand='lg'>
				<Container fluid>
					<Navbar.Brand href='#' className='logo'>
						<img className='logoNP' src={img1} atl='logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav className='me-auto my-2 my-lg-0' navbarScroll>
							<Nav.Link href='/'>About</Nav.Link>
							<Nav.Link href='/'>Technologies</Nav.Link>
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
