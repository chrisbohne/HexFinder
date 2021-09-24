import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2><Link to="/">HexFinder</Link></h2>
      </div>
      <div className="navigation">
        <ul>
          <li><Link to="/playground">Playground</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
