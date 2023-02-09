const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  capacity: {
    type: Number,
  },
//   photo will be added later for event
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
});

module.exports = mongoose.model("Event", EventSchema);
