// BlogCards.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import blog1 from '../images/blog1.png';
import { useNavigate } from 'react-router-dom';

const BlogCards = () => {
  let navigate = useNavigate()
  return (
    <div id="blogCards" className="container-fluid my-4 vh-100 blog-cards-container">

    <div className="row vh-100">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300" // Replace with your blog image URL
              className="card-img-top"
              alt="Blog Image"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Title 1</h5>
              <p className="card-text">
                Some brief description or excerpt from the blog post goes here.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
 {/* Card 2 with hover effect */}
 <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <div className="image-container">
              <img
                src={blog1} // Use the imported image
                className="card-img-top"
                alt="Blog Image" 
              />
              <div className="overlay"  onClick={() => {
                  navigate('/blogOne')
                }}>
                <p className="overlay-text">View More</p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Blog Title 2</h5>
              <p className="card-text">
                Some brief description or excerpt from the blog post goes here.
              </p>
              <a href="#" className="btn btn-primary"  onClick={() => {
                  navigate('/blogOne')
                }}>
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300" // Replace with your blog image URL
              className="card-img-top"
              alt="Blog Image"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Title 3</h5>
              <p className="card-text">
                Some brief description or excerpt from the blog post goes here.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300" // Replace with your blog image URL
              className="card-img-top"
              alt="Blog Image"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Title 4</h5>
              <p className="card-text">
                Some brief description or excerpt from the blog post goes here.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
