import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Workout from './components/Workout';
import MySchedule from './components/MySchedule';
import Achievements from './components/Achievement';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <Workout />
          <MySchedule />
          <Achievements />
        </div>
      </div>
    </div>
  );
}

export default App;
