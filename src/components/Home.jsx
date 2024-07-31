// // src/components/Home.js
// import React from 'react';
// // import Navbar from './Navbar';
// // import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Home = () => {
//     return (
//         <div className="container mt-3">
//             {/* <Navbar/> */}
//             <h1>Welcome to FitTrack</h1>
//             <p>Your fitness tracking and coaching platform.</p>
//             <Link to="/signup" className="btn btn-primary me-2">Signup</Link>
//             <Link to="/login" className="btn btn-secondary">Login</Link>
//             {/* <Link to="/password-reset" className="btn btn-link">Forgot Password?</Link> */}
//         </div>
//     );
// };

// export default Home;


// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// import './Home.css'; // Import a custom CSS file for additional styling

const Home = () => {
    return (
        <div className="home-container">
            <Container className="text-center mt-3">
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <div>
                            <Image src='' alt="Logo" className="mb-3" />
                            <h1>Start Your Fitness Journey Today</h1>
                            <p>Since 2024</p>
                            <p>There are many variations of passage of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                            <Button variant="primary" className="me-2" as={Link} to="/signup">Get Started</Button>
                            <div className="mt-4">
                                <Button variant="outline-primary" className="btn-signup me-2" as={Link} to="/signup">Signup</Button>
                                <Button variant="outline-secondary" className="btn-login" as={Link} to="/login">Login</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <Image src="path-to-your-image.png" alt="Fitness" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;

