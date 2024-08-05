import React from 'react';
import '../Achievement.css';

function Achievements({ achievements }) {
  return (
    <div className="achievements">
      {achievements.map((achievement, index) => (
        <div key={index} className="achievement">
          <h4>{achievement.value}</h4>
          <p>{achievement.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
