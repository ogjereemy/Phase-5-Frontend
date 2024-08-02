
// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Dashboard.css'; // Import the new CSS file

// const UserDashboard = () => {
//   return (
//     <Container fluid className="dashboard-container">
//       <Row className="mt-4">
//         <Col md={3}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Track Your Daily Activities</Card.Title>
//               <Button variant="primary" as={Link} to="/workout" className="mb-2">Workout</Button>
//               <Button variant="primary" as={Link} to="/diet-plan">Nutrition</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={9}>
//           <Card>
//             <Card.Body>
//               <Card.Title>My Schedule</Card.Title>
//               <p>Monday: Rest Day</p>
//               <p>Tuesday: Cardio - 30 mins</p>
//               <p>Wednesday: Strength Training - Upper Body</p>
//               <p>Thursday: Cardio - 30 mins</p>
//               <p>Friday: Strength Training - Lower Body</p>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col md={12}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Goal Progress</Card.Title>
//               <p>Chart displaying user's progress over time</p>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default UserDashboard;


import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const UserDashboard = () => {
  return (
    <Container fluid className="dashboard-container">
      <Row className="mt-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Track Your Daily Activities</Card.Title>
              <Button variant="primary" as={Link} to="/workout" className="mb-2">Workout</Button>
              <Button variant="primary" as={Link} to="/diet-plan">Nutrition</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>My Schedule</Card.Title>
              <p>Monday: Rest Day</p>
              <p>Tuesday: Cardio - 30 mins</p>
              <p>Wednesday: Strength Training - Upper Body</p>
              <p>Thursday: Cardio - 30 mins</p>
              <p>Friday: Strength Training - Lower Body</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Goal Progress</Card.Title>
              <p>Chart displaying user's progress over time</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;


