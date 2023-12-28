// HeroSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const HeroSection = () => {
  return (
    <div className="container-fluid my-4 vh-100 d-flex align-items-center">
      <div className="row">
        {/* Left Side: Text Content */}
        <div className="col-md-6">
          <div className="hero-content custom-padding">
            <h1 className="display-4 mb-4">Welcome to my Blog</h1>
            <p className="lead">
              Hello! I'm a passionate cloud enthusiast, dedicated to exploring
              and mastering the latest technologies in the ever-evolving cloud
              computing landscape. With a background in Computing, I am committed to contributing to the community by
              sharing knowledge, participating in discussions, and fostering a
              collaborative learning environment. Let's embark on a journey
              together into the fascinating world of cloud computing!
            </p>
            <button className="btn btn-primary btn-lg">Learn More</button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/400x400" 
            alt="Hero Image"
            className="img-fluid rounded img-custom-padding"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
