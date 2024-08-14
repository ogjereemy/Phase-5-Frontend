
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import calLogo from '../../src/svgs/flTfAT01.svg';
import workoutSvg from '../../src/svgs/8QQGMQ01.svg';
import StepsSvg from '../../src/svgs/SkfdCw01.svg';
import profile from '../../src/svgs/profile.svg';
import Progress from '../components/dashboard/ProgressCharts';

const Overview = () => {
  const { user } = useContext(UserContext); // Accessing the user data

  const quote = "Success is in every step of your journey—every drop of sweat, sore muscle, and conquered doubt. Embrace challenges, celebrate small victories, and become the strongest, healthiest version of yourself.";

  const schedule = [
    { day: "Monday", activity: "Yoga Stretch" },
    { day: "Tuesday", activity: "Cardio" },
    { day: "Wednesday", activity: "Strength Training" },
    { day: "Thursday", activity: "Rest Day" },
    { day: "Friday", activity: "HIIT" },
  ];

  const goals = ["Lose 5 lbs", "Run 5k", "Increase flexibility"];

  return (
    <div className="dashboard">
      <div className="main-content">
        <header className="header">
          <h1>Welcome Back, {user.username}!</h1> {/* Displaying the username */}
          <div className="profile-info">
            <Link to="/user-profile" className="sidebar-link">
              <img src={profile} className="logo-profile" alt="Profile logo" />
              <p>Profile</p>
            </Link>
          </div>
        </header>

        <div className="content">
          <div className="top-section">
            <div className="activity-overview">
              <h2>Track Your Daily Activities</h2>
              <p>{quote}</p>
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
              <h2>Progress</h2>
              <Progress />
            </div>

            <div className="side-section">
              <div>
                <h2>My Schedule</h2>
                <ul>
                  {schedule.map((item, index) => (
                    <div key={index} className="schedule">
                      {item.day}: {item.activity}
                    </div>
                  ))}
                </ul>
              </div>

              <div className="goals">
                <h2>Goals</h2>
                <ul>
                  {goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>

              <div className="premium-membership">
                <h2>50% off on Premium Membership</h2>
                <p>
                  Unlock your best self with our Premium Membership. Access advanced tracking tools, personalized plans, and an ad-free experience. Hurry, this limited-time offer won’t last!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
