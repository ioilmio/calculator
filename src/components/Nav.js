import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-container">
    <div className="nav-title">Math Magicians</div>
    <div className="nav-links">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/app">Calculator</Link>
      </div>
      <div>
        <Link to="/quote">Quote</Link>
      </div>
    </div>
  </nav>
);

export default Nav;
