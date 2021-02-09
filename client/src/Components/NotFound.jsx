import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="notfound-heading">
        <i className="fas fa-exclamation-triangle"></i> Page Not Found.
      </h1>
      <p className="notfound-paragraph">
        We couldn't find the requested Page, Please make sure that you have
        entered a correct address in the bar.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
