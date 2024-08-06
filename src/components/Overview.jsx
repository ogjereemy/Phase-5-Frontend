import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import calLogo from "../../src/flTfAT01.svg";
import workoutSvg from "../../src/8QQGMQ01.svg";
import StepsSvg from "../../src/SkfdCw01.svg";
import fitnessLogo from "../../src/picsvg_download.svg";
import Progress from "../components/dashboard/ProgressCharts"
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Overview = () => {
  const { logout } = useContext(AuthContext);
  // const data = {
  //   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //   datasets: [
  //     {
  //       label: 'Workout',
  //       data: [30, 45, 60, 40, 50, 30, 20],
  //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //       borderColor: 'rgba(54, 162, 235, 1)',
  //       borderWidth: 1,
  //     },
  //     {
  //       label: 'Calories',
  //       data: [2000, 2100, 2200, 2300, 2400, 2500, 2600],
  //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //       borderColor: 'rgba(255, 99, 132, 1)',
  //       borderWidth: 1,
  //     },
  //     {
  //       label: 'Steps',
  //       data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
  //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //       borderColor: 'rgba(75, 192, 192, 1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const options = {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <img src={fitnessLogo} className='app-logo' alt="calorie tracker logo" />
        <Link to="/overview" className="sidebar-link">Overview</Link>
        <Link to="/workout" className="sidebar-link">Workout</Link>
        <Link to="/coach-dashboard" className='sidebar-link'>Coach Dashboard</Link>
        <Link to="/diet-plan" className="sidebar-link">Diet Plan</Link>
        <Link to="/goals" className="sidebar-link">Goals</Link>
        <Link to="/user-dashboard" className="sidebar-link">User Dashboard</Link>
        <Link to="/user-schedule" className="sidebar-link">My Schedule</Link>
        <Link to="/progress" className="sidebar-link">Progress</Link>
        <Link to="/help" className="sidebar-link">Help</Link>
        <button onClick={logout} className="btn btn-danger">Logout</button>
      </div>
      <div className="main-content">
        <header className="header">
          <h1>Welcome Back!</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="profile-info">
            <Link to="/user-profile" className="sidebar-link">Profile</Link>
          </div>
        </header>
        <div className="content">
          <div className="top-section">
            <div className="activity-overview">
              <h2>Track Your Daily Activities</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="activity-cards">
              <div className="activity-card">
                <img src={workoutSvg} className="logo" alt="Workout logo" />
                <p>Workout</p>
              </div>
              <div className="activity-card">
                <img src={calLogo} className="logo" alt="Calories logo" />
                <p>Calories</p>
              </div>
              <div className="activity-card">
                <img src={StepsSvg} className="logo" alt="Steps logo" />
                <p>Steps</p>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="progress-chart">
              <h2></h2>
              {/* <Bar data={data} options={options} /> */}
              <Progress />
            </div>
            <div className="side-section">
              <div >
                <h2>My Schedule</h2>
                <ul>
                  <div className="schedule">Monday: Yoga Stretch</div>
                  <div className="schedule">Tuesday: Cardio</div>
                  <div className="schedule">Wednesday: Strength Training</div>
                  <div className="schedule">Thursday: Rest Day</div>
                  <div className="schedule">Friday: HIIT</div>
                </ul>
              </div>
              <div className="goals">
                <h2>Goals</h2>
                <ul>
                  <li>Lose 5 lbs</li>
                  <li>Run 5k</li>
                  <li>Increase flexibility</li>
                </ul>
              </div>
              <div className="premium-membership">
                <h2>50% off on Premium Membership</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="btn btn-upgrade">Upgrade</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
