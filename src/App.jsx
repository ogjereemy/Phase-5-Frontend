

import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Workout from './components/pages/Workout';
import MySchedule from './components/MySchedule';
import Achievements from './components/Achievement';
import GoalTracker from './components/pages/goaltracker';
import { Route, Routes } from 'react-router';
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
          <Routes>
            <Route path='goaltrack' element={<GoalTracker />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
