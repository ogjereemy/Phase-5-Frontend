// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import UserDashboard from './components/dashboard/UserDashboard';
import UserProfile from './components/dashboard/UserProfile';
import CoachDashboard from './components/dashboard/CoachDashboard';
import Overview from './components/Overview';
import WorkoutLogs from './components/dashboard/WorkoutLogs';
import NutritionLogs from './components/dashboard/NutritionLogs';
import ProgressCharts from './components/dashboard/ProgressCharts';
import PasswordReset from './components/auth/PasswordReset';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <AuthProvider>
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/password-reset" element={<PasswordReset />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path='/workout' element={<WorkoutLogs/>}/>
                    <Route path="/diet-plan" element={<NutritionLogs />} />
                    <Route path="/progress" element={<ProgressCharts />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/coach-dashboard" element={<CoachDashboard />} />
                </Routes>
            </>
        </AuthProvider>
    );
}

export default App;
