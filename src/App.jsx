
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

// import Profile from './pages/Profile';
// import Progress from './pages/Progress';
// import Workouts from './pages/Workouts';
import GoalForm from './pages/GoalForm';
const App = () => (
  <div>
    <Navbar />
  <Routes>
    
    
      
    <Route path="/form" element={<GoalForm />} />

      
    
  </Routes>
  </div>
  
);

export default App;
