const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");
const color = require("colors"); // for colors in terminal
const dotenv = require("dotenv"); // for loading env files
const connectDB = require("./config/db"); // loading database connect function

// Loading files
dotenv.config({ path: "./config/config.env" });
const app = express();
const server = http.createServer(app);
const io = socketio(server);
//connect to database
connectDB();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
