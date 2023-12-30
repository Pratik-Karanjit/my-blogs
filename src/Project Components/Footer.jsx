// Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Section 1 */}
            <h5>Contact me</h5>
<br></br>            <p>
            pratikkaranjit@gmail.com
<br></br>
9847346220
            </p>
          </div>
          <div className="col-md-4">
            {/* Section 2 */}
            <h4>Let's connect and work!  </h4>
          </div>

          {/* social icons */}
          <div className="col-md-4">
          <div className="d-flex mt-5">
              <a href="https://www.facebook.com/Pratik.Karanjit/" target='_blank' rel='noopener noreferrer'><i className="bi bi-facebook"></i></a>
              <a href="https://www.linkedin.com/in/pratik-karanjit/" target='_blank' rel='noopener noreferrer'><i className="bi bi-linkedin"></i></a>
              <a href="https://www.instagram.com/pratik_karanjit/" target='_blank' rel='noopener noreferrer'><i className="bi bi-instagram"></i></a>
              <a href="https://github.com/Pratik-Karanjit" target='_blank' rel='noopener noreferrer'><i className="bi bi-github"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p className="h5">&copy; 2023 PratikBlogs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
