import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import './Header.css';

const Header = () => {

  const { user, HandleLogOutUser } = useAuth();
  

    return (
        <div className="sticky-top">
            <Navbar collapseOnSelect expand="lg" className="nav-main" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/" className="fs-2 fw-bold">Bangla Cars</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto">
      <Nav.Link as={Link} className="nav-item" to="/home">Home</Nav.Link>
                <Nav.Link as={Link} className="nav-item" to="/products">Prouducts</Nav.Link>
                {
                  user.email && <Nav.Link as={Link} className="nav-item" to="/dashboard">Dashboard</Nav.Link>
                }
                <Nav.Link className="nav-item">{user.displayName}</Nav.Link>

                {
                  user.email ?
                  
                    <Nav.Link className="log-out" onClick={HandleLogOutUser}><i className="fas fa-sign-in-alt me-1"></i> Log Out</Nav.Link> : <>
                  <Nav.Link as={Link} className="nav-item" to="/login"><i className="fas fa-sign-in-alt me-1"></i> LogIn</Nav.Link>
      <Nav.Link as={Link} className="nav-item" to="/register"><i className="fas fa-user me-1"></i> Register</Nav.Link>
                  </>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;