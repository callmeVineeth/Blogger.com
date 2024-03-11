import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5">
      <Container fluid className='d-flex justify-content-between'>
        {/* Brand positioned on the left */}
        <Navbar.Brand href="/">Blogger.com</Navbar.Brand>

        {/* Navigation links on the right */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto ">
            <Nav.Link as={Link} to="/create">Create Post</Nav.Link>
            <Nav.Link as={Link} to="/authors">Authors</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/authors">Authors</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/create">Create Post</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/posts">Edit Post</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
