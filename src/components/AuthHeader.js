import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import "firebase/auth";

const AuthHeader = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" id="nav">
        <Navbar.Brand href="/">Mökin varauskalenteri</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
    </div>
  );
};

export default AuthHeader;
