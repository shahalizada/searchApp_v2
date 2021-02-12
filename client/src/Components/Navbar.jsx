import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="nav-logo">
        Kankor <i className="fas fa-search"></i>
      </Link>
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/cityname">
        Search
      </Link>
    </div>
  );
};

export default Navbar;
