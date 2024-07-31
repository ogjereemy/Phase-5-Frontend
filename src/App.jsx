// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './components/auth/Signup'; // Import SignIn component if it exists
import CoachesLogin from './components/dashboard/CoachesLogin'; // Import CoachesLogin from the dashboard folder
import CoachDashboard from './components/dashboard/CoachDashboard'; // Import CoachDashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/coaches-login" element={<CoachesLogin />} />
        <Route path="/coach-dashboard" element={<CoachDashboard />} />
        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;
