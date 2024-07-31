

// src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import SignIn from './components/auth/Signup'; // Import SignIn component if it exists
// import CoachesLogin from './components/dashboard/CoachesLogin'; // Import CoachesLogin from the dashboard folder
// import CoachDashboard from './components/dashboard/CoachDashboard'; // Import CoachDashboard

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/coaches-login" element={<CoachesLogin />} />
//         <Route path="/coach-dashboard" element={<CoachDashboard />} />
//         {/* Define other routes */}
//       </Routes>
//     </Router>


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


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import Workout from './components/Workout';
// import MySchedule from './components/MySchedule';
// import Achievements from './components/Achievement';
// import Home from './Home';
// import Signup from './components/auth/Signup';
// import CoachesLogin from './components/dashboard/CoachesLogin';
// import CoachDashboard from './components/dashboard/CoachDashboard';
// import GoalForm from './pages/GoalForm';
// import './App.css';

// const App = () => (
//   <Router>
//     <div className="app">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/coaches-login" element={<CoachesLogin />} />
//             <Route path="/coach-dashboard" element={<CoachDashboard />} />
//             <Route path="/form" element={<GoalForm />} />
//             <Route path="/workout" element={<Workout />} />
//             <Route path="/my-schedule" element={<MySchedule />} />
//             <Route path="/achievements" element={<Achievements />} />
//             {/* Define other routes as necessary */}
//           </Routes>
//         </div>
//       </div>
//     </div>
//   </Router>
// );

// export default App;



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
