const express = require("express");
const app = express();
const routes = require('./routes/routes');
const PORT = 3030;
const cors = require("cors");
require('dotenv').config();
const socketIO = require("socket.io");

app.use(cors({origin: process.env.FRONT,}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',routes);
// app.use(cors({
//   origin:'*'
// }));
const server = app.listen(PORT, () => {
  console.log(`[HTTP] Server is running at ${process.env.HOST}:${PORT}`);
  console.log(`[HTTP] Press CTRL + C to stop it`);
});

const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["secretHeader"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("[IO] Server has a new connection ");
  socket.on("chat.message", (data) => {
    console.log("[SOCKET] Chat.message => ", data);
    io.emit("chat.message", data);
  });
  socket.on("disconnected", () => {
    console.log("[SOCKET] A connection was disconnected");
  });
});
