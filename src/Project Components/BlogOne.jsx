// BlogOne.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

const BlogOne = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4">Blog Title</h1>
        <p className="lead">Published on January 1, 2023</p>
      </header>
{/* article goes here */}
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
          velit sit amet ipsum pellentesque feugiat. Ut vel nisl id lacus
          vestibulum varius. Nulla facilisi. Nullam efficitur justo ac justo
          efficitur, vitae gravida sapien gravida. Sed tristique vel odio sit
          amet scelerisque. Sed tristique, justo ac tincidunt fermentum, turpis
          velit dapibus odio, vel tincidunt erat elit vel tortor. In hac
          habitasse platea dictumst. Sed hendrerit massa vel risus accumsan,
          quis tincidunt felis feugiat.
        </p>

        <p>
          Duis efficitur elit sit amet purus rhoncus, a aliquam libero
          scelerisque. Curabitur ut tristique ligula. Quisque auctor vitae justo
          id rhoncus. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Integer eleifend dui vel metus
          aliquam, ac ultrices nisi finibus. Nulla facilisi. Curabitur nec
          molestie velit, sit amet ultrices felis. Suspendisse vel neque
          hendrerit, tincidunt justo vel, sodales tortor.
        </p>

        {/* Continue with more paragraphs of Lorem Ipsum text... */}
      </article>
    </div>
  );
};

export default BlogOne;
