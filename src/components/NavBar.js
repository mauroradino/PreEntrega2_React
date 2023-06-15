import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import CardWidget from "./CardWidget.js";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg header">
      <div
        className="container-fluid"
        style={{ backgroundColor: props.bgMain }}
      >
        <Link to="/" className="h1_navbar">E-HEADPHONES</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="link" to="/AboutPage">Clients</Link>
            </li>
            <li className="nav-item">
             <Link className="link" to="/AboutPage">About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Products
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Link className="link" to="/Category">In-Ears</Link></Dropdown.Item>
                  <Dropdown.Item><Link className="link" to="/Category">Headphones</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
      <CardWidget className="CardWidget" />
    </nav>
  );
}

export default NavBar;
