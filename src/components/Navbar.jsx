// // // src/components/Navbar.js
// // import React, { useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import { AuthContext } from '../context/AuthContext';  // Adjust path if needed

// // const Navbar = () => {
// //     const { auth, logout } = useContext(AuthContext);  // Assuming you have AuthContext providing auth and logout

// //     return (
// //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //             <Link className="navbar-brand" to="/dashboard">FitTrack</Link>
// //             <div className="collapse navbar-collapse" id="navbarNav">
// //                 <ul className="navbar-nav ml-auto">
// //                     {auth.isAuthenticated ? (
// //                         <>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link" to="/dashboard">Dashboard</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <a className="nav-link" onClick={logout} href="#!">Logout</a>
// //                             </li>
// //                         </>
// //                     ) : (
// //                         <>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link" to="/login">Login</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link" to="/register">Register</Link>
// //                             </li>
// //                         </>
// //                     )}
// //                 </ul>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Button } from 'react-bootstrap';

// const CustomNavbar = () => {
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//   };

//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="/">FitTrack</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link as={Link} to="/">Home</Nav.Link>
//           <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
//           <Nav.Link as={Link} to="/workout-tracking">Workout</Nav.Link>
//           <Nav.Link as={Link} to="/nutrition-tracking">Nutrition</Nav.Link>
//           <Nav.Link as={Link} to="/progress-monitoring">Progress</Nav.Link>
//           <Nav.Link as={Link} to="/coach-dashboard">Coach Dashboard</Nav.Link>
//         </Nav>
//         <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default CustomNavbar;
