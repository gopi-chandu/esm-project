const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: [true, "Please add a message"],
  },
  room: {
    type: String,
    required: [true, "Please add a room name"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  timeH: {
    type: String,
  },
  timeM: {
    type: String,
  },
  author: {
    type: String,
  },
  // Each message has to be linked to a user
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
