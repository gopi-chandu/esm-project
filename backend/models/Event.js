const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Please add a course title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  capacity: {
    type: Number,
    default: -1,
  },
  photo: {
    type: String,
    default: "no-photo.png",
  },
  entryFee: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: Date,
    required: [true, "Please add a start date"],
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: [true, "Please add an end date"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Each event has to be linked to a club
  // club: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Club",
  //   required: true,
  // },
});

module.exports = mongoose.model("Event", EventSchema);
