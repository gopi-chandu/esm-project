const asyncHandler = require("../middlewares/async");
const Event = require("../models/Event");
// @desc get events
// @route GET /api/v1/events/
// @access Public
module.exports.getEvents = asyncHandler(async (req, res, next) => {
  const events = await Event.find();

  return res.status(200).json({ success: true, data: events });
});
// @desc get an event
// @route GET /api/v1/events/:eventId
// @access Public
module.exports.getEvent = asyncHandler(async (req, res, next) => {
  console.log(req);
  return res.status(200).json({ success: true, data: "course with id" });
});

// @desc Create an event
// @route POST /api/v1/events/
// @access Private
module.exports.createEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.create(req.body);
  return res.status(200).json({ success: true, data: event });
});

// @desc update an event
// @route PUT /api/v1/events/:eventId
// @access Private
module.exports.updateEvent = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  return res.status(200).json({ success: true, data: "course updated" });
});
// @desc delete an event
// @route DEL /api/v1/events/:eventId
// @access Private
module.exports.deleteEvent = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  return res.status(200).json({ success: true, data: "course deleted" });
});
