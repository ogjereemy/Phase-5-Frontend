import React from 'react';
import '../FeaturedWorkout.css';

function FeaturedWorkout() {
  return (
    <div className="featured-workout">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyNhrQLnhiPPW6OJF-XijS0aiVlxrzDKRLw&s" alt="Workout" className="featured-image" />
      <div className="trainer-info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-pcGc-9-We_GwmxetYW96x6eo_hUoNrGyvyw4aioiJcpcyesiOUg6Qre7tkdCSPZGuQ&usqp=CAU" alt="Trainer" className="trainer-avatar" />
        <div>
          <h3>Adrianna Lamb</h3>
          <p>Fitness Trainer</p>
        </div>
      </div>
      <div className="workout-info">
        <h4>Legs Workout</h4>
        <p>Lower Body | Beginner</p>
      </div>
    </div>
  );
}

export default FeaturedWorkout;
