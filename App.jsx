import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './src/components/Home';
import Signup from './src/components/auth/Signup';
import Login from './src/components/auth/Login';
import UserDashboard from './src/components/dashboard/UserDashboard';
import UserProfile from './src/components/dashboard/UserProfile';
import CoachDashboard from './src/components/dashboard/CoachDashboard';
import CoachLogin from './src/components/dashboard/CoachesLogin';
import Overview from './src/components/Overview';
import GoalTracker from './src/components/pages/GoalTracker';
import WorkoutLogging from './src/components/WorkoutList';
import NutritionLogs from './src/components/dashboard/NutritionLogs';
import ProgressCharts from './src/components/dashboard/ProgressCharts';
import PasswordReset from './src/components/auth/PasswordReset';
import { AuthProvider } from './src/context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './src/components/Sidebar';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import ClientList from './src/components/dashboard/ClientList';

function App() {
    return (
        <AuthProvider>
            <>
                <div className="app-container">
                    <MainContent />
                </div>
            </>
        </AuthProvider>
    );
}

const MainContent = () => {
    const location = useLocation();
    const pathsWithoutSidebar = ['/', '/signup', '/login', '/coaches-login', '/password-reset', '/about', '/contact'];

    return (
        <>
            {!pathsWithoutSidebar.includes(location.pathname) && <Sidebar />}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/password-reset" element={<PasswordReset />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path='/workout' element={<WorkoutLogging />} />
                    <Route path="/diet-plan" element={<NutritionLogs />} />
                    <Route path="/progress" element={<ProgressCharts />} />
                    <Route path='/goals' element={<GoalTracker />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/coach-dashboard" element={<CoachDashboard />} />
                    <Route path='/coaches-login' element={<CoachLogin />} />
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path="/client-list" element={<ClientList />} />
                    <Route path="/workout-plans" element={<WorkoutLogging/>} />
                    <Route path="/workout-plans/:clientId" element={<WorkoutLogging/>} />
                    <Route path="/client-progress/:clientId" element={<ProgressCharts/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;

