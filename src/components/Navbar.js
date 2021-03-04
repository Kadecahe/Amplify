import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <style type="text/css">
    {`
    .navbar-kade {
      background-color: #3668ff;
      color: white;
      margin-bottom: 1rem;
    }
    `}
  </style>
    <Navbar bg="kade" variant="kade" className="justify-content-between" sticky="top">
      <Navbar.Brand>
        <Link to="/">Amplify</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/about">About</Link>
      </Nav>
    </Navbar>
    </>
  );
};

export default withRouter(Navigation);
