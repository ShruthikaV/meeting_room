import React from "react";
import "./Home.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container background-pic">
        {/* <div className="image-container">
          <img className="image" src={MeetingRoom} alt="meeting-pic" />
        </div> */}
        <div className="content-container">
          <h1>AIQ meeting room booking app</h1>
          <div className="content">
            Here's an app that allows you to reserve meeting spaces in advance,
            saving you the trouble of scheduling conflicts.
          </div>
          <Link to="/rooms">
            <Button mt={10} colorScheme="blue" type="submit">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
