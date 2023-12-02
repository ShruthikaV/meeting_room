import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container background-pic">
        {/* <div className="image-container">
          <img className="image" src={MeetingRoom} alt="meeting-pic" />
        </div> */}
        <div className="content-container">
          <h1>AIQ meeting room booking app</h1>
          <p className="content">
            Here's an app that allows you to reserve meeting spaces in advance,
            saving you the trouble of scheduling conflicts.
          </p>
          {/* <button type="buton" className="nav-btn" onClick={handleToggle}>
            <h1>book now</h1>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
