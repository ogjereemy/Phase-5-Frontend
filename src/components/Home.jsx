import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fitnessLogo from "../../src/svgs/picsvg_download.svg";
import axios from '../axiosInstance';
import './home.css';
import CustomNavbar from './Navbar';

function Home() {
  const navigate = useNavigate();
  const [featuredWorkouts, setFeaturedWorkouts] = useState([]);
  const [topCoaches, setTopCoaches] = useState([]);
  const [successStories, setSuccessStories] = useState([]);
  const [showCoachActions, setShowCoachActions] = useState(false); // Toggle visibility

  useEffect(() => {
    const fetchFeaturedWorkouts = async () => {
      try {
        const response = await axios.get('https://phase-5-backend-2.onrender.com/app/featured-workouts');
        setFeaturedWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching featured workouts:', error);
      }
    };

    const fetchTopCoaches = async () => {
      try {
        const response = await axios.get('https://phase-5-backend-2.onrender.com/app/top-coaches');
        setTopCoaches(response.data);
      } catch (error) {
        console.error('Error fetching top coaches:', error);
      }
    };

    const fetchSuccessStories = async () => {
      try {
        const response = await axios.get('https://phase-5-backend-2.onrender.com/app/success-stories');
        setSuccessStories(response.data);
      } catch (error) {
        console.error('Error fetching success stories:', error);
      }
    };

    fetchFeaturedWorkouts();
    fetchTopCoaches();
    fetchSuccessStories();
  }, []);

  const handleToggleCoachActions = () => {
    setShowCoachActions(!showCoachActions);
  };
  
  const handleGetStarted = () => {
    navigate('/signup');
  };


  const handleLogin = () => {
    navigate('/login');
  };

  const handleExpertCoaches = () => {
    navigate('/coaches-login');
  };

  const handleCoachSignup = () => {
    navigate('/coach-signup');
  };

  return (
    <div className="home-container">
      <CustomNavbar />
      <div className="hero-section">
        <div className="hero-content">
          <img src={fitnessLogo} alt="calorie tracker logo" />
          <h2 className='p-t'>Fit-Track</h2>
          <p className="p-t">
            A one-of-a-kind fitness program that combines strength, flexibility, and cardiovascular exercise to create a powerful, enduring workout.
          </p>
          <p className="p-t">25+ Years of Experience</p>
        </div>
      </div>

      <div className="cards-section">
        <div className="card user-card">
          <h3>User Actions</h3>
          <p>Ready to start your fitness journey? Join us today or log in to access your account.</p>
          <button className="cta-button" onClick={handleGetStarted}>
            Sign Up
          </button>
          <button className="cta-button" onClick={handleLogin}>
            Log In
          </button>
        </div>
        
        {/* Conditionally render the coach card based on showCoachActions */}
        {showCoachActions && (
          <div className="card coach-card">
            <h3>Coach Actions</h3>
            <p>Are you a coach looking to manage your clients and provide expert guidance? Log in or sign up here.</p>
            <button className="cta-button" onClick={handleExpertCoaches}>
              Expert Coaches Login
            </button>
            <button className="cta-button" onClick={handleCoachSignup}>
              Coach Sign Up
            </button>
          </div>
        )}
      </div>
      <button onClick={handleToggleCoachActions}>
        {showCoachActions ? 'Hide Coach Actions' : 'Show Coach Actions'}
      </button>

      <div className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Everybody Welcome Favourite Gym</h3>
            <p className="p-t">
              The next station is a program in which the trainer wants his power-lifter to make significant progress within the next few months. This means achieving a higher maximum strength set and personal bests while maintaining the right form and safety. Our gym is the best environment to find it.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>32+</h4>
                <p className="p-t">Years of Experience</p>
              </div>
              <div className="stat">
                <h4>76+</h4>
                <p className="p-t">Worldwide Locations</p>
              </div>
            </div>
          </div>
          <div className="about-images">
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gym Image 1" />
            <img src="https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gym Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
