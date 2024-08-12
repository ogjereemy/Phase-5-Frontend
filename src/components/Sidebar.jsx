import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fitnessLogo from "../../src/svgs/picsvg_download.svg";
import progressLogo from "../../src/svgs/progress.svg";
import diet from "../../src/svgs/diet.svg";
import goals from "../../src/svgs/goals.svg";
import workout from "../../src/svgs/workout.svg";
import overview from "../../src/svgs/overview.svg";
import coach from "../../src/svgs/coach.svg";
import help from "../../src/svgs/help.svg";

const Sidebar = ({ logout }) => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div className="sidebar">
        <img src={fitnessLogo} className='app-logo' alt="calorie tracker logo" />
        <Link to="/overview" className="sidebar-link">
        <img src={overview} className='side-svg' alt="overview logo" />
        Overview</Link>
        <Link to="/users-workouts" className="sidebar-link">
        <img src={workout} className='side-svg' alt="workout logo" />
        Workout</Link>
        {/* <Link to="/coach-dashboard" className='sidebar-link'>
        <img src={coach} className='side-svg' alt="coach logo" />
        Coach</Link> */}
        <Link to="/diet-plan" className="sidebar-link">
        <img src={diet} className='side-svg' alt="diet logo" />
        Diet Plan</Link>
        <Link to="/goals" className="sidebar-link">
        <img src={goals} className='side-svg' alt="goals logo" />
        Goals</Link>
        <Link to="/progress" className="sidebar-link">
        <img src={progressLogo} className='side-svg' alt="progress logo" />
        Progress</Link>
        <Link to="/help" className="sidebar-link">
        <img src={help} className='side-svg' alt="help logo" />
        Help</Link>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
  );
};

export default Sidebar;
