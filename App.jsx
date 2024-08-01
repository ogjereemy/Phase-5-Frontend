// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/components/Home';
import Signup from './src/components/auth/Signup';
import Login from './src/components/auth/Login';
import UserDashboard from './src/components/dashboard/UserDashboard';
import UserProfile from './src/components/dashboard/UserProfile';
import CoachDashboard from './src/components/dashboard/CoachDashboard';
import Overview from './src/components/Overview';
import GoalForm from './src/pages/GoalForm';
import WorkoutList from './src/components/WorkoutList';
import NutritionLogs from './src/components/dashboard/NutritionLogs';
import ProgressCharts from './src/components/dashboard/ProgressCharts';
import PasswordReset from './src/components/auth/PasswordReset';
import { AuthProvider } from './src/context/AuthContext';
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
                    <Route path='/workout' element={<WorkoutList/>}/>
                    <Route path="/diet-plan" element={<NutritionLogs />} />
                    <Route path="/progress" element={<ProgressCharts />} />
                    <Route path='/goals' element ={<GoalForm />}  />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/coach-dashboard" element={<CoachDashboard />} />
                </Routes>
            </>
        </AuthProvider>
    );
}

export default App;
