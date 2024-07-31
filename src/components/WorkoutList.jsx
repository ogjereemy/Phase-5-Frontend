import React from 'react';
import '../WorkoutList.css'

function WorkoutList() {
  const workouts = [
    { day: 'Monday', name: 'Stretch', time: '08:00', sets: '10/20 Sets' },
    { day: 'Tuesday', name: 'Back Stretch', time: '09:00', rounds: '6/10 Round' },
    { day: 'Wednesday', name: 'Yoga', time: '10:00', duration: '04/20 min' },
    { day: 'Thursday', name: 'Yoga', time: '11:00', duration: '20 min' },
    { day: 'Friday', name: 'Yoga', time: '08:00', duration: '20 min' },
  ];

  return (
    <div className="workout-list">
      <h3>My Schedule</h3>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index} className="workout-item">
            <div className="workout-day">{workout.day}</div>
            <div className="workout-details">
              <span>{workout.name}</span>
              <span>{workout.time}</span>
              <span>{workout.sets || workout.rounds || workout.duration}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
