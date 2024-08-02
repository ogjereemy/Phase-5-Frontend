// import React from 'rea
// import '../Workout.css';

// function Workout() {
//   return (
//     <div className="workout">
//       <div className="workout-header">
//         <h3>Start Your Workout From Today</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
//       </div>
//       <div className="workout-card">
//         <img src="https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Workout" />
//         <div className="trainer-info">
//           <img src="https://images.pexels.com/photos/28054/pexels-photo-28054.jpg?auto=compress&cs=tinysrgb&w=600" alt="Trainer" />
//           <div>
//             <h4>Adrianna Lamb</h4>
//             <p>Fitness Trainer</p>
//           </div>
//         </div>
//         <div className="workout-info">
//           <h5>Legs Workout</h5>
//           <button>Lower Body</button>
//           <button>Beginner</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Workout;


import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
// import '../Workout.css';

const Workout = () => {
  return (
    <Container>
      <Row className="workout-header">
        <Col>
          <h3>Start Your Workout From Today</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="workout-card">
            <Card.Img variant="top" src="https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <div className="trainer-info d-flex align-items-center mb-3">
                <img src="https://images.pexels.com/photos/28054/pexels-photo-28054.jpg?auto=compress&cs=tinysrgb&w=600" alt="Trainer" className="trainer-avatar me-3" />
                <div>
                  <Card.Title>Adrianna Lamb</Card.Title>
                  <Card.Text>Fitness Trainer</Card.Text>
                </div>
              </div>
              <Card.Title>Legs Workout</Card.Title>
              <Button variant="outline-primary" className="me-2">Get Started</Button>
              <Button variant="outline-primary">Share</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="workout-card">
            <Card.Img variant="top" src="https://images.pexels.com/photos/2796078/pexels-photo-2796078.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <div className="trainer-info d-flex align-items-center mb-3">
                <img src="https://images.pexels.com/photos/1580346/pexels-photo-1580346.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Trainer" className="trainer-avatar me-3" />
                <div>
                  <Card.Title>John Smith</Card.Title>
                  <Card.Text>Fitness Trainer</Card.Text>
                </div>
              </div>
              <Card.Title>Full Body Workout</Card.Title>
              <Button variant="outline-primary" className="me-2">Get Started</Button>
              <Button variant="outline-primary">Share</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Workout;
