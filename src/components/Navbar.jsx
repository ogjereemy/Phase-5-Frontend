import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">FitTrack</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/workout-tracking">Workout</Nav.Link>
          <Nav.Link as={Link} to="/nutrition-tracking">Nutrition</Nav.Link>
          <Nav.Link as={Link} to="/progress-monitoring">Progress</Nav.Link>
          <Nav.Link as={Link} to="/coach-dashboard">Coach Dashboard</Nav.Link>
        </Nav>
        <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
// src/components/Navbar.jsx
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/profile">profile</Link></li>
//       <li><Link to="/progress">Progress</Link></li>
//       <li><Link to="/Workouts">Workouts</Link></li>
//       <li><Link to="/form">goal form</Link></li>

//     </ul>
//   </nav>
// );

// export default Navbar;
