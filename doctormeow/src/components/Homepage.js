import React from 'react'
import './homepage.css'

const Homepage = () => {
    return (
      <div className="homepage">
        <h1 className="homeheading">
          Welcome to <span id="doctormeowspan"> Doctor Meow </span>
        </h1>
        <div className="catdoctorimage"> </div>
      </div>
    );
}
export default Homepage;