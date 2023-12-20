import React from 'react';
import {Link} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-primary border-bottom border-body mb-5">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <Link to="/" className="navbar-brand mb-0 h1 text-white ">TV Shows</Link>
      </div>
    </nav>
  );
};

export default Navbar;