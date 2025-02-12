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
import GoalTracker from './src/components/GoalTracker';
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
import NotificationSetup from './src/NotificationSetup';
import PrivateRoute from './src/components/auth/PrivateRoute';

function App() {
    return (
        <AuthProvider>
            <div className="app-container">
                <MainContent />
                <NotificationSetup/>
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
                    <Route path="/overview" element={<PrivateRoute><Overview /></PrivateRoute>} />
                    <Route path='/workout' element={<PrivateRoute><WorkoutLogging /></PrivateRoute>} />
                    <Route path="/diet-plan" element={<PrivateRoute><NutritionLogs /></PrivateRoute>} />
                    <Route path="/progress" element={<PrivateRoute><ProgressCharts /></PrivateRoute>} />
                    <Route path="/add-progress" element={<PrivateRoute><AddProgressLog /></PrivateRoute>} />
                    <Route path='/goals' element={<PrivateRoute><GoalTracker /></PrivateRoute>} />
                    <Route path="/user-dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
                    <Route path="/user-profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                    <Route path="/coach-dashboard" element={<PrivateRoute><CoachDashboard /></PrivateRoute>} />
                    <Route path='/coaches-login' element={<PrivateRoute><CoachLogin /></PrivateRoute>} />
                    <Route path='/about' element={<About/>}/>
                    <Route path='/help' element={<PrivateRoute><Help/></PrivateRoute>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path="/client-list" element={<PrivateRoute><ClientList /></PrivateRoute>} />
                    <Route path="/workout-plans/:clientId" element={<PrivateRoute><WorkoutLogging/></PrivateRoute>} />
                    <Route path="/coach-signup" element={<PrivateRoute><CoachSignup/></PrivateRoute>} />
                    <Route path="/client-progress/:clientId" element={<PrivateRoute><ProgressCharts/></PrivateRoute>} />
                    <Route path="/exercises" element={<PrivateRoute><ExercisesManager/></PrivateRoute>} />
                    <Route path="/user-exercises" element={<PrivateRoute><ExerciseList/></PrivateRoute>} />
                    <Route path="/workout-plans" element={<PrivateRoute><WorkoutPlansManager/></PrivateRoute>} />
                    <Route path="/user-workouts" element={<PrivateRoute><UserWorkoutPlans/></PrivateRoute>} />
                    <Route path="/workouts" element={<PrivateRoute><CoachWorkouts/></PrivateRoute>} />
                    <Route path='users-workouts' element={<PrivateRoute><UserWorkouts/></PrivateRoute>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
