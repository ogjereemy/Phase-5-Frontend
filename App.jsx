import React, { useEffect, useState } from 'react';
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
import CoachSidebar from './src/components/dashboard/CoachSidebar';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import ClientList from './src/components/dashboard/ClientList';
import CoachSignup from './src/components/dashboard/CoachSignup';
import PasswordResetRequest from './src/components/auth/PasswordResetRequest';
import AddProgressLog from './src/components/dashboard/AddProgressLog';
import ExercisesManager from './src/components/ExerciseManager';
import WorkoutPlansManager from './src/components/WorkoutPlansManager';
import CoachWorkouts from './src/components/CoachWorkouts';
import UserWorkoutPlans from './src/components/UserWorkoutPlans';
import ExerciseList from './src/components/ExerciseList';
import UserWorkouts from './src/components/UserWorkouts';
import Help from './src/pages/Help';

function App() {
    return (
        <AuthProvider>
            <div className="app-container">
                <MainContent />
            </div>
        </AuthProvider>
    );
}

const MainContent = () => {
    const location = useLocation();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Assume the role is stored in localStorage after login
        const role = localStorage.getItem('role');
        setUserRole(role);
    }, []);

    const pathsWithoutSidebar = ['/', '/signup', '/login', '/coaches-login', '/password-reset', '/about', '/contact', '/coach-signup', '/client-list'];

    return (
        <>
            {!pathsWithoutSidebar.includes(location.pathname) && (
                userRole === 'coach' ? <CoachSidebar /> : <Sidebar />
            )}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/password-reset" element={<PasswordResetRequest />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path='/workout' element={<WorkoutLogging />} />
                    <Route path="/diet-plan" element={<NutritionLogs />} />
                    <Route path="/progress" element={<ProgressCharts />} />
                    <Route path="/add-progress" element={<AddProgressLog />} />
                    <Route path='/goals' element={<GoalTracker />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/coach-dashboard" element={<CoachDashboard />} />
                    <Route path='/coaches-login' element={<CoachLogin />} />
                    <Route path='/about' element={<About/>}/>
                    <Route path='/help' element={<Help/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path="/client-list" element={<ClientList />} />
                    <Route path="/workout-plans/:clientId" element={<WorkoutLogging/>} />
                    <Route path="/coach-signup" element={<CoachSignup/>} />
                    <Route path="/client-progress/:clientId" element={<ProgressCharts/>} />
                    <Route path="/exercises" element={<ExercisesManager/>} />
                    <Route path="/user-exercises" element={<ExerciseList/>} />
                    <Route path="/workout-plans" element={<WorkoutPlansManager/>} />
                    <Route path="/user-workouts" element={<UserWorkoutPlans/>} />
                    <Route path="/workouts" element={<CoachWorkouts/>} />
                    <Route path='users-workouts' element={<UserWorkouts/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
