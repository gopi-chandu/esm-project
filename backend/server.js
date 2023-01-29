const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");
const color = require("colors"); // for colors in terminal
const dotenv = require("dotenv"); // for loading env files
const connectDB = require("./config/db"); // loading database connect function
const errorHandler = require("./middlewares/error");
var cookieParser = require("cookie-parser");

// Loading env files
dotenv.config({ path: "./config/config.env" });

const app = express();
// for socket io
const server = http.createServer(app);
const io = socketio(server);

//connect to database
connectDB();

//for parsing body
app.use(express.json());
app.use(cookieParser());

// Load routers
const auth = require("./routes/auth");

//use the routes
app.use("/api/v1/auth", auth);

// Error handler
app.use(errorHandler);

// 404 error
app.use("/", (req, res) => {
  res.json({ msg: "ERROR 404" });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
