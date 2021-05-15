import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar id="nav">
          <Navbar.Brand href="/">Mökin varauskalenteri</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
