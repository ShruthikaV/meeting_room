import React from "react";
import { Link } from "react-router-dom";

function Room1() {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  return (
    <div classNmae="room1-container">
      <div className="room1-content">
        <div className="content">Room 1 Meeting timings</div>
        <div className="timings">
          <Link to="/room1/9am" className="nav-link">
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <h1>9:00 AM</h1>
            </button>
          </Link>
          <Link to="/room1/10am" className="nav-link">
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <h1>10:00 AM</h1>
            </button>
          </Link>
          <Link to="/room1/10am" className="nav-link">
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <h1>11:00 AM</h1>
            </button>
          </Link>
          <Link to="/room1/10am" className="nav-link">
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <h1>13:00 AM</h1>
            </button>
          </Link>
          <Link to="/room1/10am" className="nav-link">
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <h1>14:00 AM</h1>
            </button>
          </Link>
          <Link to="/room1/10am" className="nav-link">
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <h1>15:00 AM</h1>
            </button>
          </Link>
          <Link to="/room1/10am" className="nav-link">
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <h1>16:00 AM</h1>
            </button>
          </Link>
          <Link to="/room1/10am" className="nav-link">
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <h1>17:00 AM</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Room1;
