// // // // src/components/dashboard/UserProfile.js
// // // import React from 'react';

// // // const UserProfile = () => {
// // //     return (
// // //         <div className="card mb-4">
// // //             <div className="card-body">
// // //                 <div className="d-flex align-items-center">
// // //                     <img src="/path-to-user-image.jpg" alt="User" className="rounded-circle me-3" width="50" height="50" />
// // //                     <div>
// // //                         <h5 className="card-title">John Doe</h5>
// // //                         <p className="card-text">Fitness Enthusiast</p>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default UserProfile;

// // import React, { useState, useEffect } from 'react';
// // import { Container, Form, Button, Col, Row, Card } from 'react-bootstrap';
// // import axios from 'axios';

// // const UserProfile = () => {
// //   const [user, setUser] = useState({
// //     name: '',
// //     email: '',
// //     age: '',
// //     weight: '',
// //     height: '',
// //     totalWorkouts: 0,
// //     totalCaloriesBurned: 0,
// //   });

// //   useEffect(() => {
// //     // Fetch user data from API
// //     axios.get('/api/user/profile').then(response => {
// //       setUser(response.data);
// //     });
// //   }, []);

// //   const handleChange = (e) => {
// //     setUser({ ...user, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Update user data in the backend
// //     axios.put('/api/user/profile', user).then(response => {
// //       alert('Profile updated successfully!');
// //     });
// //   };

// //   return (
// //     <Container>
// //       <Row>
// //         <Col md={6}>
// //           <Card>
// //             <Card.Body>
// //               <Card.Title>Profile</Card.Title>
// //               <Form onSubmit={handleSubmit}>
// //                 <Form.Group>
// //                   <Form.Label>Name</Form.Label>
// //                   <Form.Control type="text" name="name" value={user.name} onChange={handleChange} />
// //                 </Form.Group>
// //                 <Form.Group>
// //                   <Form.Label>Email</Form.Label>
// //                   <Form.Control type="email" name="email" value={user.email} onChange={handleChange} />
// //                 </Form.Group>
// //                 <Form.Group>
// //                   <Form.Label>Age</Form.Label>
// //                   <Form.Control type="number" name="age" value={user.age} onChange={handleChange} />
// //                 </Form.Group>
// //                 <Form.Group>
// //                   <Form.Label>Weight (kg)</Form.Label>
// //                   <Form.Control type="number" name="weight" value={user.weight} onChange={handleChange} />
// //                 </Form.Group>
// //                 <Form.Group>
// //                   <Form.Label>Height (cm)</Form.Label>
// //                   <Form.Control type="number" name="height" value={user.height} onChange={handleChange} />
// //                 </Form.Group>
// //                 <Button type="submit">Update Profile</Button>
// //               </Form>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //         <Col md={6}>
// //           <Card>
// //             <Card.Body>
// //               <Card.Title>Statistics</Card.Title>
// //               <p>Total Workouts Completed: {user.totalWorkouts}</p>
// //               <p>Total Calories Burned: {user.totalCaloriesBurned}</p>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default UserProfile;


// import React, { useState, useEffect } from 'react';
// import { Container, Form, Button, Col, Row, Card } from 'react-bootstrap';
// import axios from 'axios';
// import './Dashboard.css'; // Import the new CSS file

// const UserProfile = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     age: '',
//     weight: '',
//     height: '',
//     totalWorkouts: 0,
//     totalCaloriesBurned: 0,
//   });

//   useEffect(() => {
//     // Fetch user data from API
//     axios.get('/api/user/profile').then(response => {
//       setUser(response.data);
//     });
//   }, []);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Update user data in the backend
//     axios.put('/api/user/profile', user).then(response => {
//       alert('Profile updated successfully!');
//     });
//   };

//   return (
//     <Container className="profile-container">
//       <Row>
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <div className="d-flex align-items-center">
//                 <img src="path-to-user-image.jpg" alt="User" className="user-image" />
//                 <div className="ms-3">
//                   <h5 className="card-title">{user.name}</h5>
//                   <p className="card-text">Fitness Enthusiast</p>
//                 </div>
//               </div>
//               <Form onSubmit={handleSubmit} className="mt-4">
//                 <Form.Group>
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="text" name="name" value={user.name} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type="email" name="email" value={user.email} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Age</Form.Label>
//                   <Form.Control type="number" name="age" value={user.age} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Weight (kg)</Form.Label>
//                   <Form.Control type="number" name="weight" value={user.weight} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Height (cm)</Form.Label>
//                   <Form.Control type="number" name="height" value={user.height} onChange={handleChange} />
//                 </Form.Group>
//                 <Button type="submit" className="mt-3">Update Profile</Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Statistics</Card.Title>
//               <div className="stat-card">
//                 <div className="stat-info">
//                   <h5>Total Workouts Completed</h5>
//                   <p>{user.totalWorkouts}</p>
//                 </div>
//               </div>
//               <div className="stat-card">
//                 <div className="stat-info">
//                   <h5>Total Calories Burned</h5>
//                   <p>{user.totalCaloriesBurned}</p>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default UserProfile;

import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import './Dashboard.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    totalWorkouts: 0,
    totalCaloriesBurned: 0,
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/app/profile').then(response => {
      setUser(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/user/profile', user).then(response => {
      alert('Profile updated successfully!');
    });
  };

  return (
    <Container className="profile-container">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src="path-to-user-image.jpg" alt="User" className="user-image" />
                <div className="ms-3">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Fitness Enthusiast</p>
                </div>
              </div>
              <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={user.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={user.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" name="age" value={user.age} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control type="number" name="weight" value={user.weight} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control type="number" name="height" value={user.height} onChange={handleChange} />
                </Form.Group>
                <Button type="submit" className="mt-3">Update Profile</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Statistics</Card.Title>
              <div className="stat-card">
                <div className="stat-info">
                  <h5>Total Workouts Completed</h5>
                  <p>{user.totalWorkouts}</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-info">
                  <h5>Total Calories Burned</h5>
                  <p>{user.totalCaloriesBurned}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;

