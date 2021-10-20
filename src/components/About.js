import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4"> About Us </h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              {" "}
              Contact Us!
            </NavLink>
          </div>
          <div className="col-md-6">
            <img src="#" alt="About Us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
