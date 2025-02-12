import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default PrivateRoute;