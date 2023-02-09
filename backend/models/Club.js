const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Please add a club title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  // TODO
  // 1) photo will be added later for club
  // 2) link all club events
  // 3) link club users here
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Club", ClubSchema);
