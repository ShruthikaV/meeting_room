import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import MeetingRoom from "./pages/MeetingRoom.js";
import MeetingRoomPic from "./meeting-room-pic.jpg";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const routesWithBackground = ["/", "/blog"];

  const shouldDisplayBackground = routesWithBackground.includes(
    window.location.pathname
  );

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/rooms" element={<MeetingRoom />} />
        </Routes>
      </div>
      {shouldDisplayBackground && (
        <div className="background-pic">
          <img
            className="background-pic"
            src={MeetingRoomPic}
            alt="meeting-pic"
          />
        </div>
      )}
    </div>
  );
}
export default App;
