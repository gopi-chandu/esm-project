const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");
const color = require("colors"); // for colors in terminal
const dotenv = require("dotenv"); // for loading env files
const connectDB = require("./config/db"); // loading database connect function
const errorHandler = require("./middlewares/error");
var cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const bodyParser = require('body-parser');
const Message = require("./models/Message");
// Loading env files
dotenv.config({ path: "./config/config.env" });

const app = express();
// for socket io
const server = http.createServer(app);
const io = socketio(server,{
  cors: {
    origin: "http://localhost:5001",
    methods: ["GET", "POST"],
  },
});
app.use(bodyParser.json()); 
//connect to database
connectDB();

//CORS
const cors = require("cors");
app.use(cors());

// File uploading
app.use(fileupload());

//for parsing body
app.use(express.json());
app.use(cookieParser());


//Set public folder as our static folder, to tell node that it is our static folder
app.use(express.static(path.join(__dirname, "public")));

// Load routers
const auth = require("./routes/auth");
const user = require("./routes/user");
const event = require("./routes/event");
const club = require("./routes/club");
const registerUser = require("./routes/registerUser");
const message = require("./routes/message");

//use the routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/events", event);
app.use("/api/v1/users", user);
app.use("/api/v1/clubs", club);
app.use("/api/v1/eventRegister", registerUser);
app.use("/api/v1/message", message);

// Error handler
app.use(errorHandler);

// 404 error
app.use("/", (req, res) => {
  res.json({ msg: "ERROR 404" });
});

// -----------------
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", async (data) => {
    // store here in database
    await Message.create(data)
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

// ------------------------

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
