import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fitnessLogo from "../../../src/svgs/picsvg_download.svg";
import workout from "../../../src/svgs/workout.svg";
import coach from "../../../src/svgs/coach.svg";

const CoachSidebar = ({ logout }) => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className="sidebar">
    <img src={fitnessLogo} className='app-logo' alt="calorie tracker logo" />
      <Link to="/exercises" className="sidebar-link">Exercises</Link>
      <Link to="/workouts" className="sidebar-link">
        <img src={workout} className='side-svg' alt="workout logo" />
        Workout
      </Link>
      <Link to="/workout-plans" className="sidebar-link">Plans</Link>
      <Link to="/coach-dashboard" className="sidebar-link">
        <img src={coach} className='side-svg' alt="coach logo" />
        Coach
      </Link>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default CoachSidebar;
