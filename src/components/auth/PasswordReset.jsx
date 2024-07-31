// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Row, Col } from 'react-bootstrap';

// const PasswordReset = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/reset-password', { email });
//       alert('Password reset email sent');
//     } catch (error) {
//       console.error('Password reset failed', error);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <h2>Reset Password</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Reset Password
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default PasswordReset;
