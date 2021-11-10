import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
 <Container>
 <Navbar.Brand href="#home">  <img
       src="https://i.ibb.co/nzgp5bP/logo-01-2x.png"
       width="200"
       height="50"
       className="d-inline-block align-top"
       alt="React Bootstrap logo"
     /></Navbar.Brand>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 <Navbar.Collapse id="responsive-navbar-nav">
   <Nav className="ms-auto">
     <Nav.Link as={Link} to="/home">Home</Nav.Link>
     <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
   </Nav>
 </Navbar.Collapse>
 </Container>
</Navbar>
</>
    );
};

export default Header;