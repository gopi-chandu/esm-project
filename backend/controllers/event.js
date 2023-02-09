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
  // console.log(req.params.eventId);
  const event = await Event.findById(req.params.eventId);
  // console.log(event);
  if (!event) {
    return res.status(200).json({ success: false, data: {} });
  }
  return res.status(200).json({ success: true, data: event });
});

// @desc Create an event
// @route POST /api/v1/events/
// @access Private
module.exports.createEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findOne({ title: req.body.title });
  if (!event) {
    event = await Event.create(req.body);
    return res.status(200).json({ success: true, data: event });
  }
  return res.status(400).json({ success: false, data: {} });
});

// @desc update an event
// @route PUT /api/v1/events/:eventId
// @access Private
module.exports.updateEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.eventId);
  // console.log(event);
  if (!event) {
    return res.status(200).json({ success: false, data: {} });
  }
  event = await Event.findByIdAndUpdate(req.params.eventId, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ success: true, data: event });
});
// @desc delete an event
// @route DEL /api/v1/events/:eventId
// @access Private
module.exports.deleteEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.eventId);
  // console.log(event);
  if (!event) {
    return res.status(200).json({ success: false, data: {} });
  }
  event = await Event.findByIdAndDelete(req.params.eventId);
  return res.status(200).json({ success: true, data: {} });
});
