// BlogCards.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogCards = () => {
  return (
    <div className="container my-4">
      <div className="row">
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

        {/* Card 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300" // Replace with your blog image URL
              className="card-img-top"
              alt="Blog Image"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Title 2</h5>
              <p className="card-text">
                Some brief description or excerpt from the blog post goes here.
              </p>
              <a href="#" className="btn btn-primary">
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
