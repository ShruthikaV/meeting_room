import React from "react";
import meet_pic from "../meet_pic.jpg";
import "./Room.css";

function Room() {
  return (
    <div className="room-container">
      <div className="room-content">
        <img
          src={meet_pic}
          alt="meet_pic"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="content">
        <h1>Meeting room 1</h1>
        <button onClick={() => alert("Button Clicked!")}>Book</button>
      </div>
      <div className="room-content">
        <img
          src={meet_pic}
          alt="meet_pic"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="content">
        <h1>Meeting room 2</h1>
        <button onClick={() => alert("Button Clicked!")}>Book</button>
      </div>
      <div className="room-content">
        <img
          src={meet_pic}
          alt="meet_pic"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="content">
        <h1>Meeting room 3</h1>
        <button onClick={() => alert("Button Clicked!")}>Book</button>
      </div>
      <h1>Add more meeting rooms</h1>
      <button onClick={() => alert("Button Clicked!")}>Add</button>
    </div>
  );
}

export default Room;
