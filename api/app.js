const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book you meeting time",
    },
    {
      id: "2",
      title: "Modify your timings",
    },
  ]);
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
