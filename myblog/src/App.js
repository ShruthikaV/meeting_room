// import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import Login from "./pages/Login.js";
import Room from "./pages/Room.js";
import MeetingRoom from "./pages/MeetingRoom.js";
import MeetingRoomPic from "./meeting-room-pic.jpg";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  //   console.log(`data: ${JSON.stringify(blogs)}`);
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<MeetingRoom />} />
          {/* <Route exact path="/room1" component={Room1} /> */}
          {/* <Route exact path="/room2" component={Room2} /> */}
          {/* <Route exact path="/room3" component={Room3} /> */}
        </Routes>
      </div>
      <div className="background-pic">
        <img
          className="background-pic"
          src={MeetingRoomPic}
          alt="meeting-pic"
        />
      </div>
    </div>
  );
}
export default App;
