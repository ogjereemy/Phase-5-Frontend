// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profile">profile</Link></li>
      <li><Link to="/progress">Progress</Link></li>
      <li><Link to="/Workouts">Workouts</Link></li>
      <li><Link to="/form">goal form</Link></li>

    </ul>
  </nav>
);

export default Navbar;
