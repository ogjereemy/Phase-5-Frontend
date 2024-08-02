

import React from 'react';
import Sidebar from './src/components/Sidebar';
import Header from './src/components/Header';
import Workout from './src/components/pages/Workout';
import MySchedule from './src/components/MySchedule';
import Achievements from './src/components/Achievement';
import GoalTracker from './src/components/pages/goaltracker';
import { Route, Routes } from 'react-router';
import './App.css';
import GoalForm from './src/pages/GoalForm';

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
            <Route path='goalform' element={<GoalForm />}/>

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
