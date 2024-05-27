import app from "./src/app.js";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;