// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';

// // import Profile from './pages/Profile';
// // import Progress from './pages/Progress';
// // import Workouts from './pages/Workouts';
// import GoalForm from './pages/GoalForm';
// const App = () => (
//   <div>
//     <Navbar />
//   <Routes>
    
    
      
//     <Route path="/form" element={<GoalForm />} />

      
    
//   </Routes>
//   </div>
  
// );

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
