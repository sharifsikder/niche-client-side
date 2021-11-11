import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuht from '../../hooks/useAuth';


const Header = () => {
  const{user, logOut} = useAuht()
  console.log(user)
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

     {user.email && <span className="name" style={{ color: 'white' }}>{user.displayName} </span>}
    
      {
        user.email ? <button className="logout-button me-3" onClick={logOut}>LogOut</button>
        :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }

             
{user.email && 
    <>
    
    
<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
 Dashboard
</button>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
 <div class="offcanvas-header">
   <h2 className="offcanvas-title text-success" id="offcanvasExampleLabel">Dashboard</h2>
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
 </div>
 <div class="offcanvas-body">
   <div>
   
   </div>
   <Link className="dashborad" as={Link} to="/pay">Pay</Link>
   <Link className="dashborad" as={Link} to="/myorders">My Orders</Link>
   <Link className="dashborad" as={Link} to="/review">Review</Link>
   <Link className="dashborad" onClick={logOut} as={Link} to="/">Logout</Link>
   
 </div>
</div>
    

  </>  
    }

   </Nav>
 </Navbar.Collapse>
 </Container>
</Navbar>
</>
    );
};

export default Header;