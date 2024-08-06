// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './home.css';

// function Home() {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/signup');
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleExpertCoaches = () => {
//     navigate('/coaches-login');
//   };

//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <div className="hero-content">
//           <h1>Fit-Track</h1>
//           <p>
//             A one-of-a-kind fitness program that combines strength, flexibility, and
//             cardiovascular exercise to create a powerful, enduring workout.
//           </p>
//           <p>25+ Years Of Experience</p>
//           <div className="hero-buttons">
//             <button className="cta-button" onClick={handleGetStarted}>
//               Sign Up
//             </button>
//             <button className="cta-button" onClick={handleLogin}>
//               Log in
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="about-section">
//         <h2>About Us</h2>
//         <div className="about-content">
//           <div className="about-text">
//             <h3>Everybody Welcome Favourite Gym</h3>
//             <p>
//               The next situation is in a program in which the trainer wants his powerlifter to hit
//               a triple at 95% of his most recent best competition squat. This means starting with a
//               single at 75% and going up by 10% each set. The lifter has used this method to achieve
//               a new personal record.
//             </p>
//             <p>
//               32+ Years of Experience
//               76+ Worldwide Location
//             </p>
//           </div>
//           <div className="about-images">
//             <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gym Image 1" />
//             <img src="https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gym Image 2" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fitnessLogo from "../../src/picsvg_download.svg";
import axios from 'axios';
import './home.css';

function Home() {
  const navigate = useNavigate();
  const [featuredWorkouts, setFeaturedWorkouts] = useState([]);
  const [topCoaches, setTopCoaches] = useState([]);
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    const fetchFeaturedWorkouts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/app/featured-workouts');
        setFeaturedWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching featured workouts:', error);
      }
    };

    const fetchTopCoaches = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/app/top-coaches');
        setTopCoaches(response.data);
      } catch (error) {
        console.error('Error fetching top coaches:', error);
      }
    };

    const fetchSuccessStories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/app/success-stories');
        setSuccessStories(response.data);
      } catch (error) {
        console.error('Error fetching success stories:', error);
      }
    };

    fetchFeaturedWorkouts();
    fetchTopCoaches();
    fetchSuccessStories();
  }, []);

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
          <img src={fitnessLogo} className='' alt="calorie tracker logo" />
          <h2>Fit-Track</h2>
          <p className="p-t">
            A one-of-a-kind fitness program that combines strength, flexibility, and cardiovascular exercise to create a powerful, enduring workout.
          </p>
          <p className="p-t">25+ Years of Experience</p>
          <button className="cta-button" onClick={handleGetStarted}>
            Sign UP
          </button>
          <button className="cta-button" onClick={handleLogin}>
            Log In
          </button>
          <button className="cta-button" onClick={handleExpertCoaches}>
            Expert Coaches Login
          </button>
        </div>
      </div>

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

      <div className="featured-workouts-section">
        <h2>Featured Workout Plans</h2>
        <div className="workouts-container">
          {featuredWorkouts.map((workout) => (
            <div className="workout-card" key={workout.id}>
              <h3>{workout.title}</h3>
              <p>{workout.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="top-coaches-section">
        <h2>Top Coaches</h2>
        <div className="coaches-container">
          {topCoaches.map((coach) => (
            <div className="coach-card" key={coach.id}>
              <h3>{coach.name}</h3>
              <p>{coach.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="success-stories-section">
        <h2>Success Stories</h2>
        <div className="stories-container">
          {successStories.map((story) => (
            <div className="story-card" key={story.id}>
              <h3>{story.title}</h3>
              <p>{story.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
