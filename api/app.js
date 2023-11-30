const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const rooms = [
    {
      id: "1",
      title: "Meeting Room 1",
    },
    {
      id: "2",
      title: "Meeting Room 2",
    },
    {
      id: "3",
      title: "Meeting Room 3",
    },
    {
      id: "4",
      title: "Meeting Room 4",
    },
  ];

  // const rooms = readFile("rooms.json")

  res.json(rooms);
});

app.get("/health", (req, res) => {
  res.json({
    status: 200,
    msg: "Server is up",
  });
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
