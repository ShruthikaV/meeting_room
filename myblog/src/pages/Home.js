import React from "react";
import "./Home.css";
import MeetingRoom from "../meeting-room-pic.jpg";

function home() {
  return (
    <div className="home">
      <div className="container">
        <div className="image-container">
          <img className="image" src={MeetingRoom} alt="meeting-pic" />
        </div>
        <div className="content-container">
          <h1>AIQ meeting room booking app</h1>
          <p>
            Here's an app that allows you to reserve meeting spaces in advance,
            saving you the trouble of scheduling conflicts.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default home;
