import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" className="justify-content-between">
      <Navbar.Brand>
        <Link to="/">Amplify</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/about">About</Link>
        <Link to="/">Listen</Link>
      </Nav>
    </Navbar>
  );
};

export default withRouter(Navigation);
