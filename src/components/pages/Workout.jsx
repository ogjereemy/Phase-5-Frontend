import React from 'react';
import '../Workout.css';

function Workout() {
  return (
    <div className="workout">
      <div className="workout-header">
        <h3>Start Your Workout From Today</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      </div>
      <div className="workout-card">
        <img src="https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Workout" />
        <div className="trainer-info">
          <img src="https://images.pexels.com/photos/28054/pexels-photo-28054.jpg?auto=compress&cs=tinysrgb&w=600" alt="Trainer" />
          <div>
            <h4>Adrianna Lamb</h4>
            <p>Fitness Trainer</p>
          </div>
        </div>
        <div className="workout-info">
          <h5>Legs Workout</h5>
          <button>Lower Body</button>
          <button>Beginner</button>
        </div>
      </div>
    </div>
  );
}

export default Workout;
