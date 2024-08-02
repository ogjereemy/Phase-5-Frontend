import React from 'react';


function MySchedule() {
  const schedule = [
    {
      day: 'Monday',
      activity: 'Stretch',
      time: '08:00',
      details: '20 Sets',
      image: 'https://www.pexels.com/photo/woman-stretching-on-ground-3076509/',
    },
    {
      day: 'Tuesday',
      activity: 'Back Stretch',
      time: '09:00',
      details: '10 Rounds',
      image: 'https://images.pexels.com/photos/4498277/pexels-photo-4498277.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      day: 'Wednesday',
      activity: 'Squats',
      time: '10:00',
      details: '20 min',
      image: 'https://images.pexels.com/photos/1552250/pexels-photo-1552250.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      day: 'Thursday',
      activity: 'Pushup',
      time: '11:00',
      details: '20 min',
      image: 'https://media.istockphoto.com/id/1149242526/photo/determined-man-doing-push-ups-at-the-gym.jpg?b=1&s=612x612&w=0&k=20&c=5JhnEFHoxi8gqa9Xrv4IDGmnXTeu_SPF5vnrD3zkpFw=',
    },
    {
      day: 'Friday',
      activity: 'Yoga',
      time: '08:00',
      details: '20 min',
      image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="my-schedule">
      <h3>My Schedule</h3>
      <ul>
        {schedule.map((item, index) => (
          <li key={index} className="schedule-item">
            <img src={item.image} alt={item.activity} className="activity-image" />
            <div className="schedule-content">
              <div className="schedule-day">{item.day}</div>
              <div className="schedule-details">
                <span className="activity-name">{item.activity}</span>
                <span className="activity-time">{item.time}</span>
                <span className="activity-details">{item.details}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MySchedule;
