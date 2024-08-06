import React from 'react';
import { Link } from 'react-router-dom';
import fitnessLogo from "../../src/picsvg_download.svg";

const Sidebar = ({ isOpen, toggleSidebar, logout }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <img src={fitnessLogo} className='app-logo' alt="fitness logo" />
      <Link to="/overview" className="sidebar-link" onClick={toggleSidebar}>Overview</Link>
      <Link to="/workout" className="sidebar-link" onClick={toggleSidebar}>Workout</Link>
      <Link to="/coach-dashboard" className='sidebar-link' onClick={toggleSidebar}>Coach Dashboard</Link>
      <Link to="/diet-plan" className="sidebar-link" onClick={toggleSidebar}>Diet Plan</Link>
      <Link to="/goals" className="sidebar-link" onClick={toggleSidebar}>Goals</Link>
      <Link to="/user-dashboard" className="sidebar-link" onClick={toggleSidebar}>User Dashboard</Link>
      <Link to="/user-schedule" className="sidebar-link" onClick={toggleSidebar}>My Schedule</Link>
      <Link to="/progress" className="sidebar-link" onClick={toggleSidebar}>Progress</Link>
      <Link to="/help" className="sidebar-link" onClick={toggleSidebar}>Help</Link>
      <button onClick={logout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default Sidebar;
