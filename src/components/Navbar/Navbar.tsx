import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-primary border-bottom border-body mb-5">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <span className="navbar-brand mb-0 h1 text-white ">TV Shows</span>
      </div>
    </nav>
  );
};

export default Navbar;