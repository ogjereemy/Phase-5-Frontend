import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import calLogo from "../../src/flTfAT01.svg";
import workoutSvg from "../../src/8QQGMQ01.svg";
import StepsSvg from "../../src/SkfdCw01.svg";
import profile from "../../src/profile.svg";
import Progress from "../components/dashboard/ProgressCharts"
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Overview = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <div className="main-content">
    
        <header className="header">
          <h1>Welcome Back!</h1>
          <div className="profile-info">
            <Link to="/user-profile" className="sidebar-link">
            <img src={profile} className="logo-profile" alt="Workout logo" />
            </Link>
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
