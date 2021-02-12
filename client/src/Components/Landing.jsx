import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      <h1>Welcome to Kankor Search app.</h1>
      <p className="mg-top-paragraph">
        You can use this app to search for your results in Kankor exam which was
        recently launched by Education Misitry.
        <br />
        You only need to provide your student ID in the search page, then you
        will be able to see the relative results. Make sure you enter your
        studnet ID very correctly otherwise we are not sure to find you relative
        reslts.
        <br />
        Please enjoy this app and have fun. Thank you.
      </p>
      <Link to="/cityname" className="btn btn-lg btn-primary">
        Search <i className="fas fa-search"></i>
      </Link>
    </div>
  );
};

export default Landing;
