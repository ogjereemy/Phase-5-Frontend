import React from 'react';
import ReactDOM from 'react-dom';
import './goaltracker.css'

const GoalTracker = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Goal Tracker</h1>
        <h2>Record Changes</h2>
      </div>
      <div className="dailyContainer">
        <h3>Daily</h3>
        <div className="cardContainer">
          <div className="card">
            <h4>Weight</h4>
            <p className="metric">61.2 kg</p>
            <p className="goal">Goal: 5.81 kg</p>
            <div className="chart"></div>
          </div>
          <div className="card">
            <h4>Steps</h4>
            <p className="metric">3560/4000</p>
            <div className="stepsChart"></div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <h4>Workout</h4>
            <p className="metric">19 min</p>
            <p>Weekly Average: 16 min</p>
            <div className="chart"></div>
          </div>
          <div className="card">
            <h4>Calories</h4>
            <p className="metric">80 cal</p>
            <p>Weekly Average: 102 cal</p>
            <div className="chart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GoalTracker
