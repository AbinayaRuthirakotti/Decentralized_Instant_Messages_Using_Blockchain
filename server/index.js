import { Server } from "socket.io";

const io = new Server(3001, {
  cors: {
    origin: "*",
  },
});

console.log("Socket server running on port 3001");

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", (msg) => {
    io.emit("receiveMessage", msg);
  });
});
