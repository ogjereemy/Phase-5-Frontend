import React from 'react';
import fitnessLogo from "../../src/picsvg_download.svg";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Navbar className='nav'>
      <Navbar.Brand href="/">
        <img src={fitnessLogo} className='app-logo' alt="calorie tracker logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About us</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

