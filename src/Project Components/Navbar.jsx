// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components for React

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Navbar.Brand href="#" className="brand-padding">
        PratikBlogs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#blogCards">Blogs</Nav.Link>
          <Nav.Link href="/blogOne">Blog1</Nav.Link>
          <Nav.Link href="/blogTwo">Blog2</Nav.Link>
          <Nav.Link href="/blogThree">Blog3</Nav.Link>
          <Nav.Link href="/blogFour">Blog4</Nav.Link>
        </Nav>
        <Nav>
          {/* Add any content you want to appear on the right side */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
