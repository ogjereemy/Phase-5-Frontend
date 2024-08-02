// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleExpertCoaches = () => {
    navigate('/coaches-login');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to FitTrack</h1>
          <p>Your journey to a healthier life starts here. Join our community of fitness enthusiasts and get personalized coaching and support.</p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
          <button className="cta-button" onClick={handleExpertCoaches}>
            Expert Coaches
          </button>
          <button className="cta-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Workout Plans" />
            <h3>Workout Plans</h3>
            <p>Personalized workout plans tailored to your goals.</p>
          </div>
          <div className="feature-card">
            <img src="https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nutrition Tracking" />
            <h3>Nutrition Tracking</h3>
            <p>Track your meals and get nutritional advice.</p>
          </div>
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzsrLo3PQqEFa1fF64XGhZGgXPIvGLkG3qQ&s" alt="Progress Monitoring" />
            <h3>Progress Monitoring</h3>
            <p>Monitor your progress with detailed analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
