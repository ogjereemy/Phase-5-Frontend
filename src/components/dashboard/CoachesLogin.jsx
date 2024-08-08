// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Alert } from 'react-bootstrap';

// const CoachLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/api/coach/login', { email, password });
//       if (response.data.success) {
//         // Redirect to Coach Dashboard on successful login
//         window.location.href = '/coach-dashboard';
//       } else {
//         setErrorMessage(response.data.message || 'Login failed');
//       }
//     } catch (err) {
//       setErrorMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <img src="logo.png" alt="Logo" />
//         <h1>Welcome Coach!</h1>
//         <p>Let's train and inspire others</p>
//       </div>
//       <div className="login-right">
//         <Container>
//           <Form className="login-form" onSubmit={handleSubmit}>
//             <h2>Coach Log In</h2>
//             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//             <Button variant="outline-primary" className="btn-google" block>
//               Use Google Account
//             </Button>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="email..."
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

//             <Button variant="primary" type="submit" block>
//               Log In
//             </Button>
//             <div className="mt-3">
//               <a href="/password-reset">Forgot password?</a>
//             </div>
//             <div className="mt-2">
//               Don’t have an account? <a href="/signup">Sign Up</a>
//             </div>
//           </Form>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default CoachLogin;


import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const CoachLogin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { username, email, password };
      console.log(payload);
      const response = await axios.post('http://127.0.0.1:5000/auth/login', payload);
      localStorage.setItem('token', response.data.token);
      window.location.href = '/coach-dashboard'; // Redirect to Coach Dashboard
    } catch (error) {
      setErrorMessage('Login failed. Please check your username, email, and password.');
    }
  };

  return (
    <div className="coach-login-container">
      <Container>
        <Form className="coach-login-form" onSubmit={handleSubmit}>
          <h2>Coach Log In</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Log In
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CoachLogin;

