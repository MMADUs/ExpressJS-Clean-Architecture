import { Server } from "socket.io";
import server from "../../server";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

export default io;
