import React, { Component } from "react";
import { Link } from "react-router-dom";
import aiqaiq from "../aiqaiq.jpg";
import "../App.css";
// import {FaAlignRight} from 'react-icons/fa'

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="Navbar">
        <div className="nav-centre">
          <Link to="/">
            <img src={aiqaiq} alt="AIQ meeting room" width={90} height={90} />
          </Link>
          <div className="nav-content">Booking a meeting space</div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {/* <li>
                <Link to="/login">Login</Link>
              </li> */}
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
