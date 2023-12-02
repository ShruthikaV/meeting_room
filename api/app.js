const express = require("express");
const cors = require("cors");
const dataAccess = require('./dataAccess');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/rooms", (_, res) => {
    const data = dataAccess.readData();
    const roomsWithBookings = data.rooms.map(room => {
        return {
            ...room,
            bookings: data.bookings.filter(booking => booking.roomId === room.id)
        };
    });

    res.json(roomsWithBookings);
});

app.post("/rooms", (req, res) => {
    console.log(`Received request to create room: ${JSON.stringify(req.body)}`);
  const { name } = req.body;

  const data = dataAccess.readData();

  let roomExists = false;
  data.rooms.forEach((room) => {
    if (room.name === name) {
      roomExists = true;
    }
  });

  if (roomExists) {
    res.status(400).send("Room already exists");
    return;
  }

  data.rooms.push({ id: data.rooms.length + 1, name });

  dataAccess.writeData(data);

  res.status(201).send(`Room ${name} created successfully`);
});

function isRoomAvailable(roomId, startTime, endTime, bookings) {
    return !bookings.some(booking =>
        booking.roomId === roomId &&
        ((booking.startTime <= startTime && booking.endTime > startTime) ||
         (booking.startTime < endTime && booking.endTime >= endTime))
    );
}

app.post('/book-room', (req, res) => {
    const { roomId, userId, startTime, endTime } = req.body;

    // Read existing data
    const data = dataAccess.readData();

    // Check for room availability
    const isAvailable = isRoomAvailable(roomId, startTime, endTime, data.bookings);

    if (isAvailable) {
        // Update bookings
        data.bookings.push({ roomId, userId, startTime, endTime });
        dataAccess.writeData(data);
        res.status(201).send('Room booked successfully');
    } else {
        res.status(400).send('Room is not available for the selected time slot');
    }
});

app.get("/health", (_, res) => {
  res.json({
    status: 200,
    msg: "Server is up",
  });
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
