
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Alert } from 'react-bootstrap';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }
//     try {
//       await axios.post('/api/signup', { email, password });
//       navigate('/login');
//     } catch (error) {
//       setErrorMessage('Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-left">
//         <img src="logo.png" alt="Logo" />
//         <h1>Start Your Fitness Journey Today</h1>
//         <p>Join our Team!</p>
//       </div>
//       <div className="signup-right">
//         <Container>
//           <Form className="signup-form" onSubmit={handleSubmit}>
//             <h2>Sign Up</h2>
//             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//             <Button variant="outline-primary" className="btn-google" block>
//               Use Google Account
//             </Button>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@gmail.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicConfirmPassword">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" block>
//               Sign Up
//             </Button>
//             <div className="mt-2">
//               Already have an account? <a href="/login">Log In</a>
//             </div>
//           </Form>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Signup;
